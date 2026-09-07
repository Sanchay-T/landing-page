import { ContactCTA } from "@/components/ds/contact-cta";
import { Mark } from "@/components/ds/mark";
import { contactLabel } from "@/lib/site";
import { isBuilt, navSections } from "./sections";

/**
 * v5 top bar.
 *
 * A product site's header: identity, section anchors, one primary action. Every
 * anchor comes from `sections.ts` and only renders once its section is on the
 * page, so this bar cannot hold a dead link. The secondary text link is the one
 * secondary action COPY.md sanctions ("See how it was built", section 2) and it
 * is gated on the case-study section existing.
 *
 * One DOM order at every width, and the layout never reorders it, so the tab
 * order and the reading order are the same thing everywhere. Wrapping, not
 * scrolling, on phone: a scroll rail leaves a half-word at the edge at 360.
 */
export function Nav() {
  const links = navSections();
  const showCaseLink = isBuilt("work");

  return (
    <header className="v5-nav">
      <div className="v5-container">
        <div className="v5-nav__bar">
          <a href="#hero" className="v5-nav__brand">
            <Mark className="v5-nav__mark" />
            Devonel
          </a>

          {links.length > 0 ? (
            <nav className="v5-nav__links" aria-label="Sections">
              {links.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="v5-nav__link">
                  {s.label}
                </a>
              ))}
            </nav>
          ) : null}

          {showCaseLink ? (
            <a href="#work" className="v5-textlink v5-nav__second">
              See how it was built
            </a>
          ) : null}

          <ContactCTA className="v5-btn v5-btn--primary v5-btn--sm v5-nav__cta">
            {contactLabel()}
          </ContactCTA>
        </div>
      </div>
    </header>
  );
}
