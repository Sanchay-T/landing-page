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
    name: "Broadsheet",
    thesis:
      "A studio that publishes its ledger reads like a trade newspaper, so the page is typeset like one.",
    href: "/v1",
  },
  {
    n: 2,
    slug: "v2",
    name: "Terminal",
    thesis:
      "No imagery at all; the whole page is one monospace type system and the ledger numbers are the art.",
    href: "/v2",
  },
  {
    n: 3,
    slug: "v3",
    name: "Nightshift",
    thesis:
      "The studio works in the dark while your ops run; the page is a slow film of pipes, valves and light.",
    href: "/v3",
  },
  {
    n: 4,
    slug: "v4",
    name: "Swiss Signal",
    thesis:
      "Process plumbing explained like a metro map; big flat colour, bold geometry, no ornament.",
    href: "/v4",
  },
  {
    n: 5,
    slug: "v5",
    name: "Console",
    thesis:
      "Sell the artefacts, not the story; the page is a scroll of real deliverables — routing diagrams, runbooks, ledgers, alert dashboards.",
    href: "/v5",
  },
] as const;

export function getVariation(slug: string): Variation | undefined {
  return variations.find((v) => v.slug === slug);
}
