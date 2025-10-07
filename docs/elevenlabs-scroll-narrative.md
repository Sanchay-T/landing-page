# ElevenLabs Scroll Narration Blueprint

This blueprint explains how to weave ElevenLabs’ agentic voice stack into the Devonel marketing site so visitors hear an adaptive narrative while they scroll.

## Experience Overview

1. **Pre-authored scripts**: Each section (Hero, Proof, Playbooks, Commit, Contact) has a matching narrative script with CTA cues.
2. **Scroll observer**: A React hook detects the active section, debounces rapid changes, and requests audio segments if not yet cached.
3. **ElevenLabs synthesis**: A server-only API route calls ElevenLabs Text-to-Speech (TTS) or Conversational AI endpoints with section metadata.
4. **Playback + UI sync**: Audio is preloaded into the browser via the Web Audio API. CTA buttons highlight or pulse while relevant narration plays.
5. **Operator overrides**: Scripts live in Supabase (`voiceover_scripts` table) so operators can update copy without code deployments.

## Backend Architecture

```mermaid
graph TD
  A[Visitor scrolls to section] --> B[Intersection Observer hook]
  B -->|requests| C[Next.js API /api/narration]
  C -->|fetches script| D[Supabase voiceover_scripts]
  C -->|calls| E[ElevenLabs API]
  E -->|audio/mpeg| C
  C -->|signed URL or base64| F[Client Player]
  F --> G[UI animations + CTA cues]
  F --> H[Optional analytics (Supabase events)]
```

### API Route Contract (`POST /api/narration`)

```json
{
  "section": "proof",
  "voiceId": "<uuid-from-elevenlabs>",
  "stylePreset": "compelling",
  "speed": 1.08
}
```

Response:

```json
{
  "audioUrl": "https://storage.devonel.ai/narration/proof-v3.mp3",
  "scriptVersion": "2025-10-07",
  "durationMs": 4280
}
```

### Supabase Tables

- **`voiceover_scripts`**
  - `id` (uuid)
  - `section_slug` (`hero`, `proof`, `playbooks`, `commit`, `contact`)
  - `script_markdown`
  - `voice_id` (from ElevenLabs)
  - `style_preset`
  - `pace_multiplier`
  - `last_reviewed_at`
  - `reviewed_by`

- **`narration_events`**
  - `id`
  - `session_id`
  - `section_slug`
  - `script_version`
  - `played_at`
  - `cta_clicked` (boolean)

## Implementing the API Route

1. Validate payload with Zod (`section`, `voiceId`, optional `style`, `speed`).
2. Fetch script for `section` from Supabase. If missing, return `404` so client can fall back to text captions.
3. Call ElevenLabs TTS endpoint:
   ```ts
   const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
     method: "POST",
     headers: {
       "xi-api-key": process.env.ELEVENLABS_API_KEY!,
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       model_id: "eleven_monolingual_v2",
       text: script,
       voice_settings: {
         stability: 0.42,
         similarity_boost: 0.82,
         style: stylePreset,
         speaking_rate: speed,
       },
     }),
   });
   ```
4. Store the resulting audio in Supabase Storage (`narration/{section}-{hash}.mp3`).
5. Insert a `narration_events` row for analytics.
6. Return signed URL + metadata to the client.

## Front-End Hook (`useScrollNarration`)

- Uses `IntersectionObserver` to find the active section.
- Throttles events to avoid spamming the API.
- Maintains an audio cache map keyed by `section + scriptVersion`.
- Exposes `play()`, `stop()`, and `isPlaying` for CTA components.
- Triggers CTA highlight (e.g., `RainbowButton` glow) when narration calls out an action.

## Accessibility & UX Considerations

- Provide on/off toggle for narration; remember preference via `localStorage`.
- Display captions sourced from the same script markdown.
- Respect reduced motion / reduced audio preferences.
- Fade background audio under narration and restore after playback.

## Ops + QA Checklist

- [ ] ElevenLabs voice + style approved by compliance.
- [ ] Scripts reviewed weekly; Supabase `last_reviewed_at` automation ensures stale copy triggers Slack alert.
- [ ] Monitor API latency; cache audio after first call and reuse for 24 hours.
- [ ] Instrument CTA click-through rate while narration plays vs. silent mode.

## Extending to Conversational Agents

1. **Use ElevenLabs Conversational AI** for real-time, bi-directional voice chats triggered from CTA modal.
2. **Bridge to LangGraph** for tool-calling: CRM lookups, Cal.com scheduling, knowledge base queries.
3. **Persist transcripts** in Supabase (`voice_transcripts`) and link them to `contact_submissions`.
4. **Hand-off to operators**: When the conversation confidence dips below threshold, alert the on-call operator via Slack with transcript summary.

