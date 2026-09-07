/**
 * Process: four phases as four steel slabs in a row, with the payment gate set
 * between them.
 *
 * The direction's own words for this section are "four phases ... with the
 * payment gate set between them" (03-design-research.md section 4, layout
 * skeleton 5). So the gate is not a chip, a badge or a repeated label - it is
 * the space between two slabs, drawn as a single 1px chrome hairline, and it is
 * the only rule in the section. Nothing here is boxed, outlined or underlined.
 *
 * SLABS, NOT CARDS. `.v5-slab` puts a 1px chrome rule around a steel block, and
 * four of those in a row is a row of cards, which 03b-round2-brief.md bans and
 * which would put three lines within 24px of each other at every gate. So the
 * slabs take the proof band's idiom instead: steel #151B26 on the void, no
 * border, the value step is the edge. That leaves the gate hairline as the one
 * line in the section, which is the point - the line you see is the line you
 * pay across.
 *
 * THE HEADLINE IS SPLIT ACROSS TWO REGISTERS, NOT REWRITTEN. COPY.md section 5
 * gives one headline, "Four phases. You pay before each one starts." Both
 * sentences are on the page, in order, verbatim. The first is the poster line
 * in Archivo; the second is set in Geist directly above the row, because it is
 * the sentence that says what the hairlines are, and a caption belongs beside
 * the thing it captions. Printing it once above the row rather than three times
 * between the slabs is the same decision the section makes everywhere else:
 * say it once, at the size it deserves.
 *
 * NO ORDINALS PRINTED. COPY.md labels the four "Phase 1" to "Phase 4" to keep
 * the document readable. The page carries that order in an `<ol>`, in the
 * reading order and in the gates between the slabs, so printing 01/02/03/04 on
 * top of it would be decoration restating what the layout already says. The
 * heading says "Four phases." and then there are four of them.
 *
 * NO DAY COUNTS. COPY.md gives no duration for any phase, so none is on the
 * page. The only number this studio publishes about elapsed time is the sixteen
 * days in the proof band, and that is a fact about one finished build rather
 * than a promise about the next one.
 *
 * DEVONEL IS THE SUBJECT. Every line is about how the studio works and what it
 * hands over. The one client reference, "the way we did on launch morning of
 * the jewellery studio", is quoted from COPY.md as evidence of the studio's
 * own conduct; the client is not named and no client image appears here, which
 * the imagery rule in 03b-round2-brief.md keeps inside the case cards and on
 * /work/jewelo.
 *
 * TWO INKS PER SLAB. The phase name is chrome, its first line - the commitment
 * that defines the phase - is `--v5-text`, and the rest is `--v5-muted`. That
 * is the whole hierarchy inside a slab: three sizes, three inks, no rules and
 * no boxes. It is the same hierarchy `services.tsx` uses one section above.
 *
 * NO ENTRANCE. The variation spends its one moment on the orb's environment map
 * building on load, and the direction allows exactly one. A reveal here would
 * be the fade-and-slide-up every generated page ships, so there is none, and
 * this section is identical under `prefers-reduced-motion`. Nothing in it
 * moves, hovers or hides at any width.
 */

type Phase = {
  /** The phase name, set at heading scale in Archivo. */
  name: string;
  /**
   * The sourced lines for the phase. The first is the commitment that defines
   * it and is set in `--v5-text`; the rest are the detail, in `--v5-muted`.
   */
  lines: readonly string[];
};

/** COPY.md section 5, the four phases, verbatim and in document order. */
const PHASES: readonly Phase[] = [
  {
    name: "Discovery",
    lines: [
      "Paid, small and fixed.",
      "You get a written scope, a build plan, a date and a fixed price for the build.",
      "It is credited against the build if you continue.",
    ],
  },
  {
    name: "Build",
    lines: [
      "Fixed scope, paid before the phase starts.",
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
    lines: [
      "Monthly retainer for monitoring, fixes and the next scope.",
      "Model API and infrastructure costs are billed separately, at cost.",
    ],
  },
];

type Closing = {
  /** The COPY.md sub-label, verbatim, kept as a heading. */
  label: string;
  lines: readonly string[];
};

/**
 * COPY.md section 5 closes on these two blocks and places them here, after the
 * four phases, so they close this section rather than moving to another one.
 */
const CLOSING: readonly Closing[] = [
  {
    label: "After handover.",
    lines: [
      "Either the retainer continues, or the engagement ends with a handover session and a written list of what runs where.",
      "We do not go quiet on either path.",
    ],
  },
  {
    label: "Two rules that do not move.",
    lines: [
      "Minimum commitment up front on every engagement.",
      "No unpaid multi-month starts; we have been offered one and said no.",
    ],
  },
];

export function Process() {
  return (
    <section
      className="v5-process"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="v5-band v5-process__inner">
        <div className="v5-process__head">
          <h2 className="v5-display v5-process__title" id="process-title">
            Four phases.
          </h2>
          <p className="v5-process__subhead">
            Every phase ends in something you can open, not a status update.
          </p>
        </div>

        <div className="v5-process__gated">
          <p className="v5-process__gate">You pay before each one starts.</p>

          <ol className="v5-process__row">
            {PHASES.map((phase) => (
              <li className="v5-process__phase" key={phase.name}>
                <h3 className="v5-display v5-process__name">{phase.name}</h3>
                <div className="v5-process__copy">
                  {phase.lines.map((line, index) => (
                    <p
                      className={
                        index === 0
                          ? "v5-process__commitment"
                          : "v5-process__detail"
                      }
                      key={line}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="v5-process__closing">
          {CLOSING.map((block) => (
            <div className="v5-process__note" key={block.label}>
              <h3 className="v5-process__note-label">{block.label}</h3>
              {block.lines.map((line) => (
                <p className="v5-process__detail" key={line}>
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
