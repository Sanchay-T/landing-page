/**
 * v1 "Studio Dark" engagement.
 *
 * The direction's seventh block. Its skeleton asks for a four-row table with
 * columns for what you get and when you pay; this ships that table as the ruled
 * list entry 03 already built for services, because the two sections are asking
 * the reader to do the same thing - read a name on the left and a term on the
 * right, four or five times, down one column of rules. One list instrument on
 * the page, used twice, is a smaller thing to learn than a list and a table.
 * There are no cards here, no icons, no numbering and no shadow.
 *
 * A server component. Nothing here is stateful and nothing here animates on
 * load: the sixteen-tick assembly in the hero is this page's one entrance. The
 * one hover is the row lifting its own rule to text colour over 180ms, guarded
 * on a real pointer, exactly as in services.
 *
 * Numbering is deliberately absent. Process directly above this section is the
 * page's only real sequence and it is the only place "1 / 2 / 3 / 4" appears;
 * these four are alternatives, not steps, which is why COPY.md's own "Four ways
 * to work with us" is printed above the list rather than dropped. It is set in
 * the body face as a run-in heading, the same treatment entry 04 gives COPY.md's
 * block names inside the flagship panel, and it is the list's accessible name.
 *
 * Every string is COPY.md section 7, verbatim, with the bracketed source
 * citations stripped. Three calls worth recording:
 *
 * - The two binding rules are not printed here. "Minimum commitment up front on
 *   every engagement." and "No unpaid multi-month starts." already set in the
 *   process section, which is where COPY.md's section 5 puts them, and the
 *   orchestrator ruled that they stay there rather than appearing twice on one
 *   page. This section carries the four ways and the pass-through cost only.
 * - "Costs we pass through." stays, because it is a term of the commercial
 *   section rather than a rule of the process. Process phase 4 carries the
 *   shorter form of the same sentence inside the retainer phase; this is the
 *   full one, with "and itemised", printed where a reader is deciding about
 *   money.
 * - COPY.md's own section label, "How a quote works", is not rendered, and
 *   neither are its CTA alternates. The label would have to sit as an eyebrow
 *   above the heading, which is a named tell in this direction, and the page
 *   has one primary action - the lamp-filled button in the hero - so no second
 *   button appears here.
 */

/** name   the way of working, in the display face on the left
 *  terms  COPY.md's line for it, the right column of the row */
const WAYS = [
  {
    name: "Paid discovery.",
    terms:
      "A small fixed first scope that produces the plan, the date and the price. Credited against the build.",
  },
  {
    name: "Fixed-scope build.",
    terms: "One price for one written scope, paid before the phase starts.",
  },
  {
    name: "Monthly retainer.",
    terms: "Running, monitoring, fixes and the next scope after launch.",
  },
  {
    name: "Revenue share.",
    terms: "Optional, on top of the fee, never instead of it.",
  },
] as const;

export function Engagement() {
  return (
    <section id="engagement" className="v1-engage" aria-labelledby="engage-head">
      <div className="v1-shell">
        <h2 id="engage-head" className="v1-engage__head">
          No prices on this page. Here is exactly how we get to one.
        </h2>
        <p className="v1-engage__sub">
          Scope sets the number, so we write the scope first and you pay for that step.
        </p>

        <p id="engage-ways" className="v1-engage__lead">
          Four ways to work with us
        </p>

        <ul className="v1-engage__list" role="list" aria-labelledby="engage-ways">
          {WAYS.map(({ name, terms }) => (
            <li key={name} className="v1-engage__row">
              <h3 className="v1-engage__name">{name}</h3>
              <p className="v1-engage__terms">{terms}</p>
            </li>
          ))}
        </ul>

        {/* The one term that is not a way of working. It closes the section on
            space rather than on a fifth rule: the list is already shut by its
            own hairline, and one more would start to draw a table. */}
        <div className="v1-engage__foot">
          <p className="v1-engage__foot-lead">Costs we pass through.</p>
          <p className="v1-engage__foot-line">
            Model API and infrastructure costs are billed separately, at cost, and itemised.
          </p>
        </div>
      </div>
    </section>
  );
}
