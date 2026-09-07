"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
 *
 * Below 1024 the strip is one horizontal scroll row, so entries from `work` on
 * start off the right edge of a 360px screen. Two things fix that, both client
 * side and both optional: the current entry is scrolled into view when the mark
 * moves, and a dim `...` prints after the row while there is more of it to the
 * right. The hint is a character, not a gradient: this direction renders zero
 * images, and an edge fade would be a `background-image`.
 */
export function Nav({ sections, base = "" }: { sections: readonly V2Section[]; base?: string }) {
  // On a sub-page the rail is an index of the page it links back to, and none
  // of its entries is the current one. The counter says so with `--` rather
  // than pointing at a section this page is not showing.
  const [activeId, setActiveId] = useState(base ? "" : (sections[0]?.id ?? ""));
  // False until the row is measured on the client, so the server and the first
  // paint agree: no hint until we know there is something off the edge.
  const [hasMore, setHasMore] = useState(false);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());

  /** True while the strip is scrollable and not yet scrolled to its end. */
  const measureRow = useCallback(() => {
    const row = rowRef.current;
    if (!row) return;
    const remaining = row.scrollWidth - row.clientWidth - row.scrollLeft;
    setHasMore(remaining > 1);
  }, []);

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

  // Bring the current entry into the strip when the mark moves. `nearest` on
  // both axes scrolls the row by the least it can and leaves the document
  // alone: the strip is sticky at the top, so it is never off screen and there
  // is nothing to scroll vertically. Only below 1024, where the rail is the
  // scroll row; from 1024 up it is a full-height column that holds all ten.
  useEffect(() => {
    if (!activeId) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(max-width: 1023px)").matches) return;

    const node = linkRefs.current.get(activeId);
    node?.scrollIntoView({ inline: "nearest", block: "nearest" });
    // `hasMore` is a dependency because showing or hiding the `...` changes the
    // width of the row: the last entry is realigned after the hint leaves.
  }, [activeId, hasMore]);

  // The `...` hint tracks the row itself, so it is honest at every width and
  // disappears as soon as the last entry is on screen.
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    measureRow();
    row.addEventListener("scroll", measureRow, { passive: true });

    const observer = new ResizeObserver(measureRow);
    observer.observe(row);

    return () => {
      row.removeEventListener("scroll", measureRow);
      observer.disconnect();
    };
  }, [measureRow, sections]);

  const activeIndex = sections.findIndex((section) => section.id === activeId);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <nav className="v2-nav" aria-label="Sections">
      <div className="v2-nav-row" ref={rowRef}>
        <span className="v2-nav-root">~/devonel</span>
        <ul className="v2-nav-tree">
          {sections.map((section, i) => (
            <li key={section.id}>
              <a
                ref={(node) => {
                  if (node) linkRefs.current.set(section.id, node);
                  else linkRefs.current.delete(section.id);
                }}
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

      {hasMore ? (
        <span className="v2-nav-more" aria-hidden="true">
          ...
        </span>
      ) : null}

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
