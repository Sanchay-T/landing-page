/**
 * Founders: two names at poster scale in chrome on the void, with the city and
 * the role lines set in Geist beneath each.
 *
 * The direction's own words for this section are two names set huge in Archivo
 * Expanded 800 on the void with the city and roles in Geist under them, and no
 * portraits (03-design-research.md section 4, "Direction 5", layout skeleton
 * 6). So the names are the type event and everything else is quiet: no
 * photographs, no avatars, no initials in a circle, no icons, no cards, no
 * shadow, no accent hue. The one piece of structure is a single hairline
 * between the two people.
 *
 * NO PORTRAITS, AND NOT AS A COMPROMISE. This variation has exactly one image
 * budget and the orb spends it. A pair of headshots here would put a second
 * glossy object on a page whose whole argument is that there is only one, and
 * the direction bans it in the same sentence that asks for the names. The
 * substitute for a face is the size of the name.
 *
 * NOORA IS NOT ON THE PAGE. COPY.md section 6 carries a third person, "Noora -
 * Dubai", and marks the role line "publish only with her consent [brief 9.6]".
 * That consent is not recorded anywhere in the goal docs, so the entry is not
 * rendered - not as a placeholder, not as a greyed row, not as a "third
 * founder" note. The headline COPY.md gives this section is "Two founders",
 * which is the same count the page shows, so nothing here has to be reworded
 * to cover the omission. If consent is recorded later, the entry is added to
 * `FOUNDERS` and the layout takes a third column with no other change.
 *
 * NO INVENTED SCOPE CLAIM. Round 1 put "on every project" on these two names.
 * COPY.md section 6 does not say it - its headline says "Both of them on your
 * project" and that sentence is on the page verbatim as the heading, so the
 * claim is made once, in the words that were sourced for it.
 *
 * NAMES SET AS NAMES. `--v5-founders-name` is capped by a 7.2em box on the
 * heading, so every name breaks between the given name and the family name
 * rather than wherever the column happens to run out. Measured in this page's
 * own font stack, Archivo `wdth` 125 / `wght` 800 at -0.02em: "Sanchay
 * Thalnerkar" is 12.02em on one line and "Umayr Sheik" is 7.612em, so without
 * the box the first would wrap at every width in the matrix and the second
 * would not, and the two columns would start their role copy on different
 * lines. The longest single part, "Thalnerkar", is 6.47em, which is inside the
 * box at every size, so the break is always the space and never the glyphs.
 *
 * TWO INKS UNDER THE NAME. The city is `--v5-text` and the roles are
 * `--v5-muted`, which is the same hierarchy `services.tsx` and `process.tsx`
 * use: three sizes, two inks, no rules and no boxes inside the entry. COPY.md
 * sets the name and the city as one line ("Sanchay Thalnerkar - Mumbai."); the
 * page cuts it once so the city can carry the section's other fact, and the
 * two parts read back as the sourced line.
 *
 * NO ENTRANCE. The variation spends its one moment on the orb's environment map
 * building on load. Nothing here moves, hovers, reveals or hides at any width,
 * so this section is byte-identical under `prefers-reduced-motion`.
 */

type Founder = {
  /** The founder's name, set at poster scale. */
  name: string;
  /** The city, as COPY.md sets it, on the line under the name. */
  city: string;
  /** The sourced role lines, one sentence each. */
  roles: readonly string[];
};

/** COPY.md section 6, verbatim and in document order. */
const FOUNDERS: readonly Founder[] = [
  {
    name: "Sanchay Thalnerkar",
    city: "Mumbai.",
    roles: [
      "Builds the systems: agent harnesses, verification loops, browser automation and generated media pipelines.",
      "Also builds and sells clinic software in Australia and India.",
    ],
  },
  {
    name: "Umayr Sheik",
    city: "Dubai.",
    roles: [
      "Relationship and commercial lead.",
      "Owns prompt craft and creative direction, data and analytics, and enterprise AI context.",
    ],
  },
];

/** COPY.md section 6, "Standing line", verbatim. */
const STANDING =
  "Two cities, one thread, and no layer between you and the people building.";

export function Founders() {
  return (
    <section
      className="v5-founders"
      id="founders"
      aria-labelledby="founders-title"
    >
      <div className="v5-band v5-founders__inner">
        <div className="v5-founders__head">
          <h2 className="v5-display v5-founders__title" id="founders-title">
            Two founders. Both of them on your project.
          </h2>
          <p className="v5-founders__subhead">
            You talk to the people who build the work and price it, from the
            first message to handover.
          </p>
        </div>

        <ul className="v5-founders__pair">
          {FOUNDERS.map((founder) => (
            <li className="v5-founders__person" key={founder.name}>
              <h3 className="v5-display v5-founders__name">{founder.name}</h3>
              <p className="v5-founders__city">{founder.city}</p>
              <div className="v5-founders__roles">
                {founder.roles.map((line) => (
                  <p className="v5-founders__role" key={line}>
                    {line}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <p className="v5-founders__standing">{STANDING}</p>
      </div>
    </section>
  );
}
