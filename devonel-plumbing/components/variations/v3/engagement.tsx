import type { CSSProperties } from "react";
import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel } from "@/lib/site";

/** The entrance primitive, staggered by hand so the sequence reads top to
 *  bottom. Every step starts from a visible 0.6 opacity, never from 0, so a
 *  capture taken mid-flight still shows the whole section. */
const delay = (ms: number) => ({ "--v3-enter-delay": `${ms}ms` }) as CSSProperties;

type V3Way = {
  /** COPY.md's bolded name for the way of working. */
  name: string;
  /** The term under it: what it is and what it costs you to start. */
  term: string;
};

/**
 * COPY.md section 7, "Four ways to work with us", verbatim. These are four
 * alternatives, not four steps, which is why nothing here is numbered: a
 * numeral would tell the reader to read them as a sequence and start at the
 * top, and only one of the four is where an engagement begins.
 */
const WAYS: readonly V3Way[] = [
  {
    name: "Paid discovery.",
    term: "A small fixed first scope that produces the plan, the date and the price. Credited against the build.",
  },
  {
    name: "Fixed-scope build.",
    term: "One price for one written scope, paid before the phase starts.",
  },
  {
    name: "Monthly retainer.",
    term: "Running, monitoring, fixes and the next scope after launch.",
  },
  {
    name: "Revenue share.",
    term: "Optional, on top of the fee, never instead of it.",
  },
];

/**
 * COPY.md section 7, "What we do not do" and "Costs we pass through", verbatim.
 * Both are true whichever of the four the client picks, so they close the
 * document rather than repeat inside every panel. Their COPY.md labels are not
 * printed: each line is already a complete statement, and a label over a single
 * sentence adds a word without adding a fact.
 */
const CONDITIONS: readonly string[] = [
  "No unpaid multi-month starts.",
  "Model API and infrastructure costs are billed separately, at cost, and itemised.",
];

/**
 * Variation 3 - engagement, staged as the terms card.
 *
 * The page has shown the film frame, the ledger and the cases. This is the
 * paper that comes with them: one hairline-ruled card in the dark holding the
 * four ways to work as a 2x2 lattice, closed by the term that binds all four.
 *
 * It is the only bordered thing on the variation, and that is the point. No
 * fill, no radius, no shadow, no colour inside it: the panels share their rules
 * the way the cells of a printed rate card do, so four quadrants read as one
 * document instead of as four cards. The only radius on the page stays on the
 * CTA pill, and the only glow with it.
 *
 * Under 768px the lattice becomes one column and the four panels stack in
 * COPY.md's order, with the binding term still last, so the card reads the same
 * way on a phone as it does at 2560.
 *
 * There are no figures here on purpose. The brief carries no price, no range
 * and no currency, so the section answers the money question with the method
 * instead of with a number it would have to invent.
 */
export function V3Engagement() {
  return (
    <section className="v3-eng" id="engagement">
      <div className="v3-shell">
        <p className="v3-eyebrow v3-enter">How a quote works</p>

        <h2 className="v3-eng__headline v3-enter" style={delay(60)}>
          No prices on this page. Here is exactly how we get to one.
        </h2>

        <p className="v3-eng__lead v3-enter" style={delay(120)}>
          Scope sets the number, so we write the scope first and you pay for that step.
        </p>

        <div className="v3-eng__doc">
          {/* Names the list for a screen reader off visible text, and tells a
              scanning reader these are alternatives rather than phases. */}
          <p className="v3-eng__caption v3-enter" id="v3-eng-ways" style={delay(200)}>
            Four ways to work with us
          </p>

          <div className="v3-eng__card v3-enter" style={delay(240)}>
            <ul className="v3-eng__ways" role="list" aria-labelledby="v3-eng-ways">
              {WAYS.map((way) => (
                <li className="v3-eng__way" key={way.name}>
                  <h3 className="v3-eng__name">{way.name}</h3>
                  <p className="v3-eng__term">{way.term}</p>
                </li>
              ))}
            </ul>

            {/* COPY.md: this is a term of all four, so it sets with the list
                above, on the rule that closes it. It holds full ink while the
                four terms sit one step back, which is how the card says it
                binds every panel without a label saying so. */}
            <p className="v3-eng__binding">Minimum commitment up front on every engagement.</p>
          </div>

          <ul className="v3-eng__conditions v3-enter" role="list" style={delay(320)}>
            {CONDITIONS.map((condition) => (
              <li className="v3-eng__condition" key={condition}>
                {condition}
              </li>
            ))}
          </ul>

          <div className="v3-eng__actions v3-enter" style={delay(380)}>
            <ContactCTA className="v3-pill v3-glow">{contactLabel()}</ContactCTA>
            <p className="v3-eng__support">Paid discovery, fixed scope, no forms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
