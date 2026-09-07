import { ContactCTA } from "@/components/ds/contact-cta";
import { Mark } from "@/components/ds/mark";
import { contactLabel } from "@/lib/site";
import { navSections, type V4Section } from "./sections";

/**
 * The signage bar.
 *
 * A black band across the top of the page carrying three things and nothing
 * else: the mark and wordmark, the stops on the line, and one flat yellow block
 * that sends the brief. It is a Swiss transit sign, so it has no shadow, no
 * border radius, no blur and no translucency.
 *
 * Stops come from `sections.ts` and only for sections that are actually on the
 * page. The wordmark is the stop for the hero, which is why it is a link to
 * `#hero` rather than plain text.
 *
 * At narrow widths the bar becomes two rows: brand and CTA on the first, the
 * stops wrapping freely on the second. `flex-wrap` rather than a horizontal
 * scroller is deliberate, because a scroller is what clips a word in half at
 * 360 and hides the stops past the fold of the bar.
 */
export function V4Nav({ sections }: { sections: readonly V4Section[] }) {
  const stops = navSections(sections);

  return (
    <header className="v4-nav">
      <div className="v4-shell">
        <div className="v4-nav__inner">
          <a className="v4-nav__brand" href="#hero">
            <Mark className="v4-nav__mark" />
            <span>Devonel</span>
          </a>

          {stops.length > 0 ? (
            <nav className="v4-nav__sections" aria-label="Sections">
              <ul className="v4-nav__list">
                {stops.map((section) => (
                  <li key={section.id}>
                    <a className="v4-nav__link" href={`#${section.id}`}>
                      {section.navLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          <ContactCTA className="v4-block v4-nav__cta">{contactLabel()}</ContactCTA>
        </div>
      </div>
    </header>
  );
}
