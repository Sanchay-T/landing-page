import type { CSSProperties } from "react";
import { ContactCTA } from "@/components/ds/contact-cta";

/**
 * v2 engagement: `cat engagement.toml`.
 *
 * The buyer question is "how much is this", and the honest answer on this page
 * is a set of terms rather than a number. So the section prints the terms as
 * the file they would live in: a config dump, keys and values, comments for the
 * conditions. A config file is the one document format that is expected to be
 * complete and is never expected to persuade, which is exactly the tone this
 * block needs.
 *
 * Everything here is `docs/goal/COPY.md` section 7, tuned to its v2 tone note
 * ("four options as a plain list with a `#` comment each; the two rules as a
 * `constraints` block"). The headline and subhead are the file's header
 * comment, the four ways to work are the `[ways_to_work]` table, and each
 * condition COPY.md attaches to an option is the comment line under it, which
 * is where a config file puts a condition. No key is invented: every one is
 * COPY.md's own term for the thing, and no figure appears anywhere, which is
 * the section's whole argument.
 *
 * The file ends and the shell returns to a prompt, so that prompt is the CTA.
 * Same idiom as the hero: prompt, `ContactCTA`, caret, support line. The
 * channel is never named here; `lib/site.ts` decides it.
 */

/** Stagger position in the printed sequence, read by the `v2-print` primitive. */
function printStep(i: number): CSSProperties {
  return { "--v2-print-i": i } as CSSProperties;
}

type Entry = {
  /** TOML key. COPY.md's own term for the option or the rule, snake_cased. */
  key: string;
  /** TOML value, rendered verbatim including its quotes or brackets. */
  value: string;
  /** The condition COPY.md attaches to that line, printed as a `#` comment. */
  note?: string;
};

type Table = {
  /** TOML table name, printed in brackets. */
  name: string;
  /** Plain-language accessible name for the heading, since the visible text is a key. */
  label: string;
  entries: readonly Entry[];
};

/** COPY.md section 7. Table order is COPY's order: options, rules, costs. */
const tables: readonly Table[] = [
  {
    name: "ways_to_work",
    label: "Ways to work with us",
    entries: [
      {
        key: "paid_discovery",
        value: '"a small fixed first scope that produces the plan, the date and the price"',
        note: "credited against the build.",
      },
      {
        key: "fixed_scope_build",
        value: '"one price for one written scope"',
        note: "paid before the phase starts.",
      },
      {
        key: "monthly_retainer",
        value: '"running, monitoring, fixes and the next scope"',
        note: "after launch.",
      },
      {
        key: "revenue_share",
        value: '"on top of the fee, never instead of it"',
        note: "optional.",
      },
    ],
  },
  {
    // COPY.md's v2 tone note names this block, so it keeps that name.
    name: "constraints",
    label: "Constraints",
    entries: [
      { key: "minimum_commitment", value: '"up front on every engagement"' },
      { key: "unpaid_starts", value: "false", note: "no unpaid multi-month starts." },
    ],
  },
  {
    name: "pass_through_costs",
    label: "Pass-through costs",
    entries: [
      {
        key: "billed_separately",
        value: '["model api", "infrastructure"]',
        note: "at cost, and itemised.",
      },
    ],
  },
];

/** Print steps 0, 1 and 2 are the command, the headline and the subhead. */
const FIRST_TABLE_STEP = 3;

/** One step for a table name, one for each of its entries. */
function tableStep(index: number): number {
  return (
    FIRST_TABLE_STEP +
    tables.slice(0, index).reduce((total, table) => total + 1 + table.entries.length, 0)
  );
}

const CTA_STEP = tableStep(tables.length);

export function Engagement() {
  return (
    <section id="engagement" className="v2-section v2-eng" aria-labelledby="v2-eng-h">
      <div className="v2-rule" data-label="engagement" aria-hidden="true" />

      <div className="v2-measure">
        <p className="v2-cmd v2-print" style={printStep(0)}>
          <span className="v2-prompt">~/devonel $</span> cat engagement.toml
        </p>

        <h2 id="v2-eng-h" className="v2-eng-h v2-print" style={printStep(1)}>
          no prices on this page. here is exactly how we get to one.
        </h2>

        <p className="v2-eng-sub v2-print" style={printStep(2)}>
          scope sets the number, so we write the scope first and you pay for that step.
        </p>

        {tables.map((table, i) => {
          const base = tableStep(i);

          return (
            <div key={table.name}>
              <h3
                className="v2-eng-tbl v2-print"
                aria-label={table.label}
                style={printStep(base)}
              >
                [{table.name}]
              </h3>

              <dl className="v2-eng-block">
                {table.entries.map((entry, j) => (
                  <div
                    key={entry.key}
                    className="v2-eng-entry v2-print"
                    style={printStep(base + 1 + j)}
                  >
                    <dt className="v2-eng-key">{entry.key}</dt>
                    <dd className="v2-eng-val">{entry.value}</dd>
                    {entry.note ? <dd className="v2-eng-note">{entry.note}</dd> : null}
                  </div>
                ))}
              </dl>
            </div>
          );
        })}

        <div className="v2-eng-cta v2-print" style={printStep(CTA_STEP)}>
          <p>
            <span className="v2-prompt">~/devonel $</span>{" "}
            <ContactCTA className="v2-cta">press enter to send your brief</ContactCTA>
            <span className="v2-caret" aria-hidden="true" />
          </p>
          <p className="v2-note">paid discovery, fixed scope, no forms.</p>
        </div>
      </div>
    </section>
  );
}
