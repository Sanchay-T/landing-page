import type { Metadata } from "next";
import Image from "next/image";
import "@/components/variations/v5/tokens.css";
import { Nav } from "@/components/variations/v5";
import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel } from "@/lib/site";

/**
 * The full case, in the v5 system.
 *
 * A document rather than a landing page: one 56rem column, read top to bottom,
 * nothing sticky and nothing revealed by motion. Every screen in the flow is a
 * real screenshot of the shipped product from `public/media/jewelo`, framed as
 * the window it ran in where it really was a full screen and as a captioned
 * panel where it is a crop, and every sentence comes from `docs/goal/COPY.md`
 * section 4.
 *
 * The client is never named. `01-business-brief.md` section 8 keeps the brand
 * confidential until they approve, so the studio is "a bespoke jewellery house
 * in Dubai" here and the frames carry provenance rather than a URL.
 *
 * The nav is the same component the variation uses, with `base="/v5"` so every
 * anchor points back at the section it names on the page this case belongs to.
 */

export const metadata: Metadata = {
  title: "A name-pendant studio in sixteen days - 5. Console",
  description:
    "The full build: a name-pendant studio for a bespoke jewellery house in Dubai. Spec on 11 Aug 2026, live on the morning of 27 Aug 2026.",
};

const SHOT_SIZES = "(min-width: 960px) 896px, 100vw";

type Step = {
  title: string;
  body: string;
  kind: "window" | "panel";
  label: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

/** The flow, in the order the customer walks it. COPY.md section 4. */
const STEPS: readonly Step[] = [
  {
    title: "Type a name",
    body: "Type a name in Arabic or English and take a spelling suggestion.",
    kind: "window",
    label: "name-pendant studio / name and language",
    src: "/media/jewelo/ui-name-and-language@2x.webp",
    width: 1440,
    height: 822,
    alt: "The name step of a jewellery design tool: a name field, a language toggle, an approved script-spelling field, and a live pendant preview",
  },
  {
    title: "Choose a style",
    body: "Six design styles and three layouts.",
    kind: "window",
    label: "name-pendant studio / arabic style",
    src: "/media/jewelo/ui-style-picker@2x.webp",
    width: 1440,
    height: 822,
    alt: "The style step of a jewellery design tool showing six lettering styles as selectable cards",
  },
  {
    title: "Choose the rest of the piece",
    body: "Choose one name or two, then the style, the metal, the stones, the size and the chain.",
    kind: "window",
    label: "name-pendant studio / stones and setting",
    src: "/media/jewelo/ui-stones-and-setting@2x.webp",
    width: 1440,
    height: 822,
    alt: "The stone step of a jewellery design tool: setting density and stone type beside a live pendant preview",
  },
  {
    title: "Approve the spelling",
    body: "Watch a live preview update as you choose, then approve the spelling.",
    kind: "window",
    label: "name-pendant studio / review your design",
    src: "/media/jewelo/ui-review-spec@2x.webp",
    width: 1440,
    height: 822,
    alt: "A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox",
  },
  {
    title: "Four renders come back",
    body: "The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame.",
    kind: "panel",
    label: "presentation views / generation queue",
    src: "/media/jewelo/ui-generation-queue@2x.webp",
    width: 920,
    height: 460,
    alt: "Four presentation views queued in parallel, labelled Studio, On model, Close up and Dark mood, each showing a queued state",
  },
  {
    title: "Request a quote, and get one back",
    body: "Download full screen, see a price estimate and request a quote. The operator issues the quote and the customer accepts it in the same screen.",
    kind: "panel",
    label: "operator console / work queue",
    src: "/media/jewelo/ui-operator-console@2x.webp",
    width: 1440,
    height: 322,
    alt: "An operator work queue header showing counts for quote requests, in progress and ready",
  },
];

/** The four presentation views, in the order the product makes them. */
const RENDERS = [
  {
    src: "/media/jewelo/pendant-studio-silver@2x.webp",
    label: "Studio",
    alt: "A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot",
  },
  {
    src: "/media/jewelo/pendant-worn-silver@2x.webp",
    label: "On model",
    alt: "A silver name pendant worn at the collarbone, framed below the chin",
  },
  {
    src: "/media/jewelo/pendant-close-silver@2x.webp",
    label: "Close up",
    alt: "Close detail of a silver cut-out name pendant showing the polished edges and the chain links",
  },
  {
    src: "/media/jewelo/pendant-dark-silver@2x.webp",
    label: "Dark mood",
    alt: "A silver name pendant resting on black velvet, lit as a dark editorial still",
  },
] as const;

/** COPY.md section 4, "Stack." */
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

function Chrome({ kind, label }: { kind: "window" | "panel"; label: string }) {
  if (kind === "panel") return <p className="v5-frame__cap v5-mono">{label}</p>;

  return (
    <div className="v5-frame__chrome v5-mono">
      <span className="v5-frame__dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="v5-frame__label">{label}</span>
      <span className="v5-frame__stamp">shipped 27 Aug 2026</span>
    </div>
  );
}

export default function Page() {
  return (
    <div className="v5">
      <Nav base="/v5" />

      <main>
        <article className="v5-case">
          <div className="v5-container">
            <div className="v5-case__inner">
              <a href="/v5#work" className="v5-textlink v5-mono v5-case__back">
                Back to the work section
              </a>

              <header className="v5-case__head">
                <p className="v5-mono v5-eyebrow">Flagship case</p>

                <h1 className="v5-case__h1">
                  A name-pendant studio, live for an exhibition stall in sixteen days.
                </h1>

                <p className="v5-lead v5-measure">
                  We shipped a name-pendant studio for a bespoke jewellery house in Dubai on the
                  morning of their exhibition stall.
                </p>

                <dl className="v5-mono v5-case__facts">
                  <div>
                    <dt>Sector</dt>
                    <dd>Jewellery</dd>
                  </div>
                  <div>
                    <dt>Place</dt>
                    <dd>Dubai</dd>
                  </div>
                  <div>
                    <dt>Work</dt>
                    <dd>Product studio</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>Shipped 27 Aug 2026</dd>
                  </div>
                </dl>
              </header>

              <section className="v5-case__section" aria-labelledby="case-problem">
                <h2 id="case-problem" className="v5-case__h2">
                  The problem
                </h2>
                <p className="v5-case__p">
                  A bespoke jewellery house sells pendants cut to a customer&rsquo;s name. Before
                  ordering, the customer could not see their own name as a finished piece. A
                  customisation field on a store page is a text box, not a design studio.
                </p>
              </section>

              <section className="v5-case__section" aria-labelledby="case-flow">
                <h2 id="case-flow" className="v5-case__h2">
                  The flow
                </h2>

                <ol className="v5-steps">
                  {STEPS.map((step, i) => (
                    <li key={step.title} className="v5-step">
                      <div className="v5-step__head">
                        <span className="v5-mono v5-step__n" aria-hidden="true">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="v5-step__title">{step.title}</h3>
                      </div>

                      <p className="v5-step__p">{step.body}</p>

                      <figure className="v5-figure">
                        <div className="v5-frame">
                          <Chrome kind={step.kind} label={step.label} />
                          <Image
                            className="v5-frame__shot"
                            src={step.src}
                            width={step.width}
                            height={step.height}
                            sizes={SHOT_SIZES}
                            alt={step.alt}
                            priority
                          />
                        </div>
                      </figure>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="v5-case__section" aria-labelledby="case-holds">
                <h2 id="case-holds" className="v5-case__h2">
                  How it holds up
                </h2>

                <ul className="v5-case__list">
                  <li>
                    Four stills run at once and each releases its on-neck version as soon as that
                    one is ready.
                  </li>
                  <li>
                    Under model provider limits the queue is shown honestly instead of hidden behind
                    a spinner.
                  </li>
                  <li>A retry fallback and a time estimate went in on launch morning.</li>
                  <li>The whole studio mirrors right to left, step rail and live preview included.</li>
                </ul>

                <figure className="v5-figure">
                  <div className="v5-frame">
                    <p className="v5-frame__cap v5-mono">
                      presentation views / four renders per design
                    </p>
                    <ul className="v5-renders">
                      {RENDERS.map((render) => (
                        <li key={render.label} className="v5-render">
                          <Image
                            className="v5-render__img"
                            src={render.src}
                            width={1122}
                            height={1402}
                            sizes="(min-width: 960px) 210px, (min-width: 560px) 22vw, 44vw"
                            alt={render.alt}
                            priority
                          />
                          <span className="v5-mono v5-render__label">{render.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <figcaption className="v5-figcap v5-mono">
                    The four views the studio returns, in the order it makes them.
                  </figcaption>
                </figure>

                <figure className="v5-figure">
                  <div className="v5-frame">
                    <Chrome kind="window" label="name-pendant studio / right to left" />
                    <Image
                      className="v5-frame__shot"
                      src="/media/jewelo/ui-rtl-mirror@2x.webp"
                      width={1440}
                      height={822}
                      sizes={SHOT_SIZES}
                      alt="A design tool mirrored right to left, with the step rail reversed and the live preview on the left"
                      priority
                    />
                  </div>
                  <figcaption className="v5-figcap v5-mono">
                    The same studio in Arabic. The layout mirrors, not only the words.
                  </figcaption>
                </figure>
              </section>

              <section className="v5-case__section" aria-labelledby="case-result">
                <h2 id="case-result" className="v5-case__h2">
                  The result
                </h2>

                <blockquote className="v5-case__quote">
                  <p>&ldquo;the layout is very good and simple&rdquo;</p>
                  <cite className="v5-mono v5-case__cite">
                    the owner, a bespoke jewellery house in Dubai
                  </cite>
                </blockquote>

                <p className="v5-case__p">
                  The one complaint was generation time, which is set by the model providers, and we
                  said so.
                </p>
              </section>

              <section className="v5-case__section" aria-labelledby="case-stack">
                <h2 id="case-stack" className="v5-case__h2">
                  Stack
                </h2>
                <ul className="v5-work__stack">
                  {STACK.map((item) => (
                    <li key={item} className="v5-mono v5-work__chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="v5-case__section" aria-labelledby="case-timeline">
                <h2 id="case-timeline" className="v5-case__h2">
                  Timeline
                </h2>

                <dl className="v5-time">
                  <div>
                    <dt className="v5-mono">11 Aug 2026</dt>
                    <dd>Spec received.</dd>
                  </div>
                  <div>
                    <dt className="v5-mono">27 Aug 2026</dt>
                    <dd>
                      Live on the morning of the client&rsquo;s exhibition stall. Sixteen days from
                      spec to live.
                    </dd>
                  </div>
                  <div>
                    <dt className="v5-mono">What came next</dt>
                    <dd>
                      Scope locked to six design styles and three layouts. Pendant sizing tightened
                      in the renders, with pricing verification and usage control moved into the
                      next scope.
                    </dd>
                  </div>
                </dl>
              </section>

              <div className="v5-case__cta">
                <h2 className="v5-case__h2">Ask how we would do yours.</h2>
                <ContactCTA className="v5-btn v5-btn--primary">{contactLabel()}</ContactCTA>
                <p className="v5-case__cta-support">Paid discovery, fixed scope, no forms.</p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
