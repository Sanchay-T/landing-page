import type { CSSProperties } from "react";
import { SECTIONS } from "./sections";

/**
 * Variation 4 proof - the signal board.
 *
 * Copy is docs/goal/COPY.md section 2, tuned to the v4 tone note ("each count
 * gets its own flat colour block; the testimonial sits in the black block").
 * The note is read as a Swiss poster rather than four loose chips: one
 * full-bleed yellow panel, black type, and a 3px black rule grid that gives
 * every count its own cell of the board. Black on this yellow is 11.9:1, the
 * highest-contrast pairing the four inks allow, which is what lets the figures
 * carry the section at the 120 stop.
 *
 * WHY THE TESTIMONIAL IS NOT HERE
 * COPY.md prints the same sentence in section 1 and section 2, and the hero
 * already carries it verbatim as a blockquote with its attribution. Printing it
 * twice, once white-on-black inside this panel and once black-on-white 600px
 * above it, would read as a page that only has one quote and knows it. The hero
 * keeps the testimonial, this section keeps the counts, which is the split
 * 03-design-research section 3 item 2 asks for ("a named count plus one
 * testimonial", not the same testimonial twice).
 *
 * HOW THE ENTRANCE PRIMITIVE IS USED
 * The research brief asks for shapes that slide in on the grid axes, so this
 * section ships the spring enter from tokens.css section 4.1. It is applied to
 * two blocks and never to the twelve elements inside them: the sign, then the
 * table, 90ms apart on the Y axis. That is deliberate. Putting the enter on
 * each count cell would slide the cells against each other, and the rules that
 * divide them would come apart for the length of the transition and in any
 * capture that caught it. Moving the whole table as one keeps every rule
 * aligned at every frame, so the board is a board in the first frame as much as
 * in the last, and a scroll-0 full-page capture shows a finished panel that is
 * at most 24px off its final rhythm. Both blocks stop at full opacity, so
 * nothing here can capture as a hole.
 */

/**
 * COPY.md section 2, "Counts, all sourced, no invention". Four of the five
 * counts are figures and take the board; the fifth ("Two cities: Dubai and
 * Mumbai") is a place, not a measurement, so it sits in the rail below with the
 * two dates rather than pretending to be a metric.
 *
 * "25+" is the typographic form of the brief's "more than 25 screens"; the
 * caption carries the rest of the sentence, so nothing is dropped and nothing
 * is rounded.
 */
const COUNTS = [
  { figure: "1", caption: "Product live for a bespoke jewellery house in Dubai." },
  { figure: "16", caption: "Days from spec to live." },
  { figure: "4", caption: "Renders per design. The first in about two minutes." },
  { figure: "25+", caption: "Screens covered in an app store readiness audit." },
] as const;

/**
 * The rail. Both sourced dates from COPY.md section 1 "Sources" (spec received
 * 11 Aug 2026, live 27 Aug 2026) and the fifth count from section 2. The hero
 * prints the same two dates as a timetable at the 40 stop; here they are set
 * small and flat, as the board's dateline, so the two blocks read as a
 * headline and a footnote rather than as the same device twice.
 */
const RAIL = [
  { label: "Spec received", value: "11 Aug 2026" },
  { label: "Live", value: "27 Aug 2026" },
  { label: "Two cities", value: "Dubai and Mumbai" },
] as const;

/**
 * COPY.md section 2 secondary CTA. It points at the case section, so it only
 * renders once that section is on the page: an anchor to an id that does not
 * exist yet is exactly the dead link the build spec fails a section for. Read
 * from the same array the signage bar reads, so the link and the stop appear
 * together, on one flag.
 */
function workIsOnThePage() {
  return SECTIONS.some((section) => section.id === "work" && section.built);
}

export function V4Proof() {
  const showCaseLink = workIsOnThePage();

  return (
    <section
      className="v4-proof v4-panel--yellow"
      id="proof"
      aria-labelledby="v4-proof-title"
    >
      <div className="v4-shell">
        <div className="v4-enter-y">
          <p className="v4-proof__plate">Proof of work</p>

          <h2 className="v4-proof__title" id="v4-proof-title">
            Shipped, not promised.
          </h2>
        </div>

        {/* Board and rail move as one block, on one delay. Two delays would
            open a gap between the board's bottom rule and the rail's top rule,
            which are the same printed line. */}
        <div className="v4-enter-y" style={{ "--v4-enter-delay": "90ms" } as CSSProperties}>
          <ul className="v4-proof__board v4-grid">
            {COUNTS.map((count) => (
              <li className="v4-proof__cell" key={count.figure}>
                <p className="v4-proof__figure">{count.figure}</p>
                <p className="v4-proof__caption">{count.caption}</p>
              </li>
            ))}
          </ul>

          {/* One flat 8-column grid, no nesting: every slot and the CTA snap to
              the same columns the board above them uses. */}
          <div className="v4-proof__rail v4-grid">
            {RAIL.map((item) => (
              <div className="v4-proof__slot" key={item.label}>
                <p className="v4-proof__rail-label">{item.label}</p>
                <p className="v4-proof__rail-value">{item.value}</p>
              </div>
            ))}

            {showCaseLink ? (
              <a className="v4-block v4-proof__cta" href="#work">
                See how it was built
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
