import { Mark } from "@/components/ds/mark";
import { site } from "@/lib/site";
import type { Section } from "./sections";
import { sections, ticks } from "./sections";

/**
 * Section 10, the colophon. Day, and quiet.
 *
 * WHY THE INDEX IS DATED. The tick bar is this page's navigation, and at a phone
 * width its sixteen cells are about 15px wide - under the 24px target minimum.
 * The footer index is the equivalent control that criterion allows for, so it is
 * not decoration and it may not be dropped. It is built as the bar's readable
 * twin rather than as a generic link list: each section is a row with its label
 * on the left and the day of the build it sits on at the right end, in the same
 * tabular mono the bar uses for its readout. The sixteen days run down the
 * column instead of across the bar, and the column ends in a run of 27 Aug,
 * because that is what arriving at the launch looks like.
 *
 * NINE ANCHORS, NOT TEN. The footer does not link to itself (`inNav: false`),
 * and every row is gated on `built`, so a section that is not in the DOM never
 * becomes a dead anchor here. The hero's row is labelled with the wordmark,
 * which is the label a reader recognises; every other row is COPY.md's own
 * on-page section label.
 *
 * NO TELLS. No social row, no newsletter, no icon set, no four-column sitemap,
 * no plinth, no shadow, no radius, no muted ink. The only logo on the site is
 * the Devonel mark, and it appears here once beside the wordmark.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 10 with the bracketed source
 * tags and the implementation notes removed. The WhatsApp line is config-gated
 * and `contact.whatsapp` is empty, so no chat channel is named. Server
 * component.
 */

/** Built from `lib/site.ts`, never typed. Same href COPY.md section 10 names. */
const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(site.contact.mailSubject)}`;

/**
 * The day, or the span of days, a section sits on. Both ends come from `ticks`,
 * so a row can never claim a date the build did not have. The two ends share a
 * month today, so the span prints once; the general form is kept for the day
 * that stops being true.
 */
function dayOf(section: Section): string {
  const from = ticks[section.tick - 1].date;
  const to = ticks[section.tickEnd - 1].date;
  if (from === to) return from;
  const [fromDay, fromMonth] = from.split(" ");
  const toMonth = to.split(" ")[1];
  return fromMonth === toMonth ? `${fromDay}-${to}` : `${from} to ${to}`;
}

export function Footer() {
  const index = sections.filter((section) => section.inNav && section.built);

  return (
    <footer id="footer" className="v3-band v3-footer" data-stage="day">
      <div className="v3-inner v3-colophon">
        <div className="v3-colophon-id">
          <p className="v3-wordmark">
            <Mark />
            <span>Devonel</span>
          </p>

          <p className="v3-colophon-line">
            AI product studio and growth partner for owner-led brands.
          </p>
          <p className="v3-colophon-line">
            Dubai and Mumbai. Working with clients across the UAE, India and remote.
          </p>
          <p className="v3-colophon-line">
            Email:{" "}
            <a className="v3-mail" href={mailHref}>
              {site.contact.email}
            </a>
            . No contact form.
          </p>
        </div>

        <nav aria-label="Sections of this page">
          <ul className="v3-index" role="list">
            {index.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>
                  <span>{section.label}</span>
                  <span className="v3-index-date">{dayOf(section)}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="v3-legal">
          <p>2026 Devonel.</p>
          <p>Every piece of work shown here was built by Devonel.</p>
          <p>Client names appear only with the client&#39;s permission.</p>
          <p>Page last revised 7 Sep 2026.</p>
        </div>
      </div>
    </footer>
  );
}
