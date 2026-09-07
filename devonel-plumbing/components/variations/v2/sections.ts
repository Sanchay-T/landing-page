/**
 * v2 "Shader Light" - the ten canonical sections, in page order.
 *
 * One list, read by `nav.tsx` (which renders a link only for a section that is
 * both `built` and `inNav`, so the nav can never point at a section that does
 * not exist yet) and by anything else that has to know the page's shape.
 * Labels are verbatim from `docs/goal/COPY.md`: the `**Label:**` line where the
 * section has one, otherwise the section heading.
 *
 * A builder finishing a section flips `built` to true here and nowhere else.
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
  | "final-cta"
  | "footer";

export type Section = {
  /** The element id the section renders, and its anchor. */
  id: SectionId;
  /** Nav label, verbatim from COPY.md. */
  label: string;
  /** True once the section is built on the page. */
  built: boolean;
  /** False for the two sections a nav never links to: the top and the footer. */
  inNav: boolean;
};

export const sections: readonly Section[] = [
  { id: "hero", label: "Hero", built: true, inNav: false },
  { id: "proof", label: "Proof of work", built: true, inNav: true },
  { id: "services", label: "What you buy", built: true, inNav: true },
  { id: "work", label: "Case studies", built: true, inNav: true },
  { id: "process", label: "How we work", built: true, inNav: true },
  { id: "founders", label: "Who you work with", built: true, inNav: true },
  { id: "engagement", label: "How a quote works", built: true, inNav: true },
  { id: "faq", label: "Before you pay", built: false, inNav: true },
  { id: "final-cta", label: "Start", built: false, inNav: true },
  { id: "footer", label: "Footer", built: false, inNav: false },
] as const;

/** The sections a nav may link to today. Empty until the next section lands. */
export const navSections: readonly Section[] = sections.filter((s) => s.built && s.inNav);
