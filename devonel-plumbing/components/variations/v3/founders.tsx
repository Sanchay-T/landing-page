import type { CSSProperties } from "react";

/** The entrance primitive, staggered by hand so the sequence reads top to
 *  bottom. Every step starts from a visible 0.6 opacity, never from 0, so a
 *  capture taken mid-flight still shows the whole section. */
const delay = (ms: number) => ({ "--v3-enter-delay": `${ms}ms` }) as CSSProperties;

type V3Founder = {
  /** The credit glyph that stands where a portrait would. aria-hidden: it is
   *  the first letter of the name printed directly under it. */
  initial: string;
  /** COPY.md's name, exactly as written. */
  name: string;
  /** The city from the same line of COPY.md. */
  place: string;
  /** The role and trust lines under the name, COPY.md's order and wording. */
  lines: readonly string[];
};

/**
 * COPY.md section 6, verbatim. Two founders only: the third role line in that
 * section is gated on the person's consent and is not marked approved in
 * docs/goal/COPY.md, so it is not written here at all.
 */
const FOUNDERS: readonly V3Founder[] = [
  {
    initial: "S",
    name: "Sanchay Thalnerkar",
    place: "Mumbai",
    lines: [
      "Builds the systems: agent harnesses, verification loops, browser automation and generated media pipelines.",
      "Also builds and sells clinic software in Australia and India.",
    ],
  },
  {
    initial: "U",
    name: "Umayr Sheik",
    place: "Dubai",
    lines: [
      "Relationship and commercial lead.",
      "Owns prompt craft and creative direction, data and analytics, and enterprise AI context.",
    ],
  },
];

/**
 * Variation 3 - the founders, set as the film's end credits.
 *
 * The variation's picture is the hero frame, and there is no founder
 * photograph anywhere in this repo, so this section does not pretend to one:
 * no portrait, no avatar, no silhouette, no stock face. What stands in the
 * portrait's slot is the credit glyph, a single Fraunces letter glowing faintly
 * amber, which is the one place on the page besides the CTA that is allowed to
 * glow. It is aria-hidden, because the name it belongs to is printed directly
 * under it.
 *
 * Two credits, no cards: they are three columns each of the shared six column
 * grid from 768px and full width below it, and the only rules on the block are
 * the one the credit slate sits on and the one the closing line sits on. The
 * two glyphs, not a border, are what make the split legible.
 *
 * The city under each name is the one place on this page where the cold blue
 * carries type. It is set in small caps so a blue line that is not a link
 * cannot be read as one.
 *
 * Nothing here hovers and nothing here links. The section answers "who am I
 * hiring", and the page carries one CTA wording which the bar above already
 * holds, so this block sends the reader on with a sentence rather than a
 * second button.
 */
export function V3Founders() {
  return (
    <section className="v3-founders" id="founders">
      <div className="v3-shell">
        <p className="v3-eyebrow v3-enter">Who you work with</p>

        <h2 className="v3-h2 v3-h2--stack v3-enter" style={delay(60)}>
          Two founders. Both of them on your project.
        </h2>

        <p className="v3-lead v3-founders__lead v3-enter" style={delay(120)}>
          You talk to the people who build the work and price it, from the first message to
          handover.
        </p>

        <p className="v3-founders__slate v3-enter" style={delay(180)}>
          You work directly with the builders.
        </p>

        <ul className="v3-grid v3-founders__credits" role="list">
          {FOUNDERS.map((founder, i) => (
            <li
              className="v3-founders__credit v3-enter"
              key={founder.name}
              style={delay(240 + i * 90)}
            >
              <p className="v3-founders__initial" aria-hidden="true">
                {founder.initial}
              </p>
              <h3 className="v3-founders__name">{founder.name}</h3>
              <p className="v3-founders__place">{founder.place}</p>
              <div className="v3-founders__lines">
                {founder.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <div className="v3-founders__foot v3-enter" style={delay(420)}>
          <p className="v3-founders__standing">
            Two cities, one thread, and no layer between you and the people building.
          </p>
        </div>
      </div>
    </section>
  );
}
