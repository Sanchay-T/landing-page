/**
 * v2 "Shader Light" - process, canonical section 5.
 *
 * Direction 2 (docs/goal/03-design-research.md section 4) draws this section as
 * "four numbered phases, the only numbered block on the page because it is the
 * only sequence", in a vocabulary of "plinths, not cards: white blocks with no
 * border and no shadow" and "rules replace borders everywhere else".
 *
 * So the whole section is one ink line and four slabs.
 *
 *   the line     A single 1px line in --v2-ink runs across the top of the row.
 *                It is the payment gate, and it carries its own caption: the
 *                second sentence of the COPY headline, "You pay before each one
 *                starts.", set small in Geist directly above the line it
 *                describes. Above 64rem the line is continuous, so it reads
 *                between the plinths as well as over them; below that each
 *                plinth carries its own segment, which says the same thing at a
 *                width where the row has broken up.
 *   the slabs     Four white blocks hanging off that line. No border, no
 *                shadow, no radius: a slab is raised by the rule above it and
 *                separated from the paper by its own cut edge. Grid stretch
 *                keeps all four the same height, so they share a bottom edge as
 *                well as the line, which is what puts them on one baseline.
 *   the two inks  Ink rules mean money and grey rules mean ordinary separation.
 *                That is the only piece of information this section encodes in
 *                a line rather than a word, and it is why the closing ledger
 *                below the row is ruled in --v2-rule and never in --v2-ink.
 *
 * The headline is split across two levels rather than shortened: the h2 takes
 * "Four phases." at display size and the gate caption takes "You pay before each
 * one starts." on the line it names. Every word of the COPY headline is on the
 * page, in document order, and `aria-labelledby` names both elements so the
 * section's accessible name is still the whole sentence.
 *
 * Numbering is deliberate and is confined to this section: the direction bans
 * "01 / 02 / 03" everywhere "except the process section, which is the only real
 * sequence on this page". It is set as "Phase 1" in small Geist, the document's
 * own wording, not as a decorative numeral. The list is an `ol` for the same
 * reason.
 *
 * No canvas: this page runs exactly one WebGL context and the hero owns it.
 * The section sits on paper with nothing behind it, which is also the only way
 * to keep body copy off a live shader.
 *
 * No motion and nothing hover-gated. The direction spends its one load movement
 * on the field fading in and its one hover on the clocks, so touch, keyboard
 * and mouse read exactly the same section here.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 5 and nothing on this
 * section comes from anywhere else: the label, the headline, the subhead, the
 * four phase names with their lines, and the two closing blocks. Trailing full
 * stops and the semicolon in the last line are the document's, kept as written.
 * Section 5 carries no timing sentence and no working-hours note for the two
 * cities, so neither is written here; the nav carries the live clocks.
 */

type Phase = {
  /** Stable key; never rendered. */
  id: string;
  /** COPY.md writes "Phase 1 - Discovery."; the marker and the name are its two halves. */
  marker: string;
  name: string;
  /** The phase's own terms first, then what the phase hands you, in document order. */
  lines: readonly string[];
};

/** COPY.md section 5, the four phases, in document order. */
const PHASES: readonly Phase[] = [
  {
    id: "discovery",
    marker: "Phase 1",
    name: "Discovery.",
    lines: [
      "Paid, small and fixed.",
      "You get a written scope, a build plan, a date and a fixed price for the build.",
      "It is credited against the build if you continue.",
    ],
  },
  {
    id: "build",
    marker: "Phase 2",
    name: "Build.",
    lines: [
      "Fixed scope, paid before the phase starts.",
      "Each week you get a working link, a written changelog and the open questions in one message.",
    ],
  },
  {
    id: "launch",
    marker: "Phase 3",
    name: "Launch.",
    lines: [
      "We deploy, and error tracking and product analytics are wired in before customers arrive.",
      "We stay on the thread through the first days, the way we did on launch morning of the jewellery studio.",
    ],
  },
  {
    id: "run",
    marker: "Phase 4",
    name: "Run.",
    lines: [
      "Monthly retainer for monitoring, fixes and the next scope.",
      "Model API and infrastructure costs are billed separately, at cost.",
    ],
  },
];

/** COPY.md section 5, the two blocks that close the section, in document order. */
const CODA: readonly { id: string; title: string; lines: readonly string[] }[] = [
  {
    id: "handover",
    title: "After handover.",
    lines: [
      "Either the retainer continues, or the engagement ends with a handover session and a written list of what runs where.",
      "We do not go quiet on either path.",
    ],
  },
  {
    id: "rules",
    title: "Two rules that do not move.",
    lines: [
      "Minimum commitment up front on every engagement.",
      "No unpaid multi-month starts; we have been offered one and said no.",
    ],
  },
];

export function Process() {
  return (
    <section id="process" className="v2-process" aria-labelledby="process-headline process-gate">
      <header className="v2-process__head">
        <div className="v2-process__title">
          <p className="v2-process__label">How we work</p>
          <h2 className="v2-process__headline" id="process-headline">
            Four phases.
          </h2>
        </div>
        <p className="v2-process__sub">
          Every phase ends in something you can open, not a status update.
        </p>
      </header>

      <p className="v2-process__gate" id="process-gate">
        You pay before each one starts.
      </p>

      <ol className="v2-process__row">
        {PHASES.map((phase) => (
          <li className="v2-phase" key={phase.id}>
            <p className="v2-phase__marker">{phase.marker}</p>
            <h3 className="v2-phase__name">{phase.name}</h3>
            <ul className="v2-phase__lines">
              {phase.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="v2-process__coda">
        {CODA.map((entry) => (
          <div className="v2-coda" key={entry.id}>
            <h3 className="v2-coda__title">{entry.title}</h3>
            <div className="v2-coda__lines">
              {entry.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
