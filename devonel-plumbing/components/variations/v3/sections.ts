/**
 * Variation 3 - the page's section index.
 *
 * One array, in page order. The floating nav, and later the footer, are
 * generated from it, so a link exists only for a section that is actually on
 * the page and no anchor on this variation can go dead.
 *
 * How to add a section (this is the one place to edit):
 *   1. Flip `built` to true on its row below.
 *   2. Render its component in `app/(variations)/v3/page.tsx`, in this order.
 * Set `inNav` to false for a section the floating bar should not advertise:
 * the hero is reached by the wordmark and the final CTA is reached by the pill,
 * so neither of them earns a second link in a bar that has to stay minimal.
 *
 * Labels come from docs/goal/COPY.md, one per section, verbatim.
 */

export type V3Section = {
  /** The element id the anchor points at. */
  id: string;
  /** COPY.md's label for that section. */
  label: string;
  /** Whether the floating bar links to it. */
  inNav: boolean;
  /** Whether the section's component is on the page yet. */
  built: boolean;
};

export const sections: readonly V3Section[] = [
  { id: "hero", label: "Top", inNav: false, built: true },
  { id: "proof", label: "Proof of work", inNav: true, built: true },
  { id: "services", label: "What you buy", inNav: true, built: true },
  { id: "work", label: "Case studies", inNav: true, built: true },
  { id: "process", label: "How we work", inNav: true, built: true },
  { id: "founders", label: "Who you work with", inNav: true, built: true },
  { id: "engagement", label: "How a quote works", inNav: true, built: true },
  { id: "faq", label: "Before you pay", inNav: true, built: true },
  { id: "contact", label: "Start", inNav: false, built: true },
  { id: "footer", label: "Colophon", inNav: false, built: true },
];

/** The anchors the floating bar renders: on the page today, and worth a link. */
export function navSections(): readonly V3Section[] {
  return sections.filter((section) => section.built && section.inNav);
}
