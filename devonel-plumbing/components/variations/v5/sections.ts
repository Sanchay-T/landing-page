/**
 * The v5 section registry.
 *
 * One array, read by the nav, by any in-page link and by the footer, so a link
 * can only exist for a section that is actually rendered. `built` flips to true
 * in the same commit that lands the section's component and its `id` on the
 * page: a nav entry pointing at an anchor that is not in the document is a dead
 * link, and dead links are a failing item in `docs/goal/05-build-spec.md`.
 *
 * `id` is the DOM anchor. `label` is what the nav prints. `nav: false` keeps a
 * section out of the top bar without keeping it out of the registry, which is
 * how the hero and the footer stay addressable but unlisted.
 */

export type V5Section = {
  /** The element id on the page, and the anchor target. */
  id: string;
  /** Nav label. Short on purpose: this is a product-site top bar, not an index. */
  label: string;
  /** Whether the section is listed in the top bar. */
  nav: boolean;
  /** Whether the section exists in the document yet. */
  built: boolean;
};

/** Order matches the canonical section list in docs/goal/05-build-spec.md. */
export const SECTIONS: readonly V5Section[] = [
  { id: "hero", label: "Overview", nav: false, built: true },
  { id: "proof", label: "Proof", nav: true, built: false },
  { id: "services", label: "Services", nav: true, built: false },
  { id: "work", label: "Work", nav: true, built: false },
  { id: "process", label: "Process", nav: true, built: false },
  { id: "founders", label: "Founders", nav: true, built: false },
  { id: "engagement", label: "Engagement", nav: true, built: false },
  { id: "faq", label: "FAQ", nav: true, built: false },
  { id: "contact", label: "Contact", nav: true, built: false },
  { id: "footer", label: "Footer", nav: false, built: false },
] as const;

/** The entries the top bar prints right now. */
export function navSections(): readonly V5Section[] {
  return SECTIONS.filter((s) => s.nav && s.built);
}

/** True once the named section is on the page, for gating an in-page link. */
export function isBuilt(id: string): boolean {
  return SECTIONS.some((s) => s.id === id && s.built);
}
