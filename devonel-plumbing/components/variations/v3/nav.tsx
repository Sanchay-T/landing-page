import { ContactCTA } from "@/components/ds/contact-cta";
import { Mark } from "@/components/ds/mark";
import { contactLabel } from "@/lib/site";
import type { V3Section } from "./sections";

type V3NavProps = {
  /**
   * The anchors to advertise, already filtered to sections that are on the
   * page. `navSections()` in `sections.ts` is the only caller, so adding a
   * section never means editing this file.
   */
  sections: readonly V3Section[];
  /**
   * What every anchor is relative to. Empty on the variation page itself, where
   * `#work` is a jump within the document. A sub page such as
   * `/v3/work/jewelo` passes `"/v3"`, so the same bar reads as a way back to
   * the section it came from instead of pointing at ids that are not there.
   */
  base?: string;
};

/**
 * Variation 3 - the floating bar.
 *
 * A single glass bar over the film frame: the mark and the wordmark on the
 * left, the section anchors in the middle, the one CTA on the right. It is the
 * only fixed element the variation owns, and it carries no colour of its own
 * beyond the amber pill, so the frame behind it stays the picture.
 *
 * Under 1024px it folds into two rows and the anchors become a horizontal
 * scroller that runs to both screen edges. Every label is `white-space: nowrap`
 * and the row scroll-snaps, so a label is never wrapped or cut mid-word on a
 * 360px phone; it scrolls out of view whole.
 *
 * The same bar serves the sub pages. They pass `base="/v3"` so every anchor
 * leaves the sub page and lands on the matching section of the variation, which
 * is why no route under `/v3` needs a nav of its own.
 */
export function V3Nav({ sections, base = "" }: V3NavProps) {
  return (
    <header className="v3-nav">
      <div className="v3-nav__bar">
        <a className="v3-nav__brand" href={`${base}#hero`}>
          <Mark className="v3-nav__mark" />
          <span className="v3-nav__wordmark">Devonel</span>
        </a>

        {sections.length > 0 ? (
          <nav className="v3-nav__anchors" aria-label="Sections">
            <ul className="v3-nav__list">
              {sections.map((section) => (
                <li key={section.id}>
                  <a className="v3-nav__link" href={`${base}#${section.id}`}>
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <ContactCTA className="v3-nav__cta v3-pill v3-pill--sm v3-glow">
          {contactLabel()}
        </ContactCTA>
      </div>
    </header>
  );
}
