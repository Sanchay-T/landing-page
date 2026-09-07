/**
 * v2 "Shader Light" - the footer, canonical section 10.
 *
 * A ruled colophon on paper. The field stops at the final CTA above, which is
 * where this direction spends its colour; the last thing on the page is quiet
 * paper, three hairlines and text. No plinth, no fill, no shadow, no icons, no
 * social links, and no second WebGL context: the hero owns the only one.
 *
 * The colophon carries the sign-off line from COPY.md section 10 split across
 * two levels rather than shortened. The wordmark takes "Devonel" and the line
 * under it takes "AI product studio and growth partner for owner-led brands.",
 * so every word of the sign-off is on the page in document order without the
 * studio's name being printed twice in three lines. The mark beside the
 * wordmark is unnamed, per `components/ds/mark.tsx`: it is decoration next to
 * the word it stands for, and a screen reader should hear "Devonel" once.
 *
 * The index is the reason this section is load-bearing rather than a sign-off.
 * `nav.tsx` shows the complete section index or none of it, and eight 13px
 * labels plus the wordmark and the two clocks only fit from 84rem up, so below
 * 1344px this list is the page's only written map. It is built from
 * `sections.ts`, gated on `built` exactly the way the nav gates its own links,
 * so it can never point at a section that does not exist. It drops one row that
 * the nav also drops for its own reason: this footer, because a list of the page
 * cannot usefully point at the place the reader is already standing. The hero
 * stays, under the label `sections.ts` gives it - "Devonel", the wordmark - so
 * every line of the index is something the page says out loud rather than a
 * heading out of the copy document. Nine anchors, and the tenth section is the
 * one printing them.
 *
 * The address is printed as live text, linked to mail built from
 * `site.contact`. It is deliberately not `contactHref()`: the moment a WhatsApp
 * number lands in `lib/site.ts` that helper resolves to wa.me, and an anchor
 * reading "sanchay@devonel.com" that opened a chat would be a lie. The primary
 * button, which is channel-neutral by design, is the one that follows
 * `contactHref()`, and it lives one section up. Nothing here is typed by hand:
 * the name, the positioning line and the address all come from `lib/site.ts`.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 10: the sign-off line, the
 * location line, the contact line with "No contact form.", and the four legal
 * and provenance lines. The document's bracketed source references are
 * notation, not copy, and are the only thing dropped. Section 10 also lists the
 * flagship case study page and the variation switcher as navigation; the case
 * study is already linked from its own section on this page and the switcher is
 * build chrome that the route group renders for itself, so neither is repeated
 * here and no label for either had to be invented.
 */

import { Mark } from "@/components/ds/mark";
import { site } from "@/lib/site";
import { sections } from "./sections";

/** COPY.md section 10: the address as live text, linked to mail. */
const MAIL_HREF = `mailto:${site.contact.email}?subject=${encodeURIComponent(site.contact.mailSubject)}`;

/**
 * `base` prefixes the anchors so the same colophon works on a sub-page: "" on
 * /v2, "/v2" on /v2/work/jewelo, where a bare "#hero" would point at nothing.
 * Same contract as `nav.tsx`.
 */
export function Footer({ base = "" }: { base?: string } = {}) {
  const index = sections.filter((section) => section.built && section.id !== "footer");

  return (
    <footer id="footer" className="v2-footer">
      <div className="v2-footer__inner">
        <div className="v2-footer__colophon">
          <p className="v2-footer__wordmark">
            <Mark className="v2-footer__mark" />
            <span>{site.name}</span>
          </p>

          <p className="v2-footer__positioning">{site.positioning}.</p>

          <p className="v2-footer__where">
            {site.locations.join(" and ")}. Working with clients across the UAE, India and remote.
          </p>

          <p className="v2-footer__contact">
            Email{" "}
            <a className="v2-footer__mail" href={MAIL_HREF}>
              {site.contact.email}
            </a>
            . No contact form.
          </p>
        </div>

        <nav className="v2-footer__index" aria-label="Sections of this page">
          <ul className="v2-footer__list">
            {index.map((section) => (
              <li key={section.id}>
                <a className="v2-footer__link" href={`${base}#${section.id}`}>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="v2-footer__legal">
        <p className="v2-footer__line">2026 {site.name}.</p>
        <p className="v2-footer__line">
          Every piece of work shown here was built by {site.name}. Client names appear only with the
          client&#39;s permission.
        </p>
        <p className="v2-footer__line">
          Page last revised <time dateTime="2026-09-07">7 Sep 2026</time>.
        </p>
      </div>
    </footer>
  );
}
