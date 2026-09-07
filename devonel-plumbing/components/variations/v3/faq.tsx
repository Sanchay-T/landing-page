"use client";

import { useState } from "react";

import { getSection } from "./sections";

/**
 * Section 8, day: the seven questions asked before the first payment.
 *
 * SEVEN MORE STATIONS. This band adds no new object either. A question is the
 * services station one scale further down the page - the rule, the name sitting
 * on it in the condensed display face, and the right-hand slot at the rule's end
 * - and the only thing that changes is what the slot carries and the fact that
 * the whole rule is now a control.
 *
 * WHAT THE SLOT CARRIES, AND WHY IT IS NOT A DATE. Every dated rule on this page
 * ends with a day of the sixteen; a rule that is not a day simply ends, which is
 * what the four engagement terms and the two founders' rules already taught the
 * reader. A question is not a day, so this slot is free, and it takes the one
 * mark the row genuinely needs: a plus that is a minus when the row is open, set
 * in Geist as text. Not an icon, not a chevron, not a rotation - the page has no
 * icons and the glyph says what it does in the reader's own alphabet.
 *
 * THE ROW IS THE BUTTON. The `<button>` spans the entire rule, so the target is
 * the full width of the band at every viewport and there is no small hit area
 * next to a large piece of unclickable text. Enter and Space come free from the
 * element rather than from a key handler, the focus ring is the page's own
 * `--v3-fg` outline, and `aria-expanded` plus `aria-controls` say what the
 * control does and what it opens.
 *
 * THE ANSWER OPENS IN PLACE. All seven answers are in the server-rendered HTML
 * carrying the `hidden` attribute, so nothing is fetched, nothing is measured
 * and nothing moves on hydration. The closed state is restyled rather than
 * removed - the panel keeps `display: grid` at a zero row and `visibility:
 * hidden`, which keeps it out of the accessibility tree, out of find-in-page and
 * out of the tab order exactly as `display: none` would, while leaving a state
 * a 200ms height and opacity transition can actually run from. That restyling
 * costs the page its one `!important`, because Tailwind's preflight declares
 * `[hidden]{display:none!important}` and nothing weaker can answer it; entry 08
 * carries the reasoning. Reduced motion drops the transition and the row snaps.
 *
 * ROWS ARE INDEPENDENT. Opening one never closes another: these are seven
 * separate objections and a reader comparing two answers should not have to
 * choose between them.
 *
 * NO JAVASCRIPT. The `<noscript>` rule below reverses the closed state, so a
 * reader with scripting off gets all seven answers open rather than seven dead
 * buttons. It is the same standing the clock's third path has on this page.
 *
 * SIZE AND RULE, NEVER OPACITY. Questions at 24-30 in the condensed display
 * face, one step under the founders and engagement names and one over the case
 * titles, because the page is still winding down; answers in Geist at body size
 * on a 66ch measure. Every word in the band is full `--v3-fg`.
 *
 * Colour: none is written here or in entry 08. Plain `.v3-band`, no
 * `data-clock`, so the band travels with the ramp; `data-stage="day"` is read
 * only by the reduced-motion and no-scroll-timeline paths.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 8, bracketed source tags
 * removed and each answer's sentences joined as written.
 */

type Entry = {
  /** The question from COPY.md section 8, without the document's "Q." prefix. */
  q: string;
  /** The answer, its sentences joined in the order they are written. */
  a: string;
};

const entries: readonly Entry[] = [
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
    a: "Image and video models have real limits on speed and consistency, and we build around them instead of pretending otherwise. On the jewellery studio the four renders run at once, each appears as soon as it is ready, and the queue is shown honestly rather than hidden. The client's note on the first version was that the layout was very good and simple; the only complaint was generation time, and that limit belongs to the model providers.",
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

/**
 * With scripting off the buttons cannot open anything, so the closed state is
 * reversed and the answers stand open. Scoped to this band's own panel class.
 */
const noScriptOpen = `.v3-faq-a[hidden]{visibility:visible;grid-template-rows:1fr;opacity:1}`;

export function Faq() {
  const section = getSection("faq");
  const [open, setOpen] = useState<readonly boolean[]>(() => entries.map(() => false));

  function toggle(index: number) {
    setOpen((previous) => previous.map((value, i) => (i === index ? !value : value)));
  }

  return (
    <section id="faq" className="v3-band v3-faq" data-stage="day" aria-labelledby="faq-h">
      <noscript>
        <style>{noScriptOpen}</style>
      </noscript>

      <div className="v3-inner">
        <p className="v3-station">
          <span>{section.label}</span>
        </p>

        <h2 className="v3-h2" id="faq-h">
          The questions we get before the first payment.
        </h2>

        <ul className="v3-faq-list" role="list">
          {entries.map((entry, index) => {
            const isOpen = open[index];
            const buttonId = `faq-q${index + 1}`;
            const panelId = `faq-a${index + 1}`;

            return (
              <li className="v3-faq-row" key={entry.q}>
                <h3 className="v3-faq-h">
                  <button
                    type="button"
                    id={buttonId}
                    className="v3-service-rule v3-faq-q"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span className="v3-service-name v3-faq-name">{entry.q}</span>
                    <span className="v3-faq-glyph" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                <div
                  className="v3-faq-a"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <div className="v3-faq-a-inner">
                    <p>{entry.a}</p>
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
