import Image from "next/image";

/**
 * v5 services.
 *
 * A product site's feature list, not a card grid: five rows on the 12-column
 * grid, separated by hairlines, each one a service from `docs/goal/COPY.md`
 * section 3 with its artefact beside it. Rows alternate which side the artefact
 * takes from 1024 up and stack on a phone.
 *
 * Copy rule, set after fix round 1: this section prints COPY.md section 3 and
 * nothing else. Every sentence here is one of that section's own lines, whole
 * and unedited. It borrows nothing from section 4, because `work.tsx` already
 * prints section 4 in full and a page that says the audit blockers, the
 * discovery finding and the two status lines twice is a page that disagrees
 * with itself the moment one copy is edited. Section 3 answers "what can I
 * buy"; section 4 answers "what did you find". Services asks the first
 * question only.
 *
 * Two kinds of thing can sit in the artefact column, and they are drawn
 * differently on purpose:
 *
 *   a frame  a real capture from the shipped pendant studio, or a real render
 *            it produced. Lifted off the ground by the one frame shadow this
 *            variation owns, rounded, with a mono provenance label.
 *   a spec   live text. Flat, square, bordered, no shadow. Nothing in it is a
 *            picture of software.
 *
 * So the shadow means "this happened and here is the picture of it", and no
 * service gets a drawn dashboard, a mock console or an invented chart to stand
 * in for work that has no screenshot. Three of the five have no honest still,
 * so their artefact column carries live text instead: that service's last line
 * in COPY.md section 3, under a mono field label. The copy column keeps the
 * lines above it, in COPY.md's own order, so every row reads top to bottom the
 * way the source document does.
 *
 * Every artefact here is one no other section of the page prints: the hero has
 * the name, style and review screens, `work.tsx` has stones, the generation
 * queue and the RTL mirror, so services takes the operator queue and the second
 * design's renders. Between them the page shows each screen exactly once.
 *
 * Nothing is revealed by motion or by hover. The secondary line on each row is
 * a bordered note that is opaque and legible at rest at every width, on touch
 * and in a screenshot; hover only raises the one under the pointer, which is
 * the reveal primitive `tokens.css` section 4 defines.
 */

type Spec = {
  /** Mono field label at the head of the card: a sourced noun, never a claim. */
  cap: string;
  /** The service's delivery sentence from COPY.md section 3, whole. */
  text: string;
};

type Shot = {
  src: string;
  /** Intrinsic size of the @2x file, so the column always gets 1.5x or better. */
  width: number;
  height: number;
  /** Brand-free alt from docs/goal/ASSET-INVENTORY.md. */
  alt: string;
};

type Service = {
  id: string;
  /** The offer, named the way COPY.md names it. */
  name: string;
  /** COPY.md's second line: what the buyer gets out of it. */
  promise: string;
  /** COPY.md's third line, whole, where the row has a still beside it. */
  delivers?: string;
  /**
   * COPY.md's fourth line, whole. The secondary line: readable at rest, raised
   * on hover. Optional, because two of the five services have no fourth line
   * and a row is better one line short than carrying a line COPY.md never
   * wrote.
   */
  note?: string;
  /** Mono provenance label on the frame. Never a URL: the client's is confidential. */
  label?: string;
  shots?: readonly Shot[];
  spec?: Spec;
};

const SERVICES: readonly Service[] = [
  {
    id: "studios",
    name: "Customer-facing product studios.",
    promise: "Let your customer design the thing before they buy it.",
    delivers:
      "A web app they configure, preview and order in, with the quote issued and accepted in the same screen.",
    note: "Not a customisation field bolted onto a store page.",
    label: "name-pendant studio / operator queue",
    shots: [
      {
        src: "/media/jewelo/ui-operator-console@2x.webp",
        width: 1440,
        height: 322,
        alt: "An operator work queue header showing counts for quote requests, in progress and ready",
      },
    ],
  },
  {
    id: "media",
    name: "Generated product media.",
    promise: "Product images and video without a shoot for every variant.",
    delivers:
      "On-brand stills and video that hold the same person, the same brand voice and the local language.",
    note: "Four finished renders per pendant design on the live studio, the first in about two minutes.",
    label: "name-pendant studio / renders",
    shots: [
      {
        src: "/media/jewelo/pendant-studio-gold@2x.webp",
        width: 1254,
        height: 1254,
        alt: "A gold script name pendant with two small set stones, laid flat on a warm neutral ground",
      },
      {
        src: "/media/jewelo/pendant-worn-gold@2x.webp",
        width: 1122,
        height: 1227,
        alt: "A gold script name pendant worn at the collarbone, framed below the chin",
      },
    ],
  },
  {
    id: "agents",
    name: "Agent systems and harnesses.",
    promise: "Automation you can watch working.",
    delivers:
      "Agents with verification loops, browser control and telemetry, so you see what ran and what failed.",
    spec: {
      cap: "harness",
      text: "It is the same harness this studio runs its own build work on.",
    },
  },
  {
    id: "whatsapp",
    name: "WhatsApp lead systems.",
    promise: "A number that answers while the lead is still warm.",
    spec: {
      cap: "lead system",
      text: "Qualify, answer and hand over on the channel your customers already use, wired to the inbox or tool you already pay for.",
    },
  },
  {
    id: "store",
    name: "App store readiness.",
    promise: "Find what will fail review before you submit.",
    spec: {
      cap: "one audit",
      text: "One audit across screens, billing, notification scheduling, privacy and store policy, with the blockers listed in the order they will bite.",
    },
  },
];

/**
 * The standing lines COPY.md prints under the grid, kept under the grid and
 * split at COPY.md's own punctuation: the key is the sentence's opening, the
 * value is the rest of that same sentence. Nothing is re-capitalised, so each
 * pair reads back as the one line COPY.md wrote.
 */
const STANDING: readonly { term: string; line: string }[] = [
  {
    term: "Who is on it:",
    line: "both founders, on every engagement, from the first message.",
  },
  {
    term: "Duration",
    line: "is fixed in discovery and written into the scope, not estimated on a call.",
  },
  {
    term: "Buy versus build:",
    line: "if you should buy something off the shelf instead, we say so in discovery.",
  },
];

function Artefact({ service }: { service: Service }) {
  if (service.shots) {
    return (
      <figure className="v5-figure">
        <div className="v5-frame">
          <p className="v5-frame__cap v5-mono">{service.label}</p>
          <div className={service.shots.length > 1 ? "v5-svc__sheet" : undefined}>
            {service.shots.map((shot) => (
              <Image
                key={shot.src}
                className="v5-frame__shot"
                src={shot.src}
                width={shot.width}
                height={shot.height}
                sizes="(min-width: 1024px) 592px, 100vw"
                alt={shot.alt}
                priority
              />
            ))}
          </div>
        </div>
      </figure>
    );
  }

  const spec = service.spec;
  if (!spec) return null;

  return (
    <div className="v5-spec">
      <p className="v5-spec__cap v5-mono">{spec.cap}</p>
      <div className="v5-spec__body">
        <p className="v5-spec__text">{spec.text}</p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="v5-services" aria-labelledby="services-title">
      <div className="v5-container">
        <div className="v5-services__head">
          <p className="v5-mono v5-eyebrow">What you buy</p>

          <h2 id="services-title" className="v5-services__h2">
            Five things we build.
          </h2>

          <p className="v5-lead v5-measure">
            Each one is scoped, dated and priced in paid discovery before a line of code is
            written.
          </p>
        </div>

        {/* A list, not a sequence: no step numbers, no 01/02/03. The hairline
            between rows is the only structure the set needs. */}
        <ul className="v5-services__list">
          {SERVICES.map((service) => (
            <li key={service.id} className="v5-svc">
              <div className="v5-svc__copy">
                <h3 className="v5-svc__name">{service.name}</h3>

                <p className="v5-svc__promise">{service.promise}</p>

                {service.delivers ? (
                  <ul className="v5-svc__delivers">
                    <li>{service.delivers}</li>
                  </ul>
                ) : null}

                {service.note ? <p className="v5-svc__note">{service.note}</p> : null}
              </div>

              <div className="v5-svc__artefact">
                <Artefact service={service} />
              </div>
            </li>
          ))}
        </ul>

        <dl className="v5-services__standing">
          {STANDING.map((item) => (
            <div key={item.term}>
              <dt className="v5-mono">{item.term}</dt>
              <dd>{item.line}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
