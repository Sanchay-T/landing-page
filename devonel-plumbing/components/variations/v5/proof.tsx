/**
 * The proof strip: five figures at poster scale on a steel band, one client
 * sentence under them, and nothing else.
 *
 * The direction's own words for this section are "five figures as 96px numerals
 * in two rows, captions at 14px" (03-design-research.md section 4, layout
 * skeleton 2), so the figures carry the scale here and the section heading sits
 * below them in size. The numbers are the proof; the heading is only the claim
 * about them.
 *
 * Devonel is the subject. Every figure is a fact about what the studio did -
 * how long it took, how many renders it produces, how many screens it audited,
 * how many cities it works from - and the one client sentence is quoted, not
 * illustrated. No product image, no client render and no client name appear
 * here; the imagery rule in 03b-round2-brief.md keeps those inside the case
 * cards and on /work/jewelo.
 *
 * SPLIT. Each item is one COPY.md count, cut once: the quantity becomes the
 * display figure and the rest of the sentence becomes the caption, so figure
 * plus caption reads back as the sourced line word for word. The fourth count
 * is "More than 25 screens...", and "More than" is a floor rather than a
 * number, so it is set at caption size on the figure's own baseline instead of
 * being dropped or rounded into the numeral. Nothing here is rephrased and no
 * number is converted: COPY.md spells "Sixteen", so the page spells it too.
 *
 * NO ENTRANCE. This variation spends its one moment on the orb's environment
 * map building on load, and the direction allows exactly one. A second reveal
 * on this band would be the scattered fade-and-slide-up that every generated
 * page ships, so there is no entrance animation here at all and the section is
 * identical under `prefers-reduced-motion`.
 *
 * SECONDARY CTA. COPY.md gives this section "See how it was built", whose only
 * sanctioned target is the case study. It renders only once `sections.ts` says
 * the work section is on the page, so the link can never point at an anchor
 * that does not exist.
 */

import { sections } from "./sections";

type Count = {
  /** The quantity, set at display size. */
  figure: string;
  /** A qualifier that is not part of the number, set at caption size. */
  lead?: string;
  /** The rest of the sourced line. */
  caption: string;
};

/** COPY.md section 2, "Counts, all sourced, no invention", in document order. */
const COUNTS: readonly Count[] = [
  {
    figure: "One",
    caption:
      "product live: a name-pendant studio for a bespoke jewellery house in Dubai, 27 Aug 2026",
  },
  { figure: "Sixteen", caption: "days from spec to live" },
  {
    figure: "Four",
    caption: "renders per design, the first in about two minutes",
  },
  {
    lead: "More than",
    figure: "25",
    caption: "screens covered in an app store readiness audit",
  },
  { figure: "Two", caption: "cities: Dubai and Mumbai" },
];

/** COPY.md section 2, "Testimonial". Quoted exactly, quote marks included. */
const QUOTE = '"the layout is very good and simple"';
const QUOTE_SOURCE =
  "the owner, a bespoke jewellery house in Dubai, on the day the studio went live";

export function Proof() {
  const workIsBuilt = sections.some(
    (section) => section.id === "work" && section.built,
  );

  return (
    <section className="v5-proof" id="proof" aria-labelledby="proof-title">
      <div className="v5-band v5-proof__inner">
        <h2 className="v5-display v5-proof__head" id="proof-title">
          Shipped, not promised.
        </h2>

        <hr className="v5-proof__rule" />

        <ul className="v5-proof__figures">
          {COUNTS.map((count) => (
            <li className="v5-proof__item" key={count.figure}>
              <p className="v5-display v5-proof__figure">
                {count.lead ? (
                  <span className="v5-proof__lead">{count.lead} </span>
                ) : null}
                {count.figure}
              </p>
              <p className="v5-proof__caption">{count.caption}</p>
            </li>
          ))}
        </ul>

        <figure className="v5-proof__quote">
          <blockquote className="v5-proof__quote-text">{QUOTE}</blockquote>
          <figcaption className="v5-proof__quote-source">
            {QUOTE_SOURCE}
          </figcaption>
        </figure>

        {workIsBuilt ? (
          <a className="v5-proof__more" href="#work">
            See how it was built
          </a>
        ) : null}
      </div>
    </section>
  );
}
