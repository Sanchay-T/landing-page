"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel } from "@/lib/site";

/**
 * v5 hero.
 *
 * The visual is not a picture of software, it is the software: three real
 * screens of the name-pendant studio Devonel shipped on 27 Aug 2026, framed as
 * the window they ran in and annotated with the lines that describe them in
 * `docs/goal/COPY.md` section 4. Nothing here is drawn, mocked or invented, and
 * the frame's address slot carries where the picture came from rather than a
 * domain, because the client's URL is confidential and a made-up one would be
 * the exact fake artefact this variation exists to avoid.
 *
 * The tabs are the flow, in the order the customer walks it. They are three
 * different screens of one product, not a before and after.
 */

type Note = {
  /** Anchor on the shot, as a percentage of its box. */
  x: string;
  y: string;
  text: string;
};

type Shot = {
  id: string;
  /** Tab label: the step of the flow this screen is. */
  tab: string;
  /** What the frame's address slot prints. Provenance, never a URL. */
  label: string;
  src: string;
  /** Intrinsic size of the @2x file, so the frame always gets 1.5x or better. */
  width: number;
  height: number;
  /** Brand-free alt from docs/goal/ASSET-INVENTORY.md. */
  alt: string;
  notes: readonly Note[];
};

const SHOTS: readonly Shot[] = [
  {
    id: "name",
    tab: "Type a name",
    label: "name-pendant studio / name and language",
    src: "/media/jewelo/ui-name-and-language@2x.webp",
    width: 1440,
    height: 822,
    alt: "The name step of a jewellery design tool: a name field, a language toggle, an approved script-spelling field, and a live pendant preview",
    notes: [
      { x: "6.2%", y: "41%", text: "Type a name in Arabic or English" },
      { x: "6.2%", y: "65%", text: "Take a spelling suggestion" },
      { x: "50%", y: "30%", text: "Watch a live preview update as you choose" },
    ],
  },
  {
    id: "style",
    tab: "Choose a style",
    label: "name-pendant studio / arabic style",
    src: "/media/jewelo/ui-style-picker@2x.webp",
    width: 1440,
    height: 822,
    alt: "The style step of a jewellery design tool showing six lettering styles as selectable cards",
    notes: [
      { x: "6.2%", y: "40%", text: "Six design styles, three layouts" },
      { x: "6.2%", y: "78%", text: "Then the metal, the stones, the size and the chain" },
    ],
  },
  {
    id: "review",
    tab: "Review",
    label: "name-pendant studio / review your design",
    src: "/media/jewelo/ui-review-spec@2x.webp",
    width: 1440,
    height: 822,
    alt: "A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox",
    notes: [
      { x: "6.2%", y: "69%", text: "Approve the spelling" },
      { x: "6.2%", y: "86%", text: "See a price estimate and request a quote" },
    ],
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const uid = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabId = (i: number) => `${uid}-tab-${SHOTS[i].id}`;
  const panelId = (i: number) => `${uid}-panel-${SHOTS[i].id}`;

  /** ARIA tabs pattern: arrows move, Home and End jump, focus follows. */
  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const last = SHOTS.length - 1;
    let next = active;
    if (event.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (event.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;

    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section id="hero" className="v5-hero">
      <div className="v5-container v5-hero__inner">
        <div className="v5-hero__copy">
          <p className="v5-mono v5-eyebrow">AI product studio and growth partner</p>

          {/* One non-breaking space binds the article to its noun, so the
              balanced headline can never end a line on a lone "a". */}
          <h1 className="v5-display v5-hero__headline">
            Sixteen days from brief to a&nbsp;product your customers use.
          </h1>

          <p className="v5-lead v5-measure">
            Devonel builds and runs the software owner-led brands sell with. We shipped a
            name-pendant studio for a bespoke jewellery house in Dubai on the morning of their
            exhibition stall.
          </p>

          <div className="v5-hero__cta">
            <ContactCTA className="v5-btn v5-btn--primary">{contactLabel()}</ContactCTA>
            <p className="v5-hero__support">Paid discovery, fixed scope, no forms.</p>
          </div>

          {/* Each date is its own element: as bare text they merge into one
              anonymous flex item and the gap between them disappears. */}
          <p className="v5-mono v5-hero__status">
            <span className="v5-hero__pulse" aria-hidden="true" />
            <span>Spec received 11 Aug 2026</span>
            <span className="v5-hero__sep" aria-hidden="true" />
            <span>Live 27 Aug 2026</span>
          </p>
        </div>

        <figure className="v5-hero__figure">
          <div className="v5-frame">
            <div
              className="v5-frame__tabs"
              role="tablist"
              aria-label="Screens from the name-pendant studio"
              onKeyDown={onKeyDown}
            >
              {SHOTS.map((shot, i) => (
                <button
                  key={shot.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={tabId(i)}
                  className="v5-tab"
                  aria-selected={i === active}
                  aria-controls={panelId(i)}
                  tabIndex={i === active ? 0 : -1}
                  onClick={() => setActive(i)}
                >
                  {shot.tab}
                </button>
              ))}
            </div>

            <div className="v5-frame__chrome v5-mono">
              <span className="v5-frame__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="v5-frame__label">{SHOTS[active].label}</span>
              <span className="v5-frame__stamp">shipped 27 Aug 2026</span>
            </div>

            <div className="v5-frame__stage">
              {SHOTS.map((shot, i) => (
                <div
                  key={shot.id}
                  className="v5-panel"
                  role="tabpanel"
                  id={panelId(i)}
                  aria-labelledby={tabId(i)}
                  tabIndex={0}
                  hidden={i !== active}
                >
                  <Image
                    className="v5-frame__shot"
                    src={shot.src}
                    width={shot.width}
                    height={shot.height}
                    alt={shot.alt}
                    priority
                  />
                  <ol className="v5-notes">
                    {shot.notes.map((note, n) => (
                      <li
                        key={note.text}
                        className="v5-note"
                        style={{ "--x": note.x, "--y": note.y } as CSSProperties}
                      >
                        <span className="v5-note__n v5-mono" aria-hidden="true">
                          {n + 1}
                        </span>
                        <span>{note.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}

              <blockquote className="v5-quote">
                <p className="v5-quote__text">&ldquo;the layout is very good and simple&rdquo;</p>
                <cite className="v5-quote__who v5-mono">
                  the owner, a bespoke jewellery house in Dubai
                </cite>
              </blockquote>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
