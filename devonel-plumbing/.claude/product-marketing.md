# Devonel product marketing context

Intake for the `copywriting` and `cro` skills so they skip the interview.
The only source of facts is `docs/goal/01-business-brief.md`.
Nothing here may be added, softened or extended without a line in that brief.

Source key used in brackets throughout:
`[brief 1]` what Devonel is, `[brief 2]` founders and roles, `[brief 3]` services, `[brief 4.1]` the jewellery name-pendant studio, `[brief 4.2]` the app store readiness audit, `[brief 4.3]` the watch boutique, `[brief 4.4]` the founder's clinic software business, `[brief 4.5]` other evidence, `[brief 5]` customers and deals, `[brief 6]` site intent, `[brief 7]` voice, `[brief 8]` never publish, `[brief 9.1]` to `[brief 9.10]` the recommended defaults.
`[offer term]` marks a commitment Devonel makes on the site that is consistent with the brief but is not a claim about delivered work; the orchestrator confirms these with Sanchay before launch.

## 1. Constants and swap-ins

`CLIENT_JEWELLERY` = "a bespoke jewellery house in Dubai" [brief 9.1].
The real brand name is confidential and lives only in the brief; it is swapped in as one constant if the client approves [brief 8].
`CLIENT_WATCH` = "a luxury watch boutique in Dubai", used only for work marked in progress [brief 4.3][brief 8].
`EMAIL` = sanchay@devonel.com, the live devonel.com business mailbox already used with clients [brief 1][chat, business email used with clients 2026-08-27]. It ships as `contact.email` in `lib/site.ts`.
`WHATSAPP` = config-gated: `lib/site.ts` `contact.whatsapp`, E.164, empty until Sanchay sets it. The brief confirms WhatsApp is the closing channel but every number in the chats is private, so none is published [brief 8][brief 9.9].
`STUDIO_NAME` = Devonel, shipping on devonel.com, with brand assets kept name-agnostic so a rename is a config change [brief 9.10].

## 2. Positioning

One line: an AI product studio and growth partner for owner-led brands [brief 9.4].
"Growth partner rather than agency" is the founders' own framing to a client [brief 1].
"Lab" is a section on the site, never the brand [brief 9.4].
The site exists to convert warm leads who already trust the founders, so it carries proof before positioning [brief 6].

## 3. Audience

Primary: owner-operated brands and small businesses that have money and no technical bench [brief 5].
Named sectors: jewellery, watches, weddings, real estate [brief 5].
Secondary: enterprises and agencies that know what generated video is but do not know how to get good outputs [brief 5].
The buyer is usually the owner, and the owner is on WhatsApp [brief 5][brief 9.9].
Deals arrive warm, through the founders' own networks, not through inbound content [brief 5].

## 4. The discomfort, in the buyer's situation

Several vendors, no structure, and nobody owning the outcome [brief 1].
Automations and bots that were bought and are now broken [brief 1].
Nobody shows anything real up front, so the owner is asked to buy a promise [brief 5].
Leads sit in a chat inbox and go cold while competitors take hours to reply or never reply [brief 4.3].
The owner already pays monthly for marketing and separately for production work, and still cannot show a customer the product before it is made [brief 4.1].

## 5. Offer

Paid discovery first, which produces the scope and the price [brief 5][brief 9.5].
Fixed-scope build [brief 9.5].
Monthly retainer after launch [brief 5][brief 9.5].
Optional revenue share on sales, as an add-on and never as a replacement for payment [brief 5][brief 9.5].
Minimum commitment up front on every engagement [brief 5][brief 9.5].
No unpaid multi-month starts, stated as a rule learned from a real counter-offer [brief 5].
Model API and infrastructure costs are billed separately, not hidden in the fee [brief 5].
No prices, ranges or currency figures anywhere on the site [brief 9.5][brief 8].

## 6. What Devonel sells, as outcomes

Customer-facing product studios: a web app your customer configures and orders in, not a form bolted to a store [brief 3][brief 4.1].
Generated product media: on-brand images and video with the same person, the same brand voice, and localisation [brief 3].
Agent systems and harnesses: automation with observability, verification loops and browser control, built so you can see it working [brief 3].
WhatsApp lead systems: a number that answers, qualifies and hands over, wired to the tools already in use [brief 3].
App store readiness: the audit that finds what will fail review or fail on launch day, before you submit [brief 3][brief 4.2].
Buy versus build advice, given before the build is quoted [brief 3].

## 7. Proof points, all sourced

`CLIENT_JEWELLERY` name-pendant studio: spec received 11 Aug 2026, live 27 Aug 2026, sixteen days [brief 4.1].
It went live on the morning of the client's exhibition stall [brief 4.1].
Flow: type a name in Arabic or English with spelling suggestions, one or two names, style, metal, stones, size, chain, live preview, approve spelling [brief 4.1].
Output: four renders, a studio shot in about two minutes, then on-neck, close-up and dark editorial [brief 4.1].
Commerce: full-screen download, price estimate, quote request, the operator issues the quote and the customer accepts in the same screen [brief 4.1].
Engineering: four product stills run at once and each releases its on-neck version as soon as it is ready, with honest queued states under model provider limits, plus retry fallback and an ETA added on launch morning [brief 4.1].
Stack: Next.js, React, strict TypeScript, Supabase, Trigger.dev, gpt-image-2, fal.ai Seedance, Sentry, PostHog, DigitalOcean [brief 4.1].
Client words, usable as a quote: "the layout is very good and simple" [brief 4.1].
Scope after launch feedback: locked to six design styles and three layouts [brief 4.1].
App store readiness audit, anonymised: five tabs, more than 25 screens, with billing, notification scheduling, privacy and store compliance blockers found before submission [brief 4.2].
WhatsApp lead system for `CLIENT_WATCH`: in progress, never presented as shipped [brief 4.3][brief 8].
Founder credential: Sanchay builds and sells clinic software in Australia and India, with no client names and no revenue figures [brief 9.3][brief 4.4].

## 8. Objections to answer on the page

What does this cost, and why is there no price on the site [brief 9.5].
Will this work for my business, or is it only for jewellery [brief 5].
How fast is it, really [brief 4.1].
Who actually builds it, and how small is this team [brief 2][brief 9.6].
What happens when the generated output is not good enough [brief 4.1].
What happens after launch, and who keeps it running [brief 5].
Why do I need a studio when I already have AI tools [brief 1][brief 5].
Will you start on revenue share and get paid later [brief 5].

## 9. Voice

Short sentences, one thought per line, no hedging [brief 7].
Plain body sentences; lowercase-leaning headings are acceptable [brief 9.8].
Concrete nouns and delivery verbs: ship, build, wire, hand over, run [brief 7].
Reusable phrases: "make work speak", "one skill, one work, one proof", "proof of work", "we become the solution", "simple and it works" [brief 7].
Partner phrases in the same register: "growth partner, not an agency", "people buy trust" [brief 7].
Slang beyond "proof of work" stays off the site, along with profanity, client jokes and internal nicknames [brief 7][brief 9.8].
No exclamation marks, no buzzword stacks, no em dashes.

## 10. Primary CTA

One CTA wording repeated at every decision point: "Send your brief".
It is channel-neutral on purpose. The shared `ContactCTA` component reads `lib/site.ts` and picks the primary action: the WhatsApp button, `https://wa.me/<number>?text=...`, when `contact.whatsapp` is set, otherwise the email button, `mailto:sanchay@devonel.com?subject=Brief%20for%20Devonel`. The mailto subject is always "Brief for Devonel".
Support line under every instance: "Paid discovery, fixed scope, no forms." [brief 5][brief 9.5]
No reply-time promise anywhere; the brief supports none, so none is written.
Channel today is the devonel.com mailbox, with WhatsApp added once the number is configured; no contact forms, because every deal so far closed over WhatsApp and Google Meet [brief 9.9].
On-page copy never names WhatsApp as a contact channel while `contact.whatsapp` is empty. "or message us on WhatsApp" exists only as a conditional clause that renders when it is set. "WhatsApp lead systems" as a service Devonel builds is unaffected and stays on the page [brief 3][brief 4.3].
Risk reversal available and honest: discovery is paid, small and fixed, and it produces a written scope and a price whether or not you continue [brief 5].
Secondary action on the site is reading the flagship case study, never a second competing button [brief 6].

## 11. Geography and contact

Based in Dubai and Mumbai, serving UAE, India and remote clients [brief 9.7].
Contact: email sanchay@devonel.com, written as live text and linked as `mailto:sanchay@devonel.com?subject=Brief%20for%20Devonel` [brief 9.9][chat, business email used with clients 2026-08-27].
WhatsApp is config-gated on `lib/site.ts` `contact.whatsapp` and is not named on the page until that value is set [brief 9.9].

## 12. Never publish

Founder employment history, any employer, any employer's project detail, salary, visa or resignation matters [brief 8].
The jewellery client's real brand name and the owner's name until he approves; the studio's staging URL; anything about his pricing [brief 8][brief 9.1].
The watch boutique's name, its budget, its counter-offer and the family relationship behind it; it appears only as `CLIENT_WATCH` and only as in progress [brief 8].
The German agency prospect and any financial-institution prospect [brief 8].
The dataset buyer, the per-file price and the stock volume [brief 8].
Contractors presented as team, and their company [brief 8][brief 9.6].
Revenue figures for the founder's other company, and all subscription spend [brief 8].
Every credential seen in the chats [brief 8].
Any price, range or currency figure of any kind [brief 9.5].

## 13. Open items for the orchestrator

`EMAIL`: closed. sanchay@devonel.com, the mailbox already used with clients, now set as `contact.email` in `lib/site.ts` [brief 1][chat, business email used with clients 2026-08-27].
`WHATSAPP`: open and config-gated on `lib/site.ts` `contact.whatsapp`; no publishable number exists in any source, and every CTA already reads correctly with the value empty [brief 8][brief 9.9].
`CLIENT_JEWELLERY`: swap to the real brand name only on written approval from the client [brief 9.1].
Noora on the founders section: include as commercial lead only if she agrees [brief 9.6].
Code and account ownership at handover: the brief records a handover but never states who owns the code, so the site does not claim it until Sanchay confirms.
Weekly delivery cadence and response-time promise: written as `[offer term]`, consistent with the brief's relationship-led model but not a claim about delivered work [brief 5].
