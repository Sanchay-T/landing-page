/**
 * v2 "Shader Light" - founders, canonical section 6.
 *
 * Direction 2 (docs/goal/03-design-research.md section 4) draws this section as
 * "two entries", in the direction's own vocabulary of "plinths, not cards:
 * white blocks with no border and no shadow" and "rules replace borders
 * everywhere else". So the section is two plinths and one closing rule.
 *
 *   the plinths  Two --v2-raised blocks side by side from 40rem, stacked below
 *                it so Fraunces never gets squeezed into half a phone. No
 *                border, no shadow, no radius: a plinth is raised by the
 *                hairline above it and separated from the paper by its own cut
 *                edge. Grid stretch puts both on a shared bottom edge as well
 *                as a shared top rule.
 *   the ink      --v2-rule, never --v2-ink. Process established the page's one
 *                piece of line-encoded information: an ink rule is the payment
 *                gate and means money, a --v2-rule hairline is ordinary
 *                separation. Nobody pays anything on this section, so every
 *                line here is a hairline.
 *   the cities   Mumbai and Dubai are set as plain Geist above each name, in
 *                the slot the process plinth gives "Phase 1". The live clocks
 *                and the "1h30 apart" thread belong to the hero and the nav,
 *                which is where the twist is spent; repeating them here would
 *                say the same thing a third time and would put a second timer
 *                on the page for no new information.
 *
 * No portraits, no avatars, no initials, no marks of any kind: the section
 * renders zero images. The imagery rule in docs/goal/03b-round2-brief.md
 * confines every still to a case card and to /work/jewelo, and the direction
 * bans icons outright.
 *
 * No canvas: the page runs exactly one WebGL context and the hero owns it. The
 * section sits on paper with nothing behind it, which is also the only way to
 * keep body copy off a live shader.
 *
 * No motion and nothing hover-gated, matching services and process: the
 * direction spends its one load movement on the field and its one hover on the
 * clocks, so touch, keyboard and mouse read exactly the same section.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 6 and nothing here comes
 * from anywhere else. Two deliberate calls:
 *
 *   - The document writes each founder as "Sanchay Thalnerkar - Mumbai.", one
 *     bold string. The layout splits it into two elements, so the hyphen and
 *     the full stop that joined them are carried by the arrangement instead of
 *     by punctuation. No word is added, removed or reordered.
 *   - The Noora entry is NOT rendered. COPY.md marks it "optional role line,
 *     publish only with her consent [brief 9.6]", and no consent is recorded
 *     anywhere in docs/goal. Publishing it is listed as a named per-section
 *     failure in 03-design-research.md.
 *
 * The round-1 "Per-variation tone" block in COPY.md section 6 is SUPERSEDED and
 * was ignored.
 */

type Founder = {
  /** Stable key; never rendered. */
  id: string;
  /** COPY.md writes "Name - City."; the city and the name are its two halves. */
  city: string;
  name: string;
  /** The role lines under the name, in document order, citations stripped. */
  lines: readonly string[];
};

/** COPY.md section 6, in document order. Noora is omitted; see the note above. */
const FOUNDERS: readonly Founder[] = [
  {
    id: "sanchay",
    city: "Mumbai",
    name: "Sanchay Thalnerkar",
    lines: [
      "Builds the systems: agent harnesses, verification loops, browser automation and generated media pipelines.",
      "Also builds and sells clinic software in Australia and India.",
    ],
  },
  {
    id: "umayr",
    city: "Dubai",
    name: "Umayr Sheik",
    lines: [
      "Relationship and commercial lead.",
      "Owns prompt craft and creative direction, data and analytics, and enterprise AI context.",
    ],
  },
];

export function Founders() {
  return (
    <section id="founders" className="v2-founders" aria-labelledby="founders-headline">
      <header className="v2-founders__head">
        <div className="v2-founders__title">
          <p className="v2-founders__label">Who you work with</p>
          <h2 className="v2-founders__headline" id="founders-headline">
            Two founders. Both of them on your project.
          </h2>
        </div>
        <p className="v2-founders__sub">
          You talk to the people who build the work and price it, from the first message to
          handover.
        </p>
      </header>

      <div className="v2-founders__row">
        {FOUNDERS.map((founder) => (
          <article className="v2-founder" key={founder.id}>
            <p className="v2-founder__city">{founder.city}</p>
            <h3 className="v2-founder__name">{founder.name}</h3>
            <div className="v2-founder__lines">
              {founder.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="v2-founders__close">
        <p className="v2-founders__standing">
          Two cities, one thread, and no layer between you and the people building.
        </p>
      </div>
    </section>
  );
}
