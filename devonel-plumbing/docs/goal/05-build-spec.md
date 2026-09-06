# Build spec - devonel.com redesign, 5 variations

This is the contract the overnight agent builds against.
Read it fully before writing code.
Sibling docs carry the context: `01-business-brief.md` (what Devonel is, proof, voice), `02-codebase-and-stack.md` (plumbing to keep), `03-design-research.md` (references and the five directions), `04-copy-and-skills.md` (copy rules and installed skills), `06-verification-protocol.md` (how every section gets proven), `07-runway-assets.md` (image and video generation).

## Outcome in one sentence

When Sanchay wakes up he opens devonel.com locally, sees a switcher with buttons 1 to 5, clicks every button, every nav item, every tab and every sub-link, and every one of them is a finished, deployable, distinct landing page he would send to a prospect today.

## Hard rules

- Do not reuse any visual design, layout, copy, or component from the existing option-a to option-d pages or `components/marketing`.
  Keep only stack plumbing named as "keep" in `02-codebase-and-stack.md`.
- Every variation must be a complete landing page, not a hero plus placeholders.
  A section with lorem ipsum, a grey box, or a "coming soon" label is a failing section.
- Simple beats clever.
  Every section must justify its existence with the buyer question it answers.
- The five variations must be miles apart in look, type, palette, motion and hero concept.
  If two screenshots could be mistaken for the same brand system, one of them is wrong.
- The copy is shared in substance across variations and tuned in tone per variation.
  Facts, numbers, and client names come only from `01-business-brief.md`, never invented.
  Anything flagged confidential there never ships.
- No placeholder images.
  Every image or video is either generated through Runway (see `07-runway-assets.md`), a real screenshot of a shipped Devonel product, or a designed SVG or CSS composition.
- Ship a design system per variation, not ad-hoc CSS.
  Tokens, type scale, spacing scale, grid, and motion primitives live in one file per variation so a later tweak is one edit.
- Mobile is a first-class target, not a media-query afterthought.
  Build each section at 390 px width and 1440 px width at the same time.

## Git and deploy rules

- `main` on the `Sanchay-T/landing-page` remote is production for www.devonel.com through Vercel.
  Never commit to `main` and never push `main`.
- Work on branch `redesign/five-variations` created from `main` at the start.
- Commit a coherent slice after every completed section, message in the form `v3: case studies section`.
- After every completed variation, push the branch.
  Vercel builds a preview URL for the branch, which is not production.
  Read the preview URL from the push output or `vercel ls`, open it, run the matrix against it once, and record the URL in STATUS.md so Sanchay can forward it from his phone.
- Never merge, never open a pull request, never touch Vercel project settings.
- Commit only files inside this package plus `docs/goal/`.
  The parent repo worktree has unrelated dirty folders; never `git add -A` from the parent, always add explicit paths.

## Routes and switcher

- `/` renders the switcher landing: five large buttons labelled 1 to 5, each with the variation name and one-line thesis, plus a persistent mini-switcher visible on every variation page.
- `/v1` to `/v5` are the five variations.
- Each variation has its own nav with anchor links to every section plus sub-pages where the direction calls for them (for example `/v3/work/jewelo` for a full case study page).
- Every nav item, tab, accordion, and sub-link must resolve to real content.
  Dead links, `#` hrefs, and empty tabs are failing items.
- The mini-switcher is a fixed pill in the bottom-right with 1 to 5 and is excluded from screenshots used for design judgment by adding `?chrome=0`.
- Keep the old option routes reachable at `/legacy/option-a` etc only until the new set passes, then delete them in the final cleanup pass.

## Canonical section list

Each variation must cover every buyer question below.
Order and form may differ per direction, but no question may be skipped.

1. Hero: who we are, what we do, for whom, one primary CTA, one proof hook.
2. Proof strip: real products shipped, real clients, real numbers from the brief.
3. Services: the three to five things Devonel actually sells, phrased as outcomes.
4. Case studies: at least two full cases from the brief (Jewelo is mandatory), each with problem, build, stack, outcome, and a real visual.
5. How we work: the engagement model, phases, payment before phase, timelines, what the client gets each week.
6. Founders: Sanchay and Umayr, roles, where they are, why trust them.
7. Engagement or pricing: the honest framing from the brief, ranges if the brief supports them, otherwise "how a quote works".
8. Objections and FAQ: the five questions a prospect asks before paying.
9. Final CTA: one action, one channel, no form fields beyond what the brief says they use.
10. Footer: contact, location, legal minimum, switcher link.

## Copy requirements

- Follow the rules in `04-copy-and-skills.md` and load the installed copywriting skill before writing any headline.
- Headline test: a stranger reads only the hero and can say what Devonel does and who it is for.
- Every claim has a source line in `01-business-brief.md` or is removed.
- No buzzword stacks.
  Banned words: "cutting-edge", "seamless", "unlock", "empower", "revolutionize", "leverage", "synergy", "next-gen", "world-class".
- Reading level: short sentences, concrete nouns, verbs that describe delivery.

## Design system requirements per variation

- One `tokens.css` or equivalent with color, type, spacing, radius, shadow, motion tokens.
- One grid definition used by every section.
- Type scale with at most three families total across the five variations combined for load budget, variable fonts preferred, loaded through the existing font plumbing.
- Motion: one entrance primitive, one hover primitive, one scroll primitive per variation, all honoring `prefers-reduced-motion`.
- Light and dark handling decided per direction and applied consistently, not half-applied.

## Performance and quality gates

- `npm run build` exits 0.
- `npm run lint` exits 0.
- No console errors on any route at any tested width.
- Largest hero asset under 400 KB for images, under 4 MB for video, video muted, looped, `playsinline`, with a poster.
- Lighthouse performance 85 or above on mobile for every variation root, measured with the command in `06-verification-protocol.md`.
- Accessibility: every image has alt, every interactive element is keyboard reachable, contrast passes AA on body text.

## Delegation model

- The main session runs on Fable 5.1 and is the orchestrator only.
  Its tokens and context are precious, so it never edits code, writes copy, or generates assets.
- `.claude/agents/builder.md` is the workhorse: Opus 5 at xhigh effort, preloaded with the copywriting, cro, and frontend-design skills.
  Dispatch one section of one variation, or one plumbing item, per builder, and run independent builders in parallel.
- `.claude/agents/verifier.md` is the independent checker: Opus 5 at xhigh, read-only, re-screenshots and re-runs gates, returns PASS or FAIL with evidence.
  No section is marked PASS in STATUS.md until a verifier has passed it.
- The orchestrator reads verifier tables and screenshots, decides what to hand back, and writes STATUS.md and REPORT.md.
- If a builder fails the same section twice, the orchestrator simplifies the section brief before the third dispatch.

## Skills and precedence

- `copywriting` (coreyhaines31/marketingskills, 47k stars) is the copy authority.
  Load it before writing any headline, and load `cro` when deciding section order, friction, and trust-signal placement.
- `frontend-design` (anthropics/skills, 175k stars) is the visual authority and wins on any conflict with `impeccable`.
  Use `impeccable audit` only as a second-opinion pass after a variation is complete, never to redirect its direction.
- `seedance-video-director` governs every Runway call.
- `animate` or `emil-design-eng` may be loaded for a single motion primitive, not for page direction.

## Work order

1. Read all sibling docs and print a short plan to the transcript.
2. Build the shared plumbing: switcher, route scaffolding, screenshot script, status file.
3. Write `.claude/product-marketing.md` from `01-business-brief.md` (audience, offer, proof points, objections, voice) so the copywriting skill skips its intake interview, then write the master copy document `docs/goal/COPY.md` once, with per-variation tone notes.
4. Generate or collect assets per `07-runway-assets.md`.
5. Build variations one at a time, section by section, verifying each section per `06-verification-protocol.md` before moving on.
6. After each variation is complete, run the full matrix, fix, and record a PASS line in `docs/goal/STATUS.md`.
7. Run the distinctness check: one contact sheet with the five heroes side by side, judge, and rework any two that read as siblings.
8. Final cleanup: delete legacy routes, dead files, and unused assets, then run build and lint again.
9. Write the final report per `06-verification-protocol.md` and print it in full to the transcript.

## What "done" means

Done is not "the code exists".
Done is the checklist in `06-verification-protocol.md` showing PASS for every section of every variation at every width, the build and lint gates green, the report printed in the transcript, and nothing left for Sanchay to fix before sending the link to a prospect.
