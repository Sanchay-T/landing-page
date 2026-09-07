import { sections } from "./sections";

/**
 * v1 "Studio Dark" proof band.
 *
 * The direction's second block: a full-bleed panel on the void, hairline top
 * and bottom, five figures in one row split by line verticals, the client
 * quote beneath. It starts below the fold on purpose - the hero's job is to
 * show something being built, and this band's job is to say it was real.
 *
 * A server component. Nothing here is stateful, nothing here animates: the
 * sixteen-tick assembly in the hero is this page's one entrance and the
 * direction says nothing else moves on load.
 *
 * Every string below is COPY.md section 2, kept as written. The five counts
 * are its bullets with the leading number word lifted out into the figure, so
 * the mono digit and its Geist caption read as one sentence in order. The
 * headline is the section's own "Shipped, not promised." and it doubles as the
 * accessible name of the landmark; it is a heading, not an eyebrow, so it is
 * set in the display face at a clear step below the hero and never in mono or
 * caps.
 */

/** The two sourced dates live in the captions, not in a dateline of their own:
 *  27 Aug 2026 is the day the studio went live, and "Briefed on the 11th" is
 *  COPY.md's own dateline wording for the other end of the sixteen days. */
const FIGURES = [
  {
    figure: "1",
    caption: "product live: a name-pendant studio for a bespoke jewellery house in Dubai, 27 Aug 2026",
  },
  { figure: "16", caption: "days from spec to live. Briefed on the 11th." },
  { figure: "4", caption: "renders per design, the first in about two minutes" },
  { figure: "25+", caption: "screens covered in an app store readiness audit" },
  { figure: "2", caption: "cities: Dubai and Mumbai" },
] as const;

/**
 * The secondary CTA points at the case section, and `sections.ts` is the only
 * thing that knows whether that section exists yet. Reading the flag rather
 * than hardcoding the anchor means this link can never be a dead `#href`: the
 * builder who ships the case studies flips `built` and the link appears.
 */
const CASE_ID = "case-studies";

export function Proof() {
  const cases = sections.find((section) => section.id === CASE_ID);

  return (
    <section id="proof" className="v1-proof" aria-labelledby="proof-head">
      <div className="v1-shell">
        <h2 id="proof-head" className="v1-proof__head">
          Shipped, not promised.
        </h2>

        <ul className="v1-proof__figures" role="list">
          {FIGURES.map(({ figure, caption }) => (
            <li key={figure} className="v1-proof__cell">
              <p className="v1-proof__fig">{figure}</p>
              <p className="v1-proof__cap">{caption}</p>
            </li>
          ))}
        </ul>

        <div className="v1-proof__foot">
          <figure>
            <blockquote className="v1-proof__said">
              &ldquo;the layout is very good and simple&rdquo;
            </blockquote>
            <figcaption className="v1-proof__who">
              the owner, a bespoke jewellery house in Dubai, on the day the studio went live
            </figcaption>
          </figure>

          {cases?.built ? (
            <a className="v1-proof__more" href={`#${cases.id}`}>
              See how it was built
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
