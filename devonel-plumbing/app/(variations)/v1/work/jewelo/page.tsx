import "@/components/variations/v1/tokens.css";

import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ds/contact-cta";
import { Nav } from "@/components/variations/v1";
import { contactHref, contactLabel, site } from "@/lib/site";

/**
 * The flagship case study, written out in full: v1 "Studio Dark".
 *
 * The only sanctioned second click on the page, and the only other place on the
 * site where the client's renders and screens are allowed to appear. It is a
 * document on the void with two panel bands in it - the plate run and the close
 * - so the reading column is never interrupted by a surface change mid-sentence.
 *
 * A server component, and there is no canvas here: the hero object is the
 * variation root's one entrance and nothing on this page moves at all.
 *
 * Text is COPY.md section 4 (the flagship case, in full, including the two
 * blocks the section on `/v1` leaves for this page) and COPY.md section 9 (the
 * close), verbatim with citations stripped. The client is never named; COPY.md's
 * constant "a bespoke jewellery house in Dubai" is the only description used.
 *
 * Images are the fifteen files ASSET-INVENTORY.md assigns to this page, in the
 * product order it fixes: the four silver views of one pendant (studio, on
 * model, close up, dark mood), the three gold views of the second design, the
 * one wide plate, then the seven screens in flow order. Each plate is capped
 * well under the 480px the inventory allows, sits inside a 1px frame, and
 * carries the inventory's own alt text. The caption prints that same sentence,
 * so it is marked aria-hidden: the image already carries it as its accessible
 * name and a screen reader should not read the description twice.
 */

const CASE_TITLE = "A name-pendant studio, live for an exhibition stall in sixteen days.";

export const metadata: Metadata = {
  title: `${CASE_TITLE} - Devonel`,
  description:
    "A bespoke jewellery house sells pendants cut to a customer's name. Before ordering, the customer could not see their own name as a finished piece.",
};

const TAGS = ["Jewellery", "Dubai", "Product studio", "Shipped 27 Aug 2026"] as const;

const PROBLEM = [
  "A bespoke jewellery house sells pendants cut to a customer's name.",
  "Before ordering, the customer could not see their own name as a finished piece.",
  "A customisation field on a store page is a text box, not a design studio.",
] as const;

const BUILT = [
  "Type a name in Arabic or English and take a spelling suggestion.",
  "Choose one name or two, then the style, the metal, the stones, the size and the chain.",
  "Watch a live preview update as you choose, then approve the spelling.",
  "The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame.",
  "Download full screen, see a price estimate and request a quote.",
  "The operator issues the quote and the customer accepts it in the same screen.",
] as const;

const HOLDS = [
  "Four stills run at once and each releases its on-neck version as soon as that one is ready.",
  "Under model provider limits the queue is shown honestly instead of hidden behind a spinner.",
  "A retry fallback and a time estimate went in on launch morning.",
] as const;

const STACK =
  "Next.js, React, strict TypeScript, Supabase, Trigger.dev, gpt-image-2, fal.ai Seedance, Sentry, PostHog, DigitalOcean.";

const NEXT = [
  "Scope locked to six design styles and three layouts.",
  "Pendant sizing tightened in the renders, with pricing verification and usage control moved into the next scope.",
] as const;

type Plate = { src: string; w: number; h: number; alt: string };

/** The four silver views of one pendant, then the three gold views of the
 *  second design. ASSET-INVENTORY.md fixes this order, because it is the
 *  product's own order for the "four renders" claim. */
const RENDERS: readonly Plate[] = [
  {
    src: "/media/jewelo/pendant-studio-silver@2x.webp",
    w: 1122,
    h: 1402,
    alt: "A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot",
  },
  {
    src: "/media/jewelo/pendant-worn-silver@2x.webp",
    w: 1122,
    h: 1222,
    alt: "A silver name pendant worn at the collarbone, framed below the chin",
  },
  {
    src: "/media/jewelo/pendant-close-silver@2x.webp",
    w: 1122,
    h: 1402,
    alt: "Close detail of a silver cut-out name pendant showing the polished edges and the chain links",
  },
  {
    src: "/media/jewelo/pendant-dark-silver@2x.webp",
    w: 1122,
    h: 1402,
    alt: "A silver name pendant resting on black velvet, lit as a dark editorial still",
  },
  {
    src: "/media/jewelo/pendant-studio-gold@2x.webp",
    w: 1254,
    h: 1254,
    alt: "A gold script name pendant with two small set stones, laid flat on a warm neutral ground",
  },
  {
    src: "/media/jewelo/pendant-worn-gold@2x.webp",
    w: 1122,
    h: 1227,
    alt: "A gold script name pendant worn at the collarbone, framed below the chin",
  },
  {
    src: "/media/jewelo/pendant-dark-gold-emerald@2x.webp",
    w: 1122,
    h: 1402,
    alt: "A gold script name pendant set with four small emeralds, on black velvet",
  },
];

/** The one wide plate on this page. No 2x exists: the source does not allow one. */
const POSTER: Plate = {
  src: "/media/jewelo/poster-16x9.webp",
  w: 1122,
  h: 631,
  alt: "A gold script name pendant set with emeralds on black velvet, cropped wide",
};

/** The seven screens, in flow order: name and language, style picker, stones
 *  and setting, review spec, generation queue, RTL mirror, operator console. */
const SCREENS: readonly Plate[] = [
  {
    src: "/media/jewelo/ui-name-and-language@2x.webp",
    w: 1440,
    h: 822,
    alt: "The name step of a jewellery design tool: a name field, a language toggle, an approved script-spelling field, and a live pendant preview",
  },
  {
    src: "/media/jewelo/ui-style-picker@2x.webp",
    w: 1440,
    h: 822,
    alt: "The style step of a jewellery design tool showing six lettering styles as selectable cards",
  },
  {
    src: "/media/jewelo/ui-stones-and-setting@2x.webp",
    w: 1440,
    h: 822,
    alt: "The stone step of a jewellery design tool: setting density and stone type beside a live pendant preview",
  },
  {
    src: "/media/jewelo/ui-review-spec@2x.webp",
    w: 1440,
    h: 822,
    alt: "A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox",
  },
  {
    src: "/media/jewelo/ui-generation-queue@2x.webp",
    w: 920,
    h: 460,
    alt: "Four presentation views queued in parallel, labelled Studio, On model, Close up and Dark mood, each showing a queued state",
  },
  {
    src: "/media/jewelo/ui-rtl-mirror@2x.webp",
    w: 1440,
    h: 822,
    alt: "A design tool mirrored right to left, with the live preview on the right and the step rail reversed",
  },
  {
    src: "/media/jewelo/ui-operator-console@2x.webp",
    w: 1440,
    h: 322,
    alt: "An operator work queue header showing counts for quote requests, in progress and ready",
  },
];

function Plates({ plates, sizes }: { plates: readonly Plate[]; sizes: string }) {
  return plates.map((plate) => (
    <figure key={plate.src} className="v1-doc__plate">
      <Image
        className="v1-doc__still"
        src={plate.src}
        alt={plate.alt}
        width={plate.w}
        height={plate.h}
        sizes={sizes}
        priority
      />
      <figcaption className="v1-doc__caption" aria-hidden="true">
        {plate.alt}
      </figcaption>
    </figure>
  ));
}

export default function Page() {
  return (
    <div className="v1">
      <Nav base="/v1" />
      <main className="v1-doc">
        <header className="v1-shell v1-doc__mast">
          <h1 className="v1-doc__title">{CASE_TITLE}</h1>
          <ul className="v1-work__tags" role="list">
            {TAGS.map((tag) => (
              <li key={tag} className="v1-work__tag">
                {tag}
              </li>
            ))}
          </ul>
        </header>

        <section className="v1-shell v1-doc__block" aria-labelledby="doc-problem">
          <h2 id="doc-problem" className="v1-doc__head">
            Problem.
          </h2>
          {PROBLEM.map((line) => (
            <p key={line} className="v1-doc__line">
              {line}
            </p>
          ))}
        </section>

        <section aria-labelledby="doc-built">
          <div className="v1-shell v1-doc__block">
            <h2 id="doc-built" className="v1-doc__head">
              What we built.
            </h2>
            {BUILT.map((line) => (
              <p key={line} className="v1-doc__line">
                {line}
              </p>
            ))}
          </div>

          <div className="v1-doc__band">
            <div className="v1-shell">
              <div className="v1-doc__plates v1-doc__plates--renders">
                <Plates
                  plates={RENDERS}
                  sizes="(min-width: 73.75rem) 240px, (min-width: 48rem) 30vw, (min-width: 30rem) 45vw, 100vw"
                />
              </div>

              <div className="v1-doc__plates v1-doc__plates--wide">
                <Plates plates={[POSTER]} sizes="(min-width: 48rem) 480px, 100vw" />
              </div>

              <div className="v1-doc__plates v1-doc__plates--screens">
                <Plates
                  plates={SCREENS}
                  sizes="(min-width: 73.75rem) 380px, (min-width: 48rem) 45vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="v1-shell v1-doc__block" aria-labelledby="doc-holds">
          <h2 id="doc-holds" className="v1-doc__head">
            How it holds up.
          </h2>
          {HOLDS.map((line) => (
            <p key={line} className="v1-doc__line">
              {line}
            </p>
          ))}
        </section>

        <section className="v1-shell v1-doc__block" aria-labelledby="doc-stack">
          <h2 id="doc-stack" className="v1-doc__head">
            Stack.
          </h2>
          <p className="v1-doc__line">{STACK}</p>
        </section>

        <section className="v1-shell v1-doc__block" aria-labelledby="doc-result">
          <h2 id="doc-result" className="v1-doc__head">
            Result.
          </h2>
          <p className="v1-doc__line">
            Spec on{" "}
            <time className="v1-work__date" dateTime="2026-08-11">
              11 Aug 2026
            </time>
            .
          </p>
          <p className="v1-doc__line">
            Live on the morning of{" "}
            <time className="v1-work__date" dateTime="2026-08-27">
              27 Aug 2026
            </time>
            , in time for the client&rsquo;s exhibition stall.
          </p>
          <p className="v1-doc__line">
            The owner&rsquo;s note on the first version: &ldquo;the layout is very good and
            simple&rdquo;.
          </p>
          <p className="v1-doc__line">
            The one complaint was generation time, which is set by the model providers, and we said
            so.
          </p>
        </section>

        <section className="v1-shell v1-doc__block" aria-labelledby="doc-next">
          <h2 id="doc-next" className="v1-doc__head">
            What came next.
          </h2>
          {NEXT.map((line) => (
            <p key={line} className="v1-doc__line">
              {line}
            </p>
          ))}
        </section>

        <section className="v1-doc__band v1-doc__close" aria-labelledby="doc-close">
          <div className="v1-shell">
            <h2 id="doc-close" className="v1-doc__closehead">
              Send the brief. We send back a scope.
            </h2>
            <p className="v1-doc__closesub">
              Paid discovery is small and fixed, and it ends with a written scope, a date and a
              price. If you stop there, the plan you paid for is still yours.
            </p>
            <div className="v1-doc__act">
              <ContactCTA className="v1-btn v1-btn--primary">{contactLabel()}</ContactCTA>
              <p className="v1-doc__support">Paid discovery, fixed scope, no forms.</p>
            </div>
            <p className="v1-doc__channel">
              Email{" "}
              <a className="v1-doc__mail" href={contactHref()}>
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
