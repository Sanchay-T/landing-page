import { ContactCTA } from "@/components/ds/contact-cta";
import { Mark } from "@/components/ds/mark";
import { contactLabel, site } from "@/lib/site";
import type { V1Section } from "./sections";

/**
 * Date on the dateline. COPY.md section 10 sources one date for this page,
 * "Page last revised 7 Sep 2026", so that is the date the masthead carries.
 * There is no founding year in any source, so the nameplate prints none.
 */
const REVISED = "Revised 7 Sep 2026";

/**
 * The masthead: this variation's nav and the front page nameplate in one.
 *
 * A broadsheet does not have a navigation bar, it has a nameplate, a dateline
 * and an index of what is inside, so that is what this is. It does not stick to
 * the top: a fixed rail would fight the printed page and, on a phone, would eat
 * the room the hero needs to keep its CTA on screen.
 *
 * Links are generated from `sections`, which every page of this variation
 * takes from `SECTIONS` in ./sections, so the index can never point at a
 * section that is not on the page and an inside page can never drift out of
 * step with the front page.
 *
 * `hrefBase` is empty on /v1, where a bare `#id` is correct. A sub-page such as
 * /v1/work/jewelo passes "/v1", which makes every index link an absolute
 * `/v1#id` so the masthead still works as the way back to the front page.
 */
export function V1Nav({
  sections,
  hrefBase = "",
}: {
  sections: readonly V1Section[];
  hrefBase?: string;
}) {
  return (
    <header className="v1-masthead">
      {/* Running head, set to the screen edges the way a printed page sets it.
          Same .v1-folio pattern the foot of every section uses. */}
      <div className="v1-folio v1-bleed v1-masthead__rail">
        <span>{site.locations.join(" and ")}</span>
        <span className="v1-masthead__revised">{REVISED}</span>
      </div>

      <div className="v1-rule-double" />

      <div className="v1-masthead__name v1-shell">
        <div className="v1-masthead__lockup">
          <Mark className="v1-masthead__mark" />
          <span className="v1-wordmark">{site.name}</span>
        </div>
        <p className="v1-masthead__deck">{site.positioning}</p>
      </div>

      {/* The bar's rules run to the screen edge, its content stops at the
          content cap, so the widest windows read as a wide page margin. */}
      <div className="v1-masthead__indexbar">
        <nav className="v1-masthead__index v1-shell" aria-label="Sections">
          {/* An index, set the way a paper sets one: entries wrap onto as many
              ruled lines as the measure needs, and every entry is whole on its
              line. Nothing scrolls sideways and nothing hides behind a menu
              button. `data-compact` marks the five a phone prints; the CSS
              drops the rest below 720px, where the full ten cannot fit beside
              the nameplate without pushing the hero off the first screen. The
              colophon at the foot of the page always carries all ten. */}
          <ul className="v1-masthead__list">
            {sections.map((section) => (
              <li key={section.id} data-compact={section.compact ? "" : undefined}>
                <a href={`${hrefBase}#${section.id}`} className="v1-navlink v1-underline">
                  {section.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hidden below 720px by the CSS, not by a condition here, so the
              markup stays one masthead. A phone meets this same action as the
              hero's classified box one screen down and above the fold, and a
              printed nameplate carries no button at all. */}
          <ContactCTA className="v1-classified v1-classified--sm v1-masthead__cta">
            <span className="v1-classified__label v1-underline">{contactLabel()}</span>
          </ContactCTA>
        </nav>
      </div>
    </header>
  );
}
