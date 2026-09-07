"use client";

/**
 * v2 "Shader Light" - the nav.
 *
 * 64px, transparent, sitting over the field with nothing behind it. The
 * direction gives it the wordmark and the two clocks and nothing else, so
 * there is no button here: the page's one primary action lives in the hero,
 * where the proof it needs is already on screen.
 *
 * Section links come from `sections.ts` and only for a section that is built,
 * so this nav can never render a link to a section that does not exist. The
 * finished page has eight of them, and eight 13px labels plus the wordmark and
 * the two clocks measure 1235px of content: more than a 1180 or a 1024 bar can
 * hold. So the bar shows the complete index or none of it. `data-links` puts
 * the count in the DOM and tokens.css carries one width step per count - the
 * width at which that many links fit without anything shrinking or wrapping.
 * Below its step the list is `display: none`, out of the tab order with it,
 * and the sections stay reachable by scroll and by the footer's own index.
 *
 * Below 40rem no link is ever shown and the clocks drop out too, so the phone
 * bar is the wordmark alone on its 64px. The clocks are not lost: the hero
 * carries them at display size directly under the headline, stacked, which is
 * where the phone layout wants them.
 */

import { Mark } from "@/components/ds/mark";
import { navSections } from "./sections";
import { CityClock } from "./two-city-field";

/**
 * `base` prefixes the anchors so the same bar works on a sub-page: "" on /v2,
 * "/v2" on /v2/work/jewelo, where a bare "#hero" would point at nothing.
 */
export function Nav({ base = "" }: { base?: string } = {}) {
  return (
    <nav className="v2-nav" aria-label="Devonel" data-links={navSections.length}>
      <div className="v2-nav__side v2-nav__side--start">
        <CityClock cityKey="dubai" />
      </div>

      <div className="v2-nav__centre">
        <a className="v2-nav__wordmark" href={`${base}#hero`}>
          <Mark className="v2-nav__mark" />
          <span>Devonel</span>
        </a>
        {navSections.length > 0 ? (
          <ul className="v2-nav__links">
            {navSections.map((section) => (
              <li key={section.id}>
                <a className="v2-nav__link" href={`${base}#${section.id}`}>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="v2-nav__side v2-nav__side--end">
        <CityClock cityKey="mumbai" />
      </div>
    </nav>
  );
}
