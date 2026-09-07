/**
 * v3 Scroll Story - the page as sixteen days.
 *
 * Two lists live here and nothing else may hold either of them.
 *
 * `sections` is the ten canonical sections of the page in document order, each
 * with the tick (the day) it is set on, the reduced-motion band it collapses
 * into, and whether it has been built yet. The tick bar reads it, so an unbuilt
 * section can never become a dead anchor.
 *
 * `ticks` is the sixteen days of the build. Every date and every event on it is
 * quoted from `docs/goal/01-business-brief.md` section 4.1; a day the brief does
 * not date carries no event and shows nothing on hover. Nothing here is
 * inferred, softened or filled in.
 */

/** The ten canonical sections, in document order. */
export type SectionId =
  | "hero"
  | "proof"
  | "services"
  | "work"
  | "process"
  | "founders"
  | "engagement"
  | "faq"
  | "contact"
  | "footer";

/**
 * The three fixed bands the ramp collapses into under `prefers-reduced-motion`
 * and with no scroll timeline: night through section 3, first light through
 * section 6, day from section 7.
 */
export type Stage = "night" | "first-light" | "day";

export type Section = {
  id: SectionId;
  /**
   * Link text for the footer index and accessible name for the tick that links
   * here. Section labels are verbatim from `docs/goal/COPY.md`; the hero has no
   * label there and takes the wordmark, which is the name a reader recognises,
   * and the footer never links to itself.
   */
  label: string;
  /** First tick this section is set on, 1-16. */
  tick: number;
  /** Last tick, for the case-study spine which spans days 3 to 14. */
  tickEnd: number;
  stage: Stage;
  /** True only where the section breaks the ramp on purpose. */
  flashForward?: true;
  /** False until the section exists in the DOM. Unbuilt sections get no link. */
  built: boolean;
  /** False for the footer, which is the end of the page rather than a stop. */
  inNav: boolean;
};

export const sections: readonly Section[] = [
  { id: "hero", label: "Devonel", tick: 1, tickEnd: 1, stage: "night", built: true, inNav: true },
  {
    id: "proof",
    label: "Proof of work",
    tick: 16,
    tickEnd: 16,
    stage: "night",
    flashForward: true,
    built: true,
    inNav: true,
  },
  {
    id: "services",
    label: "What you buy",
    tick: 2,
    tickEnd: 2,
    stage: "night",
    built: true,
    inNav: true,
  },
  {
    id: "work",
    label: "Case studies",
    tick: 3,
    tickEnd: 14,
    stage: "first-light",
    built: true,
    inNav: true,
  },
  {
    id: "process",
    label: "How we work",
    tick: 15,
    tickEnd: 15,
    stage: "first-light",
    built: true,
    inNav: true,
  },
  {
    id: "founders",
    label: "Who you work with",
    tick: 16,
    tickEnd: 16,
    stage: "first-light",
    built: true,
    inNav: true,
  },
  {
    id: "engagement",
    label: "How a quote works",
    tick: 16,
    tickEnd: 16,
    stage: "day",
    built: true,
    inNav: true,
  },
  {
    id: "faq",
    label: "Before you pay",
    tick: 16,
    tickEnd: 16,
    stage: "day",
    built: true,
    inNav: true,
  },
  { id: "contact", label: "Start", tick: 16, tickEnd: 16, stage: "day", built: true, inNav: true },
  { id: "footer", label: "Footer", tick: 16, tickEnd: 16, stage: "day", built: true, inNav: false },
];

export function getSection(id: SectionId): Section {
  const section = sections.find((s) => s.id === id);
  if (!section) throw new Error(`v3: unknown section "${id}"`);
  return section;
}

export type Tick = {
  /** 1-16. */
  n: number;
  /** "11 Aug" through "27 Aug", the readout for this day. */
  date: string;
  /** The section this tick jumps to. */
  section: SectionId;
  /**
   * What happened that day, quoted or compressed from brief 4.1 with nothing
   * added. Absent on every day the brief does not date, and those ticks show
   * nothing on hover.
   */
  event?: string;
};

/**
 * The build ran from 11 Aug to 27 Aug, sixteen days [brief 4.1]. Sixteen ticks
 * therefore have to cover seventeen calendar dates, and one date does not get a
 * tick of its own. It is 18 Aug: the brief dates no event on it, and dropping it
 * keeps 11, 12, 19, 26 and 27 Aug - every day the brief does date - on a tick of
 * its own.
 *
 * Ticks 3 to 14 are the case-study spine, which is why the marker travels
 * fastest there.
 */
export const ticks: readonly Tick[] = [
  {
    n: 1,
    date: "11 Aug",
    section: "hero",
    event: "Spec received. Not a customisation field bolted onto a store page.",
  },
  { n: 2, date: "12 Aug", section: "services", event: "The studio takes the brief." },
  { n: 3, date: "13 Aug", section: "work" },
  { n: 4, date: "14 Aug", section: "work" },
  { n: 5, date: "15 Aug", section: "work" },
  { n: 6, date: "16 Aug", section: "work" },
  { n: 7, date: "17 Aug", section: "work" },
  { n: 8, date: "19 Aug", section: "work", event: "The client has still seen nothing." },
  { n: 9, date: "20 Aug", section: "work" },
  { n: 10, date: "21 Aug", section: "work" },
  { n: 11, date: "22 Aug", section: "work" },
  { n: 12, date: "23 Aug", section: "work" },
  { n: 13, date: "24 Aug", section: "work" },
  { n: 14, date: "25 Aug", section: "work" },
  { n: 15, date: "26 Aug", section: "process", event: "The overnight build starts." },
  {
    n: 16,
    date: "27 Aug",
    section: "proof",
    event: "Live at 10:09, the morning of the client's exhibition stall.",
  },
];

/** Ticks resolved against `sections`, so an unbuilt target renders unlinked. */
export type ResolvedTick = Tick & { href?: string; label: string };

export const resolvedTicks: readonly ResolvedTick[] = ticks.map((tick) => {
  const section = getSection(tick.section);
  return {
    ...tick,
    label: section.label,
    ...(section.built ? { href: `#${section.id}` } : null),
  };
});
