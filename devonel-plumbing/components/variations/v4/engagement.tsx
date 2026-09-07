/**
 * v4 engagement.
 *
 * `docs/goal/03-design-research.md` section 4, direction 4, layout skeleton
 * item 7 asks for the money section to read as a document rather than as a
 * decorated grid. On this board a document is made of cells, so the shape does
 * the reading: the four ways to work are four equal cells, and each rule that
 * binds all four is a full-width single line under them.
 *
 * THE TWIST, APPLIED HERE. Cell size is honesty, and here honesty is scope of
 * application. A term that holds for all four engagement shapes is wider than
 * any one of them, so each binding rule runs the full twelve columns on one
 * line, and the four shapes - all four equally on offer today, none of them
 * unbuilt - take three columns each. Nothing in COPY.md section 7 is marked as
 * not yet offered, so no cell here carries the hatch: hatching an option
 * Devonel does sell would be the same lie in the other direction.
 *
 * ORDER AND LABELS ARE COPY.md's, NOT THE BUILD'S. Section 7 runs the four
 * shapes first, then sets "Minimum commitment up front on every engagement."
 * after them - its editorial note says the line "sets with the list above, on
 * the rule that closes it" - and only then prints its own label "What we do not
 * do" over "No unpaid multi-month starts." So the minimum-commitment cell is
 * the last child of the "Four ways" region, one 8px board gap under the shapes
 * it binds, and the refusal is its own labelled region. The earlier build
 * hoisted both lines above the list under section 5's heading "Two rules that
 * do not move"; that heading is gone with it, so every label in this band is
 * now section 7's own.
 *
 * No cobalt: the budget is spent on the nav button, the hero button and the
 * live cell's rule. No jade: nothing in this section is a live fact. No icons,
 * no shadows, no CTA - the final CTA is its own section.
 *
 * Every visible string is verbatim from `docs/goal/COPY.md` section 7.
 */

type Shape = {
  /** COPY.md section 7 sets each option as a bold lead-in with its period. */
  name: string;
  /** The rest of the entry, one sentence per line. */
  lines: string[];
};

/** COPY.md section 7, "Four ways to work with us", in COPY.md's own order. */
const SHAPES: readonly Shape[] = [
  {
    name: "Paid discovery.",
    lines: [
      "A small fixed first scope that produces the plan, the date and the price.",
      "Credited against the build.",
    ],
  },
  {
    name: "Fixed-scope build.",
    lines: ["One price for one written scope, paid before the phase starts."],
  },
  {
    name: "Monthly retainer.",
    lines: ["Running, monitoring, fixes and the next scope after launch."],
  },
  {
    name: "Revenue share.",
    lines: ["Optional, on top of the fee, never instead of it."],
  },
];

/**
 * COPY.md section 7's two binding rules, printed here and nowhere else on the
 * page. They are separate constants rather than one list because section 7
 * gives them different jobs: the first sets with the four shapes above it, the
 * second is what the label "What we do not do" refuses.
 */
const MINIMUM = "Minimum commitment up front on every engagement.";
const REFUSAL = "No unpaid multi-month starts.";

export function Engagement() {
  return (
    <section
      id="engagement"
      className="v4-container v4-band v4-band--engagement"
      aria-labelledby="v4-engagement-head"
    >
      <header className="v4-sticky-head v4-band-head">
        <h2 id="v4-engagement-head" className="v4-band-label">
          How a quote works
        </h2>
        <p className="v4-band-line">No prices on this page. Here is exactly how we get to one.</p>
        <p className="v4-band-sub">
          Scope sets the number, so we write the scope first and you pay for that step.
        </p>
      </header>

      <div className="v4-band-region">
        <div className="v4-band-head">
          <h3 className="v4-band-label">Four ways to work with us</h3>
        </div>

        <div className="v4-board v4-board--shapes">
          {SHAPES.map((shape) => (
            <article key={shape.name} className="v4-cell v4-cell--shape">
              <h4 className="v4-cell-title">{shape.name}</h4>
              {shape.lines.map((line) => (
                <p key={line} className="v4-cell-line">
                  {line}
                </p>
              ))}
            </article>
          ))}
        </div>

        {/* COPY.md section 7: this line carries no label of its own because it
            "sets with the list above, on the rule that closes it". So it is the
            last child of this region, on the region's own 8px board gap, and
            full width because it binds all four shapes. */}
        <div className="v4-board v4-board--rules">
          <p className="v4-cell v4-cell--rule">
            <span>{MINIMUM}</span>
          </p>
        </div>
      </div>

      <div className="v4-band-region">
        <div className="v4-band-head">
          <h3 className="v4-band-label">What we do not do</h3>
        </div>

        <div className="v4-board v4-board--rules">
          <p className="v4-cell v4-cell--rule">
            <span>{REFUSAL}</span>
          </p>
        </div>
      </div>

      {/* COPY.md section 7, "Costs we pass through". It is a term of all four
          shapes rather than a fifth shape, so it is set as a line under the
          band in the same language the process band uses for "After handover",
          not as a cell competing with the four. */}
      <div className="v4-after">
        <p className="v4-after-label">Costs we pass through</p>
        <div className="v4-after-lines">
          <p>
            Model API and infrastructure costs are billed separately, at cost, and itemised.
          </p>
        </div>
      </div>
    </section>
  );
}
