/**
 * The v2 section registry.
 *
 * One array, in page order. The rail reads it to draw the file tree and the
 * counter, and `app/(variations)/v2/page.tsx` reads it to render the sections,
 * so a section that is on the page is always in the index and never drifts out
 * of it.
 *
 * `id` is the anchor the rail links to and the id the section element carries.
 * `label` is what the rail prints, so it is lowercase and short enough for a
 * 13rem rail: it is a path fragment, not a headline.
 */

export type V2Section = {
  /** DOM id on the <section>, and the #anchor the rail links to. */
  id: string;
  /** What the rail prints for it. Lowercase, hyphenated, 12 characters or less. */
  label: string;
};

export const sections: readonly V2Section[] = [
  { id: "hero", label: "hero" },
  { id: "proof", label: "proof" },
  { id: "services", label: "services" },
  { id: "work", label: "work" },
  { id: "process", label: "process" },
  { id: "founders", label: "founders" },
  { id: "engagement", label: "engagement" },
  { id: "faq", label: "faq" },
  { id: "contact", label: "contact" },
  // Last by contract: this one is the eof block that closes the buffer.
  { id: "footer", label: "eof" },
];
