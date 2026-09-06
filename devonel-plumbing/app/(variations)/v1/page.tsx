import type { Metadata } from "next";
import { SECTIONS, V1Contact, V1Engagement, V1Faq, V1Footer, V1Founders, V1Hero, V1Nav, V1Process, V1Proof, V1Services, V1Work } from "../../../components/variations/v1";
// The whole design system for this variation. Scoped under `.v1`, so it cannot
// reach another route.
import "../../../components/variations/v1/tokens.css";

/**
 * Variation 1 - Broadsheet.
 *
 * How this page grows
 *   1. Add the section to `SECTIONS` in components/variations/v1/sections.ts,
 *      in the order it appears on the page. The masthead index, the colophon
 *      index and every inside page read that one array, so a link exists only
 *      for a section that is actually rendered here.
 *   2. Render its component under the ones already inside `<div className="v1">`,
 *      in the same order.
 * Nothing else changes: tokens, grid and motion all live in tokens.css.
 */

/** Title and description are COPY.md section 1 and section 10, verbatim. */
export const metadata: Metadata = {
  title: "Broadsheet - Devonel, AI product studio and growth partner",
  description:
    "Devonel builds and runs the software owner-led brands sell with. We shipped a name-pendant studio for a bespoke jewellery house in Dubai on the morning of their exhibition stall.",
};

export default function Page() {
  return (
    <div className="v1">
      <V1Nav sections={SECTIONS} />
      <main>
        <V1Hero />
        <V1Proof />
        <V1Services />
        <V1Work />
        <V1Process />
        <V1Founders />
        <V1Engagement />
        <V1Faq />
        <V1Contact />
      </main>
      <V1Footer sections={SECTIONS} />
    </div>
  );
}
