import type { CSSProperties } from "react";

/**
 * v2 services: the studio's `--help` output.
 *
 * The buyer question is "what exactly can I buy from you", and a help page is
 * the shortest honest answer: a name, one line of what it does for you, and the
 * scope under it. So the section is one command and its output. Five builds in
 * a two-column list, then the three lines that hold for all five.
 *
 * Why a help page and not the file tree in COPY.md's v2 tone note: the rail is
 * already an ASCII `tree` of the page, so a second tree would say "file system"
 * twice and "what you buy" once. The names keep the tone note's slugs anyway,
 * `product-studios` through `store-readiness`, so the vocabulary is unchanged.
 *
 * Every string is `docs/goal/COPY.md` section 3, tuned to that section's v2
 * tone note: lowercase, terse. The outcome line is COPY's one-liner, the scope
 * lines are COPY's scope sentences, and the three standing lines are COPY's
 * "standing lines under the grid" split into the key it already names them by.
 * No CTA here: COPY pins one CTA wording and the hero and the final block carry
 * it, which also keeps the accent on the caret, the counter and that button.
 *
 * Layout is the whole design: an 18ch name column and the description beside it
 * while there is room for it, the description wrapping under the name with a
 * hanging indent once there is not. Hover is the shared `v2-inv` inverse video,
 * which is what a terminal does to a selected block and the only state change
 * in the section.
 */

/** Stagger position in the printed sequence, read by the `v2-print` primitive. */
function printStep(i: number): CSSProperties {
  return { "--v2-print-i": i } as CSSProperties;
}

type Build = {
  /** Command-style name. Lowercase, hyphenated, 15 characters or less. */
  name: string;
  /** COPY.md section 3: the one-line outcome under the service name. */
  outcome: string;
  /** COPY.md section 3: the scope sentences under the outcome. */
  scope: readonly string[];
};

const builds: readonly Build[] = [
  {
    name: "product-studios",
    outcome: "let your customer design the thing before they buy it.",
    scope: [
      "a web app they configure, preview and order in, with the quote issued and accepted in the same screen.",
      "not a customisation field bolted onto a store page.",
    ],
  },
  {
    name: "generated-media",
    outcome: "product images and video without a shoot for every variant.",
    scope: [
      "on-brand stills and video that hold the same person, the same brand voice and the local language.",
      "four finished renders per pendant design on the live studio, the first in about two minutes.",
    ],
  },
  {
    name: "agent-systems",
    outcome: "automation you can watch working.",
    scope: [
      "agents with verification loops, browser control and telemetry, so you see what ran and what failed.",
      "it is the same harness this studio runs its own build work on.",
    ],
  },
  {
    name: "whatsapp-leads",
    outcome: "a number that answers while the lead is still warm.",
    scope: [
      "qualify, answer and hand over on the channel your customers already use, wired to the inbox or tool you already pay for.",
    ],
  },
  {
    name: "store-readiness",
    outcome: "find what will fail review before you submit.",
    scope: [
      "one audit across screens, billing, notification scheduling, privacy and store policy, with the blockers listed in the order they will bite.",
    ],
  },
];

/** COPY.md section 3, "standing lines under the grid". True of all five. */
const standing: readonly { key: string; line: string }[] = [
  { key: "who is on it", line: "both founders, on every engagement, from the first message." },
  {
    key: "duration",
    line: "fixed in discovery and written into the scope, not estimated on a call.",
  },
  {
    key: "buy versus build",
    line: "if you should buy something off the shelf instead, we say so in discovery.",
  },
];

export function Services() {
  return (
    <section id="services" className="v2-section" aria-labelledby="v2-services-h">
      <div className="v2-rule" data-label="services" aria-hidden="true" />

      <div className="v2-measure">
        <p className="v2-cmd v2-print" style={printStep(0)}>
          <span className="v2-prompt">~/devonel $</span> devonel --help
        </p>

        <h2 id="v2-services-h" className="v2-svc-h v2-print" style={printStep(1)}>
          five things we build.
        </h2>

        <p className="v2-svc-sub v2-print" style={printStep(2)}>
          each one is scoped, dated and priced in paid discovery before a line of code is written.
        </p>

        <p className="v2-svc-legend v2-print" style={printStep(3)}>
          what you buy:
        </p>

        <dl className="v2-svc-list">
          {builds.map((build, i) => (
            <div
              key={build.name}
              className="v2-svc-entry v2-inv v2-print"
              style={printStep(4 + i)}
            >
              <dt className="v2-svc-name">{build.name}</dt>
              <dd className="v2-svc-def">
                <p className="v2-svc-out">{build.outcome}</p>
                {build.scope.map((line) => (
                  <p key={line} className="v2-svc-scope">
                    {line}
                  </p>
                ))}
              </dd>
            </div>
          ))}
        </dl>

        <p className="v2-svc-legend v2-print" style={printStep(9)}>
          on every build:
        </p>

        <dl className="v2-svc-list v2-svc-notes v2-print" style={printStep(10)}>
          {standing.map((note) => (
            <div key={note.key} className="v2-svc-entry">
              <dt className="v2-svc-name">{note.key}</dt>
              <dd className="v2-svc-def">
                <p className="v2-svc-scope">{note.line}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
