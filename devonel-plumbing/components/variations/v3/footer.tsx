import type { CSSProperties } from "react";
import { variations } from "@/app/(variations)/variations";
import { Mark } from "@/components/ds/mark";
import { site } from "@/lib/site";
import { sections } from "./sections";

/** The entrance primitive, staggered by hand so the credits read top to
 *  bottom. Every step starts from a visible 0.6 opacity, never from 0, so a
 *  capture taken mid-flight still shows the whole section. */
const delay = (ms: number) => ({ "--v3-enter-delay": `${ms}ms` }) as CSSProperties;

/**
 * The mail link behind the address, built here rather than from
 * `contactHref()`.
 *
 * COPY.md section 10 asks for the email printed as live text and linked to
 * mail specifically. `contactHref()` is the primary CTA's channel and resolves
 * to WhatsApp the moment a number is configured, which would leave the footer
 * printing one address and opening another.
 */
const MAIL = `mailto:${site.contact.email}?subject=${encodeURIComponent(site.contact.mailSubject)}`;

/**
 * COPY.md section 10, "Legal and provenance", verbatim apart from the (c) mark
 * on the year line, which is the notice the copy document's bare "2026
 * Devonel." stands for.
 */
const FINE: readonly string[] = [
  "© 2026 Devonel.",
  "Every piece of work shown here was built by Devonel.",
  "Client names appear only with the client's permission.",
  "Page last revised 7 Sep 2026.",
];

/**
 * Variation 3 - the footer, set as end credits.
 *
 * A film ends on a black card: the company mark, the names in order, the small
 * print at the foot of the frame. This footer carries the same four things and
 * nothing else, because the section above it already made the ask and a second
 * button here would only compete with it.
 *
 * The credit card takes the full grid width, then three columns of two sit
 * under it: how to reach the studio, what was on the page, and which other
 * editions exist. Each column names itself in Geist caps, so when they stack
 * at 390px no group runs into the one under it.
 *
 * Both link lists are generated, never typed:
 *   - the page index reads `sections.ts`, filtered to sections that are really
 *     on the page, with the footer's own row dropped, so no anchor here can go
 *     dead and a section landing later needs no edit in this file;
 *   - the editions read `variations.ts`, so the switcher link the build spec
 *     requires and the four sibling directions stay one source.
 *
 * No WhatsApp line: `lib/site.ts` carries no number, and COPY.md gates that
 * line on the config rather than on taste.
 */
export function V3Footer() {
  /* Everything on the page that is worth a link, minus the credits themselves:
     a footer does not list itself. */
  const index = sections.filter((section) => section.built && section.id !== "footer");

  return (
    <footer className="v3-foot" id="footer">
      <div className="v3-shell">
        <div className="v3-enter">
          <Mark className="v3-foot__mark" />
          <p className="v3-foot__wordmark">Devonel</p>
          <p className="v3-foot__positioning">{site.positioning}</p>
        </div>

        <div className="v3-grid v3-foot__cols">
          <div className="v3-foot__col v3-enter" style={delay(80)}>
            <h2 className="v3-foot__head" id="v3-foot-contact">
              Contact
            </h2>
            <ul className="v3-foot__list" role="list" aria-labelledby="v3-foot-contact">
              <li>
                <a className="v3-foot__email" href={MAIL}>
                  {site.contact.email}
                </a>
              </li>
              <li className="v3-foot__line">{site.locations.join(" and ")}.</li>
              <li className="v3-foot__line">
                Working with clients across the UAE, India and remote.
              </li>
            </ul>
          </div>

          <div className="v3-foot__col v3-enter" style={delay(140)}>
            <h2 className="v3-foot__head" id="v3-foot-page">
              This page
            </h2>
            <ul className="v3-foot__list" role="list" aria-labelledby="v3-foot-page">
              {index.map((section) => (
                <li key={section.id}>
                  <a className="v3-foot__link" href={`#${section.id}`}>
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="v3-foot__col v3-enter" style={delay(200)}>
            <h2 className="v3-foot__head" id="v3-foot-editions">
              Editions
            </h2>
            <ul className="v3-foot__list" role="list" aria-labelledby="v3-foot-editions">
              {/* All five in their numbered order, with the one already on
                  screen set as text rather than as a link to itself. Listing
                  only the other four would print 1, 2, 4, 5 and read as a
                  numbering mistake. */}
              {variations.map((variation) =>
                variation.slug === "v3" ? (
                  <li className="v3-foot__here" key={variation.slug} aria-current="page">
                    {variation.n} {variation.name}, this one
                  </li>
                ) : (
                  <li key={variation.slug}>
                    <a className="v3-foot__link" href={variation.href}>
                      {variation.n} {variation.name}
                    </a>
                  </li>
                ),
              )}
              <li>
                <a className="v3-foot__link" href="/">
                  All five side by side
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="v3-foot__legal v3-enter" style={delay(260)}>
          {FINE.map((line) => (
            <p className="v3-foot__fine" key={line}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
