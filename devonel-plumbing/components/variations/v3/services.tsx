/**
 * Section 3, day 2, night: what you can buy.
 *
 * The direction asks for five entries on a still-dark ground, no cards, no
 * icons, no numbering. On this page a rule with a date on its right end is not
 * decoration - it is the tick bar's own vocabulary, and it is how the proof band
 * above introduces itself. So each service is a station on the same timeline:
 * the rule, the name sitting on it, and the day of the build on which the
 * sixteen-day build used that kind of work.
 *
 * THE DATES ARE THE HONESTY OF THIS BAND. Only two of the five carry one,
 * because the build only used two of them, and both are quoted from
 * `docs/goal/01-business-brief.md`:
 *
 *   - Customer-facing product studios, 11 Aug. Brief 4.1, "Verified brief
 *     (08-11)": a proper "Design Your Name Pendant" studio, "not a normal
 *     Shopify customization field". That line is also where this service's own
 *     copy comes from, so the station and the sentence share a source.
 *   - Generated product media, 26 Aug. Brief 3, "Generative media pipelines for
 *     product marketing: name-pendant renders with gpt-image-2 and Seedance via
 *     fal (08-26 to 08-27)", which is brief 4.1's "overnight build 08-26 to
 *     08-27". 26 Aug is the day the pipeline was built.
 *
 * The other three are sold, not used here. Agent harnesses are dated 06-11 and
 * 08-05 in brief 3, WhatsApp lead systems 08-14 and 08-25, the store-readiness
 * audit 08-10 - all outside this build. Their stations therefore carry no date
 * at all. Nothing is inferred, rounded or filled in to make the column even.
 *
 * The five service dates print in the tick bar's short form ("11 Aug") because
 * they are days on the bar above and the reader can map station to tick; the
 * band's own station carries the full date, as the proof band's does.
 *
 * Colour: none is written here. The band is a plain `.v3-band` with no clock
 * override, so it travels with the ramp - unlike the proof band above it, which
 * is pinned to daylight. Text is separated by size and by rule only; there is no
 * muted ink on this page.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 3, bracketed source tags
 * removed. Server component. No client product imagery appears in this band, by
 * rule.
 */

type Service = {
  /** The bold name from COPY.md section 3, with its full stop. */
  name: string;
  /** The one-line promise under the name. */
  lede: string;
  /** The sentences under the promise, joined as written. */
  detail: string;
  /** Only where the brief dates that kind of work inside the sixteen days. */
  date?: string;
};

const services: readonly Service[] = [
  {
    name: "Customer-facing product studios.",
    lede: "Let your customer design the thing before they buy it.",
    detail:
      "A web app they configure, preview and order in, with the quote issued and accepted in the same screen. Not a customisation field bolted onto a store page.",
    date: "11 Aug",
  },
  {
    name: "Generated product media.",
    lede: "Product images and video without a shoot for every variant.",
    detail:
      "On-brand stills and video that hold the same person, the same brand voice and the local language. Four finished renders per pendant design on the live studio, the first in about two minutes.",
    date: "26 Aug",
  },
  {
    name: "Agent systems and harnesses.",
    lede: "Automation you can watch working.",
    detail:
      "Agents with verification loops, browser control and telemetry, so you see what ran and what failed. It is the same harness this studio runs its own build work on.",
  },
  {
    name: "WhatsApp lead systems.",
    lede: "A number that answers while the lead is still warm.",
    detail:
      "Qualify, answer and hand over on the channel your customers already use, wired to the inbox or tool you already pay for.",
  },
  {
    name: "App store readiness.",
    lede: "Find what will fail review before you submit.",
    detail:
      "One audit across screens, billing, notification scheduling, privacy and store policy, with the blockers listed in the order they will bite.",
  },
];

/** The three standing lines, verbatim from COPY.md section 3. */
const standing: readonly string[] = [
  "Who is on it: both founders, on every engagement, from the first message.",
  "Duration is fixed in discovery and written into the scope, not estimated on a call.",
  "Buy versus build: if you should buy something off the shelf instead, we say so in discovery.",
];

export function Services() {
  return (
    <section
      id="services"
      className="v3-band v3-services"
      data-stage="night"
      aria-labelledby="services-h"
    >
      <div className="v3-inner">
        <p className="v3-station">
          <span>What you buy</span>
          <span className="v3-station-date">12 Aug 2026</span>
        </p>

        <h2 className="v3-h2" id="services-h">
          Five things we build.
        </h2>

        <p className="v3-lede">
          Each one is scoped, dated and priced in paid discovery before a line of code is written.
        </p>

        <ul className="v3-services-list" role="list">
          {services.map((service) => (
            <li className="v3-service" key={service.name}>
              <div className="v3-service-rule">
                <h3 className="v3-service-name">{service.name}</h3>
                {service.date ? <p className="v3-service-date">{service.date}</p> : null}
              </div>
              <p className="v3-service-lede">{service.lede}</p>
              <p className="v3-service-detail">{service.detail}</p>
            </li>
          ))}
        </ul>

        <ul className="v3-standing" role="list">
          {standing.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
