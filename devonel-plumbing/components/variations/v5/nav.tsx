import { ContactCTA } from "@/components/ds/contact-cta";
import { Mark } from "@/components/ds/mark";
import { contactLabel } from "@/lib/site";

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
 * `base` is empty on the variation root, where the mark is a link to the top of
 * this page, and "/v5" on the sub-page at /v5/work/jewelo, where it has to
 * resolve back to the root instead of to an anchor that page has not got. The
 * CTA is unaffected: it reads its href from `lib/site.ts`.
 *
 * NO SECTION INDEX HERE, and that is the direction rather than a shortcut.
 * 03-design-research.md section 4 puts it flatly: "Nav is two 12px items in
 * opposite corners and nothing else, with no bar and no background." An earlier
 * version of this file rendered the built `navSections()` between the two
 * corners; with two sections built it took the header to 95px at 390 and 360
 * and laid it 11px over the h1, and every further section made it worse. The
 * ten section anchors belong to the footer, which is what `inNav` in
 * `sections.ts` drives and where COPY.md section 10 puts them. Nothing on this
 * line grows as the page grows.
 */
export function Nav({ base = "" }: { base?: string }) {
  return (
    <header className="v5-nav">
      <a className="v5-nav__mark" href={`${base}#hero`}>
        <Mark />
        Devonel
      </a>

      <ContactCTA className="v5-nav__link">{contactLabel()}</ContactCTA>
    </header>
  );
}
