/**
 * v2 "Shader Light" - public surface.
 *
 * `app/(variations)/v2/page.tsx` imports from here and nothing deeper, so the
 * page never has to know which file a section lives in.
 */

export { Hero } from "./hero";
export { Proof } from "./proof";
export { Nav } from "./nav";
export { Work } from "./work";
export { Services } from "./services";
export { Process } from "./process";
export { Founders } from "./founders";
export { Engagement } from "./engagement";
export { sections, navSections } from "./sections";
export type { Section, SectionId } from "./sections";
