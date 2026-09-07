/**
 * Variation 4 - Swiss Signal. One import surface for the page.
 *
 * The stylesheet is not re-exported here on purpose: `tokens.css` is a global
 * side-effect import and belongs in `app/(variations)/v4/page.tsx`, next to the
 * `.v4` element that scopes it.
 */

export { V4Hero } from "./hero";
export { V4Nav } from "./nav";
export { SECTIONS, navSections, type V4Section, type V4SectionId } from "./sections";
