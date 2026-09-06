import { ColumnRules } from "./hero";

/**
 * The two people, and their initials in place of portraits.
 *
 * Every string is verbatim from docs/goal/COPY.md section 6. Nothing about
 * employers, revenue or anything on the never-publish list appears here, and
 * the third name COPY.md carries is consent-gated and still open, so it is not
 * on this page at all.
 */
const FOUNDERS = [
  {
    initial: "S",
    name: "Sanchay Thalnerkar",
    city: "Mumbai",
    roles: [
      "Builds the systems: agent harnesses, verification loops, browser automation and generated media pipelines.",
      "Also builds and sells clinic software in Australia and India.",
    ],
  },
  {
    initial: "U",
    name: "Umayr Sheik",
    city: "Dubai",
    roles: [
      "Relationship and commercial lead.",
      "Owns prompt craft and creative direction, data and analytics, and enterprise AI context.",
    ],
  },
] as const;

/**
 * The staff box.
 *
 * A newspaper prints its people on the editorial page in a ruled, centred box
 * under the imprint line, so that is the form this section takes. The head and
 * the standing line centre from the same 45rem breakpoint the nameplate centres
 * at, which makes this block read as the masthead's twin near the foot of the
 * page; the bylines between them stay left aligned, because they are copy.
 *
 * There is no founder photography in this repo and none is invented, so the
 * portrait slot is filled the way print fills it: a large initial in the
 * display cut of the same serif, hanging in its own column beside the name. It
 * is a printed initial, not an avatar, so it carries no fill, no ring and no
 * box, and it is hidden from screen readers, which already have the name.
 *
 * No CTA sits here on purpose. This is the trust block that warms the reader up
 * before the engagement section, and COPY.md pins one primary CTA wording that
 * the masthead, the hero and the closing sections already carry.
 */
export function V1Founders() {
  return (
    <section id="founders" className="v1-founders">
      <ColumnRules />

      <div className="v1-founders__inner v1-shell">
        <div className="v1-founders__head">
          <p className="v1-kicker">Who you work with</p>

          <h2 className="v1-storyhead v1-founders__title">
            Two founders. Both of them on your project.
          </h2>

          <p className="v1-deck v1-founders__deck">
            You talk to the people who build the work and price it, from the first message to
            handover.
          </p>
        </div>

        <ul className="v1-grid v1-founders__box">
          {FOUNDERS.map((founder) => (
            <li key={founder.name} className="v1-byline v1-reveal">
              <p className="v1-byline__initial" aria-hidden="true">
                {founder.initial}
              </p>

              <div className="v1-byline__id">
                <h3 className="v1-byline__name">{founder.name}</h3>
                <p className="v1-dateline v1-byline__city">{founder.city}</p>
              </div>

              <div className="v1-prose v1-byline__roles">
                {founder.roles.map((role) => (
                  <p key={role}>{role}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* The imprint: the line a paper sets under its staff box. */}
        <div className="v1-founders__imprint">
          <p className="v1-founders__standing">
            Two cities, one thread, and no layer between you and the people building.
          </p>
        </div>

        <div className="v1-folio v1-folio--ruled v1-founders__folio">
          <span>Who you work with</span>
          <span className="v1-folio__n">6</span>
        </div>
      </div>
    </section>
  );
}
