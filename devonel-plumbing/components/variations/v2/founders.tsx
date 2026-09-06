import type { CSSProperties } from "react";

/**
 * v2 founders: the output of `devonel whoami`.
 *
 * The buyer question is "who am I actually hiring, and will they be on the
 * call". A shell answers that with a record, not a photograph, so this section
 * is two records printed as aligned key-value pairs. That is also the only way
 * this direction can answer it: v2 ships zero images, so there are no portraits
 * and no avatars anywhere on the page, and the alignment of the key column is
 * what the section has instead.
 *
 * Copy is `docs/goal/COPY.md` section 6 under its v2 tone note (numerals,
 * lowercase, terse). Three decisions worth recording:
 *
 *  - the heading is COPY's headline alternate A, "You work directly with the
 *    builders." COPY allows an alternate in one variation, and this is the
 *    variation for it: `whoami` asks for one line naming who you are talking
 *    to, and the primary headline's count ("two founders") is printed by the
 *    output directly underneath rather than announced above it.
 *  - COPY's tone note lists the keys as `location`, `owns`, `contact`. The
 *    first two are here as `base:` and `does:`/`why:`. `contact:` is not: there
 *    is one studio mailbox in `lib/site.ts`, and printing it twice would invent
 *    two channels. The section carries no CTA for the same reason the services
 *    help page carries none - COPY pins one CTA wording, the hero and the final
 *    block carry it, and the accent budget stays on the caret, the rail counter
 *    and that button.
 *  - COPY's third name is gated on her consent and is not marked approved, so
 *    she is not on this page.
 *
 * Layout is the whole design. Each row is its own grid, `7ch` of key beside the
 * value, so a key can never be orphaned from its value and a value that runs
 * past the measure wraps under its own first character rather than under the
 * key. At 480 and below the key column drops to `6ch`, which buys the value
 * back a character on a 360px screen without breaking the column.
 */

/** Stagger position in the printed sequence, read by the `v2-print` primitive. */
function printStep(i: number): CSSProperties {
  return { "--v2-print-i": i } as CSSProperties;
}

type Founder = {
  /** COPY.md section 6: the name on the record head. */
  name: string;
  /** COPY.md section 6: the city printed beside the name. */
  base: string;
  /** COPY.md section 6: the role line, what this founder builds or leads. */
  does: string;
  /** COPY.md section 6: the second line, the reason to trust the first. */
  why: string;
};

const founders: readonly Founder[] = [
  {
    name: "sanchay thalnerkar",
    base: "mumbai",
    does: "builds the systems: agent harnesses, verification loops, browser automation and generated media pipelines.",
    why: "also builds and sells clinic software in australia and india.",
  },
  {
    name: "umayr sheik",
    base: "dubai",
    does: "relationship and commercial lead.",
    why: "owns prompt craft and creative direction, data and analytics, and enterprise ai context.",
  },
];

/** The four keys, in the order a record prints them. */
const keys = ["name", "base", "does", "why"] as const;

export function Founders() {
  return (
    <section id="founders" className="v2-section" aria-labelledby="v2-founders-h">
      <div className="v2-rule" data-label="founders" aria-hidden="true" />

      <div className="v2-measure">
        <p className="v2-cmd v2-print" style={printStep(0)}>
          <span className="v2-prompt">~/devonel $</span> devonel whoami
        </p>

        <h2 id="v2-founders-h" className="v2-who-h v2-print" style={printStep(1)}>
          you work directly with the builders.
        </h2>

        <p className="v2-who-sub v2-print" style={printStep(2)}>
          you talk to the people who build the work and price it, from the first message to
          handover.
        </p>

        <p className="v2-who-legend v2-print" style={printStep(3)}>
          who you work with:
        </p>

        <div className="v2-who-recs">
          {founders.map((founder, i) => (
            <dl key={founder.name} className="v2-who-rec v2-print" style={printStep(4 + i)}>
              {keys.map((key) => (
                <div key={key} className="v2-who-row">
                  <dt className="v2-who-k">{key}:</dt>
                  <dd className={key === "name" ? "v2-who-v v2-who-name" : "v2-who-v"}>
                    {founder[key]}
                  </dd>
                </div>
              ))}
            </dl>
          ))}
        </div>

        <p className="v2-who-status v2-print" style={printStep(6)}>
          two cities, one thread, and no layer between you and the people building.
        </p>
      </div>
    </section>
  );
}
