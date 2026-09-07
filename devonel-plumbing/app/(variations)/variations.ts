/**
 * The five redesign directions, in one place.
 *
 * The switcher at `/`, the mini-switcher inside the route group, and anything
 * else that lists the variations all read from here, so they cannot drift.
 * Names and theses come from `docs/goal/03-design-research.md` section 4.
 */

export type VariationNumber = 1 | 2 | 3 | 4 | 5;

export type Variation = {
  /** 1-5, the label on the switcher button. */
  n: VariationNumber;
  /** URL segment under the route group: v1..v5. */
  slug: `v${VariationNumber}`;
  /** Direction name from the design research. */
  name: string;
  /** One line on what the direction argues, verbatim from the research. */
  thesis: string;
  /** Absolute path to the variation. */
  href: `/v${VariationNumber}`;
};

export const variations: readonly Variation[] = [
  {
    n: 1,
    slug: "v1",
    name: "Studio Dark",
    thesis:
      "A near-black workshop with one lit object in it: Devonel's own mark, assembled in front of you out of sixteen pieces, before a single claim is made.",
    href: "/v1",
  },
  {
    n: 2,
    slug: "v2",
    name: "Shader Light",
    thesis:
      "Off-white paper with a slow shader field behind it, where the field is not decoration but a live reading of the two cities the studio works from.",
    href: "/v2",
  },
  {
    n: 3,
    slug: "v3",
    name: "Scroll Story",
    thesis:
      "The whole page is one build, told in order, and the background travels from the night the brief arrived to the morning the product went live.",
    href: "/v3",
  },
  {
    n: 4,
    slug: "v4",
    name: "Bento SaaS",
    thesis:
      "A light, tightly engineered product page whose grid is a status board, with the launch energy of a company that has something running today.",
    href: "/v4",
  },
  {
    n: 5,
    slug: "v5",
    name: "Liquid Metal",
    thesis:
      "A dark, near-empty page with one chrome orb and type at poster scale, built for a studio that wants to be read as expensive.",
    href: "/v5",
  },
] as const;

export function getVariation(slug: string): Variation | undefined {
  return variations.find((v) => v.slug === slug);
}
