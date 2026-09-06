import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ds/contact-cta";
import {
  ColumnRules,
  RenderSpread,
  STACK,
  V1Nav,
  type V1Section,
} from "@/components/variations/v1";
// The same design system the front page uses, scoped under `.v1`.
import "@/components/variations/v1/tokens.css";
import { contactLabel } from "@/lib/site";

/**
 * The masthead index on an inside page.
 *
 * It mirrors the `sections` array in `app/(variations)/v1/page.tsx`, and it is
 * passed `hrefBase="/v1"` so every link resolves to `/v1#id` instead of an
 * anchor on this page. Add a row here whenever /v1 gains a section, and never
 * add one that /v1 does not render: a masthead link to a section that is not
 * there is a dead link.
 */
const sections: readonly V1Section[] = [
  { id: "hero", label: "Front page" },
  { id: "proof", label: "Proof of work" },
  { id: "services", label: "What you buy" },
  { id: "work", label: "Case studies" },
];

/**
 * The screenshots, in the order the flow runs.
 *
 * Every `src` points at the native `@2x` file with its real intrinsic
 * dimensions. `alt` is verbatim from docs/goal/ASSET-INVENTORY.md, which writes
 * it to describe the screen and never name the client brand; each file is
 * already cropped below the client-branded navigation bar and above the rows
 * that carry order names.
 */
const PLATES = {
  name: {
    src: "/media/jewelo/ui-name-and-language@2x.webp",
    width: 1440,
    height: 822,
    alt: "The name step of a jewellery design tool: a name field, a language toggle, an approved script-spelling field, and a live pendant preview",
    caption: "The name step: the language toggle and the approved spelling, preview live beside it.",
  },
  rtl: {
    src: "/media/jewelo/ui-rtl-mirror@2x.webp",
    width: 1440,
    height: 822,
    alt: "A design tool mirrored right to left, with the live preview on the right and the step rail reversed",
    caption: "The same studio mirrored right to left, not a translated left to right layout.",
  },
  style: {
    src: "/media/jewelo/ui-style-picker@2x.webp",
    width: 1440,
    height: 822,
    alt: "The style step of a jewellery design tool showing six lettering styles as selectable cards",
    caption: "Six lettering styles, the scope the studio was locked to.",
  },
  stones: {
    src: "/media/jewelo/ui-stones-and-setting@2x.webp",
    width: 1440,
    height: 822,
    alt: "The stone step of a jewellery design tool: setting density and stone type beside a live pendant preview",
    caption: "Setting density and stone type, read back on the live preview as you choose.",
  },
  review: {
    src: "/media/jewelo/ui-review-spec@2x.webp",
    width: 1440,
    height: 822,
    alt: "A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox",
    caption:
      "The review screen: script, layout, metal, stones, size and chain, and the spelling approved before production.",
  },
  queue: {
    src: "/media/jewelo/ui-generation-queue@2x.webp",
    width: 920,
    height: 460,
    alt: "Four presentation views queued in parallel, labelled Studio, On model, Close up and Dark mood, each showing a queued state",
    caption: "Four views queued in parallel, each showing its own state rather than one spinner.",
  },
  operator: {
    src: "/media/jewelo/ui-operator-console@2x.webp",
    width: 1440,
    height: 322,
    alt: "An operator work queue header showing counts for quote requests, in progress and ready",
    caption: "The operator side: quote requests, in progress, ready. Order names cropped away.",
  },
} as const;

type Plate = (typeof PLATES)[keyof typeof PLATES];

/** Plates span eight of the twelve columns, and the full measure below that. */
const PLATE_SIZES = "(min-width: 1280px) 790px, (min-width: 1024px) 62vw, 92vw";

/**
 * One ruled screenshot with its caption under the rule.
 *
 * Lazy by default. The seven plates total 175 KB at native size and far less
 * at the width a phone requests, and `scripts/shots.mjs` captures the full page
 * rather than the viewport, so every one of them is in the proof screenshot.
 */
function Plate({ plate }: { plate: Plate }) {
  return (
    <figure className="v1-plate">
      <Image
        src={plate.src}
        alt={plate.alt}
        width={plate.width}
        height={plate.height}
        sizes={PLATE_SIZES}
      />
      <figcaption>{plate.caption}</figcaption>
    </figure>
  );
}

/** The flow, verbatim from docs/goal/COPY.md section 4, with the screens that prove each step. */
const STEPS: readonly { text: string; plates: readonly Plate[] }[] = [
  {
    text: "Type a name in Arabic or English and take a spelling suggestion.",
    plates: [PLATES.name, PLATES.rtl],
  },
  {
    text: "Choose one name or two, then the style, the metal, the stones, the size and the chain.",
    plates: [PLATES.style, PLATES.stones],
  },
  {
    text: "Watch a live preview update as you choose, then approve the spelling.",
    plates: [PLATES.review],
  },
  {
    text: "The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame.",
    plates: [PLATES.queue],
  },
  {
    text: "Download full screen, see a price estimate and request a quote.",
    plates: [],
  },
  {
    text: "The operator issues the quote and the customer accepts it in the same screen.",
    plates: [PLATES.operator],
  },
];

/** Title and description are COPY.md section 4, verbatim. No brand name appears. */
export const metadata: Metadata = {
  title: "A name-pendant studio, live for an exhibition stall in sixteen days - Devonel",
  description:
    "Devonel built a name-pendant studio for a bespoke jewellery house in Dubai. Spec on 11 Aug 2026, live on the morning of 27 Aug 2026, in time for the client's exhibition stall.",
};

/**
 * The full case study, set as an inside page of the same newspaper.
 *
 * The front page runs the headline at display-1; an inside story runs one step
 * down at display-2, which is what tells a reader they have turned a page
 * rather than opened a different site. Everything else is the front page
 * system unchanged: the same masthead, the same twelve columns with their
 * visible rules, the same hairlines, the same classified box for the one CTA.
 *
 * Every word is verbatim from docs/goal/COPY.md section 4. The client is named
 * only as the anonymised phrase COPY.md fixes as CLIENT_JEWELLERY, and no
 * screenshot on this page carries a brand mark, a customer name or a price.
 */
export default function Page() {
  return (
    <div className="v1">
      <V1Nav sections={sections} hrefBase="/v1" />

      <main>
        <article className="v1-case">
          <ColumnRules />

          <div className="v1-case__inner v1-shell">
            <header>
              <p className="v1-kicker">Case studies</p>

              <div className="v1-grid v1-case__head">
                <div className="v1-case__story">
                  <h1 className="v1-storyhead">
                    A name-pendant studio, live for an exhibition stall in sixteen days.
                  </h1>

                  <p className="v1-dateline v1-case__dateline">
                    Jewellery. Dubai. Product studio. Shipped 27 Aug 2026.
                  </p>

                  <p className="v1-deck v1-case__deck">
                    A bespoke jewellery house sells pendants cut to a customer&rsquo;s name. Before
                    ordering, the customer could not see their own name as a finished piece. A
                    customisation field on a store page is a text box, not a design studio.
                  </p>
                </div>

                <aside className="v1-case__rail">
                  <div>
                    <dl className="v1-ledger">
                      <div className="v1-ledger__cell">
                        <dt className="v1-ledger__k">Spec received</dt>
                        <dd className="v1-ledger__v">11 Aug 2026</dd>
                      </div>
                      <div className="v1-ledger__cell">
                        <dt className="v1-ledger__k">Live</dt>
                        <dd className="v1-ledger__v">27 Aug 2026</dd>
                      </div>
                    </dl>
                    <p className="v1-caption v1-case__span">Sixteen days from spec to live.</p>
                  </div>

                  <div>
                    <h2 className="v1-crosshead">Stack</h2>
                    <ul className="v1-colophon">
                      {STACK.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </header>

            <figure className="v1-case__spread v1-reveal">
              <RenderSpread sizes="(min-width: 1024px) 284px, 45vw" />
              <figcaption className="v1-spread__note">
                Four renders of one design, in the order the studio returns them. Real renders from
                the shipped product.
              </figcaption>
            </figure>

            <section className="v1-case__section">
              <h2 className="v1-crosshead">What we built</h2>

              <ol>
                {STEPS.map((step, i) => (
                  <li key={step.text} className="v1-step">
                    <div className="v1-step__side">
                      <p className="v1-step__n">{i + 1}</p>
                      <p className="v1-prose v1-step__text">{step.text}</p>
                    </div>

                    {step.plates.length > 0 ? (
                      <div className="v1-step__plates">
                        {step.plates.map((plate) => (
                          <Plate key={plate.src} plate={plate} />
                        ))}
                      </div>
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>

            <section className="v1-case__section">
              <h2 className="v1-crosshead">How it holds up</h2>
              <div className="v1-prose">
                <p>
                  Four stills run at once and each releases its on-neck version as soon as that one
                  is ready.
                </p>
                <p>
                  Under model provider limits the queue is shown honestly instead of hidden behind a
                  spinner.
                </p>
                <p>A retry fallback and a time estimate went in on launch morning.</p>
              </div>
            </section>

            <figure className="v1-pullquote v1-case__quote">
              <blockquote>&ldquo;the layout is very good and simple&rdquo;</blockquote>
              <figcaption>
                the owner, a bespoke jewellery house in Dubai, on the first version
              </figcaption>
            </figure>

            <section className="v1-case__section">
              <div className="v1-grid">
                <div className="v1-case__half">
                  <h2 className="v1-crosshead">Result</h2>
                  <div className="v1-prose">
                    <p>Spec on 11 Aug 2026.</p>
                    <p>
                      Live on the morning of 27 Aug 2026, in time for the client&rsquo;s exhibition
                      stall.
                    </p>
                    <p>
                      The one complaint was generation time, which is set by the model providers,
                      and we said so.
                    </p>
                  </div>
                </div>

                <div className="v1-case__half">
                  <h2 className="v1-crosshead">What came next</h2>
                  <div className="v1-prose">
                    <p>Scope locked to six design styles and three layouts.</p>
                    <p>
                      Pendant sizing tightened in the renders, with pricing verification and usage
                      control moved into the next scope.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <ContactCTA className="v1-classified v1-case__cta">
              <span className="v1-classified__label v1-underline">{contactLabel()}</span>
              <span className="v1-classified__support">Paid discovery, fixed scope, no forms.</span>
            </ContactCTA>

            <p className="v1-case__back">
              <a href="/v1#work" className="v1-textlink v1-underline">
                Back to the front page
              </a>
            </p>

            <div className="v1-folio v1-folio--ruled v1-case__folio">
              <span>Case studies</span>
              <span className="v1-folio__n">4</span>
            </div>
          </div>

          <div className="v1-rule-double" />
        </article>
      </main>
    </div>
  );
}
