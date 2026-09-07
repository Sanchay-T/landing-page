/**
 * v3 Scroll Story. Everything the route needs, in one import.
 *
 * `tokens.css` is imported by the page rather than re-exported here: a CSS
 * import from a barrel file would be dropped when the barrel is tree-shaken.
 */

export { Hero } from "./hero";
export { Proof } from "./proof";
export { TickBar } from "./tick-bar";
export { WireRing } from "./wire-ring";
export { getSection, resolvedTicks, sections, ticks } from "./sections";
export type { ResolvedTick, Section, SectionId, Stage, Tick } from "./sections";
