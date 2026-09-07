import type { CSSProperties } from "react";

/** The entrance primitive, staggered by hand so the sequence reads top to
 *  bottom. Every step starts from a visible 0.6 opacity, never from 0, so a
 *  capture taken mid-flight still shows the whole section. */
const delay = (ms: number) => ({ "--v3-enter-delay": `${ms}ms` }) as CSSProperties;

type V3Question = {
  /** COPY.md's question, without the document's "Q." prefix. */
  question: string;
  /** COPY.md's answer, one sentence per line, as it is written there. */
  answer: readonly string[];
};

/**
 * COPY.md section 8, "Objections and FAQ", verbatim: all seven questions in the
 * document's order, every sentence of every answer, citations stripped. Nothing
 * here is shortened, summarised or written at the component.
 */
const QUESTIONS: readonly V3Question[] = [
  {
    question: "What does it cost?",
    answer: [
      "There is no price on this page because the scope sets the number.",
      "Paid discovery is the first and smallest step, and it ends with a written scope and a fixed price for the build.",
      "There is a minimum commitment up front on every engagement.",
    ],
  },
  {
    question: "Will this work for a business like mine?",
    answer: [
      "We build for owner-led brands with money to spend and no technical team of their own.",
      "So far that is jewellery, watches and retail in the UAE, with build capacity in India.",
      "If your customer buys something configurable, it is the same problem we already solved.",
    ],
  },
  {
    question: "How fast is it?",
    answer: [
      "The jewellery studio went from spec to live in sixteen days, finishing on one overnight build.",
      "That scope had a hard external date, an exhibition stall, and it made it.",
      "Your date comes out of discovery and goes into the scope in writing.",
    ],
  },
  {
    question: "Who actually builds it?",
    answer: [
      "Two founders, one in Dubai and one in Mumbai, and you are on a thread with both.",
      "We bring in specialists for creative and delivery when a scope needs them, and we tell you who is on your project before you pay.",
    ],
  },
  {
    question: "What if the generated output is not good enough?",
    answer: [
      "Image and video models have real limits on speed and consistency, and we build around them instead of pretending otherwise.",
      "On the jewellery studio the four renders run at once, each appears as soon as it is ready, and the queue is shown honestly rather than hidden.",
      "The client’s note on the first version was that the layout was very good and simple; the only complaint was generation time, and that limit belongs to the model providers.",
    ],
  },
  {
    question: "What happens after launch?",
    answer: [
      "Either we stay on a monthly retainer for running, fixes and the next scope, or the engagement ends with a handover session and a written list of what runs where.",
      "We do not go quiet on either path.",
    ],
  },
  {
    question: "Why do I need a studio if I already have AI tools?",
    answer: [
      "Most owners we meet already have tools, several vendors and no structure holding them together.",
      "What is missing is one team that owns the outcome, ships it, and is still there when it breaks on the morning of an exhibition.",
      "Fixing automations someone else sold you is a real part of our work.",
    ],
  },
];

/**
 * Variation 3 - the objections, set as intertitles.
 *
 * A silent film puts its words on a black card between the shots. That is what
 * this section is: seven title cards in a single narrow column over the page's
 * own black, each one a hairline row with the question in Fraunces and a small
 * amber cue mark in the margin. Open one and the card plays: the rule above it
 * takes the amber that every meaning-carrying line on this page takes, the cue
 * turns a quarter down, and the answer sets in Geist inside the 45rem measure.
 *
 * Mechanics are native `<details>` and `<summary>`, so there is no JavaScript
 * on this section at all: the browser supplies the button role, the expanded
 * state, Enter and Space, and find-in-page. The cost question ships open
 * because it is the objection every reader arrives with, and because a section
 * that opens as seven closed lines tells the reader nothing.
 *
 * Nothing here is hidden from a reader who cannot open it: every answer is in
 * the document, and the only thing the cue and the amber rule do is say which
 * card is playing. Under `prefers-reduced-motion` the cue still points where it
 * points, it simply gets there without the turn.
 *
 * No CTA sits in this section on purpose. The engagement block above it ends on
 * the pill and the final call sits directly under it, so a third pill inside
 * one screen would be the same offer three times.
 */
export function V3Faq() {
  return (
    <section className="v3-faq" id="faq">
      <div className="v3-shell">
        <p className="v3-eyebrow v3-enter">Before you pay</p>

        <h2 className="v3-faq__headline v3-enter" style={delay(60)}>
          The questions we get before the first payment.
        </h2>

        <div className="v3-faq__list">
          {QUESTIONS.map((item, i) => (
            <details
              className="v3-faq__item v3-enter"
              key={item.question}
              open={i === 0}
              style={delay(140 + i * 60)}
            >
              <summary className="v3-faq__q">
                <span className="v3-faq__cue" aria-hidden="true" />
                <h3 className="v3-faq__question">{item.question}</h3>
              </summary>
              <div className="v3-faq__answer">
                {item.answer.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
