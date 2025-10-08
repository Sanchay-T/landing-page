# Agentic Framework Reference for Devonel

This playbook catalogues the leading agent orchestration frameworks and how they map onto Devonel's operator-led automation strategy. Use it to decide when to pair ElevenLabs voice experiences with multi-agent workflows, data planes, or compliance guardrails.

---

## 1. Evaluation Criteria

When we assess a framework for production use, consider:

1. **Loop Control & Observability** – Does it expose a finite-state machine, graph, or debugger to keep operators "in the loop"?
2. **Tooling Depth** – Native connectors for CRMs, Supabase, Cal.com, knowledge bases, etc.
3. **Guardrails** – Memory, policy enforcement, and human override hooks.
4. **Scalability** – Concurrency, deployment model, latency.
5. **Voice/Multimodal Fit** – Can it interact cleanly with ElevenLabs' conversational agents?

---

## 2. Framework Snapshots

### 2.1 LangGraph (LangChain)

- **Core Idea**: Declarative agent workflows built as graphs with explicit nodes, edges, and conditional branching.
- **Strengths**:
  - Mature ecosystem and tooling (LangSmith) for monitoring, dataset replay, and evaluation.
  - `Supergraph` pattern works well for orchestrating sales → success → support handoffs.
  - Supports streaming events and human-in-the-loop checkpoints (`Command` pattern) we can expose to operators.
- **Usage with ElevenLabs**:
  - Use LangGraph to manage backend state (qualification steps, CRM enrichment) while ElevenLabs handles the conversational front end.
  - Emit context updates back to the voice concierge through `/api/conversations` → Supabase → widget sync.
- **When to choose**: Complex funnels that need deterministic state charts, A/B testing across agent policies, or heavy telemetry.

### 2.2 AutoGen (Microsoft)

- **Core Idea**: LLM "characters" that converse with each other, optionally supervised by a human proxy.
- **Strengths**:
  - Rich conversation logs and configurable speaking styles.
  - Quick to prototype cross-functional loops (e.g., Researcher ↔ Planner ↔ Closer).
- **Considerations**:
  - Requires custom scaffolding for persistence and guardrails; not as production-focused as LangGraph.
  - Voice support is indirect—pipe AutoGen outputs into ElevenLabs as the agent's speaking script.
- **When to choose**: Early-stage experiments or R&D where we need multiple personas brainstorming before handing off to the live operator.

### 2.3 CrewAI

- **Core Idea**: Role-based agents collaborating on "missions" with shared objectives and memories.
- **Strengths**:
  - Simple YAML configuration for roles/tasks, making it accessible to operations folks.
  - Built-in memory store integrations (Redis, Pinecone) to retain call history.
  - Mission checkpoints map nicely to Devonel's Proof → Playbook → Commit narrative.
- **Usage Notes**:
  - Extend `mission callbacks` to push intermediate data to Supabase so the voice concierge can surface it live.
  - Combine with ElevenLabs client tools for interactive content (show slides, trigger Calendly/Cal.com flows).

### 2.4 OpenAI Realtime API (Assistants)

- **Core Idea**: Persistent sessions that stream audio, text, and tool invocations with low-latency WebRTC.
- **Strengths**:
  - Native support for tool invocation, retrieval, and human interrupts.
  - Pairs directly with ElevenLabs if we want to synthesize the Realtime assistant's audio using our own voice.
- **Usage Notes**:
  - Keep Realtime API as the "reasoning" core, with ElevenLabs focusing on the voice persona and front-end UX.
  - For compliance, store transcripts in Supabase just like the concierge flow for unified auditing.

### 2.5 LlamaIndex Agents

- **Core Idea**: Data-aware agents with retrieval-augmented generation and graphs.
- **Strengths**:
  - Excellent for knowledge-base heavy pods (support, success) where transcripts need to cite SOPs.
  - Can mount Supabase/Postgres as a vector store; align with `conversation_sessions` for unified context.
- **Usage Notes**:
  - Use LlamaIndex to orchestrate knowledge retrieval. Send the curated answer back to ElevenLabs as `clientTools.displayMessage` or as a spoken response.

### 2.6 Guardrails.ai / RailGuard

- **Purpose**: Policy enforcement and hallucination reduction.
- **Integration**:
  - Wrap outbound ElevenLabs responses (text prior to TTS) in guardrail checks.
  - Log violations to Supabase so operators can review in the same dashboard.

---

## 3. Suggested Architecture Patterns

### 3.1 Voice-First Qualification Loop

1. ElevenLabs concierge greets the visitor, stores transcripts via `/api/conversations`.
2. A LangGraph workflow processes the transcript asynchronously:
   - Node A: Identify persona & urgency.
   - Node B: Trigger CRM enrichment (Clearbit/Apollo) using extracted email.
   - Node C: Decide between auto-booking (Cal.com API) vs. operator follow-up.
3. Update Supabase with decision + metadata. The widget can poll or subscribe (via Supabase realtime) to show status in-line.

### 3.2 Agent Escalation to Human Operator

- Use ElevenLabs `clientTools` to emit an `escalateToHuman` event when confidence < threshold.
- Supabase function inserts a task into the operators' queue (e.g., `operator_handoffs` table) and triggers Slack/Teams notifications.
- The widget flips to "handoff" mode, embedding a live call or scheduling interface.

### 3.3 Conversational Commerce

- Pair CrewAI missions with ElevenLabs for guided demos.
- Use the widget to capture SKU interest, quantity, or integration details.
- Persist structured cart data in Supabase; sync with payment provider (Stripe checkout) after operator approval.

---

## 4. Roadmap Recommendations

| Horizon | Initiative | Notes |
| --- | --- | --- |
| 0-2 weeks | Finalize Supabase dashboards for `conversation_sessions` and `contact_intakes`. | Build SQL views scoring lead quality, SLA timers, and agent accuracy. |
| 2-4 weeks | Integrate LangGraph orchestration for post-call enrichment. | Start with simple DAG (extract → enrich → decision) before adding multi-agent loops. |
| 4-6 weeks | Roll out guardrail layer (Guardrails.ai or custom policies). | Gate all outbound ElevenLabs responses through policy checks for compliance-sensitive verticals. |
| 6-8 weeks | Launch CRM sync + analytics pipeline. | Use Supabase Functions or Edge Functions to push leads into HubSpot/Salesforce hourly. |
| 8+ weeks | Experiment with AutoGen brainstorming pods for upsell scripting. | Feed outputs back into Playbooks chapter content and concierge messaging. |

---

## 5. Operational To-Dos

- [ ] Document ElevenLabs agent prompt, voice, and tool configuration in Notion; update when marketing copy changes.
- [ ] Stand up Supabase Row Level Security policies for analytics roles (read-only dashboards for leadership).
- [ ] Create unit tests for `extractLeadClues` once we gather more transcripts—capture edge cases (nicknames, multiple emails, etc.).
- [ ] Add monitoring to `/api/conversation-token` (Vercel log drains or Sentry) to catch rate limits early.
- [ ] Build a "Replay" view: use Supabase to render transcripts chronologically with operator annotations for coaching.

---

## 6. Helpful Resources

- [ElevenLabs Conversational AI Docs](https://elevenlabs.io/docs/agents-platform/overview)
- [LangGraph Quickstart](https://python.langchain.com/docs/langgraph)
- [CrewAI Documentation](https://docs.crewai.com/)
- [AutoGen GitHub](https://github.com/microsoft/autogen)
- [Supabase PostgREST Upsert Guide](https://supabase.com/docs/guides/database/postgrest#upsert)
- [Guardrails.ai](https://www.guardrailsai.com/)

Keep this reference alongside the `voice-concierge.md` implementation guide so the engineering + ops pod can stay aligned when we iterate on the funnel.
