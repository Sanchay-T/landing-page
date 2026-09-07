import { getSection } from "./sections";

/**
 * Section 2, the flash-forward.
 *
 * Every other band on this page sits where the scroll clock puts it. This one
 * does not: it carries `data-clock="flash"`, which pins `--v3-t` to 1 on the
 * band itself, so the ground is full daylight and the ink is full night while
 * the rest of screen two is still dark. The page shows you the morning of
 * 27 Aug before it spends the remaining sections proving how it got there.
 *
 * Because the flash is a hard switch rather than a position on the ramp, it
 * survives every path the clock has - scroll timeline, rAF fallback, the three
 * fixed no-JavaScript bands, and reduced motion - without a second rule. That
 * is also why this band carries no `data-stage`: the stage would be inert.
 *
 * The band reads as a station on the timeline rather than a header: a thin rule
 * with the section on the left and the date it belongs to on the right, in the
 * same tabular mono the tick bar uses for its readout.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 2. The five counts are that
 * section's five bullets with the leading number promoted into the figure, so
 * figure and caption read as one sentence. Nothing here is inferred or rounded.
 *
 * Server component. No client product imagery appears in this band, by rule.
 */
export function Proof() {
  // `See how it was built` points at the case section. Until that section is in
  // the DOM the link would be a dead anchor, so it does not render at all -
  // the same gate the tick bar applies to its ticks.
  const work = getSection("work");

  return (
    <section id="proof" className="v3-band v3-proof" data-clock="flash" aria-labelledby="proof-h">
      <div className="v3-inner">
        <p className="v3-station">
          <span>Proof of work</span>
          <span className="v3-station-date">27 Aug 2026</span>
        </p>

        <h2 className="v3-h2" id="proof-h">
          Shipped, not promised.
        </h2>

        <ul className="v3-counts" role="list">
          <li className="v3-count">
            <p className="v3-figure">1</p>
            <p className="v3-caption">
              product live: a name-pendant studio for a bespoke jewellery house in Dubai
            </p>
          </li>
          <li className="v3-count">
            <p className="v3-figure">16</p>
            <p className="v3-caption">days from spec to live</p>
          </li>
          <li className="v3-count">
            <p className="v3-figure">4</p>
            <p className="v3-caption">renders per design, the first in about two minutes</p>
          </li>
          <li className="v3-count">
            <p className="v3-figure">25+</p>
            <p className="v3-caption">screens covered in an app store readiness audit</p>
          </li>
          <li className="v3-count">
            <p className="v3-figure">2</p>
            <p className="v3-caption">cities: Dubai and Mumbai</p>
          </li>
        </ul>

        <figure className="v3-quote">
          <blockquote>
            <p>&ldquo;the layout is very good and simple&rdquo;</p>
          </blockquote>
          <figcaption className="v3-attrib">
            the owner, a bespoke jewellery house in Dubai, on the day the studio went live
          </figcaption>
        </figure>

        {work.built ? (
          <p className="v3-more">
            <a href="#work">See how it was built</a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
