import { ColumnRules } from "./hero";

/**
 * Before you pay: the queries column.
 *
 * Buyer question: the last few things I need answered before I hand over any
 * money.
 *
 * A trade paper answers its readers on a queries page, so this is one. Seven
 * questions set as bold serif running heads, each on its own hairline, the
 * answers in body serif underneath, and the whole block running in two ruled
 * columns from the broadsheet width the way a notices page is set. The vertical
 * rule between the two columns is not drawn here: it is the page's own column
 * rule showing through from behind, which is why this section drops
 * <ColumnRules /> in and places its two columns on the same 12 column grid.
 *
 * Each query is a native <details>, so opening one costs no JavaScript and the
 * summary is keyboard operable and focusable for free. The affordance is a
 * hairline plus in the hanging margin, built from the same 1px rule as every
 * other division on this page; opening rotates its upright bar flat, which
 * turns the plus into a minus without adding a single new shape to the design.
 * Under prefers-reduced-motion the rotation is instant, so the marker still
 * tells the truth about the state, it just does not travel.
 *
 * The first query is open on purpose. Cost is the objection every reader has,
 * it is the one answer worth reading before anything is clicked, and it means
 * the section never presents as a list of closed lines with nothing behind it.
 *
 * There is no CTA in this section. The final call to action is the next
 * section, and a second paid notice in the last screen before it would be the
 * same offer printed twice.
 *
 * Still rules and whitespace only: no card, no fill, no radius, no shadow. The
 * only enclosed shape on this page stays the classified box in other sections.
 *
 * Every word is docs/goal/COPY.md section 8, verbatim. The "Q." that marks each
 * question in that document is a formatting mark, not part of the sentence, so
 * it does not render; the hanging plus and the question mark do that job.
 */
export function V1Faq() {
  return (
    <section id="faq" className="v1-faq">
      <ColumnRules />

      <div className="v1-faq__inner v1-shell">
        <header className="v1-faq__head">
          <p className="v1-kicker">Before you pay</p>
          <h2 className="v1-storyhead v1-faq__title">
            The questions we get before the first payment.
          </h2>
        </header>

        <div className="v1-queries v1-reveal">
          {/* Two columns of queries at the broadsheet width, each an
              independent block, so opening a query in the left column pushes
              only the queries under it. A single grid would share its rows
              across both columns and tear a hole beside every open answer.
              Below that width the wrappers are display:contents and the seven
              queries read as one column, in document order either way. */}
          {[QUERIES.slice(0, COLUMN_BREAK), QUERIES.slice(COLUMN_BREAK)].map((column, index) => (
            <div key={index} className="v1-queries__col">
              {column.map((query) => (
                <details
                  key={query.q}
                  className="v1-query"
                  /* Cost is the first question and the one objection every
                     reader arrives with, so it is answered without a click. */
                  open={query === QUERIES[0]}
                >
                  <summary className="v1-query__summary">
                    <h3 className="v1-query__q">
                      <span className="v1-query__mark" aria-hidden="true" />
                      <span className="v1-underline">{query.q}</span>
                    </h3>
                  </summary>

                  <div className="v1-prose v1-query__a">
                    <p>{query.a}</p>
                  </div>
                </details>
              ))}
            </div>
          ))}
        </div>

        <div className="v1-folio v1-folio--ruled v1-faq__folio">
          <span>Before you pay</span>
          <span className="v1-folio__n">8</span>
        </div>
      </div>
    </section>
  );
}

/**
 * Where the seven queries break into two columns. Four over three, which is how
 * a printed page fills: the first column carries the extra line.
 */
const COLUMN_BREAK = 4;

/**
 * The seven queries, docs/goal/COPY.md section 8, in the order that document
 * lists them. Price first because it is the question that stops a reader, and
 * the AI one last because it is the one a reader asks after everything else is
 * answered. The order is never changed by the layout.
 */
const QUERIES: readonly { q: string; a: string }[] = [
  {
    q: "What does it cost?",
    a: "There is no price on this page because the scope sets the number. Paid discovery is the first and smallest step, and it ends with a written scope and a fixed price for the build. There is a minimum commitment up front on every engagement.",
  },
  {
    q: "Will this work for a business like mine?",
    a: "We build for owner-led brands with money to spend and no technical team of their own. So far that is jewellery, watches and retail in the UAE, with build capacity in India. If your customer buys something configurable, it is the same problem we already solved.",
  },
  {
    q: "How fast is it?",
    a: "The jewellery studio went from spec to live in sixteen days, finishing on one overnight build. That scope had a hard external date, an exhibition stall, and it made it. Your date comes out of discovery and goes into the scope in writing.",
  },
  {
    q: "Who actually builds it?",
    a: "Two founders, one in Dubai and one in Mumbai, and you are on a thread with both. We bring in specialists for creative and delivery when a scope needs them, and we tell you who is on your project before you pay.",
  },
  {
    q: "What if the generated output is not good enough?",
    a: "Image and video models have real limits on speed and consistency, and we build around them instead of pretending otherwise. On the jewellery studio the four renders run at once, each appears as soon as it is ready, and the queue is shown honestly rather than hidden. The client’s note on the first version was that the layout was very good and simple; the only complaint was generation time, and that limit belongs to the model providers.",
  },
  {
    q: "What happens after launch?",
    a: "Either we stay on a monthly retainer for running, fixes and the next scope, or the engagement ends with a handover session and a written list of what runs where. We do not go quiet on either path.",
  },
  {
    q: "Why do I need a studio if I already have AI tools?",
    a: "Most owners we meet already have tools, several vendors and no structure holding them together. What is missing is one team that owns the outcome, ships it, and is still there when it breaks on the morning of an exhibition. Fixing automations someone else sold you is a real part of our work.",
  },
];
