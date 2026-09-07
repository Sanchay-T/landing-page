/**
 * Variation 4 services - the five lines, one block each.
 *
 * Copy is docs/goal/COPY.md section 3, tuned to the v4 tone note ("bento grid,
 * one flat colour per service, and that colour follows the service everywhere
 * else on the page"). The note is read as five flat blocks of ink on the white
 * ground, each block being one segment of that service's metro line cut out of
 * the hero map and enlarged: the line runs across the top of the block as a
 * thick stub, the line number sits under it in a keyline shield, and the rest
 * of the block is what you actually get when you buy that line.
 *
 * WHAT THIS SECTION ADDS THAT THE HERO DOES NOT
 * The hero legend already prints the five names against their inks, so a grid
 * that printed name plus colour again would be the legend at four times the
 * size. Everything below the name here is new: the promise, the deliverables,
 * and the three standing lines that answer who is on the work, how the duration
 * is set, and when Devonel will tell you not to build. The colour and the line
 * number are the only things repeated, and they are repeated on purpose - they
 * are the index that ties this section to the map above it and to the case
 * posters below it.
 *
 * WHY THERE IS NO PER-SERVICE "WHO IT IS FOR" LINE
 * COPY.md does not carry one. It answers the question once for all five, in the
 * standing lines under the grid ("Who is on it: both founders, on every
 * engagement, from the first message"), so that is where it is printed. Writing
 * five audience lines would mean inventing five facts the brief does not have.
 *
 * WHY THERE IS NO ENTRANCE ANIMATION
 * Same reason as the proof board. Five blocks that arrive on a stagger are five
 * blocks that a full-page capture can catch mid-flight, and a capture is how
 * this page is judged. The section is complete at scroll 0 in the DOM; the only
 * motion is the 4px block shift on hover, which is the variation's hover
 * primitive and collapses under prefers-reduced-motion.
 */

/**
 * COPY.md section 3, "The five", verbatim and in order. `n` is both the copy's
 * numbering and the line number on the hero map, and it selects the ink through
 * `.v4-svc__block--n` in tokens.css section 9; the mapping itself lives in
 * tokens.css section 1.2 so this file never names a colour.
 *
 * Service 5 rides service 1's red, the way a metro map runs a shuttle on the
 * parent line's colour, and is told apart by a dashed stub rather than by a
 * second red.
 */
const SERVICES = [
  {
    n: 1,
    name: "Customer-facing product studios",
    promise: "Let your customer design the thing before they buy it.",
    lines: [
      "A web app they configure, preview and order in, with the quote issued and accepted in the same screen.",
      "Not a customisation field bolted onto a store page.",
    ],
  },
  {
    n: 2,
    name: "Generated product media",
    promise: "Product images and video without a shoot for every variant.",
    lines: [
      "On-brand stills and video that hold the same person, the same brand voice and the local language.",
      "Four finished renders per pendant design on the live studio, the first in about two minutes.",
    ],
  },
  {
    n: 3,
    name: "Agent systems and harnesses",
    promise: "Automation you can watch working.",
    lines: [
      "Agents with verification loops, browser control and telemetry, so you see what ran and what failed.",
      "It is the same harness this studio runs its own build work on.",
    ],
  },
  {
    n: 4,
    name: "WhatsApp lead systems",
    promise: "A number that answers while the lead is still warm.",
    lines: [
      "Qualify, answer and hand over on the channel your customers already use, wired to the inbox or tool you already pay for.",
    ],
  },
  {
    n: 5,
    name: "App store readiness",
    promise: "Find what will fail review before you submit.",
    dashed: true,
    lines: [
      "One audit across screens, billing, notification scheduling, privacy and store policy, with the blockers listed in the order they will bite.",
    ],
  },
] as const;

/** COPY.md section 3, "Standing lines under the grid", verbatim and in order. */
const STANDING = [
  "Who is on it: both founders, on every engagement, from the first message.",
  "Duration is fixed in discovery and written into the scope, not estimated on a call.",
  "Buy versus build: if you should buy something off the shelf instead, we say so in discovery.",
] as const;

export function V4Services() {
  return (
    <section className="v4-svc" id="services" aria-labelledby="v4-svc-title">
      <div className="v4-shell">
        <div className="v4-svc__head">
          <p className="v4-svc__plate">What you buy</p>

          <h2 className="v4-svc__title" id="v4-svc-title">
            Five things we build.
          </h2>

          <p className="v4-svc__lead">
            Each one is scoped, dated and priced in paid discovery before a line of code is written.
          </p>
        </div>

        <ul className="v4-svc__grid v4-grid">
          {SERVICES.map((service) => (
            <li className={`v4-svc__block v4-svc__block--${service.n}`} key={service.n}>
              <div className="v4-svc__body">
                {/* The line itself, printed across the top of its own block and
                    inset by the block's padding so the ink of the block runs
                    all the way round it. Drawn in currentColor: black on the
                    yellow and red blocks, paper on the blue and black ones.
                    Flush to the block's top edge, which is where this started,
                    the paper stubs were white on the white page and the two
                    blocks that need a line hardest had none. */}
                <span
                  className={
                    "dashed" in service && service.dashed
                      ? "v4-svc__stub v4-svc__stub--dashed"
                      : "v4-svc__stub"
                  }
                  aria-hidden="true"
                />

                <p className="v4-svc__number">
                  <span className="v4-sr">Line </span>
                  {service.n}
                </p>

                <h3 className="v4-svc__name">{service.name}</h3>

                <p className="v4-svc__promise">{service.promise}</p>

                <ul className="v4-svc__lines">
                  {service.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        {/* The three answers that hold for all five lines. Printed as the
            grid's footnote rail, on the same columns the last row of blocks
            uses, so the section closes on the grid it opened on. */}
        <ul className="v4-svc__standing v4-grid">
          {STANDING.map((line) => (
            <li className="v4-svc__standing-item" key={line}>
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
