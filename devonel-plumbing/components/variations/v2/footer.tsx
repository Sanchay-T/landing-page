import type { CSSProperties } from "react";
import { variations } from "@/app/(variations)/variations";
import { site } from "@/lib/site";
import { sections } from "./sections";

/**
 * v2 footer: the `eof` block, where the buffer ends.
 *
 * The buyer question is "where are you, how do I reach you, and is this a real
 * business". A shell answers that with a registry record, so the block opens on
 * `whois devonel.com` and prints COPY.md section 10 as key-value lines: the
 * sign-off, the two cities, the mailbox as a live address, the provenance and
 * permission lines, the revision date and the copyright. Nothing is dressed up
 * as a heading, because a footer that argues is a footer nobody reads.
 *
 * `whois` rather than the `--version` banner it is shaped like: a version
 * banner has to print a version, and no version number of this site exists in
 * `docs/goal/COPY.md` or the brief, so printing one would be inventing a fact.
 * A registry record carries exactly the fields COPY.md gives and no field it
 * does not.
 *
 * Two listings follow, which is the whole navigation of the block:
 *  - `ls sections/` is generated from `sections.ts`, so it lists what the page
 *    actually renders and can never point at a section that is not there. Its
 *    own entry is filtered out: `ls` of the directory you are standing in does
 *    not need to link you back to your feet.
 *  - `ls editions/` is generated from `app/(variations)/variations.ts` and is
 *    the switcher link the build spec requires: the five editions plus `../`
 *    for the index at `/`. The current edition prints as plain text rather than
 *    a link to itself.
 *
 * The session then rests at a prompt with the caret still blinking, which is
 * the only accent in the block. The measure carries extra bottom padding so
 * that last prompt clears the review pill fixed in the bottom-right corner.
 *
 * WhatsApp is named nowhere: COPY.md gates that line on `contact.whatsapp` in
 * `lib/site.ts` and it is empty. The address is built from `lib/site.ts`
 * directly rather than through `contactHref()`, because `contactHref()`
 * resolves to WhatsApp the day a number lands and this line is the mailbox.
 */

/** Stagger position in the printed sequence, read by the `v2-print` primitive. */
function printStep(i: number): CSSProperties {
  return { "--v2-print-i": i } as CSSProperties;
}

type Field = {
  /** Field name, printed in the key column. Lowercase, 10 characters or less. */
  key: string;
  /** The value. Omitted on the row that prints the address instead. */
  value?: string;
};

/**
 * COPY.md section 10, in the order a record prints: what this is, where it is,
 * how to reach it, then the provenance and legal minimum.
 */
const records: readonly Field[] = [
  { key: "studio", value: "devonel" },
  { key: "about", value: "ai product studio and growth partner for owner-led brands" },
  { key: "base", value: site.locations.join(" and ").toLowerCase() },
  { key: "clients", value: "across the uae, india and remote" },
  // The address is a link, so it is rendered by hand below rather than here.
  { key: "email" },
  { key: "forms", value: "none" },
  { key: "provenance", value: "every piece of work on this page was built by devonel" },
  { key: "names", value: "client names appear only with the client's permission" },
  { key: "revised", value: "7 sep 2026" },
  { key: "copyright", value: "2026 devonel" },
];

/** COPY.md "Constants": the mailbox, with the one sanctioned subject prefilled. */
const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  site.contact.mailSubject
)}`;

/** `ls sections/`: everything the page renders except the block you are in. */
const pageSections = sections.filter((section) => section.id !== "footer");

/** `1_broadsheet`, `4_swiss-signal`: the edition as a filename would spell it. */
function editionName(n: number, name: string): string {
  return `${n}_${name.toLowerCase().replace(/\s+/g, "-")}`;
}

const RECORDS_STEP = 1;
const SECTIONS_STEP = RECORDS_STEP + records.length;
const EDITIONS_STEP = SECTIONS_STEP + 2;
const PROMPT_STEP = EDITIONS_STEP + 2;

export function Footer() {
  return (
    <footer id="footer" className="v2-section v2-foot" aria-labelledby="v2-foot-h">
      <div className="v2-rule" data-label="eof" aria-hidden="true" />

      <div className="v2-measure">
        <h2
          id="v2-foot-h"
          className="v2-cmd v2-print"
          aria-label="Studio details"
          style={printStep(0)}
        >
          <span className="v2-prompt">~/devonel $</span> whois devonel.com
        </h2>

        <dl className="v2-foot-rec">
          {records.map((record, i) => (
            <div
              key={record.key}
              className="v2-foot-row v2-print"
              style={printStep(RECORDS_STEP + i)}
            >
              <dt className="v2-foot-k">{record.key}</dt>
              <dd className="v2-foot-v">
                {record.value ?? (
                  <a className="v2-foot-mail v2-inv" href={mailHref}>
                    {site.contact.email}
                  </a>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <h3
          className="v2-cmd v2-foot-cmd v2-print"
          aria-label="Sections on this page"
          style={printStep(SECTIONS_STEP)}
        >
          <span className="v2-prompt">~/devonel $</span> ls sections/
        </h3>

        <ul className="v2-foot-ls v2-print" style={printStep(SECTIONS_STEP + 1)}>
          {pageSections.map((section) => (
            <li key={section.id}>
              <a className="v2-foot-item v2-inv" href={`#${section.id}`}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <h3
          className="v2-cmd v2-foot-cmd v2-print"
          aria-label="All five editions"
          style={printStep(EDITIONS_STEP)}
        >
          <span className="v2-prompt">~/devonel $</span> ls editions/
        </h3>

        <ul className="v2-foot-ls v2-print" style={printStep(EDITIONS_STEP + 1)}>
          {variations.map((variation) => {
            const name = editionName(variation.n, variation.name);

            return (
              <li key={variation.slug}>
                {variation.slug === "v2" ? (
                  <span className="v2-foot-item v2-foot-here" aria-current="page">
                    {name}
                  </span>
                ) : (
                  <a className="v2-foot-item v2-inv" href={variation.href}>
                    {name}
                  </a>
                )}
              </li>
            );
          })}
          <li>
            <a className="v2-foot-item v2-inv" href="/" aria-label="All five editions">
              ../
            </a>
          </li>
        </ul>

        <p className="v2-foot-prompt v2-print" style={printStep(PROMPT_STEP)}>
          <span className="v2-prompt">~/devonel $</span>
          <span className="v2-caret" aria-hidden="true" />
        </p>
      </div>
    </footer>
  );
}
