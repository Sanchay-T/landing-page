import { getSection } from "./sections";

/**
 * Section 7, day: how a quote gets made.
 *
 * The sun is up. `data-stage="day"` pins nothing and paints nothing - it is the
 * value the clock falls back to on the no-JavaScript and reduced-motion paths,
 * and everywhere else the band travels with the reader like every other plain
 * `.v3-band`. No colour is written in this file.
 *
 * FOUR STATIONS, AND NOT ONE OF THEM CARRIES A DATE. The services band set the
 * rule: a rule ends with the day the build used that thing, or it simply ends. A
 * way of working is not a day, so all four rules end bare, and so does the
 * band's own station above them. By this point in the page the reader has seen
 * six dated rules and knows what an ending rule means.
 *
 * ONE COLUMN, NOT A GRID. The founders band directly above goes two up at
 * 1180 because two people are simultaneous. These four are not: discovery pays
 * for the plan, the build is bought from that plan, the retainer runs what the
 * build produced, and revenue share sits on top of a fee that already exists.
 * They are a sequence, so they stack, in that order, one under the next - and
 * the two bands stop having the same geometry.
 *
 * SIZE AND RULE, NEVER OPACITY. Names at 28-36 in the condensed display face,
 * one step under the services station because this band is the page winding
 * down; descriptions in Geist at the promise scale; the closing note at body
 * scale on the 14% hairline rather than the 32% rule the terms sit on. There is
 * no muted ink on this page and none is faked here.
 *
 * WHAT IS DELIBERATELY NOT HERE. COPY.md section 7 restates the two binding
 * rules that section 5 already carries as "Two rules that do not move" -
 * minimum commitment up front, and no unpaid multi-month starts. The
 * orchestrator's decision for this run, the same one taken on v1 and v2, is
 * that the pair renders once, in the process band, and this band omits it. Also
 * absent: any CTA. The primary action belongs to the contact band, which is not
 * built, and a button here would be a dead anchor.
 *
 * "Costs we pass through" is kept, because section 7 is where COPY writes it in
 * full ("billed separately, at cost, and itemised") and it is a term of the
 * quote rather than a rule of engagement. It closes the band as a named note:
 * the same station at its smallest scale, the one the case blocks use.
 *
 * Copy is verbatim from COPY.md section 7, bracketed source tags removed.
 * Server component.
 */

type Term = {
  /** The bold label from COPY.md section 7, with its full stop. */
  name: string;
  /** The sentences under it, as written. */
  detail: string;
};

/** COPY.md section 7, "Four ways to work with us", in that order. */
const terms: readonly Term[] = [
  {
    name: "Paid discovery.",
    detail:
      "A small fixed first scope that produces the plan, the date and the price. Credited against the build.",
  },
  {
    name: "Fixed-scope build.",
    detail: "One price for one written scope, paid before the phase starts.",
  },
  {
    name: "Monthly retainer.",
    detail: "Running, monitoring, fixes and the next scope after launch.",
  },
  {
    name: "Revenue share.",
    detail: "Optional, on top of the fee, never instead of it.",
  },
];

export function Engagement() {
  const section = getSection("engagement");

  return (
    <section
      id="engagement"
      className="v3-band v3-engagement"
      data-stage="day"
      aria-labelledby="engagement-h"
    >
      <div className="v3-inner">
        <p className="v3-station">
          <span>{section.label}</span>
        </p>

        <h2 className="v3-h2" id="engagement-h">
          No prices on this page. Here is exactly how we get to one.
        </h2>

        <p className="v3-lede">
          Scope sets the number, so we write the scope first and you pay for that step.
        </p>

        <ul className="v3-terms" role="list">
          {terms.map((term) => (
            <li className="v3-term" key={term.name}>
              <div className="v3-service-rule">
                <h3 className="v3-service-name v3-term-name">{term.name}</h3>
              </div>
              <p className="v3-service-lede">{term.detail}</p>
            </li>
          ))}
        </ul>

        <div className="v3-engagement-note">
          <h3 className="v3-case-block-rule">
            <span>Costs we pass through.</span>
          </h3>
          <p className="v3-case-text">
            Model API and infrastructure costs are billed separately, at cost, and itemised.
          </p>
        </div>
      </div>
    </section>
  );
}
