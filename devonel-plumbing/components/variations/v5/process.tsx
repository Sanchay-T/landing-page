/**
 * v5 process.
 *
 * A product site's "how it works", set as the document it actually is: a
 * changelog. A numbered gutter, a hairline rail, four entries in order, and a
 * closing note for what happens after the last one. Copy is `docs/goal/COPY.md`
 * section 5 verbatim, under that section's v5 tone note ("phases as a checklist
 * panel, each with the artefact it produces").
 *
 * Three decisions worth writing down, because each one is a rule this section
 * was asked to bend and did not:
 *
 * 1. The gutter counts phases, not days. COPY.md attaches no duration to any
 *    phase. The only sourced day figures on this site are the flagship's own
 *    dates, 11 Aug 2026 to 27 Aug 2026, and the proof strip already prints
 *    them. A per-phase day count would be an invented fact, so the gutter
 *    carries the one number that is real: which phase of four this is. It is
 *    still a counter, still mono, still tabular, and it still cannot reflow.
 *
 * 2. No document thumbnails. The tone note asks for "the artefact it produces
 *    shown as a real document thumbnail" and `docs/goal/ASSET-INVENTORY.md`
 *    holds no scope, changelog or handover document; every still there is a
 *    screen of the pendant studio. Drawing one would be the fake artefact this
 *    whole variation exists to avoid. The artefacts are named instead, in the
 *    ledger panel on the right, which is the same information without the lie.
 *
 * 3. The binding terms are not here. "Minimum commitment up front" and "no
 *    unpaid multi-month starts" are terms of the engagement, and COPY.md
 *    section 7 owns them. Printing them twice would make the page argue with
 *    itself about which section the buyer should read for the deal.
 *
 * Fix round 1 (verifier FAIL 2026-09-07T07:05) settled three more:
 *
 * 4. No "you do:" line. The first build printed one instruction per phase
 *    ("Read the scope, then decide whether to build.", and three like it) and
 *    none of them is in COPY.md, which is the one document this page may quote.
 *    Section 5 says what each phase costs, what it produces and when it is
 *    paid; it never says what the buyer does inside a phase. So the line is
 *    gone rather than re-sourced: there is nothing to re-source it to, and
 *    "anything not in this document does not go on the page".
 *
 * 5. The ledger is `.v5-spec`, not `.v5-frame`. Section 14 reserves the 8px
 *    radius and the one frame shadow for a real capture or a real render, and
 *    gives live text the square flat card. This panel is text Devonel typeset,
 *    so it takes the square one, the same as the founders record and the faq
 *    document. Every string in it is a clause lifted out of COPY.md section 5
 *    unchanged, so the panel names artefacts without paraphrasing them.
 *
 * 6. The ledger is a summary, so it is out of the layout below 1024 rather
 *    than stacked under the log reprinting all four phase names, which is the
 *    redundancy the faq index avoids the same way. Nothing is lost at phone
 *    width: every artefact it lists is already in the entry above it.
 *
 * No JavaScript, no scroll spy, nothing hidden at rest: the ledger panel is a
 * static list that highlights nothing, so a full-page capture and a reader with
 * scripting off see the identical section. The panel pins only from 1024 up,
 * and it is well inside the 800px a laptop viewport leaves under
 * `--v5-sticky-top`, which is the failure this direction is most prone to
 * ("sticky copy taller than the viewport",
 * `docs/goal/03-design-research.md` section 5).
 */

type Phase = {
  /** Gutter counter. Two digits so the column can never change width. */
  n: string;
  name: string;
  /** What the phase is, from COPY.md section 5. */
  copy: readonly string[];
  /**
   * What the phase hands over, for the ledger panel. A clause of the entry
   * above it, quoted rather than rewritten, so the two columns cannot drift.
   */
  gets: string;
};

const PHASES: readonly Phase[] = [
  {
    n: "01",
    name: "Discovery",
    copy: [
      "Paid, small and fixed.",
      "You get a written scope, a build plan, a date and a fixed price for the build. It is credited against the build if you continue.",
    ],
    gets: "a written scope, a build plan, a date and a fixed price for the build",
  },
  {
    n: "02",
    name: "Build",
    copy: [
      "Fixed scope, paid before the phase starts.",
      "Each week you get a working link, a written changelog and the open questions in one message.",
    ],
    gets: "a working link, a written changelog and the open questions in one message",
  },
  {
    n: "03",
    name: "Launch",
    copy: [
      "We deploy, and error tracking and product analytics are wired in before customers arrive.",
      "We stay on the thread through the first days, the way we did on launch morning of the jewellery studio.",
    ],
    gets: "error tracking and product analytics are wired in before customers arrive",
  },
  {
    n: "04",
    name: "Run",
    copy: ["Monthly retainer for monitoring, fixes and the next scope."],
    gets: "monitoring, fixes and the next scope",
  },
];

export function Process() {
  return (
    <section id="process" className="v5-process" aria-labelledby="process-title">
      <div className="v5-container">
        <div className="v5-process__head">
          <p className="v5-mono v5-eyebrow">How we work</p>

          <h2 id="process-title" className="v5-process__title">
            Four phases. You pay before each one starts.
          </h2>

          <p className="v5-lead v5-measure">
            Every phase ends in something you can open, not a status update.
          </p>
        </div>

        <div className="v5-process__body">
          <div className="v5-process__main">
            <ol>
              {PHASES.map((phase) => (
                <li key={phase.n} className="v5-process__step">
                  {/* The list element already carries the order for a screen
                      reader, so the printed counter is decoration to it. */}
                  <p className="v5-mono v5-process__n" aria-hidden="true">
                    {phase.n}
                  </p>

                  <div className="v5-process__entry">
                    <h3 className="v5-process__name">{phase.name}</h3>

                    {phase.copy.map((line) => (
                      <p key={line} className="v5-process__copy">
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ol>

            {/* Outside the rail on purpose. The buyer checks that support is
                defined before signing, and this is the answer to the phase
                after the last phase, not a fifth phase. */}
            <div className="v5-process__after">
              <h3 className="v5-mono v5-process__after-head">After handover</h3>
              <p className="v5-process__copy">
                Either the retainer continues, or the engagement ends with a handover session and a
                written list of what runs where.
              </p>
              <p className="v5-process__copy">We do not go quiet on either path.</p>
            </div>
          </div>

          {/* A div, not an <aside>: a complementary landmark nested inside a
              section is not top level, which axe flags, and this panel is a
              summary of the log beside it rather than an aside from the page. */}
          <div className="v5-process__aside" aria-labelledby="process-gets-head">
            <div className="v5-spec v5-process__gets">
              <p className="v5-spec__cap v5-mono" id="process-gets-head">
                you get
              </p>

              <ul>
                {PHASES.map((phase) => (
                  <li key={phase.n} className="v5-process__get">
                    <p className="v5-mono v5-process__get-n" aria-hidden="true">
                      {phase.n}
                    </p>
                    <div className="v5-process__get-body">
                      <p className="v5-process__get-name">{phase.name}</p>
                      <p className="v5-mono v5-process__get-what">{phase.gets}</p>
                    </div>
                  </li>
                ))}

                <li className="v5-process__get v5-process__get--after">
                  {/* Not a fifth phase, so it takes no number. */}
                  <p className="v5-mono v5-process__get-n" aria-hidden="true">
                    end
                  </p>
                  <div className="v5-process__get-body">
                    <p className="v5-process__get-name">After handover</p>
                    <p className="v5-mono v5-process__get-what">
                      a handover session and a written list of what runs where
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
