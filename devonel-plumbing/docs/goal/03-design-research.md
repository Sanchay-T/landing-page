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
   Borrow: one procedural 3D hero for directions 1, 3 and 5, built as Devonel's own mark rather than a generic mesh or particle field, installed via `npm install @designcodeio/threeui` (MIT) or copied as a prompt; site threeui.com, repo github.com/MengTo/threeui.
2. Meng To - Kage 3D scrolling landing page + skills (7.1k bookmarks). https://x.com/MengTo/status/2086023649526452265 (capture did not load)
   A scroll-driven 3D landing page built with agent skills; the idea is scroll progress driving a 3D scene.
   Borrow: the "scene changes as you scroll" storyboard for direction 3, reduced to one sticky 48px bar and a value ramp, with full-viewport pinning and scroll-jacking banned because they break on iOS.
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
   Borrow: `meshGradient` plus `grain` for direction 2 Shader Light, which is the only direction in round 2 that uses Paper Shaders; shaders.paper.design.
7. levithefirst - 15 UI resources for sites that look vibecoded (3.6k bookmarks). https://x.com/levithefirst/status/2092975925306507619
   ui-skills.com playbooks, coss.com/ui, designsystemchecklist.com, reui.io, kinetics.colorion.co springs, iconcreator.dev, vibeprompts.dev, animatedbuttons.colorion.co, component.gallery, designsystems.one, utopia.fyi, open-props.style, interfaces.rauno.me, bg.ibelick.com, motion-primitives.com.
   Borrow: utopia.fyi for a fluid type and space scale shared by all five variations, open-props easing tokens, interfaces.rauno.me as the interaction-detail checklist, motion-primitives for reveal components.
8. Solt Wagner - section-by-section galleries (3.1k bookmarks). https://x.com/soltwagner/status/1995463106676568520
   supahero.io (heroes), navbar.gallery, bentogrids.com, h1gallery.com (headlines), cta.gallery, footer.design, 404s.design, icoon.co, mocku.co, plus uikits.design, oksaas.co, screen.movie, dock.cool in replies.
   Borrow: pull three references per section from the matching gallery before building that section; h1gallery for headline length, cta.gallery for final-CTA layouts.
9. Nett0 - 50 design reference sites (2.6k bookmarks). https://x.com/nett0eth/status/2085661117741711667
   Galleries (mobbin, godly.website, awwwards, cosmos.so, curated.design, designspells.com, 60fps.design, supahero.io, saaspo.com, minimal.gallery, rebrand.gallery, seesaw.website), components (ui.shadcn.com, 21st.dev, reactbits.dev, fancycomponents.dev, motion-primitives.com, number-flow.barvian.me), type (fontshare.com, uncut.wtf, freefaces.gallery, fontsinuse.com), shaders and tools (shadertoy, unicorn.studio, cables.gl, rive.app, v0.dev, skills.sh).
   Borrow: uncut.wtf and fontshare.com for non-Inter typefaces per direction, number-flow for the proof-strip counters, designspells.com for one signature detail per variation.
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
    Borrow: the "click to see it from the inside" interaction for direction 3's tick bar, where hovering or focusing a day prints the real event from that day.
17. Elaya - landing-page-design skill.md + Higgsfield + Cursor (1.3k bookmarks). https://x.com/elayadesigns/status/2090356254095130825
    Skill at github.com/elayadesign/ai-design-skills/skills/landing-page-design: intake (one action, offer, ICP, three objections, proof assets), order Hero, Benefits, How it works, Social proof, FAQ, Risk reversal, Final CTA, headline formulas, `cubic-bezier(0.32,0.72,0,1)` at 700ms, IntersectionObserver reveals, no gradients on backgrounds, never Inter or Roboto.
    Borrow: the intake questions and the "risk reversal before final CTA" step; Higgsfield is the AI-video source the post pairs with it, which Runway MCP replaces here.
18. Paidax - component-lib list including ThreeUI, BoardUI, HeroUI (2.0k bookmarks). https://x.com/xin_pai88825/status/2093227487354298480 (only a reply loaded)
    Round-up of component libraries for agent-built sites.
    Borrow: shadcn-grade primitives for direction 4 Bento SaaS so effort goes into the board's sizing rule, not into buttons.

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

Rules that apply to every section: one primary CTA wording across the page ("Send your brief", the canonical wording in `COPY.md`), proof next to every CTA, LCP under 2 seconds, no em dashes in copy.

## 4. Five far-apart visual directions

Round 1 shipped five directions and the founder rejected all five.
His words: "this is not a jewellery promotion, it is for Devonel, the agency that does the work; it looks like the client's landing pages; which agency website uses a terminal?"
And on the replacement set: "create something unique post inspo, I don't want to look the same as others."
Nothing from `03-design-research-round1.md` may be reused: not Broadsheet, not Terminal, not Nightshift, not Swiss Signal, not Console, and none of their palettes, heroes or section furniture.

Four rules bind every direction below.

- Devonel is the subject; the client is a case study. The hero, the proof strip and the services section carry no client product at all. Client renders and UI stills from `ASSET-INVENTORY.md` appear only inside case-study cards and on `/work/jewelo`, never full-bleed and never behind text.
- Every direction ships one proprietary device built from a Devonel fact, named below as "the twist". The device is the reason the page cannot be mistaken for a template, and it is a build requirement, not a flourish. A direction that ships the genre without its twist has failed.
- Only two new dependencies are allowed: `three` (with `@react-three/fiber` and `@react-three/drei` if they earn their weight) and `@paper-design/shaders-react`. Both are dynamically imported with `ssr: false` and mounted after the hero text has painted. Every canvas has a static fallback under `prefers-reduced-motion` and under no WebGL.
- The LCP element is the headline text in all five. The canvas never carries the LCP, never blocks it, and is not in the initial JavaScript bundle.

Content and section order come from section 3 and `05-build-spec.md`; copy comes verbatim from `COPY.md`.
Each direction owns its own token file: palette, type scale, spacing, radius, motion. The fluid-space method from utopia.fyi is shared; the scales are not.

### Direction 1 - "Studio Dark"

**Idea.** A near-black workshop with one lit object in it: Devonel's own mark, assembled in front of you out of sixteen pieces, before a single claim is made.

**The twist.** The hero object is the mark from `app/icon.svg` - a ring, a crosshair, a centre dot - rebuilt procedurally in three dimensions as sixteen arc segments, one per day of the Jewelo build.
On load the segments land one at a time while a gauge under the object counts `day 04 / 16` up to `16 / 16`, and the ring closes exactly as the headline finishes setting.
Scrub inside the hero and the build runs backwards.
No other studio can run this hero: the object is this studio's logo and the count is this studio's only hard number, and the page's first gesture is therefore "watch something get built", which is the sentence the founders use about themselves.

**Palette.** Void `#07090C` ground, panel `#111519` raised blocks, line `#232A31` hairlines, text `#E7EAEC`, muted `#8C959D`, lamp `#FFF3E0`.
Achromatic on purpose: there is no accent hue on this page, and the only colour in the design is the temperature of the single light. Lamp carries the object specular, the live dot, the focus ring and the CTA fill, and nothing else.

**Type.** Space Grotesk 700 at -0.03em for display, 64px at 1280 and 40px at 390. Geist 400 at 17/1.6 for body, 68ch measure. Geist Mono with tabular figures for the gauge, the proof figures and the stack list only - no mono eyebrows and no mono labels.

**Layout skeleton.**
1 Hero: five columns of type left, seven of canvas right, gauge under the canvas.
2 Proof: full-bleed panel band, five figures in a row split by line verticals, client quote beneath.
3 Services: five full-width rows that open on hover or focus to reveal the scope line; no cards, no icons.
4 Case studies: flagship as a two-column panel with one 420px still, two showcases as narrow panels, link out to `/work/jewelo`.
5 Process: a vertical rail of four phases with the payment gate printed on each connector.
6 Founders: two panels, name at 40px, role as three lines, no portraits.
7 Engagement: four-row table, columns for what you get and when you pay.
8 FAQ: seven `details` rows on hairlines.
9 Final CTA: the object returns at 30 percent scale and 20 percent brightness behind one button.
10 Footer: three columns above a line rule.

**Hero at 1280x800, above the fold.** Wordmark and one nav button; headline on three lines; two-sentence subhead; button plus support line; the object at 520px with the gauge running. The proof band deliberately starts below the fold.
**Hero at 390x844, above the fold.** Wordmark, headline on four lines at 40px, one-sentence subhead, full-width button, support line, and the top 120px of a 320px object. Type first, canvas second, at every width.

**Motion.** Entrance: the sixteen-tick assembly, 150ms per tick on `cubic-bezier(.2,.8,.2,1)`, 2.4s total, once per session, and nothing else moves on load. Hover: a service row opens its scope line over 180ms with no lift, scale or shadow. Scroll: object rotation bound to scroll velocity, damped, clamped to 0.2 radians.
3D behaviour: after assembly the ring idles at 0.05 rad/s, `frameloop="demand"`, `IntersectionObserver` pauses it off-screen, DPR clamped to 1.5.
Reduced motion: the object renders assembled in a single frame, gauge at `16 / 16`, no idle, no scroll binding.
No WebGL: an inline SVG of the finished mark at 520px in line strokes over a CSS radial lamp glow, under 15 KB, zero JavaScript.

**Component vocabulary.** Panels, not cards: panel fill, 1px line border, 0px radius on structural blocks and 4px on interactive controls only. Chips are 11px sentence-case text in a 1px outline, used for case tags and payment gates. Nav is a 56px bar, wordmark left, one button right, no blur and no glass. No shadow appears anywhere in this direction.

**Generic tells to avoid.** An acid-green or vermilion accent glowing on black; a hero blob, torus knot or particle field that means nothing; glassmorphic nav; the gauge drawn as a percentage progress bar; "01 / 02 / 03" numbering anywhere except the process section, which is the only real sequence on this page.

**Reference lineage.** Meng To's ThreeUI post for procedural-3D-hero-as-component, MotionViz's 3D prompt pack for the rule that the object is specified down to material and light rather than generated loosely, and Elaya's landing-page skill for the entrance curve and the no-gradients-on-backgrounds rule.

### Direction 2 - "Shader Light"

**Idea.** Off-white paper with a slow shader field behind it, where the field is not decoration but a live reading of the two cities the studio works from.

**The twist.** The `meshGradient` has exactly two colour poles, one at 28 percent of the page width for Dubai and one at 62 percent for Mumbai, an hour and a half apart.
On mount the component reads local time in `Asia/Dubai` and `Asia/Kolkata` and moves each pole's hue along a night-dawn-day-dusk ramp, so the left pole is cold and dim while Dubai sleeps and the right pole is warm while Mumbai works.
Two small live clocks sit directly under the headline, on the poles, printing both times.
The same page is a different colour to a visitor in London at 09:00 than to one in Dubai at 23:00, and it says "two cities, one thread" without spending a word on it.

**Palette.** Paper `#F3F4F1` ground, raised `#FFFFFF` plinths, ink `#141614`, muted `#5E635E`, rule `#D8DAD4`.
Shader poles: Dubai day `#E2A34B` to Dubai night `#2B3A6B`, Mumbai day `#3E9B8A` to Mumbai night `#1E3A44`.
The field never exceeds 22 percent opacity over paper except inside the final CTA block, so it reads as tinted paper rather than a gradient wash. No terracotta, no cream, nowhere on the page.

**Type.** Fraunces for display at `opsz` 96 to 144, 92px at 1280 and 36px at 390, italic reserved for the two live clocks. Geist 400 at 17/1.65 for body, 66ch measure. No monospace anywhere in this direction.

**Layout skeleton.**
1 Hero: shader full-bleed behind, centred headline, two clocks on the poles, one CTA.
2 Proof: five figures on a solid white plinth with a hard edge over the field.
3 Services: five stacked full-width entries separated by rules, no numbering, no icons, no cards.
4 Case studies: two columns, flagship left as a long read with one 400px still, showcases right as two short entries.
5 Process: four numbered phases, the only numbered block on the page because it is the only sequence.
6 Founders: two entries, each with its city's live clock repeated beside the name.
7 Engagement: four terms as a definition list.
8 FAQ: seven questions all open, no accordion, serif answers at 66ch.
9 Final CTA: the field rises to full opacity in this block only, with a solid white card holding the button.
10 Footer: one quiet line plus contact.

**Hero at 1280x800, above the fold.** Centred wordmark with the Dubai clock left and the Mumbai clock right; headline on three lines at 92px; one-sentence subhead; button and support line; the field behind all of it.
**Hero at 390x844, above the fold.** Wordmark with the two clocks stacked beneath it; headline on four lines at 36px; button; support line. The shader is a 300px band behind the headline only, not the full viewport.

**Motion.** Entrance: no DOM motion at all - the only load movement is the field fading from 0 to 22 percent over 900ms. Hover: a clock reveals "1h30 apart" on hover and on focus. Scroll: the two poles drift plus or minus 6 percent horizontally with scroll and nothing else moves.
Shader behaviour: `meshGradient` at speed 0.08 with `grain` at 0.04 over it for paper tooth, DPR clamped to 1.25, paused off-screen.
Reduced motion: `speed={0}`. The field is still, still two-poled, and still coloured by the real local times, so the twist survives the fallback intact.
No WebGL: two CSS radial gradients at the same 28 and 62 percent positions, hues picked from the current hour at render time. It is still a two-city gradient, at zero JavaScript.

**Component vocabulary.** Plinths, not cards: white blocks with no border and no shadow, separated from the field by their own edge. Rules replace borders everywhere else. Chips are small-caps-free 12px text with a 1px rule underneath. Nav is centred, 64px, transparent over the field, with the two clocks as its only other content. Zero border-radius above 6px anywhere.

**Generic tells to avoid.** A cream ground with a high-contrast serif and a clay accent, which is the single most common generated look on the web right now; a full-bleed rainbow mesh under white text; text set directly on the shader; the shader running at default speed so it reads as a screensaver; a serif headline with one word italicised for emphasis.

**Reference lineage.** Stephen Haney's Paper Shaders release for `meshGradient` and `grain`, levithefirst's resource list for open-props easing and utopia fluid space, and Solt Wagner's h1gallery reference for holding the headline to three lines.

### Direction 3 - "Scroll Story"

**Idea.** The whole page is one build, told in order, and the background travels from the night the brief arrived to the morning the product went live.

**The twist.** Scroll position is a date.
A 48px sticky bar carries sixteen ticks, a travelling marker and a date readout that starts at `11 Aug` and ends at `27 Aug`, the real spec and launch dates.
The document background interpolates across those sixteen ticks from night `#0E1216` to daylight `#F2F1EC`, with text, rules and chips inverting with it, so reading the page is watching the sixteen days pass and finishing in the morning light of the launch.
Section 2 breaks the ramp on purpose: the proof strip is a one-screen flash-forward to full daylight and `27 Aug`, then the page returns to night for section 3 and climbs from there.
The page shows you the ending in screen two, then spends the rest of itself proving how it got there.

**Palette.** A four-stop ramp rather than a fixed palette: night `#0E1216`, blue hour `#2C3A47`, first light `#8A8478`, day `#F2F1EC`.
Foreground inverts along the same curve, `#F2F1EC` down to `#12161A`, with rules at 14 percent of the current foreground.
One constant that never inverts: marker `#C8451C`, the red from the Devonel mark, used only for the day marker on the tick bar and the CTA underline.
Every token is declared as a four-stage value, and no section may hardcode a colour.

**Type.** Archivo variable at `wdth` 70 and `wght` 700 for display, 72px at 1280 and 34px at 390 - condensed so a date and a headline can share a line. Geist 400 at 17/1.6 for body. Geist Mono tabular for the tick bar's date readout only.
Explicitly forbidden here: hairline column rules, drop caps, folio numbers, running heads. Condensed display plus dates converges on a newspaper unless those are banned, and the newspaper was rejected in round 1.

**Layout skeleton.**
1 Hero, day 0, night: the brief arrives; headline, subhead, CTA, tick bar showing tick one.
2 Proof, flash-forward to day 16: full daylight for one screen, five figures, the client quote, then a hard cut back to night.
3 Services, day 2: five entries, ground still dark.
4 Case studies, days 3 to 14: the spine of the page, the tick bar advancing fastest here, flagship laid out as dated build events with one 440px still.
5 Process, day 15: four phases, payment gate between each.
6 Founders, first light: two entries as the ground turns.
7 Engagement, day: four terms.
8 FAQ, day: seven rows.
9 Final CTA, full daylight at 10:09: one button, marker underline.
10 Footer, day, quiet.

**Hero at 1280x800, above the fold.** Sticky tick bar at the top with `11 Aug` and one tick lit; headline on three lines at 72px; subhead; button and support line; the 200px wire ring parked in the right margin at tick one.
**Hero at 390x844, above the fold.** Sticky tick bar reduced to sixteen 6px ticks plus the date; headline on four lines at 34px; subhead; full-width button; support line. The ring does not mount below 1100px, so the phone carries no canvas at all.

**Motion.** Entrance: the tick bar draws its sixteen ticks left to right in 640ms, once. Hover: hovering or focusing a tick shows that day's real event under the bar, sourced from `01-business-brief.md` section 4.1. Scroll: the document value ramp, driven by `animation-timeline: scroll()` where supported so it runs off the main thread, with a throttled `rAF` fallback.
3D behaviour: the right-margin wire ring gains one segment per tick, mounts only at 1100px and above, `frameloop="demand"` with a single render per tick change.
Reduced motion: no interpolation. The page renders in three fixed bands - night through section 3, first light through section 6, day from section 7 - with hard switches at the boundaries, and the ring renders complete.
No WebGL: the ring is an SVG with the same per-tick logic, about 4 KB.
Nothing on this page is pinned to the full viewport and nothing hijacks the scroll. The tick bar is the only sticky element.

**Component vocabulary.** Bands, not cards: full-width horizontal bands whose value is set by their position on the ramp. Chips are dated - every case tag carries its real date. Nav collapses into the tick bar, which is also the section index. Radius 0 everywhere; the only curve on the page is the ring.

**Generic tells to avoid.** Full-viewport pinned sections with scroll-jacked copy, which is the Kage look and which breaks on iOS; a horizontal scroll timeline; parallax on more than the ring; the ramp reading as a decorative gradient rather than a clock, which happens the moment a section sets its own background; a progress bar that shows a percentage rather than a date.

**Reference lineage.** Meng To's Kage post for scroll-driven narrative, capped at one sticky bar rather than a pinned scene; The Bugged Dev's stadium prototype for hover-a-thing-see-inside, applied to the ticks; and Meng To's `audit-reference-originality` skill as the guard against drifting back towards the reference.

### Direction 4 - "Bento SaaS"

**Idea.** A light, tightly engineered product page whose grid is a status board, with the launch energy of a company that has something running today.

**The twist.** Cell size is honesty.
The board is scaled by what is actually shipped: the one live product takes a 2x2 cell with a live dot, the real client quote and its launch date; the two in-build showcases take 1x1 cells at reduced fill with a hatched border; the two services with no case behind them take outline-only 1x1 cells.
A legend under the board reads "cell size is how much of it is live", and a line beside it says the board is redrawn every time something ships.
Every other bento on the internet equalises its tiles into decoration. This one refuses to, which turns the page's own weakest fact - one shipped, two in build - into its most credible structural device.
Second rule that carries the twist: the board has no icons. A cell's visual is a real number, a small case still, or a fragment of the mark.

**Palette.** Canvas `#E9EAEC`, cell `#FFFFFF`, ink `#111312`, muted `#616770`, border `#D3D6DA`, cobalt `#1B34D8` for the primary action and the live cell's rule, jade `#12805C` for the live dot only.
Cobalt appears on at most three surfaces on the page. Everything else is neutral, bordered, and flat.

**Type.** Geist 600 at -0.035em for display, 56px at 1280 and 32px at 390. Geist 400 at 16/1.55 for body inside cells, 15px for cell captions. Geist Mono tabular for every figure on the board.
This is the one direction where the Geist and shadcn register is the correct answer rather than a default, so the differentiation has to come from the honest sizing rule and the icon ban, not from the typeface.

**Layout skeleton.**
1 Hero: plain two-line headline and CTA left, a four-cell preview of the board right, so the mechanism is announced before it is used.
2 and 3 Proof and services: one grid. The five proof figures and the five services are cells on the same board, sized by the honesty rule.
4 Case studies: three cards below the board, flagship with one 440px still, two showcases with none.
5 Process: a second, shorter band of four cells with the payment gate as a chip inside each.
6 Founders: two wide cells, one per founder, city and role.
7 Engagement: a four-row table, deliberately not a grid, so the money section reads as a document.
8 FAQ: two-column accordion, seven rows.
9 Final CTA: one full-width cobalt cell.
10 Footer: four grid-aligned columns.

**Hero at 1280x800, above the fold.** Nav with wordmark, five anchors and a cobalt button; headline on two lines at 56px; subhead; button and support line; the four-cell board preview at 520x360 to the right. The full board's first row peeks at the fold.
**Hero at 390x844, above the fold.** Nav with wordmark and a button; headline on three lines at 32px; subhead; full-width button; support line; the first single cell of the preview. Below 640px the board is a single column and every span collapses to `span 1`, so the 2x2 live cell simply becomes the tallest cell in the stack.

**Motion.** Entrance: the board comes online in one 700ms pass. Every cell is already present as a 1px outline before the pass; the fill and content cross-fade in, largest cell first, 60ms stagger. It is one orchestrated moment, not a per-cell fade-and-slide.
Hover: the border goes 1px to 1.5px and the cell's figure counts once to its value. No lift, no translate, no shadow - this direction has no shadows at all, which is the specific defence against the SaaS-card-kit look.
Scroll: sticky section headers inside the board band, nothing else.
No canvas: this is the only direction with zero WebGL, which makes it the performance floor of the set and the reference for the other four.
Reduced motion: cells render filled, counters print their final value.

**Component vocabulary.** Cells are the only container: `grid-auto-rows: minmax(180px, auto)` with explicit `span` values, 1px border, 8px radius, no shadow, and never a card nested inside a cell. Chips are 12px on a 1px border at 4px radius, used for tags, payment gates and status. Nav is a conventional 64px product bar with a solid ground on scroll, no blur. Buttons come in exactly two forms, cobalt fill and neutral outline.

**Generic tells to avoid.** Equal-sized tiles with a rounded icon in the corner of each; the same soft grey shadow under every cell; gradient washes inside cells; a purple-to-blue hero gradient; a logo strip Devonel cannot honestly fill; "trusted by" above nothing; ALL-CAPS tracked-out eyebrows above each cell title.

**Reference lineage.** Solt Wagner's bentogrids.com and section galleries for grid mechanics, levithefirst's shadcn component packs and designsystemchecklist for the token discipline, Untitled UI as the density benchmark to match and then break with the sizing rule, and the curated.design, landing.love and saaspo galleries from the UI/UX Savior list for how a launch page paces itself.

### Direction 5 - "Liquid Metal"

**Idea.** A dark, near-empty page with one chrome orb and type at poster scale, built for a studio that wants to be read as expensive.

**The twist.** The orb reflects the studio's own vocabulary.
Its environment map is not an HDRI of a city or a photo studio; it is generated at runtime on a 1024px offscreen canvas holding the words Devonel says about itself - sixteen days, ships before it pitches, paid discovery, dubai, mumbai, sanchay, umayr - set white on black in Archivo Expanded.
As the orb turns, those words swim legibly across the chrome and dissolve.
The reflection costs no download, and no other site can carry it, because no other site has those words.
The headline sits behind the orb and is partly occluded by it at 1280 and above, so the letters you cannot see directly you read in the reflection. That is the one image on the whole site worth screenshotting, and it is made entirely of what the agency says rather than of anything a client sells.

**Palette.** Void `#06080D` ground, steel `#151B26` raised blocks, chrome `#DCE4EE` highlights and rules, text `#E9EDF3`, muted `#7C8798`.
Two-temperature lighting on the orb only: cold key `#8FB6FF` and warm rim `#F0C08A`, which is the studio-photography trick that stops chrome looking like grey plastic.
No third hue anywhere. The page is blue-steel and the orb is the only glossy object on it.

**Type.** Archivo variable at `wdth` 125 and `wght` 800 for display, 148px at 1280 and 44px at 390, tracking -0.02em, set in sentence case. Geist 400 at 16/1.6 for the small amount of body copy this direction carries.
Archivo is the one new family the project adds, requested through `next/font` beside the existing four. It earns the slot on its width axis: `wdth` 125 gives this direction a monumental poster face with counters heavy enough for the reflection to bite, and `wdth` 70 gives direction 3 a condensed date face, so one file covers two type systems that look nothing alike. If the type budget must stay at four families, the fallback is Space Grotesk 700 at -0.04em, which loses the width axis and with it about half of this direction's presence.

**Layout skeleton.**
1 Hero: orb centred at 560px with the headline set behind and around it, wordmark and one link in the top corners.
2 Proof: five figures as 96px numerals in two rows, captions at 14px.
3 Services: five full-width rows, each with a 3px chrome sliver on its left edge that lights on hover.
4 Case studies: two large steel cards, flagship with one 460px still, showcase with one.
5 Process: four phases as four 120px numerals with the payment gate set between them.
6 Founders: two names at 72px, roles at 16px, and a footnote stating that these are among the words the orb reflects.
7 Engagement: four terms, one per line, enormous margins.
8 FAQ: seven rows on chrome hairlines.
9 Final CTA: the orb returns at 240px and 30 percent brightness behind one button.
10 Footer: a single line.

**Hero at 1280x800, above the fold.** Wordmark top left, one link top right; the orb at 560px centred; the headline at 148px on two lines, occluded across its middle by the orb; the CTA and support line below the orb. Nothing else - the proof section starts well below the fold, and that emptiness is the direction.
**Hero at 390x844, above the fold.** Wordmark; headline on three lines at 44px, fully legible and never occluded; full-width button; support line; the top of a 300px orb. Below 900px the orb always sits under the headline and occlusion is disabled, because a partly hidden headline on a phone is a defect, not a device.

**Motion.** Entrance: the environment map builds - the words appear on the orb's surface over 1.2s as the texture canvas fills, then the orb settles into its idle. One moment, once.
Hover: pointer position tilts the orb up to 8 degrees with 200ms damping, desktop pointer only; on service rows the chrome sliver fills top to bottom.
Scroll: material roughness rises from 0.02 to 0.35 as the hero leaves the viewport, so the chrome goes matte and the page cools as you read. One uniform, no layout cost.
3D behaviour: a 128-segment sphere with `metalness` 1, `roughness` 0.02 and a `CanvasTexture` environment map, `antialias: true`, DPR clamped to 1.5, and if MSAA is unavailable render at 1.5x and downsample. The orb idles at 0.08 rad/s and pauses off-screen.
Reduced motion: a static WebP of the orb frozen at the rotation where "sixteen days" reads across the equator, about 42 KB, with occlusion disabled.
No WebGL: the same WebP over a CSS conic-gradient chrome disc, so the composition survives without the shine.

**Component vocabulary.** Slabs, not cards: steel blocks with a 1px chrome rule at 10 percent opacity, 2px radius, no shadow. Chips are 11px on a chrome hairline. Nav is two 12px items in opposite corners and nothing else, with no bar and no background. Buttons are a single chrome outline pill that fills on hover, used identically at every CTA.

**Generic tells to avoid.** A generic chrome sphere on black with an HDRI, which is the single most reproduced 3D hero of the year; iridescent oil-slick gradients; a caption saying "liquid metal"; the orb floating over a starfield or a grid; oversized type set in a default grotesk at a default weight; more than one glossy object on the page.

**Reference lineage.** kartikey's liquid, metal and orb effect libraries for the material target, Meng To's ThreeUI for the procedural material and lighting setup, Daviowhite's big-company lander file for hero and header density at poster scale, and curated.design for how much emptiness a studio page can carry.

### Distinctness matrix

One phrase per pair, upper triangle only; the lower triangle mirrors it.
If a builder cannot state the phrase for their pair while looking at both screenshots, the two directions have converged and one of them is wrong.

| | 1 Studio Dark | 2 Shader Light | 3 Scroll Story | 4 Bento SaaS | 5 Liquid Metal |
|---|---|---|---|---|---|
| **1 Studio Dark** | - | matte object in a void against lit paper atmosphere | fixed darkness against a ground that travels night to day | one lit object with no grid against a filled grid with no canvas | wireframe, achromatic, warm lamp against solid chrome, blue-steel, poster type |
| **2 Shader Light** | - | - | still paper that breathes against a page whose value inverts as you read | borderless atmospheric colour against hard 1px borders and no atmosphere | light, serif, quiet against dark, expanded grotesk, loud |
| **3 Scroll Story** | - | - | - | one continuous scroll spine against a board you can screenshot in one frame | narrative that changes value against one fixed image held at full contrast |
| **4 Bento SaaS** | - | - | - | - | information density at 16px against near-empty pages at 148px |
| **5 Liquid Metal** | - | - | - | - | - |

Cross-set balance to hold: two dark directions (1, 5) that share no palette, no material and no type system; two light directions (2, 4) that share no ground, no border language and no motion model; one that is neither because it is both in sequence (3).
Three directions carry `three` (1, 3, 5), one carries Paper Shaders (2), one carries no canvas at all (4).

## 5. Responsive and aspect-ratio test matrix

Test every variation at these viewports in Chrome device mode, plus real-device checks on one iPhone and one Android when available.
Text zoom at 125% and `prefers-reduced-motion: reduce` are part of the matrix, not extras.

| Viewport | Size | Aspect | What commonly breaks |
|---|---|---|---|
| Phone portrait | 390 x 844 | 9:19.5 | Pinned or 100vh heroes clip under the browser chrome; headlines over 4 lines; proof figures wrap into a mess; sticky CTA covers the footer; a canvas sized from the window rather than its container pushes horizontal scroll. |
| Phone landscape | 844 x 390 | 19.5:9 | Anything using `100vh` shows only the headline; pinned heroes lock the user; horizontal bento cards become 60px tall; a sticky bar plus a canvas leaves under 200px of readable content. |
| Tablet portrait | 820 x 1180 | 3:4.3 | Two-column layouts that assume 1024px squash to two narrow columns; sticky sidebars start too early; hover-only reveals never fire on touch. |
| Laptop | 1280 x 800 | 16:10 | The hero object or shader field cropped so its subject sits off-centre; 160px section gaps stack into a lot of empty space; nav plus hero plus proof strip do not fit one screen. |
| Desktop | 1536 x 864 | 16:9 | Type set with `vw` gets too large; case-study images upscale and blur; the 12-column grid shows visible gutter drift if max-width is not set. |
| Ultrawide | 1920 x 1080 and 2560 x 1080 | 16:9 and 21:9 | Full-bleed sections with centred 1280px content look abandoned at the edges; background shaders and grids reveal repetition; footers become a thin line. |

### Six named risks for round 2

These are the failures the canvas and shader work introduces.
Each one has a test and a fix that is already designed into section 4, so a builder who hits it is deviating from the direction rather than discovering a new problem.

1. **WebGL load and LCP.** Symptom: the hero canvas is in the initial bundle, `three` blocks first paint, and mobile LCP lands past 4s. Test: Lighthouse mobile on every variation root, plus a throttled 4x CPU trace confirming which element is LCP. Fix: the headline text is the LCP element in all five; the canvas is `next/dynamic` with `ssr: false`, mounted on hero intersection or `requestIdleCallback`, and never in the entry chunk. Direction 4 carries no canvas and is the reference score the other four are measured against.
2. **Canvas overflow on phone.** Symptom: the canvas sizes from `window.innerWidth` rather than its container, or a square object in a narrow column pushes a horizontal scrollbar, or iOS Safari's shrinking chrome resizes the drawing buffer every scroll frame. Test: at 390 and 844 wide, `document.documentElement.scrollWidth` must equal the viewport width, and the canvas must not resize while scrolling. Fix: the canvas is sized from a `ResizeObserver` on its own wrapper, the wrapper is `overflow: hidden` with `max-width: 100%`, `100vh` is banned in favour of `100dvh`, and direction 3 does not mount its ring below 1100px at all.
3. **Text over shaders contrast.** Symptom: body copy set directly on a moving mesh gradient drops below 4.5:1 as the field animates, and passes an audit only because the audit sampled one frame. Test: sample contrast at four frames across the shader's full period, at both the day and the night pole colours, at 390 and 1920. Fix: direction 2 caps the field at 22 percent over paper, and all body copy sits on solid white plinths with hard edges. No text sits on a live shader anywhere in the set. The final CTA block, which is the only place the field runs at full opacity, holds its button inside a solid card.
4. **Pinned scroll on iOS.** Symptom: a full-viewport pinned section fights Safari's address-bar resize, the pin releases early, the user is trapped, or reduced-motion users get a scene that never advances. Test: real iPhone Safari and Android Chrome, portrait and landscape, plus a keyboard-only pass through the pinned range and a `prefers-reduced-motion` pass. Fix: nothing in round 2 pins the full viewport and nothing hijacks scroll. Direction 3's only sticky element is a 48px bar; its value ramp uses `animation-timeline: scroll()` where supported so it runs off the main thread, and its reduced-motion path renders three fixed bands with no interpolation at all.
5. **Bento cells with unequal heights.** Symptom: an auto-height grid leaves a short cell floating against a tall neighbour, a 2x2 cell collapses to the height of its text, or the honest sizing rule inverts at a breakpoint so an outline-only cell ends up the largest thing on screen. Test: at 390, 640, 820, 1280 and 1920, screenshot the board and confirm the live 2x2 cell is the largest cell at every width and that no row has a gap under a cell. Fix: `grid-auto-rows: minmax(180px, auto)` with explicit spans, every cell a flex column with its caption pinned to the bottom, and below 640px every span collapses to `span 1` so the live cell becomes the tallest cell in a single column rather than competing for width.
6. **Orb aliasing.** Symptom: the chrome sphere's silhouette stair-steps, the reflected words shimmer as it turns, and the whole thing looks cheap at exactly the moment it is meant to look expensive. Test: 2x screenshots of the hero at 390, 1280 and 2560, inspected at 200 percent for edge steps and for crawling on the reflected type. Fix: `antialias: true`, a 128-segment sphere, DPR clamped to 1.5, and a render-at-1.5x-and-downsample path where MSAA is unavailable. The environment-map canvas is 1024px with its type set no smaller than 96px so the reflection has nothing thin enough to crawl.

### Per-section failure points to check at every width

- Hero: headline widows; CTA below the fold; the canvas painting before the headline; on direction 5, the orb occluding the headline at any width below 900px, where occlusion must be off.
- Proof strip: figures that reflow when a counter changes digit width; the quote attribution wrapping to three lines; on direction 3, the flash-forward band inheriting the wrong ramp stage and losing contrast.
- Services: rows whose hover-revealed scope line is unreachable on touch or by keyboard; on direction 4, a cell losing its caption when the grid collapses; colour or fill state that reads as disabled rather than as outline-only.
- Case studies: a client still rendered wider than 480px, rendered full-bleed, or rendered behind text, all of which break the imagery rule; sticky copy taller than the viewport; the case still upscaling and blurring at 2560.
- Process: the payment gate separating from its phase when the rail wraps; four phases becoming a horizontal scroller on mobile; the gate chip losing contrast at the ramp stage direction 3 places it in.
- Founders: names wrapping mid-word at 390; on direction 5, the 72px names overflowing the container; the optional Noora line rendering when consent has not been given.
- Engagement: the four-row table needing horizontal scroll at 390; on direction 4, the table inheriting cell styling and collapsing back into the grid it was meant to break.
- FAQ: accordion focus rings clipped by `overflow: hidden`; answers with no measure limit on ultrawide; on direction 2, all seven answers open pushing the final CTA past three screens.
- Final CTA and footer: the reprised canvas mounting a second WebGL context instead of reusing or releasing the first; inputs under 16px causing iOS zoom; the sticky mobile CTA covering the footer; the mailto link rendered as a label instead of live text.
- Every section, every direction: a second WebGL context anywhere on the page is a failure, `prefers-reduced-motion` must be checked on first paint and not after the entrance has already run, and the no-WebGL fallback must be verified by disabling WebGL in the browser rather than by reading the code.
