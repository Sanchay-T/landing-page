# Verification protocol

Every section of every variation is proven, not assumed.
This file defines the loop, the matrix, the commands, and the report format the `/goal` evaluator will read.

## The loop for each section

1. Build the section for desktop and mobile together.
2. Screenshot it at every width in the matrix with the script below.
3. Look at every screenshot.
   Judge fit, overflow, clipped text, overlapping elements, illegible contrast, orphaned words, broken grid, and whether the section answers its buyer question.
4. Fix everything found in one batch.
5. Re-screenshot once and confirm.
6. Append one line to `docs/goal/STATUS.md`: `v3 / case-studies / PASS / 2026-09-07T03:12 / notes`.
7. Only then move to the next section.

Bounded passes: at most two fix rounds per section.
If a section fails twice, simplify the section rather than polishing it.

## Width and aspect matrix

| Name | Viewport | Why |
| --- | --- | --- |
| phone | 390 x 844 | iPhone class, portrait |
| phone-landscape | 844 x 390 | short viewport, hero must not trap |
| phone-small | 360 x 780 | Android budget class |
| tablet | 820 x 1180 | iPad portrait |
| tablet-landscape | 1180 x 820 | iPad landscape |
| laptop | 1280 x 800 | 13 inch class |
| desktop | 1536 x 864 | common Windows scale |
| desktop-large | 1920 x 1080 | full HD |
| ultrawide | 2560 x 1080 | 21:9, max-width containers must hold |

Common failures per section: hero copy overlapping media on phone-landscape, proof strips wrapping to three ragged rows on tablet, case study images losing their crop on ultrawide, nav collapsing incorrectly between 820 and 1280, sticky elements covering CTAs on phone, and footers with orphaned columns.

## Screenshot command

Use `agent-browser` in a named session, headless, against the dev server on port 3030.
Put the script at `scripts/shots.mjs` or a shell equivalent and keep it in the repo.

```bash
export AGENT_BROWSER_SESSION="$(agent-browser session id --scope worktree --prefix devonel)"
for v in v1 v2 v3 v4 v5; do
  for size in 390x844 844x390 360x780 820x1180 1180x820 1280x800 1536x864 1920x1080 2560x1080; do
    w=${size%x*}; h=${size#*x}
    agent-browser open "http://localhost:3030/$v?chrome=0"
    agent-browser viewport $w $h
    agent-browser wait --load networkidle
    agent-browser screenshot --full "docs/goal/shots/$v/$size.png"
  done
done
agent-browser close
```

Confirm the exact flag names with `agent-browser skills get core --full` before the first run and adjust the script, then keep the script as the single source of truth.
Also capture a per-section crop by scrolling to each section anchor and taking a viewport screenshot, saved as `docs/goal/shots/$v/$size-$section.png`.

## Interaction checks per variation

- Click every nav item and confirm the URL or scroll target changes and the target section is in view.
- Open every tab, accordion, and sub-page and confirm content is present.
- Tab through the page with the keyboard and confirm focus order matches visual order.
- Toggle `prefers-reduced-motion` and confirm no motion-only content disappears.
- Check the console for errors on every route.
- Confirm the switcher reaches all five variations from all five variations.

## Gates

```bash
npm run build
npm run lint
npx lighthouse http://localhost:3030/v1 --preset=perf --form-factor=mobile --quiet --output=json --output-path=docs/goal/lighthouse/v1.json
```

Record the performance score per variation in STATUS.md.
If Lighthouse is unavailable in this environment, say so explicitly in the report rather than skipping silently, and run `npx lighthouse --version` output into the transcript as evidence.

## Distinctness check

Produce `docs/goal/shots/contact-sheet.png` with the five heroes at 1280 wide stacked, and the five phone heroes side by side.
State in the report, for each pair of variations, one sentence on what makes them different.
If any pair needs more than one sentence to separate, rework the weaker one.

## STATUS.md format

```
# Status
## Plumbing
switcher / PASS / time / notes
## v1 <name>
hero / PASS / time / notes
proof / PASS / time / notes
...
## Gates
build / PASS / time
lint / PASS / time
lighthouse v1..v5 / 91 88 90 93 87
```

Update it after every section.
It is the durable memory across context compaction.
On every new turn, read STATUS.md first and continue from the first non-PASS line.

## Final report

Write `docs/goal/REPORT.md` and print its full contents in the transcript as the last action.
The evaluator only sees the transcript, so the printed report is the proof.
The report must contain:

1. A table with one row per variation and one column per canonical section, every cell PASS.
2. The width matrix results per variation, every cell PASS.
3. Build, lint, console, and Lighthouse results with the exact command output lines.
4. The distinctness statements.
5. Asset inventory: every generated image and video, its source prompt, size, and where it is used.
6. Anything skipped or blocked, stated plainly with the reason.
7. The literal line `ALL SECTIONS PASS` only if every cell is PASS, otherwise the literal line `INCOMPLETE` followed by the failing cells.
