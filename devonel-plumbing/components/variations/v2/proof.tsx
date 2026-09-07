"use client";

/**
 * v2 "Shader Light" - the proof strip.
 *
 * The direction (docs/goal/03-design-research.md section 4, direction 2,
 * layout item 2) draws this section as "five figures on a solid white plinth
 * with a hard edge over the field". Three consequences, all deliberate:
 *
 *   the plinth   one white block, no border, no shadow, zero radius. Its own
 *                cut edge is what separates it from the field, which is the
 *                whole point of a plinth rather than a card.
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
 *   the figures  Fraunces on its display cut, one row at 1180 and above,
 *                3 + 2 from 768, stacked below it. No monospace, per the
 *                direction; the only tabular figure is the 25.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 2: the label, the primary
 * headline, the five counts split at the word that carries the number, the
 * testimonial with its attribution, and the secondary CTA. Two deliberate
 * choices inside that:
 *
 *   the dates    "spec received 11 Aug 2026 and live 27 Aug 2026" is the
 *                sourced line under COPY.md section 1; the two dates are set
 *                here as a dateline joined by a hairline, which is the same
 *                device the hero uses to join its two cities. Because the
 *                dateline prints 27 Aug 2026, the first count's trailing
 *                ", 27 Aug 2026" is not repeated in its caption; no word of
 *                it is changed and nothing is added.
 *   the quote    set in Fraunces ROMAN, not italic. Italic is reserved for
 *                the two live clocks in this direction, so the quote earns
 *                its weight from size alone and the attribution under it
 *                drops to small Geist.
 *
 * The secondary CTA is gated on the case study existing: `sections.ts` is the
 * one place that knows what is built, so this link cannot point at an anchor
 * that is not on the page yet. It appears the moment that section lands.
 */

import { Fragment, type CSSProperties } from "react";
import { sections } from "./sections";
import { CITIES, cityHue, useNow } from "./two-city-field";

/** COPY.md section 2, "Counts, all sourced, no invention", in document order. */
const COUNTS: readonly { figure: string; qualifier?: string; caption: string }[] = [
  {
    figure: "One",
    caption: "product live: a name-pendant studio for a bespoke jewellery house in Dubai",
  },
  { figure: "Sixteen", caption: "days from spec to live" },
  { figure: "Four", caption: "renders per design, the first in about two minutes" },
  { figure: "25", qualifier: "More than", caption: "screens covered in an app store readiness audit" },
  { figure: "Two", caption: "cities: Dubai and Mumbai" },
];

/** COPY.md section 1, Sources: "spec received 11 Aug 2026 and live 27 Aug 2026". */
const DATES: readonly { label: string; value: string; machine: string }[] = [
  { label: "Spec received", value: "11 Aug 2026", machine: "2026-08-11" },
  { label: "Live", value: "27 Aug 2026", machine: "2026-08-27" },
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
          <div>
            <p className="v2-proof__label">Proof of work</p>
            <h2 id="proof-headline" className="v2-proof__headline">
              Shipped, not promised.
            </h2>
          </div>

          <p className="v2-proof__dates">
            {DATES.map((date, index) => (
              <Fragment key={date.machine}>
                {index > 0 ? <span className="v2-proof__span" aria-hidden="true" /> : null}
                <span className="v2-proof__date">
                  <span className="v2-proof__date-label">{date.label}</span>
                  <time className="v2-proof__date-value" dateTime={date.machine}>
                    {date.value}
                  </time>
                </span>
              </Fragment>
            ))}
          </p>
        </header>

        <ul className="v2-proof__figures">
          {COUNTS.map((count) => (
            <li className="v2-proof__figure" key={count.figure + count.caption}>
              <p className="v2-proof__count">
                {count.qualifier ? <span className="v2-proof__qualifier">{count.qualifier}</span> : null}
                {count.figure}
              </p>
              <p className="v2-proof__caption">{count.caption}</p>
            </li>
          ))}
        </ul>

        <figure className="v2-proof__quote">
          <div className="v2-proof__saying">
            <blockquote className="v2-proof__blockquote">
              &ldquo;the layout is very good and simple&rdquo;
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
