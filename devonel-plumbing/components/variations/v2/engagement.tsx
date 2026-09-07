/**
 * v2 "Shader Light" - engagement, canonical section 7.
 *
 * Direction 2 (docs/goal/03-design-research.md section 4) draws this section as
 * "four terms as a definition list", so it is a `dl` and nothing else: four
 * rows on --v2-rule hairlines, term left, definition right, no plinth, no
 * chip, no table, no icon, no number.
 *
 *   the rules    --v2-rule everywhere and --v2-ink nowhere. Process set the
 *                page's one piece of line-encoded information - an ink rule is
 *                the payment gate and means money, a hairline is ordinary
 *                separation - and this section names four commercial shapes
 *                without collecting anything, so nothing here is drawn in ink.
 *   the rhythm   Services is also a ruled ledger, so this one is deliberately
 *                the tighter of the two: term names at 24-28px against services'
 *                28-40px, one sentence per row against a promise plus a scope
 *                list, and rows padded a step closer. Read together they are a
 *                long ledger and a short one, not the same block twice.
 *   no CTA       The page's one primary action lives in the hero and the final
 *                CTA is canonical section 9. A button here would put three
 *                asks on one scroll.
 *
 * The headline is split across two levels rather than shortened, the same way
 * process splits its own: the h2 takes "No prices on this page." at display
 * size and the second sentence, "Here is exactly how we get to one.", opens the
 * answer column at lead size directly beside it. Every word of the COPY
 * headline is on the page in document order, and `aria-labelledby` names both
 * elements so the section's accessible name is still the whole sentence.
 *
 * No canvas, no motion, nothing hover-gated - the same as services, work and
 * process. The hero owns the page's one WebGL context and no body copy sits on
 * a live shader.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 7, citations stripped, and
 * nothing here comes from anywhere else. Two of section 7's lines are NOT
 * rendered here, and the reason is duplication rather than editing:
 *
 *   - "Minimum commitment up front on every engagement." and "No unpaid
 *     multi-month starts." are already on the page. process.tsx renders both,
 *     verbatim, under COPY.md section 5's own heading "Two rules that do not
 *     move.", and the second in its fuller section 5 form ("...; we have been
 *     offered one and said no."). Printing them again two sections later would
 *     read as a repeat, so they stay where process put them. Section 7's
 *     editorial note asks for the minimum-commitment line to close the list of
 *     four; that is a real conflict between section 5 and section 7 and it is
 *     reported to the orchestrator rather than resolved by printing the
 *     sentence twice.
 *   - "Costs we pass through." IS rendered, because section 7 carries the
 *     fuller sentence of the two: it adds "and itemised", and it makes the
 *     pass-through a standing term of all four shapes rather than, as in phase
 *     4, a line about the retainer.
 *
 * The round-1 "Per-variation tone" block in COPY.md section 7 is SUPERSEDED and
 * was ignored.
 */

type Term = {
  /** Stable key; never rendered. */
  id: string;
  name: string;
  definition: string;
};

/** COPY.md section 7, "Four ways to work with us", in document order. */
const TERMS: readonly Term[] = [
  {
    id: "discovery",
    name: "Paid discovery.",
    definition:
      "A small fixed first scope that produces the plan, the date and the price. Credited against the build.",
  },
  {
    id: "fixed-scope",
    name: "Fixed-scope build.",
    definition: "One price for one written scope, paid before the phase starts.",
  },
  {
    id: "retainer",
    name: "Monthly retainer.",
    definition: "Running, monitoring, fixes and the next scope after launch.",
  },
  {
    id: "revenue-share",
    name: "Revenue share.",
    definition: "Optional, on top of the fee, never instead of it.",
  },
];

export function Engagement() {
  return (
    <section
      id="engagement"
      className="v2-engagement"
      aria-labelledby="engagement-headline engagement-rest"
    >
      <header className="v2-engagement__head">
        <div className="v2-engagement__title">
          <p className="v2-engagement__label">How a quote works</p>
          <h2 className="v2-engagement__headline" id="engagement-headline">
            No prices on this page.
          </h2>
        </div>
        <div className="v2-engagement__answer">
          <p className="v2-engagement__rest" id="engagement-rest">
            Here is exactly how we get to one.
          </p>
          <p className="v2-engagement__sub">
            Scope sets the number, so we write the scope first and you pay for that step.
          </p>
        </div>
      </header>

      <p className="v2-engagement__lead" id="engagement-ways">
        Four ways to work with us
      </p>

      <dl className="v2-terms" aria-labelledby="engagement-ways">
        {TERMS.map((term) => (
          <div className="v2-term" key={term.id}>
            <dt className="v2-term__name">{term.name}</dt>
            <dd className="v2-term__body">{term.definition}</dd>
          </div>
        ))}
      </dl>

      <div className="v2-engagement__note">
        <p>Costs we pass through.</p>
        <p>Model API and infrastructure costs are billed separately, at cost, and itemised.</p>
      </div>
    </section>
  );
}
