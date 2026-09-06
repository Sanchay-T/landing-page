# Goal prompt for the overnight run

## How to launch

1. Open a new Claude Code session in `devonel-plumbing` with this profile.
2. Enable auto mode and set effort to xhigh with `/effort xhigh` so the orchestrator itself reasons deeply while spending few tokens on execution.
   The two project subagents in `.claude/agents/` (`builder` and `verifier`) are pinned to `claude-opus-5` at `effort: xhigh`; the orchestrator dispatches them by name through the Agent tool.
3. Confirm `claude mcp list` shows the RunwayML connector as Connected, otherwise the agent falls back to SVG and product screenshots and queues the media slots.
4. Paste the block below after `/goal `.
   It is under 4,000 characters.
5. Leave the session open.
   Idle check-ins fire every 30 minutes then back off; the agent reads `docs/goal/STATUS.md` on every turn to survive compaction.

## The condition (paste after /goal)

```
Rebuild devonel.com as 5 distinct, complete, verified landing-page variations on branch redesign/five-variations, never touching main. You are the Fable 5.1 orchestrator; your tokens and context are precious, so you never write code, copy, or assets. All building goes to project subagent "builder" (Opus 5, xhigh), one section or plumbing item per dispatch, parallel when independent; every builder result is checked by project subagent "verifier" (Opus 5, xhigh) before you accept a PASS. You only read docs, plan, dispatch, judge evidence, and write STATUS.md and REPORT.md. First read docs/goal/05-build-spec.md then its sibling docs 00-07, and print a 15-line plan. On every later turn read docs/goal/STATUS.md first and resume from the first non-PASS line.

Done means all of the following are true and shown in the transcript:
1. / is a switcher with buttons 1-5; /v1../v5 each render a complete landing page covering all 10 canonical sections in 05-build-spec.md (hero through footer, 2+ real case studies incl. Jewelo) with no placeholder text, images, or dead links; every nav item, tab, accordion, and sub-page resolves to real content.
2. The variations are Broadsheet, Terminal, Nightshift, Swiss Signal, and Console per 03-design-research.md section 4, visually miles apart in type, palette, layout, motion, and hero; a five-hero contact sheet exists and the report gives one sentence per pair on what separates them.
3. Copy follows 04-copy-and-skills.md via the copywriting and cro skills; every fact, number, and client name traces to 01-business-brief.md with its section 9 defaults (client anonymised, no prices, Dubai and Mumbai, WhatsApp contact); nothing confidential ships; banned words absent (grep shown).
4. Zero visual reuse of the old option-a..d UI; legacy routes and dead files deleted in the final pass.
5. Each variation has its own tokens file, grid, type scale, and motion primitives honoring prefers-reduced-motion.
6. Every section of every variation has a verifier-backed PASS line in docs/goal/STATUS.md after screenshots at all 9 viewports in 06-verification-protocol.md (390 to 2560 wide incl. phone landscape) with no overflow, clipping, overlap, or contrast failures, max two fix rounds per section.
7. npm run build and npm run lint exit 0, no console errors on any route, hero images under 400KB and videos under 4MB muted with poster, Lighthouse mobile performance 85+ per variation or a stated reason it could not run.
8. Media comes from Runway (logged in docs/goal/ASSET-LOG.md), real Devonel product screenshots, or SVG/CSS; no fake logos, people, or dashboards; if Runway is unavailable, slots go to docs/goal/ASSET-QUEUE.md and pages still pass.
9. Branch committed per section and pushed after each variation; Vercel preview URL recorded in STATUS.md and checked at 390 and 1280; no merge, no PR, no push to main, no git add -A from the parent repo.
10. docs/goal/REPORT.md exists and was printed in full in the transcript: per-variation per-section PASS table, viewport matrix, exact build/lint/lighthouse output lines, distinctness statements, asset inventory, anything skipped with reasons, and the literal final line ALL SECTIONS PASS.

Constraints: frontend-design outranks impeccable on visuals; simple beats clever; mobile built alongside desktop; never invent facts; never deploy production; max 12 video and 30 image generations; a section that fails twice gets simplified. Each turn report sections dispatched, verified PASS count out of 50, and which subagents ran. Stop after 12 hours or 400 turns with an honest INCOMPLETE report if not done.
```

## Character count

Run `wc -c` on the fenced block to confirm it is under 4,000 before pasting.
The evaluator judges only what appears in the transcript, which is why the condition forces printed plans, printed grep results, and the printed final report.
