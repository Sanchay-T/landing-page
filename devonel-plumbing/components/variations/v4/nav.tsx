import { ContactCTA } from "@/components/ds/contact-cta";
import { Mark } from "@/components/ds/mark";
import { contactLabel } from "@/lib/site";
import { navSections } from "./sections";

/**
 * The product bar: 64px, wordmark, the section anchors, one ink outline button.
 *
 * The anchors come from `sections.ts` and only from sections whose `built` flag
 * is true, so the bar cannot carry a dead link at any point in the build. Below
 * 1024px it is the wordmark and the button alone, which is also what it renders
 * while the rest of the page is still being built.
 *
 * The ground is solid white at every scroll position rather than transparent at
 * the top: the bar sits over the canvas, so it needs no scroll listener and no
 * blur to stay readable, and there is no state in which it is see-through.
 *
 * `base` is the path the anchors hang off. Empty on the variation root, where a
 * bare `#work` is correct; `/v4` on a sub-page such as `/v4/work/jewelo`, where
 * the same anchor has to travel back to the root before it means anything.
 *
 * The button is the ink outline form, not the cobalt fill. Cobalt is rationed
 * to three surfaces on this page and the final CTA cell is the third, so the
 * bar spends none: same href, same label, same size, only the colour leaves.
 * See `docs/goal/STATUS.md`, the v4 decision line, and tokens.css block 21.
 */
export function Nav({ base = "" }: { base?: string } = {}) {
  return (
    <header className="v4-nav">
      <div className="v4-container v4-nav-inner">
        <a className="v4-wordmark" href={`${base}#hero`}>
          <Mark />
          <span>Devonel</span>
        </a>

        {navSections.length > 0 ? (
          <nav className="v4-nav-links" aria-label="Sections">
            {navSections.map((section) => (
              <a key={section.id} href={`${base}#${section.id}`}>
                {section.label}
              </a>
            ))}
          </nav>
        ) : null}

        <ContactCTA className="v4-btn v4-btn--ink">{contactLabel()}</ContactCTA>
      </div>
    </header>
  );
}
