import { getSection, ticks } from "./sections";

/**
 * Section 5, day 15, the night the overnight build starts: how we work.
 *
 * The band writes no colour and pins no clock. It is a plain `.v3-band` with
 * `data-stage="first-light"`, which only the two clockless paths read, so on
 * every other path the ground here is whatever the reader's scroll position
 * says it is.
 *
 * THE FOUR PHASES ARE THE TIMELINE'S OWN STRUCTURE. They are not four cards and
 * they are not four numbered steps: they are four stations of the same object
 * the proof band introduces and the services band scales up - a rule, the name
 * sitting on it, and the day of the build at the rule's right end where the
 * brief dates one. Sequence is carried by the stack and by the gates between
 * them, so no folio number is printed; `Phase 1 -` in `docs/goal/COPY.md` is
 * that document's own enumeration of four items, exactly as `1.` enumerates the
 * five services, and the services band drops it for the same reason.
 *
 * THE GATE IS THE ONE NEW OBJECT, and it is not new either: it is the tick
 * bar's day marker, 2px by 18px in `--v3-marker`, standing in the space between
 * two stations. Three of them, one before each phase that is paid for before it
 * starts, and this is the only place on the page the marker appears off the bar
 * (`docs/goal/03-design-research.md` section 4). The first gate carries the
 * caption; the other two are the same mark repeating, which is what a mark
 * taught once is for, so they are `aria-hidden` and the sentence is read once.
 *
 * TWO OF THE FOUR CARRY A DATE, and only where `docs/goal/01-business-brief.md`
 * section 4.1 dates that phase inside the sixteen days:
 *
 *   - Discovery, 12 Aug. "Verified timeline: spec received 08-11; Sanchay 'its
 *     a yes' 08-12" and "Verified commercials: original scope ~10k AED (about
 *     2,722 USD, 08-12)". The scope and its price - what this phase delivers -
 *     are dated 08-12. The spec arriving on 08-11 is the input to discovery,
 *     which is why the hero rather than this station carries that day.
 *   - Launch, 27 Aug. "'we good, its live, works' at 10:09 on 08-27" and "a
 *     retry-fallback and ETA UI were added on launch morning (08-27)", which is
 *     this phase's own second line about staying on the thread.
 *
 * Build and Run end bare. The brief dates no single day as the build: it dates
 * the overnight push 08-26 to 08-27 inside a fortnight the bar already draws as
 * ticks 3 to 14, and compressing that fortnight into one date to make the
 * column even is exactly the move the services band refuses. Run has no dated
 * event inside the sixteen days at all - the handover is 09-07, outside them.
 * Nothing is inferred, rounded or filled in.
 *
 * COPY. Every word is verbatim from COPY.md section 5 with the bracketed source
 * tags removed, with one disclosed substitution: the headline is alternate A,
 * "Paid discovery. Fixed build. Monthly run.", and the primary headline's
 * second sentence, "You pay before each one starts.", is printed once as the
 * gate caption where the gate is drawn. COPY sanctions an alternate under
 * layout pressure in one variation, and the pressure is real here - this
 * direction draws the payment gate as an object between the stations, so the
 * sentence that explains the object belongs at the object rather than eighty
 * lines above it, and printing it in both places would print it twice. The
 * omitted words are "Four phases.", which the four stations state.
 *
 * Server component. No client product imagery appears in this band, by rule.
 */

type Phase = {
  /** The phase name from COPY.md section 5, with its full stop. */
  name: string;
  /** The one-line promise under the name. */
  lede: string;
  /** The sentences under the promise, joined as written. */
  detail: string;
  /** Only where brief 4.1 dates this phase inside the sixteen-day build. */
  date?: string;
  /**
   * The payment gate standing between this phase and the one above it. The
   * first one printed carries the caption; the rest are the same mark again.
   */
  gate?: "captioned" | "bare";
};

/** COPY.md section 5, the headline's second sentence. Printed once. */
const GATE_CAPTION = "You pay before each one starts.";

const phases: readonly Phase[] = [
  {
    name: "Discovery.",
    lede: "Paid, small and fixed.",
    detail:
      "You get a written scope, a build plan, a date and a fixed price for the build. It is credited against the build if you continue.",
    date: "12 Aug",
  },
  {
    name: "Build.",
    lede: "Fixed scope, paid before the phase starts.",
    detail:
      "Each week you get a working link, a written changelog and the open questions in one message.",
    gate: "captioned",
  },
  {
    name: "Launch.",
    lede: "We deploy, and error tracking and product analytics are wired in before customers arrive.",
    detail:
      "We stay on the thread through the first days, the way we did on launch morning of the jewellery studio.",
    date: "27 Aug",
    gate: "bare",
  },
  {
    name: "Run.",
    lede: "Monthly retainer for monitoring, fixes and the next scope.",
    detail: "Model API and infrastructure costs are billed separately, at cost.",
    gate: "bare",
  },
];

/**
 * The two blocks COPY.md section 5 places under the phases. They are the
 * station at its third scale - the same object a block inside a case study is -
 * because each is a named note about the whole sequence rather than a fifth
 * phase, and the band closes flat and wide against the four tall stations.
 */
const closers: readonly { name: string; lines: readonly string[] }[] = [
  {
    name: "After handover.",
    lines: [
      "Either the retainer continues, or the engagement ends with a handover session and a written list of what runs where.",
      "We do not go quiet on either path.",
    ],
  },
  {
    name: "Two rules that do not move.",
    lines: [
      "Minimum commitment up front on every engagement.",
      "No unpaid multi-month starts; we have been offered one and said no.",
    ],
  },
];

/** The gate: the tick bar's marker, off the bar, once with its caption. */
function Gate({ gate }: { gate: Phase["gate"] }) {
  if (!gate) return null;
  if (gate === "bare") {
    return (
      <div className="v3-gate" aria-hidden="true">
        <span className="v3-gate-tick" />
      </div>
    );
  }
  return (
    <p className="v3-gate">
      <span className="v3-gate-tick" aria-hidden="true" />
      {GATE_CAPTION}
    </p>
  );
}

export function Process() {
  const section = getSection("process");
  // The band's own station date is the day of the build it is set on, read off
  // the same sixteen days the bar draws, so the two can never disagree.
  const stationDate = `${ticks[section.tick - 1].date} 2026`;

  return (
    <section
      id="process"
      className="v3-band v3-process"
      data-stage="first-light"
      aria-labelledby="process-h"
    >
      <div className="v3-inner">
        <p className="v3-station">
          <span>{section.label}</span>
          <span className="v3-station-date">{stationDate}</span>
        </p>

        <h2 className="v3-h2" id="process-h">
          Paid discovery. Fixed build. Monthly run.
        </h2>

        <p className="v3-lede">
          Every phase ends in something you can open, not a status update.
        </p>

        <ul className="v3-phases" role="list">
          {phases.map((phase) => (
            <li className="v3-phase" key={phase.name}>
              <Gate gate={phase.gate} />
              <div className="v3-service-rule">
                <h3 className="v3-service-name">{phase.name}</h3>
                {phase.date ? <p className="v3-service-date">{phase.date}</p> : null}
              </div>
              <p className="v3-service-lede">{phase.lede}</p>
              <p className="v3-service-detail">{phase.detail}</p>
            </li>
          ))}
        </ul>

        <div className="v3-closers">
          {closers.map((closer) => (
            <div key={closer.name}>
              <h3 className="v3-case-block-rule">
                <span>{closer.name}</span>
              </h3>
              <ul className="v3-case-text" role="list">
                {closer.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
