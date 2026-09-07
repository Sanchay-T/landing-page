import type { Metadata } from "next";
import { SECTIONS, V4Hero, V4Nav } from "@/components/variations/v4";
// The whole design system for this variation. Scoped under `.v4`, so it cannot
// reach another route.
import "@/components/variations/v4/tokens.css";

/**
 * Variation 4 - Swiss Signal.
 *
 * How this page grows
 *   1. Flip `built` to true on your row in components/variations/v4/sections.ts.
 *      The signage bar reads that array, so a stop exists only for a section
 *      that is actually rendered here.
 *   2. Render the section below the ones already inside `<div className="v4">`,
 *      in the same order as the array.
 *   3. Append your CSS to components/variations/v4/tokens.css as a new
 *      numbered section. Tokens, grid and motion primitives are already there.
 */

/** Title and description are COPY.md section 1, verbatim. */
export const metadata: Metadata = {
  title: "Swiss Signal - Devonel, AI product studio and growth partner",
  description:
    "Devonel builds and runs the software owner-led brands sell with. We shipped a name-pendant studio for a bespoke jewellery house in Dubai on the morning of their exhibition stall.",
};

export default function Page() {
  return (
    <div className="v4">
      <V4Nav sections={SECTIONS} />
      <main>
        <V4Hero />
      </main>
    </div>
  );
}
