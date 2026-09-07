# Status

Durable memory for the overnight run. ROUND 2 (started 2026-09-07T08:40 IST).
Read this first on every turn and resume from the first line that is not PASS.
Format: `item / PASS|FAIL|TODO / ISO time / notes`.

Round 1 (Broadsheet, Terminal, Nightshift, Swiss Signal, Console) reached 50/50 verifier PASS and was then rejected by Sanchay at 08:30:
"this is not a jewellery promotion, it is for Devonel, the agency that does the work; it looks like the client's landing pages; which agency website uses a terminal; create something unique post inspo, I don't want to look the same as others".
Round-1 ledger: docs/goal/STATUS-round1.md. Round-1 directions: docs/goal/03-design-research-round1.md. Round-1 code is in git history up to fa41426.
Round 2 directions (approved in principle 08:35): 1 Studio Dark, 2 Shader Light, 3 Scroll Story, 4 Bento SaaS, 5 Liquid Metal, each with a Devonel-specific twist; see docs/goal/03-design-research.md section 4 and docs/goal/03b-round2-brief.md once written.
Round 2 rules: Devonel is the subject, the client is a case study; no client product imagery in hero, proof or services; three.js and @paper-design/shaders-react allowed via components/ds/scene.tsx and shader-surface.tsx with static fallbacks; every other round-1 rule stands.

## Plumbing
branch redesign/five-variations / PASS / 2026-09-07T03:05 / created from main 4f67614, orchestrator-verified via git branch --show-current
switcher at / / PASS / 2026-09-07T03:03 / five 1-5 rows with name+thesis from variations.ts, neutral by design, shot clean at all 9 viewports verifier 2026-09-07T03:12 re-shot as shots/vfy-switcher, all 9 PNGs opened, no overflow/clip/overlap, console clean
route scaffolding v1..v5 / PASS / 2026-09-07T03:03 / (variations) route group, MiniSwitcher pill hidden on ?chrome=0, keyboard-reachable with aria-label per link verifier 2026-09-07T03:12 /v1../v5 200, pill 1-5+/ bottom-right at 390 and 1280 with 2 aria-current, click 4 -> /v4, Tab shows 2px ring on all 6 links, absent under ?chrome=0
screenshot script scripts/shots / PASS / 2026-09-07T03:03 / node scripts/shots.mjs <route> <label> [--sections], 9 viewports, per-label agent-browser session, console.txt gate verifier 2026-09-07T03:12 re-ran for / and /v3, exit 0, 9/9 captured, 0 errors 0 warnings
legacy moved to /legacy/* / SUPERSEDED / 2026-09-07T07:20 / interim step; app/legacy, components/marketing and unreferenced icons deleted in the final pass (see Gates: legacy routes deleted); /legacy/* now 404
.claude/product-marketing.md / PASS / 2026-09-07T02:57 / copywriting+cro intake, every line sourced to a brief section verifier 2026-09-07T03:12 EMAIL_TBD/WHATSAPP_TBD both gone, email is sanchay@devonel.com (13 hits, no other address), whatsapp config-gated empty, banned-word grep clean
docs/goal/COPY.md / PASS / 2026-09-07T02:57 / all 10 sections, 2 headline+2 CTA alternates each, per-variation tone notes verifier 2026-09-07T03:12 banned-word grep returns only the COPY.md:58 declaration line, no em dash, no confidential name, no currency
assets harvested public/media/jewelo / PASS / 2026-09-07T02:58 / 29 files, largest 173 KB verifier 2026-09-07T03:12 find -size +400k empty, 29 files confirmed, no filename or ASSET-INVENTORY alt text names the client brand
runway / UNAVAILABLE / 2026-09-07T02:58 / slots queued in ASSET-QUEUE.md

round 2 directions doc / TODO
3d and shader plumbing / TODO
switcher labels for round 2 / TODO
round 1 variation code removed / TODO

## v1 Studio Dark
hero / TODO
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

## v2 Shader Light
hero / TODO
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

## v3 Scroll Story
hero / TODO
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

## v4 Bento SaaS
hero / TODO
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

## v5 Liquid Metal
hero / TODO
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

## Distinctness
contact sheet / TODO
pairwise statements / TODO

## Gates
tsc / TODO
lint / TODO
build / TODO
console clean all routes / TODO
lighthouse v1..v5 / TODO
legacy routes deleted / PASS / 2026-09-07T07:20 / round 1 final pass: app/legacy, components/marketing, icon-192/512 deleted; /legacy/* 404; residue grep 0 (re-check at round-2 final gates)
REPORT.md printed / TODO

## Run notes
agents / NOTE / 2026-09-07T03:05 / .claude/agents builder+verifier not registered in this session; dispatching general-purpose on Opus with the same role prompts inlined; effort flag not settable via Agent tool
dev server / NOTE / 2026-09-07T03:05 / single shared next dev on :3030 started by orchestrator; builders must not restart it
fonts / NOTE / 2026-09-07T06:40 / four families in app/fonts.ts (Fraunces, Geist, Geist Mono, Space Grotesk) vs spec line 83 "at most three"; only Geist is preloaded, the rest are preload:false so each route fetches only the faces it renders (v4 loads Space Grotesk alone); kept for distinctness, stated as a deviation in REPORT
capture / NOTE / 2026-09-07T06:30 / agent-browser full-page stitch wraps past ~16400px tall (v4 at 360x780 is 20k px): 360 full pages repeat hero/proof at the bottom; verifiers judge 360 by section crops plus a scrolled 360x780 viewport, never the stitched full page

round 2 / NOTE / 2026-09-07T08:40 / directions rewritten after Sanchay's rejection; old variation folders are replaced wholesale by each new hero builder (rm -rf components/variations/vN and app/(variations)/vN/work before rebuilding) so no round-1 visual survives
