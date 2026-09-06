/**
 * Variation 1 - Broadsheet. The section registry and the public surface.
 *
 * How to add a section
 *   1. Build it as `components/variations/v1/<name>.tsx`, exporting one
 *      component that renders a <section id="..."> and nothing outside it.
 *   2. Re-export it here.
 *   3. Add one entry to the `sections` array in `app/(variations)/v1/page.tsx`
 *      and render the component under the ones already there.
 *
 * The `sections` array is the single source for the masthead index, so a link
 * can only exist for a section that is actually on the page. Nothing else in
 * this variation may hardcode an anchor list.
 */

export type V1Section = {
  /** The `id` on the rendered <section>. The masthead links to `#{id}`. */
  readonly id: string;
  /** What the masthead index calls it. Short: it sits in a one line rail. */
  readonly label: string;
};

export { V1Nav } from "./nav";
export { V1Hero, ColumnRules } from "./hero";
export { V1Proof } from "./proof";
export { V1Services } from "./services";
export { V1Work, RenderSpread, STACK } from "./work";
export { V1Process } from "./process";
export { V1Founders } from "./founders";
export { V1Engagement } from "./engagement";
export { V1Faq } from "./faq";
export { V1Contact } from "./contact";
export { V1Footer } from "./footer";
