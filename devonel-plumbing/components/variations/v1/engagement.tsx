import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel } from "@/lib/site";
import { ColumnRules } from "./hero";

/**
 * How a quote works.
 *
 * Buyer question: how much is this, and if you will not print a number, how
 * does a quote work?
 *
 * A trade paper answers that on its rate card page, so this is one. The four
 * ways to work are a ruled tariff: the name of the term on the left, what it
 * buys and when it is paid on the right, a hairline between every line, the
 * page's own column rules showing through as the vertical rules of the table.
 * The minimum sits under the table on the rule that closes it, which is exactly
 * where a rate card prints its minimum and the one place it cannot be read as a
 * contradiction of the conditions beside it. The two conditions and the paid
 * notice run across the foot.
 *
 * There is no price column, by rule: no figure, currency or range appears in
 * this repo. So the tariff carries terms where a printed one carries money, and
 * the headline says so in the first four words rather than making the reader
 * hunt for a number that is not there.
 *
 * Nothing here is numbered. Numbers would say these are steps in a sequence;
 * they are four ways to work, and a client may buy one, two or all of them.
 *
 * Every word is docs/goal/COPY.md section 7, verbatim, with the v1 tone note
 * applied: rules and rate-card lines, the CTA as a classified box. The CTA
 * wording and its support line are the canonical ones repeated at every
 * decision point on every variation, resolved through `lib/site.ts`.
 */
export function V1Engagement() {
  return (
    <section id="engagement" className="v1-engagement">
      <ColumnRules />

      <div className="v1-engagement__inner v1-shell">
        <header className="v1-engagement__head">
          <p className="v1-kicker">How a quote works</p>
          <h2 className="v1-display v1-engagement__title">
            No prices on this page. Here is exactly how we get to one.
          </h2>
          <p className="v1-deck v1-engagement__deck">
            Scope sets the number, so we write the scope first and you pay for that step.
          </p>
        </header>

        <div className="v1-tariff v1-reveal">
          <h3 className="v1-crosshead">Four ways to work with us</h3>

          <dl>
            {WAYS.map((way) => (
              <div key={way.term} className="v1-tariff__row">
                <dt className="v1-tariff__term">{way.term}</dt>
                <dd className="v1-prose v1-tariff__terms">{way.terms}</dd>
              </div>
            ))}
          </dl>

          <p className="v1-tariff__condition">Minimum commitment up front on every engagement.</p>
        </div>

        <div className="v1-grid v1-engagement__foot">
          <div className="v1-engagement__note">
            <h3 className="v1-crosshead">What we do not do</h3>
            <p className="v1-prose">No unpaid multi-month starts.</p>
          </div>

          <div className="v1-engagement__note">
            <h3 className="v1-crosshead">Costs we pass through.</h3>
            <p className="v1-prose">
              Model API and infrastructure costs are billed separately, at cost, and itemised.
            </p>
          </div>

          <ContactCTA className="v1-classified v1-engagement__cta">
            <span className="v1-classified__label v1-underline">{contactLabel()}</span>
            <span className="v1-classified__support">Paid discovery, fixed scope, no forms.</span>
          </ContactCTA>
        </div>

        <div className="v1-folio v1-folio--ruled v1-engagement__folio">
          <span>How a quote works</span>
          <span className="v1-folio__n">7</span>
        </div>
      </div>
    </section>
  );
}

/**
 * The four ways to work, from docs/goal/COPY.md section 7, in the order the
 * copy lists them: the step a client buys first at the top, the optional one
 * last. That order is also the one they stack in on a phone, because the list
 * is a plain document order with no reordering anywhere in the layout.
 */
const WAYS: readonly { term: string; terms: string }[] = [
  {
    term: "Paid discovery",
    terms:
      "A small fixed first scope that produces the plan, the date and the price. Credited against the build.",
  },
  {
    term: "Fixed-scope build",
    terms: "One price for one written scope, paid before the phase starts.",
  },
  {
    term: "Monthly retainer",
    terms: "Running, monitoring, fixes and the next scope after launch.",
  },
  {
    term: "Revenue share",
    terms: "Optional, on top of the fee, never instead of it.",
  },
];
