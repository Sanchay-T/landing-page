/**
 * v1 "Studio Dark" process.
 *
 * The direction's fifth block, and the one place on this page where the hero's
 * device is allowed to return: the four phases are stations on a single 1px
 * line, read as a gauge, and the three payment gates are 6px lamp dots sitting
 * on that line between them. The hero counts sixteen days on a hairline with a
 * lamp needle; this section counts four phases on a hairline with lamp dots.
 * It is the same instrument, printed once at the moment the reader is deciding
 * about money, which is why it is the only lamp on the page outside the hero
 * and the shared focus ring.
 *
 * A server component. Nothing here is stateful, nothing is hidden behind hover
 * and nothing moves on load: the sixteen-tick assembly in the hero is this
 * page's one entrance.
 *
 * Numbering is deliberate here and nowhere else. "01 / 02 / 03" is a named
 * generic tell in this direction except in the process section, which is the
 * only real sequence on the page, so the phase index is printed - as a figure
 * in Geist Mono with tabular numerals, the same face and the same tabular
 * setting as the hero gauge and the proof figures. It is a station number on a
 * gauge, not an eyebrow: there is no label above any heading in this section.
 *
 * No day counts appear anywhere in this block. COPY.md section 5 carries none,
 * and the hero's sixteen days are the build of one product, not the length of
 * a phase, so inventing a range per phase would be inventing a fact.
 *
 * Every string is COPY.md section 5, verbatim, with the bracketed source
 * citations stripped. Two calls worth recording:
 *
 * - The heading is COPY.md's headline alternate B, "You always know what the
 *   next payment buys.", used in this variation only. The primary headline is
 *   "Four phases. You pay before each one starts.", and its second sentence is
 *   the only wording in the section that explains the lamp dots, so it is
 *   printed on the gauge as the key. Setting it twice, once as the heading and
 *   once forty pixels below on the device it describes, is the repetition the
 *   alternate exists to relieve. The first sentence is not lost: the gauge
 *   prints four stations and numbers them.
 * - COPY.md's own section label, "How we work", is not rendered. It would have
 *   to sit as an eyebrow above the heading, and a mono or caps eyebrow is a
 *   named tell in this direction - the same call the proof band made with
 *   "Proof of work" and services made with "What you buy".
 *
 * COPY.md's "Two rules that do not move" block is set here because COPY.md
 * places it in section 5. Both of its lines appear again in section 7, so the
 * engagement builder and the orchestrator should decide which surface keeps
 * them rather than printing the same two rules twice on one page.
 */

/** index  the station number, the section's only figure, mono and tabular
 *  name   the phase, in the display face
 *  lead   COPY.md's first line for the phase, the "what you get" lead
 *  rest   the remaining sentences of the phase, joined into one muted line
 *  gate   a payment gate closes this phase, so a lamp dot sits on the line
 *         between it and the next one. Three gates, four phases: you pay
 *         before each one starts. */
const PHASES = [
  {
    index: "1",
    name: "Discovery",
    lead: "Paid, small and fixed.",
    rest: "You get a written scope, a build plan, a date and a fixed price for the build. It is credited against the build if you continue.",
    gate: true,
  },
  {
    index: "2",
    name: "Build",
    lead: "Fixed scope, paid before the phase starts.",
    rest: "Each week you get a working link, a written changelog and the open questions in one message.",
    gate: true,
  },
  {
    index: "3",
    name: "Launch",
    lead: "We deploy, and error tracking and product analytics are wired in before customers arrive.",
    rest: "We stay on the thread through the first days, the way we did on launch morning of the jewellery studio.",
    gate: true,
  },
  {
    index: "4",
    name: "Run",
    lead: "Monthly retainer for monitoring, fixes and the next scope.",
    rest: "Model API and infrastructure costs are billed separately, at cost.",
    gate: false,
  },
] as const;

/** The two blocks COPY.md sets after the phases. They close the section on
 *  space rather than on another rule, the same call the proof band made under
 *  its figure row and services made under its last row. */
const NOTES = [
  {
    lead: "After handover.",
    lines: [
      "Either the retainer continues, or the engagement ends with a handover session and a written list of what runs where.",
      "We do not go quiet on either path.",
    ],
  },
  {
    lead: "Two rules that do not move.",
    lines: [
      "Minimum commitment up front on every engagement.",
      "No unpaid multi-month starts; we have been offered one and said no.",
    ],
  },
] as const;

export function Process() {
  return (
    <section id="process" className="v1-process" aria-labelledby="process-head">
      <div className="v1-shell">
        <h2 id="process-head" className="v1-process__head">
          You always know what the next payment buys.
        </h2>
        <p className="v1-process__sub">
          Every phase ends in something you can open, not a status update.
        </p>

        {/* The key for the three dots, set immediately above the line they sit
            on. The swatch is the dot itself at its own size, so the legend is
            a sample rather than an icon. */}
        <p className="v1-process__key">
          <span className="v1-process__key-dot" aria-hidden="true" />
          You pay before each one starts.
        </p>

        <ol className="v1-process__gauge" role="list">
          {PHASES.map(({ index, name, lead, rest, gate }) => (
            <li key={name} className="v1-process__step">
              {gate ? <span className="v1-process__gate" aria-hidden="true" /> : null}
              <p className="v1-process__idx">{index}</p>
              <h3 className="v1-process__name">{name}</h3>
              <p className="v1-process__lead">{lead}</p>
              <p className="v1-process__rest">{rest}</p>
            </li>
          ))}
        </ol>

        <div className="v1-process__foot">
          {NOTES.map(({ lead, lines }) => (
            <div key={lead} className="v1-process__note">
              <p className="v1-process__note-lead">{lead}</p>
              {lines.map((line) => (
                <p key={line} className="v1-process__note-line">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
