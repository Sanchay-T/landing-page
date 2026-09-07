import { Fragment } from "react";
import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel } from "@/lib/site";

/**
 * Variation 4 engagement - the fare rules board.
 *
 * Copy is docs/goal/COPY.md section 7, tuned to the v4 tone note ("coloured
 * tiles, one word each, terms underneath in 18px"). The tiles are read as one
 * continuous three-ink band rather than as three cards: the blocks abut with no
 * gutter, so the row is a single stripe of colour the way the conditions are
 * printed across the back of a ticket. Under it the terms are set as a ruled
 * board, 3px black rules on white, label left and clause right.
 *
 * WHY THE BAND IS BUTTED AND THE SERVICES GRID IS NOT
 * The services section is already five flat ink blocks with a 24px gutter
 * between them (tokens.css section 9). Three more gutter-separated ink blocks
 * here would be that section again at a smaller count, and two sections that
 * read as the same device is the thing the build spec fails a variation for.
 * Closing the gutter changes the object: gutters make a bento of independent
 * cards, no gutter makes one bar divided into three fields. A bar is what these
 * three lines are - they are not three offers to choose between, they are three
 * conditions that all hold at once on every engagement.
 *
 * WHAT THIS SECTION ADDS THAT THE PROCESS SECTION DOES NOT
 * Process answers the sequence: four phases, what happens inside each, what
 * lands on the client's side. This answers the commercial shape around that
 * sequence, which COPY.md keeps in its own section and which process
 * deliberately left here: what fixes the number, what does not, what is
 * optional, what is billed on rather than marked up, and what Devonel will not
 * take. The one fact both sections carry is the monthly retainer, because
 * COPY.md section 7 lists four ways to work and a section answering "how does a
 * quote work" that omits one of the four is answering three quarters of the
 * question.
 *
 * NO PRICES, WHICH IS THE SECTION'S ARGUMENT AND NOT A GAP
 * 01-business-brief.md section 9.5 sets the rule: no numbers, state the model.
 * So the headline says so out loud rather than leaving the reader to notice,
 * and the board's second rule prints the reason. A page that quietly has no
 * pricing section reads as a page hiding one; a page whose pricing section is
 * titled "No prices on this page." has taken a position.
 *
 * MOTION
 * None on enter. Same reason as the proof board and the services grid: the
 * deliverable for this page is a set of full-page captures taken on a clock
 * nothing in CSS can see, and a band caught mid-stagger is a band with its
 * fields out of register. The only moving thing is the block link at the foot,
 * which takes the shared hover primitive from tokens.css 4.2 and collapses with
 * it under prefers-reduced-motion.
 */

/**
 * The three conditions that hold on every engagement, in the inks they are
 * printed in. COPY.md section 7 states all three: "Paid discovery. A small
 * fixed first scope...", "Fixed-scope build. One price for one written
 * scope...", and "Minimum commitment up front on every engagement."
 *
 * `n` selects the ink through `.v4-eng__bind--n` in tokens.css section 11.
 * Blue, black and red are used here as three distinguishable signal fields on
 * one bar, not as the service index from tokens.css section 1.2: nothing in
 * this section carries a service name, a line number or a line stub, so there
 * is no index for the colour to disagree with. The red field takes black type
 * rather than white, because white on this red is 4.2:1 and black on it is
 * 4.6:1, which is the same pairing the services blocks already use.
 */
const BINDING = [
  {
    n: 1,
    term: "Paid discovery",
    clause:
      "A small fixed first scope. It produces the plan, the date and the price, and it is credited against the build.",
  },
  {
    n: 2,
    term: "Fixed scope",
    clause: "One price for one written scope.",
  },
  {
    n: 3,
    term: "Minimum commitment",
    clause: "Up front on every engagement.",
  },
] as const;

/**
 * The board. Every row is a term of the deal, and every clause is COPY.md's own
 * sentence for it: sections 7 and 8 for the money terms, section 3's standing
 * line for how a duration is set, section 5 for the line about the multi-month
 * start that was offered and refused.
 *
 * The first two rows are a deliberate couplet and sit at the top for that
 * reason. Everything a buyer is nervous about in a page with no price is
 * answered by knowing which parts of the deal stop moving and which one does
 * not, and in what order.
 */
const TERMS = [
  {
    label: "What is fixed",
    clause:
      "The scope, the date and the price. All three are written in discovery, not estimated on a call.",
  },
  {
    label: "What is not",
    clause: "A number before there is a scope. That is why there is no price on this page.",
  },
  {
    label: "Monthly retainer",
    clause: "Optional after launch. Running, monitoring, fixes and the next scope.",
  },
  {
    label: "Revenue share",
    clause: "Optional, on top of the fee, never instead of it.",
  },
  {
    label: "Passed through",
    clause: "Model API and infrastructure costs, billed separately, at cost and itemised.",
  },
  {
    label: "What we do not do",
    clause: "No unpaid multi-month starts. We have been offered one and said no.",
  },
] as const;

export function V4Engagement() {
  return (
    <section className="v4-eng" id="engagement" aria-labelledby="v4-eng-title">
      <div className="v4-shell">
        <p className="v4-eng__label">How a quote works</p>

        <h2 className="v4-eng__title" id="v4-eng-title">
          No prices on this page.
        </h2>

        <p className="v4-eng__lead">
          Here is exactly how we get to one. Scope sets the number, so we write the scope first and
          you pay for that step.
        </p>

        {/* The band. Three fields of one bar, so it is a list of conditions
            rather than a set of choices. */}
        <ul className="v4-eng__band v4-grid">
          {BINDING.map((binding) => (
            <li className={`v4-eng__bind v4-eng__bind--${binding.n}`} key={binding.term}>
              <h3 className="v4-eng__term">{binding.term}</h3>
              <p className="v4-eng__clause">{binding.clause}</p>
            </li>
          ))}
        </ul>

        {/* The board. dt and dd are direct children of the grid, with no
            wrapper div, so the label column and the clause column are the same
            eight columns the band above them sits on. The rules are drawn as
            cell borders rather than as separate elements, so a tall clause
            stretches its own rule with it and a row can never end up with a
            rule that stops short of the column beside it. */}
        <dl className="v4-eng__board v4-grid">
          {TERMS.map((term) => (
            <Fragment key={term.label}>
              <dt className="v4-eng__key">{term.label}</dt>
              <dd className="v4-eng__val">{term.clause}</dd>
            </Fragment>
          ))}
        </dl>

        {/* The board's last rule is the foot's top rule, so the action is a row
            of the board rather than a button parked under it. */}
        <div className="v4-eng__foot v4-grid">
          <ContactCTA className="v4-block v4-eng__cta">{contactLabel()}</ContactCTA>
          <p className="v4-eng__note">
            No forms. Tell us what you need built and the date you need it live.
          </p>
        </div>
      </div>
    </section>
  );
}
