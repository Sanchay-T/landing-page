"use client";

/**
 * v2 "Shader Light" - FAQ, canonical section 8.
 *
 * The ruled ledger again, this time with a hinge in it.
 *
 * Services and process established the page's ledger idiom: 1px --v2-rule
 * hairlines, a name in Fraunces on the left five of twelve columns, the answer
 * in Geist on the right seven, one empty column between them. This section
 * keeps that read exactly and adds the one thing a question needs that a
 * service name does not - a state. Each row is a real disclosure: a native
 * button carrying aria-expanded and aria-controls, and an answer that opens in
 * the right-hand column beside its own question rather than pushing the rest of
 * the ledger down a screen.
 *
 * Closed, the section is seven questions and eight hairlines with the answer
 * column empty, which is what makes the open row read: the answer is the only
 * thing standing in the right half of the page.
 *
 * The two inks the page uses for rules are respected: --v2-ink rules mean money
 * and belong to the process gate, so every line here is --v2-rule, ordinary
 * separation. Nothing in this section is a card, nothing carries a shadow, and
 * the state indicator is a Geist "+" that becomes a minus - a text glyph, not an
 * icon, because this direction has no icons anywhere.
 *
 * How the open works, and why it is built this way:
 *   - Every question is in the DOM at SSR. Only the answer is hidden, with the
 *     `hidden` attribute, so a reader without JavaScript gets seven questions
 *     and a page that does not lie about having answers behind them.
 *   - The 200ms open is a grid-template-rows 0fr -> 1fr plus opacity transition
 *     on the panel wrapper, which always has a box. Transitioning the hidden
 *     element itself would not animate at all, because an element with no box
 *     has nothing to interpolate from.
 *   - `hidden` is therefore removed at the start of the open and restored at the
 *     end of the close, on the wrapper's own transitionend. Under
 *     `prefers-reduced-motion: reduce` --v2-faq-open collapses to 1ms, the same
 *     device tokens.css already uses for --v2-hover-in, so the answer appears
 *     and disappears in one frame and the transitionend still fires.
 *   - Enter and Space are the button element's own behaviour, and the focus ring
 *     is the page's, so there is no key handling and no focus styling here.
 *
 * Rows are independent, not an accordion: opening the third does not close the
 * second. A reader comparing "how fast is it" against "what does it cost" is the
 * reader this section exists for.
 *
 * No canvas. This page runs exactly one WebGL context and the hero owns it.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 8 and nothing on this
 * section comes from anywhere else: the label, the headline, and the seven
 * questions with their answers, one sentence per line in document order. The
 * document's "Q." notation and its bracketed source references are notation, not
 * copy, and are the only things dropped; trailing full stops, the semicolon in
 * the fifth answer and the client's own words are the document's, kept as
 * written. The client is not named, here or anywhere on the page.
 */

import { useState } from "react";

/**
 * NO JAVASCRIPT. The seven questions ship in the markup either way, but the
 * answer is hidden and its wrapper is collapsed, and only a click takes either
 * off, so with scripting disabled the ledger is seven dead buttons and an empty
 * answer column. This rule reverses the closed state and stands all seven open,
 * which is the only honest resting state for a page that cannot open them.
 *
 * TWO DECLARATIONS BECAUSE THE CLOSE IS IN TWO PLACES. `.v2-faq__answer` is the
 * element `hidden` is on, so it needs its `display` back; `.v2-faq__panel` is
 * the wrapper carrying the collapse, and at rest it is `0fr` and transparent
 * because `data-open` is still "false". `transition` goes with the wrapper so
 * the reversal is the resting state rather than a 200ms open on load.
 *
 * WHY `@layer base`, AND WHY `!important`. Tailwind's preflight ships
 * `[hidden]:where(:not([hidden="until-found"])){display:none!important}` inside
 * `base`, and for important declarations the cascade reverses layer order: an
 * unlayered `!important` is the weakest of them, so no specificity out here
 * would answer it. Standing in the same layer puts the argument back on
 * specificity, which `.v2-faq__answer[hidden]` wins. The wrapper's three
 * declarations are answering unlayered rules in `tokens.css`, where importance
 * outranks them whatever the layer.
 */
const NOSCRIPT_OPEN = `@layer base{.v2-faq__answer[hidden]{display:grid!important}.v2-faq__panel{grid-template-rows:1fr!important;opacity:1!important;transition:none!important}}`;

type Entry = {
  /** Stable key, and the id the button points aria-controls at. */
  id: string;
  question: string;
  /** The answer, one sentence per line, in document order. */
  answer: readonly string[];
};

/** COPY.md section 8, the seven questions, in document order. */
const ENTRIES: readonly Entry[] = [
  {
    id: "cost",
    question: "What does it cost?",
    answer: [
      "There is no price on this page because the scope sets the number.",
      "Paid discovery is the first and smallest step, and it ends with a written scope and a fixed price for the build.",
      "There is a minimum commitment up front on every engagement.",
    ],
  },
  {
    id: "fit",
    question: "Will this work for a business like mine?",
    answer: [
      "We build for owner-led brands with money to spend and no technical team of their own.",
      "So far that is jewellery, watches and retail in the UAE, with build capacity in India.",
      "If your customer buys something configurable, it is the same problem we already solved.",
    ],
  },
  {
    id: "speed",
    question: "How fast is it?",
    answer: [
      "The jewellery studio went from spec to live in sixteen days, finishing on one overnight build.",
      "That scope had a hard external date, an exhibition stall, and it made it.",
      "Your date comes out of discovery and goes into the scope in writing.",
    ],
  },
  {
    id: "who",
    question: "Who actually builds it?",
    answer: [
      "Two founders, one in Dubai and one in Mumbai, and you are on a thread with both.",
      "We bring in specialists for creative and delivery when a scope needs them, and we tell you who is on your project before you pay.",
    ],
  },
  {
    id: "output",
    question: "What if the generated output is not good enough?",
    answer: [
      "Image and video models have real limits on speed and consistency, and we build around them instead of pretending otherwise.",
      "On the jewellery studio the four renders run at once, each appears as soon as it is ready, and the queue is shown honestly rather than hidden.",
      "The client's note on the first version was that the layout was very good and simple; the only complaint was generation time, and that limit belongs to the model providers.",
    ],
  },
  {
    id: "after-launch",
    question: "What happens after launch?",
    answer: [
      "Either we stay on a monthly retainer for running, fixes and the next scope, or the engagement ends with a handover session and a written list of what runs where.",
      "We do not go quiet on either path.",
    ],
  },
  {
    id: "why-studio",
    question: "Why do I need a studio if I already have AI tools?",
    answer: [
      "Most owners we meet already have tools, several vendors and no structure holding them together.",
      "What is missing is one team that owns the outcome, ships it, and is still there when it breaks on the morning of an exhibition.",
      "Fixing automations someone else sold you is a real part of our work.",
    ],
  },
];

/**
 * One row of the ledger.
 *
 * `open` is the disclosure's real state and drives aria-expanded and the
 * transition. `laidOut` is the narrower question of whether the answer takes
 * part in layout at all: it turns on with the open and off again only once the
 * close has finished, which is what lets a 200ms close run before `hidden`
 * removes the box. Re-opening mid-close is safe, because the handler only hides
 * an answer whose row is closed by the time the transition ends.
 */
function Row({ entry }: { entry: Entry }) {
  const [open, setOpen] = useState(false);
  const [laidOut, setLaidOut] = useState(false);
  const answerId = `faq-${entry.id}-answer`;

  return (
    <div className="v2-faq__row">
      <h3 className="v2-faq__q">
        <button
          type="button"
          className="v2-faq__toggle"
          aria-expanded={open}
          aria-controls={answerId}
          onClick={() => {
            if (open) {
              setOpen(false);
              return;
            }
            setLaidOut(true);
            setOpen(true);
          }}
        >
          <span className="v2-faq__question">{entry.question}</span>
          <span className="v2-faq__state" aria-hidden="true">
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>

      <div
        className="v2-faq__panel"
        data-open={open ? "true" : "false"}
        onTransitionEnd={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.propertyName !== "opacity") return;
          if (!open) setLaidOut(false);
        }}
      >
        <div className="v2-faq__answer" id={answerId} hidden={!laidOut}>
          {entry.answer.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="v2-faq" aria-labelledby="faq-headline">
      <noscript>
        <style>{NOSCRIPT_OPEN}</style>
      </noscript>

      <header className="v2-faq__head">
        <p className="v2-faq__label">Before you pay</p>
        <h2 className="v2-faq__headline" id="faq-headline">
          The questions we get before the first payment.
        </h2>
      </header>

      <div className="v2-faq__list">
        {ENTRIES.map((entry) => (
          <Row entry={entry} key={entry.id} />
        ))}
      </div>
    </section>
  );
}
