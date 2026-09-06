/**
 * Variation 2 - Terminal. Public surface of the direction.
 *
 * The system is four files: `tokens.css` is the whole design system,
 * `sections.ts` is the index of what is on the page, `nav.tsx` draws that index
 * as a rail, and one file per section supplies the section itself.
 *
 * ---------------------------------------------------------------------------
 * How to add a section
 * ---------------------------------------------------------------------------
 * 1. Write `components/variations/v2/<name>.tsx` exporting one component. Open
 *    it with the shared divider and put the content in the shared measure:
 *
 *      <section id="proof" className="v2-section" aria-labelledby="v2-proof-h">
 *        <div className="v2-rule" data-label="proof" aria-hidden="true" />
 *        <div className="v2-measure"> ... </div>
 *      </section>
 *
 *    The `data-label` is printed into the full-width rule by CSS, so the rule
 *    needs no component and no image. `id` must match the registry entry.
 *
 * 2. Append `{ id: "proof", label: "proof" }` to `sections` in `sections.ts`.
 *    That single edit puts the section in the rail tree, in the rail counter,
 *    and in the IntersectionObserver that marks the current one.
 *
 * 3. Export the component from this file and render it in
 *    `app/(variations)/v2/page.tsx`, in the same order as the registry.
 *
 * 4. Style it with the tokens in `tokens.css`. What the direction allows:
 *    - one family (`var(--font-mono)`) and exactly three sizes, `--v2-t-1`,
 *      `--v2-t-2`, `--v2-t-3`. A fourth size is a direction change;
 *    - five colours. `--v2-accent` is reserved for the caret, live counters and
 *      the CTA, `--v2-rule` never carries text;
 *    - spacing in `ch` across and `lh` down, applied to elements set at
 *      `--v2-t-1` or `--v2-t-2` so the units measure against the right face;
 *    - radius 0, shadow none, no gradient, and zero images. No `<img>`, no
 *      `background-image`, no SVG illustration: the type is the art;
 *    - motion only through `v2-print` (entrance), `v2-inv` (hover) and
 *      `v2-meter` (scroll). All three are `steps()`, all three have a
 *      reduced-motion resting state already declared. Nothing may start at
 *      `opacity: 0`, and no text may be hidden until an animation reveals it.
 *
 * 5. Copy comes from `docs/goal/COPY.md` only, tuned by its v2 tone note:
 *    numerals, lowercase, terse. Contact goes through `ContactCTA` and
 *    `lib/site.ts`; no section names a channel of its own.
 */

export { Nav } from "./nav";
export { Hero } from "./hero";
export { Proof } from "./proof";
export { Services } from "./services";
export { Work } from "./work";
export { Process } from "./process";
export { Founders } from "./founders";
export { Engagement } from "./engagement";
export { Faq } from "./faq";
export { Contact } from "./contact";
export { Footer } from "./footer";
export { sections } from "./sections";
export type { V2Section } from "./sections";
