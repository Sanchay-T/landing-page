"use client";

import { useEffect, useRef } from "react";
import { ContactCTA } from "@/components/ds/contact-cta";
import { Mark } from "@/components/ds/mark";
import { contactLabel } from "@/lib/site";
import { navSections, type V4Section } from "./sections";

/**
 * The signage bar.
 *
 * A black band across the top of the page carrying three things and nothing
 * else: the mark and wordmark, the stops on the line, and one flat yellow block
 * that sends the brief. It is a Swiss transit sign, so it has no shadow, no
 * border radius, no blur and no translucency.
 *
 * Stops come from `sections.ts` and only for sections that are actually on the
 * page. The hero is not among them: the wordmark is already a link to `#hero`,
 * which is what a wordmark on a signage bar means, so a "Top" stop beside it
 * would be the same target printed twice and one more word for the row to wrap.
 *
 * The stops are one line that never wraps. From 1180, where the whole line fits
 * beside the brand and the CTA, they share the single row and the bar is 82px.
 * Below that they take the full width of their own row under a hairline and the
 * bar is 131px. Either way the line slides sideways when it is longer than its
 * row, which is what makes the bar two known heights rather than a count of
 * however many sections are built: a wrapping row grew the band from 82px to
 * 280px as sections landed and tucked the top of every one of them under it.
 * The trade is that a stop can start off-screen, so nothing but the stops lives
 * in the scroller, and the footer prints the same index as a plain list.
 *
 * `base` is empty on the variation itself, where every stop is a same-page
 * anchor. A sub-page such as `/v4/work/jewelo` passes "/v4", which turns the
 * same stops into `/v4#work` and sends the reader back to the section they came
 * from instead of at a fragment that does not exist on the sub-page.
 *
 * The component is a client component for one reason, `useCurrentStop` below:
 * a strip map that can start with the reader's own stop off-screen has to be
 * told where the reader is. Everything it renders is static, so the server
 * still prints the whole bar and the script only marks and slides.
 */
export function V4Nav({
  sections,
  base = "",
}: {
  sections: readonly V4Section[];
  base?: string;
}) {
  const stops = navSections(sections).filter((section) => section.id !== "hero");
  const strip = useCurrentStop();

  return (
    <header className="v4-nav">
      <div className="v4-shell">
        <div className="v4-nav__inner">
          <a className="v4-nav__brand" href={`${base}#hero`}>
            <Mark className="v4-nav__mark" />
            <span>Devonel</span>
          </a>

          {stops.length > 0 ? (
            <nav className="v4-nav__sections" aria-label="Sections" ref={strip}>
              <ul className="v4-nav__list">
                {stops.map((section) => (
                  <li key={section.id}>
                    <a className="v4-nav__link" href={`${base}#${section.id}`}>
                      {section.navLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          <ContactCTA className="v4-block v4-nav__cta">{contactLabel()}</ContactCTA>
        </div>
      </div>
    </header>
  );
}

/**
 * Marks the stop the reader is at and slides the strip to it.
 *
 * The strip is 684px of stops in a 320px box on a phone, so a real hash
 * navigation - opening `/v4#contact`, or following the Contact stop back from
 * `/v4/work/jewelo` - used to land with the strip still at 0 and the reader's
 * own stop somewhere off the right edge, with nothing on the bar saying where
 * they were. Two things fix that, and nothing else is needed: `aria-current`
 * on the matching stop, which section 5 of tokens.css inks yellow and
 * underlines, and one scroll of the strip that centres it.
 *
 * The scroll is set on the strip itself rather than through `scrollIntoView`,
 * which would also be free to scroll the page and undo the browser's own jump
 * to the section. Smooth unless the reader asked for less motion, and skipped
 * entirely when the whole line already fits, which is every width from 820 up.
 */
function useCurrentStop() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const strip = ref.current;
    if (!strip) return;

    const sync = () => {
      const hash = window.location.hash;
      const links = Array.from(
        strip.querySelectorAll<HTMLAnchorElement>(".v4-nav__link"),
      );
      const current = hash ? links.find((link) => link.hash === hash) : undefined;

      for (const link of links) {
        if (link === current) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }

      const overflow = strip.scrollWidth - strip.clientWidth;
      if (!current || overflow <= 0) return;

      // Measured off rects, not `offsetLeft`: the strip is only sometimes
      // inside a positioned ancestor (the bar is sticky from 1180), so the
      // offset parent is not the same box at every width and the rects are.
      const box = strip.getBoundingClientRect();
      const stop = current.getBoundingClientRect();
      const centred =
        strip.scrollLeft + (stop.left + stop.width / 2) - (box.left + box.width / 2);

      strip.scrollTo({
        left: Math.max(0, Math.min(centred, overflow)),
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    };

    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return ref;
}
