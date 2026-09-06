import Link from "next/link";
import { Mark } from "@/components/ds/mark";
import { site } from "@/lib/site";
import { variations } from "@/app/(variations)/variations";
import type { V1Section } from "./index";

/**
 * The email line, built here rather than through `contactHref()`.
 *
 * COPY.md section 10 pins this one string: the address is printed as live text
 * and linked to `mailto:...?subject=Brief%20for%20Devonel`. `contactHref()`
 * resolves to WhatsApp the day a number is configured, which is right for a
 * CTA and wrong for the line whose whole job is to be the mailbox, so the
 * colophon composes the address from `lib/site.ts` instead of hardcoding it.
 */
const MAIL_HREF = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  site.contact.mailSubject,
)}`;

/** COPY.md section 10, "Page last revised 7 Sep 2026". The only date it sources. */
const REVISED = "Page last revised 7 Sep 2026";

/**
 * The colophon: the masthead turned upside down at half the size.
 *
 * A broadsheet does not close on a footer, it closes on its colophon: who
 * publishes this, from where, how to write to them, what was in the paper, and
 * the small print set in the margin. So this block reuses the masthead's parts
 * in reverse order. The masthead opens on a rail, then a thin rule over a thick
 * one, then the nameplate. The foot opens on a thick rule over a thin one, then
 * the nameplate at half the size, and ends on the rail.
 * Nothing new is invented for the foot of the page: the same lockup, the same
 * `.v1-folio` small type, the same hairlines, one retuned `--v1-wordmark`.
 *
 * Three standing heads carry the three columns, because the one thing that
 * breaks a footer at 390 is a column that collapses and leaves its heading
 * stranded above someone else's list. Every column here names itself.
 *
 * No column rules and no folio number. The column rules belong to the sections
 * that carry the argument, and a colophon is the one part of a paper that never
 * takes a page number, because it is where the page stops.
 *
 * No CTA either. COPY.md pins one primary CTA wording, the closing section
 * above already carries it, and a second button one rule below it would be the
 * page asking twice.
 *
 * The index is generated from `sections`, the same array the masthead reads, so
 * it can only point at a section that is actually rendered. Its own row is
 * dropped: an index entry that scrolls you to the index is furniture.
 */
export function V1Footer({ sections }: { sections: readonly V1Section[] }) {
  const index = sections.filter((section) => section.id !== "footer");

  return (
    <footer id="footer" className="v1-foot">
      <div className="v1-foot__rule" />

      <div className="v1-foot__inner v1-shell">
        <div className="v1-grid v1-foot__body">
          {/* The imprint. Wordmark, what the studio is, and where it is. */}
          <div className="v1-foot__imprint">
            <div className="v1-foot__lockup">
              <Mark className="v1-foot__mark" />
              <span className="v1-wordmark">{site.name}</span>
            </div>

            <p className="v1-foot__signoff">{site.positioning}</p>

            <p className="v1-foot__where">
              {site.locations.join(" and ")}. Working with clients across the UAE, India and
              remote.
            </p>
          </div>

          {/* Contact. One channel, printed as the address it is.

              No chat channel is named here. COPY.md gates that line on
              `contact.whatsapp` in lib/site.ts, which is empty and carries no
              guessed number, so while it is empty the colophon prints mail and
              nothing else. */}
          <div className="v1-foot__col v1-foot__col--contact">
            <h2 className="v1-foot__head">Contact</h2>
            <a className="v1-foot__email v1-underline" href={MAIL_HREF}>
              {site.contact.email}
            </a>
          </div>

          {/* The index of what was in the paper. */}
          <nav className="v1-foot__col v1-foot__col--index" aria-labelledby="v1-foot-index">
            <h2 className="v1-foot__head" id="v1-foot-index">
              Index
            </h2>
            <ul className="v1-foot__index">
              {index.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="v1-foot__link v1-underline">
                    {section.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/v1/work/jewelo" className="v1-foot__link v1-underline">
                  Full case study
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* The editions line. Five typesettings of one brief, the way a paper
            lists its city editions, and the way back to the index of all five. */}
        <nav className="v1-foot__editions" aria-labelledby="v1-foot-editions">
          <h2 className="v1-foot__head" id="v1-foot-editions">
            Editions
          </h2>

          <ul className="v1-foot__editionlist">
            {variations.map((variation) => (
              <li key={variation.slug}>
                {variation.slug === "v1" ? (
                  <span className="v1-foot__edition v1-foot__edition--current" aria-current="page">
                    {variation.n} {variation.name}
                  </span>
                ) : (
                  <Link href={variation.href} className="v1-foot__edition v1-underline">
                    {variation.n} {variation.name}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link href="/" className="v1-foot__edition v1-underline">
                All five editions
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* The small print. Its rule runs to the screen edge and its type stops at
          the content cap, which is the masthead index bar's rule and is what
          keeps a 2560px window reading as a wide page margin rather than as two
          sentences stranded in opposite corners. */}
      <div className="v1-foot__rail">
        <div className="v1-foot__railinner v1-shell">
          <p className="v1-foot__legal">
            2026 Devonel. Every piece of work shown here was built by Devonel. Client names appear
            only with the client&rsquo;s permission.
          </p>
          <p className="v1-foot__revised">{REVISED}</p>
        </div>
      </div>
    </footer>
  );
}
