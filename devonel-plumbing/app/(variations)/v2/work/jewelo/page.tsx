import Image from "next/image";
import { ContactCTA } from "@/components/ds/contact-cta";
import { Nav } from "@/components/variations/v2";
import { TwoCityField } from "@/components/variations/v2/two-city-field";
import { contactChannel, contactLabel, site } from "@/lib/site";
import "@/components/variations/v2/tokens.css";

/**
 * The flagship case, in full, in the v2 "Shader Light" system.
 *
 * The variation root argues; this page evidences. It is a long read on paper:
 * one rule between sections, one white plinth under every still, and the
 * two-city field only behind the header, where the same instrument that lights
 * /v2 tells the reader they are still on the same site.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 4, with the closing block
 * from section 9. The client is never named: the constant is "a bespoke
 * jewellery house in Dubai", and no still here carries a brand, a customer
 * name, a price or a staging URL.
 *
 * Stills follow `docs/goal/ASSET-INVENTORY.md`: the seven `ui-*` screens in
 * the product's own order - name and language, style picker, stones and
 * setting, review spec, generation queue, RTL mirror, operator console - then
 * the four `pendant-*-silver` renders in the product's own order - studio, on
 * model, close up, dark mood - which is the "four renders" claim, then the
 * second design in gold. Every plate is capped at 400px wide, stands on its
 * own plinth, and carries the inventory's brand-free alt text.
 *
 * Two notes on that order, because the two documents genuinely disagree at the
 * tail. A plate is only ever placed on a sentence it actually shows, so where
 * one COPY line covers two screens it carries both, and where it covers none
 * it carries none: step 5 has no screenshot in the inventory. And the RTL
 * mirror sits under "How it holds up" rather than between the queue and the
 * operator console, because COPY has no build line about right-to-left and
 * that section is where the claim belongs.
 */

const TAGS = ["Jewellery", "Dubai", "Product studio", "Shipped 27 Aug 2026"];

type Plate = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

const STEPS: readonly { text: string; plates: readonly Plate[] }[] = [
  {
    text: "Type a name in Arabic or English and take a spelling suggestion.",
    plates: [
      {
        src: "ui-name-and-language",
        alt: "The name step of a jewellery design tool: a name field, a language toggle, an approved script-spelling field, and a live pendant preview",
        caption: "The name step, with the language toggle and the approved spelling field.",
        priority: true,
      },
    ],
  },
  {
    text: "Choose one name or two, then the style, the metal, the stones, the size and the chain.",
    plates: [
      {
        src: "ui-style-picker",
        alt: "The style step of a jewellery design tool showing six lettering styles as selectable cards",
        caption: "Six lettering styles, the scope locked at six.",
      },
      {
        src: "ui-stones-and-setting",
        alt: "The stone step of a jewellery design tool: setting density and stone type beside a live pendant preview",
        caption: "Setting density and stone type, beside the live preview.",
      },
    ],
  },
  {
    text: "Watch a live preview update as you choose, then approve the spelling.",
    plates: [
      {
        src: "ui-review-spec",
        alt: "A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox",
        caption: "The review screen: the whole specification, and the spelling confirmed once.",
      },
    ],
  },
  {
    text: "The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame.",
    plates: [
      {
        src: "ui-generation-queue",
        alt: "Four presentation views queued in parallel, labelled Studio, On model, Close up and Dark mood, each showing a queued state",
        caption: "Four views queued in parallel, each showing its own honest state.",
      },
    ],
  },
  {
    text: "Download full screen, see a price estimate and request a quote.",
    plates: [],
  },
  {
    text: "The operator issues the quote and the customer accepts it in the same screen.",
    plates: [
      {
        src: "ui-operator-console",
        alt: "An operator work queue header showing counts for quote requests, in progress and ready",
        caption: "The operator side: quote requests, in progress, ready.",
        width: 1440,
        height: 322,
      },
    ],
  },
];

const RENDERS = [
  {
    src: "pendant-studio-silver",
    alt: "A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot",
    caption: "Studio",
    width: 1122,
    height: 1402,
  },
  {
    src: "pendant-worn-silver",
    alt: "A silver name pendant worn at the collarbone, framed below the chin",
    caption: "On model",
    width: 1122,
    height: 1222,
  },
  {
    src: "pendant-close-silver",
    alt: "Close detail of a silver cut-out name pendant showing the polished edges and the chain links",
    caption: "Close up",
    width: 1122,
    height: 1402,
  },
  {
    src: "pendant-dark-silver",
    alt: "A silver name pendant resting on black velvet, lit as a dark editorial still",
    caption: "Dark mood",
    width: 1122,
    height: 1402,
  },
];

const SECOND_DESIGN = [
  {
    src: "pendant-studio-gold",
    alt: "A gold script name pendant with two small set stones, laid flat on a warm neutral ground",
    caption: "Studio",
    width: 1254,
    height: 1254,
  },
  {
    src: "pendant-worn-gold",
    alt: "A gold script name pendant worn at the collarbone, framed below the chin",
    caption: "On model",
    width: 1122,
    height: 1227,
  },
  {
    src: "pendant-dark-gold-emerald",
    alt: "A gold script name pendant set with four small emeralds, on black velvet",
    caption: "Dark mood",
    width: 1122,
    height: 1402,
  },
];

const HOLDS_UP = [
  "Four stills run at once and each releases its on-neck version as soon as that one is ready.",
  "Under model provider limits the queue is shown honestly instead of hidden behind a spinner.",
  "A retry fallback and a time estimate went in on launch morning.",
];

const TIMELINE = [
  { when: "11 Aug 2026", what: "Spec." },
  { when: "27 Aug 2026", what: "Live on the morning of the client's exhibition stall." },
  { when: "Sixteen days", what: "From spec to live." },
];

const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(site.contact.mailSubject)}`;

export const metadata = {
  title: "A name-pendant studio, live for an exhibition stall in sixteen days - Devonel",
  description:
    "Spec on 11 Aug 2026. Live on the morning of 27 Aug 2026, in time for the client's exhibition stall.",
};

export default function Page() {
  return (
    <div className="v2">
      <Nav base="/v2" />

      <main className="v2-case-page">
        <header className="v2-case-page__head">
          <TwoCityField className="v2-case-page__field" />

          <h1 className="v2-case-page__title">
            A name-pendant studio, live for an exhibition stall in sixteen days.
          </h1>

          <ul className="v2-case__tags v2-case-page__tags">
            {TAGS.map((tag) => (
              <li key={tag} className="v2-chip">
                {tag}
              </li>
            ))}
          </ul>

          <p className="v2-case-page__deck">
            Spec on 11 Aug 2026. Live on the morning of 27 Aug 2026, in time for the client&#39;s
            exhibition stall.
          </p>
        </header>

        <section className="v2-case-sec" aria-labelledby="problem">
          <div className="v2-case-sec__inner">
            <h2 id="problem" className="v2-case-sec__h">
              Problem
            </h2>
            <div className="v2-case-sec__content">
              <p className="v2-case-sec__p">
                A bespoke jewellery house sells pendants cut to a customer&#39;s name.
              </p>
              <p className="v2-case-sec__p">
                Before ordering, the customer could not see their own name as a finished piece.
              </p>
              <p className="v2-case-sec__p">
                A customisation field on a store page is a text box, not a design studio.
              </p>
            </div>
          </div>
        </section>

        <section className="v2-case-sec" aria-labelledby="built">
          <div className="v2-case-sec__inner">
            <h2 id="built" className="v2-case-sec__h">
              What we built
            </h2>
            <div className="v2-case-sec__content">
              <ol className="v2-steps">
                {STEPS.map((step, index) => (
                  <li key={step.text} className="v2-step">
                    <span className="v2-step__n" aria-hidden="true">
                      {index + 1}
                    </span>
                    <p className="v2-step__text">{step.text}</p>
                    {step.plates.length > 0 ? (
                      <div className="v2-step__plates">
                        {step.plates.map((plate) => (
                          <figure key={plate.src} className="v2-plate">
                            <Image
                              className="v2-plate__img"
                              src={`/media/jewelo/${plate.src}@2x.webp`}
                              alt={plate.alt}
                              width={plate.width ?? 1440}
                              height={plate.height ?? 822}
                              sizes="400px"
                              priority={plate.priority}
                            />
                            <figcaption className="v2-plate__caption">{plate.caption}</figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="v2-case-sec" aria-labelledby="renders">
          <div className="v2-case-sec__inner">
            <h2 id="renders" className="v2-case-sec__h">
              The four renders
            </h2>
            <div className="v2-case-sec__content">
              <p className="v2-case-sec__p">
                One design, photographed four ways by the product itself: the studio shot in about
                two minutes, then the piece on the neck, a close-up and a dark editorial frame.
              </p>

              <ul className="v2-gallery">
                {RENDERS.map((render) => (
                  <li key={render.src}>
                    <figure className="v2-plate v2-plate--small">
                      <Image
                        className="v2-plate__img"
                        src={`/media/jewelo/${render.src}@2x.webp`}
                        alt={render.alt}
                        width={render.width}
                        height={render.height}
                        sizes="220px"
                      />
                      <figcaption className="v2-plate__caption">{render.caption}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>

              <p className="v2-case-sec__p v2-case-sec__p--spaced">
                A second design, through the same views.
              </p>

              <ul className="v2-gallery">
                {SECOND_DESIGN.map((render) => (
                  <li key={render.src}>
                    <figure className="v2-plate v2-plate--small">
                      <Image
                        className="v2-plate__img"
                        src={`/media/jewelo/${render.src}@2x.webp`}
                        alt={render.alt}
                        width={render.width}
                        height={render.height}
                        sizes="220px"
                      />
                      <figcaption className="v2-plate__caption">{render.caption}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="v2-case-sec" aria-labelledby="holds-up">
          <div className="v2-case-sec__inner">
            <h2 id="holds-up" className="v2-case-sec__h">
              How it holds up
            </h2>
            <div className="v2-case-sec__content">
              {HOLDS_UP.map((line) => (
                <p key={line} className="v2-case-sec__p">
                  {line}
                </p>
              ))}

              <figure className="v2-plate v2-case-sec__plate">
                <Image
                  className="v2-plate__img"
                  src="/media/jewelo/ui-rtl-mirror@2x.webp"
                  alt="A design tool mirrored right to left, with the live preview on the right and the step rail reversed"
                  width={1440}
                  height={822}
                  sizes="400px"
                />
                <figcaption className="v2-plate__caption">
                  Mirrored right to left for Arabic: the preview and the step rail swap sides, so it
                  is a real layout rather than a translated one.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="v2-case-sec" aria-labelledby="stack">
          <div className="v2-case-sec__inner">
            <h2 id="stack" className="v2-case-sec__h">
              Stack
            </h2>
            <div className="v2-case-sec__content">
              <p className="v2-case-sec__p">
                Next.js, React, strict TypeScript, Supabase, Trigger.dev, gpt-image-2, fal.ai
                Seedance, Sentry, PostHog, DigitalOcean.
              </p>
            </div>
          </div>
        </section>

        <section className="v2-case-sec" aria-labelledby="result">
          <div className="v2-case-sec__inner">
            <h2 id="result" className="v2-case-sec__h">
              Result
            </h2>
            <div className="v2-case-sec__content">
              <dl className="v2-timeline">
                {TIMELINE.map((entry) => (
                  <div key={entry.when} className="v2-timeline__row">
                    <dt className="v2-timeline__when">{entry.when}</dt>
                    <dd className="v2-timeline__what">{entry.what}</dd>
                  </div>
                ))}
              </dl>

              <blockquote className="v2-case__quote">
                <p>&quot;the layout is very good and simple&quot;</p>
                <cite className="v2-case__cite">
                  the owner, a bespoke jewellery house in Dubai, on the first version
                </cite>
              </blockquote>

              <p className="v2-case-sec__p">
                The one complaint was generation time, which is set by the model providers, and we
                said so.
              </p>
            </div>
          </div>
        </section>

        <section className="v2-case-sec" aria-labelledby="next">
          <div className="v2-case-sec__inner">
            <h2 id="next" className="v2-case-sec__h">
              What came next
            </h2>
            <div className="v2-case-sec__content">
              <p className="v2-case-sec__p">
                Scope locked to six design styles and three layouts.
              </p>
              <p className="v2-case-sec__p">
                Pendant sizing tightened in the renders, with pricing verification and usage control
                moved into the next scope.
              </p>
            </div>
          </div>
        </section>

        <section className="v2-case-close" aria-labelledby="start">
          <div className="v2-case-close__plinth">
            <h2 id="start" className="v2-case-close__title">
              Send the brief. We send back a scope.
            </h2>
            <p className="v2-case-close__sub">
              Paid discovery is small and fixed, and it ends with a written scope, a date and a
              price. If you stop there, the plan you paid for is still yours.
            </p>
            <p className="v2-case-close__act">
              <ContactCTA className="v2-cta">{contactLabel()}</ContactCTA>
            </p>
            <p className="v2-case-close__support">Paid discovery, fixed scope, no forms.</p>
            <p className="v2-case-close__channel">
              Email{" "}
              <a className="v2-read v2-read--inline" href={mailHref}>
                {site.contact.email}
              </a>
              {contactChannel() === "whatsapp" ? ", or message us on WhatsApp" : null}. No forms.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
