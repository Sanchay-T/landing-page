/**
 * Section 3 - Services, "What you buy".
 *
 * Answers the buyer question "what exactly can I buy from you?" the way a paper
 * sets a digest page: a headline block in the left columns, the standfirst in
 * the outer four opening on a drop cap, then the five offers set as five ruled
 * columns of type. No cards, no icons, no figures. The only division between
 * one offer and the next is a hairline sitting in the middle of a real gutter.
 *
 * A line-art figure was considered per offer and dropped. Four of the five are
 * software categories with no honest silhouette, so a drawing would decorate
 * rather than clarify, and the v1 tone note in COPY.md asks for type alone.
 *
 * Every word is verbatim from docs/goal/COPY.md section 3, with the v1 tone
 * note applied: five numbered entries in a column grid, opened by a drop cap.
 */

/** COPY.md section 3, "The five". Order is the order in the document. */
const OFFERS: readonly {
  readonly name: string;
  readonly outcome: string;
  readonly detail: readonly string[];
}[] = [
  {
    name: "Customer-facing product studios.",
    outcome: "Let your customer design the thing before they buy it.",
    detail: [
      "A web app they configure, preview and order in, with the quote issued and accepted in the same screen.",
      "Not a customisation field bolted onto a store page.",
    ],
  },
  {
    name: "Generated product media.",
    outcome: "Product images and video without a shoot for every variant.",
    detail: [
      "On-brand stills and video that hold the same person, the same brand voice and the local language.",
      "Four finished renders per pendant design on the live studio, the first in about two minutes.",
    ],
  },
  {
    name: "Agent systems and harnesses.",
    outcome: "Automation you can watch working.",
    detail: [
      "Agents with verification loops, browser control and telemetry, so you see what ran and what failed.",
      "It is the same harness this studio runs its own build work on.",
    ],
  },
  {
    name: "WhatsApp lead systems.",
    outcome: "A number that answers while the lead is still warm.",
    detail: [
      "Qualify, answer and hand over on the channel your customers already use, wired to the inbox or tool you already pay for.",
    ],
  },
  {
    name: "App store readiness.",
    outcome: "Find what will fail review before you submit.",
    detail: [
      "One audit across screens, billing, notification scheduling, privacy and store policy, with the blockers listed in the order they will bite.",
    ],
  },
];

/**
 * COPY.md section 3, "Standing lines under the grid". They qualify all five
 * offers, so they sit under the grid rather than being repeated in each column.
 */
const STANDING_LINES: readonly string[] = [
  "Who is on it: both founders, on every engagement, from the first message.",
  "Duration is fixed in discovery and written into the scope, not estimated on a call.",
  "Buy versus build: if you should buy something off the shelf instead, we say so in discovery.",
];

export function V1Services() {
  return (
    <section id="services" className="v1-services">
      <div className="v1-shell">
        <div className="v1-grid">
          <div className="v1-services__head">
            <p className="v1-kicker">What you buy</p>
            <h2 className="v1-display v1-services__title">Five things we build.</h2>
          </div>

          {/* The standfirst opens the story on a drop cap, set in the outer
              columns the way a broadsheet sets a lead-in beside the headline. */}
          <p className="v1-deck v1-services__standfirst">
            Each one is scoped, dated and priced in paid discovery before a line of code is
            written.
          </p>
        </div>

        {/* Five columns of type. The numeral is decoration for a reader who
            already hears "list, 5 items" from the ordered list, so it is
            hidden from the accessibility tree rather than read out twice. */}
        <ol className="v1-services__list v1-reveal">
          {OFFERS.map((offer, i) => (
            <li key={offer.name} className="v1-service">
              <p className="v1-service__n" aria-hidden="true">
                {i + 1}
              </p>
              <h3 className="v1-service__name">{offer.name}</h3>
              <p className="v1-service__outcome">{offer.outcome}</p>
              {offer.detail.map((line) => (
                <p key={line} className="v1-service__detail">
                  {line}
                </p>
              ))}
            </li>
          ))}
        </ol>

        <div className="v1-services__notes">
          {STANDING_LINES.map((line) => (
            <p key={line} className="v1-services__note">
              {line}
            </p>
          ))}
        </div>

        <div className="v1-folio v1-folio--ruled v1-services__folio">
          <span>What you buy</span>
          <span className="v1-folio__n">3</span>
        </div>
      </div>
    </section>
  );
}
