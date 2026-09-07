/**
 * v4 engagement.
 *
 * `docs/goal/03-design-research.md` section 4, direction 4, layout skeleton
 * item 7 asks for the money section to read as a document rather than as a
 * decorated grid. On this board a document is made of cells, so the shape does
 * the reading: the two rules that bind every engagement are full-width single
 * lines, and the four ways to work are four equal cells beneath them.
 *
 * THE TWIST, APPLIED HERE. Cell size is honesty, and here honesty is scope of
 * application. A term that holds for all four engagement shapes is wider than
 * any one of them, so the two binding rules run the full twelve columns on one
 * line each, and the four shapes - all four equally on offer today, none of
 * them unbuilt - take three columns each. Nothing in COPY.md section 7 is
 * marked as not yet offered, so no cell here carries the hatch: hatching an
 * option Devonel does sell would be the same lie in the other direction.
 *
 * The rules come first because they are the frame, not the footnote. Reading
 * the immovable terms before the menu is the honest order for a section whose
 * headline is "No prices on this page."
 *
 * No cobalt: the budget is spent on the nav button, the hero button and the
 * live cell's rule. No jade: nothing in this section is a live fact. No icons,
 * no shadows, no CTA - the final CTA is its own section.
 *
 * Every visible string is verbatim from `docs/goal/COPY.md`, section 7 with one
 * recorded exception: the sub-head "Two rules that do not move" is COPY.md
 * section 5's own heading for exactly these two lines, handed to section 7 by
 * the process band because they are engagement terms and must be printed once.
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

/** COPY.md section 5, "Two rules that do not move", printed here and nowhere else. */
const RULES: readonly string[] = [
  "Minimum commitment up front on every engagement.",
  "No unpaid multi-month starts.",
];

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
          <h3 className="v4-band-label">Two rules that do not move</h3>
        </div>

        <div className="v4-board v4-board--rules">
          {RULES.map((rule) => (
            <p key={rule} className="v4-cell v4-cell--rule">
              <span>{rule}</span>
            </p>
          ))}
        </div>
      </div>

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
