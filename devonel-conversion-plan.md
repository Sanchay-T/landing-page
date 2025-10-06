# Devonel Conversion Flow (Lean Chapter Plan)

## Snapshot
- Hero stays untouched; everything downstream preserves existing dark palette, typography, and box geometry.
- Narrative collapses into three scroll chapters — **Proof → Playbooks → Commit** — so the page feels intentional, not endless.
- Each chapter gets one signature motion component; supporting blocks stay mostly static to avoid animation fatigue.
- Nav update: add a slim pill group under the hero (`Proof · Playbooks · Commit`) that anchors to chapter headers without introducing tabs or separate pages.

## Chapter Overview
| Chapter | Sections | Signature Component | Supporting Components |
| --- | --- | --- | --- |
| Proof | Pain → Promise Bar, Email Ops Snapshot, Operator Advantage, Credibility Strip | `number-ticker` sweep through metrics | `animated-gradient-text`, `word-rotate`, `magic-card`, `border-beam`, `marquee` |
| Playbooks | Day-in-the-Life Timeline, Agent Bento, Process Loop, Stack Sync, Industry Fits (with nested win cards) | `animated-beam` tracing the journey | `bento-grid`, `magic-card`, `typing-animation`, `interactive-grid-pattern`, `blur-fade` |
| Commit | Engagement Paths + Compliance Notes, FAQ Shortlist, Final CTA + Operator Highlight | `shine-border` wrapping the CTA | `neon-gradient-card`, `number-ticker` (plan ROI), `typing-animation`, `pulsating-button`, `avatar-circles` |

---

## Chapter 1 · Proof

### 1. Pain → Promise Metrics Bar (immediately under hero)
- **Stage:** Awareness → Consideration
- **Components:** `animated-gradient-text`, `word-rotate`, `number-ticker`
- **Why:** Keep it three compact stat boxes that translate the hero promise into concrete outcomes ("Missed demos ↓", "Tickets resolved faster"). Gradient headline introduces urgency, `word-rotate` cycles the core pains, while a single `number-ticker` sweep counts up through results.

### 2. Email Ops Snapshot (existing email demo)
- **Stage:** Consideration
- **Components:** `magic-card`, `border-beam`, `text-animate`
- **Why:** Wrap the inbox mock in `magic-card` + `border-beam` to imply living product; layer one `text-animate` caption string below to narrate “Triage → Escalate → Resolve”. CTA stays a single `shiny-button` to request walkthrough; no extra sparkles to keep motion focused.

### 3. Operator-Led Advantage + Impact (merge Why Devonel + Stats panel)
- **Stage:** Proof
- **Components:** `animated-list`, `number-ticker`
- **Why:** Two-column layout: left is `animated-list` of differentiators, right stacks three `number-ticker` cards (agents launched, % tickets deflected, weeks to go-live). A testimonial quote sits below with static `avatar-circles` for credibility — no additional animation.

### 4. Credibility Strip (Trust bar)
- **Stage:** Proof
- **Components:** `marquee`, `icon-cloud`
- **Why:** Single horizontal band; top `marquee` cycles client logos, bottom `icon-cloud` floats system integrations. This is the only place icon-cloud appears to prevent repetition.

---

## Chapter 2 · Playbooks

### 5. Day-in-the-Life Timeline (new)
- **Stage:** Evaluation
- **Components:** `magic-card`, `animated-beam`, `typing-animation`
- **Why:** Horizontal journey from trigger → agent response → operator oversight → business win. `animated-beam` traces the line once; each step title appears with `typing-animation`. This is the chapter’s hero motion.

### 6. Agent Playbooks Bento (existing services grid)
- **Stage:** Evaluation
- **Components:** `bento-grid`, `magic-card`
- **Why:** Recompose services using `bento-grid`; tiles stay the same size but gain hover layers inside each `magic-card` for outcomes, no extra background animation. Highlight three primary playbooks plus governance toolkit tile.

### 7. Launch Playbook (existing process)
- **Stage:** Evaluation
- **Components:** `typing-animation`
- **Why:** Keep four cards in a row. Replace arrows with subtle dotted connector; use `typing-animation` for each step caption (“Week 1 — Discover”). No orbiting effect to keep motion budget tight.

### 8. Stack Sync (integrations section)
- **Stage:** Validation
- **Components:** `interactive-grid-pattern`, `globe`
- **Why:** Logos sit on top of soft `interactive-grid-pattern`; a central `globe` demonstrates always-on monitoring. Globe rotates slowly and pauses on hover; this is the only additional motion in the chapter besides the timeline beam.

### 9. Industry Fits + Results Mini-Cards (existing industries + condensed results)
- **Stage:** Validation
- **Components:** `blur-fade`, `number-ticker`
- **Why:** Keep five industry cards; on scroll they fade in using `blur-fade`. Beneath, place three compact `number-ticker` win cards (e.g., "Fintech → 3.4x demos") so the standalone Proof Board section is no longer needed.

---

## Chapter 3 · Commit

### 10. Engagement Paths + Compliance Notes (pricing)
- **Stage:** Decision
- **Components:** `neon-gradient-card`, `number-ticker`
- **Why:** Three pricing cards in `neon-gradient-card`. Within each, a small compliance checklist gets an inline shield icon; the top-right corner of the module carries a subdued `number-ticker` for ROI promise (e.g., “Launch → 30-day go-live”). No separate compliance section.

### 11. FAQ Shortlist
- **Stage:** Objection Handling
- **Components:** `typing-animation`
- **Why:** Keep top four questions in accordion; each question label animates in with `typing-animation`. Link “See all FAQs” to blog/support doc rather than expanding the page length.

### 12. Final CTA + Operator Highlight
- **Stage:** Conversion
- **Components:** `shine-border`, `pulsating-button`, `avatar-circles`
- **Why:** Final module gains `shine-border` outline. Inside, left column reiterates the CTA with a single `pulsating-button`; right column features an `avatar-circles` cluster with short bios (“Your operator team: Alicia, Tarek, Morgan”) instead of a separate spotlight section. No particles.

### 13. Footer
- **Stage:** Reinforcement
- **Components:** `scroll-progress`
- **Why:** Thin `scroll-progress` bar pinned to footer to encourage navigation; heart logo stays static.

---

## Chapter Anchors & Nav Cue
```
HEADER (fixed)
  ├─ Primary CTAs
  └─ Pill Nav: [Proof] [Playbooks] [Commit]

[Proof ▸]
   Pain → Promise → Email Ops → Operator Advantage → Credibility Strip

[Playbooks ▸]
   Timeline → Bento → Process → Stack Sync → Industry + Results

[Commit ▸]
   Engagement Paths → FAQ Shortlist → Final CTA/Operator → Footer
```

## Lean ASCII Flow
```
┌───────────────┐
│ HERO (fixed)  │
└──────┬────────┘
       ▼
┌──────────────────────────────┐
│ Proof Chapter Header         │
└──────┬───────────────────────┘
       ▼
│ Pain → Promise Metrics Bar │
│ Email Ops Snapshot         │
│ Operator Advantage + Stats │
│ Credibility Strip          │
└──────────────┬──────────────┘
               ▼
┌──────────────────────────────┐
│ Playbooks Chapter Header     │
└──────┬───────────────────────┘
       ▼
│ Timeline (beam)             │
│ Agent Bento Grid            │
│ Launch Process              │
│ Stack Sync                  │
│ Industry + Result Cards     │
└──────────────┬──────────────┘
               ▼
┌──────────────────────────────┐
│ Commit Chapter Header        │
└──────┬───────────────────────┘
       ▼
│ Engagement Paths + Notes    │
│ FAQ Shortlist               │
│ Final CTA + Operator Row    │
│ Footer w/ Scroll Progress   │
└──────────────────────────────┘
```

## Component Budget Summary
- `animated-gradient-text`, `word-rotate`, `number-ticker`, `magic-card`, `border-beam`, `marquee`, `icon-cloud`, `animated-beam`, `typing-animation`, `bento-grid`, `interactive-grid-pattern`, `globe`, `blur-fade`, `neon-gradient-card`, `shine-border`, `pulsating-button`, `avatar-circles`, `scroll-progress`.
- Everything else stays native Tailwind/Framer; no repeated use of `particles`, `dock`, or background-heavy effects to keep performance and focus tight.

---
Use this as the updated implementation guide before wiring anything up.
