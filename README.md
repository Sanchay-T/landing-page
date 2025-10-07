# Devonel Marketing Site

A Next.js 15 landing experience for Devonel’s operator-led AI agent services. The site emphasizes revenue outcomes, funnels prospects through proof and playbook content, and captures leads via a validated contact form backed by Supabase and optional webhooks.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19
- **Styling**: Tailwind CSS 4 + Magic UI components
- **Forms**: React Hook Form + Zod validation
- **Persistence**: Supabase (Postgres + Storage) for contact submissions and future agent telemetry
- **Scheduling**: Cal.com embed via `@calcom/embed-react`
- **Notifications**: Optional webhook (Slack, Zapier, etc.) configurable via environment variable

## Environment Variables

Create a `.env.local` file (not committed) and populate the following secrets:

```bash
# Required for storing submissions
SUPABASE_URL="https://<project>.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="service-role-key-with-insert-permissions"

# Optional: expose booking URL if you want to override the default Cal.com link
NEXT_PUBLIC_BOOK_CALL_URL="https://cal.com/devonel/strategy-call"

# Optional: deliver submissions to Slack/Zapier/etc.
CONTACT_WEBHOOK_URL="https://hooks.slack.com/services/..."

# Optional: used by ElevenLabs narration/conversational agents (server only)
ELEVENLABS_API_KEY="sk_elevenlabs..."
```

> **Note:** The service role key is only used inside API routes. Do **not** expose it to the browser. The marketing site will operate without the Supabase variables in local development, but submissions will only be logged to the database when the credentials are present.

## Database Schema

Run the following SQL migration inside Supabase to support the contact form and future narration analytics:

```sql
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text not null,
  website text,
  headcount text not null,
  timeline text not null,
  focus text[] not null,
  message text not null,
  submitted_at timestamptz not null,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_submitted_at_idx
  on public.contact_submissions (submitted_at desc);
```

Optional tables for the ElevenLabs narration blueprint are described in `docs/elevenlabs-scroll-narrative.md`.

## Local Development

```bash
pnpm install
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Useful Scripts

- `pnpm build` – Production build
- `pnpm start` – Start production server
- `pnpm lint` – ESLint checks
- `pnpm test:contact` – Contract test for the contact API route

## Contact Form Flow

1. The React Hook Form in `components/landing/contact-section.tsx` validates user input with `contactFormSchema`.
2. `/api/contact` deduplicates focus areas, enriches metadata (timestamp, IP, UA), stores the record in Supabase, and optionally forwards it to `CONTACT_WEBHOOK_URL`.
3. Success and error states are surfaced via Sonner toasts so prospects understand whether their submission landed.

## Agentic Roadmaps

Detailed playbooks for integrating ElevenLabs narration and evaluating third-party agentic frameworks live in `docs/`:

- `docs/agentic-frameworks-playbook.md`
- `docs/elevenlabs-scroll-narrative.md`

Use these guides when building the immersive scroll narrative and operator consoles that will go live after launch.

