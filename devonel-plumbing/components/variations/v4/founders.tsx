/**
 * v4 founders.
 *
 * `docs/goal/03-design-research.md` section 4, direction 4, layout skeleton
 * item 6: "two wide cells, one per founder, city and role". So this is the same
 * board again, two cells wide and one row deep, under the same sticky head the
 * proof, services and process bands use. No new container, no card inside a
 * cell, no icon, no shadow, no cobalt.
 *
 * THE TWIST, APPLIED HERE. Cell size is honesty, so two founders who are both
 * on every engagement get exactly equal area: six of twelve columns each at
 * 1024 and up, stacked below. Making one cell larger would be a claim about
 * seniority that nothing in `docs/goal/COPY.md` supports, and equalising cells
 * is only a lie when the facts behind them are unequal. Here they are not.
 *
 * NO PORTRAITS, NO AVATARS, NO INITIALS BADGES. The direction bans icons on the
 * board, and a circular initial is an icon of a person. A founder cell's visual
 * is a name at display weight, what they build, and the city they build it in.
 *
 * The city sits in the cell's footer band in Geist Mono, the same place and the
 * same face the live cell prints its launch date in: it is the cell's datum.
 * Grid rows stretch, so the two cities land on one baseline across the row.
 * COPY.md section 6 gives no working hours and no timezone for either founder,
 * so neither is printed - an invented offset would be the only unsourced fact
 * on the page.
 *
 * Every visible string is verbatim from COPY.md section 6. Nothing is added.
 */

type Founder = {
  name: string;
  /** COPY.md section 6 prints the city on the founder's own line. */
  city: string;
  /** The role sentences COPY.md gives, one thought per line. */
  roles: string[];
};

const FOUNDERS: readonly Founder[] = [
  {
    name: "Sanchay Thalnerkar",
    city: "Mumbai",
    roles: [
      "Builds the systems: agent harnesses, verification loops, browser automation and generated media pipelines.",
      "Also builds and sells clinic software in Australia and India.",
    ],
  },
  {
    name: "Umayr Sheik",
    city: "Dubai",
    roles: [
      "Relationship and commercial lead.",
      "Owns prompt craft and creative direction, data and analytics, and enterprise AI context.",
    ],
  },
];

export function Founders() {
  return (
    <section
      id="founders"
      className="v4-container v4-band"
      aria-labelledby="v4-founders-head"
    >
      <header className="v4-sticky-head v4-band-head">
        <h2 id="v4-founders-head" className="v4-band-label">
          Who you work with
        </h2>
        <p className="v4-band-line">Two founders. Both of them on your project.</p>
        <p className="v4-band-sub">
          You talk to the people who build the work and price it, from the first message to
          handover.
        </p>
      </header>

      <div className="v4-board v4-board--founders">
        {FOUNDERS.map((founder) => (
          <article key={founder.name} className="v4-cell v4-cell--founder">
            <h3 className="v4-founder-name">{founder.name}</h3>

            <ul className="v4-cell-list v4-founder-roles">
              {founder.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>

            <p className="v4-cell-foot">
              <span className="v4-mono">{founder.city}</span>
            </p>
          </article>
        ))}
      </div>

      {/* COPY.md section 6, "Standing line". It holds for both founders rather
          than belonging to either, so it is a line under the board in the same
          language as the standing lines under the services grid, not a third
          cell that would break the two-equal-cells rule. */}
      <div className="v4-founders-standing">
        <p>Two cities, one thread, and no layer between you and the people building.</p>
      </div>
    </section>
  );
}
