import { ContactCTA } from "@/components/ds/contact-cta";
import { Mark } from "@/components/ds/mark";
import { contactLabel } from "@/lib/site";
import { navSections } from "./sections";

/**
 * Two 12px items in opposite corners, and nothing else.
 *
 * No bar, no ground, no blur, nothing sticky: the direction's whole argument is
 * emptiness, and a header band across the top of a near-black page is the first
 * thing that would break it. Nothing here can ever cover the orb or the CTA.
 *
 * The right-hand item is the canonical primary CTA wording from COPY.md, set as
 * a text link rather than a second button so the pill in the hero stays the one
 * button on the screen. It resolves to whichever channel `lib/site.ts` has
 * configured, so this file names no channel of its own.
 *
 * Section anchors are gated on `built` in `sections.ts`, so a link can never
 * point at a section that is not on the page. Only the hero is built today and
 * the hero is not in the index, so the middle group renders nothing at all and
 * the nav is the two corner items the direction asks for. As sections land they
 * appear here in page order without anyone editing this file.
 */
export function Nav() {
  const links = navSections();

  return (
    <header className="v5-nav">
      <a className="v5-nav__mark" href="#hero">
        <Mark />
        Devonel
      </a>

      {links.length > 0 ? (
        <nav className="v5-nav__index" aria-label="Sections">
          {links.map((section) => (
            <a
              key={section.id}
              className="v5-nav__link"
              href={`#${section.id}`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      ) : null}

      <ContactCTA className="v5-nav__link">{contactLabel()}</ContactCTA>
    </header>
  );
}
