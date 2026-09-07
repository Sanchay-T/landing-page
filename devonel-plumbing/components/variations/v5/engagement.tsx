/**
 * Engagement: a steel band carrying the four shapes an engagement can take,
 * one per row, with the terms of each in Geist beside the name.
 *
 * The direction's own words for this section are "four terms, one per line,
 * enormous margins" (03-design-research.md section 4, layout skeleton 7), set
 * on a steel band with the names in Archivo Expanded and the terms in Geist.
 * So the section is a rate card without a rate: four names, four sentences, one
 * hairline between each pair of rows, and nothing else. No table, no columns of
 * ticks, no tiles, no icons, no cards, no shadow, no accent hue.
 *
 * STEEL, BECAUSE THE MONEY SECTION IS THE ONE THE READER STOPS ON. The two
 * sections above it sit on the void, so this band changes the ground under the
 * whole width the way the proof strip does. The value step from #06080D to
 * #151B26 is the only edge; a rule around it would make it a card, which
 * 03b-round2-brief.md bans.
 *
 * NO PRICE, AND THE HEADLINE SAYS SO. COPY.md section 7 publishes no number and
 * this page invents none. The headline states the absence and the four rows are
 * the answer to it, which is the section's whole job: a reader who came for a
 * price leaves knowing what the first invoice is for.
 *
 * NO CTA. COPY.md offers two for this section and the page carries neither. The
 * hero's pill is the only button on the site, and a second one here would put
 * the reader back at the top of the funnel in the middle of the terms. The
 * final CTA section is where the ask belongs.
 *
 * THE TWO RULES ARE NOT HERE. COPY.md section 7 also carries "Minimum
 * commitment up front on every engagement" and "No unpaid multi-month starts".
 * Both are printed once on this page, in `process.tsx`, where COPY.md section 5
 * sets them as "Two rules that do not move". Repeating them here would say the
 * same two sentences twice within one scroll, and a rule that is stated twice
 * reads as a rule the studio is nervous about. The four shapes below are what
 * this section adds.
 *
 * COSTS ARE PASSED THROUGH, AND THAT IS A TERM OF ALL FOUR. It closes the
 * section under the rows with no rule and no ground, in the same shape
 * `process.tsx` gives its closing notes, because it applies to every row above
 * it rather than to any one of them.
 *
 * SIZE. The names are the smaller poster type on this page - 24px where the row
 * is stacked, 32px where the name has its own column - because they are terms
 * rather than the argument. The founders' names one section above run to 64px,
 * and the difference is the point: you are meant to remember the people and
 * read the terms.
 *
 * NO ENTRANCE. The variation spends its one moment on the orb's environment map
 * building on load. Nothing here moves, hovers, reveals or hides at any width,
 * so this section is byte-identical under `prefers-reduced-motion`.
 */

type Way = {
  /** The name of the shape, set in Archivo. */
  name: string;
  /** The sourced terms for it. */
  description: string;
};

/** COPY.md section 7, "Four ways to work with us", verbatim and in order. */
const WAYS: readonly Way[] = [
  {
    name: "Paid discovery.",
    description:
      "A small fixed first scope that produces the plan, the date and the price. Credited against the build.",
  },
  {
    name: "Fixed-scope build.",
    description:
      "One price for one written scope, paid before the phase starts.",
  },
  {
    name: "Monthly retainer.",
    description: "Running, monitoring, fixes and the next scope after launch.",
  },
  {
    name: "Revenue share.",
    description: "Optional, on top of the fee, never instead of it.",
  },
];

/** COPY.md section 7, "Costs we pass through", verbatim. */
const PASS_THROUGH = {
  label: "Costs we pass through.",
  line: "Model API and infrastructure costs are billed separately, at cost, and itemised.",
} as const;

export function Engagement() {
  return (
    <section
      className="v5-engagement"
      id="engagement"
      aria-labelledby="engagement-title"
    >
      <div className="v5-band v5-engagement__inner">
        <div className="v5-engagement__head">
          <h2 className="v5-display v5-engagement__title" id="engagement-title">
            No prices on this page. Here is exactly how we get to one.
          </h2>
          <p className="v5-engagement__subhead">
            Scope sets the number, so we write the scope first and you pay for
            that step.
          </p>
        </div>

        <div className="v5-engagement__ways">
          <h3 className="v5-engagement__lead">Four ways to work with us</h3>

          <ul className="v5-engagement__list">
            {WAYS.map((way) => (
              <li className="v5-grid v5-engagement__row" key={way.name}>
                <h4 className="v5-display v5-engagement__name">{way.name}</h4>
                <p className="v5-engagement__terms">{way.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="v5-engagement__note">
          <h3 className="v5-engagement__note-label">{PASS_THROUGH.label}</h3>
          <p className="v5-engagement__note-line">{PASS_THROUGH.line}</p>
        </div>
      </div>
    </section>
  );
}
