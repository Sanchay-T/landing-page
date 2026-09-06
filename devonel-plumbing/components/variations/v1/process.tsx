import { ColumnRules } from "./hero";

/**
 * How we work: the four phases, the payment gate before each one, and what
 * happens after handover.
 *
 * Every word is verbatim from docs/goal/COPY.md section 5, with the v1 tone
 * note applied: four numbered heads, a running rule over each one, and the
 * phase number set as a folio numeral. COPY.md sources no durations for this
 * section, so the page prints none; the only dates on this variation are the
 * two real ones in the hero.
 *
 * The figure is the section. A vertical line runs down the left of the four
 * phases, crossed by a bar before each one, and ends in a fork where the
 * engagement either continues on the retainer or is handed over. The bar is
 * the payment gate, which is the one claim the headline makes, so the diagram
 * carries the argument rather than decorating it. It is drawn with the
 * `.v1-draw` primitive from tokens.css: a static pencil underlay in rule
 * colour with the inked line drawn over it on scroll, so an undrawn figure
 * reads as pencil and never as missing, and a reader who asked for reduced
 * motion gets the finished ink with nothing moved.
 *
 * The rail runs edge to edge of each row, so the line is continuous across the
 * hairline between phases: one figure, not five.
 */

/**
 * One drawn segment of the line.
 *
 * Two paths of identical geometry, the pencil under the ink, per the contract
 * in tokens.css section 7.
 *
 * Every segment is authored at 48 user units wide and rendered at exactly
 * 3rem, so the horizontal scale is 1 and a stroke width is the number written
 * here. Only the stem scales, and only in y, which a vertical line does not
 * notice. That is what lets the dash stay honest: `pathLength` normalises each
 * path to 100 units so the single 100 unit dash in tokens.css covers it end to
 * end, and it only does that if the dash is measured in the same space the
 * path is. A stretched box with `vector-effect="non-scaling-stroke"` measures
 * it in the other one, which repeats the dash and prints the line as ticks.
 */
function Segment({ className, viewBox, d }: { className: string; viewBox: string; d: string }) {
  return (
    <svg
      className={`v1-draw ${className}`}
      viewBox={viewBox}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path className="v1-draw__under" d={d} strokeWidth={1} />
      <path className="v1-draw__ink" d={d} pathLength={100} strokeWidth={1.5} />
    </svg>
  );
}

/** The payment gate: the line arrives, a bar crosses it, the line continues. */
function Gate() {
  return <Segment className="v1-phase__gate" viewBox="0 0 48 32" d="M24 0 V32 M2 14 H46" />;
}

/** The line between one mark and the next. Stretches to fill its row. */
function Stem() {
  return <Segment className="v1-phase__stem" viewBox="0 0 48 24" d="M24 0 V24" />;
}

/** COPY.md section 5. Order is the order the buyer meets them in. */
const PHASES = [
  {
    name: "Discovery",
    body: "Paid, small and fixed. You get a written scope, a build plan, a date and a fixed price for the build. It is credited against the build if you continue.",
  },
  {
    name: "Build",
    body: "Fixed scope, paid before the phase starts. Each week you get a working link, a written changelog and the open questions in one message.",
  },
  {
    name: "Launch",
    body: "We deploy, and error tracking and product analytics are wired in before customers arrive. We stay on the thread through the first days, the way we did on launch morning of the jewellery studio.",
  },
  {
    name: "Run",
    body: "Monthly retainer for monitoring, fixes and the next scope. Model API and infrastructure costs are billed separately, at cost.",
  },
] as const;

/** COPY.md section 5, "Two rules that do not move". */
const STANDING_RULES = [
  "Minimum commitment up front on every engagement.",
  "No unpaid multi-month starts; we have been offered one and said no.",
] as const;

export function V1Process() {
  return (
    <section id="process" className="v1-process">
      <ColumnRules />

      <div className="v1-process__inner v1-shell">
        <div className="v1-grid">
          <div className="v1-process__story">
            <p className="v1-kicker">How we work</p>

            <h2 className="v1-storyhead v1-process__title">
              Four phases. You pay before each one starts.
            </h2>

            <p className="v1-deck v1-process__deck">
              Every phase ends in something you can open, not a status update.
            </p>
          </div>

          {/* The key a paper prints beside a figure, so the bar across the line
              is read as a payment gate and not as another rule. */}
          <aside className="v1-process__key v1-reveal">
            <h3 className="v1-crosshead">Reading the figure</h3>
            <p className="v1-caption v1-process__keytext">
              The line is the engagement, read top to bottom. Each bar across it is a payment
              gate, and the phase below it starts after it. The line forks where the work can
              end.
            </p>
          </aside>
        </div>

        <ol className="v1-phases">
          {PHASES.map((phase, i) => (
            <li className="v1-phase" key={phase.name}>
              <div className="v1-phase__mark">
                <Gate />
                <Stem />
              </div>

              {/* Numeral and name are one element, so no width can separate a
                  step number from the step it belongs to. */}
              <h3 className="v1-phase__head">
                <span className="v1-phase__n">{i + 1}</span>{" "}
                {phase.name}
              </h3>

              <p className="v1-prose v1-phase__text">{phase.body}</p>
            </li>
          ))}
        </ol>

        {/* Not a fifth phase, so it carries no numeral and sits outside the
            list: it is where the line ends. The fork is the two ways it can. */}
        <div className="v1-phase v1-phase--end">
          <div className="v1-phase__mark">
            <Stem />
            <Segment className="v1-phase__fork" viewBox="0 0 48 48" d="M24 0 V14 L8 28 V44 M24 14 L40 28 V44" />
          </div>

          <h3 className="v1-phase__head">After handover</h3>

          <p className="v1-prose v1-phase__text">
            Either the retainer continues, or the engagement ends with a handover session and a
            written list of what runs where. We do not go quiet on either path.
          </p>
        </div>

        {/* The band that closes the table: the terms that govern all four
            phases, set on the heavy rule a paper puts under a schedule. */}
        <div className="v1-process__standing">
          <h3 className="v1-crosshead v1-process__standinghead">Two rules that do not move</h3>
          <ul className="v1-grid v1-process__rules">
            {STANDING_RULES.map((rule) => (
              <li className="v1-prose v1-process__rule" key={rule}>
                {rule}
              </li>
            ))}
          </ul>
        </div>

        <div className="v1-folio v1-folio--ruled v1-process__folio">
          <span>How we work</span>
          <span className="v1-folio__n">5</span>
        </div>
      </div>
    </section>
  );
}
