import { ContactCTA } from "@/components/ds/contact-cta";
import { Mark } from "@/components/ds/mark";
import { contactLabel } from "@/lib/site";

/**
 * v1 "Studio Dark" nav: a 56px bar, the wordmark on the left, one button on
 * the right. No blur, no glass, no shadow - a solid void bar sitting on a
 * hairline, so nothing is doing a trick behind the type.
 *
 * The bar carries no section anchors on purpose. The direction gives it one
 * button, and `sections.ts` keeps the ten section links for the footer. It is
 * a server component: nothing here needs state, so nothing here ships JS.
 *
 * `base` prefixes the one anchor the bar owns. It is empty on the variation
 * root, where `#hero` is a same-page jump, and `/v1` on a sub-page such as
 * `/v1/work/jewelo`, where the wordmark has to travel back to the page the
 * anchor lives on. Nothing else in the bar is a link, so one prop covers it.
 */
export function Nav({ base = "" }: { base?: string }) {
  return (
    <header className="v1-nav">
      <div className="v1-shell v1-nav__bar">
        <a className="v1-nav__brand" href={`${base}#hero`}>
          <Mark className="v1-nav__mark" />
          <span className="v1-nav__word">Devonel</span>
        </a>
        <ContactCTA className="v1-btn v1-btn--quiet">{contactLabel()}</ContactCTA>
      </div>
    </header>
  );
}
