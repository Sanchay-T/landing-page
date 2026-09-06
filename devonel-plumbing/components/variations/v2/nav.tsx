"use client";

import { useEffect, useState } from "react";
import type { V2Section } from "./sections";

/**
 * The v2 navigation: a fixed left rail from 1024px, a compact top strip below
 * it. Same markup either way, so there is one landmark, one tab order and one
 * set of links at every width.
 *
 * The rail prints the section registry as `tree` output in plain ASCII, plus
 * the scroll meter and a live `nn/nn` counter. The counter and the caret in the
 * hero are the only moving things on the page that carry the accent.
 *
 * Degradation is the point of how the active section is tracked: the server
 * renders the first section as current, and the IntersectionObserver only ever
 * moves that mark. With JavaScript off, or before hydration, the rail is a
 * plain list of working anchors with the first one marked.
 */
export function Nav({ sections, base = "" }: { sections: readonly V2Section[]; base?: string }) {
  // On a sub-page the rail is an index of the page it links back to, and none
  // of its entries is the current one. The counter says so with `--` rather
  // than pointing at a section this page is not showing.
  const [activeId, setActiveId] = useState(base ? "" : (sections[0]?.id ?? ""));

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    if (nodes.length === 0) return;

    const onScreen = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onScreen.add(entry.target.id);
          else onScreen.delete(entry.target.id);
        }
        // The deepest section whose top has passed the reading line wins, so
        // scrolling down never flickers back to the section above.
        for (let i = sections.length - 1; i >= 0; i -= 1) {
          const candidate = sections[i];
          if (onScreen.has(candidate.id)) {
            setActiveId(candidate.id);
            return;
          }
        }
      },
      // Bottom 70% of the viewport is discounted, so a section counts as
      // current once its top reaches the upper third of the screen.
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, [sections]);

  const activeIndex = sections.findIndex((section) => section.id === activeId);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <nav className="v2-nav" aria-label="Sections">
      <div className="v2-nav-row">
        <span className="v2-nav-root">~/devonel</span>
        <ul className="v2-nav-tree">
          {sections.map((section, i) => (
            <li key={section.id}>
              <a
                href={`${base}#${section.id}`}
                className="v2-nav-link v2-inv"
                aria-current={section.id === activeId ? "true" : undefined}
              >
                <span className="v2-nav-branch" aria-hidden="true">
                  {i === sections.length - 1 ? "`-- " : "|-- "}
                </span>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="v2-nav-meter">
        <span className="v2-meter" aria-hidden="true">
          <span className="v2-meter-fill" />
        </span>
        <p className="v2-nav-count">
          <span className="v2-nav-count-n">{activeIndex < 0 ? "--" : pad(activeIndex + 1)}</span>
          {`/${pad(sections.length)}`}
        </p>
      </div>
    </nav>
  );
}
