# Agentic Framework Playbook for Devonel

## Why Agentic Systems Matter for the Devonel Funnel

Devonel’s funnel promises operator-backed AI agents that stay accountable to KPIs. Delivering on that promise requires:

- **Multi-agent coordination** to combine lead enrichment, conversation handling, data hygiene, and analytics loops.
- **Realtime observability** so operators can inspect transcripts, branch logic, and performance regressions.
- **Composable tooling** that can bridge enterprise systems (HubSpot, Salesforce, Zendesk) with Devonel’s automation pods.

The frameworks below are prioritized for production readiness, transparency, and fit with Devonel’s service model.

## Framework Scorecard

| Framework | Strengths | Devonel Use Cases | Risks / Gaps |
| --- | --- | --- | --- |
| **ElevenLabs Agentic Voice API** | Native multimodal voice + conversation runtime; streaming synthesis with emotion control; built-in memory and tooling hooks. | Scroll-synced narration, post-demo follow-ups, live agent hand-offs with voice continuity. | Voice focus only; pair with workflow orchestrator for complex tool use. |
| **LangChain + LangGraph** | Graph-based control over tool sequences, built-in observability, wide connector ecosystem. | Lead routing automations, qualification agents that branch on CRM data, pre-call research pods. | Requires infra discipline; guard against agent loops. |
| **LlamaIndex (Agents + Observability)** | Index-first perspective for structured + unstructured data, configurable agent toolkits, evaluation dashboards. | Knowledge-grounded support copilots, CSAT drift monitoring, compliance answer auditing. | Works best when data is continuously synced into indexes. |
| **CrewAI** | Human-in-the-loop emphasis, role templates, Trello-like agent orchestration UI. | Operator pods coordinating outreach, follow-ups, and manual QA. | Smaller ecosystem; integrate logging yourself. |
| **Microsoft AutoGen** | Multi-agent conversational loops with hybrid human participation, strong for research tasks. | Brainstorming variants of outreach scripts, QA of marketing assets before publishing. | Azure-first; integrate with Devonel infra to avoid vendor lock-in. |
| **OpenAI Realtime / GPTs** | Fully hosted runtime with event streaming, `response.create` actions, and deployment UI. | Rapid prototyping of landing-page chat concierge, demo scripts, or pre-sales checklists. | Limited control over internal reasoning; export logs for compliance. |
| **Smolagents (Hugging Face)** | Lightweight Python agents with tool calling, great for glue code and evaluation harnesses. | Fast experimentation around evaluation metrics and regression testing. | Less opinionated; requires more scaffolding for production readiness. |

## Selecting Frameworks by Funnel Stage

### Top of Funnel (Hero → Proof)
- **Scroll Narration & Live Audio Hooks**: ElevenLabs Agentic Voice API can narrate each chapter as the visitor scrolls. Combine with section-level metadata so voiceover scripts stay updated.
- **Interactive Chat Concierge**: Deploy an OpenAI Realtime agent or LangGraph chat agent with Devonel operators supervising transcripts in Supabase.

### Middle of Funnel (Playbooks → Commit)
- **Use-Case Configurator**: LangGraph orchestrates CRM lookups, case study retrieval, and ROI modeling. Operators can inject overrides via CrewAI’s UI.
- **Agent-to-Operator Escalations**: Use ElevenLabs conversational agents for voice calls, then store transcripts in Supabase for operator review.

### Bottom of Funnel (Contact → CTA)
- **Proposal Assembly**: LlamaIndex agents summarize transcripts and integrate Supabase contact data to generate proposal drafts.
- **QA & Compliance**: Smolagents or AutoGen evaluate transcripts for compliance before sending them to clients.

## Integration Guardrails

1. **Centralized Data Layer**: Supabase acts as the canonical store for lead submissions, call transcripts metadata, and agent decisions. All frameworks should write audit logs here.
2. **Observation & Replays**: Use LangSmith (with LangChain) or LlamaIndex Observability dashboards. Mirror key telemetry (latency, success rates) into Supabase/PostHog to display in operator consoles.
3. **Deterministic Fallbacks**: Wrap each agent call in `Promise.race` with deterministic fallback copy so the marketing site never stalls waiting on AI.
4. **Versioned Playbooks**: Store each agent playbook revision in Git or Supabase `playbooks` table. Update landing page copy via MDX referencing the same IDs, ensuring narrative + agent logic stay aligned.
5. **Privacy & Compliance**: Redact PII before sending to third-party frameworks. Use Supabase Edge Functions or Next.js API routes to proxy secrets, keeping keys (OpenAI, ElevenLabs) server-side.

## Implementation Phasing

1. **Phase 0 – Foundation**
   - Finalize Supabase schema (`contact_submissions`, `agent_sessions`, `transcript_events`).
   - Wire logging + alerting (e.g., Logflare → Slack) for webhook errors.

2. **Phase 1 – Scroll Narration MVP**
   - Build SectionObserver hook on the marketing page.
   - Call ElevenLabs text-to-speech endpoint with per-section scripts.
   - Cache audio in Supabase storage or Vercel KV for fast playback.

3. **Phase 2 – Conversational Concierge**
   - Launch LangGraph assistant with Devonel toolset (CRM search, doc retrieval, Cal scheduling).
   - Feed transcripts into Supabase for operator QA.
   - Add “Operator is reviewing” fallback messages when AI confidence is low.

4. **Phase 3 – Ops Console**
   - Build dashboard (Next.js app router) that surfaces Supabase records, transcripts, and evaluation scores.
   - Integrate CrewAI or AutoGen for operator oversight tasks.

## Next Actions

- [ ] Confirm Supabase credentials in production and run migration for `contact_submissions`.
- [ ] Choose primary agent orchestration framework (LangGraph vs. LlamaIndex) based on operator needs.
- [ ] Pilot ElevenLabs narration on `ProofChapter` with one curated script before scaling site-wide.
- [ ] Draft operating procedures for transcript review cadence and compliance logging.

