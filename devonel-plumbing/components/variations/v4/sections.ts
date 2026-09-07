/**
 * The ten canonical sections of v4, in page order.
 *
 * One list, read by the nav and by anything else that has to know what exists.
 * `built` is the honesty flag: it is false until a section is on the page, and
 * the nav only ever links to a section whose flag is true, so this file makes a
 * dead nav link impossible rather than merely discouraged. A builder finishing
 * a section flips one boolean here and its anchor appears.
 *
 * Labels are the section labels from `docs/goal/COPY.md`. The hero has no label
 * there, so it carries an internal one and never appears in the nav.
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
  | "contact"
  | "footer";

export type Section = {
  /** The DOM id, and the anchor target. */
  id: SectionId;
  /** Nav and heading label, verbatim from COPY.md where COPY.md has one. */
  label: string;
  /** True once the section is really on the page. The nav reads this. */
  built: boolean;
  /** True for the five the product bar carries once they are built. */
  inNav: boolean;
};

export const sections: readonly Section[] = [
  // COPY.md section 1 carries an eyebrow, not a label. Never in the nav: the
  // wordmark is the link back to the top.
  { id: "hero", label: "Devonel", built: true, inNav: false },
  // COPY.md section 2, "Label: Proof of work".
  { id: "proof", label: "Proof of work", built: true, inNav: true },
  // COPY.md section 3, "Label: What you buy".
  { id: "services", label: "What you buy", built: true, inNav: true },
  // COPY.md section 4, "Label: Case studies".
  { id: "work", label: "Case studies", built: true, inNav: true },
  // COPY.md section 5, "Label: How we work".
  { id: "process", label: "How we work", built: true, inNav: true },
  // COPY.md section 6, "Label: Who you work with".
  { id: "founders", label: "Who you work with", built: true, inNav: false },
  // COPY.md section 7, "Label: How a quote works".
  { id: "engagement", label: "How a quote works", built: true, inNav: true },
  // COPY.md section 8, "Label: Before you pay".
  { id: "faq", label: "Before you pay", built: true, inNav: false },
  // COPY.md section 9, "Label: Start".
  { id: "contact", label: "Start", built: true, inNav: false },
  // COPY.md section 10 carries no label; the footer is never a nav target, and
  // the footer's own index drops this row rather than link to itself.
  { id: "footer", label: "Footer", built: true, inNav: false },
];

/** The anchors the nav is allowed to render today. Five once all five ship. */
export const navSections = sections.filter((s) => s.built && s.inNav);
