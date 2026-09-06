import type { CSSProperties } from "react";

/**
 * v2 process: the engagement as a task runner.
 *
 * The buyer question is "what happens after I say yes, what do I pay and when,
 * and what do I get in the meantime". A pipeline answers all three at once: one
 * command, four steps in order, the payment gate in a column of its own, and
 * the detail of each step indented under it the way a runner prints sub-output.
 *
 * `docs/goal/COPY.md` section 5 tunes this direction to "four steps as a state
 * machine, discovery -> build -> launch -> run, with the payment gate printed
 * between each arrow". The gate column is that idea without the arrows: the
 * sequence is already carried by `[ n/4 ]`, so drawing it twice would spend the
 * page's one structural device on repetition. The counters earn their place
 * because the content really is a sequence.
 *
 * Sourcing. Every line traces to COPY.md section 5 under its v2 tone note
 * (numerals, lowercase, terse). The gate column restates the section headline
 * printed three lines above it ("four phases. you pay before each one starts.")
 * per phase, plus phase 4's own "monthly retainer". The minimum-commitment line
 * that used to close this section is not here: COPY.md moved it into section 7
 * on 2026-09-07 as a term of all four ways to work, and the engagement section
 * carries it. The one standing rule that stayed is the last line of the block.
 *
 * Layout is the whole design and it is built around one failure the research
 * file names for this section, "step numbers separating from step text": the
 * counter and the phase name are a single unbreakable token, so no width can
 * pull them apart. The leader shrinks to nothing and the gate drops to its own
 * right-aligned line before anything else gives, which is why the section needs
 * no horizontal scroll at 360.
 *
 * No accent green anywhere. The caret, the rail counter and the CTA hold the
 * whole budget, so this section takes its emphasis from position and weight.
 */

/** Stagger position in the printed sequence, read by the `v2-print` primitive. */
function printStep(i: number): CSSProperties {
  return { "--v2-print-i": i } as CSSProperties;
}

type Detail = {
  text: string;
  /**
   * `out` is what the phase hands you and sets in body ink; `term` is the
   * condition attached to it and sets dim, the same two-tone split the services
   * list uses for an outcome and its scope.
   */
  tone: "out" | "term";
};

type Phase = {
  /** Lowercase, one word, so `[ n/4 ] name` stays short enough to never wrap. */
  name: string;
  /** The payment column. COPY.md section 5: the headline, or phase 4's own line. */
  gate: string;
  detail: readonly Detail[];
};

const phases: readonly Phase[] = [
  {
    name: "discovery",
    gate: "paid before start",
    detail: [
      {
        tone: "out",
        text: "you get a written scope, a build plan, a date and a fixed price for the build.",
      },
      { tone: "term", text: "small and fixed. credited against the build if you continue." },
    ],
  },
  {
    name: "build",
    gate: "paid before start",
    detail: [
      {
        tone: "out",
        text: "each week you get a working link, a written changelog and the open questions in one message.",
      },
      { tone: "term", text: "fixed scope, the one written in discovery." },
    ],
  },
  {
    name: "launch",
    gate: "paid before start",
    detail: [
      {
        tone: "out",
        text: "we deploy. error tracking and product analytics are wired in before customers arrive.",
      },
      {
        tone: "term",
        text: "we stay on the thread through the first days, the way we did on launch morning of the jewellery studio.",
      },
    ],
  },
  {
    name: "run",
    gate: "monthly retainer",
    detail: [
      { tone: "out", text: "monitoring, fixes and the next scope, month by month." },
      {
        tone: "term",
        text: "model api and infrastructure costs are billed separately, at cost.",
      },
    ],
  },
];

/**
 * The meter, drawn twice: a dotted track and a filled run clipped over it. Both
 * runs are longer than the 24 character box so the box width is the only thing
 * that sets the length. The fill is declared complete, so server HTML, no
 * JavaScript, a screenshot and reduced motion all show the plan finished; the
 * animation only walks it there one character at a time.
 */
const TRACK = "........................................";
const FILL = "========================================";

export function Process() {
  return (
    <section id="process" className="v2-section" aria-labelledby="v2-proc-h">
      <div className="v2-rule" data-label="process" aria-hidden="true" />

      <div className="v2-measure">
        <p className="v2-cmd v2-print" style={printStep(0)}>
          <span className="v2-prompt">~/devonel $</span> devonel run --plan
        </p>

        <h2 id="v2-proc-h" className="v2-proc-h v2-print" style={printStep(1)}>
          four phases. you pay before each one starts.
        </h2>

        <p className="v2-proc-sub v2-print" style={printStep(2)}>
          every phase ends in something you can open, not a status update.
        </p>

        {/* Names the right-hand column once, so every gate below reads as the
            money and not as a build status. */}
        <p className="v2-proc-head v2-print" style={printStep(3)}>
          <span>phase</span>
          <span>payment</span>
        </p>

        <ol className="v2-proc-list">
          {phases.map((phase, i) => (
            <li key={phase.name} className="v2-proc-step v2-print" style={printStep(4 + i)}>
              <p className="v2-proc-line">
                <span className="v2-proc-id">{`[ ${i + 1}/${phases.length} ] ${phase.name}`}</span>
                <span className="v2-proc-dots" aria-hidden="true" />
                <span className="v2-proc-gate">{phase.gate}</span>
              </p>

              <ul className="v2-proc-detail">
                {phase.detail.map((line) => (
                  <li key={line.text} className={line.tone === "term" ? "v2-proc-term" : undefined}>
                    {line.text}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <p className="v2-proc-total v2-print" style={printStep(8)}>
          <span className="v2-proc-meter" aria-hidden="true">
            <span className="v2-proc-bar">
              <span className="v2-proc-track">{TRACK}</span>
              <span className="v2-proc-fill">{FILL}</span>
            </span>
          </span>{" "}
          4/4 phases, then handover
        </p>

        <p className="v2-proc-after v2-print" style={printStep(9)}>
          either the retainer continues, or the engagement ends with a handover session and a
          written list of what runs where.
        </p>
        <p className="v2-proc-after v2-print" style={printStep(9)}>
          we do not go quiet on either path.
        </p>

        <p className="v2-proc-note v2-print" style={printStep(10)}>
          no unpaid multi-month starts. we have been offered one and said no.
        </p>
      </div>
    </section>
  );
}
