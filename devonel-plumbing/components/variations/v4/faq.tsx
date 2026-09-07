/**
 * Variation 4 FAQ - the signal slots.
 *
 * Copy is docs/goal/COPY.md section 8, all seven questions and every answer
 * line verbatim, in the order the document prints them. The only word dropped
 * is the document's "Q." prefix, which the numbered plate on each row replaces.
 *
 * THE MECHANISM: NATIVE DETAILS, NO JAVASCRIPT
 * Each row is a `<details>` with a `<summary>`. That gives keyboard operation,
 * the expanded state in the accessibility tree, and find-in-page inside closed
 * answers, all without a line of script and without a hydration boundary. It
 * also gives the one thing this project actually needs: the open row is an HTML
 * attribute rather than component state, so the first row is open in the served
 * markup and is open in a scroll-0 full-page capture. A JS accordion is open
 * only after hydration, which is a race the screenshot clock keeps winning.
 *
 * WHY THE LEFT EDGE GOES FROM PENCIL TO YELLOW
 * The v4 tone note in COPY.md asks for "a coloured left edge that changes
 * colour as each row opens". Two constraints decide which colour.
 *
 * The first is tokens.css section 1.2: colour on this page is an index, one ink
 * per service, held from the hero map to the case posters. Painting question 01
 * in service 1's red says this question is about customer-facing product
 * studios, which it is not. That is the same argument the founders section
 * makes when it refuses service ink, and it rules out red, blue and the service
 * cycle here.
 *
 * The second is that yellow already means something on this page that is not a
 * service: it is the nav's hover and focus ink (tokens 4.4) and the ground of
 * the proof board. Yellow is this variation's signal colour, the colour of the
 * thing you are on. An open row is the row you are on, so the slot fills
 * yellow, and a closed row sits in the pencil grey that tokens 1.1 defines as
 * the map before it is inked. Nothing is claimed about the question's subject.
 *
 * Yellow on white is 1.7:1, so tokens 1.1 requires a black keyline on it. The
 * slot takes 3px keylines on its left and right edges, and the 3px rules that
 * divide the rows close it top and bottom, so the enclosure is complete without
 * doubling any rule. The keyline is on the slot in both states, not only the
 * yellow one, so this stays one declaration rather than one plus an exception.
 * The colour is never the only signal either: the plus becomes a minus and the
 * answer appears, both of which survive a monochrome print.
 *
 * WHY THERE IS NO CTA IN THIS SECTION
 * COPY.md offers "Send your brief" here for the case where the FAQ sits
 * immediately above the final CTA. On this page it does sit there, and the
 * contact section prints that exact button a few hundred pixels below. Printing
 * it twice in one screen would read as a page repeating itself rather than as
 * two decision points. The last answer hands the reader straight to the final
 * CTA instead, which is the sequence 03-design-research section 3 asks for.
 *
 * WHY THERE IS NO ENTRANCE ANIMATION
 * Same reason as the services grid and the proof board. Seven rows arriving on
 * a stagger are seven rows a full-page capture can catch mid-flight, and a
 * capture is how this page is judged. The section is finished at scroll 0 in
 * the DOM. The only motion is the hover shift on a row and the rotation of the
 * mark, both of which answer something the reader did, and both of which
 * collapse under prefers-reduced-motion.
 */

/**
 * docs/goal/COPY.md section 8, verbatim. Seven questions, each with its answer
 * lines in document order, one line per paragraph, which is the voice contract
 * in COPY.md ("short sentences, one thought per line").
 */
const QUESTIONS = [
  {
    q: "What does it cost?",
    a: [
      "There is no price on this page because the scope sets the number.",
      "Paid discovery is the first and smallest step, and it ends with a written scope and a fixed price for the build.",
      "There is a minimum commitment up front on every engagement.",
    ],
  },
  {
    q: "Will this work for a business like mine?",
    a: [
      "We build for owner-led brands with money to spend and no technical team of their own.",
      "So far that is jewellery, watches and retail in the UAE, with build capacity in India.",
      "If your customer buys something configurable, it is the same problem we already solved.",
    ],
  },
  {
    q: "How fast is it?",
    a: [
      "The jewellery studio went from spec to live in sixteen days, finishing on one overnight build.",
      "That scope had a hard external date, an exhibition stall, and it made it.",
      "Your date comes out of discovery and goes into the scope in writing.",
    ],
  },
  {
    q: "Who actually builds it?",
    a: [
      "Two founders, one in Dubai and one in Mumbai, and you are on a thread with both.",
      "We bring in specialists for creative and delivery when a scope needs them, and we tell you who is on your project before you pay.",
    ],
  },
  {
    q: "What if the generated output is not good enough?",
    a: [
      "Image and video models have real limits on speed and consistency, and we build around them instead of pretending otherwise.",
      "On the jewellery studio the four renders run at once, each appears as soon as it is ready, and the queue is shown honestly rather than hidden.",
      "The client's note on the first version was that the layout was very good and simple; the only complaint was generation time, and that limit belongs to the model providers.",
    ],
  },
  {
    q: "What happens after launch?",
    a: [
      "Either we stay on a monthly retainer for running, fixes and the next scope, or the engagement ends with a handover session and a written list of what runs where.",
      "We do not go quiet on either path.",
    ],
  },
  {
    q: "Why do I need a studio if I already have AI tools?",
    a: [
      "Most owners we meet already have tools, several vendors and no structure holding them together.",
      "What is missing is one team that owns the outcome, ships it, and is still there when it breaks on the morning of an exhibition.",
      "Fixing automations someone else sold you is a real part of our work.",
    ],
  },
] as const;

/** Two digits, so 01 and 07 are the same width in the plate. */
function plateNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function V4Faq() {
  return (
    <section className="v4-faq" id="faq" aria-labelledby="v4-faq-title">
      <div className="v4-shell">
        <div className="v4-faq__grid v4-grid">
          <header className="v4-faq__head">
            <p className="v4-faq__plate">Before you pay</p>

            <h2 className="v4-faq__title" id="v4-faq-title">
              The questions we get before the first payment.
            </h2>
          </header>

          <div className="v4-faq__list">
            {QUESTIONS.map((item, index) => (
              /* The first row carries `open` as an attribute rather than as
                 state, so it is open in the served HTML, open before hydration
                 and open in every capture. */
              <details className="v4-faq__row" key={item.q} open={index === 0}>
                <summary className="v4-faq__summary">
                  {/* The row's number. Hidden from assistive technology: a
                      screen reader announces the question and the expanded
                      state, and "zero one" in front of it is noise. */}
                  <span aria-hidden="true" className="v4-faq__num">
                    {plateNumber(index)}
                  </span>

                  <span className="v4-faq__q">{item.q}</span>

                  {/* Plus and minus, two centred rules drawn as borders on the
                      pseudo-elements of one empty span. No icon file, no icon
                      font, nothing to load. `details` already publishes the
                      state, so this is decoration to the accessibility tree. */}
                  <span aria-hidden="true" className="v4-faq__mark" />
                </summary>

                <div className="v4-faq__answer">
                  {item.a.map((line) => (
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
