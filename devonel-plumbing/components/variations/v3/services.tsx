import type { CSSProperties } from "react";

/** The entrance primitive, staggered by hand so the sequence reads top to
 *  bottom. Every step starts from a visible 0.6 opacity, never from 0, so a
 *  capture taken mid-flight still shows the whole section. */
const delay = (ms: number) => ({ "--v3-enter-delay": `${ms}ms` }) as CSSProperties;

type V3Service = {
  /** The index numeral. It is aria-hidden: the <ol> already carries the order. */
  index: string;
  /** COPY.md's bolded name for the build. */
  name: string;
  /** The one-line outcome, second person, what the buyer ends up with. */
  outcome: string;
  /** The scope lines under it: what is in the build, and where its edge is. */
  scope: readonly string[];
};

/**
 * COPY.md section 3, "The five", verbatim. Order, wording and punctuation are
 * the copy document's; nothing here is written at the component.
 */
const SERVICES: readonly V3Service[] = [
  {
    index: "01",
    name: "Customer-facing product studios.",
    outcome: "Let your customer design the thing before they buy it.",
    scope: [
      "A web app they configure, preview and order in, with the quote issued and accepted in the same screen.",
      "Not a customisation field bolted onto a store page.",
    ],
  },
  {
    index: "02",
    name: "Generated product media.",
    outcome: "Product images and video without a shoot for every variant.",
    scope: [
      "On-brand stills and video that hold the same person, the same brand voice and the local language.",
      "Four finished renders per pendant design on the live studio, the first in about two minutes.",
    ],
  },
  {
    index: "03",
    name: "Agent systems and harnesses.",
    outcome: "Automation you can watch working.",
    scope: [
      "Agents with verification loops, browser control and telemetry, so you see what ran and what failed.",
      "It is the same harness this studio runs its own build work on.",
    ],
  },
  {
    index: "04",
    name: "WhatsApp lead systems.",
    outcome: "A number that answers while the lead is still warm.",
    scope: [
      "Qualify, answer and hand over on the channel your customers already use, wired to the inbox or tool you already pay for.",
    ],
  },
  {
    index: "05",
    name: "App store readiness.",
    outcome: "Find what will fail review before you submit.",
    scope: [
      "One audit across screens, billing, notification scheduling, privacy and store policy, with the blockers listed in the order they will bite.",
    ],
  },
];

/**
 * COPY.md section 3, "Standing lines under the grid", verbatim. They are true
 * of all five builds, so they close the sequence rather than repeat inside it.
 */
const TERMS: readonly string[] = [
  "Who is on it: both founders, on every engagement, from the first message.",
  "Duration is fixed in discovery and written into the scope, not estimated on a call.",
  "Buy versus build: if you should buy something off the shelf instead, we say so in discovery.",
];

/**
 * Variation 3 - services, staged as scenes.
 *
 * Five full-width rows down the page, each one separated by an 8% white
 * hairline: an index numeral in the first column of the 6 column grid, then a
 * Fraunces name, the outcome in Geist inside the 45rem measure, and the scope
 * under it. The pointer lights the scene it is on - the name takes the amber
 * and the numeral warms with it - which is the variation's one hover primitive
 * in its text form. Nothing moves, so a keyboard reader and a pointer reader
 * see the same page.
 *
 * No cards, no icons, no images: the direction's picture is the hero film
 * frame, and this section is the reading matter under it. On a phone the
 * numeral sits above its name; from 768px it moves into the left column and
 * the rows keep one beat all the way down.
 */
export function V3Services() {
  return (
    <section className="v3-svc" id="services">
      <div className="v3-shell">
        <p className="v3-eyebrow v3-enter">What you buy</p>

        <h2 className="v3-svc__headline v3-enter" style={delay(60)}>
          Five things we build.
        </h2>

        <p className="v3-lead v3-svc__lead v3-enter" style={delay(120)}>
          Each one is scoped, dated and priced in paid discovery before a line of code is written.
        </p>

        <ol className="v3-svc__list" role="list">
          {SERVICES.map((service, i) => (
            <li
              className="v3-grid v3-svc__row v3-enter"
              key={service.index}
              style={delay(180 + i * 70)}
            >
              <p className="v3-svc__index" aria-hidden="true">
                {service.index}
              </p>
              <div className="v3-svc__body">
                <h3 className="v3-svc__name">{service.name}</h3>
                <p className="v3-svc__outcome">{service.outcome}</p>
                <div className="v3-svc__scope">
                  {service.scope.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <ul className="v3-svc__terms v3-enter" role="list" style={delay(560)}>
          {TERMS.map((term) => (
            <li className="v3-svc__term" key={term}>
              {term}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
