/**
 * The ten canonical sections of v1 "Studio Dark", in page order.
 *
 * One list, read by every part of the variation, so the anchor ids, the labels
 * and the nav can never drift apart. Labels are the section names from
 * `docs/goal/COPY.md`; no label is invented here.
 *
 * `built`  the section exists on the page. Anything still false has no anchor
 *          to link to, so link builders must filter on it rather than render a
 *          dead `#href`.
 * `inNav`  the section belongs in the site navigation. v1's top bar carries no
 *          section anchors at all - the direction gives it a wordmark and one
 *          button - so this list is for the footer, which is where COPY.md
 *          section 10 puts "the ten section anchors". The footer is excluded
 *          because a footer that links to itself is a dead end.
 */

export type SectionId =
  | "hero"
  | "proof"
  | "services"
  | "case-studies"
  | "process"
  | "founders"
  | "engagement"
  | "faq"
  | "final-cta"
  | "footer";

export type Section = {
  /** The element id, and the anchor a link uses. */
  id: SectionId;
  /** Section name from COPY.md. */
  label: string;
  built: boolean;
  inNav: boolean;
};

export const sections: readonly Section[] = [
  { id: "hero", label: "Hero", built: true, inNav: true },
  { id: "proof", label: "Proof strip", built: false, inNav: true },
  { id: "services", label: "Services", built: false, inNav: true },
  { id: "case-studies", label: "Case studies", built: false, inNav: true },
  { id: "process", label: "Process", built: false, inNav: true },
  { id: "founders", label: "Founders", built: false, inNav: true },
  { id: "engagement", label: "Engagement", built: false, inNav: true },
  { id: "faq", label: "Objections and FAQ", built: false, inNav: true },
  { id: "final-cta", label: "Final CTA", built: false, inNav: true },
  { id: "footer", label: "Footer", built: false, inNav: false },
] as const;

/** Sections that exist and belong in a navigation list. Safe to render as links. */
export const navSections = sections.filter((s) => s.built && s.inNav);
