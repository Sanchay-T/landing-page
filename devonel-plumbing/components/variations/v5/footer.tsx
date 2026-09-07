/**
 * The colophon: one chrome hairline, the studio's own name under it, and the
 * page's index.
 *
 * The direction gives this block one line - "Footer: a single line" - and
 * COPY.md section 10 gives it four things to say: who this is, where it is, how
 * to reach it, and what is on the page. The reading of "a single line" that
 * keeps both is a single rule: one 24 percent chrome hairline across the page,
 * and everything under it set at 13px on the void with no ground, no box, no
 * column rules and no second hairline anywhere. The section reads as one line
 * with type hanging off it, which is what a colophon is.
 *
 * NOTHING DECORATIVE IS ADDED. No icons, no social links, no newsletter, no
 * "back to top", no repeated CTA: the ask is the section directly above this
 * one, and printing the button twice within 200px would be the only thing on
 * this page that shouts twice. The single SVG here is the Devonel mark, which
 * is the only logo allowed on the site (03b-round2-brief.md, imagery rule).
 *
 * THE WORDMARK IS NOT A LINK. The index's first entry is the hero anchor
 * labelled "Devonel", so a second link with the same text and the same target
 * would be two rows in the tab order that do the same thing. The mark beside it
 * carries no accessible name for the same reason: a reader hears "Devonel"
 * once, from the wordmark, not twice.
 *
 * THE INDEX IS GATED ON `built`, exactly as the nav's would be. `navSections()`
 * returns the sections that are on the page and belong in the index, so while
 * the page is being assembled section by section the footer can never offer an
 * anchor that resolves to nothing. Complete, it is nine: the hero labelled with
 * the wordmark, then the eight section labels COPY.md prints, and no self-link,
 * because a link to the block it sits in is noise. Every label is a phrase the
 * page says out loud rather than a heading out of the document.
 *
 * WHAT COPY.md LISTS AND THIS DOES NOT CARRY. Section 10's Navigation line also
 * names the flagship case study page and the variation switcher but gives no
 * label for either, and no label is invented here: the case study is linked
 * from its own section with the wording COPY.md gives it, and the switcher is
 * route-group chrome rather than part of this page.
 *
 * CONTACT is the address printed as live text and linked to mail with the brief
 * subject prefilled, built from `site.contact` so nothing is typed here, plus
 * COPY.md's own "No contact form." While `contact.whatsapp` is empty this
 * footer names no chat channel, which is the config gate rather than a copy
 * decision.
 *
 * NOTHING MOVES. No entrance, no scroll effect, no hover but the two link
 * hairlines, which `tokens.css` collapses to 1ms under
 * `prefers-reduced-motion`.
 */

import { Mark } from "@/components/ds/mark";
import { site } from "@/lib/site";
import { navSections } from "./sections";

/** COPY.md section 10, the contact line: the address as live text to mail. */
const MAIL_HREF = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  site.contact.mailSubject,
)}`;

/** COPY.md section 10, "Legal and provenance", verbatim and in order. */
const LEGAL = [
  "2026 Devonel.",
  "Every piece of work shown here was built by Devonel.",
  "Client names appear only with the client's permission.",
  "Page last revised 7 Sep 2026.",
] as const;

export function Footer() {
  const index = navSections();

  return (
    <footer className="v5-footer" id="footer">
      <div className="v5-band">
        <div className="v5-footer__inner">
          <div className="v5-footer__colophon">
            <p className="v5-footer__word">
              <Mark className="v5-footer__mark" />
              <span className="v5-display v5-footer__name">{site.name}</span>
            </p>
            <p className="v5-footer__line">{site.positioning}.</p>
            <p className="v5-footer__line">
              Dubai and Mumbai. Working with clients across the UAE, India and
              remote.
            </p>
            <p className="v5-footer__line">
              Email{" "}
              <a className="v5-footer__mail" href={MAIL_HREF}>
                {site.contact.email}
              </a>
              . No contact form.
            </p>
          </div>

          <nav className="v5-footer__index" aria-label="Sections of this page">
            <ul className="v5-footer__list">
              {index.map((section) => (
                <li key={section.id}>
                  <a className="v5-footer__link" href={`#${section.id}`}>
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="v5-footer__legal">
            {LEGAL.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
