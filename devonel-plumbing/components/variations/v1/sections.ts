/**
 * Variation 1 - Broadsheet. The one section registry.
 *
 * Every page in this variation renders its masthead and its colophon index
 * from this array, so a link can only exist for a section that is actually on
 * /v1 and an inside page can never drift out of step with the front page.
 * Nothing in this variation may hardcode an anchor list anywhere else.
 *
 * How to add a section
 *   1. Build it as `components/variations/v1/<name>.tsx`, exporting one
 *      component that renders a <section id="..."> and nothing outside it.
 *   2. Re-export it from `./index`.
 *   3. Add one entry below, in the order it appears on the page, and render the
 *      component under the ones already there in `app/(variations)/v1/page.tsx`.
 */

export type V1Section = {
  /** The `id` on the rendered <section>. The masthead links to `#{id}`. */
  readonly id: string;
  /** What the index calls it. Short: it sits in a ruled index rail. */
  readonly label: string;
  /**
   * Prints in the compact masthead index, the one a phone gets.
   *
   * Ten labels do not fit beside a nameplate at 360px in any arrangement that
   * is still one or two lines tall, and a taller masthead pushes the hero's
   * call to action off the first screen. So the phone prints the five that
   * carry the buying decision and the colophon at the foot of the page keeps
   * the full ten. Leave it unset and the entry appears from 720px up only.
   */
  readonly compact?: boolean;
};

/**
 * The canonical order of the page.
 *
 * The five marked `compact` are the buyer's path through it: what we have
 * shipped, what you can buy, the evidence, what it costs to start, and how to
 * start. The five left off a phone are the ones a reader arrives at by reading
 * on rather than by jumping.
 */
export const SECTIONS: readonly V1Section[] = [
  { id: "hero", label: "Front page" },
  { id: "proof", label: "Proof of work", compact: true },
  { id: "services", label: "What you buy", compact: true },
  { id: "work", label: "Case studies", compact: true },
  { id: "process", label: "How we work" },
  { id: "founders", label: "Who you work with" },
  { id: "engagement", label: "How a quote works", compact: true },
  { id: "faq", label: "Before you pay" },
  { id: "contact", label: "Start", compact: true },
  { id: "footer", label: "Colophon" },
];
