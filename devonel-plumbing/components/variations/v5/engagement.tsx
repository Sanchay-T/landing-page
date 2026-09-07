import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel } from "@/lib/site";

/**
 * v5 engagement.
 *
 * The block a product site would spend on a pricing table, spent instead on
 * the document that actually decides the number. Copy is `docs/goal/COPY.md`
 * section 7, under that section's v5 tone note, which asks for "an engagement
 * table with columns for what you get, when you pay and what it ends with".
 *
 * Four decisions worth writing down:
 *
 * 1. No price, no currency, no "from", no tier name, no monthly-yearly toggle,
 *    and no third column with a border round it. `docs/goal/01-business-brief.md`
 *    section 9.5 sets the default at no numbers, and every failure this section
 *    is named for in `docs/goal/03-design-research.md` section 5 - "tiers that
 *    stack in the wrong order, 'starting at' figures splitting across lines,
 *    comparison table needing horizontal scroll" - is a failure of a pricing
 *    table. There is no pricing table here to fail.
 *
 * 2. So the artefact is a terms document instead. `.v5-spec` from section 14:
 *    square, flat, bordered, no shadow, because the 8px radius and the one
 *    frame shadow mean a real capture and a set of terms is not one. Inside it,
 *    a definition list ruled by hairlines, mono label against clause, in two
 *    groups: what the price fixes and what sits outside it. The pass-through
 *    costs, the optional revenue share and the two paths after launch are in
 *    the second group because that is where a buyer looks for them, and burying
 *    them under the first group would be the move this page exists to avoid.
 *
 * 3. The three binding terms are lifted out of the document and set as three
 *    flat cards, because they are the answer to "what am I signing up to" and a
 *    reader who scans nothing else should still hit them. `docs/goal/COPY.md`
 *    moved the minimum-commitment line out of "what we do not do" on
 *    2026-09-07: it is something Devonel requires, so it sets as a term
 *    alongside the other two rather than as an exclusion. The one genuine
 *    exclusion, "No unpaid multi-month starts", stays with it as its foot.
 *
 * 4. Equal heights at 1024 and up are structural, not tuned: the grid stretches
 *    its items, each card is a two-row grid whose body track is `1fr`, and each
 *    body is a two-row grid whose clause track is `1fr`. The taller card sets
 *    the height, the shorter ones hold the difference above their foot rule, so
 *    the three foot rules line up across the row at every width without a
 *    single fixed dimension.
 *
 * 5. Every rendered sentence is a `docs/goal/COPY.md` sentence, checked line by
 *    line rather than by eye. Two carry a note. "We price the scope, not the
 *    hour." is section 7's headline alternate A, used here as a card clause
 *    rather than as the headline, which stays the primary; COPY.md allows an
 *    alternate in one variation only, and no other variation uses it. The
 *    "after launch" clause joins section 7's retainer line to section 8's
 *    handover sentence, because a buyer reading a terms document needs both
 *    paths in one row and neither half is changed. Nothing here restates a
 *    sentence another v5 section already prints.
 *
 *    The first group had a third row, `scope`, whose clause was a sentence
 *    recombined out of section 3 rather than quoted from anywhere. It is gone
 *    rather than re-sourced: section 3's own sentence is already printed in
 *    full by `#services`, and both surviving clauses name the scope, so the
 *    row was restating what the group's own head already says.
 *
 * No JavaScript, nothing hidden at rest, nothing revealed on scroll: a
 * full-page capture and a reader with scripting off see the identical section.
 */

type Clause = {
  /** Mono label. One or two words, lowercase, in the house register. */
  label: string;
  clause: string;
};

type Group = {
  id: string;
  /** What the column of clauses is. */
  head: string;
  rows: readonly Clause[];
};

/** COPY.md section 7, split by what the fixed price does and does not cover. */
const GROUPS: readonly Group[] = [
  {
    id: "fixed",
    head: "fixed in writing before we start",
    rows: [
      {
        label: "date",
        clause: "Your date comes out of discovery and goes into the scope in writing.",
      },
      {
        label: "price",
        clause: "One price for one written scope.",
      },
    ],
  },
  {
    id: "outside",
    head: "not inside that price",
    rows: [
      {
        label: "model and infrastructure",
        clause: "Model API and infrastructure costs are billed separately, at cost, and itemised.",
      },
      {
        label: "revenue share",
        clause: "Optional, on top of the fee, never instead of it.",
      },
      {
        label: "after launch",
        clause:
          "Either a monthly retainer for running, monitoring, fixes and the next scope, or a handover session and a written list of what runs where.",
      },
    ],
  },
];

type Term = {
  id: string;
  /** The term's name, as a buyer would say it back to you. */
  name: string;
  /** The rule in one sentence. */
  clause: string;
  /** The consequence, sourced, set as the card's closing stamp. */
  foot: string;
};

const BINDING: readonly Term[] = [
  {
    id: "discovery",
    name: "Paid discovery",
    clause: "A small fixed first scope that produces the plan, the date and the price.",
    foot: "Credited against the build.",
  },
  {
    id: "scope",
    name: "Fixed scope",
    clause: "We price the scope, not the hour.",
    foot: "Paid before the phase starts.",
  },
  {
    id: "commitment",
    name: "Minimum commitment",
    clause: "There is a minimum commitment up front on every engagement.",
    foot: "No unpaid multi-month starts.",
  },
];

export function Engagement() {
  return (
    <section id="engagement" className="v5-engagement" aria-labelledby="engagement-title">
      <div className="v5-container">
        <div className="v5-engagement__head">
          <p className="v5-mono v5-eyebrow">How a quote works</p>

          <h2 id="engagement-title" className="v5-engagement__title">
            No prices on this page. Here is exactly how we get to one.
          </h2>

          <p className="v5-lead v5-measure">
            Scope sets the number, so we write the scope first and you pay for that step.
          </p>
        </div>

        {/* The terms document. `.v5-spec` supplies the paper, the border and
            the sunk cap; the two ruled columns below are this section's own. */}
        <div className="v5-spec">
          <p className="v5-spec__cap v5-mono">engagement terms</p>

          <div className="v5-terms__cols">
            {GROUPS.map((group) => (
              <div key={group.id} className="v5-terms__col">
                <h3 className="v5-mono v5-terms__group">{group.head}</h3>

                <dl className="v5-terms__list">
                  {group.rows.map((row) => (
                    <div key={row.label} className="v5-terms__row">
                      <dt className="v5-mono v5-terms__label">{row.label}</dt>
                      <dd className="v5-terms__clause">{row.clause}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>

        {/* The three terms that apply whichever way the work is bought. */}
        <div className="v5-engagement__binding">
          <h3 className="v5-mono v5-engagement__bindhead">Binding on every engagement</h3>

          <ul className="v5-binds">
            {BINDING.map((term) => (
              <li key={term.id} className="v5-spec v5-bind">
                <h4 className="v5-spec__cap v5-mono v5-bind__name">{term.name}</h4>

                <div className="v5-spec__body v5-bind__body">
                  <p className="v5-spec__text">{term.clause}</p>
                  <p className="v5-spec__foot v5-mono">{term.foot}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="v5-engagement__cta">
          <ContactCTA className="v5-btn v5-btn--primary">{contactLabel()}</ContactCTA>
          <p className="v5-engagement__support">Paid discovery, fixed scope, no forms.</p>
        </div>
      </div>
    </section>
  );
}
