/**
 * v5 faq.
 *
 * The objections section, set as the thing a product site actually ships for
 * this job: a documentation page. A mono section label, the section head, a
 * standing "in this section" index down the left from 1024 up, and one bordered
 * document holding seven entries. It is named for the section and not for the
 * page because the footer already ships an "On this page" index: two navigation
 * landmarks with one name is a real ambiguity for a screen reader, and axe
 * reports it as one (landmark-unique). Copy is `docs/goal/COPY.md` section 8, all
 * seven questions and every answer line verbatim, with the bracketed source
 * markers stripped because they are provenance, not copy.
 *
 * Four decisions worth writing down:
 *
 * 1. Native `<details>` and `<summary>`, no JavaScript and no client
 *    component. Opening a question is a browser behaviour here, so it works
 *    with scripting off, it is keyboard operable without a single handler, and
 *    the accordion cannot desynchronise from its own markup. The first entry
 *    carries the `open` attribute, so a scroll-0 full-page capture proves the
 *    open state renders rather than only claiming it does.
 *
 *    The `#faq-1`..`#faq-7` anchor is an empty span inside the answer, not the
 *    `<details>` and not the `<summary>`. Measured in Chrome 152: a fragment
 *    that targets either of those leaves the entry closed, because the reveal
 *    step the browser runs before scrolling only opens a disclosure that is
 *    hiding the target, and neither the element itself nor its own summary is
 *    hidden by it. A target inside the answer is hidden by it, so the entry
 *    opens with no script and no `open` handling of our own. The span is then
 *    drawn at the top of the entry rather than where it sits in the flow, so
 *    the row the browser scrolls to is the question and not the middle of the
 *    answer under it. It carries no text and no role.
 *
 * 2. The index numbers are an index, not a ranking. `docs/goal/COPY.md` sets
 *    these seven in a fixed order and the left rail addresses them by number,
 *    so 01-07 is what ties a rail row to `#faq-1`..`#faq-7`. They are not a
 *    sequence the reader is meant to walk in order, and nothing in the section
 *    implies they are.
 *
 * 3. No screenshot beside the answers. The v5 tone note in COPY.md asks for
 *    "the relevant screenshot or document beside the answer that references
 *    it", and only two of the seven answers reference anything captured;
 *    `docs/goal/ASSET-INVENTORY.md` holds screens of the pendant studio and
 *    nothing that answers cost, team or handover. Repeating the same three
 *    screens the hero, work and services sections already print, or drawing a
 *    document to fill the column, are both the fake artefact this variation
 *    exists to avoid. The second column is the index instead: the same
 *    two-column shape, carrying information that is true.
 *
 * 4. No CTA in this section. COPY.md pins one CTA wording for the page and the
 *    final CTA sits immediately below this, so a second button here would ask
 *    the reader to choose between two versions of one action.
 *
 * Answers are capped at 40rem, which is the failure point
 * `docs/goal/03-design-research.md` section 5 names for this section ("long
 * answers with no measure limit on ultrawide"); the other one it names,
 * "accordion focus rings hidden", is answered by drawing the summary's ring
 * inside its own row with a negative outline offset, so the document border
 * cannot clip it.
 */

type Entry = {
  /** Index number. Two digits so the rail column can never change width. */
  n: string;
  /** DOM anchor, and the rail link target. */
  id: string;
  q: string;
  /** COPY.md section 8, one string per source line. */
  a: readonly string[];
};

const ENTRIES: readonly Entry[] = [
  {
    n: "01",
    id: "faq-1",
    q: "What does it cost?",
    a: [
      "There is no price on this page because the scope sets the number.",
      "Paid discovery is the first and smallest step, and it ends with a written scope and a fixed price for the build.",
      "There is a minimum commitment up front on every engagement.",
    ],
  },
  {
    n: "02",
    id: "faq-2",
    q: "Will this work for a business like mine?",
    a: [
      "We build for owner-led brands with money to spend and no technical team of their own.",
      "So far that is jewellery, watches and retail in the UAE, with build capacity in India.",
      "If your customer buys something configurable, it is the same problem we already solved.",
    ],
  },
  {
    n: "03",
    id: "faq-3",
    q: "How fast is it?",
    a: [
      "The jewellery studio went from spec to live in sixteen days, finishing on one overnight build.",
      "That scope had a hard external date, an exhibition stall, and it made it.",
      "Your date comes out of discovery and goes into the scope in writing.",
    ],
  },
  {
    n: "04",
    id: "faq-4",
    q: "Who actually builds it?",
    a: [
      "Two founders, one in Dubai and one in Mumbai, and you are on a thread with both.",
      "We bring in specialists for creative and delivery when a scope needs them, and we tell you who is on your project before you pay.",
    ],
  },
  {
    n: "05",
    id: "faq-5",
    q: "What if the generated output is not good enough?",
    a: [
      "Image and video models have real limits on speed and consistency, and we build around them instead of pretending otherwise.",
      "On the jewellery studio the four renders run at once, each appears as soon as it is ready, and the queue is shown honestly rather than hidden.",
      "The client's note on the first version was that the layout was very good and simple; the only complaint was generation time, and that limit belongs to the model providers.",
    ],
  },
  {
    n: "06",
    id: "faq-6",
    q: "What happens after launch?",
    a: [
      "Either we stay on a monthly retainer for running, fixes and the next scope, or the engagement ends with a handover session and a written list of what runs where.",
      "We do not go quiet on either path.",
    ],
  },
  {
    n: "07",
    id: "faq-7",
    q: "Why do I need a studio if I already have AI tools?",
    a: [
      "Most owners we meet already have tools, several vendors and no structure holding them together.",
      "What is missing is one team that owns the outcome, ships it, and is still there when it breaks on the morning of an exhibition.",
      "Fixing automations someone else sold you is a real part of our work.",
    ],
  },
];

export function Faq() {
  return (
    <section id="faq" className="v5-faq" aria-labelledby="faq-title">
      <div className="v5-container">
        <div className="v5-faq__head">
          <p className="v5-mono v5-eyebrow">Before you pay</p>

          <h2 id="faq-title" className="v5-faq__title">
            The questions we get before the first payment.
          </h2>

          <p className="v5-lead v5-measure">Seven questions, answered in writing.</p>
        </div>

        <div className="v5-faq__body">
          {/* A documentation index. It duplicates the questions below rather
              than adding any, so below 1024, where there is no second column
              to put it in, it is dropped from the layout and from the
              accessibility tree together instead of being stacked as a second
              copy of the list the reader is about to read. */}
          <nav className="v5-faq__toc" aria-labelledby="faq-toc-head">
            <p className="v5-mono v5-faq__toc-head" id="faq-toc-head">
              In this section
            </p>

            <ul className="v5-faq__toc-list">
              {ENTRIES.map((entry) => (
                <li key={entry.id}>
                  <a className="v5-mono v5-faq__toc-link" href={`#${entry.id}`}>
                    <span className="v5-faq__toc-n" aria-hidden="true">
                      {entry.n}
                    </span>
                    <span>{entry.q}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="v5-spec v5-faq__doc">
            <p className="v5-spec__cap v5-mono v5-faq__cap">
              <span>questions</span>
              <span>01-07</span>
            </p>

            {ENTRIES.map((entry, i) => (
              <details
                key={entry.id}
                className="v5-faq__item"
                /* The first entry is open at rest so the section shows what an
                   answer looks like without asking for a click first. */
                open={i === 0}
              >
                <summary className="v5-faq__q">
                  {/* The number is printed for the rail to point at; the
                      question itself is the accessible name of the control. */}
                  <span className="v5-faq__n v5-mono" aria-hidden="true">
                    {entry.n}
                  </span>
                  <span>{entry.q}</span>
                  <span className="v5-faq__mark" aria-hidden="true" />
                </summary>

                <div className="v5-faq__a">
                  {/* The index's anchor. It is inside the answer, which is
                      what makes the browser open the entry, and it is drawn at
                      the top of the entry, which is what makes the browser
                      scroll to the question. See the note at the top of this
                      file. */}
                  <span className="v5-faq__anchor" id={entry.id} />

                  {entry.a.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
