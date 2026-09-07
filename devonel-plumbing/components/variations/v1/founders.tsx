/**
 * v1 "Studio Dark" founders.
 *
 * The direction's sixth block: two panels, the name big in the display face,
 * the role as lines beneath it, no portraits. The section is the page's second
 * use of the panel surface entry 04 introduced for the case studies - same
 * fill, same hairline, 0 radius, no shadow - so a reader who has learned what a
 * panel means on this page already knows these two blocks are one kind of
 * thing. Panels, not cards.
 *
 * A server component. Nothing here is stateful, nothing is hidden behind hover
 * and nothing moves on load: the sixteen-tick assembly in the hero is this
 * page's one entrance.
 *
 * No portraits, no avatars, no initials, no monogram. The direction says "no
 * portraits needed" and the page carries exactly one piece of art, the mark in
 * the hero; a generated face or a lettered circle here would be the first
 * decoration on the page and the first thing on it that is not a fact.
 *
 * Every string is COPY.md section 6, verbatim, with the bracketed source
 * citations stripped. Four calls worth recording:
 *
 * - Noora is not on this page. COPY.md marks her role line "publish only with
 *   her consent" and nothing in the repo records that consent, so the section
 *   ships the two founders COPY.md publishes unconditionally. It is a one-line
 *   addition to FOUNDERS the day consent is on the record.
 * - COPY.md writes each founder as "Name - City." on one line. The name is set
 *   in the display face and the city is lifted onto its own line under it in
 *   muted, which is the only change made to the copy: the hyphen becomes the
 *   line break it was standing in for, and no word is added or dropped.
 * - There is no "on every project" line here. COPY.md prints that phrase only
 *   inside the superseded round-1 note for a different variation, so it is not
 *   available text. The heading says the same thing in COPY.md's own words,
 *   and the services standing lines already carry "both founders, on every
 *   engagement, from the first message".
 * - COPY.md's own section label, "Who you work with", is not rendered. It
 *   would have to sit as an eyebrow above the heading, and a mono or caps
 *   eyebrow is a named tell in this direction - the same call the proof band
 *   made with "Proof of work", services made with "What you buy" and process
 *   made with "How we work". The heading carries the section instead.
 *
 * There is no CTA in this block. The page has one primary action and it is the
 * lamp-filled button in the hero; COPY.md's CTA alternates for this section are
 * offered, not required, and a second button here would put two calls to action
 * on one screen with the engagement section directly below.
 */

/** name   the founder, in the display face, the biggest type in the section
 *  city   COPY.md's city, lifted out of the name line and set in muted
 *  role   what they do on your project, the lead of the panel's prose
 *  also   the rest of COPY.md's entry, one step down in muted */
const FOUNDERS = [
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
] as const;

export function Founders() {
  return (
    <section id="founders" className="v1-founders" aria-labelledby="founders-head">
      <div className="v1-shell">
        <h2 id="founders-head" className="v1-founders__head">
          Two founders. Both of them on your project.
        </h2>
        <p className="v1-founders__sub">
          You talk to the people who build the work and price it, from the first message to handover.
        </p>

        <ul className="v1-founders__row" role="list">
          {FOUNDERS.map(({ name, city, role, also }) => (
            <li key={name} className="v1-panel v1-founders__panel">
              <h3 className="v1-founders__name">{name}</h3>
              <p className="v1-founders__city">{city}</p>
              <div className="v1-founders__roles">
                <p className="v1-founders__role">{role}</p>
                <p className="v1-founders__also">{also}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* COPY.md's standing line. It closes the section on space rather than
            on a rule, the same call the proof band made under its figure row,
            services made under its last row and process made under its gauge. */}
        <p className="v1-founders__standing">
          Two cities, one thread, and no layer between you and the people building.
        </p>
      </div>
    </section>
  );
}
