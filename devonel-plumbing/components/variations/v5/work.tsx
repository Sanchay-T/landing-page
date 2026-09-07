import Image from "next/image";
import type { CSSProperties } from "react";

/**
 * v5 case studies.
 *
 * The mechanic is the one `docs/goal/03-design-research.md` section 4 names for
 * this direction: sticky left copy, right-side scrolling screenshots. The left
 * panel is the case file and it pins; the artefacts that prove it scroll past on
 * the right, each annotated with the lines that describe it in
 * `docs/goal/COPY.md` section 4.
 *
 * Every picture here is a real screenshot or a real render of the shipped
 * pendant studio, taken from `public/media/jewelo` and listed in
 * `docs/goal/ASSET-INVENTORY.md`. Nothing is drawn, mocked or invented: a
 * browser frame is used only around a shot that really was a full screen, and
 * the cropped strips and the render sheet get a caption bar instead, because
 * chrome around a panel that never was a window would read as the fake artefact
 * this variation exists to avoid.
 *
 * The two open files carry no image at all. Neither has shipped, so there is
 * nothing to photograph, and a dashboard invented to fill the space would be
 * the same lie in a different font. So they take no frame either: `.v5-spec`,
 * square and flat, because the radius and the one shadow token on this page
 * mean a real capture. A header strip with the status, the file, and the status
 * line COPY.md ends them on.
 *
 * The section is static markup. The callouts are opaque and in position with
 * JavaScript idle, so a touch reader and a full-page capture see exactly what a
 * mouse reader sees.
 */

type Note = {
  text: string;
  /**
   * Anchor on the shot, as a percentage of its box. Positioned frames only.
   * Every anchor is set on an empty band of the screenshot: a chip that covers
   * the control it points at annotates nothing.
   */
  x?: string;
  y?: string;
};

type Artefact = {
  id: string;
  /** "window" for a shot that really was a full screen, "panel" for a crop. */
  kind: "window" | "panel";
  /** What the chrome address slot or the caption bar prints. Provenance. */
  label: string;
  caption: string;
  notes: readonly Note[];
};

type ShotArtefact = Artefact & {
  src: string;
  /** Intrinsic size of the @2x file, so the frame gets 1.8x or better. */
  width: number;
  height: number;
  /** Brand-free alt from docs/goal/ASSET-INVENTORY.md. */
  alt: string;
};

/** The four presentation views, in the order the product makes them. */
const RENDERS = [
  {
    src: "/media/jewelo/pendant-studio-silver@2x.webp",
    label: "Studio",
    alt: "A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot",
  },
  {
    src: "/media/jewelo/pendant-worn-silver@2x.webp",
    label: "On model",
    alt: "A silver name pendant worn at the collarbone, framed below the chin",
  },
  {
    src: "/media/jewelo/pendant-close-silver@2x.webp",
    label: "Close up",
    alt: "Close detail of a silver cut-out name pendant showing the polished edges and the chain links",
  },
  {
    src: "/media/jewelo/pendant-dark-silver@2x.webp",
    label: "Dark mood",
    alt: "A silver name pendant resting on black velvet, lit as a dark editorial still",
  },
] as const;

/** Chosen so the section shows what the hero does not: the hero carries the
 *  name, style and review screens, this column carries the depth and the
 *  delivery. Between them the page prints every studio screen once. */
const CUSTOMISE: ShotArtefact = {
  id: "customise",
  kind: "window",
  label: "name-pendant studio / stones and setting",
  src: "/media/jewelo/ui-stones-and-setting@2x.webp",
  width: 1440,
  height: 822,
  alt: "The stone step of a jewellery design tool: setting density and stone type beside a live pendant preview",
  caption: "Customise. Setting density and stone type, with the live preview beside them.",
  notes: [
    { x: "6.2%", y: "80%", text: "Then the style, the metal, the stones, the size and the chain" },
    { x: "46%", y: "30%", text: "A live preview updates as you choose" },
  ],
};

const QUEUE: ShotArtefact = {
  id: "queue",
  kind: "panel",
  label: "presentation views / generation queue",
  src: "/media/jewelo/ui-generation-queue@2x.webp",
  width: 920,
  height: 460,
  alt: "Four presentation views queued in parallel, labelled Studio, On model, Close up and Dark mood, each showing a queued state",
  caption: "The four views start together, and the count is the real one.",
  notes: [
    {
      text: "Four stills run at once and each releases its on-neck version as soon as that one is ready",
    },
    {
      text: "Under model provider limits the queue is shown honestly instead of hidden behind a spinner",
    },
  ],
};

const RTL: ShotArtefact = {
  id: "rtl",
  kind: "window",
  label: "name-pendant studio / right to left",
  src: "/media/jewelo/ui-rtl-mirror@2x.webp",
  width: 1440,
  height: 822,
  alt: "A design tool mirrored right to left, with the step rail reversed and the live preview on the left",
  caption: "The whole studio mirrored right to left, step rail and live preview included.",
  notes: [
    { x: "58%", y: "72%", text: "Type a name in Arabic or English and take a spelling suggestion" },
    { x: "5%", y: "32%", text: "The whole layout mirrors, not only the words" },
  ],
};

const SHEET: Artefact = {
  id: "renders",
  kind: "panel",
  label: "presentation views / four renders per design",
  caption: "The four views the studio returns, in the order it makes them.",
  notes: [
    {
      text: "The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame",
    },
    { text: "Download full screen, see a price estimate and request a quote" },
  ],
};

/** COPY.md section 4, "Stack." Ten entries, printed as written. */
const STACK = [
  "Next.js",
  "React",
  "strict TypeScript",
  "Supabase",
  "Trigger.dev",
  "gpt-image-2",
  "fal.ai Seedance",
  "Sentry",
  "PostHog",
  "DigitalOcean",
] as const;

function Notes({ notes, stack }: { notes: readonly Note[]; stack?: boolean }) {
  return (
    <ol className={stack ? "v5-notes v5-notes--stack" : "v5-notes"}>
      {notes.map((note, i) => (
        <li
          key={note.text}
          className="v5-note"
          style={{ "--x": note.x, "--y": note.y } as CSSProperties}
        >
          <span className="v5-note__n v5-mono" aria-hidden="true">
            {i + 1}
          </span>
          <span>{note.text}</span>
        </li>
      ))}
    </ol>
  );
}

function Shot({ artefact }: { artefact: ShotArtefact }) {
  return (
    <figure className="v5-figure">
      <div className="v5-frame">
        {artefact.kind === "window" ? (
          <div className="v5-frame__chrome v5-mono">
            <span className="v5-frame__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="v5-frame__label">{artefact.label}</span>
            <span className="v5-frame__stamp">shipped 27 Aug 2026</span>
          </div>
        ) : (
          <p className="v5-frame__cap v5-mono">{artefact.label}</p>
        )}

        <div className="v5-panel">
          <Image
            className="v5-frame__shot"
            src={artefact.src}
            width={artefact.width}
            height={artefact.height}
            sizes="(min-width: 1024px) 768px, 100vw"
            alt={artefact.alt}
            priority
          />
          <Notes notes={artefact.notes} stack={artefact.kind === "panel"} />
        </div>
      </div>
      <figcaption className="v5-figcap v5-mono">{artefact.caption}</figcaption>
    </figure>
  );
}

export function Work() {
  return (
    <section id="work" className="v5-work" aria-labelledby="work-title">
      <div className="v5-container">
        <div className="v5-work__head">
          <h2 id="work-title" className="v5-work__h2">
            One shipped, two in build, nothing invented.
          </h2>
        </div>

        <div className="v5-work__body">
          {/* The case file. Short on purpose: at 1280x800 it has to pin inside
              the viewport, and the long prose of the build belongs on the
              artefacts it describes rather than in a column beside them. */}
          <div className="v5-work__aside">
            <p className="v5-mono v5-eyebrow">Flagship case</p>

            <h3 className="v5-work__title">
              A name-pendant studio, live for an exhibition stall in sixteen days.
            </h3>

            <p className="v5-mono v5-work__tags">
              Jewellery. Dubai. Product studio. Shipped 27 Aug 2026.
            </p>

            <p className="v5-work__problem">
              A bespoke jewellery house sells pendants cut to a customer&rsquo;s name. Before
              ordering, the customer could not see their own name as a finished piece. A
              customisation field on a store page is a text box, not a design studio.
            </p>

            <span className="v5-work__rule" aria-hidden="true" />

            <dl className="v5-mono v5-work__result">
              <div>
                <dt>Spec</dt>
                <dd>11 Aug 2026</dd>
              </div>
              <div>
                <dt>Live</dt>
                <dd>27 Aug 2026, the morning of the client&rsquo;s exhibition stall</dd>
              </div>
            </dl>

            <span className="v5-work__rule" aria-hidden="true" />

            <ul className="v5-work__stack" aria-label="Stack">
              {STACK.map((item) => (
                <li key={item} className="v5-mono v5-work__chip">
                  {item}
                </li>
              ))}
            </ul>

            <a href="/v5/work/jewelo" className="v5-textlink">
              Read the full build
            </a>
          </div>

          <div className="v5-work__artefacts">
            <Shot artefact={CUSTOMISE} />
            <Shot artefact={QUEUE} />

            <figure className="v5-figure">
              <div className="v5-frame">
                <p className="v5-frame__cap v5-mono">{SHEET.label}</p>
                <ul className="v5-renders">
                  {RENDERS.map((render) => (
                    <li key={render.label} className="v5-render">
                      <Image
                        className="v5-render__img"
                        src={render.src}
                        width={1122}
                        height={1402}
                        sizes="(min-width: 1024px) 180px, (min-width: 560px) 22vw, 44vw"
                        alt={render.alt}
                        priority
                      />
                      <span className="v5-mono v5-render__label">{render.label}</span>
                    </li>
                  ))}
                </ul>
                <Notes notes={SHEET.notes} stack />
              </div>
              <figcaption className="v5-figcap v5-mono">{SHEET.caption}</figcaption>
            </figure>

            <Shot artefact={RTL} />
          </div>
        </div>

        {/* The two open files. No image on either: nothing has shipped, so
            there is nothing to photograph, and the status line says so. */}
        <div className="v5-work__open">
          <article className="v5-spec v5-doc">
            <div className="v5-doc__head v5-mono">
              <span className="v5-doc__state">Audit delivered</span>
              <span>Mobile app.</span>
            </div>
            <div className="v5-doc__body">
              <h3 className="v5-doc__title">
                An audit that found the launch blockers before submission.
              </h3>
              <p>
                A client had built a mobile app and wanted it ready for the stores, not rebuilt. We
                read the whole thing: five tabs, more than 25 screens.
              </p>
              <p>The audit listed what would stop a launch:</p>
              <ul className="v5-doc__list">
                <li>ad units still on test IDs</li>
                <li>store billing not wired</li>
                <li>a notification cap that needs a rolling scheduler</li>
                <li>a privacy policy that contradicted the ads</li>
                <li>in-app account deletion missing</li>
              </ul>
            </div>
            <p className="v5-doc__foot v5-mono">Status: audit delivered, build not started.</p>
          </article>

          <article className="v5-spec v5-doc">
            <div className="v5-doc__head v5-mono">
              <span className="v5-doc__state" data-state="open">
                In progress
              </span>
              <span>Retail. WhatsApp.</span>
            </div>
            <div className="v5-doc__body">
              <h3 className="v5-doc__title">
                Leads that answer back, for a luxury watch boutique in Dubai.
              </h3>
              <p>
                Leads were arriving on WhatsApp and going cold in the boutique&rsquo;s current tool.
              </p>
              <p>
                We ran discovery on the same channel and timed how long competitors took to answer
                the same question; most took hours and some never replied.
              </p>
              <p>The scope is a lead system that answers, qualifies and hands over.</p>
            </div>
            <p className="v5-doc__foot v5-mono">
              Status: in progress, discovery started 25 Aug 2026.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
