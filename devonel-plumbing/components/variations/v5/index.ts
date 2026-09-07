/**
 * Variation 5 - "Console".
 *
 * The page imports `tokens.css` once and then composes from here. Section
 * components are added to this barrel as they land, in page order.
 */

export { Nav } from "./nav";
export { Hero } from "./hero";
export { SECTIONS, navSections, isBuilt } from "./sections";
export type { V5Section } from "./sections";
