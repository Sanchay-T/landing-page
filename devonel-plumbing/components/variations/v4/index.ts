/**
 * Variation 4 - Swiss Signal. One import surface for the page.
 *
 * The stylesheet is not re-exported here on purpose: `tokens.css` is a global
 * side-effect import and belongs in `app/(variations)/v4/page.tsx`, next to the
 * `.v4` element that scopes it.
 */

export { V4Contact } from "./contact";
export { V4Engagement } from "./engagement";
export { V4Faq } from "./faq";
export { V4Footer } from "./footer";
export { V4Founders } from "./founders";
export { V4Hero } from "./hero";
export { V4Nav } from "./nav";
export { V4Proof } from "./proof";
export { V4Process } from "./process";
export { V4Services } from "./services";
export { SECTIONS, navSections, type V4Section, type V4SectionId } from "./sections";
export { V4Work } from "./work";
