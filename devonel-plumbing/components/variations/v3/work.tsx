import Image from "next/image";
import type { ReactNode } from "react";
import { getSection, ticks } from "./sections";

/**
 * Section 4, days 3 to 14: the spine of the page.
 *
 * The band writes no colour and pins no clock. It is a plain `.v3-band`, so it
 * is read at whatever hour the reader has scrolled to, unlike the proof strip
 * two screens above which is pinned to daylight.
 *
 * THE FLAGSHIP IS THE STORY THE TIMELINE TELLS, so it sits at its dates: a wide
 * station carrying the outcome title with 11 Aug - 27 Aug 2026 at the rule's
 * end, the two dates `docs/goal/COPY.md` section 4 states for it. Inside it the
 * same station repeats at body size for each block of the case, and only the
 * two blocks the brief actually dates carry a date - Problem on 11 Aug, the day
 * the spec arrived, and Result on 27 Aug, the morning it went live. The other
 * rules simply end. That is the rule the services band above set, and filling a
 * date in to make the column even would break it.
 *
 * The two showcases are undated stations, smaller, with no image, because
 * neither has shipped and a still would claim otherwise. Each closes on its own
 * status line, verbatim.
 *
 * ONE STILL, AND IT IS THE STUDIO'S WORK RATHER THAN THE CLIENT'S PRODUCT.
 * `docs/goal/ASSET-INVENTORY.md` offers the review screen as the alternative to
 * a pendant photograph "because the approve-spelling gate is a Devonel decision
 * rather than a client product", and `docs/goal/03b-round2-brief.md` settles it:
 * if the section makes the reader think about jewellery before it makes them
 * think about the studio, the section is wrong. So the root page carries no
 * jewellery photograph at all; the renders live on `/v3/work/jewelo`, where the
 * case is the subject. The still is capped at 480px at 1x, sits in its own
 * column beside the text and never behind it, and carries the inventory's alt
 * text word for word.
 *
 * Copy is verbatim from COPY.md section 4, bracketed source tags removed.
 * Server component. The client is never named.
 */

/* ------------------------------------------------------------ the flagship */

const RESULT_SPEC = "Spec on 11 Aug 2026.";
const RESULT_LIVE = "Live on the morning of 27 Aug 2026, in time for the client's exhibition stall.";
const RESULT_QUOTE =
  "The owner's note on the first version: \"the layout is very good and simple\".";
const RESULT_COMPLAINT =
  "The one complaint was generation time, which is set by the model providers, and we said so.";

/**
 * The flagship case, shared with `/v3/work/jewelo` so the two can never drift.
 * The sub-page prints all of it; this band prints the blocks the reader needs to
 * decide whether to open the sub-page.
 */
export const flagship = {
  title: "A name-pendant studio, live for an exhibition stall in sixteen days.",
  tags: "Jewellery. Dubai. Product studio. Shipped 27 Aug 2026.",
  /** Both dates from COPY.md section 4, "Result". */
  range: "11 Aug - 27 Aug 2026",
  problem: [
    "A bespoke jewellery house sells pendants cut to a customer's name.",
    "Before ordering, the customer could not see their own name as a finished piece.",
    "A customisation field on a store page is a text box, not a design studio.",
  ],
  built: [
    "Type a name in Arabic or English and take a spelling suggestion.",
    "Choose one name or two, then the style, the metal, the stones, the size and the chain.",
    "Watch a live preview update as you choose, then approve the spelling.",
    "The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame.",
    "Download full screen, see a price estimate and request a quote.",
    "The operator issues the quote and the customer accepts it in the same screen.",
  ],
  holds: [
    "Four stills run at once and each releases its on-neck version as soon as that one is ready.",
    "Under model provider limits the queue is shown honestly instead of hidden behind a spinner.",
    "A retry fallback and a time estimate went in on launch morning.",
  ],
  stack:
    "Next.js, React, strict TypeScript, Supabase, Trigger.dev, gpt-image-2, fal.ai Seedance, Sentry, PostHog, DigitalOcean.",
  /** All four lines, as COPY.md writes them. The sub-page prints these. */
  result: [RESULT_SPEC, RESULT_LIVE, RESULT_QUOTE, RESULT_COMPLAINT],
  /**
   * The same block without the owner's quote. The proof strip two screens above
   * already carries that quote and its attribution in full, and printing seven
   * identical words twice on one page weakens both.
   */
  resultOnPage: [RESULT_SPEC, RESULT_LIVE, RESULT_COMPLAINT],
  next: [
    "Scope locked to six design styles and three layouts.",
    "Pendant sizing tightened in the renders, with pricing verification and usage control moved into the next scope.",
  ],
  /** The only sanctioned secondary action on the site. */
  href: "/v3/work/jewelo",
  cta: "Read the full build",
  /**
   * One still, from ASSET-INVENTORY.md, with its alt text unchanged. The `@2x`
   * file is the source so a 480px slot stays sharp at every device ratio; the
   * page never renders it wider than the inventory's 480px cap.
   */
  still: {
    src: "/media/jewelo/ui-review-spec@2x.webp",
    alt: "A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox",
    width: 1440,
    height: 822,
  },
} as const;

/* ------------------------------------------------------------ the showcases */

type Showcase = {
  title: string;
  lines: readonly string[];
  /** Verbatim from COPY.md section 4. An open file has a status, not a date. */
  status: string;
};

const showcases: readonly Showcase[] = [
  {
    title: "An audit that found the launch blockers before submission.",
    lines: [
      "A client had built a mobile app and wanted it ready for the stores, not rebuilt.",
      "We read the whole thing: five tabs, more than 25 screens.",
      "The audit listed what would stop a launch: ad units still on test IDs, store billing not wired, a notification cap that needs a rolling scheduler, a privacy policy that contradicted the ads, and in-app account deletion missing.",
    ],
    status: "Status: audit delivered, build not started.",
  },
  {
    title: "Leads that answer back, for a luxury watch boutique in Dubai.",
    lines: [
      "Leads were arriving on WhatsApp and going cold in the boutique's current tool.",
      "We ran discovery on the same channel and timed how long competitors took to answer the same question; most took hours and some never replied.",
      "The scope is a lead system that answers, qualifies and hands over.",
    ],
    status: "Status: in progress, discovery started 25 Aug 2026.",
  },
];

/* ------------------------------------------------------------------ a block */

/**
 * One block of the case: the station at its third scale. A rule, the block's
 * name on it in the condensed display face, and the day at the rule's end where
 * the brief dates one.
 *
 * Shared with the sub-page, which sets `level` to 2 because there the case is
 * the page rather than a section of it.
 */
export function CaseBlock({
  label,
  date,
  level = 4,
  children,
}: {
  label: string;
  date?: string;
  level?: 2 | 4;
  children: ReactNode;
}) {
  const Heading = level === 2 ? "h2" : "h4";

  return (
    <div className="v3-case-block">
      <Heading className="v3-case-block-rule">
        <span>{label}</span>
        {date ? <span className="v3-case-block-date">{date}</span> : null}
      </Heading>
      {children}
    </div>
  );
}

/** The lines of a block, one thought each, as the voice contract asks. */
export function CaseLines({ lines, lede }: { lines: readonly string[]; lede?: true }) {
  return (
    <ul className={lede ? "v3-case-text v3-case-text-lede" : "v3-case-text"} role="list">
      {lines.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------- the section */

export function Work() {
  const section = getSection("work");
  // The band's own station date is the span of the ticks it is set on, read off
  // the same sixteen days the bar draws, so the two can never disagree.
  const stationDate = `${ticks[section.tick - 1].date} - ${ticks[section.tickEnd - 1].date} 2026`;

  return (
    <section id="work" className="v3-band v3-work" data-stage="first-light" aria-labelledby="work-h">
      <div className="v3-inner">
        <p className="v3-station">
          <span>{section.label}</span>
          <span className="v3-station-date">{stationDate}</span>
        </p>

        <h2 className="v3-h2" id="work-h">
          One shipped, two in build, nothing invented.
        </h2>

        <div className="v3-cases">
          <article>
            <div className="v3-service-rule v3-case-rule">
              <h3 className="v3-service-name">{flagship.title}</h3>
              <p className="v3-service-date">{flagship.range}</p>
            </div>
            <p className="v3-case-tags">{flagship.tags}</p>

            <div className="v3-case-grid">
              <div className="v3-case-body">
                <CaseBlock label="Problem." date="11 Aug">
                  <CaseLines lines={flagship.problem} lede />
                </CaseBlock>

                <CaseBlock label="What we built.">
                  <CaseLines lines={flagship.built} />
                </CaseBlock>

                <CaseBlock label="Stack.">
                  <p className="v3-case-text">{flagship.stack}</p>
                </CaseBlock>

                <CaseBlock label="Result." date="27 Aug">
                  <CaseLines lines={flagship.resultOnPage} />
                </CaseBlock>
              </div>

              <figure className="v3-case-still">
                <Image
                  className="v3-case-img"
                  src={flagship.still.src}
                  alt={flagship.still.alt}
                  width={flagship.still.width}
                  height={flagship.still.height}
                  sizes="(min-width: 1100px) 480px, 92vw"
                  priority
                />
              </figure>

              <p className="v3-more v3-case-more">
                <a href={flagship.href}>{flagship.cta}</a>
              </p>
            </div>
          </article>

          <div className="v3-cases-open">
            {showcases.map((showcase) => (
              <article className="v3-case-open" key={showcase.title}>
                <div className="v3-service-rule">
                  <h3 className="v3-service-name">{showcase.title}</h3>
                </div>
                <CaseLines lines={showcase.lines} />
                <p className="v3-case-status">{showcase.status}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
