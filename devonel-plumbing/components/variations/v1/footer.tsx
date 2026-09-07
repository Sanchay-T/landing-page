import { Mark } from "@/components/ds/mark";
import { contactHref, site } from "@/lib/site";
import { navSections } from "./sections";

/**
 * v1 "Studio Dark" footer: a colophon on the void.
 *
 * The closing band is the last raised surface on the page, so this sits back on
 * the void under it and earns its edges from one rule, the same way services,
 * process and engagement do. Three blocks above that rule - who this is, where
 * to go on the page, where the studio is and how to reach it - then the small
 * print below it. The rule is the only ornament in the whole block.
 *
 * No icons, no social links, no card, no shadow, and no lamp: the only lamp in
 * this section is the shared focus ring from tokens entry 01, which every link
 * here uses. The mark is the one logo the site is allowed anywhere, and beside
 * the wordmark it is decoration, so it is unnamed and the name is spoken once.
 *
 * The section links come from `sections.ts` through `navSections`, filtered on
 * `built`, so a section still in flight can never ship a dead `#href` here and
 * the list grows as the page does. Their text is COPY.md's on-page label for
 * each section rather than its documentation heading, so the index reads in the
 * words the reader has just scrolled past; the hero has no label line and takes
 * the wordmark. The footer is deliberately not in its own list: a footer that
 * links to itself is a dead end, so the index is nine anchors beside the
 * wordmark block, not ten.
 *
 * Every string is COPY.md section 10, verbatim, with the bracketed source
 * citations stripped. Three calls worth recording:
 *
 * - The sign-off is split at its own full stop. "Devonel." is the wordmark
 *   beside the mark and the rest is the positioning line under it, read from
 *   `lib/site.ts` rather than typed here.
 * - The address is live text, linked, and both halves come from `lib/site.ts`.
 *   The conditional WhatsApp line is not written in any form: the number is
 *   empty, so the footer names no chat channel.
 * - COPY.md's navigation line also lists the flagship case study page and the
 *   variation switcher. Neither is here: the case study is one click from the
 *   case section directly above, and the switcher is preview chrome rather than
 *   part of the site.
 *
 * A server component. Nothing here is stateful and nothing here moves.
 */
export function Footer() {
  return (
    <footer id="footer" className="v1-colophon">
      <div className="v1-shell">
        <div className="v1-colophon__row">
          <div className="v1-colophon__id">
            <span className="v1-colophon__brand">
              <Mark className="v1-colophon__mark" />
              <span className="v1-colophon__word">Devonel</span>
            </span>
            <p className="v1-colophon__line">{site.positioning}</p>
          </div>

          <nav className="v1-colophon__nav" aria-label="Sections">
            <ul className="v1-colophon__links" role="list">
              {navSections.map((section) => (
                <li key={section.id}>
                  <a className="v1-colophon__link" href={`#${section.id}`}>
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="v1-colophon__reach">
            <p className="v1-colophon__line">
              Dubai and Mumbai. Working with clients across the UAE, India and remote.
            </p>
            <p className="v1-colophon__line">
              Email{" "}
              <a className="v1-colophon__mail" href={contactHref()}>
                {site.contact.email}
              </a>
              . No forms.
            </p>
          </div>
        </div>

        <div className="v1-colophon__small">
          <p>2026 Devonel.</p>
          <p>Every piece of work shown here was built by Devonel.</p>
          <p>Client names appear only with the client&#39;s permission.</p>
          <p>
            Page last revised <span className="v1-colophon__date">7 Sep 2026</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
