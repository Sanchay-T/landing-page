import { SECTIONS } from "./sections";

/**
 * Variation 4 process - the timetable board.
 *
 * Copy is docs/goal/COPY.md section 5, tuned to the v4 tone note ("draw the
 * four phases as a metro line, one station per phase, payment gates as
 * interchange dots").
 *
 * WHAT THIS SECTION ADDS THAT THE HERO DOES NOT
 * The hero already prints the line: four stations named Discovery, Build,
 * Launch and Run, with the caption "Four phases. You pay before each one
 * starts." Drawing that map again at a larger size would be the same sentence
 * twice. So this section is the fine print printed under the timetable: what
 * happens inside each phase, and what lands on the client's side of it. The
 * metro grammar survives at row scale rather than diagram scale - each row
 * opens on a stub of line with an interchange ring on it, and the board ends on
 * a terminus bar - which is the only geometry here.
 *
 * WHY THE NUMERALS ARE ORDINALS AND NOT DAY RANGES
 * A departure board wants a time column, and the brief for this section asked
 * for a day range. COPY.md does not carry one: the only sourced durations on
 * the whole page are the jewellery studio's sixteen days from spec to live
 * (11 Aug to 27 Aug 2026), which the hero and the proof board both already
 * print, and COPY.md's own answer to "how fast is it" is "your date comes out
 * of discovery and goes into the scope in writing". Printing "days 1-5" against
 * Discovery would be a number nobody in the brief ever said. So the column
 * carries the one honest figure a phase has, its position in the sequence, set
 * at the size the day range would have taken.
 *
 * WHY THERE IS NO COLOUR ON THE BOARD BUT THE RINGS
 * Colour in this variation is an index: an ink means a service, from the hero
 * map through the services blocks to the case posters. COPY.md ties no phase to
 * a service - all five lines run through all four phases - so painting a phase
 * in a service ink would say something the page does not mean. The board is
 * therefore black on white, and the single yellow is the payment gate, which is
 * signage rather than index: yellow on this page is what the signage bar
 * already uses to mark the thing you are meant to notice. Yellow is 1.7:1 on
 * white and never carries text or a bare edge here; every ring is punched out
 * of a 3px black keyline, per tokens.css section 1.1.
 *
 * WHAT IS DELIBERATELY LEFT TO THE ENGAGEMENT SECTION
 * COPY.md's process block closes on "two rules that do not move" - the minimum
 * commitment and no unpaid multi-month starts. Both are terms of the deal, and
 * COPY.md section 7 prints them again as such. They belong there, once, next to
 * the four ways to work, not here where they would read as a fifth phase.
 *
 * MOTION
 * None. Nothing on this board enters, and nothing draws: the section pins
 * --v4-draw-lead to 0 on itself, and no element carries .v4-draw, so there is
 * no stroke that a full-page capture can catch half finished (tokens.css 4.3).
 * The only moving thing is the block link at the foot, which takes the shared
 * hover primitive and collapses with it under prefers-reduced-motion.
 */

/**
 * COPY.md section 5, the four phases in order.
 *
 * `what` is how the phase works and `you` is what lands on the client's side of
 * it, which is the split the board's two text columns print. Both are COPY.md's
 * own sentences: nothing here is a paraphrase that could drift from the brief.
 */
const PHASES = [
  {
    no: "01",
    name: "Discovery",
    what: "Paid, small and fixed. It is credited against the build if you continue.",
    you: "A written scope, a build plan, a date and a fixed price for the build.",
  },
  {
    no: "02",
    name: "Build",
    what: "Fixed scope, paid before the phase starts.",
    you: "One message a week: a working link, a written changelog and the open questions.",
  },
  {
    no: "03",
    name: "Launch",
    what: "We deploy, and error tracking and product analytics are wired in before customers arrive.",
    you: "We stay on the thread through the first days, the way we did on launch morning of the jewellery studio.",
  },
  {
    no: "04",
    name: "Run",
    what: "Monthly retainer for monitoring, fixes and the next scope.",
    you: "Model API and infrastructure costs are billed separately, at cost.",
  },
] as const;

/** The column labels, printed once as the board's header row. */
const COLUMNS = ["No.", "Phase", "What happens", "Your side"] as const;

/**
 * COPY.md section 5, "After handover". The research brief is explicit that the
 * last step has to say what happens after the work is handed over, so it is a
 * band of the board rather than a line lost under it.
 */
const AFTER = {
  label: "After handover",
  copy: "Either the retainer continues, or the engagement ends with a handover session and a written list of what runs where. We do not go quiet on either path.",
} as const;

/**
 * The secondary action points at the engagement section, so it only renders
 * once that section is on the page. Same rule and same reason as the proof
 * board's case link: an anchor to an id that does not exist yet is the dead
 * link the build spec fails a section for.
 */
function engagementIsOnThePage() {
  return SECTIONS.some((section) => section.id === "engagement" && section.built);
}

/**
 * The interchange ring, one per phase, sitting on the stub of line that opens
 * each row. It is the payment gate; the note under the board says so in words,
 * because a mark that needs a legend gets one.
 */
function GateMark() {
  return (
    <span className="v4-proc__mark" aria-hidden="true">
      <svg className="v4-proc__glyph" viewBox="0 0 16 16" focusable="false">
        <circle className="v4-proc__ring" cx="8" cy="8" r="5" />
      </svg>
      <span className="v4-proc__bar" />
    </span>
  );
}

/** The terminus bar. The line ends after handover, and there is no gate on it. */
function TerminusMark() {
  return (
    <span className="v4-proc__mark" aria-hidden="true">
      <svg className="v4-proc__glyph" viewBox="0 0 16 16" focusable="false">
        <rect className="v4-proc__stop" x="5" y="0" width="6" height="16" />
      </svg>
      <span className="v4-proc__bar" />
    </span>
  );
}

export function V4Process() {
  const showEngagementLink = engagementIsOnThePage();

  return (
    <section className="v4-proc" id="process" aria-labelledby="v4-proc-title">
      <div className="v4-shell">
        <p className="v4-proc__label">How we work</p>

        <h2 className="v4-proc__title" id="v4-proc-title">
          Paid discovery. Fixed build. Monthly run.
        </h2>

        <p className="v4-proc__lead">
          Every phase ends in something you can open, not a status update.
        </p>

        {/* The header row is a visual device: it labels columns that only exist
            above 1080px. Screen readers get the same information from the cell
            labels inside each row, which are hidden from sight exactly where
            this row is visible, so neither audience hears it twice. */}
        <div className="v4-proc__head" aria-hidden="true">
          <p className="v4-proc__no v4-proc__col">{COLUMNS[0]}</p>
          <p className="v4-proc__phase v4-proc__col">{COLUMNS[1]}</p>
          <p className="v4-proc__what v4-proc__col">{COLUMNS[2]}</p>
          <p className="v4-proc__you v4-proc__col">{COLUMNS[3]}</p>
        </div>

        <ol className="v4-proc__board">
          {PHASES.map((phase) => (
            <li className="v4-proc__row" key={phase.no}>
              <div className="v4-proc__no">
                <GateMark />
                {/* The ordinal is printed for the eye. The list itself already
                    carries the order for a screen reader, so reading it out
                    again would just be counting twice. */}
                <span className="v4-proc__num" aria-hidden="true">
                  {phase.no}
                </span>
              </div>

              <h3 className="v4-proc__phase v4-proc__name">{phase.name}</h3>

              <p className="v4-proc__what v4-proc__copy">{phase.what}</p>

              <p className="v4-proc__you v4-proc__copy">
                <span className="v4-proc__you-label">{COLUMNS[3]}</span>
                {phase.you}
              </p>
            </li>
          ))}
        </ol>

        <div className="v4-proc__end">
          <div className="v4-proc__no">
            <TerminusMark />
          </div>
          <h3 className="v4-proc__phase v4-proc__name">{AFTER.label}</h3>
          <p className="v4-proc__end-copy v4-proc__copy">{AFTER.copy}</p>
        </div>

        <div className="v4-proc__foot">
          <p className="v4-proc__note">
            The ring on each line is a payment gate: the phase is paid for before it starts.
          </p>

          {showEngagementLink ? (
            <a className="v4-block v4-proc__cta" href="#engagement">
              How a quote works
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
