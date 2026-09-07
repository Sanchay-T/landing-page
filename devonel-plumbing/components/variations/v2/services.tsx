/**
 * v2 "Shader Light" - services, canonical section 3.
 *
 * Direction 2 asks for "five stacked full-width entries separated by rules, no
 * numbering, no icons, no cards", so this section is a rule-ruled ledger and
 * nothing else: one 1px line above each entry, one closing the set, and the
 * only colour on the whole block is the ink it is set in.
 *
 * Layout at >=64rem is the direction's two-column read: the name in Fraunces on
 * the left four of twelve columns, the answer in Geist on the right seven, one
 * empty column between them. Below 64rem the pair stacks, which keeps the name
 * at display size instead of squeezing it into a phone-width column.
 *
 * The section sits on paper with no field behind it. The field is the hero's,
 * clipped to the hero, and this page runs exactly one WebGL context; putting a
 * second surface behind body copy would also break the direction's rule that no
 * text sits on a live shader.
 *
 * Hover changes the entry's rule colour and nothing else. The direction spends
 * its one hover on the clocks, so an entry acknowledges the pointer at the
 * weight of a hairline and never reveals copy: nothing here is hover-gated, so
 * touch and keyboard read the same page a mouse does.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 3 and nothing on this
 * section comes from anywhere else: the label, the headline, the subhead, the
 * five names with their promise and deliverable lines, and the three standing
 * lines. Trailing full stops are the document's, kept as written.
 *
 * The label is kept because it is the same string the nav links with ("What you
 * buy"), so a visitor who clicks that link lands on a heading that confirms it.
 * It is sentence case at body-small size, not a tracked-out eyebrow.
 */

type Service = {
  /** Stable key; never rendered, so it names no client and carries no copy. */
  id: string;
  name: string;
  promise: string;
  /** The concrete lines under the promise, in document order. */
  deliverables: readonly string[];
};

const SERVICES: readonly Service[] = [
  {
    id: "product-studios",
    name: "Customer-facing product studios.",
    promise: "Let your customer design the thing before they buy it.",
    deliverables: [
      "A web app they configure, preview and order in, with the quote issued and accepted in the same screen.",
      "Not a customisation field bolted onto a store page.",
    ],
  },
  {
    id: "product-media",
    name: "Generated product media.",
    promise: "Product images and video without a shoot for every variant.",
    deliverables: [
      "On-brand stills and video that hold the same person, the same brand voice and the local language.",
      "Four finished renders per pendant design on the live studio, the first in about two minutes.",
    ],
  },
  {
    id: "agent-systems",
    name: "Agent systems and harnesses.",
    promise: "Automation you can watch working.",
    deliverables: [
      "Agents with verification loops, browser control and telemetry, so you see what ran and what failed.",
      "It is the same harness this studio runs its own build work on.",
    ],
  },
  {
    id: "whatsapp-leads",
    name: "WhatsApp lead systems.",
    promise: "A number that answers while the lead is still warm.",
    deliverables: [
      "Qualify, answer and hand over on the channel your customers already use, wired to the inbox or tool you already pay for.",
    ],
  },
  {
    id: "store-readiness",
    name: "App store readiness.",
    promise: "Find what will fail review before you submit.",
    deliverables: [
      "One audit across screens, billing, notification scheduling, privacy and store policy, with the blockers listed in the order they will bite.",
    ],
  },
];

const STANDING = [
  "Who is on it: both founders, on every engagement, from the first message.",
  "Duration is fixed in discovery and written into the scope, not estimated on a call.",
  "Buy versus build: if you should buy something off the shelf instead, we say so in discovery.",
] as const;

export function Services() {
  return (
    <section id="services" className="v2-services" aria-labelledby="services-headline">
      <header className="v2-services__head">
        <div className="v2-services__title">
          <p className="v2-services__label">What you buy</p>
          <h2 className="v2-services__headline" id="services-headline">
            Five things we build.
          </h2>
        </div>
        <p className="v2-services__sub">
          Each one is scoped, dated and priced in paid discovery before a line of code is written.
        </p>
      </header>

      <ul className="v2-services__list">
        {SERVICES.map((service) => (
          <li className="v2-service" key={service.id}>
            <h3 className="v2-service__name">{service.name}</h3>
            <div className="v2-service__body">
              <p className="v2-service__promise">{service.promise}</p>
              <ul className="v2-service__scope">
                {service.deliverables.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <div className="v2-services__close">
        {STANDING.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}
