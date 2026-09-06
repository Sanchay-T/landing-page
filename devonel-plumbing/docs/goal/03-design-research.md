# 03 - Design research for the devonel.com redesign

Inputs: 18 saved X posts in `design research/` (captures dated 2026-09-07), 12 reference-site teardowns fetched live the same day, and conversion research on service-agency pages.
The current site is the option-d "process plumbing" page: Newsreader, JetBrains Mono, Inter; paper `#eef0eb`, ink `#0e1410`, valve red `#c8451c`; sections Practice, Cycle, Ledger, Position, Contact, Footer.
Everything below is written for the overnight agent that builds variations 1-5.
The old site is described here only as an anti-reference: none of its fonts, colors, diagrams, or section names may be reused in any variation.

## 1. Takeaways from the 18 saved posts

Metrics are from the live captures where the post loaded, otherwise from the saved notes.
Posts marked "capture did not load" are summarised from the saved notes only.

1. Meng To - ThreeUI open-sourced (14.7k bookmarks, 1.29M views). https://x.com/MengTo/status/2090817187900780961
   Library of 160+ free three.js components and landing pages: procedural 3D hero sections, icons, motion, each 100-200 KB of procedural JS, copyable as prompt or source, with agent skills to restyle theme, lighting, motion, layout.
   Borrow: one procedural 3D hero (mesh, particle field, or extruded mark) for the cinematic direction, installed via `npm install @designcodeio/threeui` (MIT) or copied as a prompt; site threeui.com, repo github.com/MengTo/threeui.
2. Meng To - Kage 3D scrolling landing page + skills (7.1k bookmarks). https://x.com/MengTo/status/2086023649526452265 (capture did not load)
   A scroll-driven 3D landing page built with agent skills; the idea is scroll progress driving a 3D scene, which is what the current Devonel pinned hero already does in 2D.
   Borrow: the "scene changes as you scroll" storyboard, but cap it at three beats so mobile stays light.
3. Meng To - ThreeUI growth update (2.4k bookmarks). https://x.com/MengTo/status/2092275643623109037 (capture did not load)
   Follow-up on adoption; the notable adjacent asset is MengTo/skills, 123 agent skills including `landing-page`, `pricing-page`, `build-awwwards-quality-sites`, `threejs`, and `audit-reference-originality`.
   Borrow: load `landing-page` and `audit-reference-originality` from github.com/MengTo/skills into the overnight run as guardrails.
4. Hridoy Reh - full SaaS build map (28.9k bookmarks, 2.74M views). https://x.com/hridoyreh/status/2031381494825103473 (capture did not load)
   A map of everything a product builder needs; design branch is wireframes, UI, UX flows, prototype, design system, landing page.
   Borrow: nothing visual; use it as a checklist that the redesign ships a design-system token file, not just a page.
5. Marko Ilic - curated website sections in Figma (7.2k bookmarks). https://x.com/markoilico/status/2037138526480007282 (capture did not load)
   Heroes, footers, social-proof blocks and other page parts in one Figma file so you stop tab-hopping Mobbin.
   Borrow: build the five variations section-by-section against a shared section list, the way this file is organised.
6. Stephen Haney - Paper Shaders now open source (5.8k bookmarks, 546k views). https://x.com/stephenhaney/status/2072369858638233843
   `@paper-design/shaders-react`, zero-dependency GPU shaders: mesh gradient, grain, dithering, halftone, paper texture, liquid metal, god rays, metaballs, warp, waves; repo github.com/paper-design/shaders.
   Borrow: `paperTexture` and `dithering` for the editorial direction, `meshGradient` plus `godRays` for the cinematic direction; shaders.paper.design.
7. levithefirst - 15 UI resources for sites that look vibecoded (3.6k bookmarks). https://x.com/levithefirst/status/2092975925306507619
   ui-skills.com playbooks, coss.com/ui, designsystemchecklist.com, reui.io, kinetics.colorion.co springs, iconcreator.dev, vibeprompts.dev, animatedbuttons.colorion.co, component.gallery, designsystems.one, utopia.fyi, open-props.style, interfaces.rauno.me, bg.ibelick.com, motion-primitives.com.
   Borrow: utopia.fyi for a fluid type and space scale shared by all five variations, open-props easing tokens, interfaces.rauno.me as the interaction-detail checklist, motion-primitives for reveal components.
8. Solt Wagner - section-by-section galleries (3.1k bookmarks). https://x.com/soltwagner/status/1995463106676568520
   supahero.io (heroes), navbar.gallery, bentogrids.com, h1gallery.com (headlines), cta.gallery, footer.design, 404s.design, icoon.co, mocku.co, plus uikits.design, oksaas.co, screen.movie, dock.cool in replies.
   Borrow: pull three references per section from the matching gallery before building that section; h1gallery for headline length, cta.gallery for final-CTA layouts.
9. Nett0 - 50 design reference sites (2.6k bookmarks). https://x.com/nett0eth/status/2085661117741711667
   Galleries (mobbin, godly.website, awwwards, cosmos.so, curated.design, designspells.com, 60fps.design, supahero.io, saaspo.com, minimal.gallery, rebrand.gallery, seesaw.website), components (ui.shadcn.com, 21st.dev, reactbits.dev, fancycomponents.dev, motion-primitives.com, number-flow.barvian.me), type (fontshare.com, uncut.wtf, freefaces.gallery, fontsinuse.com), shaders and tools (shadertoy, unicorn.studio, cables.gl, rive.app, v0.dev, skills.sh).
   Borrow: uncut.wtf and fontshare.com for non-Inter typefaces per direction, number-flow for the ledger counters, designspells.com for one signature detail per variation.
10. Jeff Park - 22 DTC landers in Figma (137 bookmarks, 87k views). https://x.com/jeffreympark/status/1653023798742904833
    Swipe file of offer, listicle and advertorial pages from DTC brands; gated by like-and-comment; studio at daydreamers.studio.
    Borrow: the advertorial structure (problem, mechanism, proof, offer) as the copy skeleton for the case-study section; ignore the visual style.
11. Jeff Park - 65+ ecom pages (175 bookmarks). https://x.com/jeffreympark/status/1730585991843303881
    Larger compilation of the same class; same gating.
    Borrow: repeated pattern across all 65 is a proof element within the first viewport; adopt that rule.
12. Arijan Janes - 40+ high-converting landers (317 bookmarks). https://x.com/ArijanJanes/status/1807357446077247848
    Pages from 8-figure brands including prelanders and warm-up pages; theconversioncodex.com.
    Borrow: the prelander idea maps to a "position" or point-of-view section that warms up before the CTA, which Devonel already has.
13. Daviowhite - 50+ company landing pages (551 bookmarks, 172k views). https://x.com/Daviowhite/status/1767902876217565519
    Figma file of how big companies design their sites; gated.
    Borrow: benchmark the header, hero and footer density of Vercel and Linear class sites, not DTC.
14. Emy - editable website inspiration collections (907 bookmarks, 443k views). https://x.com/EmyLascan/status/1735540336657838130
    Editable Figma collection from DesignUp.net, sold on Gumroad after the 24-hour giveaway.
    Borrow: nothing specific; low signal beyond "editable references are worth more than screenshots".
15. MotionViz - 3D landing-page prompt pack (5.7k bookmarks, 280k views). https://x.com/Motion_Viz/status/2023328246486458483
    Prompt pack: 3D landing hero, sentient 3D core, cyberpunk volumetric shaders, hyper-futuristic MCP-2099; the claim is that specific prompts beat "make me a landing page".
    Borrow: the prompt-specificity lesson for the Runway MCP briefs (camera, material, light, motion, duration), not the cyberpunk aesthetic.
16. The Bugged Dev - three.js stadium seat-view prototype (6.9k bookmarks, 1.80M views). https://x.com/thebuggeddev/status/2078101519908634983
    Interactive stadium where clicking a seat shows the view; repo github.com/thebuggeddev, demo football-stadium-ruddy.vercel.app.
    Borrow: the "click to see it from the inside" interaction as a case-study explorer idea (click a node in the routing diagram, see the before and after).
17. Elaya - landing-page-design skill.md + Higgsfield + Cursor (1.3k bookmarks). https://x.com/elayadesigns/status/2090356254095130825
    Skill at github.com/elayadesign/ai-design-skills/skills/landing-page-design: intake (one action, offer, ICP, three objections, proof assets), order Hero, Benefits, How it works, Social proof, FAQ, Risk reversal, Final CTA, headline formulas, `cubic-bezier(0.32,0.72,0,1)` at 700ms, IntersectionObserver reveals, no gradients on backgrounds, never Inter or Roboto.
    Borrow: the intake questions and the "risk reversal before final CTA" step; Higgsfield is the AI-video source the post pairs with it, which Runway MCP replaces here.
18. Paidax - component-lib list including ThreeUI, BoardUI, HeroUI (2.0k bookmarks). https://x.com/xin_pai88825/status/2093227487354298480 (only a reply loaded)
    Round-up of component libraries for agent-built sites.
    Borrow: HeroUI or shadcn as the base primitives for the product-screenshot direction so effort goes into content, not buttons.

## 2. Reference site teardown

Fetched as text on 2026-09-07; font and motion cells that could not be read from markup are marked (inf) for inferred from known builds.
lovable.dev returned 403 so bolt.new stands in; work.co truncated so instrument.com stands in.

| Site | Hero | Proof | Section order | Motion | Type | CTA | What to steal |
|---|---|---|---|---|---|---|---|
| vercel.com | "Agentic Infrastructure", one sub line, type-led, no product shot | 3 customer cards right under hero, each one number plus 4 bullets | Hero, 3 case cards, Recently shipped, footer CTA | Minimal hover, no scroll theatre | Geist Sans and Geist Mono (inf), small tight scale, mono labels | "Deploy now" primary in hero and footer, "Talk to sales" once | Proof as 6-line case cards: client, number, four bullets |
| linear.app | "The product development system for teams and agents", product screenshot | Logos plus 3 named quotes plus "40,000 product teams" below fold | Hero, 3 value props, Intake, Plan, AI, Build, Changelog, testimonials | Lazy UI stills, crossfade on feature panels (inf) | Inter Display (inf), large tight display | Sign up / Log in in nav, "Learn more" per section | One idea per screen, each block ends in one link |
| basement.studio | "A digital studio & branding powerhouse making cool shit that performs", WebGL scene (inf) | 4 case studies immediately after hero, logos (SpaceX, Vercel, Linear, Cursor) mid-page | Hero, Selected Work, What We Do, Clients, About, Contact | Heavy WebGL, scroll-driven, custom cursor (inf) | Basement Grotesque, oversized caps | No button, hello@ and sales@ emails | Work first, services second, attitude in the headline |
| rauno.me | One sentence naming who he works with (Vercel, Devouring Details), no visual | Affiliations in the sentence itself | Nav, bio, philosophy lines, footer links | "Email -> Copied" micro-interaction only | Small sans (inf) | Single copy-to-clipboard email | Named affiliations in the bio are enough proof |
| paco.me | "Crafting interfaces", no visual | Linear and Vercel after the sub, then 3 projects | Hero, Building, Projects, Writing, Now, Connect | None visible | Small sans plus mono details (inf) | Handle and email | Three projects, three essays, done |
| bolt.new | "What will you build today?", the hero is the prompt input | Logo wall under hero, "98% fewer errors" mid-page | Input, logos, model, metric, scale, design systems, backend, roles, final CTA | Gradient glow behind hero, light reveals | Inter-like (inf) | "Build now" three times, pure signup | The hero is the product; the input is the CTA |
| cursor.com | "Cursor is your coding agent for building ambitious software", interactive desktop demo | One logo under hero, 6 celebrity quotes after 4 demos | Demo, logo, agents, Mission Control, cloud agents, Slack, quotes, models, enterprise, changelog | Interactive panels, carousel, scroll reveal (inf) | Custom sans plus serif display (inf), large | Download / Get started / Request a demo, repeated in footer | Three-tier CTA: try, start, talk to a human |
| significa.co | "Think. Design. Develop. Launch. Scale.", text only | 4 project cards under hero, award badges, logos near footer | Hero, featured, selected work, services, awards, about, blog, handbook, logos, FAQ | Static markup, image hover reveals (inf) | Custom sans (inf), big verb headline | "Get a quote" persistent in nav to /get-a-quote | FAQ includes "Why do I need an agency if I have AI?" |
| instrument.com | "We're a digital-first design agency where creativity meets technology", client carousel | Client roster under hero, awards mid-page | Award banner, hero, roster, services, recognition, purpose, news, approach, newsletter | Carousel, image reveals (inf) | Instrument Sans and Instrument Serif | "Start a Project", "Join", "Press", "Drop Us a Note" in footer | Route CTAs by intent |
| pentagram.com | "The world's largest independent design consultancy", full-bleed project image | Case studies under hero, one partner quote, no logos or numbers | Hero, featured carousel, value prop, discipline galleries | Carousels with counters, fade-in grid (inf) | Neue Haas-style grotesk (inf), editorial scale | Project links only, Contact in nav | Work is the page, zero sales copy |
| p0stman.com | "The AI-Native Product Studio", "idea to production in weeks", video poster | Logos plus "Twenty years shipping" under hero, founder photo mid-page | Hero, logos, founder, work (3 of 39), three tiers, free tools, research, final CTA | Hero video, light reveals | Sans (inf), dark muted tones | "Start a project" in hero, tiers, footer | Public fixed pricing: Sprint 5k, Build 8k, Fractional 3k/mo |
| denklabs.com | "A real problem becomes a real product", six-promise list instead of image | Two long case studies with live links, "4-8 weeks", "100% code handed over" | Hero, overview, process carousel, what you buy, responsibilities, cases, first-eight-weeks timeline, CTA | Process carousel only | Sans (inf), near-black | "Request a consultation" four times | "How the first eight weeks go" timeline de-risks buying |

Cross-cutting patterns:

- Every hero is one declarative sentence; agencies use identity or verbs, products use "X for Y", only bolt asks a question.
- Proof lands in screen two, not the hero; products pair logos with a number, agencies pair work thumbnails with awards.
- Products show the product and agencies show the work; the founder-led studios (p0stman, denklabs) are the closest comps to Devonel and are the only ones that show process, timeline and price.
- Two CTA tiers everywhere: self-serve plus human for products, one persistent nav CTA repeated 3-4 times for agencies, always to a contact page.
- Dark is the AI and dev default (Vercel, Linear, bolt, p0stman, denklabs); design agencies and personal sites are light.
- Motion is ambient except basement; a micro-interaction like rauno's "Copied" carries more craft signal than a scroll effect.
- Custom or proprietary type does the heavy lifting (Geist, Instrument, Basement Grotesque) with mono eyebrow labels.
- Late-page utility blocks (FAQ, changelog, recently shipped) are the cheapest credibility signal for a small studio.

## 3. Canonical section order for a service-agency landing page

Evidence base: Digital Applied's 2,000-page study (Oct 2025 to Mar 2026), Evil Martians' 100 devtool pages, Unbounce's 41k-page benchmark; treat the percentage lifts as directional.
B2B services median conversion is about 3.6%, so the page is judged against that.

1. Hero.
   One specific headline with a number and an audience ("Ops workflows re-engineered for mid-market teams in 4 weeks"), a 10-20 word sub, one primary button, one supporting stat or one quote with a face.
   Headlines with numbers tested +15%, customer-vocabulary headlines +19%, single-stat heroes +18%, autoplay video -7%, stock photo -11%, three-plus buttons -8%.
   Keep the visual as the work itself (diagram, ledger, artefact), not decoration.
2. Proof strip.
   Immediately after the hero: a named count ("14 builds, 9 industries, 12 months") plus one testimonial with name, title and face; logos only if there are 5-7 recognisable ones.
   Named-customer count tested +22%, single testimonial +14%, aggregate stat +9%, logo strip +8%; stacking more than 2-3 proof types adds little.
3. Services (what you buy).
   Three to five offers written as outcomes, each with a one-line scope, a duration and who is on it; this is Devonel's Practice section.
   Benefit-led copy tested +27% over feature-led; penalties for "leverage", "optimize", generic adjectives and missing named anchors.
4. Case studies.
   Three cards, each titled by outcome ("Returns triage: 11 hours a week back"), one screenshot or diagram, one number with timeframe, industry tag, optional stack.
   Inside a study: headline metric first, then challenge, approach, result, annotated screenshots over paragraphs; this is the Ledger made concrete.
5. Process (how we work).
   Three to five named steps with stated durations, mirroring the buyer's sequence, ending in a post-launch step; Devonel's Cycle already does this (map, weld, run, 90 days care).
   Buyers explicitly check that support is defined before signing, so the last step must say what happens after handover.
6. Founder and team.
   Photo, "you work directly with", who is on the call from week one, a response-time promise printed next to the CTA, and a factual capacity line ("two pods open from November"), not a countdown.
   Devonel's Position section (named operators, source is yours) belongs here as the point-of-view block that warms up before the CTA.
7. Pricing or engagement model.
   Publish the price for fixed-scope or subscription work and "from" plus a range plus a budget selector for custom work; never show nothing.
   p0stman publishes tiers, denklabs publishes "4-8 weeks, 100% code handed over"; the prestige agencies hide it because their logos do the work, which Devonel cannot copy.
8. FAQ.
   Accordion answering in writing: code and design ownership, timeline, who you talk to and cadence, support after launch, fixed price for defined scope, what you do not do, and "why do I need a studio if I have AI".
9. Final CTA.
   Full-width contrasting block, one button, embedded calendar (Cal.com) rather than form-then-wait; if a form, 3-4 fields or multi-step.
   Sticky bottom CTA on mobile plus above-fold CTA tested +12%; repeat proof beside the button.
10. Footer.
    Contact email, location and timezone, the public Q&A slot, version and last-revised line, legal; keep it one screen.

Rules that apply to every section: one primary CTA wording across the page ("Book a scoping call"), proof next to every CTA, LCP under 2 seconds, no em dashes in copy.

## 4. Five far-apart visual directions

All five share the same content, the same section order from section 3, and one fluid type and space scale from utopia.fyi so only the design changes.
All five must pass the matrix in section 5 and `prefers-reduced-motion` before they count as done.

### Variation 1 - "Broadsheet" (editorial print)

- Thesis: a studio that publishes its ledger reads like a trade newspaper, so the page is typeset like one.
- Type: a high-contrast Didone or transitional serif for display (Instrument Serif, Fraunces, or Playfair) with a compact grotesk for labels (Geist or Inter Tight); none of the fonts used by the old site.
- Palette: warm off-white `#f6f1e7`, near-black `#141210`, one editorial accent in deep blue `#1d3a8a`, hairline rules `#b8b0a2`; paper grain from `@paper-design/shaders-react` paperTexture at low opacity.
- Grid: 12-column with visible column rules, drop caps, running heads, folio numbers in the gutter; content max 1280px, hero full-bleed.
- Motion: none on load; scroll-mapped reveals only; figures draw in as line art on enter.
- Hero: masthead, dateline, one long serif headline, a pull-quote from a real client in the right three columns, CTA as a classified-ad box.
- Distinct because: zero cards, zero shadows, zero gradients; every division is a rule or whitespace.
- Draws from: fontsinuse.com editorial references, Pentagram case-study pages, Marko Ilic section file for footer and proof strip. Not from the old option-d page, whose paper and valve-red palette, Newsreader and JetBrains Mono fonts, and routing diagrams are off limits.

### Variation 2 - "Terminal" (brutalist mono, pure typography)

- Thesis: no imagery at all; the whole page is one monospace type system and the ledger numbers are the art.
- Type: a single mono family at three sizes only (Berkeley Mono, Commit Mono, or Geist Mono via fontshare or uncut.wtf); tabular figures on.
- Palette: near-black `#0b0b0b`, off-white `#e8e6df`, one accent green `#38d27a` used only on the cursor, live counters and the CTA.
- Grid: 80-character measure, sections separated by full-width ASCII rules, a fixed left rail showing the section index like a file tree.
- Motion: type-on for the headline, number-flow counters in the ledger, blinking caret on the CTA input; no easing curves anywhere, everything steps.
- Hero: a fake shell prompt: `devonel --map ops.yaml` followed by the output that is the value proposition, and `press enter to book` as the CTA.
- Distinct because: monochrome, no images, no rounded corners, dense; the opposite of variation 4.
- Draws from: interfaces.rauno.me details, number-flow.barvian.me, h1gallery.com one-liner headlines, Linear's restraint.

### Variation 3 - "Nightshift" (luxury dark cinematic, AI video heavy)

- Thesis: the studio works in the dark while your ops run; the page is a slow film of pipes, valves and light.
- Type: a high-contrast serif display (Instrument Serif or Fraunces) at 96-160px paired with Geist for body.
- Palette: `#07080a` base, warm amber `#e0a24a` highlight, cold `#6f8fff` for water, 8% white hairlines; mesh gradient and god rays from Paper Shaders behind the hero.
- Grid: full-bleed 16:9 video hero, then a 6-column content grid with generous 160px section gaps; images bleed, text stays in a 720px measure.
- Motion: Runway MCP generates three 6-8 second loops (macro brass valve turning, ink flowing through glass pipes, a dark ledger page with numbers rising); crossfaded on scroll, paused off-screen, poster image fallback on mobile and reduced motion.
- Hero: video at 40% brightness, serif headline over it, CTA as a glowing pill, proof strip fades in over the last second of the loop.
- Distinct because: the only variation with photographic or generated imagery and the only one that is dark-first.
- Draws from: MotionViz prompt-specificity, Elaya's Higgsfield workflow, ThreeUI hero for an optional 3D fallback, Basement-class cinematic studios.

### Variation 4 - "Swiss Signal" (playful Swiss color)

- Thesis: process plumbing explained like a metro map; big flat colour, bold geometry, no ornament.
- Type: a grotesk with character (Söhne-like via Fontshare: Satoshi or General Sans) for everything, tight tracking, sizes 18, 24, 40, 72, 120.
- Palette: four flat inks on white, red `#e63b2e`, blue `#2456e6`, yellow `#f2c318`, black `#111`; each service gets one colour and it stays consistent across the page.
- Grid: strict 8-column, blocks snap to it, section backgrounds alternate full-bleed colour panels; bento grid for services, poster-style case studies.
- Motion: spring-based (kinetics.colorion.co values) on hover and enter; shapes slide in on the grid axes; a metro-line SVG draws itself along the process section.
- Hero: giant two-line headline, a metro-map diagram of the process as the visual, CTA as a black block button.
- Distinct because: the most colour and the flattest; feels like a poster, reads instantly at any size.
- Draws from: bentogrids.com, Solt Wagner's galleries, rebrand.gallery Swiss-style references, Lovable-class flat colour heroes.

### Variation 5 - "Console" (product-screenshot heavy)

- Thesis: sell the artefacts, not the story; the page is a scroll of real deliverables (routing diagrams, runbooks, ledgers, alert dashboards).
- Type: Geist or Manrope for UI, Geist Mono for labels, restrained scale 14 to 56.
- Palette: light neutral `#f7f7f5`, borders `#e3e3df`, ink `#161616`, one accent blue `#2962d6`; screenshots carry the colour.
- Grid: 12-column, screenshots at 1.5x device pixels inside browser or document frames, sticky left copy with right-side scrolling screenshots.
- Motion: scroll-linked sticky panels, screenshot parallax of 8-12px, hover reveals annotation callouts on the screenshots.
- Hero: headline plus a real annotated routing diagram in a window frame, tabs that switch between before and after; primary CTA and "see a real ledger" secondary.
- Distinct because: the only one whose visuals are the actual product of the work; built on shadcn or HeroUI primitives so time goes into the artefacts.
- Draws from: Vercel and Cursor marketing pages, mocku.co and screen.movie for framing, Paidax's component-lib list, The Bugged Dev's click-to-inspect idea for the diagram.

## 5. Responsive and aspect-ratio test matrix

Test every variation at these viewports in Chrome device mode, plus real-device checks on one iPhone and one Android when available.
Text zoom at 125% and `prefers-reduced-motion: reduce` are part of the matrix, not extras.

| Viewport | Size | Aspect | What commonly breaks |
|---|---|---|---|
| Phone portrait | 390 x 844 | 9:19.5 | Pinned or 100vh heroes clip under the browser chrome; headlines over 4 lines; proof strip logos wrap into a mess; sticky CTA covers the footer; video autoplay blocked, poster missing. |
| Phone landscape | 844 x 390 | 19.5:9 | Anything using `100vh` shows only the headline; pinned heroes lock the user; horizontal bento cards become 60px tall; modals and Cal.com embeds cannot scroll. |
| Tablet portrait | 820 x 1180 | 3:4.3 | Two-column layouts that assume 1024px squash to two narrow columns; sticky sidebars start too early; hover-only reveals never fire on touch. |
| Laptop | 1280 x 800 | 16:10 | Hero video or 3D cropped so the subject is off-centre; 160px section gaps stack into a lot of empty space; nav plus hero plus proof strip do not fit one screen. |
| Desktop | 1536 x 864 | 16:9 | Type set with `vw` gets too large; case-study images upscale and blur; the 12-column grid shows visible gutter drift if max-width is not set. |
| Ultrawide | 1920 x 1080 and 2560 x 1080 | 16:9 and 21:9 | Full-bleed sections with centred 1280px content look abandoned at the edges; background shaders and grids reveal repetition; footers become a thin line. |

Per-section failure points to check at every width:

- Hero: headline widows, CTA below the fold, diagram overlapping text at 1024-1100px where the mobile and desktop heroes hand over.
- Proof strip: logos with different aspect ratios, counters that reflow when digits change, quote attribution wrapping.
- Services or bento: cards with uneven heights, icon-only cards losing labels on touch, colour panels bleeding past the grid.
- Case studies: sticky copy taller than the viewport, screenshots wider than the container on 390px, before and after tabs unreachable by keyboard.
- Process: horizontal timelines that need a scrollbar on mobile, step numbers separating from step text, self-drawing SVG paths that never finish under reduced motion.
- Founder: portrait cropping, Loom or video embeds fixed at 16:9 inside a 4:3 column, long names wrapping under the avatar.
- Pricing or engagement: tiers that stack in the wrong order, "starting at" figures splitting across lines, comparison table needing horizontal scroll.
- FAQ: accordion focus rings hidden, long answers with no measure limit on ultrawide.
- Final CTA and footer: Cal.com iframe height, form inputs without 16px font causing iOS zoom, footer columns collapsing without headings.
