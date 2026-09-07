/**
 * The ten sections of v5 "Liquid Metal", in page order.
 *
 * One list, read by every part of the variation that needs to know what exists:
 * the page assembles `built` sections in this order, and the footer's index
 * lists the `inNav` ones. A section is added by flipping `built` here in the
 * same commit that adds its component, so the page and its index can never
 * disagree about what is on it.
 *
 * `label` is the section label from `docs/goal/COPY.md`, verbatim. COPY.md
 * gives no label to the hero or the footer: the hero's index entry is the
 * wordmark, "Devonel", which is what the page says at the top of itself, and
 * the footer is not in the index at all, so its `label` is only the internal
 * name of the row. Nothing here invents copy.
 *
 * Why nothing is `inNav` at the top of the page: this direction's nav is two
 * 12px items in opposite corners and nothing else (03-design-research.md
 * section 4, "Component vocabulary"). `inNav` therefore drives the footer's
 * section index, which is where COPY.md section 10 puts "the ten section
 * anchors". Nine of the ten are listed: the footer is excluded because a link
 * to the block the index sits in is noise, and the hero is in, labelled with
 * the wordmark rather than with a heading name.
 */

export type SectionId =
  | "hero"
  | "proof"
  | "services"
  | "work"
  | "process"
  | "founders"
  | "engagement"
  | "faq"
  | "start"
  | "footer";

export type Section = {
  /** The `id` on the section element, and the anchor a link points at. */
  id: SectionId;
  /** Section label from COPY.md. */
  label: string;
  /** True once the section is built and rendered by the page. */
  built: boolean;
  /** True when the footer's section index should list it. */
  inNav: boolean;
};

export const sections: readonly Section[] = [
  { id: "hero", label: "Devonel", built: true, inNav: true },
  { id: "proof", label: "Proof of work", built: true, inNav: true },
  { id: "services", label: "What you buy", built: true, inNav: true },
  { id: "work", label: "Case studies", built: true, inNav: true },
  { id: "process", label: "How we work", built: true, inNav: true },
  { id: "founders", label: "Who you work with", built: true, inNav: true },
  { id: "engagement", label: "How a quote works", built: true, inNav: true },
  { id: "faq", label: "Before you pay", built: true, inNav: true },
  { id: "start", label: "Start", built: true, inNav: true },
  { id: "footer", label: "Footer", built: true, inNav: false },
] as const;

/** The sections a link may point at right now: built, and listed in the index. */
export function navSections(): readonly Section[] {
  return sections.filter((section) => section.built && section.inNav);
}
