import Link from "next/link";
import { Mark } from "@/components/ds/mark";
import { variations } from "@/app/(variations)/variations";
import { site } from "@/lib/site";
import { SECTIONS } from "./sections";

/**
 * v5 footer.
 *
 * The buyer question COPY.md section 10 asks is "where are you, how do I reach
 * you, and is this a real business?", and on a product site the answer is the
 * plainest thing on the page: a sitemap and a status row. This is that footer.
 * The v5 tone note for the section is "standard product footer with a status
 * row, 'last revised 7 Sep 2026'", so nothing here is designed to be looked at.
 * It is designed to be read once and used.
 *
 * Four decisions worth writing down:
 *
 * 1. The section index is generated from `sections.ts`, not typed out. A link
 *    exists only for a section whose component is on the page, so this column
 *    cannot hold a dead anchor and needs no edit when a section lands. It drops
 *    its own row: a footer that links to itself is noise.
 *
 * 2. The mail line is built from `site.contact.email` and `site.mailSubject`
 *    rather than from `contactHref()`. `contactHref()` is the CTA's channel and
 *    resolves to WhatsApp the moment a number is configured; this line is the
 *    mailbox itself, which COPY.md prints as live text whatever the CTA does.
 *    No WhatsApp line: COPY.md gates it on `contact.whatsapp`, which is empty,
 *    and no number is guessed.
 *
 * 3. No CTA and no repeated button. The section above the footer already owns
 *    the page's one primary action, and COPY.md pins one CTA wording for the
 *    whole page. A footer that re-sells is a footer nobody reads.
 *
 * 4. Colour stays where the rest of the variation puts it. The ground is the
 *    same neutral as every other section, the only divisions are hairlines, and
 *    the accent appears on the mark and on a hovered link. Everything a reader
 *    can click is ink until they point at it.
 */

/** The section index. Built sections only, and never a link to this footer. */
const INDEX = SECTIONS.filter((s) => s.built && s.id !== "footer");

/** The other four directions. v5 is the page you are on, so it is not listed. */
const OTHER_VARIATIONS = variations.filter((v) => v.slug !== "v5");

const MAIL_HREF = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  site.contact.mailSubject,
)}`;

export function Footer() {
  return (
    <footer id="footer" className="v5-footer">
      <div className="v5-container">
        <div className="v5-grid v5-footer__grid">
          <div className="v5-footer__identity">
            <p className="v5-footer__brand">
              <Mark className="v5-footer__mark" />
              Devonel
            </p>

            <p className="v5-footer__line">
              {site.positioning}. Working with clients across the UAE, India and
              remote.
            </p>

            <div className="v5-mono v5-footer__meta">
              <p>{site.locations.join(" and ")}</p>
              <p>2026 Devonel</p>
            </div>
          </div>

          <nav
            className="v5-footer__col v5-footer__col--sections"
            aria-labelledby="v5-footer-sections"
          >
            <h2 id="v5-footer-sections" className="v5-mono v5-footer__head">
              On this page
            </h2>
            <ul className="v5-footer__list v5-footer__list--index">
              {INDEX.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="v5-footer__link">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="v5-footer__col v5-footer__col--work">
            <nav className="v5-footer__group" aria-labelledby="v5-footer-work">
              <h2 id="v5-footer-work" className="v5-mono v5-footer__head">
                Work
              </h2>
              <ul className="v5-footer__list">
                <li>
                  <Link href="/v5/work/jewelo" className="v5-footer__link">
                    The name-pendant studio
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="v5-footer__group">
              <h2 className="v5-mono v5-footer__head">Contact</h2>
              <ul className="v5-footer__list">
                <li>
                  <a
                    href={MAIL_HREF}
                    className="v5-footer__link v5-footer__mail"
                  >
                    {site.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <nav
            className="v5-footer__col v5-footer__col--variations"
            aria-labelledby="v5-footer-variations"
          >
            <h2 id="v5-footer-variations" className="v5-mono v5-footer__head">
              Variations
            </h2>
            <ul className="v5-footer__list">
              <li>
                <Link href="/" className="v5-footer__link">
                  All five directions
                </Link>
              </li>
              {OTHER_VARIATIONS.map((v) => (
                <li key={v.slug}>
                  <Link href={v.href} className="v5-footer__link">
                    <span aria-hidden className="v5-mono v5-footer__n">
                      {v.n}
                    </span>
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="v5-mono v5-footer__status">
          <p className="v5-footer__provenance">
            Every piece of work shown here was built by Devonel. Client names
            appear only with the client&apos;s permission.
          </p>
          <p className="v5-footer__revised">Last revised 7 Sep 2026</p>
        </div>
      </div>
    </footer>
  );
}
