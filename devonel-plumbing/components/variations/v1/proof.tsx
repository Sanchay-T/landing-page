/**
 * The ledger strip.
 *
 * Buyer question: is any of this live, and did a real client pay for it?
 *
 * A broadsheet answers that with a table, not with a badge, so this is one: an
 * ink rule over it, hairlines between the entries, figures in tabular numerals
 * so the column reads down as a column. Every figure and every note is
 * docs/goal/COPY.md section 2, split into the three cells a market table sets
 * it in. Nothing is enclosed, because a ledger is rules and whitespace.
 *
 * The v1 tone note asks for the counts as a folio row with hairline rules
 * between them and no boxes, which is the wide layout below. Five is prime, so
 * the table is one entry per row on a phone and a tablet and five across from
 * the broadsheet width, and never anything in between: any two, three or four
 * column arrangement of five entries breaks into a ragged last row.
 *
 * The client's words are not repeated here. COPY.md places the same sentence in
 * this section and in the hero, and on a laptop the hero pull-quote is still on
 * screen when this table arrives, so running it twice would weaken it. The hero
 * carries the testimonial; this section carries the counts, which is the split
 * docs/goal/03-design-research.md section 3 item 2 recommends.
 */
export function V1Proof() {
  return (
    <section id="proof" className="v1-proof">
      <div className="v1-shell">
        <div className="v1-grid v1-proof__top">
          <header className="v1-proof__head">
            <p className="v1-kicker">Proof of work</p>
            <h2 className="v1-display v1-proof__title">Shipped, not promised.</h2>
          </header>

          {/* The only sanctioned secondary action on the page, set as a
              pointer at the foot of the outer columns the way a paper points
              at the story a table belongs to. Running text rather than a third
              uppercase label: the kicker and the folio already carry the two
              caps lines this section is allowed. */}
          <p className="v1-proof__more">
            <a className="v1-textlink v1-underline" href="#work">
              See how it was built
            </a>
          </p>
        </div>

        <dl className="v1-figures v1-reveal">
          {FIGURES.map((figure) => (
            <div key={figure.term} className="v1-figures__row">
              <dt className="v1-figures__n">{figure.n}</dt>
              <dd className="v1-figures__term">{figure.term}</dd>
              <dd className="v1-figures__note">{figure.note}</dd>
            </div>
          ))}
        </dl>

        <div className="v1-folio v1-folio--ruled v1-proof__folio">
          <span>Proof of work</span>
          <span className="v1-folio__n">2</span>
        </div>
      </div>
    </section>
  );
}

/**
 * The five counts from docs/goal/COPY.md section 2, "Counts, all sourced, no
 * invention". Each one is split figure / unit / note so the table has a column
 * of numerals to line up and a column of words that never wraps. No count is
 * rounded, softened or added to.
 */
const FIGURES: readonly { n: string; term: string; note: string }[] = [
  {
    n: "1",
    term: "Product",
    note: "A name-pendant studio for a bespoke jewellery house in Dubai, live 27 Aug 2026",
  },
  { n: "16", term: "Days", note: "Spec to live" },
  { n: "4", term: "Renders", note: "Per design, the first in about two minutes" },
  { n: "25+", term: "Screens", note: "Covered in an app store readiness audit" },
  { n: "2", term: "Cities", note: "Dubai and Mumbai" },
];
