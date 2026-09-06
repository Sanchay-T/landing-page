# Devonel master copy

One copy document for all five variations.
The substance is identical across v1 to v5; only tone is tuned, per the notes at the end of each section.
Facts come only from `docs/goal/01-business-brief.md`, cited inline as `[brief X.Y]`.
Intake and the full never-publish list live in `.claude/product-marketing.md`.

## Contact plumbing (read this before building any CTA)

The site reads contact from `lib/site.ts`. No section hardcodes a channel.
`contact.email = "sanchay@devonel.com"` - live now, and the only channel that resolves today [chat, business email used with clients 2026-08-27].
`contact.whatsapp = ""` - E.164, empty until Sanchay adds it. No publishable WhatsApp number exists in any source, so none is guessed.
The shared `ContactCTA` component picks the primary action from that config:
- Number set: primary is the WhatsApp button, `https://wa.me/<number>?text=...`, and email is the second line.
- Number empty (today): primary is the email button, `mailto:sanchay@devonel.com?subject=Brief%20for%20Devonel`.

Exact mailto subject to prefill everywhere: **Brief for Devonel**.

What this means for copy:
- The primary CTA is channel-neutral: **Send your brief**. It reads correctly in both states, so no section needs two versions of the button.
- Support line under it is **Paid discovery, fixed scope, no forms.** [brief 5][brief 9.5]. There is no reply-time promise anywhere on the page, because the brief supports none.
- On-page copy never names WhatsApp as a contact channel while `contact.whatsapp` is empty. Lines marked *conditional* below render only when it is set.
- The email address is written as live text and linked, never hidden behind a label.
- "WhatsApp lead systems" stays on the page as a service Devonel builds for clients [brief 3][brief 4.3]. That is product vocabulary, not a contact channel, and it is not gated.
- No contact form anywhere [brief 9.9].

## How to use this document

Take headline, subhead, body, labels and CTA text verbatim unless the per-variation note says otherwise.
Alternates are for layout pressure, not for taste; if you use one, use it in that variation only and keep the primary CTA wording unchanged.
Anything not in this document does not go on the page.

Source key: `[brief 1]` what Devonel is, `[brief 2]` founders, `[brief 3]` services, `[brief 4.1]` the jewellery studio, `[brief 4.2]` the app store readiness audit, `[brief 4.3]` the watch boutique, `[brief 4.4]` the founder's clinic software business, `[brief 4.5]` other evidence, `[brief 5]` customers and deals, `[brief 6]` site intent, `[brief 7]` voice, `[brief 8]` never publish, `[brief 9.1]` to `[brief 9.10]` defaults.
`[offer term]` marks a commitment Devonel is making on the site, consistent with the brief but not a claim about delivered work; the orchestrator confirms these with Sanchay before launch.

## Constants

`CLIENT_JEWELLERY` = "a bespoke jewellery house in Dubai" [brief 9.1].
Use this string everywhere the jewellery client is referenced; the real brand name is confidential and appears nowhere in this repo [brief 8].
`CLIENT_WATCH` = "a luxury watch boutique in Dubai", only ever attached to work marked in progress [brief 4.3][brief 8].
`EMAIL` = **sanchay@devonel.com**, the devonel.com business mailbox used with clients [brief 1][chat, business email used with clients 2026-08-27]. Print it as live text, link it as `mailto:sanchay@devonel.com?subject=Brief%20for%20Devonel`.
`WHATSAPP` = config-gated: `lib/site.ts` `contact.whatsapp`. Empty today, so no WhatsApp string appears on any page [brief 8][brief 9.9].

## Canonical primary CTA

Primary CTA text, repeated at every decision point on every variation: **Send your brief** [brief 9.9].
Channel-neutral on purpose: `ContactCTA` resolves it to WhatsApp or to email from `lib/site.ts`, so the same three words work in both states (config-gated: `lib/site.ts` `contact.whatsapp`).
Support line under every instance: **Paid discovery, fixed scope, no forms.** [brief 5][brief 9.5]
No reply-time promise appears under any CTA; the brief carries none, so none is written.
Only sanctioned secondary action: open the flagship case study [brief 6].
No contact form anywhere; every deal so far closed over WhatsApp and Google Meet [brief 9.9].

## Voice contract

Short sentences, one thought per line, no hedging [brief 7].
Concrete nouns and delivery verbs: ship, build, wire, hand over, run [brief 7].
No exclamation marks, no em dashes, no prices, no currency figures [brief 9.5].
Banned words on every surface: cutting-edge, seamless, unlock, empower, revolutionize, leverage, synergy, next-gen, world-class, streamline, optimize, innovative, powerful platform.

---

## 1. Hero

**Buyer question:** Who are you, what do you build, for whom, and is there one reason to keep reading?

**Eyebrow:** AI product studio and growth partner [brief 9.4]

**Headline:** Sixteen days from brief to a product your customers use.

**Subhead:** Devonel builds and runs the software owner-led brands sell with.
We shipped a name-pendant studio for a bespoke jewellery house in Dubai on the morning of their exhibition stall.

**Proof hook, sits under the CTA:** "the layout is very good and simple" - the owner, a bespoke jewellery house in Dubai.

**CTA:** Send your brief
**CTA support:** Paid discovery, fixed scope, no forms.

**Headline alternates**
- A. "The studio that ships before it pitches." - leads on the gap the founders identified in their own market, that nobody shows anything real up front; short enough for a poster or a shell prompt.
- B. "AI product studio for owner-led brands in Dubai and Mumbai." - category, audience and geography in one line for a cold visitor; use when the sixteen-day fact moves down into the subhead.

**CTA alternates**
- A. "Book a scoping call" - neutral wording that survives every layout; use where the button opens a call link instead of the configured contact channel.
- B. "Get a scope and a price" - names what the first paid step produces, which answers the money question at the button.

**Sources:** spec received 11 Aug 2026 and live 27 Aug 2026, sixteen days [brief 4.1]; shipped the morning of the client's exhibition stall [brief 4.1]; client quote [brief 4.1]; positioning line [brief 9.4]; geography [brief 9.7]; channel [brief 9.9].

**Per-variation tone**
- v1 Broadsheet: spell "Sixteen days" and set a dateline above the masthead; the client quote runs as a pull-quote in the right columns.
- v2 Terminal: numerals, lowercase, terse. Headline as shell output: `devonel --ship pendant-studio` then `> live in 16 days`. CTA is a caret prompt.
- v3 Nightshift: cut the subhead to its first sentence over the video; the sixteen-day fact fades in as a single line after the loop.
- v4 Swiss Signal: split the headline across two lines, "Sixteen days" in the accent colour, the rest in black; eyebrow becomes a coloured tag.
- v5 Console: keep the headline as written, pair it with the real studio screenshot in a window frame, and put the client quote in an annotation callout.

---

## 2. Proof strip

**Buyer question:** Is any of this live, and did a real client pay for it?

**Label:** Proof of work [brief 7]

**Headline:** Shipped, not promised.

**Counts, all sourced, no invention**
- One product live: a name-pendant studio for a bespoke jewellery house in Dubai, 27 Aug 2026 [brief 4.1].
- Sixteen days from spec to live [brief 4.1].
- Four renders per design, the first in about two minutes [brief 4.1].
- More than 25 screens covered in an app store readiness audit [brief 4.2].
- Two cities: Dubai and Mumbai [brief 9.7].

**Testimonial:** "the layout is very good and simple" - the owner, a bespoke jewellery house in Dubai, on the day the studio went live [brief 4.1].

**Secondary CTA:** See how it was built

**Headline alternates**
- A. "One product live. Two more in build." - the honest count; states the studio's age up front so the single case reads as real rather than thin.
- B. "Briefed on the 11th. Live on the 27th." - dateline form, strongest under an editorial masthead; drops the category words the hero already carried.

**CTA alternates**
- A. "Open the case study" - plain and unambiguous where the strip sits directly above the case section.
- B. "Read the build log" - matches the terminal and console registers and promises detail, not marketing.

**Per-variation tone**
- v1 Broadsheet: set the counts as a folio row with hairline rules between them; no boxes.
- v2 Terminal: counts as tabular figures with number-flow counters; testimonial as a quoted line prefixed with `#`.
- v3 Nightshift: only two counts survive, sixteen days and four renders, fading in over the last second of the hero loop.
- v4 Swiss Signal: each count gets its own flat colour block; the testimonial sits in the black block.
- v5 Console: counts as a stat row above the first screenshot; the testimonial gets an avatar-free attribution line in mono.

---

## 3. Services

**Buyer question:** What exactly can I buy from you?

**Label:** What you buy

**Headline:** Five things we build.

**Subhead:** Each one is scoped, dated and priced in paid discovery before a line of code is written.

**The five**

1. **Customer-facing product studios.**
   Let your customer design the thing before they buy it.
   A web app they configure, preview and order in, with the quote issued and accepted in the same screen [brief 4.1].
   Not a customisation field bolted onto a store page [brief 4.1].

2. **Generated product media.**
   Product images and video without a shoot for every variant.
   On-brand stills and video that hold the same person, the same brand voice and the local language [brief 3].
   Four finished renders per pendant design on the live studio, the first in about two minutes [brief 4.1].

3. **Agent systems and harnesses.**
   Automation you can watch working.
   Agents with verification loops, browser control and telemetry, so you see what ran and what failed [brief 3].
   It is the same harness this studio runs its own build work on [brief 3].

4. **WhatsApp lead systems.**
   A number that answers while the lead is still warm.
   Qualify, answer and hand over on the channel your customers already use, wired to the inbox or tool you already pay for [brief 3][brief 4.3].

5. **App store readiness.**
   Find what will fail review before you submit.
   One audit across screens, billing, notification scheduling, privacy and store policy, with the blockers listed in the order they will bite [brief 4.2].

**Standing lines under the grid**
Who is on it: both founders, on every engagement, from the first message [brief 2][offer term].
Duration is fixed in discovery and written into the scope, not estimated on a call [brief 5][offer term].
Buy versus build: if you should buy something off the shelf instead, we say so in discovery [brief 3].

**Headline alternates**
- A. "What you can buy today." - plain, avoids a count that changes if a service is retired.
- B. "Five builds. One team on all of them." - pairs the offer with the trust answer where services sit next to the founders block.

**CTA alternates**
- A. "Tell us which one you need" - removes the blank-page problem for an owner who cannot name the build yet.
- B. "Get a scope and a price" - reuses the hero alternate so the page keeps one promise end to end.

**Per-variation tone**
- v1 Broadsheet: five numbered entries in a column grid with drop caps; no cards, no icons.
- v2 Terminal: render as a file tree, `01_product-studios` down to `05_store-readiness`, each with a one-line comment.
- v3 Nightshift: three services above the fold of this section, two below; each headline over its own still frame.
- v4 Swiss Signal: bento grid, one flat colour per service, and that colour follows the service everywhere else on the page.
- v5 Console: each service is a tab; selecting it swaps the screenshot on the right to a real artefact from that kind of work.

---

## 4. Case studies

**Buyer question:** Show me one you finished, what you actually built, and what happened when real customers touched it.

**Label:** Proof of work

**Headline:** One shipped, two in build, nothing invented.

### Flagship case: the name-pendant studio

**Card title:** A name-pendant studio, live for an exhibition stall in sixteen days.
**Tags:** Jewellery. Dubai. Product studio. Shipped 27 Aug 2026.

**Problem.**
A bespoke jewellery house sells pendants cut to a customer's name.
Before ordering, the customer could not see their own name as a finished piece.
A customisation field on a store page is a text box, not a design studio [brief 4.1].

**What we built.**
Type a name in Arabic or English and take a spelling suggestion [brief 4.1].
Choose one name or two, then the style, the metal, the stones, the size and the chain [brief 4.1].
Watch a live preview update as you choose, then approve the spelling [brief 4.1].
The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame [brief 4.1].
Download full screen, see a price estimate and request a quote [brief 4.1].
The operator issues the quote and the customer accepts it in the same screen [brief 4.1].

**How it holds up.**
Four stills run at once and each releases its on-neck version as soon as that one is ready [brief 4.1].
Under model provider limits the queue is shown honestly instead of hidden behind a spinner [brief 4.1].
A retry fallback and a time estimate went in on launch morning [brief 4.1].

**Stack.**
Next.js, React, strict TypeScript, Supabase, Trigger.dev, gpt-image-2, fal.ai Seedance, Sentry, PostHog, DigitalOcean [brief 4.1].

**Result.**
Spec on 11 Aug 2026.
Live on the morning of 27 Aug 2026, in time for the client's exhibition stall [brief 4.1].
The owner's note on the first version: "the layout is very good and simple" [brief 4.1].
The one complaint was generation time, which is set by the model providers, and we said so [brief 4.1].

**What came next.**
Scope locked to six design styles and three layouts [brief 4.1].
Pendant sizing tightened in the renders, with pricing verification and usage control moved into the next scope [brief 4.1].

### Showcase: app store readiness audit

**Card title:** An audit that found the launch blockers before submission.
**Tags:** Mobile app. Audit delivered.
A client had built a mobile app and wanted it ready for the stores, not rebuilt [brief 4.2].
We read the whole thing: five tabs, more than 25 screens [brief 4.2].
The audit listed what would stop a launch: ad units still on test IDs, store billing not wired, a notification cap that needs a rolling scheduler, a privacy policy that contradicted the ads, and in-app account deletion missing [brief 4.2].
Status: audit delivered, build not started [brief 4.2].

### Showcase: WhatsApp lead system

**Card title:** Leads that answer back, for a luxury watch boutique in Dubai.
**Tags:** Retail. WhatsApp. In progress.
Leads were arriving on WhatsApp and going cold in the boutique's current tool [brief 4.3].
We ran discovery on the same channel and timed how long competitors took to answer the same question; most took hours and some never replied [brief 4.3].
The scope is a lead system that answers, qualifies and hands over.
Status: in progress, discovery started 25 Aug 2026 [brief 4.3].

**Headline alternates**
- A. "Three files. One shipped, two open." - ledger framing that suits the editorial and terminal directions and states the honest count.
- B. "The work, with dates on it." - puts verifiability first, which is the thing this buyer is checking.

**CTA alternates**
- A. "Read the full build" - the natural next click inside a case card and the only sanctioned secondary action.
- B. "Ask how we would do yours" - converts the reader who has just recognised their own problem in the case.

**Per-variation tone**
- v1 Broadsheet: the flagship runs as a full article with a standfirst, running heads and figure captions; showcases are two short columns below the rule.
- v2 Terminal: each case is a log block with a timestamped header; the stack is a plain word list, no logos.
- v3 Nightshift: one full-bleed render per case, text in a 720px measure, showcases reduced to three lines each.
- v4 Swiss Signal: poster cards, outcome title at 72px, one number per card, colour inherited from the matching service.
- v5 Console: the flagship is a sticky-left, scrolling-right screenshot walkthrough with annotation callouts on each step of the flow.

---

## 5. Process

**Buyer question:** What happens after I say yes, what do I pay and when, and what do I get in the meantime?

**Label:** How we work

**Headline:** Four phases. You pay before each one starts.

**Subhead:** Every phase ends in something you can open, not a status update.

**Phase 1 - Discovery.**
Paid, small and fixed.
You get a written scope, a build plan, a date and a fixed price for the build [brief 5][brief 9.5].
It is credited against the build if you continue [brief 5].

**Phase 2 - Build.**
Fixed scope, paid before the phase starts [brief 9.5].
Each week you get a working link, a written changelog and the open questions in one message [offer term].

**Phase 3 - Launch.**
We deploy, and error tracking and product analytics are wired in before customers arrive [brief 4.1].
We stay on the thread through the first days, the way we did on launch morning of the jewellery studio [brief 4.1].

**Phase 4 - Run.**
Monthly retainer for monitoring, fixes and the next scope [brief 5][brief 9.5].
Model API and infrastructure costs are billed separately, at cost [brief 5].

**After handover.**
Either the retainer continues, or the engagement ends with a handover session and a written list of what runs where [brief 4.1][offer term].
We do not go quiet on either path.

**Two rules that do not move.**
Minimum commitment up front on every engagement [brief 5][brief 9.5].
No unpaid multi-month starts; we have been offered one and said no [brief 5].

**Headline alternates**
- A. "Paid discovery. Fixed build. Monthly run." - three nouns the buyer can repeat to a partner; strongest as a poster line.
- B. "You always know what the next payment buys." - answers the money anxiety directly instead of describing the sequence.

**CTA alternates**
- A. "Start with paid discovery" - names the smallest first commitment, the lowest-friction yes on the page.
- B. "Send your brief" - the canonical wording, used when this section sits far from the hero.

**Per-variation tone**
- v1 Broadsheet: four numbered heads with running rules and a folio number per phase.
- v2 Terminal: four steps as a state machine, `discovery -> build -> launch -> run`, with the payment gate printed between each arrow.
- v3 Nightshift: phases as four slow slides, one line each, the payment gate as the only bright element.
- v4 Swiss Signal: draw the four phases as a metro line, one station per phase, payment gates as interchange dots.
- v5 Console: phases as a checklist panel, each with the artefact it produces shown as a real document thumbnail.

---

## 6. Founders

**Buyer question:** Who am I actually hiring, and will they be on the call?

**Label:** Who you work with

**Headline:** Two founders. Both of them on your project.

**Subhead:** You talk to the people who build the work and price it, from the first message to handover.

**Sanchay Thalnerkar - Mumbai.**
Builds the systems: agent harnesses, verification loops, browser automation and generated media pipelines [brief 2][brief 3].
Also builds and sells clinic software in Australia and India [brief 9.3][brief 4.4].

**Umayr Sheik - Dubai.**
Relationship and commercial lead [brief 2].
Owns prompt craft and creative direction, data and analytics, and enterprise AI context [brief 2].

**Noora - Dubai.** *(optional role line, publish only with her consent [brief 9.6])*
Commercial lead on proposals and go-to-market [brief 2].

**Standing line:** Two cities, one thread, and no layer between you and the people building [brief 2][brief 9.7].

**Headline alternates**
- A. "You work directly with the builders." - the exact phrase buyers scan an agency page for.
- B. "Dubai and Mumbai. The same two people all the way through." - geography plus continuity in one line where the section carries no map.

**CTA alternates**
- A. "Message the founders" - makes the contact personal at the moment the reader is deciding about people; resolves to whichever channel `lib/site.ts` has configured.
- B. "Book a call with both of us" - removes the fear of being handed to someone junior after signing.

**Per-variation tone**
- v1 Broadsheet: bylines with roles set as a masthead colophon; no portraits needed.
- v2 Terminal: two records printed as key-value pairs, `location`, `owns`, `contact`.
- v3 Nightshift: one low-light portrait or generated frame each, name in serif, role in small caps.
- v4 Swiss Signal: two colour blocks, name at 40px, role list as short bullets.
- v5 Console: founder cards styled as account rows with a status line, "on every project".

---

## 7. Engagement

**Buyer question:** How much is this, and if you will not print a number, how does a quote work?

**Label:** How a quote works

**Headline:** No prices on this page. Here is exactly how we get to one.

**Subhead:** Scope sets the number, so we write the scope first and you pay for that step.

**Four ways to work with us** [brief 9.5]
- **Paid discovery.** A small fixed first scope that produces the plan, the date and the price. Credited against the build [brief 5].
- **Fixed-scope build.** One price for one written scope, paid before the phase starts [brief 9.5].
- **Monthly retainer.** Running, monitoring, fixes and the next scope after launch [brief 5].
- **Revenue share.** Optional, on top of the fee, never instead of it [brief 5][brief 9.5].

**What we do not do** [brief 5]
Minimum commitment up front on every engagement.
No unpaid multi-month starts.

**Costs we pass through.**
Model API and infrastructure costs are billed separately, at cost, and itemised [brief 5].

**Headline alternates**
- A. "We price the scope, not the hour." - sets the model in one line and pre-answers the hourly-versus-fixed question.
- B. "The first thing you buy is the plan." - makes paid discovery the offer rather than a gate in front of the offer.

**CTA alternates**
- A. "Start with paid discovery" - names the exact commercial step described directly above it.
- B. "Get a scope and a price" - restates the deliverable for a reader still deciding whether the first payment is worth it.

**Per-variation tone**
- v1 Broadsheet: set as a classified-ad box with rules, terms listed like rate-card lines.
- v2 Terminal: four options as a plain list with a `#` comment each; the two rules as a `constraints` block.
- v3 Nightshift: three lines only, the fourth option revealed on interaction; the rest moves to the FAQ.
- v4 Swiss Signal: four coloured tiles, one word each, terms underneath in 18px.
- v5 Console: an engagement table with columns for what you get, when you pay and what it ends with.

---

## 8. Objections and FAQ

**Buyer question:** The last few things I need answered before I pay anything.

**Label:** Before you pay

**Headline:** The questions we get before the first payment.

**Q. What does it cost?**
There is no price on this page because the scope sets the number.
Paid discovery is the first and smallest step, and it ends with a written scope and a fixed price for the build [brief 5][brief 9.5].
There is a minimum commitment up front on every engagement [brief 5].

**Q. Will this work for a business like mine?**
We build for owner-led brands with money to spend and no technical team of their own [brief 5].
So far that is jewellery, watches and retail in the UAE, with build capacity in India [brief 5].
If your customer buys something configurable, it is the same problem we already solved [brief 4.1].

**Q. How fast is it?**
The jewellery studio went from spec to live in sixteen days, finishing on one overnight build [brief 4.1].
That scope had a hard external date, an exhibition stall, and it made it [brief 4.1].
Your date comes out of discovery and goes into the scope in writing [brief 5][offer term].

**Q. Who actually builds it?**
Two founders, one in Dubai and one in Mumbai, and you are on a thread with both [brief 2][brief 9.7].
We bring in specialists for creative and delivery when a scope needs them, and we tell you who is on your project before you pay [brief 2][offer term].

**Q. What if the generated output is not good enough?**
Image and video models have real limits on speed and consistency, and we build around them instead of pretending otherwise [brief 4.1].
On the jewellery studio the four renders run at once, each appears as soon as it is ready, and the queue is shown honestly rather than hidden [brief 4.1].
The client's note on the first version was that the layout was very good and simple; the only complaint was generation time, and that limit belongs to the model providers [brief 4.1].

**Q. What happens after launch?**
Either we stay on a monthly retainer for running, fixes and the next scope, or the engagement ends with a handover session and a written list of what runs where [brief 5][offer term].
We do not go quiet on either path.

**Q. Why do I need a studio if I already have AI tools?**
Most owners we meet already have tools, several vendors and no structure holding them together [brief 1].
What is missing is one team that owns the outcome, ships it, and is still there when it breaks on the morning of an exhibition [brief 1][brief 4.1].
Fixing automations someone else sold you is a real part of our work [brief 1].

**Headline alternates**
- A. "Answers before the invoice." - short, honest, works as a poster line above an accordion.
- B. "Seven questions, answered in writing." - the count signals completeness and "in writing" is the trust move.

**CTA alternates**
- A. "Ask the one we missed" - converts the reader whose objection is not on the list straight into the channel.
- B. "Send your brief" - canonical wording, used when the FAQ sits immediately above the final CTA.

**Per-variation tone**
- v1 Broadsheet: questions as bold running heads, answers in body serif, no accordion.
- v2 Terminal: questions as `> q:` lines, answers as output; the accordion steps open with no easing.
- v3 Nightshift: four questions on the page, three behind a reveal, all in a narrow measure over black.
- v4 Swiss Signal: accordion rows with a coloured left edge that changes colour as each row opens.
- v5 Console: two-column FAQ with the relevant screenshot or document beside the answer that references it.

---

## 9. Final CTA

**Buyer question:** What is the one thing I do next, and what does it cost me if I am wrong?

**Label:** Start

**Headline:** Send the brief. We send back a scope.

**Subhead:** Paid discovery is small and fixed, and it ends with a written scope, a date and a price.
If you stop there, the plan you paid for is still yours [brief 5][offer term].

**CTA:** Send your brief
**CTA support:** Paid discovery, fixed scope, no forms.

**Channel line, always on:** Email sanchay@devonel.com. No forms [brief 9.9].
Render the address as live text and link it to `mailto:sanchay@devonel.com?subject=Brief%20for%20Devonel`.

**Channel line, conditional:** append ", or message us on WhatsApp" to the line above only when `contact.whatsapp` is set in `lib/site.ts`. While it is empty the clause does not render and WhatsApp is not named here.

*Implementation note, not on-page copy: WhatsApp: shown here once configured.*

**Proof beside the button:** "the layout is very good and simple" - the owner, a bespoke jewellery house in Dubai. Shipped 27 Aug 2026 [brief 4.1].

**Headline alternates**
- A. "One message is enough to start." - lowest possible perceived effort at the exact point of action.
- B. "Tell us the date you need it live." - mirrors the strongest fact on the page, a hard external date, and qualifies the lead in one line.

**CTA alternates**
- A. "Book a scoping call" - for readers who want a meeting rather than a chat thread.
- B. "Start with paid discovery" - names the commercial step, best where the engagement section sits directly above.

**Per-variation tone**
- v1 Broadsheet: a classified-ad box, ruled, with the contact lines set as small print.
- v2 Terminal: a blinking caret prompt, `press enter to send your brief`, with the channel printed underneath.
- v3 Nightshift: full-bleed black, one glowing pill button, the quote fading in beside it.
- v4 Swiss Signal: full-width colour panel, black block button, headline at 120px.
- v5 Console: sticky footer bar on scroll plus a full block at the end, with the case screenshot behind it at low contrast.

---

## 10. Footer

**Buyer question:** Where are you, how do I reach you, and is this a real business?

**Sign-off line:** Devonel. AI product studio and growth partner for owner-led brands [brief 9.4].

**Location:** Dubai and Mumbai. Working with clients across the UAE, India and remote [brief 9.7].

**Contact**
Email: sanchay@devonel.com, as live text linked to `mailto:sanchay@devonel.com?subject=Brief%20for%20Devonel` [brief 9.9][chat, business email used with clients 2026-08-27].
WhatsApp: conditional. The line renders only when `contact.whatsapp` is set in `lib/site.ts`; while it is empty the footer names no chat channel.
No contact form [brief 9.9].

*Implementation note, not on-page copy: WhatsApp: shown here once configured.*

**Navigation:** the ten section anchors, the flagship case study page, and the variation switcher.

**Legal and provenance**
2026 Devonel.
Every piece of work shown here was built by Devonel.
Client names appear only with the client's permission [brief 8][brief 9.1].
Page last revised 7 Sep 2026.

**Sign-off alternates**
- A. "Two cities. One thread." - compresses geography and channel into a single footer line.
- B. "Make work speak." - the founders' own phrase, the one piece of internal vocabulary worth printing [brief 7].

**CTA alternates**
- A. "Send your brief" - canonical wording, repeated as the last item on the page.
- B. "Email the studio" - names the channel outright for a reader who wants mail; use it only as the second line once `contact.whatsapp` is set, since while it is empty the primary button already opens mail.

**Per-variation tone**
- v1 Broadsheet: colophon block with rules, revision line set as small print in the gutter.
- v2 Terminal: footer as a shell exit line with the contact strings printed as plain values.
- v3 Nightshift: one thin line of 8% white hairline text on black, contact only.
- v4 Swiss Signal: black panel, four columns, contact in the accent colour.
- v5 Console: standard product footer with a status row, "last revised 7 Sep 2026".

---

## Open items handed to the orchestrator

`EMAIL` - closed. Resolved to sanchay@devonel.com, the mailbox already used with clients [brief 1][chat, business email used with clients 2026-08-27]. It ships in `lib/site.ts` as `contact.email`.
`WHATSAPP` - open, and config-gated rather than copy-gated: `lib/site.ts` `contact.whatsapp` is empty and no publishable number exists in any source [brief 8][brief 9.9]. Every CTA and contact line already reads correctly without it, so setting the value is the only remaining step.
`CLIENT_JEWELLERY` - swap to the real brand name only on written approval from the client [brief 9.1].
Noora's role line - publish only if she agrees [brief 9.6].
Code and account ownership at handover - the brief records a handover but never states who owns the code, so no ownership claim appears in this copy; confirm with Sanchay before adding one.
Every `[offer term]` line - weekly build cadence, the written handover list, "we tell you who is on your project", and "the plan you paid for is still yours" are commitments Devonel is choosing to make, consistent with the brief but not claims about delivered work. Confirm before launch.
