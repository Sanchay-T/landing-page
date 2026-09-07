import { getSection } from "./sections";

/**
 * Section 6, first light: the two people who do the work.
 *
 * THE BAND WHERE THE GROUND TURNS. `data-stage="first-light"` is the only thing
 * this file says about colour, and it says it to the clock rather than to a
 * paint: on the no-JavaScript and reduced-motion paths the band renders at
 * `--v3-t` 0.62 and everywhere else it travels with the reader's scroll. The
 * direction sets the founders at the moment the ink inverts, so this is the
 * screen on which the page stops being night.
 *
 * A FOUNDER IS A STATION, AND THE CITY SITS WHERE THE DATE SITS. The page has
 * one repeating object - a rule, a name on it, and the day at the rule's right
 * end - and it has already been used at three scales, in the proof band, the
 * services band and the case blocks. A person is not a day of the build, so the
 * slot at the rule's end carries the city instead, and it is set in Geist rather
 * than in the tick bar's tabular mono precisely so it cannot be misread as a
 * date. Same object, different cargo, and the difference is legible.
 *
 * The band's own station rule ends with nothing at all. That is the services
 * band's rule applied one level up: only what the sixteen days actually dated
 * carries a date, and the two founders are not a day. Filling one in to make the
 * column of band headers even would be exactly the invention this page refuses.
 *
 * NO PORTRAITS, NO AVATARS, NO INITIALS, and no map behind the two cities. The
 * only image asset this variation loads anywhere is the one case still in the
 * work band; a face here would be decoration, and the direction bans it.
 *
 * NOORA IS NOT ON THIS PAGE. `docs/goal/COPY.md` section 6 marks her role line
 * "publish only with her consent [brief 9.6]", and no consent is recorded
 * anywhere in this repository. So she is omitted rather than softened, the
 * headline's "Two founders" stays literally true, and the standing line's "Two
 * cities" is true either way because she is in Dubai as well. If consent
 * arrives, she becomes a third station in this same list and nothing else here
 * changes.
 *
 * No CTA in this band. `contact` is not built yet, so a button here would be a
 * dead anchor, and this page's rule is one primary action per screen.
 *
 * Copy is verbatim from COPY.md section 6, bracketed source tags removed. The
 * one edit is structural: COPY writes each founder as "Name - City.", and the
 * layout splits that single phrase across the rule, so neither half keeps the
 * full stop that terminated the whole of it. Server component.
 */

type Founder = {
  /** The name half of COPY's "Name - City." line. */
  name: string;
  /** The city half, which takes the slot the tick bar's date would occupy. */
  city: string;
  /** The first role line, at the promise scale a service entry uses. */
  role: string;
  /** The second role line, one step down, as written. */
  also: string;
};

const founders: readonly Founder[] = [
  {
    name: "Sanchay Thalnerkar",
    city: "Mumbai",
    role: "Builds the systems: agent harnesses, verification loops, browser automation and generated media pipelines.",
    also: "Also builds and sells clinic software in Australia and India.",
  },
  {
    name: "Umayr Sheik",
    city: "Dubai",
    role: "Relationship and commercial lead.",
    also: "Owns prompt craft and creative direction, data and analytics, and enterprise AI context.",
  },
];

/** COPY.md section 6, "Standing line", verbatim. */
const STANDING = "Two cities, one thread, and no layer between you and the people building.";

export function Founders() {
  const section = getSection("founders");

  return (
    <section
      id="founders"
      className="v3-band v3-founders"
      data-stage="first-light"
      aria-labelledby="founders-h"
    >
      <div className="v3-inner">
        <p className="v3-station">
          <span>{section.label}</span>
        </p>

        <h2 className="v3-h2" id="founders-h">
          Two founders. Both of them on your project.
        </h2>

        <p className="v3-lede">
          You talk to the people who build the work and price it, from the first message to
          handover.
        </p>

        <ul className="v3-founders-list" role="list">
          {founders.map((founder) => (
            <li key={founder.name}>
              <div className="v3-service-rule">
                <h3 className="v3-service-name v3-founder-name">{founder.name}</h3>
                <p className="v3-founder-city">{founder.city}</p>
              </div>
              <p className="v3-service-lede">{founder.role}</p>
              <p className="v3-service-detail">{founder.also}</p>
            </li>
          ))}
        </ul>

        <p className="v3-close">{STANDING}</p>
      </div>
    </section>
  );
}
