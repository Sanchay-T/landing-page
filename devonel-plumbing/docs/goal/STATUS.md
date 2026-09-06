# Status

Durable memory for the overnight run.
Read this first on every turn and resume from the first line that is not PASS.
Format: `item / PASS|FAIL|TODO / ISO time / notes`.

## Plumbing
branch redesign/five-variations / PASS / 2026-09-07T03:05 / created from main 4f67614, orchestrator-verified via git branch --show-current
switcher at / / PASS / 2026-09-07T03:03 / five 1-5 rows with name+thesis from variations.ts, neutral by design, shot clean at all 9 viewports verifier 2026-09-07T03:12 re-shot as shots/vfy-switcher, all 9 PNGs opened, no overflow/clip/overlap, console clean
route scaffolding v1..v5 / PASS / 2026-09-07T03:03 / (variations) route group, MiniSwitcher pill hidden on ?chrome=0, keyboard-reachable with aria-label per link verifier 2026-09-07T03:12 /v1../v5 200, pill 1-5+/ bottom-right at 390 and 1280 with 2 aria-current, click 4 -> /v4, Tab shows 2px ring on all 6 links, absent under ?chrome=0
screenshot script scripts/shots / PASS / 2026-09-07T03:03 / node scripts/shots.mjs <route> <label> [--sections], 9 viewports, per-label agent-browser session, console.txt gate verifier 2026-09-07T03:12 re-ran for / and /v3, exit 0, 9/9 captured, 0 errors 0 warnings
legacy moved to /legacy/* / PASS / 2026-09-07T03:03 / option-a..d + options + _lib + schematic + animations under app/legacy, legacy.css scoped to its layout, all 5 routes 200 and console-clean verifier 2026-09-07T03:12 5 legacy routes 200, / carries none of hero--pinned/hp-headline/OPS BOARD/hello@devonel.studio while option-d carries all four
.claude/product-marketing.md / PASS / 2026-09-07T02:57 / copywriting+cro intake, every line sourced to a brief section verifier 2026-09-07T03:12 EMAIL_TBD/WHATSAPP_TBD both gone, email is sanchay@devonel.com (13 hits, no other address), whatsapp config-gated empty, banned-word grep clean
docs/goal/COPY.md / PASS / 2026-09-07T02:57 / all 10 sections, 2 headline+2 CTA alternates each, per-variation tone notes verifier 2026-09-07T03:12 banned-word grep returns only the COPY.md:58 declaration line, no em dash, no confidential name, no currency
assets harvested public/media/jewelo / PASS / 2026-09-07T02:58 / 29 files, largest 173 KB verifier 2026-09-07T03:12 find -size +400k empty, 29 files confirmed, no filename or ASSET-INVENTORY alt text names the client brand
runway / UNAVAILABLE / 2026-09-07T02:58 / slots queued in ASSET-QUEUE.md

## v1
hero / PASS / 2026-09-07T03:41 / masthead+front page; tokens.css is the whole v1 system (12-col grid w/ visible column rules, Fraunces opsz display + Geist labels, 3 motion primitives); shared lib/site.ts + components/ds ContactCTA/Mark landed; 9 viewports + hero crops in shots/v1-hero, console clean; CTA above fold at 390x844, 844x390 and 360x780; no 100vh; tsc+lint 0. Fixed: :where() reset (element reset was killing every component margin), classified support line rendered inline, CTA clipped 5px at 360x780. Motion is capture-safe by rule: entrance rises 8px with no fade and drawn figures keep a static underlay, because view() progress is frozen at scroll 0 in a full-page screenshot verifier 2026-09-07T03:41 re-ran scripts/shots.mjs as shots/vfy-v1-hero, opened all 9 hero crops + all 9 full pages: no overflow, clipping, overlap or headline orphan at any width; hScroll false 360-2560; 12 column rules held inside the 1280 shell at 2560 (666-1792 in a 640-1920 shell) and are display:none on the 1-col widths by design; pull-quote clears cta/story/ledger/folio at 820 and 1180 (rect intersection false). Primary CTA fully above the fold measured at scroll 0: 390x844 bottom 740/844, 360x780 753/780, 844x390 337/390. Contrast on paper #f6f1e7: deck 8.56, kicker 9.21, folio+ledger key+quote caption 5.26, classified label 16.6, classified support 8.56, navlink 8.56, headline 16.6 - all clear AA; axe 0 violations, its 3 incomplete color-contrast nodes measured by hand above. Copy: every nav+hero sentence traced to COPY.md section 1 or 10 (or a label); banned-word, confidential-string and em dash greps on rendered HTML and on v1 source all return nothing (regexes control-tested). Links: 3 hrefs, #hero resolves, 2x mailto:sanchay@devonel.com?subject=Brief%20for%20Devonel, zero "#". prefers-reduced-motion emulated: quote opacity 1, transform none, animation-name none, nothing disappears at 390x844 or 1280x800. Tab order Front page -> nav CTA -> hero CTA matches visual order, focus ring 2px #1d3a8a at 3px offset on all three. tokens.css 720 lines defines colour/type/space/grid/radius/shadow/motion tokens plus both reduced-motion blocks; no Newsreader, JetBrains Mono, Inter, #eef0eb, #0e1410 or #c8451c in v1, ds or site.ts; rendered faces are Fraunces and Geist. console.txt clean 0 errors 0 warnings at all 9. Note, not a defect: research 4 mentions a low-opacity paperTexture shader that this hero does not use.
proof / TODO
services / TODO
case-studies / TODO
process / TODO
founders / TODO
engagement / TODO
faq / TODO
final-cta / TODO
footer / TODO
matrix 9 viewports / TODO
interactions / TODO
preview url / TODO

## v2
(same rows as v1)

## v3
(same rows as v1)

## v4
(same rows as v1)

## v5
(same rows as v1)

## Distinctness
contact sheet / TODO
pairwise statements / TODO

## Gates
tsc / TODO
lint / TODO
build / TODO
console clean all routes / TODO
lighthouse v1..v5 / TODO
legacy routes deleted / TODO
REPORT.md printed / TODO

## Run notes
agents / NOTE / 2026-09-07T03:05 / .claude/agents builder+verifier not registered in this session; dispatching general-purpose on Opus with the same role prompts inlined; effort flag not settable via Agent tool
dev server / NOTE / 2026-09-07T03:05 / single shared next dev on :3030 started by orchestrator; builders must not restart it
