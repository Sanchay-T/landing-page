import type { CSSProperties } from "react";
import { ContactCTA } from "@/components/ds/contact-cta";

/**
 * v2 objections and FAQ: the output of `devonel faq`.
 *
 * The buyer question is "what is left that I need answered before I pay", and
 * the honest shape for that is a manual page: a header line, a title, then
 * tagged paragraphs you page through. So the section is `man`-style output read
 * in `less`. Each question is a tag line carrying its own `[+]` / `[-]` state,
 * each answer is the paragraph indented under it, and the whole listing sits in
 * the same 80 character measure as the rest of the buffer.
 *
 * Mechanically these are native `<details>` / `<summary>` elements. That is the
 * whole accessibility story of the section: the browser supplies the button
 * role, the expanded state, Enter and Space, and the focus ring lands on real
 * interactive elements rather than on a div pretending to be one. The first
 * item ships `open` so the pattern is legible before anyone touches it, and
 * every other answer is real content in the DOM, not a promise.
 *
 * Copy is `docs/goal/COPY.md` section 8 on its v2 tone note ("questions as
 * `> q:` lines, answers as output; the accordion steps open with no easing"),
 * lowercased and with numerals as the rest of this direction sets them. The
 * answers are COPY's complete sentences, unshortened: an FAQ that trims its own
 * answers to fit a design is the failure this section exists to avoid.
 *
 * Motion is one stepped swap. `<details>` has no open transition here, which is
 * COPY's "steps open with no easing", and the only animated thing is the marker
 * inverting for a single 90ms step as it flips. Nothing starts hidden and
 * nothing starts at zero opacity, so a screenshot at any frame is the page.
 */

/** Stagger position in the printed sequence, read by the `v2-print` primitive. */
function printStep(i: number): CSSProperties {
  return { "--v2-print-i": i } as CSSProperties;
}

type Entry = {
  /** Anchor-safe key, used for React identity only. */
  id: string;
  /** COPY.md section 8 question, lowercased. */
  q: string;
  /** COPY.md section 8 answer, one entry per complete sentence. */
  a: readonly string[];
};

/** COPY.md section 8, in COPY's order: cost first, then fit, speed, people. */
const entries: readonly Entry[] = [
  {
    id: "cost",
    q: "what does it cost?",
    a: [
      "there is no price on this page because the scope sets the number.",
      "paid discovery is the first and smallest step, and it ends with a written scope and a fixed price for the build.",
      "there is a minimum commitment up front on every engagement.",
    ],
  },
  {
    id: "fit",
    q: "will this work for a business like mine?",
    a: [
      "we build for owner-led brands with money to spend and no technical team of their own.",
      "so far that is jewellery, watches and retail in the uae, with build capacity in india.",
      "if your customer buys something configurable, it is the same problem we already solved.",
    ],
  },
  {
    id: "speed",
    q: "how fast is it?",
    a: [
      "the jewellery studio went from spec to live in 16 days, finishing on one overnight build.",
      "that scope had a hard external date, an exhibition stall, and it made it.",
      "your date comes out of discovery and goes into the scope in writing.",
    ],
  },
  {
    id: "who",
    q: "who actually builds it?",
    a: [
      "two founders, one in dubai and one in mumbai, and you are on a thread with both.",
      "we bring in specialists for creative and delivery when a scope needs them, and we tell you who is on your project before you pay.",
    ],
  },
  {
    id: "output",
    q: "what if the generated output is not good enough?",
    a: [
      "image and video models have real limits on speed and consistency, and we build around them instead of pretending otherwise.",
      "on the jewellery studio the four renders run at once, each appears as soon as it is ready, and the queue is shown honestly rather than hidden.",
      "the client's note on the first version was that the layout was very good and simple; the only complaint was generation time, and that limit belongs to the model providers.",
    ],
  },
  {
    id: "after-launch",
    q: "what happens after launch?",
    a: [
      "either we stay on a monthly retainer for running, fixes and the next scope, or the engagement ends with a handover session and a written list of what runs where.",
      "we do not go quiet on either path.",
    ],
  },
  {
    id: "ai-tools",
    q: "why do i need a studio if i already have ai tools?",
    a: [
      "most owners we meet already have tools, several vendors and no structure holding them together.",
      "what is missing is one team that owns the outcome, ships it, and is still there when it breaks on the morning of an exhibition.",
      "fixing automations someone else sold you is a real part of our work.",
    ],
  },
];

/** Print steps 0, 1 and 2 are the command, the manual header and the title. */
const FIRST_ENTRY_STEP = 3;
const CTA_STEP = FIRST_ENTRY_STEP + entries.length;

export function Faq() {
  return (
    <section id="faq" className="v2-section v2-faq" aria-labelledby="v2-faq-h">
      <div className="v2-rule" data-label="faq" aria-hidden="true" />

      <div className="v2-measure">
        <p className="v2-cmd v2-print" style={printStep(0)}>
          <span className="v2-prompt">~/devonel $</span> devonel faq
        </p>

        {/* The manual header line. Chrome, not content: the left half is the
            page name and its section number, which is the count of questions
            in it, and the right half is COPY's own label for the block. */}
        <p className="v2-faq-man v2-print" style={printStep(1)} aria-hidden="true">
          <span>devonel-faq({entries.length})</span>
          <span>before you pay</span>
        </p>

        <h2 id="v2-faq-h" className="v2-faq-h v2-print" style={printStep(2)}>
          the questions we get before the first payment.
        </h2>

        <div className="v2-faq-list">
          {entries.map((entry, i) => (
            <details
              key={entry.id}
              className="v2-faq-item v2-print"
              style={printStep(FIRST_ENTRY_STEP + i)}
              open={i === 0}
            >
              <summary className="v2-faq-q v2-inv">
                {/* The marker is drawn by CSS and is the state of the row, so
                    it is hidden from the accessibility tree: <details> already
                    announces expanded and collapsed. */}
                <span className="v2-faq-glyph" aria-hidden="true" />
                <span className="v2-faq-qt">{entry.q}</span>
              </summary>

              <div className="v2-faq-a">
                {entry.a.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </details>
          ))}
        </div>

        {/* COPY's FAQ CTA: the reader whose objection is not on the list goes
            straight to the channel. No caret and no support line, so it stays
            quieter than the hero and the final block, which carry the page's
            one primary wording. */}
        <p className="v2-faq-cta v2-print" style={printStep(CTA_STEP)}>
          <span className="v2-prompt">~/devonel $</span>{" "}
          <ContactCTA className="v2-cta">ask the one we missed</ContactCTA>
        </p>
      </div>
    </section>
  );
}
