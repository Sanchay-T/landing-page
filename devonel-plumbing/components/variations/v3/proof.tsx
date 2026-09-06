import type { CSSProperties } from "react";
import Image from "next/image";
import { sections } from "./sections";

/** Same hand-staggered entrance the hero uses: three beats, floor 0.6, so a
 *  capture taken mid-flight still shows every line. */
const delay = (ms: number) => ({ "--v3-enter-delay": `${ms}ms` }) as CSSProperties;

/** docs/goal/ASSET-INVENTORY.md, `pendant-dark-silver` row: the "dark mood" of
 *  the four-view set, which is the set the count of four is about. The hero
 *  already carries the gold render, so the silver one keeps the two frames from
 *  reading as the same photograph twice. Brand free on purpose.
 *
 *  The `@2x` file is the source rather than the 1x because next/image builds
 *  the srcset itself and can only ever scale down: the plate is 1044 CSS px
 *  wide at 2560, and the 1x file tops out at 561, which was measurably soft.
 *  The 2x file is 1122x1402 at 51 KB, well inside the 400 KB image budget. */
const PLATE = "/media/jewelo/pendant-dark-silver@2x.webp";
const PLATE_ALT =
  "A silver name pendant resting on black velvet, lit as a dark editorial still";

/**
 * COPY.md section 2, "Counts, all sourced, no invention".
 *
 * Two of the five are set as numerals here, which is exactly what COPY.md's own
 * per-variation note asks of Nightshift: "only two counts survive, sixteen days
 * and four renders". The other three are on the page as sentences, above and
 * below the numerals, so nothing sourced is dropped.
 */
const COUNTS = [
  { value: "16", note: "days from spec to live" },
  { value: "4", note: "renders per design, the first in about two minutes" },
] as const;

/**
 * Variation 3 - the proof section.
 *
 * A title card, which is the one form this variation had left after the hero
 * took the film frame: black ground, two amber numerals cut big in Fraunces,
 * captions in Geist, and one dark editorial still bleeding off the right edge.
 *
 * Two decisions worth writing down.
 *
 * The client quote is not repeated here. COPY.md prints the same sentence in
 * section 1 and section 2, and `hero.tsx` already carries it verbatim on the
 * hero's baseline rule, one section above. Printing it twice inside one screen
 * of scroll would read as a bug, so the hero keeps the testimonial and this
 * section keeps the counts, which is the split 03-design-research section 3
 * item 2 describes.
 *
 * The two dates are here, but as a measurement rather than a restatement. The
 * hero says them as a sentence, "Spec received ... Live ..."; here they are the
 * bare ends of the rule the sixteen spans, with the numeral sitting under the
 * first of them. That shows where the number comes from instead of printing the
 * hero's line again one screen further down, which is what it looked like when
 * this block carried the same two words the hero does.
 *
 * The numerals cannot reflow: the row is an equal-column grid with two items,
 * so a count going from one digit to three changes nothing around it, and the
 * figures ask for a tabular set on top of that.
 */
export function V3Proof() {
  /** The secondary CTA only exists while the section it points at does, so this
   *  variation can never ship a dead anchor while the page is being built out. */
  const caseStudyBuilt = sections.some((section) => section.id === "work" && section.built);

  return (
    <section className="v3-proof" id="proof">
      <div className="v3-shell">
        <div className="v3-grid v3-proof__inner">
          <div className="v3-proof__head v3-enter">
            <p className="v3-eyebrow">Proof of work</p>
            <h2 className="v3-proof__title">Shipped, not promised.</h2>
            <p className="v3-lead v3-measure v3-proof__lead">
              One product live: a name-pendant studio for a bespoke jewellery house in Dubai.
            </p>
          </div>

          <figure className="v3-proof__plate v3-enter" style={delay(90)}>
            <Image
              src={PLATE}
              alt={PLATE_ALT}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="v3-proof__still"
            />
          </figure>

          <div className="v3-proof__body v3-enter" style={delay(180)}>
            <p className="v3-proof__dates">
              <span className="v3-proof__date">11 August 2026</span>
              <span className="v3-proof__span" aria-hidden="true" />
              <span className="v3-proof__to">to</span>
              <span className="v3-proof__date">27 August 2026</span>
            </p>

            <ul className="v3-proof__counts">
              {COUNTS.map((count) => (
                <li className="v3-proof__count" key={count.value}>
                  <span className="v3-proof__num">{count.value}</span>
                  <span className="v3-proof__note">{count.note}</span>
                </li>
              ))}
            </ul>

            <ul className="v3-proof__also">
              <li>More than 25 screens covered in an app store readiness audit.</li>
              <li>Two cities: Dubai and Mumbai.</li>
            </ul>

            {caseStudyBuilt ? (
              <a className="v3-proof__more" href="#work">
                See how it was built
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
