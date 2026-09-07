import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ds/contact-cta";
import { Nav } from "@/components/variations/v5";
import "@/components/variations/v5/tokens.css";
import { contactLabel, site } from "@/lib/site";

/**
 * The flagship case in full, in the v5 "Liquid Metal" system.
 *
 * The document is COPY.md section 4 verbatim, all six blocks in order, and it
 * closes on COPY.md section 9. Nothing here is rephrased and nothing is
 * invented. The client is never named: the string is "a bespoke jewellery house
 * in Dubai" from COPY.md "Constants".
 *
 * NO ORB. One WebGL context per page, and this page is not the one that owns
 * it. The variation's device stays on /v5; here the type, the void and the two
 * steel bands carry the direction on their own, which is also what keeps this
 * page a case write-up rather than a second landing page.
 *
 * TWO PLATE RUNS, ON STEEL. The document is set on the void and the evidence
 * sits in two full-width steel bands, so a reader scrolling fast sees the
 * argument and the proof as two different materials. Run one is the seven `ui-*`
 * screens in ASSET-INVENTORY.md's product order, under the copy that describes
 * the flow. Run two is the pendant set: the four silver views in the product's
 * own order, which is the "four renders" claim, then the three gold plates as
 * the second design, then the one wide frame.
 *
 * EAGER, NOT LAZY, AND MEASURED. Fifteen plates are the content of this page
 * rather than decoration on it, and every one of them is an optimised WebP under
 * 40 KB at the width it renders. The first plate carries `priority` and is
 * preloaded; the other fourteen are `eager` rather than lazy, and that is a
 * measured decision, not a preference. The polish pass of 2026-09-07 switched
 * the fourteen to `loading="lazy"` and re-shot the page: in the 1280 full-page
 * capture six of the pendant plates in run two came back as empty frames with
 * their captions under them, because the stitched capture never dwells long
 * enough at each scroll offset for a lazily-requested image to arrive. A reader
 * who scrolls fast sees the same column of empty frames, so the fourteen stay
 * eager and every plate is in the document from the first paint.
 *
 * PLATE CAPTIONS. Each caption is the inventory's own alt text, verbatim, and
 * the image carries the same string as its `alt`. That is deliberate: the
 * inventory wrote those sentences to describe the artefact without naming a
 * brand, so they are the only sourced words available for a caption, and a
 * caption invented here would be a fact this repo cannot support. Every plate
 * is capped at 480px wide, none is full-bleed and none sits behind text, which
 * is the imagery rule in 03b-round2-brief.md.
 *
 * The nav takes `base="/v5"` so its corner mark and its section index point
 * back at the variation root rather than at anchors this page does not have.
 */

export const metadata: Metadata = {
  title: "A name-pendant studio, live for an exhibition stall in sixteen days.",
  description:
    "Spec on 11 Aug 2026. Live on the morning of 27 Aug 2026, in time for the client's exhibition stall.",
};

/** COPY.md section 4, the flagship case, verbatim and in document order. */
const TITLE =
  "A name-pendant studio, live for an exhibition stall in sixteen days.";
const TAGS = "Jewellery. Dubai. Product studio. Shipped 27 Aug 2026.";

const PROBLEM = {
  label: "Problem.",
  lines: [
    "A bespoke jewellery house sells pendants cut to a customer's name.",
    "Before ordering, the customer could not see their own name as a finished piece.",
    "A customisation field on a store page is a text box, not a design studio.",
  ],
} as const;

const BUILT = {
  label: "What we built.",
  lines: [
    "Type a name in Arabic or English and take a spelling suggestion.",
    "Choose one name or two, then the style, the metal, the stones, the size and the chain.",
    "Watch a live preview update as you choose, then approve the spelling.",
    "The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame.",
    "Download full screen, see a price estimate and request a quote.",
    "The operator issues the quote and the customer accepts it in the same screen.",
  ],
} as const;

const HOLDS_UP = {
  label: "How it holds up.",
  lines: [
    "Four stills run at once and each releases its on-neck version as soon as that one is ready.",
    "Under model provider limits the queue is shown honestly instead of hidden behind a spinner.",
    "A retry fallback and a time estimate went in on launch morning.",
  ],
} as const;

const CLOSING_BLOCKS = [
  {
    label: "Stack.",
    lines: [
      "Next.js, React, strict TypeScript, Supabase, Trigger.dev, gpt-image-2, fal.ai Seedance, Sentry, PostHog, DigitalOcean.",
    ],
  },
  {
    label: "Result.",
    lines: [
      "Spec on 11 Aug 2026.",
      "Live on the morning of 27 Aug 2026, in time for the client's exhibition stall.",
      'The owner\'s note on the first version: "the layout is very good and simple"',
      "The one complaint was generation time, which is set by the model providers, and we said so.",
    ],
  },
  {
    label: "What came next.",
    lines: [
      "Scope locked to six design styles and three layouts.",
      "Pendant sizing tightened in the renders, with pricing verification and usage control moved into the next scope.",
    ],
  },
] as const;

type Plate = {
  src: string;
  width: number;
  height: number;
  /** Alt text verbatim from ASSET-INVENTORY.md, and the visible caption. */
  alt: string;
};

/** ASSET-INVENTORY.md, the seven `ui-*` files in product order. */
const FLOW: readonly Plate[] = [
  {
    src: "/media/jewelo/ui-name-and-language@2x.webp",
    width: 1440,
    height: 822,
    alt: "The name step of a jewellery design tool: a name field, a language toggle, an approved script-spelling field, and a live pendant preview",
  },
  {
    src: "/media/jewelo/ui-style-picker@2x.webp",
    width: 1440,
    height: 822,
    alt: "The style step of a jewellery design tool showing six lettering styles as selectable cards",
  },
  {
    src: "/media/jewelo/ui-stones-and-setting@2x.webp",
    width: 1440,
    height: 822,
    alt: "The stone step of a jewellery design tool: setting density and stone type beside a live pendant preview",
  },
  {
    src: "/media/jewelo/ui-review-spec@2x.webp",
    width: 1440,
    height: 822,
    alt: "A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox",
  },
  {
    src: "/media/jewelo/ui-generation-queue@2x.webp",
    width: 920,
    height: 460,
    alt: "Four presentation views queued in parallel, labelled Studio, On model, Close up and Dark mood, each showing a queued state",
  },
  {
    src: "/media/jewelo/ui-rtl-mirror@2x.webp",
    width: 1440,
    height: 822,
    alt: "A design tool mirrored right to left, with the live preview on the right and the step rail reversed",
  },
  {
    src: "/media/jewelo/ui-operator-console@2x.webp",
    width: 1440,
    height: 322,
    alt: "An operator work queue header showing counts for quote requests, in progress and ready",
  },
];

/**
 * ASSET-INVENTORY.md, the four silver views in the product's own order, then
 * the three gold plates as the second design, then the one wide frame.
 */
const RENDERS: readonly Plate[] = [
  {
    src: "/media/jewelo/pendant-studio-silver@2x.webp",
    width: 1122,
    height: 1402,
    alt: "A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot",
  },
  {
    src: "/media/jewelo/pendant-worn-silver@2x.webp",
    width: 1122,
    height: 1222,
    alt: "A silver name pendant worn at the collarbone, framed below the chin",
  },
  {
    src: "/media/jewelo/pendant-close-silver@2x.webp",
    width: 1122,
    height: 1402,
    alt: "Close detail of a silver cut-out name pendant showing the polished edges and the chain links",
  },
  {
    src: "/media/jewelo/pendant-dark-silver@2x.webp",
    width: 1122,
    height: 1402,
    alt: "A silver name pendant resting on black velvet, lit as a dark editorial still",
  },
  {
    src: "/media/jewelo/pendant-studio-gold@2x.webp",
    width: 1254,
    height: 1254,
    alt: "A gold script name pendant with two small set stones, laid flat on a warm neutral ground",
  },
  {
    src: "/media/jewelo/pendant-worn-gold@2x.webp",
    width: 1122,
    height: 1227,
    alt: "A gold script name pendant worn at the collarbone, framed below the chin",
  },
  {
    src: "/media/jewelo/pendant-dark-gold-emerald@2x.webp",
    width: 1122,
    height: 1402,
    alt: "A gold script name pendant set with four small emeralds, on black velvet",
  },
  {
    src: "/media/jewelo/poster-16x9.webp",
    width: 1122,
    height: 631,
    alt: "A gold script name pendant set with emeralds on black velvet, cropped wide",
  },
];

/** COPY.md "Constants": the address as live text, linked to the brief subject. */
const MAIL_HREF = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  site.contact.mailSubject,
)}`;

const PLATE_SIZES =
  "(min-width: 64rem) 400px, (min-width: 40rem) 45vw, calc(100vw - 2.25rem)";

function Block({
  label,
  lines,
}: {
  label: string;
  lines: readonly string[];
}) {
  return (
    <div className="v5-case__block">
      <h2 className="v5-case__label">{label}</h2>
      {lines.map((line) => (
        <p className="v5-case__line" key={line}>
          {line}
        </p>
      ))}
    </div>
  );
}

function Plates({
  plates,
  first,
}: {
  plates: readonly Plate[];
  first: boolean;
}) {
  return (
    <div className="v5-plates">
      <div className="v5-band v5-plates__grid">
        {plates.map((plate, index) => (
          <figure className="v5-plate" key={plate.src}>
            <div className="v5-plate__frame">
              <Image
                src={plate.src}
                alt={plate.alt}
                width={plate.width}
                height={plate.height}
                sizes={PLATE_SIZES}
                {...(first && index === 0
                  ? { priority: true }
                  : { loading: "eager" as const })}
              />
            </div>
            <figcaption className="v5-plate__caption">{plate.alt}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="v5">
      <Nav base="/v5" />
      <main className="v5-case">
        <header className="v5-band v5-case__head">
          <h1 className="v5-display v5-case__title">{TITLE}</h1>
          <p>
            <span className="v5-chip v5-case__chip">{TAGS}</span>
          </p>
        </header>

        <div className="v5-band v5-case__doc">
          <Block label={PROBLEM.label} lines={PROBLEM.lines} />
          <Block label={BUILT.label} lines={BUILT.lines} />
        </div>

        <Plates plates={FLOW} first />

        <div className="v5-band v5-case__doc">
          <Block label={HOLDS_UP.label} lines={HOLDS_UP.lines} />
        </div>

        <Plates plates={RENDERS} first={false} />

        <div className="v5-band v5-case__doc">
          {CLOSING_BLOCKS.map((block) => (
            <Block key={block.label} label={block.label} lines={block.lines} />
          ))}
        </div>

        <section
          className="v5-band v5-case__close"
          aria-labelledby="case-start-title"
        >
          <h2 className="v5-display v5-case__close-title" id="case-start-title">
            Send the brief. We send back a scope.
          </h2>
          <p className="v5-case__close-lede">
            <span>
              Paid discovery is small and fixed, and it ends with a written
              scope, a date and a price.
            </span>
            <span>If you stop there, the plan you paid for is still yours.</span>
          </p>
          <ContactCTA className="v5-pill v5-case__cta">
            {contactLabel()}
          </ContactCTA>
          <p className="v5-case__support">
            Paid discovery, fixed scope, no forms.
          </p>
          <p className="v5-case__channel">
            Email{" "}
            <a className="v5-case__mail" href={MAIL_HREF}>
              {site.contact.email}
            </a>
            . No forms.
          </p>
        </section>
      </main>
    </div>
  );
}
