/**
 * The section index for variation 4 - Swiss Signal.
 *
 * One array is the whole contract between the page and its navigation. The nav
 * bar renders an anchor only for a section whose `built` flag is true, so a
 * link on this page can never point at something that is not on the page. That
 * is the rule the build spec calls out: dead links and `#` hrefs are failing
 * items.
 *
 * HOW TO ADD YOUR SECTION
 *   1. Flip `built` to true on your row here.
 *   2. Render the component in `app/(variations)/v4/page.tsx`, in this order,
 *      with `id` matching the `id` below so the anchor resolves.
 * Do not reorder the array: it is the page order and the nav order at once.
 */

export type V4SectionId =
  | "hero"
  | "proof"
  | "services"
  | "work"
  | "process"
  | "founders"
  | "engagement"
  | "faq"
  | "contact"
  | "footer";

export type V4Section = {
  /** The DOM id on the section element, and the anchor target. */
  id: V4SectionId;
  /**
   * The word on the signage bar. Kept to one or two words: the bar is a black
   * signage band, not a sentence, and long labels are what make the anchor row
   * wrap badly at 360. Labels track the section labels in docs/goal/COPY.md
   * where COPY.md gives one.
   */
  navLabel: string;
  /** False for a section that is on the page but not worth a stop on the bar. */
  inNav: boolean;
  /** True once the section is rendered on the page. Nav reads this. */
  built: boolean;
};

export const SECTIONS: readonly V4Section[] = [
  { id: "hero", navLabel: "Top", inNav: true, built: true },
  { id: "proof", navLabel: "Proof", inNav: true, built: false },
  { id: "services", navLabel: "Services", inNav: true, built: false },
  { id: "work", navLabel: "Work", inNav: true, built: false },
  { id: "process", navLabel: "Process", inNav: true, built: false },
  { id: "founders", navLabel: "Founders", inNav: true, built: false },
  { id: "engagement", navLabel: "Engagement", inNav: true, built: false },
  { id: "faq", navLabel: "FAQ", inNav: true, built: false },
  { id: "contact", navLabel: "Contact", inNav: true, built: false },
  { id: "footer", navLabel: "Footer", inNav: false, built: false },
] as const;

/** The stops the signage bar shows right now. */
export function navSections(sections: readonly V4Section[] = SECTIONS): V4Section[] {
  return sections.filter((section) => section.built && section.inNav);
}
