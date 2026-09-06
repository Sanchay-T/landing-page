/**
 * Variation 1 - Broadsheet. The public surface.
 *
 * The section registry lives in `./sections`, which is the single source for
 * the masthead index and the colophon index on every page of this variation.
 * Both `app/(variations)/v1/page.tsx` and the inside pages under
 * `app/(variations)/v1/work/` import `SECTIONS` from here, so the index on an
 * inside page cannot drift from the front page.
 *
 * How to add a section
 *   1. Build it as `components/variations/v1/<name>.tsx`, exporting one
 *      component that renders a <section id="..."> and nothing outside it.
 *   2. Re-export it here.
 *   3. Add one entry to `SECTIONS` in `./sections` and render the component
 *      under the ones already there in `app/(variations)/v1/page.tsx`.
 */

export { SECTIONS, type V1Section } from "./sections";

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
