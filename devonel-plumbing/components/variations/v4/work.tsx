import Image from "next/image";
import type { CSSProperties } from "react";

/**
 * Variation 4, section 4 - case studies, as posters.
 *
 * Copy is docs/goal/COPY.md section 4, verbatim, tuned to the v4 tone note:
 * "poster cards, outcome title at 72px, one number per card, colour inherited
 * from the matching service".
 *
 * Colour is the index, not decoration. tokens.css section 1.2 fixes one ink per
 * service for the whole page, so each case is printed in the ink of the service
 * that delivered it:
 *
 *   flagship, a customer-facing product studio   service 1  red, solid line
 *   app store readiness audit                    service 5  red, dashed line
 *   WhatsApp lead system                         service 4  black, solid line
 *
 * Services 1 and 5 share red, which the hero legend already tells apart the way
 * a metro map tells a shuttle apart: same ink, dashed. Each panel therefore
 * carries its line across the top, drawn in paper on the ink ground, solid or
 * punched. That is one rule with no exception, and it is the same construction
 * the hero map uses (tokens.css section 6.8, `.v4-map__gaps`).
 *
 * No client brand name appears anywhere: COPY.md "Constants" fixes the string
 * "a bespoke jewellery house in Dubai" and the real name is confidential.
 */

/**
 * COPY.md section 4 label and headline. The label is the section's own heading,
 * "Case studies": COPY.md gave sections 2 and 4 the same "Proof of work" string
 * and this page prints both plates within one scroll, so the same chip appeared
 * twice. The proof strip keeps the original wording and this one takes the
 * heading it already had.
 */
const LABEL = "Case studies";
const HEADLINE = "One shipped, two in build, nothing invented.";

/**
 * The flagship, COPY.md "Flagship case: the name-pendant studio".
 * Tags are the COPY.md tag string, split on its own full stops so each one can
 * be set as a signage chip instead of a run-on line.
 */
const FLAGSHIP = {
  title: "A name-pendant studio, live for an exhibition stall in sixteen days.",
  tags: ["Jewellery", "Dubai", "Product studio", "Shipped 27 Aug 2026"],
  /** COPY.md "Result": spec 11 Aug, live 27 Aug, which is sixteen days. */
  figure: { value: "16", label: "days, spec to live" },
  dates: [
    { label: "Spec", value: "11 Aug 2026" },
    { label: "Live", value: "27 Aug 2026" },
  ],
  quote: {
    text: "the layout is very good and simple",
    source: "the owner, a bespoke jewellery house in Dubai",
  },
  blocks: [
    {
      heading: "Problem",
      lines: [
        "A bespoke jewellery house sells pendants cut to a customer's name.",
        "Before ordering, the customer could not see their own name as a finished piece.",
        "A customisation field on a store page is a text box, not a design studio.",
      ],
    },
    {
      heading: "What we built",
      lines: [
        "Type a name in Arabic or English and take a spelling suggestion.",
        "Choose one name or two, then the style, the metal, the stones, the size and the chain.",
        "The studio returns four renders, then a price estimate and a quote in the same screen.",
      ],
    },
    {
      heading: "Stack",
      /** COPY.md "Stack", as a plain word list. No logos anywhere on this site. */
      words: [
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
      ],
    },
    {
      heading: "Result",
      lines: [
        "Live on the morning of 27 Aug 2026, in time for the client's exhibition stall.",
        "The one complaint was generation time, which is set by the model providers, and we said so.",
      ],
    },
  ],
} as const;

/**
 * The two open files, COPY.md "Showcase" blocks, with their in-progress status
 * wording exactly as COPY.md prints it. Neither gets an image: there is no real
 * artefact from either one, and an invented one is a failing section.
 */
const SHOWCASES = [
  {
    id: "audit",
    /** Service 5, app store readiness: red, dashed. */
    panel: "v4-panel--red",
    dashed: true,
    title: "An audit that found the launch blockers before submission.",
    tags: ["Mobile app", "Audit delivered"],
    lines: [
      "A client had built a mobile app and wanted it ready for the stores, not rebuilt.",
      "We read the whole thing: five tabs, more than 25 screens.",
      "The audit listed what would stop a launch: ad units still on test IDs, store billing not wired, a notification cap that needs a rolling scheduler, a privacy policy that contradicted the ads, and in-app account deletion missing.",
    ],
    status: "Status: audit delivered, build not started",
  },
  {
    id: "whatsapp",
    /** Service 4, WhatsApp lead systems: black, solid. */
    panel: "v4-panel--black",
    dashed: false,
    title: "Leads that answer back, for a luxury watch boutique in Dubai.",
    tags: ["Retail", "WhatsApp", "In progress"],
    lines: [
      "Leads were arriving on WhatsApp and going cold in the boutique's current tool.",
      "We ran discovery on the same channel and timed how long competitors took to answer the same question; most took hours and some never replied.",
      "The scope is a lead system that answers, qualifies and hands over.",
    ],
    status: "Status: in progress, discovery started 25 Aug 2026",
  },
] as const;

/** Enter stagger for the four poster blocks, in ms. */
const BLOCK_STEP_MS = 70;

/** The line that runs across the top of every panel in this section. */
function PanelLine({ dashed = false }: { dashed?: boolean }) {
  return (
    <span
      className={dashed ? "v4-work-line v4-work-line--dashed" : "v4-work-line"}
      aria-hidden="true"
    />
  );
}

function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="v4-work-tags">
      {items.map((tag) => (
        <li className="v4-work-tags__item" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function V4Work() {
  return (
    <section className="v4-work" id="work" aria-labelledby="v4-work-title">
      <div className="v4-shell v4-work__head">
        <p className="v4-work__label">{LABEL}</p>
        <h2 className="v4-work__title" id="v4-work-title">
          {HEADLINE}
        </h2>
      </div>

      {/* The flagship, full bleed in service ink 1. */}
      <article className="v4-work-case v4-panel--red" aria-labelledby="v4-work-case-title">
        <div className="v4-shell">
          <PanelLine />
          <Tags items={FLAGSHIP.tags} />

          <h3 className="v4-work-case__title" id="v4-work-case-title">
            {FLAGSHIP.title}
          </h3>

          <div className="v4-work-case__top v4-grid">
            {/* The one real render in this section. Hard edge, no radius, no
                shadow: a plate on a poster, printed at the image's own ratio so
                nothing is cropped at 2560 and nothing overflows at 360. */}
            <figure className="v4-work-case__plate">
              <Image
                src="/media/jewelo/pendant-studio-silver@2x.webp"
                alt="A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot"
                width={1122}
                height={1402}
                sizes="(min-width: 900px) min(33vw, 480px), (min-width: 560px) 45vw, 92vw"
                priority
              />
              <figcaption>One of the four presentation views the studio returns.</figcaption>
            </figure>

            <div className="v4-work-case__meta">
              <p className="v4-work-case__figure">
                <span className="v4-work-case__num">{FLAGSHIP.figure.value}</span>
                <span className="v4-work-case__numlabel">{FLAGSHIP.figure.label}</span>
              </p>

              <dl className="v4-work-case__dates">
                {FLAGSHIP.dates.map((date) => (
                  <div className="v4-work-case__date" key={date.label}>
                    <dt>{date.label}</dt>
                    <dd>{date.value}</dd>
                  </div>
                ))}
              </dl>

              <blockquote className="v4-work-case__quote">
                <p>&ldquo;{FLAGSHIP.quote.text}&rdquo;</p>
                <footer>{FLAGSHIP.quote.source}</footer>
              </blockquote>
            </div>
          </div>

          <div className="v4-work-case__blocks v4-grid">
            {FLAGSHIP.blocks.map((block, index) => (
              <div
                className="v4-work-block v4-enter-y"
                key={block.heading}
                style={{ "--v4-enter-delay": `${index * BLOCK_STEP_MS}ms` } as CSSProperties}
              >
                <h4 className="v4-work-block__heading">{block.heading}</h4>
                {"words" in block ? (
                  <ul className="v4-work-block__words">
                    {block.words.map((word) => (
                      <li key={word}>{word}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="v4-work-block__body">
                    {block.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* COPY.md section 4 CTA alternate A, the only sanctioned secondary
              action on the site. Black block on a red panel, so it declares its
              own hover ink per tokens.css section 4.2. */}
          <a className="v4-block v4-work-case__cta" href="/v4/work/jewelo">
            Read the full build
          </a>
        </div>
      </article>

      <div className="v4-shell">
        <div className="v4-work__tiles v4-grid">
          {SHOWCASES.map((item) => (
            <article
              className={`v4-work-tile ${item.panel}`}
              key={item.id}
              aria-labelledby={`v4-work-tile-${item.id}`}
            >
              <PanelLine dashed={item.dashed} />
              <Tags items={item.tags} />
              <h3 className="v4-work-tile__title" id={`v4-work-tile-${item.id}`}>
                {item.title}
              </h3>
              <div className="v4-work-tile__body">
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="v4-work-tile__status">{item.status}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
