import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ds/contact-cta";
import { Nav } from "@/components/variations/v4";
import { contactChannel, contactLabel, site } from "@/lib/site";
import "@/components/variations/v4/tokens.css";

/**
 * The flagship case, in full, in the v4 system.
 *
 * Every sentence is verbatim from `docs/goal/COPY.md` section 4 (the case) and
 * section 9 (the closing block). The client is never named: the string is
 * "a bespoke jewellery house in Dubai" from COPY.md "Constants".
 *
 * Imagery follows `docs/goal/ASSET-INVENTORY.md`: small captioned stills only,
 * capped at 440px wide, each with the inventory's own alt text, none full-bleed
 * and none behind text. The seven `ui-*` stills run in product order inside the
 * flow they document; the four silver plates sit under the step whose copy
 * names them, in the product's own order, which is the "four renders" claim.
 *
 * The nav takes `base="/v4"` so every anchor points back at the variation root
 * rather than at a section this page does not have.
 */

export const metadata: Metadata = {
  title: "A name-pendant studio, live for an exhibition stall in sixteen days",
  description:
    "Spec on 11 Aug 2026. Live on the morning of 27 Aug 2026, in time for the client's exhibition stall. What Devonel built for a bespoke jewellery house in Dubai, with the flow, the stack and the dates.",
};

type Plate = {
  src: string;
  /** Alt text verbatim from ASSET-INVENTORY.md. */
  alt: string;
  /** Short on-page caption naming the screen. */
  cap: string;
  w: number;
  h: number;
};

type Step = {
  n: string;
  /** COPY.md section 4, "What we built", one bullet per step. */
  text: string;
  plates: Plate[];
  /** True on the one step whose copy names the four renders. */
  renders?: boolean;
};

const STEPS: Step[] = [
  {
    n: "1",
    text: "Type a name in Arabic or English and take a spelling suggestion.",
    plates: [
      {
        src: "/media/jewelo/ui-name-and-language@2x.webp",
        alt: "The name step of a jewellery design tool: a name field, a language toggle, an approved script-spelling field, and a live pendant preview",
        cap: "The name step, with the approved spelling",
        w: 1440,
        h: 822,
      },
      {
        src: "/media/jewelo/ui-rtl-mirror@2x.webp",
        alt: "A design tool mirrored right to left, with the live preview on the right and the step rail reversed",
        cap: "The same tool mirrored right to left",
        w: 1440,
        h: 822,
      },
    ],
  },
  {
    n: "2",
    text: "Choose one name or two, then the style, the metal, the stones, the size and the chain.",
    plates: [
      {
        src: "/media/jewelo/ui-style-picker@2x.webp",
        alt: "The style step of a jewellery design tool showing six lettering styles as selectable cards",
        cap: "Six lettering styles",
        w: 1440,
        h: 822,
      },
      {
        src: "/media/jewelo/ui-stones-and-setting@2x.webp",
        alt: "The stone step of a jewellery design tool: setting density and stone type beside a live pendant preview",
        cap: "Setting density and stone type",
        w: 1440,
        h: 822,
      },
    ],
  },
  {
    n: "3",
    text: "Watch a live preview update as you choose, then approve the spelling.",
    plates: [
      {
        src: "/media/jewelo/ui-review-spec@2x.webp",
        alt: "A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox",
        cap: "The review screen, with the spelling confirmation",
        w: 1440,
        h: 822,
      },
    ],
  },
  {
    n: "4",
    text: "The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame.",
    renders: true,
    plates: [
      {
        src: "/media/jewelo/ui-generation-queue@2x.webp",
        alt: "Four presentation views queued in parallel, labelled Studio, On model, Close up and Dark mood, each showing a queued state",
        cap: "Four views queued in parallel",
        w: 920,
        h: 460,
      },
    ],
  },
  {
    n: "5",
    text: "Download full screen, see a price estimate and request a quote.",
    plates: [
      {
        src: "/media/jewelo/poster-16x9.webp",
        alt: "A gold script name pendant set with emeralds on black velvet, cropped wide",
        cap: "One render, cropped wide",
        w: 1122,
        h: 631,
      },
    ],
  },
  {
    n: "6",
    text: "The operator issues the quote and the customer accepts it in the same screen.",
    plates: [
      {
        src: "/media/jewelo/ui-operator-console@2x.webp",
        alt: "An operator work queue header showing counts for quote requests, in progress and ready",
        cap: "The operator work queue",
        w: 1440,
        h: 322,
      },
    ],
  },
];

/** The four renders step 4 names, in the product's own order. */
const RENDERS: Plate[] = [
  {
    src: "/media/jewelo/pendant-studio-silver@2x.webp",
    alt: "A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot",
    cap: "Studio",
    w: 1122,
    h: 1402,
  },
  {
    src: "/media/jewelo/pendant-worn-silver@2x.webp",
    alt: "A silver name pendant worn at the collarbone, framed below the chin",
    cap: "On model",
    w: 1122,
    h: 1222,
  },
  {
    src: "/media/jewelo/pendant-close-silver@2x.webp",
    alt: "Close detail of a silver cut-out name pendant showing the polished edges and the chain links",
    cap: "Close up",
    w: 1122,
    h: 1402,
  },
  {
    src: "/media/jewelo/pendant-dark-silver@2x.webp",
    alt: "A silver name pendant resting on black velvet, lit as a dark editorial still",
    cap: "Dark mood",
    w: 1122,
    h: 1402,
  },
];

/** COPY.md section 4, flagship "Stack". */
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
];

const TAGS = ["Jewellery", "Dubai", "Product studio"];

function Figure({ plate, priority = false }: { plate: Plate; priority?: boolean }) {
  return (
    <figure className="v4-plate">
      <Image
        className="v4-plate-img"
        src={plate.src}
        alt={plate.alt}
        width={plate.w}
        height={plate.h}
        sizes="(min-width: 1024px) 440px, (min-width: 560px) 45vw, 88vw"
        {...(priority ? { priority: true } : { loading: "eager" as const })}
      />
      <figcaption className="v4-plate-cap">{plate.cap}</figcaption>
    </figure>
  );
}

export default function Page() {
  const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    site.contact.mailSubject
  )}`;

  return (
    <div className="v4">
      <Nav base="/v4" />

      <main className="v4-case">
        <div className="v4-container">
          <p className="v4-case-back">
            <a href="/v4#work">Back to case studies</a>
          </p>

          <article>
            <header className="v4-grid v4-case-band">
              <div className="v4-case-main">
                <h1 className="v4-display">
                  A name-pendant studio, live for an exhibition stall in sixteen days.
                </h1>
                <ul className="v4-work-tags v4-case-tags">
                  {TAGS.map((tag) => (
                    <li className="v4-chip" key={tag}>
                      {tag}
                    </li>
                  ))}
                  <li className="v4-chip">
                    <span className="v4-dot" aria-hidden="true" />
                    Shipped 27 Aug 2026
                  </li>
                </ul>
              </div>
            </header>

            <section className="v4-grid v4-case-band" aria-labelledby="case-problem">
              <div className="v4-case-main">
                <h2 className="v4-case-h2" id="case-problem">
                  Problem
                </h2>
                <p className="v4-case-prose">
                  A bespoke jewellery house sells pendants cut to a customer&#39;s name. Before
                  ordering, the customer could not see their own name as a finished piece. A
                  customisation field on a store page is a text box, not a design studio.
                </p>
              </div>
            </section>

            <section className="v4-grid v4-case-band" aria-labelledby="case-built">
              <div className="v4-case-main">
                <h2 className="v4-case-h2" id="case-built">
                  What we built
                </h2>
              </div>

              <ol className="v4-board v4-steps">
                {STEPS.map((step, i) => (
                  <li className="v4-cell v4-cell--plain v4-step" key={step.n}>
                    <div className="v4-step-copy">
                      <p className="v4-step-n">{step.n}</p>
                      <p className="v4-cell-line v4-step-text">{step.text}</p>
                    </div>

                    <div className="v4-step-media">
                      <div
                        className={`v4-plates${step.plates.length > 1 ? " v4-plates--two" : ""}`}
                      >
                        {step.plates.map((plate) => (
                          // One of the first three steps' plates is the LCP
                          // element from tablet up, so they are not lazy.
                          <Figure key={plate.src} plate={plate} priority={i < 3} />
                        ))}
                      </div>

                      {step.renders ? (
                        <div className="v4-renders">
                          {RENDERS.map((plate) => (
                            <Figure key={plate.src} plate={plate} />
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="v4-grid v4-case-band" aria-labelledby="case-holds">
              <div className="v4-case-main">
                <h2 className="v4-case-h2" id="case-holds">
                  How it holds up
                </h2>
                <ul className="v4-work-list v4-case-prose">
                  <li>
                    Four stills run at once and each releases its on-neck version as soon as that
                    one is ready.
                  </li>
                  <li>
                    Under model provider limits the queue is shown honestly instead of hidden
                    behind a spinner.
                  </li>
                  <li>A retry fallback and a time estimate went in on launch morning.</li>
                </ul>
              </div>
            </section>

            <section className="v4-grid v4-case-band" aria-labelledby="case-stack">
              <div className="v4-case-main">
                <h2 className="v4-case-h2" id="case-stack">
                  Stack
                </h2>
                <ul className="v4-work-tags v4-case-tags">
                  {STACK.map((item) => (
                    <li className="v4-chip v4-chip--mono" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="v4-grid v4-case-band" aria-labelledby="case-result">
              <div className="v4-case-main">
                <h2 className="v4-case-h2" id="case-result">
                  Result
                </h2>
              </div>

              <div className="v4-case-quote-wrap">
                <figure className="v4-cell v4-cell--live v4-case-quote">
                  <blockquote className="v4-quote">
                    &quot;the layout is very good and simple&quot;
                  </blockquote>
                  <figcaption className="v4-quote-by">
                    the owner, a bespoke jewellery house in Dubai
                  </figcaption>
                  <p className="v4-cell-foot">
                    The one complaint was generation time, which is set by the model providers, and
                    we said so.
                  </p>
                </figure>
              </div>

              <ol className="v4-board v4-timeline">
                <li className="v4-cell v4-cell--plain">
                  <p className="v4-cell-line">
                    Spec on <span className="v4-mono">11 Aug 2026</span>.
                  </p>
                </li>
                <li className="v4-cell v4-cell--plain">
                  <p className="v4-cell-line">
                    A retry fallback and a time estimate went in on launch morning.
                  </p>
                </li>
                <li className="v4-cell v4-cell--live">
                  <p className="v4-chip">
                    <span className="v4-dot" aria-hidden="true" />
                    Live
                  </p>
                  <p className="v4-cell-line">
                    Live on the morning of <span className="v4-mono">27 Aug 2026</span>, in time for
                    the client&#39;s exhibition stall.
                  </p>
                </li>
                <li className="v4-cell v4-cell--build">
                  <p className="v4-cell-line">
                    Scope locked to six design styles and three layouts.
                  </p>
                  <p className="v4-cell-line v4-cell-line--muted">
                    Pendant sizing tightened in the renders, with pricing verification and usage
                    control moved into the next scope.
                  </p>
                </li>
              </ol>
            </section>

            <section className="v4-grid v4-case-band" aria-labelledby="case-start">
              <div className="v4-case-main">
                <h2 className="v4-case-h2" id="case-start">
                  Send the brief. We send back a scope.
                </h2>
                <p className="v4-case-prose">
                  Paid discovery is small and fixed, and it ends with a written scope, a date and a
                  price. If you stop there, the plan you paid for is still yours.
                </p>
                <div className="v4-case-actions">
                  <ContactCTA className="v4-btn v4-btn--primary">{contactLabel()}</ContactCTA>
                  <p className="v4-support">Paid discovery, fixed scope, no forms.</p>
                </div>
                <p className="v4-support v4-case-channel">
                  Email <a href={mailHref}>{site.contact.email}</a>. No forms
                  {contactChannel() === "whatsapp" ? ", or message us on WhatsApp" : ""}.
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
