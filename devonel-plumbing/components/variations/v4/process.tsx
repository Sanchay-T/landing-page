/**
 * v4 process.
 *
 * `docs/goal/03-design-research.md` section 4, direction 4, layout skeleton
 * item 5: "a second, shorter band of four cells with the payment gate as a chip
 * inside each". So this is the same board, four cells wide and one row deep,
 * under the same sticky header the proof and services band uses. No new
 * container type, no card inside a cell, no icon, no shadow.
 *
 * The gate chip sits at the TOP of every cell rather than at the bottom,
 * because a gate comes before the thing it gates. Across a row of four that
 * puts the four payments on one line, so the section's own headline - "You pay
 * before each one starts" - is legible as a shape before it is read as a
 * sentence. The chips are set in Geist Mono: money is a figure, and every
 * figure on this board is mono.
 *
 * Numerals are the one ornament this direction allows, and only here. The
 * research doc bans the generic "01 / 02 / 03" marker except where the content
 * really is a sequence; four phases paid in order is a real sequence, so the
 * numeral is information rather than decoration.
 *
 * Every visible string is verbatim from `docs/goal/COPY.md` section 5, either
 * as a whole sentence or as an exact phrase lifted from one, with a single
 * exception recorded here: the numerals 01 to 04, which are the sequence set as
 * digits because this direction sets every figure in Geist Mono. The comma
 * series COPY.md writes for each phase's deliverables is rendered as a list,
 * which is the shape that series already has. Nothing is added: no day counts,
 * no durations, and no prices. The two binding terms COPY.md prints at the end
 * of section 5 are engagement terms and belong to section 7, so they are not
 * printed twice on the page.
 */

type Phase = {
  /** The sequence. Mono, tabular, and the only authored characters here. */
  numeral: string;
  name: string;
  /** The payment gate, verbatim from COPY.md section 5. */
  gate: string;
  /** The phase in one or two sentences. */
  copy: string[];
  /** The lead-in COPY.md already gives the deliverables, used as the label. */
  handsLabel: string;
  /** What the phase hands over. COPY.md's own comma series, set as a list. */
  hands: string[];
};

const PHASES: readonly Phase[] = [
  {
    numeral: "01",
    name: "Discovery",
    gate: "Paid, small and fixed",
    copy: ["It is credited against the build if you continue."],
    handsLabel: "You get",
    hands: ["A written scope", "A build plan", "A date", "A fixed price for the build"],
  },
  {
    numeral: "02",
    name: "Build",
    gate: "Paid before the phase starts",
    copy: ["Fixed scope."],
    handsLabel: "Each week you get",
    hands: ["A working link", "A written changelog", "The open questions in one message"],
  },
  {
    numeral: "03",
    name: "Launch",
    gate: "Paid before the phase starts",
    copy: [
      "We deploy.",
      "We stay on the thread through the first days, the way we did on launch morning of the jewellery studio.",
    ],
    handsLabel: "Wired in before customers arrive",
    hands: ["Error tracking", "Product analytics"],
  },
  {
    numeral: "04",
    name: "Run",
    gate: "Monthly retainer",
    copy: ["Model API and infrastructure costs are billed separately, at cost."],
    handsLabel: "You get",
    hands: ["Monitoring", "Fixes", "The next scope"],
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="v4-container v4-band v4-band--process"
      aria-labelledby="v4-process-head"
    >
      <header className="v4-sticky-head v4-band-head">
        <h2 id="v4-process-head" className="v4-band-label">
          How we work
        </h2>
        <p className="v4-band-line">Four phases. You pay before each one starts.</p>
        <p className="v4-band-sub">
          Every phase ends in something you can open, not a status update.
        </p>
      </header>

      <div className="v4-board v4-board--process">
        {PHASES.map((phase) => (
          <article key={phase.numeral} className="v4-cell v4-cell--phase">
            <p className="v4-chip v4-chip--gate">{phase.gate}</p>

            <div className="v4-phase-id">
              <p className="v4-phase-num">{phase.numeral}</p>
              <h3 className="v4-phase-name">{phase.name}</h3>
            </div>

            {phase.copy.map((line) => (
              <p key={line} className="v4-phase-copy">
                {line}
              </p>
            ))}

            <div className="v4-phase-hands">
              <p className="v4-phase-hands-label">{phase.handsLabel}</p>
              <ul className="v4-cell-list">
                {phase.hands.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* Section 3 of the research doc requires the last step to say what
          happens after handover, and COPY.md section 5 writes it as prose that
          holds for the whole sequence rather than as a fifth phase. So it is a
          line under the band, not a cell in it. */}
      <div className="v4-after">
        <p className="v4-after-label">After handover</p>
        <div className="v4-after-lines">
          <p>
            Either the retainer continues, or the engagement ends with a handover session and a
            written list of what runs where.
          </p>
          <p>We do not go quiet on either path.</p>
        </div>
      </div>
    </section>
  );
}
