"use client";

/**
 * v2 "Shader Light" - the proof strip, canonical section 2.
 *
 * The direction (docs/goal/03-design-research.md section 4, direction 2,
 * layout item 2) draws this section as "five figures on a solid white plinth
 * with a hard edge over the field". Four consequences, all deliberate:
 *
 *   the plinth   one white block, no shadow, no radius, and one 1px ink rule
 *                along its top edge. The rule is what raises it; a border on
 *                four sides would make it a card, which this direction bans.
 *   the field    hero.tsx mounts `TwoCityField` inside `.v2-hero`, which is
 *                `overflow: hidden`, so the shader is hero-only and does not
 *                reach down here. Rather than open a second WebGL context -
 *                the brief allows exactly one per page - this band paints its
 *                own ground from the same two poles in CSS: the `.v2-field`
 *                / `.v2-field__poles` pair from tokens.css, at the same 22%
 *                ceiling, at the same 28% and 62% of the same `--v2-band`, so
 *                the two tinted columns line up with the hero's. The hues are
 *                the live ones, read through `cityHue` from the same module
 *                the hero reads, so the plinth can never sit on a daylit field
 *                while the hero sits on a night one. It is masked top and
 *                bottom so the band ends in paper instead of a seam.
 *   the figures  Fraunces on its display cut, 48px to 64px: one row at 64rem
 *                and above, 3 + 2 from 40rem, stacked below it. No monospace,
 *                per the direction; every figure is tabular so the five sit on
 *                one baseline whatever the numerals.
 *   the dates    both sourced dates are printed in the captions, where they
 *                belong to a number, rather than as a separate dateline that
 *                would answer the section's question a second time. The first
 *                count carries its own trailing "27 Aug 2026" from COPY.md
 *                section 2; "Sixteen" carries "spec received 11 Aug 2026" from
 *                the Sources line under COPY.md section 1, which is the only
 *                place that date is written. Between them the reader can add
 *                sixteen days to 11 Aug and check the claim.
 *
 * Copy is verbatim: the label, the headline, the five counts split at the word
 * that carries the number, the testimonial with its attribution, and the
 * secondary CTA, all from COPY.md section 2, plus the one dated fragment above.
 *
 * The quote is set in Geist at 20-24px, not in Fraunces. Italic is reserved
 * for the two live clocks in this direction, and the plinth already spends its
 * serif on the headline and the five figures; a third display voice under them
 * would be the loudest thing in a section whose job is to be checkable.
 *
 * The secondary CTA is gated on the case study existing: `sections.ts` is the
 * one place that knows what is built, so this link cannot point at an anchor
 * that is not on the page yet.
 *
 * Motion: none of its own. The only movement here is the shared field fade,
 * which `--v2-field-in` collapses to 1ms under `prefers-reduced-motion`.
 */

import { type CSSProperties } from "react";
import { sections } from "./sections";
import { CITIES, cityHue, useNow } from "./two-city-field";

type Count = {
  /** The word or numeral that carries the count. */
  figure: string;
  /** Copy that runs before the figure, set above it so the row keeps one baseline. */
  qualifier?: string;
  caption: string;
  /** A sourced date belonging to this count, printed under its caption. */
  note?: { text: string; machine: string };
};

/** COPY.md section 2, "Counts, all sourced, no invention", in document order. */
const COUNTS: readonly Count[] = [
  {
    figure: "One",
    caption: "product live: a name-pendant studio for a bespoke jewellery house in Dubai",
    note: { text: "27 Aug 2026", machine: "2026-08-27" },
  },
  {
    figure: "Sixteen",
    caption: "days from spec to live",
    note: { text: "spec received 11 Aug 2026", machine: "2026-08-11" },
  },
  { figure: "Four", caption: "renders per design, the first in about two minutes" },
  {
    figure: "25",
    qualifier: "More than",
    caption: "screens covered in an app store readiness audit",
  },
  { figure: "Two", caption: "cities: Dubai and Mumbai" },
];

/** The case study this section's secondary CTA opens, once someone builds it. */
const CASE_STUDIES = sections.find((section) => section.id === "work");

export function Proof() {
  const now = useNow();
  const dubai = cityHue(CITIES.dubai, now);
  const mumbai = cityHue(CITIES.mumbai, now);

  return (
    <section id="proof" className="v2-proof" aria-labelledby="proof-headline">
      <div
        className="v2-field v2-proof__field"
        style={{ "--v2-dubai": dubai, "--v2-mumbai": mumbai } as CSSProperties}
        aria-hidden="true"
        suppressHydrationWarning
      >
        <span className="v2-field__poles" />
      </div>

      <div className="v2-proof__plinth">
        <header className="v2-proof__head">
          <p className="v2-proof__label">Proof of work</p>
          <h2 id="proof-headline" className="v2-proof__headline">
            Shipped, not promised.
          </h2>
        </header>

        <ul className="v2-proof__figures">
          {COUNTS.map((count) => (
            <li className="v2-proof__figure" key={count.figure + count.caption}>
              <p className="v2-proof__count">
                {count.qualifier ? (
                  <span className="v2-proof__qualifier">{count.qualifier}</span>
                ) : null}
                {count.figure}
              </p>
              <p className="v2-proof__caption">{count.caption}</p>
              {count.note ? (
                <p className="v2-proof__note">
                  <time dateTime={count.note.machine}>{count.note.text}</time>
                </p>
              ) : null}
            </li>
          ))}
        </ul>

        <figure className="v2-proof__quote">
          <div className="v2-proof__saying">
            <blockquote className="v2-proof__blockquote">
              &quot;the layout is very good and simple&quot;
            </blockquote>
            <figcaption className="v2-proof__attribution">
              the owner, a bespoke jewellery house in Dubai, on the day the studio went live
            </figcaption>
          </div>

          {CASE_STUDIES?.built ? (
            <a className="v2-proof__more" href={`#${CASE_STUDIES.id}`}>
              See how it was built
            </a>
          ) : null}
        </figure>
      </div>
    </section>
  );
}
