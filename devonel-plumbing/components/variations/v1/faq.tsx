"use client";

import { useState } from "react";

/**
 * v1 "Studio Dark" FAQ.
 *
 * The direction's eighth block: seven rows on hairlines, back on the void, in
 * the same list instrument entry 03 built for services and entry 07 reused for
 * the commercial terms. The row owns the hairline above it, the list owns the
 * one that closes the set, and hovering a row lifts exactly its own rule to
 * text colour. No cards, no icons, no numbering, no shadow, no lamp - the only
 * lamp in the section is the shared focus ring from entry 01, and here there
 * finally is something to focus.
 *
 * The one thing this list does that the other two do not is open. The direction
 * asks for `details` rows; this ships the same behaviour as an explicit
 * disclosure - a real `<button>` carrying `aria-expanded` and `aria-controls`,
 * with the answer in a panel the button names - because `<details>` gives no
 * control over the 200ms open and, more importantly, because the accessible
 * name and state of a `summary` are read inconsistently across screen readers
 * while a button's are not. Using a real button also means Enter and Space
 * toggle a row for free, with no key handler of this component's own.
 *
 * Every question and every answer is in the server-rendered DOM. A closed
 * answer carries the `hidden` attribute, so it is out of the accessibility tree
 * and out of find-in-page but still in the document a crawler reads. The rows
 * are independent: each holds its own state, none closes another, and the page
 * can be read with all seven open.
 *
 * The only client state on this route apart from the hero. `useState` per row,
 * nothing else - no effect, no ref, no measurement. The open transition is CSS
 * (`@starting-style` plus `transition-behavior: allow-discrete`), which is what
 * lets `hidden` stay a real `display: none` and still animate; where a browser
 * does not support it the row opens instantly, which is the reduced-motion
 * behaviour anyway.
 *
 * Every string is COPY.md section 8, verbatim, with the bracketed source
 * citations stripped and each answer's sentences run together into the one
 * paragraph they already are. Three calls worth recording:
 *
 * - COPY.md's own section label, "Before you pay", is not rendered. It would
 *   have to sit as an eyebrow above the heading, which is a named tell in this
 *   direction - the same call proof, services and engagement made with theirs.
 * - Section 8 has no subhead, and none is written for it. Services and
 *   engagement print COPY.md's own subhead under their heading; this section
 *   does not have one, and the seven questions are the better sub anyway.
 * - Neither CTA alternate is used. COPY.md marks "Send your brief" as the
 *   wording for when the FAQ sits immediately above the final CTA, which is
 *   exactly where it sits, so the button belongs to that section and this page
 *   keeps one primary action.
 */

/** question  the row's control, in the display face
 *  answer    COPY.md's reply, opening in place under it */
const QUESTIONS = [
  {
    question: "What does it cost?",
    answer:
      "There is no price on this page because the scope sets the number. Paid discovery is the first and smallest step, and it ends with a written scope and a fixed price for the build. There is a minimum commitment up front on every engagement.",
  },
  {
    question: "Will this work for a business like mine?",
    answer:
      "We build for owner-led brands with money to spend and no technical team of their own. So far that is jewellery, watches and retail in the UAE, with build capacity in India. If your customer buys something configurable, it is the same problem we already solved.",
  },
  {
    question: "How fast is it?",
    answer:
      "The jewellery studio went from spec to live in sixteen days, finishing on one overnight build. That scope had a hard external date, an exhibition stall, and it made it. Your date comes out of discovery and goes into the scope in writing.",
  },
  {
    question: "Who actually builds it?",
    answer:
      "Two founders, one in Dubai and one in Mumbai, and you are on a thread with both. We bring in specialists for creative and delivery when a scope needs them, and we tell you who is on your project before you pay.",
  },
  {
    question: "What if the generated output is not good enough?",
    answer:
      "Image and video models have real limits on speed and consistency, and we build around them instead of pretending otherwise. On the jewellery studio the four renders run at once, each appears as soon as it is ready, and the queue is shown honestly rather than hidden. The client's note on the first version was that the layout was very good and simple; the only complaint was generation time, and that limit belongs to the model providers.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Either we stay on a monthly retainer for running, fixes and the next scope, or the engagement ends with a handover session and a written list of what runs where. We do not go quiet on either path.",
  },
  {
    question: "Why do I need a studio if I already have AI tools?",
    answer:
      "Most owners we meet already have tools, several vendors and no structure holding them together. What is missing is one team that owns the outcome, ships it, and is still there when it breaks on the morning of an exhibition. Fixing automations someone else sold you is a real part of our work.",
  },
] as const;

/**
 * One row: a hairline, a button that is the whole width of the list, and the
 * panel it controls.
 *
 * The state indicator at the right end of the row is a text glyph in the body
 * face - `+` closed, the true minus sign `−` open, which is the same width
 * as the plus in Geist so the row's right edge does not shift when it opens.
 * There is no icon anywhere in this direction and none is introduced here. It
 * is `aria-hidden` because `aria-expanded` on the button already says the same
 * thing, and saying it twice is how a screen reader ends up reading "plus".
 */
function Row({ index, question, answer }: { index: number; question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const controlId = `faq-q-${index}`;
  const panelId = `faq-a-${index}`;

  return (
    <li className="v1-faq__row">
      <h3 className="v1-faq__heading">
        <button
          type="button"
          id={controlId}
          className="v1-faq__control"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((wasOpen) => !wasOpen)}
        >
          <span className="v1-faq__question">{question}</span>
          <span className="v1-faq__glyph" aria-hidden="true">
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>

      <div id={panelId} className="v1-faq__answer" hidden={!open}>
        <div className="v1-faq__answer-inner">
          <p className="v1-faq__answer-text">{answer}</p>
        </div>
      </div>
    </li>
  );
}

export function Faq() {
  return (
    <section id="faq" className="v1-faq" aria-labelledby="faq-head">
      <div className="v1-shell">
        <h2 id="faq-head" className="v1-faq__head">
          The questions we get before the first payment.
        </h2>

        <ul className="v1-faq__list" role="list">
          {QUESTIONS.map(({ question, answer }, index) => (
            <Row key={question} index={index + 1} question={question} answer={answer} />
          ))}
        </ul>
      </div>
    </section>
  );
}
