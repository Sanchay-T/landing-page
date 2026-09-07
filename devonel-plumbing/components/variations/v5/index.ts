/**
 * The public face of variation 5, "Liquid Metal".
 *
 * `app/(variations)/v5/page.tsx` imports from here and from `./tokens.css`, and
 * from nowhere else inside this folder, so a section can be renamed or split
 * without touching the route. `orb-scene.tsx` is deliberately absent: it is the
 * only module that imports three, and it must stay behind the
 * `next/dynamic({ ssr: false })` boundary in `hero.tsx`. Re-exporting it here
 * would put the whole library in the route's first-load JS.
 */

export { Hero } from "./hero";
export { Nav } from "./nav";
export { Proof } from "./proof";
export { Services } from "./services";
export { navSections, sections } from "./sections";
export type { Section, SectionId } from "./sections";
