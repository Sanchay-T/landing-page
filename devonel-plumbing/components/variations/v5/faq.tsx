"use client";

import { useCallback, useState } from "react";

/**
 * FAQ: seven questions at poster scale on the void, separated by chrome
 * hairlines, each opening in place.
 *
 * The direction's own words for this section are "seven rows on chrome
 * hairlines" (03-design-research.md section 4, layout skeleton 8). So the row
 * is the whole component: an Archivo Expanded question on the left, one Geist
 * glyph on the right, a 24 percent chrome hairline between it and the next one,
 * and nothing else. No card, no ground, no border box, no numbering, no icon.
 *
 * THE QUESTION IS THE CONTROL. The entire row is one `<button>`, so the target
 * is the whole line rather than a small glyph at the end of it, and a keyboard
 * user gets Enter and Space for free because it is a real button and not a div
 * with a click handler. `aria-expanded` carries the state and `aria-controls`
 * names the answer; the `+` / minus glyph is `aria-hidden` because it says the
 * same thing a second time, in a way a screen reader has already been told.
 *
 * EVERY QUESTION IS IN THE SERVER-RENDERED HTML. The seven questions ship in
 * the markup and are readable, searchable and indexable with JavaScript off;
 * only the answers carry `hidden`. Nothing here is fetched, deferred or
 * revealed on scroll.
 *
 * ROWS ARE INDEPENDENT. Opening one does not close another. This is a list of
 * objections a buyer works through, not a wizard: two people arrive caring
 * about cost and about who builds it, and closing the first to show the second
 * would be the component deciding what they are allowed to compare.
 *
 * OPENING IS THE ONLY MOTION, AND IT IS NOT A FOURTH PRIMITIVE. The answer
 * grows and fades in over `--v5-dur-hover`, the same 200ms the hover primitive
 * runs at, because this is that gesture applied to the one control on the page
 * with state behind it: it shows what changed in response to a click, which is
 * the only kind of motion this direction spends outside the orb. Under
 * `prefers-reduced-motion` the token collapses to 1ms in `tokens.css` and the
 * answer simply appears. There is no scroll reveal and no entrance here.
 *
 * NO CTA. COPY.md section 8 offers two CTA alternates and both are for the case
 * where the FAQ is the last thing before the ask. On this page the final CTA is
 * its own section directly below, so a button here would be the same request
 * twice within one screen.
 *
 * DEVONEL IS THE SUBJECT. Every answer is about how the studio charges, who
 * does the work and what it will and will not promise. The two references to
 * the finished build ("the jewellery studio") are quoted from COPY.md as
 * evidence of the studio's own conduct; the client is not named, and no client
 * image is here - the imagery rule in 03b-round2-brief.md keeps those inside
 * the case cards and on /work/jewelo.
 */

type Entry = {
  /** The question, verbatim from COPY.md, without its "Q." prefix. */
  question: string;
  /** The answer, one sourced sentence per line, in document order. */
  answer: readonly string[];
};

/** COPY.md section 8, all seven, verbatim and in document order. */
const ENTRIES: readonly Entry[] = [
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
      "The client's note on the first version was that the layout was very good and simple; the only complaint was generation time, and that limit belongs to the model providers.",
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

/** U+2212 MINUS SIGN, which is the same width and weight as the plus. */
const MINUS = "−";

export function Faq() {
  const [open, setOpen] = useState<readonly boolean[]>(() =>
    ENTRIES.map(() => false),
  );

  const toggle = useCallback((index: number) => {
    setOpen((rows) => rows.map((row, i) => (i === index ? !row : row)));
  }, []);

  return (
    <section className="v5-faq" id="faq" aria-labelledby="faq-title">
      <div className="v5-band v5-faq__inner">
        <h2 className="v5-display v5-faq__title" id="faq-title">
          The questions we get before the first payment.
        </h2>

        <ul className="v5-faq__list">
          {ENTRIES.map((entry, index) => {
            const isOpen = open[index];
            const answerId = `faq-answer-${index + 1}`;

            return (
              <li className="v5-faq__row" key={entry.question}>
                <h3 className="v5-faq__heading">
                  <button
                    aria-controls={answerId}
                    aria-expanded={isOpen}
                    className="v5-faq__question"
                    onClick={() => toggle(index)}
                    type="button"
                  >
                    <span className="v5-display v5-faq__ask">
                      {entry.question}
                    </span>
                    <span aria-hidden="true" className="v5-faq__glyph">
                      {isOpen ? MINUS : "+"}
                    </span>
                  </button>
                </h3>

                <div className="v5-faq__answer" hidden={!isOpen} id={answerId}>
                  <div className="v5-faq__answer-inner">
                    {entry.answer.map((line) => (
                      <p className="v5-faq__line" key={line}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
