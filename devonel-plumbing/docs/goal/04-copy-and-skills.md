# 04 - Copy and skills

Stars checked on 2026-09-07 via `gh api repos/<owner>/<repo>`.
Ranking criterion is GitHub star count of the hosting repo, nothing else.

## Ranked table - copywriting and sales-funnel / landing-page copy

| # | Repo | Stars | Skill path | Covers | Install |
|---|------|-------|-----------|--------|---------|
| 1 | coreyhaines31/marketingskills | 47,452 | `skills/copywriting` (also `cro`, `copy-editing`, `offers`, `signup`, `popups`) | Conversion copy for landing, home, pricing, feature pages; headline formulas; page section templates; CTA rules; Human Action Model | `npx skills add coreyhaines31/marketingskills --skill copywriting -a claude-code` or copy `skills/copywriting` into `~/.claude-3/skills/` |
| 2 | wshobson/agents | 39,459 | `plugins/brand-landingpage`, `plugins/content-marketing` | Brand interview then Stitch-generated landing page; general content marketing | `/plugin marketplace add wshobson/agents` then `/plugin install brand-landingpage` |
| 3 | nowork-studio/notfair-plugin | 3,575 | `skills/google-ads-landing`, `skills/google-ads-copy`, `skills/sxo` | Ads-driven landing page and ad copy, SEO/GEO | `npx skills add nowork-studio/notfair-plugin` |
| 4 | ericosiu/ai-marketing-skills | 3,488 | growth / content / outbound skills | Growth experiments, pipeline, content ops; no dedicated landing copy skill | `npx skills add ericosiu/ai-marketing-skills` |
| 5 | aaron-he-zhu/aaron-marketing-skills | 2,734 | 120 skills as a plugin | Broad marketing staff; copy is one of many | `npx skills add aaron-he-zhu/aaron-marketing-skills` |
| 6 | zubair-trabzada/ai-marketing-claude | 2,611 | `skills/market-copy`, `skills/market-landing`, `skills/market-funnel` | Copy, landing page, funnel with parallel subagents; last push 2026-03 | `npx skills add zubair-trabzada/ai-marketing-claude` |
| 7 | kostja94/marketing-skills | 954 | 160+ skills | SEO, social, influencer, pages | `npx skills add kostja94/marketing-skills` |
| 8 | heliocosta-dev/revenue-centric-design | 676 | single skill | Conversion and behavioral-science principles for SaaS design | `npx skills add heliocosta-dev/revenue-centric-design` |
| 9 | Yuzzyuk/marketing-os | 476 | single skill, 14 modules | Audits, hook engine, copy | `npx skills add Yuzzyuk/marketing-os` |
| 10 | ominou5/funnel-architect-plugin | 79 | plugin | Full-stack sales funnel builder | `/plugin marketplace add ominou5/funnel-architect-plugin` |
| 11 | mikefutia/conversion-copywriter-skill | 9 | single skill | Harry Dry style landing, email, ad copy | copy dir |

Not eligible: obra/superpowers (282,371) and anthropics/skills (174,841) have no copywriting skill.

## Ranked table - landing page design / frontend design

| # | Repo | Stars | Skill path | Covers | Install |
|---|------|-------|-----------|--------|---------|
| 1 | anthropics/skills | 174,841 | `skills/frontend-design` | Distinctive, non-templated visual design; hero rules; typography; anti-AI-slop tells; plan-review-build-critique loop; UX copy rules | copy `skills/frontend-design` into `~/.claude-3/skills/` or `npx skills add anthropics/skills --skill frontend-design` |
| 2 | anthropics/claude-code | 144,262 | `plugins/frontend-design` | Same skill packaged as an official plugin | `/plugin install frontend-design@claude-code-plugins` |
| 3 | nextlevelbuilder/ui-ux-pro-max-skill | 125,498 | `.claude/skills/ui-ux-pro-max` (+ `design`, `ui-styling`, `design-system`, `brand`, `banner-design`) | Searchable design intelligence: 79 styles, 192 palettes, 74 font pairings, 119 UX rules, 22 stacks, python search CLI | `npm i -g ui-ux-pro-max-cli && uipro init --ai claude` |
| 4 | nexu-io/open-design | 94,446 | desktop app, not a skill | Open-source Claude Design alternative | n/a |
| 5 | wshobson/agents | 39,459 | `plugins/brand-landingpage`, `plugins/ui-design` | Brand-first landing page via Stitch | `/plugin install brand-landingpage` |
| 6 | vercel-labs/agent-skills | 30,907 | `skills/web-design-guidelines` | Review UI against Web Interface Guidelines | `npx skills add vercel-labs/agent-skills --skill web-design-guidelines` |
| 7 | google-labs-code/stitch-skills | 8,257 | multiple | Stitch MCP design skills | `npx skills add google-labs-code/stitch-skills` |
| 8 | nateherkai/scroll-craft | 2,079 | single skill | Premium scroll-driven websites | `npx skills add nateherkai/scroll-craft` |
| 9 | agiwhitelist/auteur | 1,023 | single skill | Directs a website like a film; generates assets | `npx skills add agiwhitelist/auteur` |
| 10 | Ilm-Alan/frontend-design | 118 | single skill | Eight aesthetic anchors | copy dir |
| 11 | 2389-research/landing-page-design | 15 | single skill | Vibe Discovery + anti-slop landing pages | copy dir |

## Picks

Copywriting pick: `coreyhaines31/marketingskills` -> `copywriting` (47,452 stars).
It is the highest-star repo on GitHub that ships a dedicated copywriting skill, and its description literally lists landing pages, hero copy, above the fold, CTA copy, and value proposition as triggers.
The sibling `cro` skill in the same repo is the natural add-on when the page structure, not just the words, needs work.

Landing / design pick: `anthropics/skills` -> `frontend-design` (174,841 stars).
It is the highest-star repo on GitHub that contains a frontend or landing page design skill.
Runner-up `nextlevelbuilder/ui-ux-pro-max-skill` (125,498) is the highest-star repo that is itself a design skill, and it is worth adding later if the agent needs palette or font-pairing lookups; it is 29 MB with a python search CLI, so it was not installed tonight.

## Install status

Installed 2026-09-07 by copying skill folders into `/Users/sanchay/.claude-3/skills/`.
No existing skill was modified.

- `/Users/sanchay/.claude-3/skills/copywriting/SKILL.md` - from coreyhaines31/marketingskills at commit 5b2c000, with `references/copy-frameworks.md`, `references/natural-transitions.md`, `evals/evals.json`.
- `/Users/sanchay/.claude-3/skills/frontend-design/SKILL.md` - from anthropics/skills at commit 41bbe19, with `LICENSE.txt`.

Already installed and relevant, one line each:

- `impeccable` (v4.2.1) - design director skill covering websites, landing pages, dashboards, and components, with commands like audit, polish, bolder, quieter, typeset, and live browser iteration.
- `emil-design-eng` - Emil Kowalski's philosophy on UI polish, component design, animation decisions, and the invisible details that make software feel great.
- `apple-design` - Apple's fluid-interface approach translated to the web: springs, gestures, momentum, materials, typography, reduced motion.
- `animate` - builds one animation from scratch by deciding whether to animate, purpose, tool, properties, curve, duration, interruption, and exit.
- `prototype` - builds several genuinely different versions of one UI piece behind a visual picker; explicit invocation only.
- `pick-ui-library` - picks the right frontend library for a task from a curated opinionated list; explicit invocation only.
- `seedance-video-director` - plans, prompts, generates, and evaluates Seedance 2.0 videos through the Runway MCP.

Overlap note: `frontend-design` and `impeccable` both cover landing page visual design; `frontend-design` is the shorter, stars-validated one and `impeccable` is the deeper toolkit.

## Copy rules checklist - distilled from the copywriting skill

Headline

- Headline carries the single most important message and the core value proposition; specific beats generic.
- Draft with formulas: "{Outcome} without {pain}", "Never {unpleasant event} again", "The {category} for {audience}", "Stop {pain}. Start {pleasure}.", "{Outcome} in {timeframe}", "The {category} that {differentiator}", "{Number} {people} use {product} to {outcome}", "Finally, {category} that {benefit}".
- Run every candidate through the "Now you can..." test; keep it only if the prefixed line is both compelling and true.
- Include a number, timeframe, or concrete detail whenever one exists.
- Match the headline to the ad or traffic source that sent the visitor.
- Subheadline expands the headline with specificity in 1-2 sentences max.

Above the fold

- Hero contains headline, subheadline, one primary CTA, a supporting visual, and optionally a social proof bar.
- A visitor must understand what this is and why they should care within 5 seconds.
- Structure the hero as a transformation: current discomfort, better vision, path to action (Human Action Model); miss one beat and the reader stalls.
- Name the discomfort in the reader's own words so they think "that's exactly me".
- Primary CTA is visible without scrolling.

Proof placement

- Put social proof directly under the hero as a bar: recognizable logos, one key metric, star rating with count, or a short quote.
- Place trust signals near every CTA and immediately after benefit claims.
- Testimonials need a specific result, before/after context, and name plus role plus company; photos when possible.
- Reject testimonials that only say "great product", "love it", or "easy to use".
- Case study snippets follow problem, solution, results with real numbers.
- Never fabricate statistics or testimonials.

Page structure

- Strong page order: hero, social proof bar, problem, how it works (3 steps), 2-3 key benefits, testimonial, use cases, comparison, case study, FAQ, final CTA with guarantee.
- Compact ad landing page: hero, proof bar, 3 benefits, testimonial, 3-step how it works, final CTA with guarantee.
- One idea per section; each section advances one argument down the page.
- Landing page has a single message and a single CTA; complete the whole argument on one page.
- Problem section opens with recognition ("If you're like most {role}...") then names the frustration, the time or money wasted, and the impact.
- Each benefit block is headline (outcome), body (how, 1-2 sentences), proof (number or quote).
- How it works is 3-4 numbered steps, each a simple verb plus the outcome the step delivers.
- Use 3-5 benefits, never 10.

CTA rules

- CTA formula: action verb + what they get + qualifier if needed ("Get the Complete Checklist", "See Pricing for My Team").
- Avoid "Submit", "Sign Up", "Learn More", "Click Here", "Get Started".
- Button copy communicates value, not just action.
- Repeat the primary CTA at key decision points and again in the final section.
- Final CTA section recaps the value proposition, repeats the CTA, and adds risk reversal (guarantee, free trial, cancel anytime).

Objection handling

- Address price/value, "will this work for my situation", implementation difficulty, and "what if it doesn't work".
- Handle objections with a 5-10 question FAQ, a guarantee, a comparison to the status quo or competitors, and process transparency.
- Add a "built for {role}" or use-case block so visitors can self-identify.
- Match the value prop to the reader's risk tolerance (Perception Gap): speed and novelty sell to early adopters and alarm the risk-averse; segment rather than average.

Style and what to avoid

- Clarity over cleverness; clearer copy is associated with +81% conversions, 38% shorter sales cycle, 28% lower CAC, 175% more referrals.
- Benefits over features, specifics over vagueness, customer language over company language.
- Simple words ("use" not "utilize"), active voice, no qualifiers ("almost", "very", "really"), no exclamation points.
- Ban buzzwords: "streamline", "optimize", "innovative", "seamless", "powerful platform".
- Remove friction: fewest form fields, clear next step, no unnecessary required info, mobile checked.
- Deliver copy by section with 2-3 headline and CTA alternatives and a one-line rationale each.
