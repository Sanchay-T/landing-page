import { isBuilt } from "./sections";

/**
 * v5 proof strip.
 *
 * A product site's stats bar. The counts are the sourced ones from
 * `docs/goal/COPY.md` section 2 and nothing else: a bordered row with no fill,
 * four cells, numerals on the documented 36/44 stop with mono terms under them.
 * No logos, no client marks, no counters that animate - a digit that reflows
 * while it counts is one of the named failure points in
 * `docs/goal/03-design-research.md` section 5, and tabular figures in a static
 * bar cannot do it.
 *
 * Four cells, never five, so the bar has only three possible arrangements -
 * one across, two across, four across - and no width can leave a ragged row.
 * The fifth sourced count, the two cities, is a place fact rather than a
 * quantity, so it reads as a line under the headline instead of a numeral.
 *
 * The client's quoted sentence is not here. The hero pins it to the screenshot
 * it describes and owns it for the whole page; on a tablet and on an ultrawide
 * both cards were in view at once, so printing it twice read as the same
 * testimonial pasted into two slots. What this card carries is the part the
 * hero does not: who filed the note, and the one complaint that came with it.
 * A section headed "Shipped, not promised." earns the complaint more than it
 * earns a second copy of the praise.
 *
 * It is a logged record, not a testimonial tile: no avatar, no stars, no
 * rating, and no lifted card. `.v5-spec` from tokens.css section 14 - square,
 * flat, bordered, no shadow - because the one radius token and the one shadow
 * token on this page both mean a real capture, and a note is not one.
 */

type Stat = {
  /** The numeral, exactly as sourced. */
  figure: string;
  /** One line, always. What the numeral counts. */
  term: string;
  /** The sourced sentence behind it. */
  note: string;
};

const STATS: readonly Stat[] = [
  {
    figure: "1",
    term: "product live",
    note: "A name-pendant studio for a bespoke jewellery house in Dubai.",
  },
  {
    figure: "16",
    term: "days, spec to live",
    note: "11 Aug 2026 to 27 Aug 2026.",
  },
  {
    figure: "4",
    term: "renders per design",
    note: "The first in about two minutes.",
  },
  {
    figure: "25+",
    term: "screens audited",
    note: "More than 25 screens covered in an app store readiness audit.",
  },
];

export function Proof() {
  const showCaseLink = isBuilt("work");

  return (
    <section id="proof" className="v5-proof" aria-labelledby="proof-title">
      <div className="v5-container v5-proof__inner">
        <div className="v5-proof__head">
          <p className="v5-mono v5-eyebrow">Proof of work</p>

          <h2 id="proof-title" className="v5-proof__title">
            Shipped, not promised.
          </h2>

          <p className="v5-mono v5-proof__where">Two cities: Dubai and Mumbai.</p>
        </div>

        {/* The record. `.v5-spec` supplies the paper, the border and the sunk
            cap; the two lines inside it are this card's own. The date is not
            repeated in the cap: the attribution already dates the note, and the
            bar beside it prints 27 Aug 2026 in full. */}
        <div className="v5-spec v5-proof__record">
          <p className="v5-mono v5-spec__cap">client note</p>

          <div className="v5-spec__body">
            <p className="v5-mono v5-record__who">
              the owner, a bespoke jewellery house in Dubai, on the day the studio went live
            </p>

            <p className="v5-record__line">
              The one complaint was generation time, which is set by the model providers, and we
              said so.
            </p>
          </div>
        </div>

        <ul className="v5-stats">
          {STATS.map((stat) => (
            <li key={stat.term} className="v5-stat">
              <p className="v5-stat__figure">{stat.figure}</p>
              <p className="v5-mono v5-stat__term">{stat.term}</p>
              <p className="v5-stat__note">{stat.note}</p>
            </li>
          ))}
        </ul>

        {/* Sanctioned secondary action, and only once its target exists. */}
        {showCaseLink ? (
          <p className="v5-proof__more">
            <a href="#work" className="v5-textlink">
              See how it was built
            </a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
