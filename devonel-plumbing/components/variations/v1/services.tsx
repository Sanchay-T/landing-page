/**
 * v1 "Studio Dark" services.
 *
 * The direction's third block: five full-width rows on the void, no cards, no
 * icons, no numbering. The rules are the only structure the section owns -
 * every row carries the hairline above it and the list carries the one that
 * closes the set, so hovering a row lifts exactly one rule to text colour and
 * nothing else on the page moves.
 *
 * A server component. Nothing here is stateful and nothing here animates on
 * load: the sixteen-tick assembly in the hero is this page's one entrance.
 *
 * No content is hidden behind hover. The direction offers a row that "opens on
 * hover or focus to reveal the scope line", but a row with nothing focusable
 * in it cannot be opened by a keyboard or a thumb, so the scope lines are
 * printed and hover is left as what it should be here - a pointer telling you
 * which row it is on.
 *
 * Numbering is deliberately absent. The hero gauge already counts this page's
 * only real sequence, and "01 / 02 / 03" on a set of five services is a named
 * generic tell in this direction.
 *
 * Every string is COPY.md section 3, verbatim, with the bracketed source
 * citations stripped. COPY.md's own section label, "What you buy", is not
 * rendered: it would have to be set as an eyebrow above the heading, and a
 * mono or caps eyebrow is a named tell here - the same call the proof band
 * made with "Proof of work". The heading carries the section instead.
 */

/** name  the service, in the display face on the left
 *  promise  COPY.md's one-line promise, the lead of the right column
 *  scope  the rest of the entry, joined into one paragraph in muted */
const SERVICES = [
  {
    name: "Customer-facing product studios.",
    promise: "Let your customer design the thing before they buy it.",
    scope:
      "A web app they configure, preview and order in, with the quote issued and accepted in the same screen. Not a customisation field bolted onto a store page.",
  },
  {
    name: "Generated product media.",
    promise: "Product images and video without a shoot for every variant.",
    scope:
      "On-brand stills and video that hold the same person, the same brand voice and the local language. Four finished renders per pendant design on the live studio, the first in about two minutes.",
  },
  {
    name: "Agent systems and harnesses.",
    promise: "Automation you can watch working.",
    scope:
      "Agents with verification loops, browser control and telemetry, so you see what ran and what failed. It is the same harness this studio runs its own build work on.",
  },
  {
    name: "WhatsApp lead systems.",
    promise: "A number that answers while the lead is still warm.",
    scope:
      "Qualify, answer and hand over on the channel your customers already use, wired to the inbox or tool you already pay for.",
  },
  {
    name: "App store readiness.",
    promise: "Find what will fail review before you submit.",
    scope:
      "One audit across screens, billing, notification scheduling, privacy and store policy, with the blockers listed in the order they will bite.",
  },
] as const;

/** COPY.md's "Standing lines under the grid". They close the section on space
 *  rather than on a sixth rule: the list is already shut by its own hairline,
 *  and one more would start to draw a table. */
const STANDING = [
  "Who is on it: both founders, on every engagement, from the first message.",
  "Duration is fixed in discovery and written into the scope, not estimated on a call.",
  "Buy versus build: if you should buy something off the shelf instead, we say so in discovery.",
] as const;

export function Services() {
  return (
    <section id="services" className="v1-services" aria-labelledby="services-head">
      <div className="v1-shell">
        <h2 id="services-head" className="v1-services__head">
          Five things we build.
        </h2>
        <p className="v1-services__sub">
          Each one is scoped, dated and priced in paid discovery before a line of code is written.
        </p>

        <ul className="v1-services__list" role="list">
          {SERVICES.map(({ name, promise, scope }) => (
            <li key={name} className="v1-services__row">
              <h3 className="v1-services__name">{name}</h3>
              <div className="v1-services__body">
                <p className="v1-services__promise">{promise}</p>
                <p className="v1-services__scope">{scope}</p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="v1-services__standing" role="list">
          {STANDING.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
