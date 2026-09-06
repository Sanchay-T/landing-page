import type { CSSProperties } from "react";

/** The entrance primitive, staggered by hand so the schedule reads top to
 *  bottom. Every step starts from a visible 0.6 opacity, never from 0, so a
 *  capture taken mid-flight still shows the whole section. */
const delay = (ms: number) => ({ "--v3-enter-delay": `${ms}ms` }) as CSSProperties;

type V3Phase = {
  /** COPY.md's name for the phase. The rail carries the order, so no numeral. */
  name: string;
  /**
   * The payment term, verbatim from COPY.md, rendered as the cold blue gate on
   * the rail above the phase. It is present only where COPY.md states that
   * money changes hands before the phase, which is three of the four: discovery
   * is paid, the build is paid before it starts, and the run is a monthly
   * retainer. Launch carries no gate because the copy states none, so the rail
   * runs unbroken from the build through the launch and the reader can see that
   * the deploy is inside the build they already paid for.
   */
  gate?: string;
  /** What the phase produces, verbatim from COPY.md, one thought per line. */
  lines: readonly string[];
};

/**
 * COPY.md section 5, "Process", verbatim. Order, wording and punctuation are
 * the copy document's; nothing here is written at the component.
 */
const PHASES: readonly V3Phase[] = [
  {
    name: "Discovery",
    gate: "Paid, small and fixed.",
    lines: [
      "You get a written scope, a build plan, a date and a fixed price for the build.",
      "It is credited against the build if you continue.",
    ],
  },
  {
    name: "Build",
    gate: "Fixed scope, paid before the phase starts.",
    lines: [
      "Each week you get a working link, a written changelog and the open questions in one message.",
    ],
  },
  {
    name: "Launch",
    lines: [
      "We deploy, and error tracking and product analytics are wired in before customers arrive.",
      "We stay on the thread through the first days, the way we did on launch morning of the jewellery studio.",
    ],
  },
  {
    name: "Run",
    gate: "Monthly retainer for monitoring, fixes and the next scope.",
    lines: ["Model API and infrastructure costs are billed separately, at cost."],
  },
];

/** COPY.md section 5, "After handover". The open end of the schedule. */
const HANDOVER: readonly string[] = [
  "Either the retainer continues, or the engagement ends with a handover session and a written list of what runs where.",
  "We do not go quiet on either path.",
];

/**
 * COPY.md section 5, "Two rules that do not move", and the same minimum
 * commitment term set with the engagement list in COPY.md section 7. They hold
 * across every phase, so they close the schedule instead of repeating inside it.
 */
const RULES: readonly string[] = [
  "Minimum commitment up front on every engagement.",
  "No unpaid multi-month starts; we have been offered one and said no.",
];

/**
 * Variation 3 - the process, staged as a night schedule.
 *
 * One amber hairline runs down the left of the content grid with a glowing node
 * at every phase, the way a call sheet marks the hours of a shoot. The bright
 * amber light on that rail is drawn down it by the variation's scroll
 * primitive, over a static amber spine that is complete before any script runs,
 * so a reader who asked for reduced motion, and a browser without scroll
 * timelines, both get the finished rail rather than an unfinished one.
 *
 * The only other lit thing on the page here is the payment gate: a cold blue
 * tick across the rail with the money term beside it, printed where COPY.md
 * says the payment comes first. Three gates, four phases, one open node at the
 * end for what happens after handover.
 *
 * The step is one grid at every width: a rail track holding the marker, then
 * the text in the 45rem measure. The marker sits beside its own line rather
 * than above it, so on a 390px phone the node stays next to the phase name and
 * nothing has to become a horizontal scroller.
 */
export function V3Process() {
  return (
    <section className="v3-sched" id="process">
      <div className="v3-shell">
        <p className="v3-eyebrow v3-enter">How we work</p>

        <h2 className="v3-sched__headline v3-enter" style={delay(60)}>
          Four phases. You pay before each one starts.
        </h2>

        <p className="v3-lead v3-sched__lead v3-enter" style={delay(120)}>
          Every phase ends in something you can open, not a status update.
        </p>

        <div className="v3-sched__rail">
          <span aria-hidden="true" className="v3-sched__spine" />
          <span aria-hidden="true" className="v3-sched__draw v3-scroll" />

          <ol className="v3-sched__list" role="list">
            {PHASES.map((phase, i) => (
              <li className="v3-sched__step v3-enter" key={phase.name} style={delay(180 + i * 90)}>
                {phase.gate ? (
                  <p className="v3-sched__gate">
                    <span aria-hidden="true" className="v3-sched__tick" />
                    <span className="v3-sched__gate-text">{phase.gate}</span>
                  </p>
                ) : null}

                <div className="v3-sched__phase">
                  <span aria-hidden="true" className="v3-sched__node" />
                  <h3 className="v3-sched__name">{phase.name}</h3>
                  <div className="v3-sched__body">
                    {phase.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="v3-sched__step v3-sched__step--end v3-enter" style={delay(540)}>
            <div className="v3-sched__phase">
              <span aria-hidden="true" className="v3-sched__node v3-sched__node--open" />
              <h3 className="v3-sched__name">After handover</h3>
              <div className="v3-sched__body">
                {HANDOVER.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="v3-sched__rules v3-enter" style={delay(600)}>
          <div className="v3-sched__rules-inner">
            <h3 className="v3-sched__rules-title">Two rules that do not move.</h3>
            <ul className="v3-sched__rules-list" role="list">
              {RULES.map((rule) => (
                <li className="v3-sched__rule" key={rule}>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
