"use client";

import { useState } from "react";

/**
 * v4 FAQ.
 *
 * `docs/goal/03-design-research.md` section 4, direction 4, layout skeleton item
 * 8 asks for an accordion of seven rows. On this board a row is a cell, so the
 * accordion is the board again - same `.v4-cell`, same sticky head, same fill
 * language - rather than a new kind of list dropped into the page.
 *
 * THE TWIST, APPLIED HERE. Cell size is honesty, and in a disclosure the honest
 * size is how much of the answer is actually on the page. A closed cell is one
 * question tall. An open cell is as tall as the answer Devonel has for it, and
 * its neighbours do not stretch to match, because the board sets
 * `align-items: start` in this band alone. So the board redraws as you read it,
 * and the reason a cell is big is always that something is in it.
 *
 * The cost question is the exception in area for the same reason the two
 * engagement rules are: scope of application. This section is labelled "Before
 * you pay", and the price question is the one standing in front of every other
 * question on the list, so it runs the full width of the board and it is the one
 * cell open on arrival. That also does the teaching: one filled cell showing its
 * answer next to six outlines is the whole mechanism, stated once, with no
 * legend and no hint text.
 *
 * NO ICONS. State is carried by the fill the board already uses everywhere else
 * - outline means the content is not on the page, filled means it is - plus the
 * hairline that appears between a question and its answer when there is an
 * answer to separate. No chevron, no plus, no rotating glyph, no shadow, no
 * cobalt: the budget stays nav button, hero button, live cell rule.
 *
 * Every answer is in the DOM at server render. A closed panel is collapsed with
 * `grid-template-rows: 0fr` and `visibility: hidden`, so it is out of the tab
 * order and out of the accessibility tree while closed, and it opens over 200ms
 * without a layout jump. Under `prefers-reduced-motion: reduce` the same open is
 * instant.
 *
 * Every visible string is verbatim from `docs/goal/COPY.md` section 8, with the
 * "Q." list marker dropped and the bracketed brief references dropped, both of
 * which are editorial marks in the copy deck rather than copy. Section 8 carries
 * no subhead and no figure, so this band prints neither: there is no mono on it,
 * because there is no number on it.
 */

/**
 * NO JAVASCRIPT. Every answer is in the markup already, but a closed panel is
 * collapsed to `0fr` with `visibility: hidden` and its answer sits at zero
 * opacity, and only a click changes `data-open`, so with scripting disabled six
 * of the seven cells are dead buttons over unreadable text and only the cost
 * cell, open on arrival, says anything. This rule reverses the closed state and
 * stands all seven open, which is the only honest resting state for a board
 * whose cells cannot be opened.
 *
 * THE COLLAPSE IS THE PANEL, NOT A `hidden` ATTRIBUTE. Unlike the other
 * directions, nothing here carries `hidden`: the panel owns the two collapsing
 * declarations and the answer owns the fade, so the reversal has to name both.
 * `transition` goes with them so this is the resting state rather than a 200ms
 * open running on load. `--v4-cell-fill` is reversed with them because on this
 * board the fill IS the state - outline means the content is not on the page,
 * filled means it is - and with the answers standing open the cells would
 * otherwise be telling the reader the opposite of what they can see.
 *
 * WHY `@layer base`, AND WHY `!important`. For important declarations the
 * cascade reverses layer order, so an unlayered `!important` is the weakest of
 * them; standing inside `base` - the layer Tailwind's preflight uses - is what
 * lets these outrank both preflight and the unlayered closed state in
 * `tokens.css`. The same shape v3 and v5 ship.
 */
const NOSCRIPT_OPEN = `@layer base{.v4-faq-panel{grid-template-rows:1fr!important;visibility:visible!important;transition:none!important}.v4-faq-answer{opacity:1!important;transition:none!important}.v4-cell--faq{--v4-cell-fill:var(--v4-cell)!important}}`;

type Entry = {
  /** Stable anchor id, used for `aria-controls` and the panel id. */
  id: string;
  question: string;
  /** COPY.md section 8's answer, one sentence per line. */
  answer: string[];
};

/** COPY.md section 8, all seven, in COPY.md's own order. */
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
    id: "after",
    question: "What happens after launch?",
    answer: [
      "Either we stay on a monthly retainer for running, fixes and the next scope, or the engagement ends with a handover session and a written list of what runs where.",
      "We do not go quiet on either path.",
    ],
  },
  {
    id: "tools",
    question: "Why do I need a studio if I already have AI tools?",
    answer: [
      "Most owners we meet already have tools, several vendors and no structure holding them together.",
      "What is missing is one team that owns the outcome, ships it, and is still there when it breaks on the morning of an exhibition.",
      "Fixing automations someone else sold you is a real part of our work.",
    ],
  },
];

/**
 * The one cell open on arrival. Not an accordion in the exclusive sense: opening
 * a second question never closes the first, because closing an answer the reader
 * did not ask to close is the page deciding what they are allowed to see.
 */
const OPEN_ON_ARRIVAL = "cost";

export function Faq() {
  const [open, setOpen] = useState<readonly string[]>([OPEN_ON_ARRIVAL]);

  function toggle(id: string) {
    setOpen((current) =>
      current.includes(id) ? current.filter((each) => each !== id) : [...current, id],
    );
  }

  return (
    <section id="faq" className="v4-container v4-band" aria-labelledby="v4-faq-head">
      <noscript>
        <style>{NOSCRIPT_OPEN}</style>
      </noscript>

      <header className="v4-sticky-head v4-band-head">
        <h2 id="v4-faq-head" className="v4-band-label">
          Before you pay
        </h2>
        <p className="v4-band-line">The questions we get before the first payment.</p>
      </header>

      <div className="v4-board v4-board--faq">
        {ENTRIES.map((entry) => {
          const isOpen = open.includes(entry.id);
          return (
            <div
              key={entry.id}
              className="v4-cell v4-cell--faq"
              data-open={isOpen ? "true" : "false"}
            >
              <h3 className="v4-faq-q">
                <button
                  type="button"
                  className="v4-faq-trigger"
                  id={`v4-faq-${entry.id}-q`}
                  aria-expanded={isOpen}
                  aria-controls={`v4-faq-${entry.id}-a`}
                  onClick={() => toggle(entry.id)}
                >
                  {entry.question}
                </button>
              </h3>

              <div
                id={`v4-faq-${entry.id}-a`}
                className="v4-faq-panel"
                data-open={isOpen ? "true" : "false"}
              >
                <div className="v4-faq-answer">
                  {entry.answer.map((line) => (
                    <p key={line} className="v4-cell-line">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
