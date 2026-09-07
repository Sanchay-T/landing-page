/**
 * Case studies: one steel slab for the shipped product, two void rows for the
 * work that is not shipped yet.
 *
 * The direction's own words for this section are a steel slab carrying the
 * outcome title at poster scale with one still framed in a chrome hairline, and
 * the two showcases as rows on the void with their status lines and no image
 * (03-design-research.md section 4, "Direction 5"). So the honesty is in the
 * form: the thing that exists is a raised block with evidence in it, and the
 * two things that do not exist yet are lines of type on the ground. A reader
 * can tell which is which before reading a word.
 *
 * DEVONEL IS THE SUBJECT. The one image here is the review screen of the studio
 * Devonel built, not a photograph of what the client sells. ASSET-INVENTORY.md
 * offers both and says why: the approve-spelling gate is a Devonel decision,
 * and the pendant is the client's product. On a page whose whole argument is
 * that the studio is the subject, the screen wins. Every pendant plate lives on
 * /v5/work/jewelo, where the case is the page rather than a card on someone
 * else's.
 *
 * THE CLIENT IS NEVER NAMED. The string is "a bespoke jewellery house in Dubai"
 * from COPY.md "Constants", and the alt text is the inventory's own, written to
 * describe the artefact without naming a brand.
 *
 * WHAT THE CARD CARRIES AND WHAT THE SUB-PAGE CARRIES. The slab runs the
 * problem, what was built, the stack and the result, which is the whole
 * argument. "How it holds up" and "What came next" are on /v5/work/jewelo with
 * the fifteen plates, so the link is a real next step rather than the same
 * words again.
 *
 * TWO COLUMNS, SPLIT BY KIND. Above 73.75rem the slab puts the argument on the
 * left - why it existed, what it does, what it is made of - and the evidence on
 * the right: the screen, then the dates, the owner's note and the one complaint.
 * The split is not decorative. It is the only cut in this document that leaves
 * both columns roughly the same height, so the slab closes on a straight edge
 * instead of on 400px of empty steel beside a short image.
 *
 * NO ENTRANCE. The variation spends its one moment on the orb's environment map
 * building on load. Nothing in this section moves on scroll or on load, so it
 * is byte-identical under `prefers-reduced-motion` apart from the hover
 * hairline under the one link, which collapses to 1ms in `tokens.css`.
 */

import Image from "next/image";

/** COPY.md section 4, "Flagship case: the name-pendant studio", verbatim. */
const CASE = {
  title: "A name-pendant studio, live for an exhibition stall in sixteen days.",
  tags: "Jewellery. Dubai. Product studio. Shipped 27 Aug 2026.",
  /** The argument: why it existed, what it does, what it is made of. */
  argument: [
    {
      label: "Problem.",
      lines: [
        "A bespoke jewellery house sells pendants cut to a customer's name.",
        "Before ordering, the customer could not see their own name as a finished piece.",
        "A customisation field on a store page is a text box, not a design studio.",
      ],
    },
    {
      label: "What we built.",
      lines: [
        "Type a name in Arabic or English and take a spelling suggestion.",
        "Choose one name or two, then the style, the metal, the stones, the size and the chain.",
        "Watch a live preview update as you choose, then approve the spelling.",
        "The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame.",
        "Download full screen, see a price estimate and request a quote.",
        "The operator issues the quote and the customer accepts it in the same screen.",
      ],
    },
    {
      label: "Stack.",
      lines: [
        "Next.js, React, strict TypeScript, Supabase, Trigger.dev, gpt-image-2, fal.ai Seedance, Sentry, PostHog, DigitalOcean.",
      ],
    },
  ],
  /** The evidence, set beside the still: the dates, the note, the complaint. */
  outcome: [
    {
      label: "Result.",
      lines: [
        "Spec on 11 Aug 2026.",
        "Live on the morning of 27 Aug 2026, in time for the client's exhibition stall.",
        'The owner\'s note on the first version: "the layout is very good and simple"',
        "The one complaint was generation time, which is set by the model providers, and we said so.",
      ],
    },
  ],
} as const;

/**
 * The one still on this page, from ASSET-INVENTORY.md with the inventory's own
 * alt text. `@2x` is the source so a 400px column still has a retina file to
 * draw from; the rendered box is capped at 480px, which is the inventory's
 * limit for a case card.
 */
const STILL = {
  src: "/media/jewelo/ui-review-spec@2x.webp",
  width: 1440,
  height: 822,
  alt: "A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox",
} as const;

/** COPY.md section 4, the two showcases, verbatim and in document order. */
const SHOWCASES = [
  {
    title: "An audit that found the launch blockers before submission.",
    tags: "Mobile app. Audit delivered.",
    lines: [
      "A client had built a mobile app and wanted it ready for the stores, not rebuilt.",
      "We read the whole thing: five tabs, more than 25 screens.",
      "The audit listed what would stop a launch: ad units still on test IDs, store billing not wired, a notification cap that needs a rolling scheduler, a privacy policy that contradicted the ads, and in-app account deletion missing.",
    ],
    status: "Status: audit delivered, build not started",
  },
  {
    title: "Leads that answer back, for a luxury watch boutique in Dubai.",
    tags: "Retail. WhatsApp. In progress.",
    lines: [
      "Leads were arriving on WhatsApp and going cold in the boutique's current tool.",
      "We ran discovery on the same channel and timed how long competitors took to answer the same question; most took hours and some never replied.",
      "The scope is a lead system that answers, qualifies and hands over.",
    ],
    status: "Status: in progress, discovery started 25 Aug 2026",
  },
] as const;

function Block({
  block,
}: {
  block: { label: string; lines: readonly string[] };
}) {
  return (
    <div className="v5-work__block">
      <h4 className="v5-work__label">{block.label}</h4>
      {block.lines.map((line) => (
        <p className="v5-work__line" key={line}>
          {line}
        </p>
      ))}
    </div>
  );
}

export function Work() {
  return (
    <section className="v5-work" id="work" aria-labelledby="work-title">
      <div className="v5-band v5-work__inner">
        <h2 className="v5-display v5-work__head" id="work-title">
          One shipped, two in build, nothing invented.
        </h2>

        <article className="v5-slab v5-work__case">
          <div className="v5-work__case-head">
            <h3 className="v5-display v5-work__title">{CASE.title}</h3>
            <p>
              <span className="v5-chip v5-work__chip">{CASE.tags}</span>
            </p>
          </div>

          <hr className="v5-work__rule" />

          <div className="v5-work__body">
            <div className="v5-work__doc">
              {CASE.argument.map((block) => (
                <Block key={block.label} block={block} />
              ))}
            </div>

            <div className="v5-work__aside">
              <div className="v5-work__frame">
                <Image
                  src={STILL.src}
                  alt={STILL.alt}
                  width={STILL.width}
                  height={STILL.height}
                  sizes="(min-width: 73.75rem) 400px, (min-width: 48rem) 60vw, 88vw"
                  priority
                />
              </div>
              {CASE.outcome.map((block) => (
                <Block key={block.label} block={block} />
              ))}
            </div>
          </div>

          <a className="v5-work__more" href="/v5/work/jewelo">
            Read the full build
          </a>
        </article>

        <ul className="v5-work__rows">
          {SHOWCASES.map((showcase) => (
            <li className="v5-work__row" key={showcase.title}>
              <h3 className="v5-display v5-work__row-title">
                {showcase.title}
              </h3>
              <div className="v5-work__row-copy">
                <p>
                  <span className="v5-chip v5-work__chip">{showcase.tags}</span>
                </p>
                {showcase.lines.map((line) => (
                  <p className="v5-work__line" key={line}>
                    {line}
                  </p>
                ))}
                <p>
                  <span className="v5-chip v5-work__chip v5-work__status">
                    {showcase.status}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
