/**
 * The ten canonical sections of v1 "Studio Dark", in page order.
 *
 * One list, read by every part of the variation, so the anchor ids, the labels
 * and the nav can never drift apart. Labels are the on-page labels COPY.md
 * prints for each section, not its documentation headings, so the footer index
 * reads in the reader's words; no label is invented here. The hero has no
 * COPY.md label line, so it carries the wordmark, "Devonel", the way the nav
 * and the colophon already name the top of the page.
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
  /** On-page label from COPY.md (hero: the wordmark). */
  label: string;
  built: boolean;
  inNav: boolean;
};

export const sections: readonly Section[] = [
  { id: "hero", label: "Devonel", built: true, inNav: true },
  { id: "proof", label: "Proof of work", built: true, inNav: true },
  { id: "services", label: "What you buy", built: true, inNav: true },
  { id: "case-studies", label: "Case studies", built: true, inNav: true },
  { id: "process", label: "How we work", built: true, inNav: true },
  { id: "founders", label: "Who you work with", built: true, inNav: true },
  { id: "engagement", label: "How a quote works", built: true, inNav: true },
  { id: "faq", label: "Before you pay", built: true, inNav: true },
  { id: "final-cta", label: "Start", built: true, inNav: true },
  { id: "footer", label: "Footer", built: true, inNav: false },
] as const;

/** Sections that exist and belong in a navigation list. Safe to render as links. */
export const navSections = sections.filter((s) => s.built && s.inNav);
