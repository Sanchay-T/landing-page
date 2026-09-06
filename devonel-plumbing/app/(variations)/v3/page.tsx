import type { Metadata } from "next";
import {
  V3Hero,
  V3Nav,
  V3Proof,
  V3Services,
  V3Work,
  navSections,
} from "@/components/variations/v3";
// The whole design system for this variation. Scoped under `.v3`, so it cannot
// reach another route.
import "@/components/variations/v3/tokens.css";

/**
 * Variation 3 - Nightshift.
 *
 * How this page grows
 *   1. Flip the section's `built` flag in `components/variations/v3/sections.ts`.
 *      The floating bar is generated from that array, so a link exists only for
 *      a section that is really on the page.
 *   2. Render its component under the ones already inside `<div className="v3">`,
 *      in the same order as the array.
 * Nothing else changes: colour, type, space, grid and the three motion
 * primitives all live in tokens.css.
 */

/** Title and description are COPY.md section 1, verbatim. */
export const metadata: Metadata = {
  title: "Nightshift - Devonel, AI product studio and growth partner",
  description:
    "Devonel builds and runs the software owner-led brands sell with. Sixteen days from brief to a product your customers use.",
};

export default function Page() {
  return (
    <div className="v3">
      <V3Nav sections={navSections()} />
      <main>
        <V3Hero />
        <V3Proof />
        <V3Services />
        <V3Work />
      </main>
    </div>
  );
}
