/**
 * Services: the five things Devonel builds, set as five names at poster scale
 * on the void with their sourced copy beside them.
 *
 * The direction's own words for this section are five names in Archivo
 * Expanded 800 as a vertical stack on the void, each with its paragraph in
 * Geist, and one hairline between rows (03-design-research.md section 4,
 * "Direction 5"). So the names are the type event and everything else in the
 * section is quiet: no numbering, no icons, no cards, no sliver, no lamp, no
 * accent hue. The proof band above this one is steel; this section drops back
 * to the void, and that value change is the only separation the two need.
 *
 * NOT A SEQUENCE. The five are a menu, not a process, so they carry no 01/02/03
 * markers. Numbering here would say "do these in order", which is false: a
 * buyer arrives wanting one of them. COPY.md numbers them only to keep the
 * document readable; the page renders them as a list.
 *
 * DEVONEL IS THE SUBJECT. Every line here is about what the studio builds, and
 * the two client facts that appear ("Four finished renders per pendant design
 * on the live studio", "the channel your customers already use") are quoted
 * from COPY.md as evidence of the studio's work. No client render, no client
 * UI still and no client name is on this section - the imagery rule in
 * 03b-round2-brief.md keeps those inside the case cards and on /work/jewelo.
 *
 * THREE VOICES, ONE PER STEP. Each service is a name, then the one-line promise
 * COPY.md sets under it, then the detail sentences. The promise is set in
 * `--v5-text` and the details in `--v5-muted`, which is the whole hierarchy:
 * three type sizes, two inks, no rules and no boxes inside the row.
 *
 * HOVER IS THE ONLY CHROME EFFECT OUTSIDE THE HERO. Pointing at a row
 * cross-fades its name from flat chrome to a chrome gradient clipped to the
 * glyphs, over 240ms. Nothing moves, nothing is revealed and nothing is hidden:
 * every word in this section is on the page at all times, so a touch user and a
 * keyboard user lose no content by never triggering it. That is why the rows
 * are not buttons or links - there is no state behind them to reach, and the
 * five services have no pages of their own.
 *
 * NO ENTRANCE. The variation spends its one moment on the orb's environment map
 * building on load. There is no scroll reveal here, so this section is
 * byte-identical under `prefers-reduced-motion` apart from the hover fade,
 * which collapses to 1ms in `tokens.css`.
 */

type Service = {
  /** The service name, set at poster scale. */
  name: string;
  /** The one-line promise COPY.md sets directly under the name. */
  promise: string;
  /** The rest of the sourced entry, one sentence per line. */
  detail: readonly string[];
};

/** COPY.md section 3, "The five", verbatim and in document order. */
const SERVICES: readonly Service[] = [
  {
    name: "Customer-facing product studios.",
    promise: "Let your customer design the thing before they buy it.",
    detail: [
      "A web app they configure, preview and order in, with the quote issued and accepted in the same screen.",
      "Not a customisation field bolted onto a store page.",
    ],
  },
  {
    name: "Generated product media.",
    promise: "Product images and video without a shoot for every variant.",
    detail: [
      "On-brand stills and video that hold the same person, the same brand voice and the local language.",
      "Four finished renders per pendant design on the live studio, the first in about two minutes.",
    ],
  },
  {
    name: "Agent systems and harnesses.",
    promise: "Automation you can watch working.",
    detail: [
      "Agents with verification loops, browser control and telemetry, so you see what ran and what failed.",
      "It is the same harness this studio runs its own build work on.",
    ],
  },
  {
    name: "WhatsApp lead systems.",
    promise: "A number that answers while the lead is still warm.",
    detail: [
      "Qualify, answer and hand over on the channel your customers already use, wired to the inbox or tool you already pay for.",
    ],
  },
  {
    name: "App store readiness.",
    promise: "Find what will fail review before you submit.",
    detail: [
      "One audit across screens, billing, notification scheduling, privacy and store policy, with the blockers listed in the order they will bite.",
    ],
  },
];

/** COPY.md section 3, "Standing lines under the grid", verbatim. */
const STANDING: readonly string[] = [
  "Who is on it: both founders, on every engagement, from the first message.",
  "Duration is fixed in discovery and written into the scope, not estimated on a call.",
  "Buy versus build: if you should buy something off the shelf instead, we say so in discovery.",
];

export function Services() {
  return (
    <section
      className="v5-services"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="v5-band v5-services__inner">
        <div className="v5-services__head">
          <h2 className="v5-display v5-services__title" id="services-title">
            Five things we build.
          </h2>
          <p className="v5-services__subhead">
            Each one is scoped, dated and priced in paid discovery before a line
            of code is written.
          </p>
        </div>

        <ul className="v5-services__list">
          {SERVICES.map((service) => (
            <li className="v5-grid v5-services__row" key={service.name}>
              <h3 className="v5-display v5-services__name">{service.name}</h3>
              <div className="v5-services__copy">
                <p className="v5-services__promise">{service.promise}</p>
                {service.detail.map((line) => (
                  <p className="v5-services__detail" key={line}>
                    {line}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <ul className="v5-services__standing">
          {STANDING.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
