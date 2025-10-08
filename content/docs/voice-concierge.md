# Devonel Voice Concierge Implementation Guide

This document explains how the embedded voice concierge on the Devonel landing page is wired up across ElevenLabs Conversational AI, Supabase, and the marketing intake flows. It also includes checklists to keep the experience production-ready as we evolve the agent.

---

## 1. System Overview

| Layer | Responsibility | Key Resources |
| --- | --- | --- |
| Client (Next.js) | Presents the floating "Operator concierge" widget, captures microphone permissions, renders transcripts, and lets operators correct structured fields before syncing. | `components/integrations/conversational-agent-widget.tsx` |
| ElevenLabs Conversational AI | Streams bidirectional audio + text for the agent that greets visitors, qualifies intent, and hands back transcripts. | `@elevenlabs/client`, `/api/conversation-token` |
| Supabase | Stores structured contact requests and raw conversation data for sales ops to review. | `/api/contact`, `/api/conversations`, tables `contact_intakes` & `conversation_sessions` |
| Cal.com CTA | Continues to offer immediate scheduling; session context is synced via `QUALIFIER_STORAGE_KEY` for consistent defaults. | `components/landing/cta-section.tsx`, `components/landing/contact-section.tsx` |

The widget attempts to auto-start within ~1.6 seconds of page load. If the browser blocks microphone access, we surface a Sonner toast instructing the visitor to press "Start concierge" manually.

---

## 2. Environment Variables

| Variable | Purpose | Notes |
| --- | --- | --- |
| `ELEVENLABS_API_KEY` | Server-side token for creating conversation sessions. | Keep scoped to Conversational AI; do **not** expose on the client. |
| `ELEVENLABS_AGENT_ID` | ElevenLabs agent configuration to load. | Configure greetings, instructions, & client tool hooks in the ElevenLabs UI. |
| `SUPABASE_URL` | Base URL for the Supabase project. | Required for both `/api/contact` and `/api/conversations`. |
| `SUPABASE_SERVICE_ROLE_KEY` | Service-role key used from the server routes to insert/upsert records. | Store in Vercel encrypted envs. Never expose client-side. |
| `CONTACT_WEBHOOK_URL` (optional) | Existing webhook fan-out for Slack/CRM notifications. | Still respected if present. |

Ensure these keys exist in Vercel/production before deploying. Locally, use `.env.local` (not committed) and run `pnpm dev` to verify connectivity.

---

## 3. Supabase Schema Expectations

```sql
create table public.contact_intakes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text not null,
  website text,
  headcount text not null,
  timeline text not null,
  focus text[] not null,
  message text not null,
  submitted_at timestamptz default now(),
  ip_address text,
  user_agent text
);

create table public.conversation_sessions (
  session_id uuid primary key,
  status text not null default 'initiated',
  summary text,
  lead_name text,
  lead_email text,
  lead_company text,
  lead_intent text,
  lead_headcount text,
  lead_timeline text,
  transcript jsonb,
  form_draft jsonb,
  metadata jsonb,
  last_event_at timestamptz default now(),
  inserted_at timestamptz default now()
);

alter table public.conversation_sessions enable row level security;
create policy "Allow service role" on public.conversation_sessions for all using (auth.uid() is null);
```

- The API uses PostgREST upserts with `on_conflict=session_id`, so ensure a unique constraint exists on `session_id`.
- Store the Supabase service-role key in the server runtime only; the client widget never touches Supabase directly.

---

## 4. Request Flow

1. **Visitor lands** on `/`. The widget preloads state from `sessionStorage` (`devonel-conversation-widget`).
2. The widget attempts to **start a session** by POSTing to `/api/conversation-token`. That handler fetches a short-lived ElevenLabs WebRTC token using `ELEVENLABS_API_KEY` + `ELEVENLABS_AGENT_ID`.
3. On success, we call `Conversation.startSession({ conversationToken, connectionType: "webrtc", …callbacks })`.
   - `onMessage` updates the transcript list, parsing simple cues (email, name, team size, timeline, intent).
   - Lead fields are persisted back into `sessionStorage` and `QUALIFIER_STORAGE_KEY` so the CTA + contact form auto-populate.
4. The widget exposes controls to **save snapshots** or **end & sync**. Both hit `/api/conversations`:
   - `status=in_progress` keeps the Supabase record warm while the conversation continues.
   - `status=completed` flushes transcripts, meta, and structured fields, then clears local cache.
5. The standard contact form keeps working. On submit, `/api/contact` writes to `contact_intakes` (and any downstream webhook).

If Supabase or ElevenLabs responds with a non-OK status, both routes return `502` to the client. The widget surfaces Sonner toasts and keeps state locally so the operator can retry.

---

## 5. Operational Checklists

### Daily QA

- [ ] Visit `/` in Chrome & Safari, ensure the agent prompt appears and the microphone permission request is triggered.
- [ ] Confirm transcripts land in Supabase (`conversation_sessions`).
- [ ] Submit the contact form with and without optional fields; verify a row appears in `contact_intakes` and the webhook (if configured) fires.
- [ ] Smoke-test Cal.com booking CTA (button + inline embed).

### Release Checklist

1. Update ElevenLabs agent prompt with current offers & promotions.
2. Run `pnpm exec tsx tests/contact-route.test.ts` and `pnpm exec tsx tests/conversation-routes.test.ts`.
3. Review Lighthouse for any regressions (`lighthouse-report.json`).
4. Deploy to preview, re-run the QA flow, and validate Supabase insertions.

---

## 6. Extending the Concierge

- **Client tools**: Mirror tools configured in ElevenLabs UI by passing a `clientTools` object to `Conversation.startSession`. Use this to invoke CTA modals or fetch CRM suggestions.
- **Summaries**: Pipe transcripts to a server-side LLM summarizer (e.g., Anthropic, OpenAI) inside `/api/conversations` before persisting to Supabase.
- **Calendar handoff**: When the agent detects readiness, update `QUALIFIER_STORAGE_KEY` with `priority` and auto-scroll to the Cal.com embed.
- **Analytics**: Attach Vercel Analytics custom events when conversations start/finish for funnel tracking.

---

## 7. Troubleshooting

| Symptom | Potential Cause | Fix |
| --- | --- | --- |
| Widget shows "Offline" after attempting to auto-start. | Browser blocked microphone permission on page load. | Sonner toast instructs the user to press the start button; ensure the page explains why audio access is needed. |
| `/api/conversation-token` returns 502. | Invalid ElevenLabs key/agent or expired token. | Rotate keys, confirm agent ID in ElevenLabs UI, redeploy with updated env vars. |
| Conversations not appearing in Supabase. | Missing table or RLS policy preventing inserts. | Run the schema snippet above and ensure the service-role key is used. |
| Contact form returning 502. | Supabase insert rejected. | Check `contact_intakes` table schema and logs; ensure service role key has rights. |

---

## 8. Next Steps & TODOs

- [ ] Implement richer NLP extraction (or ElevenLabs client tool callbacks) to auto-fill headcount/timeline with higher accuracy.
- [ ] Schedule cron job to push completed conversations into the CRM (HubSpot/Salesforce) via Supabase functions.
- [ ] Add automated Jest tests for the widget logic (mocking ElevenLabs) once we introduce dedicated hooks.
- [ ] Explore ElevenLabs "client tools" to trigger CTA scroll or schedule actions when the visitor expresses intent.
- [ ] Record a short Loom walkthrough for sales/operators demonstrating how to monitor the Supabase tables and follow up.
