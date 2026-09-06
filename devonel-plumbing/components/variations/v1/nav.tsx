import { ContactCTA } from "@/components/ds/contact-cta";
import { Mark } from "@/components/ds/mark";
import { contactLabel, site } from "@/lib/site";
import type { V1Section } from "./index";

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
 * Links are generated from `sections`, so the index can never point at a
 * section that is not on the page.
 */
export function V1Nav({ sections }: { sections: readonly V1Section[] }) {
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
          {/* Scrolls sideways on a phone rather than collapsing behind a menu
              button: with a handful of sections the index is shorter to read
              than a hamburger is to open. */}
          <ul className="v1-masthead__list">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="v1-navlink v1-underline">
                  {section.label}
                </a>
              </li>
            ))}
          </ul>

          <ContactCTA className="v1-classified v1-classified--sm v1-masthead__cta">
            <span className="v1-classified__label v1-underline">{contactLabel()}</span>
          </ContactCTA>
        </nav>
      </div>
    </header>
  );
}
