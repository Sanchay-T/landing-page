import type { CSSProperties } from "react";

/**
 * v2 proof: the record the shell prints when you ask it for proof.
 *
 * `devonel --proof` returns one summary line and a fixed-width table. The
 * figures are the art here, which is the direction's own thesis for this
 * section, so they are the only thing set at the display size and the summary
 * line sits at body size above them. A second 40px headline stacked over five
 * 40px figures would be two voices shouting the same fact.
 *
 * Why no counter animation: the hero already owns the moving accent (caret,
 * rail counter, CTA), and the direction spends green on nothing else. Counters
 * that start at 0 would also mean the server sends numbers that are not true,
 * so every figure is final in the HTML and the block arrives on the shared
 * `v2-print` entrance instead. That keeps the section inside the three motion
 * primitives declared in `index.ts`; a fourth would be a direction change.
 *
 * Why the client quote is not here: `COPY.md` files it in this section, but the
 * hero already prints it verbatim as an `[ok]` line, and the same eight words
 * twice in two screens reads as thin rather than proven. The section closes on
 * COPY.md's own alternate for this block instead, set as a shell comment, which
 * is the line that answers the objection the table raises: one client.
 *
 * The secondary CTA is COPY.md section 2's alternate B, "Read the build log",
 * which that document notes is the one that "matches the terminal and console
 * registers". It is set as an output line, not a button: a dim `->` marker and
 * a link in text colour with the page's inverse-video hover, so the accent
 * stays on the caret, the rail counter and the primary CTA. It points at
 * `#work`, the log this table is the summary of.
 *
 * Every string is `docs/goal/COPY.md` section 2, on its v2 tone note (numerals,
 * lowercase, terse). Nothing is rounded, restated or invented.
 */

/** Stagger position in the printed sequence, read by the `v2-print` primitive. */
function printStep(i: number): CSSProperties {
  return { "--v2-print-i": i } as CSSProperties;
}

type ProofRow = {
  /** The count, exactly as COPY.md states it. Right-aligned, tabular. */
  fig: string;
  /** What the count is of. Short enough to hold one line at 360. */
  label: string;
  /** Where it comes from, or the dates behind it. */
  note: string;
};

const rows: readonly ProofRow[] = [
  {
    fig: "1",
    label: "product live",
    note: "a name-pendant studio for a bespoke jewellery house in dubai",
  },
  { fig: "16", label: "days from spec to live", note: "11 aug 2026 -> 27 aug 2026" },
  { fig: "4", label: "renders per design", note: "the first in about two minutes" },
  { fig: "25+", label: "screens covered", note: "an app store readiness audit" },
  { fig: "2", label: "cities", note: "dubai and mumbai" },
];

export function Proof() {
  return (
    <section id="proof" className="v2-section" aria-labelledby="v2-proof-h">
      <div className="v2-rule" data-label="proof" aria-hidden="true" />

      <div className="v2-measure">
        <p className="v2-cmd v2-print" style={printStep(0)}>
          <span className="v2-prompt">~/devonel $</span> devonel --proof
        </p>

        <h2 id="v2-proof-h" className="v2-proof-h v2-print" style={printStep(1)}>
          shipped, not promised.
        </h2>

        <div className="v2-proof-table v2-print" style={printStep(2)}>
          <div className="v2-proof-hr" aria-hidden="true" />

          <ul className="v2-proof-rows">
            {rows.map((row) => (
              <li key={row.label} className="v2-proof-row">
                <span className="v2-proof-fig">{row.fig}</span>
                <span className="v2-proof-def">
                  <span className="v2-proof-label">{row.label}</span>
                  <span className="v2-proof-note">{row.note}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="v2-proof-hr" aria-hidden="true" />
        </div>

        <p className="v2-proof-log v2-print" style={printStep(3)}>
          <span aria-hidden="true">#</span> one product live. two more in build.
        </p>

        <p className="v2-proof-cta v2-print" style={printStep(4)}>
          <span className="v2-proof-arrow" aria-hidden="true">
            {"-> "}
          </span>
          <a className="v2-proof-open v2-inv" href="#work">
            read the build log
          </a>
        </p>
      </div>
    </section>
  );
}
