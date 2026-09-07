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

round 2 directions doc / PASS / 2026-09-07T08:55 / docs/goal/03-design-research.md section 4 rewritten (5 directions with Devonel-specific twists, 5x5 matrix, section 5 risks) + docs/goal/03b-round2-brief.md; orchestrator read section 4 in full and accepted; Archivo accepted as fifth family for its width axis; Bento outline cells must still carry full service copy
3d and shader plumbing / PASS-BUILDER / 2026-09-07T08:17 / deps pinned exact and confirmed resolving from devonel-plumbing/node_modules (not the parent): three@0.182.0 MIT, @react-three/fiber@9.7.0 MIT, @react-three/drei@10.7.8 MIT, @paper-design/shaders-react@0.0.80 Apache-2.0 (+ @paper-design/shaders@0.0.80). three is deliberately 0.182.0, not 0.185.1: THREE.Clock was deprecated in r183 and fiber 9.7.0 still builds one per canvas, which prints a console warning on every 3D route. Components: lib/motion.ts (useReducedMotion SSR-safe via useSyncExternalStore, useInView, useDocumentVisible), lib/webgl.ts (useRenderGate -> pending|allow|deny), components/ds/scene.tsx (client wrapper, next/dynamic ssr:false, static fallback layer, GLBoundary) + scene-canvas.tsx (frameloop=never driven by own rAF, DPR capped 1.5, fps capped 60, pauses off-screen and on visibilitychange, webglcontextlost -> fallback), components/ds/shader-surface.tsx (+ shader-surface-gl.tsx, MeshGradient, colors/speed/distortion/swirl/grain, CSS --shader-c0..N gradient fallback built from the same colours) and components/ds/gl-boundary.tsx. Gates: npx tsc --noEmit exit 0 (also exit 0 against a temporary usage file exercising <Scene> with r3f intrinsics and <ShaderSurface>, then deleted); CI=1 npm run lint exit 0 No ESLint warnings or errors; NEXT_BUILD_DIR=.next-build npm run build exit 0 with / at 172 B / 105 kB and shared 101 kB, byte-identical to the pre-change baseline including chunk hashes, so 0 KB added to every route. node -e require.resolve check printed all five packages under devonel-plumbing/node_modules; package-lock.json carries all five with versions and licences. Runtime proof came off a throwaway copy of the package in the agent scratchpad (a demo route under app/ is forbidden) with one /ds-probe route: route 3.15 kB / 105 kB first load, shared still 101 kB, three 721 KB raw + fiber 148 KB + shaders 25 KB all in async chunks. In agent-browser at 1280x800 and 390x844: 2 canvases mounted, 0 console messages, 0 page errors, no horizontal overflow, both surfaces labelled; under `set media reduced-motion`: 0 canvases, no three chunk fetched, both fallbacks kept role=img and the shader fallback painted its CSS gradient. Trap recorded in scene.tsx and ASSET-LOG: a statically imported drei scene put 239 kB in the route's first-load JS; behind next/dynamic it rendered identically at 3.13 kB / 105 kB. docs/goal/ASSET-LOG.md has the Round 2 dependencies section. Dev server on :3030 was not restarted and needs no restart until a route first imports these.
switcher labels for round 2 / PASS-BUILDER / 2026-09-07T08:17 / app/(variations)/variations.ts now reads Studio Dark, Shader Light, Scroll Story, Bento SaaS, Liquid Metal with the one-line theses verbatim from 03-design-research.md section 4; ids v1..v5, slugs, hrefs and the export shape unchanged, so app/page.tsx and mini-switcher.tsx needed no edit; curl / shows each of the five names 4 times (heading, aria-label, and both switcher rows). Fifth family wired in the same pass: Archivo in app/fonts.ts as --font-archivo with axes:["wdth"], preload false, swap, added to fontVariables (root layout already spreads that, so app/layout.tsx is untouched); role --font-width in globals.css @theme, comments now say five families; served /_next/static/css/app/layout.css has @font-face Archivo with font-weight 100 900 and font-stretch 62% 125%, so v3 can set wdth 70 and v5 wdth 125 from one file
round 1 variation code removed / PASS-BUILDER / 2026-09-07T08:17 / deleted components/variations/v1..v5 (65 files, whole directory tree incl. components/variations itself) and app/(variations)/v1..v5/work/jewelo/page.tsx (5 sub-pages, work/ dirs removed); each app/(variations)/vN/page.tsx is now a name-only server component that reads getVariation from variations.ts and renders an h1 plus a back link, no placeholder copy. Gates: npx tsc --noEmit exit 0, CI=1 npm run lint exit 0 (No ESLint warnings or errors); curl / 200, /v1../v5 200, /vN/work/jewelo 404 for all five. grep -rnE 'v1-|v2-|v3-|v4-|v5-|--v1|--v2|--v3|--v4|--v5' app components = 0 hits, and 0 hits for the round-1 names and V1..V5 component prefixes. Stale .next/types and .next-build/types for the deleted work routes had to be removed by hand or tsc keeps failing on them. Left in place: app/(variations)/scaffold.tsx, already unreferenced before this pass and outside the builder allowlist - delete it when someone owns that file

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
hero / PASS-BUILDER / 2026-09-07T08:40 / Files: components/variations/v4/{tokens.css,sections.ts,nav.tsx,hero.tsx,index.ts} and app/(variations)/v4/page.tsx (stub replaced). HEADLINE: sanctioned COPY.md alternate A, "The studio that ships before it pitches." The written hero headline is 56 characters and sets to three lines at 56px in the 616px copy column, and this direction is specified as a two-line headline; the alternate measures 2 lines at 390, 360, 844, 820, 1180, 1280 and 2560 (spec says 3 lines at 390 - it sets to 2 at the specified 32px, which is fewer, not more). The sixteen-day fact it gives up is carried by the board: the figure cell prints 16 and the live cell prints 27 Aug 2026. Eyebrow "AI product studio and growth partner" is kept above it so a cold visitor still gets the category. Subhead, CTA (Send your brief via ContactCTA/lib/site.ts, resolves to mailto today) and support line "Paid discovery, fixed scope, no forms." are verbatim COPY.md section 1. AUTHORED LABEL: the legend "cell size is how much of it is live" is not in COPY.md; used verbatim from 03-design-research.md section 4 direction 4 as an authored label, the one string on the page not sourced to COPY.md. Also authored as renderings rather than new facts: the figure cell prints the numeral 16 with the caption "days from spec to live" (COPY.md count "Sixteen days from spec to live", set as a numeral because the direction requires Geist Mono figures on the board), and the quote uses curly quotation marks. TWIST: the four-cell preview is a strict honesty staircase measured at 1280 - live 2x2 203x360 (73k px2, filled, cobalt top rule, jade dot, "One product live", client quote and Shipped 27 Aug 2026) > in build 3x1 309x176 (54k, reduced fill under a 135deg hatch, exact status line "Status: in progress, discovery started 25 Aug 2026") > outline-only service 2x1 203x176 (36k, no fill, 1px border, full COPY.md service copy in ink, nothing dimmed) > figure 1x1 98x176 (17k). Live cell is the largest at every width (390/360 single column: live 240px tall vs 180px for the rest; 844: 313x308 vs 473x150; 820: 304x308). No icons, no client imagery, no logo strip. MEASUREMENTS: CTA bottom / viewport height - 390x844: 425 (support line 459); 360x780: 425 (459); 844x390: 321 (support 310, laid out beside the button by a max-height 520px rule); 820x1180: 395; 1280x800: 457; 2560x1080: 465. All above the fold. documentElement.scrollWidth equals viewport width at 360, 390, 844, 820, 1280 and 2560, so no horizontal overflow anywhere; board preview is 320px wide inside 320px of content at 360. At 2560 the canvas is full bleed and the 1280 grid is centred, nav bar included. h1 is 32px at 390/360, 28px at 844x390, 37.6px at 820, 52.8px at 1180, 56px at 1280 and up. SYSTEM: tokens.css is scoped under .v4 with an append-only numbered-block convention and an index; palette is the seven specified colours plus five color-mix derivations; NO shadow token exists and a DOM sweep found 0 elements with box-shadow; cobalt appears on exactly 3 surfaces (nav button, hero button, live cell rule) - focus rings are ink so they do not spend the budget; jade is the live dot only. Three motion primitives: entrance (one v4-online pass, 460ms per cell, 60ms stagger largest-first, borders never animate so cells stand as 1px outlines before the pass), hover (perimeter 1px to 1.5px drawn as an inset outline so no text reflows, plus a pure-CSS count-up using @property --v4-figure-value and a counter, no client JS), scroll (.v4-sticky-head declared for the later board band). Under set media reduced-motion, verified: animationName none on every cell layer, fills at opacity 1, counter at 16. Resets use :where(); scroll-margin-top on [id] clears the 64px bar. NAV: 64px product bar, Mark+Devonel wordmark linking #hero, cobalt ContactCTA, anchors rendered from sections.ts where built && inNav - today that is zero, so the bar is wordmark plus button and CANNOT carry a dead link; the five (proof, services, work, process, engagement) light up as each builder flips built:true in components/variations/v4/sections.ts. Anchors show at >=1024px. Keyboard order wordmark -> nav CTA -> hero CTA, all with a 2px ink focus ring. DEVIATIONS: (1) nav ground is solid white at every scroll position rather than transparent-then-solid, which avoids a scroll listener and has no see-through state; no blur. (2) the in-build cell's "hatched border" is rendered as a 135deg hatch across its reduced fill with a normal 1px solid border, because border-image would have killed the 8px radius. (3) hover width 1.5px rounds to 1px at DPR 1 in Chrome, so the visible hover cue is the line going darker (--v4-line-hover); it renders at true 1.5px on retina. (4) no metadata export on the route: "Bento SaaS" is internal, so v4 inherits the app/layout.tsx site title. GATES: npx tsc --noEmit exit 0; CI=1 npm run lint exit 0 (No ESLint warnings or errors); node scripts/shots.mjs /v4 v4-hero --sections hero --session devonel-r2-v4-hero exit 0, 9/9 viewports, 0 console errors 0 warnings, no --ignore-console. Shots at docs/goal/shots/v4-hero/, all 9 full pages and 9 hero crops opened and judged. Two defects found and fixed in one batch then re-shot: the live cell's bottom-pinned caption left a hole (now a footer band with a 1px top rule) and text-wrap: balance broke the 1x1 caption worse than the default wrap (reverted, with the reason recorded in the token file). Not built here: the full board, and the other nine sections.
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
- v4 decision (orchestrator): cobalt budget = hero button, live cell rule, final CTA cell; the final-CTA builder switches the nav button to an ink outline variant so the count stays at three
