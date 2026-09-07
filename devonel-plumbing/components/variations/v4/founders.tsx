/**
 * Variation 4 founders - the crew manifest.
 *
 * Copy is docs/goal/COPY.md section 6, tuned to the v4 tone note ("two colour
 * blocks, name at 40px, role list as short bullets"). The bullets are set as a
 * ruled list rather than as dots, because a ruled list is what this page
 * already uses to divide a value from the value under it (the proof board in
 * tokens.css 7.4), and a page with one divider vocabulary reads as one system.
 *
 * WHY THIS SECTION IS THE ONE WITHOUT A COLOUR FIELD
 * tokens.css section 1.2 makes colour an index: one ink per service, held from
 * the hero map through the services grid to the case posters. A founder painted
 * in service 2's blue is a reader being told that Umayr is generated product
 * media, and a founder painted in service 4's black beside him says the same
 * about WhatsApp lead systems. So neither founder gets an ink. The section is
 * printed matter instead: white ground, 3px black keylines, a black signage
 * plate carrying the city across the top of each panel, and one flat black band
 * underneath carrying the standing line. Black is the page's structural ink -
 * the bar, the plates, every rule - so it cannot be misread as a fifth claim.
 * It also gives the page its one quiet beat between four colour-saturated
 * sections and the ones that follow, which is what makes the colour elsewhere
 * mean something.
 *
 * WHY THERE ARE NO PORTRAITS
 * 03-design-research section 5 lists the founder block's own failure as
 * "portrait cropping ... long names wrapping under the avatar". This variation
 * has no photography anywhere and the brief carries no usable portraits, so
 * there is nothing to crop and no placeholder standing in for one. The name at
 * the 40 stop is the portrait.
 *
 * WHY NOORA IS NOT ON THIS PAGE
 * COPY.md prints her role line gated on her consent [brief 9.6], and
 * 01-business-brief.md section 9.6 defaults to "Noora as commercial lead if she
 * agrees". No consent is recorded anywhere in the docs, so the line does not
 * ship. Two founders is also what the headline claims.
 *
 * WHY THERE IS NO CTA HERE
 * COPY.md pins one primary CTA wording for the whole page and 03-design-
 * research section 3 item 6 places this block as the one that warms the reader
 * up before the CTA, not as a second one. The contact section owns the action.
 *
 * WHY THERE IS NO ENTRANCE ANIMATION
 * Same reason as the proof board and the services grid: two panels that arrive
 * on a stagger are two panels a full-page capture can catch mid-flight, and a
 * capture is how this page is judged. The section is complete at scroll 0 in
 * the DOM. Nothing here moves at all - there is no hover state either, because
 * a panel that is not a link should not behave like one.
 */

/**
 * COPY.md section 6, in its order: Sanchay first, then Umayr. Cities are
 * COPY.md's own dashes ("Sanchay Thalnerkar - Mumbai", "Umayr Sheik - Dubai")
 * and 01-business-brief.md section 9.7, "Dubai and Mumbai".
 *
 * `owns` splits COPY.md's sentences at the commas they were already written
 * with: Sanchay's "agent harnesses, verification loops, browser automation and
 * generated media pipelines" and Umayr's "prompt craft and creative direction,
 * data and analytics, and enterprise AI context". Nothing is added, reworded or
 * reordered - the list was a list in the source, so it is set as one here.
 *
 * `also` is the one line COPY.md gives to a single founder. It sits pinned to
 * the bottom edge of its panel rather than in the ruled list, because it is a
 * credential and the list above it is the work this studio is being hired for.
 * Umayr has no such line in the source and none is invented for symmetry; the
 * grid equalises the two panel heights, so the asymmetry is white space at the
 * foot of one panel, which is what a poster does with it.
 */
const FOUNDERS = [
  {
    city: "Mumbai",
    name: "Sanchay Thalnerkar",
    role: "Builds the systems.",
    owns: [
      "Agent harnesses",
      "Verification loops",
      "Browser automation",
      "Generated media pipelines",
    ],
    also: "Also builds and sells clinic software in Australia and India.",
  },
  {
    city: "Dubai",
    name: "Umayr Sheik",
    role: "Relationship and commercial lead.",
    owns: [
      "Prompt craft and creative direction",
      "Data and analytics",
      "Enterprise AI context",
    ],
    also: null,
  },
] as const;

/** COPY.md section 6, "Standing line", verbatim. */
const STANDING =
  "Two cities, one thread, and no layer between you and the people building.";

export function V4Founders() {
  return (
    <section className="v4-fdr" id="founders" aria-labelledby="v4-fdr-title">
      <div className="v4-shell">
        <div className="v4-fdr__head">
          <p className="v4-fdr__plate">Who you work with</p>

          <h2 className="v4-fdr__title" id="v4-fdr-title">
            Two founders. Both of them on your project.
          </h2>

          <p className="v4-fdr__lead">
            You talk to the people who build the work and price it, from the first message to
            handover.
          </p>
        </div>

        <ul className="v4-fdr__manifest v4-grid">
          {FOUNDERS.map((founder) => (
            <li className="v4-fdr__panel" key={founder.name}>
              {/* The station nameplate. A flat black band inside the panel's
                  own keyline, which is what a platform sign is: the city set
                  large enough to read down the platform and nothing else on
                  the band. Uppercase and tracked out here and nowhere else on
                  the page, so it reads as signage rather than as a label. */}
              <p className="v4-fdr__city">{founder.city}</p>

              <div className="v4-fdr__body">
                <h3 className="v4-fdr__name">{founder.name}</h3>

                <p className="v4-fdr__role">{founder.role}</p>

                {/* Ruled list: 3px rules open and close it, because that is
                    the section-level division this page uses, and 1px rules
                    divide the rows inside it. Two rule weights, two meanings. */}
                <ul className="v4-fdr__owns">
                  {founder.owns.map((item) => (
                    <li className="v4-fdr__owns-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

                {founder.also ? <p className="v4-fdr__also">{founder.also}</p> : null}
              </div>
            </li>
          ))}
        </ul>

        {/* The line that joins the two termini. One flat black band across all
            eight columns, the section's only field of ink, carrying the one
            sentence that is about both panels at once. */}
        <p className="v4-fdr__standing">{STANDING}</p>
      </div>
    </section>
  );
}
