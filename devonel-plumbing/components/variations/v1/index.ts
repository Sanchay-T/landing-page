/**
 * v1 "Studio Dark".
 *
 * The barrel a route imports from. `tokens.css` is imported by the page rather
 * than re-exported here, and `mark-scene.tsx` is deliberately absent: it is
 * reached only through the dynamic boundary inside `hero.tsx`, because naming
 * it anywhere else would put three.js in /v1's first-load JS.
 */

export { Hero } from "./hero";
export { Nav } from "./nav";
export { Proof } from "./proof";
export { Services } from "./services";
export { navSections, sections, type Section, type SectionId } from "./sections";
