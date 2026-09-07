import type { CSSProperties } from "react";
import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel } from "@/lib/site";

/**
 * Variation 4 hero - the poster and the map.
 *
 * Copy is docs/goal/COPY.md section 1, tuned to the v4 tone note ("split the
 * headline across two lines, eyebrow becomes a coloured tag"). The headline is
 * COPY.md's hero alternate A, "The studio that ships before it pitches.", taken
 * under the document's own rule that an alternate is for layout pressure: the
 * primary headline is 56 characters and cannot reach the 120px stop in two
 * lines inside a 1440px measure, while the alternate is described in COPY.md as
 * "short enough for a poster" and breaks into two lines of 21 and 18
 * characters. The sixteen-day fact the primary headline carried is not lost; it
 * becomes the timetable below, where both sourced dates are printed.
 *
 * The map is the one place this page spends its boldness. It is a metro
 * diagram of how work moves through the studio: five service lines, each in the
 * ink that service keeps for the rest of the page, running as one corridor
 * through the four phases from COPY.md section 5. The colour inks itself in
 * once on load over a black-cased pencil drawing that is never animated, so the
 * diagram is complete in the DOM, complete under prefers-reduced-motion, and
 * complete in every capture whether or not the ink has run.
 *
 * No client component, no observer, no library: the draw is a CSS transition
 * out of @starting-style on stroke-dashoffset, and the spring is a
 * cubic-bezier. See tokens.css section 4.3 for why it is a transition and not
 * a keyframe animation.
 */

/** COPY.md section 5, the four phases, in order. Stations on the line. */
const PHASES = ["Discovery", "Build", "Launch", "Run"] as const;

/**
 * COPY.md section 3, "The five", in order, with the ink each service keeps for
 * the whole page. The mapping is declared in tokens.css section 1.2; this array
 * only names which line is which so the legend and the map cannot disagree.
 */
const SERVICE_LINES = [
  { n: 1, name: "Customer-facing product studios", ink: "var(--v4-ink-service-1)" },
  { n: 2, name: "Generated product media", ink: "var(--v4-ink-service-2)" },
  { n: 3, name: "Agent systems and harnesses", ink: "var(--v4-ink-service-3)" },
  { n: 4, name: "WhatsApp lead systems", ink: "var(--v4-ink-service-4)" },
  { n: 5, name: "App store readiness", ink: "var(--v4-ink-service-5)", dashed: true },
] as const;

/**
 * COPY.md section 1, "Sources": spec received 11 Aug 2026, live 27 Aug 2026,
 * sixteen days [brief 4.1]. Printed as one segment of a line with a station at
 * each end, which is the hero's proof hook.
 */
const TIMETABLE = [
  { label: "Spec received", value: "11 Aug 2026" },
  { label: "Spec to live", value: "16 days" },
  { label: "Live", value: "27 Aug 2026" },
] as const;

/** Draw order. Each line inks in 90ms after the one above it. */
const DRAW_STEP_MS = 90;

// --------------------------------------------------------------------- map

/* Wide geometry, viewBox 1200 x 250. The five lines enter from the left edge at
   different heights, converge into one corridor by x=140, and run through four
   interchanges to the terminus. */
const WIDE = {
  entryY: [10, 54, 98, 142, 186],
  corridorY: [46, 72, 98, 124, 150],
  stationX: [310, 590, 870, 1150],
  trackEndX: 1190,
  labelY: 214,
} as const;

/* Tall geometry, viewBox 320 x 600, for phones. Same diagram rotated: the
   corridor runs down the left, station names sit beside each interchange so no
   text is ever rotated. The viewBox is 320 wide rather than 360 because the
   widest label, "Discovery" at 26 units, ends at 259: a wider box would leave
   dead space on the right and scale every label down for nothing. At 320 the
   box is 1:1 with the content width of a 360px phone, so 26 units is 26px, and
   larger on anything wider. */
const TALL = {
  corridorX: [26, 52, 78, 104, 130],
  stationY: [90, 230, 370, 510],
  trackEndY: 590,
  labelX: 156,
} as const;

function widePath(index: number) {
  const entry = WIDE.entryY[index];
  const corridor = WIDE.corridorY[index];
  return `M0 ${entry} H100 L140 ${corridor} H${WIDE.trackEndX}`;
}

function tallPath(index: number) {
  return `M${TALL.corridorX[index]} 0 V${TALL.trackEndY}`;
}

/**
 * One service line, four paths, painted back to front.
 *
 *   casing  black, 12 wide, static      the outline of the diagram
 *   pencil  grey, 9 wide, static        the unbuilt line inside the casing
 *   ink     the service colour, 9 wide  the only path that draws itself
 *   gaps    paper, 9 wide, static       the dash punch, service 5 only
 *
 * Only the colour moves. Everything that makes the map a readable diagram is in
 * the static paths, so the map is finished in the DOM, finished under reduced
 * motion, and finished in a screenshot taken at any moment.
 */
function MapLine({
  d,
  index,
  ink,
  dashed,
}: {
  d: string;
  index: number;
  ink: string;
  dashed?: boolean;
}) {
  // The draw is a transition out of @starting-style (tokens.css section 4.3),
  // so the stagger is a transition-delay, carried as a custom property.
  const delay = { "--v4-draw-delay": `${index * DRAW_STEP_MS}ms` } as CSSProperties;

  return (
    <g>
      <path className="v4-map__casing" d={d} strokeWidth={12} />
      <path className="v4-map__pencil" d={d} strokeWidth={9} />
      <path
        className="v4-map__ink v4-draw"
        d={d}
        pathLength={100}
        strokeWidth={9}
        style={{ ...delay, stroke: ink }}
      />
      {dashed ? <path className="v4-map__gaps" d={d} strokeWidth={9} /> : null}
    </g>
  );
}

function WideMap() {
  return (
    <svg
      className="v4-map__svg v4-map__wide"
      viewBox="0 0 1200 250"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      {SERVICE_LINES.map((line, index) => (
        <MapLine
          key={line.n}
          d={widePath(index)}
          index={index}
          ink={line.ink}
          dashed={"dashed" in line ? line.dashed : false}
        />
      ))}
      {PHASES.map((phase, index) => (
        <g key={phase}>
          <rect
            className="v4-map__station"
            x={WIDE.stationX[index] - 13}
            y={32}
            width={26}
            height={132}
            strokeWidth={5}
          />
          <text
            className="v4-map__station-name"
            x={WIDE.stationX[index]}
            y={WIDE.labelY}
            fontSize={34}
            textAnchor="middle"
          >
            {phase}
          </text>
        </g>
      ))}
    </svg>
  );
}

function TallMap() {
  return (
    <svg
      className="v4-map__svg v4-map__tall"
      viewBox="0 0 320 600"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      {SERVICE_LINES.map((line, index) => (
        <MapLine
          key={line.n}
          d={tallPath(index)}
          index={index}
          ink={line.ink}
          dashed={"dashed" in line ? line.dashed : false}
        />
      ))}
      {PHASES.map((phase, index) => (
        <g key={phase}>
          <rect
            className="v4-map__station"
            x={13}
            y={TALL.stationY[index] - 13}
            width={130}
            height={26}
            strokeWidth={5}
          />
          <text
            className="v4-map__station-name"
            x={TALL.labelX}
            y={TALL.stationY[index] + 9}
            fontSize={26}
          >
            {phase}
          </text>
        </g>
      ))}
    </svg>
  );
}

// -------------------------------------------------------------------- hero

export function V4Hero() {
  return (
    <section className="v4-hero" id="hero" aria-labelledby="v4-hero-title">
      <div className="v4-shell">
        {/* COPY.md section 1 eyebrow, set as the coloured tag the v4 tone note
            asks for. Black on red, the only pairing that passes AA on this ink. */}
        <p className="v4-tag">AI product studio and growth partner</p>

        <h1 className="v4-hero__title" id="v4-hero-title">
          <span>The studio that ships</span> <span>before it pitches.</span>
        </h1>

        <p className="v4-hero__lead">
          Devonel builds and runs the software owner-led brands sell with. We shipped a name-pendant
          studio for a bespoke jewellery house in Dubai on the morning of their exhibition stall.
        </p>

        <div className="v4-hero__act">
          <ContactCTA className="v4-block v4-hero__cta">{contactLabel()}</ContactCTA>
          <p className="v4-hero__support">Paid discovery, fixed scope, no forms.</p>
        </div>

        <div className="v4-hero__proof v4-grid">
          <div className="v4-tt">
            <div className="v4-tt__track" aria-hidden="true">
              <span className="v4-tt__dot v4-tt__dot--start" />
              <span className="v4-tt__rule" />
              <span className="v4-tt__dot v4-tt__dot--end" />
            </div>
            <dl className="v4-tt__cells">
              {TIMETABLE.map((cell) => (
                <div className="v4-tt__cell" key={cell.label}>
                  <dt className="v4-tt__label">{cell.label}</dt>
                  <dd className="v4-tt__value">{cell.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <blockquote className="v4-quote">
            <p>&ldquo;the layout is very good and simple&rdquo;</p>
            <footer>the owner, a bespoke jewellery house in Dubai</footer>
          </blockquote>
        </div>

        <figure className="v4-map">
          <WideMap />
          <TallMap />
          {/* Both drawings are aria-hidden, so this list is the map's text
              equivalent. The service names are already read from the visible
              legend below, and the caption is read as the figure caption. */}
          <ol className="v4-sr">
            {PHASES.map((phase) => (
              <li key={phase}>{phase}</li>
            ))}
          </ol>
          <figcaption className="v4-map__caption">
            Four phases. You pay before each one starts.
          </figcaption>
          <ul className="v4-legend">
            {SERVICE_LINES.map((line) => (
              <li className="v4-legend__item" key={line.n}>
                <span
                  className={
                    "dashed" in line && line.dashed
                      ? "v4-legend__chip v4-legend__chip--dashed"
                      : "v4-legend__chip"
                  }
                  style={{ "--v4-legend-ink": line.ink } as CSSProperties}
                />
                {line.name}
              </li>
            ))}
          </ul>
        </figure>
      </div>
    </section>
  );
}
