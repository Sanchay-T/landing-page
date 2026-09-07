import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ds/contact-cta";
import { SECTIONS, V4Nav } from "@/components/variations/v4";
// The whole design system for this variation. Scoped under `.v4`, so it cannot
// reach another route.
import "@/components/variations/v4/tokens.css";
import { contactLabel, site } from "@/lib/site";

/**
 * Variation 4 - the flagship case, in full, as a poster series.
 *
 * This is the only sub-page the site sanctions (COPY.md, "Canonical primary
 * CTA": the one secondary action is opening the flagship case study), and it is
 * reached from the black block at the foot of the `#work` poster on `/v4`.
 *
 * Every word is docs/goal/COPY.md section 4, "Flagship case: the name-pendant
 * studio", plus the closing block from COPY.md section 9. Plate captions are
 * docs/goal/ASSET-INVENTORY.md, which is also where the alt text comes from.
 *
 * The client is never named. COPY.md "Constants" fixes the string "a bespoke
 * jewellery house in Dubai" and the real brand name is confidential, so it is
 * nowhere in this file, in any alt text, or in any screenshot.
 *
 * Colour discipline on this page: only the case's own service ink (red, service
 * 1, customer-facing product studios) and the signage black. Blue and yellow
 * belong to other services in tokens.css section 1.2, and using one here would
 * say this case was a different kind of work.
 *
 * The bands, in order:
 *   red     title, tags, the one number
 *   white   the problem
 *   white   the flow, as a numbered metro list
 *   black   the seven screens, hard-edged plates on the ink
 *   white   how it holds up, and the stack
 *   black   what the client said
 *   white   the timeline and what came next
 *   red     send the brief
 */

export const metadata: Metadata = {
  title: "A name-pendant studio, live in sixteen days - Devonel case study",
  description:
    "The full build: what a bespoke jewellery house in Dubai needed, what we shipped in sixteen days, the screens, the stack and what happened when customers used it.",
};

const CASE = {
  title: "A name-pendant studio, live for an exhibition stall in sixteen days.",
  tags: ["Jewellery", "Dubai", "Product studio", "Shipped 27 Aug 2026"],
  figure: { value: "16", label: "days, spec to live" },
} as const;

/** COPY.md "Problem." */
const PROBLEM = [
  "A bespoke jewellery house sells pendants cut to a customer's name.",
  "Before ordering, the customer could not see their own name as a finished piece.",
  "A customisation field on a store page is a text box, not a design studio.",
] as const;

/**
 * COPY.md "What we built.", in product order. It is a real sequence - each step
 * only makes sense after the one above it - so it is numbered, and it is drawn
 * as a line with a station at every step, which is this variation's own way of
 * printing an order.
 */
const FLOW = [
  "Type a name in Arabic or English and take a spelling suggestion.",
  "Choose one name or two, then the style, the metal, the stones, the size and the chain.",
  "Watch a live preview update as you choose, then approve the spelling.",
  "The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame.",
  "Download full screen, see a price estimate and request a quote.",
  "The operator issues the quote and the customer accepts it in the same screen.",
] as const;

/** COPY.md "How it holds up." */
const HOLDS_UP = [
  "Four stills run at once and each releases its on-neck version as soon as that one is ready.",
  "Under model provider limits the queue is shown honestly instead of hidden behind a spinner.",
  "A retry fallback and a time estimate went in on launch morning.",
] as const;

/** COPY.md "Stack.", as a plain word list. No logos anywhere on this site. */
const STACK = [
  "Next.js",
  "React",
  "strict TypeScript",
  "Supabase",
  "Trigger.dev",
  "gpt-image-2",
  "fal.ai Seedance",
  "Sentry",
  "PostHog",
  "DigitalOcean",
] as const;

/** COPY.md "Result." */
const RESULT = {
  quote: "the layout is very good and simple",
  source: "the owner, a bespoke jewellery house in Dubai",
  complaint:
    "The one complaint was generation time, which is set by the model providers, and we said so.",
} as const;

/** COPY.md "Result." dates and "What came next." */
const TIMELINE = [
  { label: "Spec received", value: "11 Aug 2026" },
  { label: "Live, the morning of the exhibition stall", value: "27 Aug 2026" },
] as const;

const NEXT = [
  "Scope locked to six design styles and three layouts.",
  "Pendant sizing tightened in the renders, with pricing verification and usage control moved into the next scope.",
] as const;

/**
 * The seven product screens, in the product order ASSET-INVENTORY.md sets: name
 * and language, style picker, stones and setting, review spec, RTL mirror, then
 * the two cropped strips. Alt text is the inventory's, verbatim, because it is
 * written to describe the artefact without naming the brand. Captions are the
 * inventory's own "proves" line, shortened to one poster line.
 *
 * `place` is the grid role, not a size: `half` is four columns of eight, `lead`
 * is five, and the two strips share the remaining three in a stacked column so
 * a 4.5:1 strip is never blown up to the width of a full screen.
 */
const SCREENS = [
  {
    place: "half",
    src: "/media/jewelo/ui-name-and-language@2x.webp",
    width: 1440,
    height: 822,
    alt: "The name step of a jewellery design tool: a name field, a language toggle, an approved script-spelling field, and a live pendant preview",
    caption: "Name and language, with the script spelling approved.",
  },
  {
    place: "half",
    src: "/media/jewelo/ui-style-picker@2x.webp",
    width: 1440,
    height: 822,
    alt: "The style step of a jewellery design tool showing six lettering styles as selectable cards",
    caption: "Six lettering styles, which is where the scope was locked.",
  },
  {
    place: "half",
    src: "/media/jewelo/ui-stones-and-setting@2x.webp",
    width: 1440,
    height: 822,
    alt: "The stone step of a jewellery design tool: setting density and stone type beside a live pendant preview",
    caption: "Setting density and stone type, beside the live preview.",
  },
  {
    place: "half",
    src: "/media/jewelo/ui-review-spec@2x.webp",
    width: 1440,
    height: 822,
    alt: "A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox",
    caption: "Script, layout, metal, stones, size and chain, confirmed before production.",
  },
  {
    place: "lead",
    src: "/media/jewelo/ui-rtl-mirror@2x.webp",
    width: 1440,
    height: 822,
    alt: "A design tool mirrored right to left, with the live preview on the right and the step rail reversed",
    caption: "Mirrored right to left, not a translated left-to-right layout.",
  },
  {
    place: "strip",
    src: "/media/jewelo/ui-generation-queue@2x.webp",
    width: 920,
    height: 460,
    alt: "Four presentation views queued in parallel, labelled Studio, On model, Close up and Dark mood, each showing a queued state",
    caption: "Four views queued at once, each showing its own state.",
  },
  {
    place: "strip",
    src: "/media/jewelo/ui-operator-console@2x.webp",
    width: 1440,
    height: 322,
    alt: "An operator work queue header showing counts for quote requests, in progress and ready",
    caption: "The operator queue: quote requests, in progress, ready.",
  },
] as const;

type Screen = (typeof SCREENS)[number];

const HALF_SIZES = "(min-width: 900px) min(45vw, 660px), 92vw";
const LEAD_SIZES = "(min-width: 900px) min(56vw, 880px), 92vw";
const STRIP_SIZES = "(min-width: 900px) min(33vw, 520px), 92vw";

function Plate({ screen, sizes }: { screen: Screen; sizes: string }) {
  return (
    <figure className="v4-jw-plate">
      <Image
        src={screen.src}
        alt={screen.alt}
        width={screen.width}
        height={screen.height}
        sizes={sizes}
        priority
      />
      <figcaption>{screen.caption}</figcaption>
    </figure>
  );
}

export default function Page() {
  const halves = SCREENS.filter((screen) => screen.place === "half");
  const lead = SCREENS.find((screen) => screen.place === "lead");
  const strips = SCREENS.filter((screen) => screen.place === "strip");

  return (
    <div className="v4">
      {/* The same signage bar as the variation, with its stops rewritten to
          point back at /v4, because none of those sections exist on this page. */}
      <V4Nav sections={SECTIONS} base="/v4" />

      <main className="v4-jw">
        <header className="v4-jw-head v4-panel--red">
          <div className="v4-shell">
            <span className="v4-work-line" aria-hidden="true" />

            <p className="v4-jw-back">
              <a className="v4-block v4-jw-back__link" href="/v4#work">
                Back to the work
              </a>
            </p>

            <ul className="v4-work-tags">
              {CASE.tags.map((tag) => (
                <li className="v4-work-tags__item" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>

            <h1 className="v4-jw-head__title">{CASE.title}</h1>

            <p className="v4-jw-head__figure">
              <span className="v4-jw-head__num">{CASE.figure.value}</span>
              <span className="v4-jw-head__numlabel">{CASE.figure.label}</span>
            </p>
          </div>
        </header>

        <section className="v4-jw-band" aria-labelledby="jw-problem">
          <div className="v4-shell v4-grid">
            <h2 className="v4-jw-band__title" id="jw-problem">
              The problem
            </h2>
            <div className="v4-jw-band__body">
              {PROBLEM.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="v4-jw-band" aria-labelledby="jw-flow">
          <div className="v4-shell v4-grid">
            <h2 className="v4-jw-band__title" id="jw-flow">
              What we built
            </h2>
            <ol className="v4-jw-flow">
              {FLOW.map((step, index) => (
                <li className="v4-jw-flow__step" key={step}>
                  <span className="v4-jw-flow__stop">{index + 1}</span>
                  <p className="v4-jw-flow__text">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* The screens. Hard-edged plates on flat ink: no frame, no radius, no
            shadow, no invented browser chrome around a cropped strip. */}
        <section className="v4-jw-band v4-jw-screens v4-panel--black" aria-labelledby="jw-screens">
          <div className="v4-shell">
            <h2 className="v4-jw-band__title v4-jw-screens__title" id="jw-screens">
              The screens
            </h2>

            <div className="v4-jw-plates v4-grid">
              {halves.map((screen) => (
                <div className="v4-jw-cell v4-jw-cell--half" key={screen.src}>
                  <Plate screen={screen} sizes={HALF_SIZES} />
                </div>
              ))}

              {lead ? (
                <div className="v4-jw-cell v4-jw-cell--lead">
                  <Plate screen={lead} sizes={LEAD_SIZES} />
                </div>
              ) : null}

              <div className="v4-jw-cell v4-jw-cell--strips">
                {strips.map((screen) => (
                  <Plate key={screen.src} screen={screen} sizes={STRIP_SIZES} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="v4-jw-band" aria-labelledby="jw-holds">
          <div className="v4-shell v4-grid">
            <h2 className="v4-jw-band__title" id="jw-holds">
              How it holds up
            </h2>
            <div className="v4-jw-band__body">
              {HOLDS_UP.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="v4-jw-stack">
              <h3 className="v4-jw-stack__title">Stack</h3>
              <ul className="v4-jw-stack__words">
                {STACK.map((word) => (
                  <li key={word}>{word}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="v4-jw-band v4-jw-said v4-panel--black" aria-labelledby="jw-said">
          <div className="v4-shell">
            <h2 className="v4-sr" id="jw-said">
              What the client said
            </h2>
            <blockquote className="v4-jw-said__quote">
              <p>&ldquo;{RESULT.quote}&rdquo;</p>
              <footer>{RESULT.source}</footer>
            </blockquote>
            <p className="v4-jw-said__note">{RESULT.complaint}</p>
          </div>
        </section>

        <section className="v4-jw-band" aria-labelledby="jw-next">
          <div className="v4-shell v4-grid">
            <h2 className="v4-jw-band__title" id="jw-next">
              Timeline and what came next
            </h2>

            <div className="v4-jw-band__body">
              <ol className="v4-jw-time">
                {TIMELINE.map((stop) => (
                  <li className="v4-jw-time__stop" key={stop.label}>
                    <span className="v4-jw-time__dot" aria-hidden="true" />
                    <span className="v4-jw-time__value">{stop.value}</span>
                    <span className="v4-jw-time__label">{stop.label}</span>
                  </li>
                ))}
              </ol>

              {NEXT.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </section>

        {/* COPY.md section 9, verbatim, on the v4 tone note: full-width colour
            panel, black block button. The channel line renders the address as
            live text, which is what COPY.md asks for. */}
        <section className="v4-jw-band v4-jw-cta v4-panel--red" aria-labelledby="jw-cta">
          <div className="v4-shell">
            <span className="v4-work-line" aria-hidden="true" />
            <h2 className="v4-jw-cta__title" id="jw-cta">
              Send the brief. We send back a scope.
            </h2>
            <p className="v4-jw-cta__lead">
              Paid discovery is small and fixed, and it ends with a written scope, a date and a
              price. If you stop there, the plan you paid for is still yours.
            </p>
            <div className="v4-jw-cta__act">
              <ContactCTA className="v4-block v4-jw-cta__block">{contactLabel()}</ContactCTA>
              <p className="v4-jw-cta__support">Paid discovery, fixed scope, no forms.</p>
            </div>
            <p className="v4-jw-cta__channel">
              Email{" "}
              <a
                className="v4-jw-cta__mail"
                href={`mailto:${site.contact.email}?subject=${encodeURIComponent(
                  site.contact.mailSubject
                )}`}
              >
                {site.contact.email}
              </a>
              . No forms.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
