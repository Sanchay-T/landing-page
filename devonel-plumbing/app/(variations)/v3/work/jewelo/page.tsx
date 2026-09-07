import Image from "next/image";
import { ContactCTA } from "@/components/ds/contact-cta";
import { CaseBlock, CaseLines, TickBar, flagship } from "@/components/variations/v3";
import "@/components/variations/v3/tokens.css";
import { contactHref, contactLabel, site } from "@/lib/site";

/**
 * The full build, for variation 3.
 *
 * ONE PAGE, ONE FIXED DAY. On `/v3` the clock is scroll position; here there is
 * no build to travel through, so the whole document is pinned to the morning of
 * 27 Aug. The pin is `data-clock="flash"` on a wrapper - the same mechanism the
 * proof strip uses, and the only one of the three clock paths that cannot be
 * overridden, because a declared value on a descendant beats both the scroll
 * animation running on `.v3` and the inline style the rAF fallback writes there.
 * The wrapper is itself a `.v3-band`, so the ground is derived from the clock
 * rather than written. Nothing on this page writes a colour.
 *
 * The tick bar takes `base="/v3"`, which turns its sixteen ticks and its
 * wordmark into links back into the page they came from. Its marker sits on
 * tick sixteen, because that is the day this page is.
 *
 * Copy is verbatim from `docs/goal/COPY.md`: the flagship case in section 4, in
 * full and in its own order, and the close from section 9. The case prose is
 * imported from the section that carries it on `/v3`, so the page and the
 * sub-page can never drift. The client is never named.
 *
 * The plates are every file in `docs/goal/ASSET-INVENTORY.md`, in the product
 * order that document sets: one pendant photographed four ways, the second
 * design, the wide plate, then the seven steps of the flow. Each is capped at
 * 480px at 1x and captioned with the inventory's own words. The caption carries
 * that text visibly, so the image itself is marked decorative rather than
 * repeating the same sentence to a screen reader twice.
 */

const CASE_LABEL = "Case studies";

type Plate = {
  file: string;
  width: number;
  height: number;
  /** Verbatim from ASSET-INVENTORY.md. */
  caption: string;
};

const plates: readonly Plate[] = [
  {
    file: "pendant-studio-silver@2x.webp",
    width: 1122,
    height: 1402,
    caption:
      "A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot",
  },
  {
    file: "pendant-worn-silver@2x.webp",
    width: 1122,
    height: 1222,
    caption: "A silver name pendant worn at the collarbone, framed below the chin",
  },
  {
    file: "pendant-close-silver@2x.webp",
    width: 1122,
    height: 1402,
    caption:
      "Close detail of a silver cut-out name pendant showing the polished edges and the chain links",
  },
  {
    file: "pendant-dark-silver@2x.webp",
    width: 1122,
    height: 1402,
    caption: "A silver name pendant resting on black velvet, lit as a dark editorial still",
  },
  {
    file: "pendant-studio-gold@2x.webp",
    width: 1254,
    height: 1254,
    caption:
      "A gold script name pendant with two small set stones, laid flat on a warm neutral ground",
  },
  {
    file: "pendant-worn-gold@2x.webp",
    width: 1122,
    height: 1227,
    caption: "A gold script name pendant worn at the collarbone, framed below the chin",
  },
  {
    file: "pendant-dark-gold-emerald@2x.webp",
    width: 1122,
    height: 1402,
    caption: "A gold script name pendant set with four small emeralds, on black velvet",
  },
  {
    // The one file with no 2x: the source does not allow one.
    file: "poster-16x9.webp",
    width: 1122,
    height: 631,
    caption: "A gold script name pendant set with emeralds on black velvet, cropped wide",
  },
  {
    file: "ui-name-and-language@2x.webp",
    width: 1440,
    height: 822,
    caption:
      "The name step of a jewellery design tool: a name field, a language toggle, an approved script-spelling field, and a live pendant preview",
  },
  {
    file: "ui-style-picker@2x.webp",
    width: 1440,
    height: 822,
    caption:
      "The style step of a jewellery design tool showing six lettering styles as selectable cards",
  },
  {
    file: "ui-stones-and-setting@2x.webp",
    width: 1440,
    height: 822,
    caption:
      "The stone step of a jewellery design tool: setting density and stone type beside a live pendant preview",
  },
  {
    file: "ui-review-spec@2x.webp",
    width: 1440,
    height: 822,
    caption:
      "A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox",
  },
  {
    file: "ui-generation-queue@2x.webp",
    width: 920,
    height: 460,
    caption:
      "Four presentation views queued in parallel, labelled Studio, On model, Close up and Dark mood, each showing a queued state",
  },
  {
    file: "ui-rtl-mirror@2x.webp",
    width: 1440,
    height: 822,
    caption:
      "A design tool mirrored right to left, with the live preview on the right and the step rail reversed",
  },
  {
    file: "ui-operator-console@2x.webp",
    width: 1440,
    height: 322,
    caption:
      "An operator work queue header showing counts for quote requests, in progress and ready",
  },
];

export const metadata = {
  title: flagship.title,
  description: `${flagship.result[0]} ${flagship.result[1]}`,
};

export default function Page() {
  return (
    <div className="v3">
      <div className="v3-band v3-doc" data-clock="flash">
        <TickBar base="/v3" />

        <main>
          <article className="v3-band v3-doc-body">
            <div className="v3-inner">
              <p className="v3-station">
                <span>{CASE_LABEL}</span>
              </p>

              <div className="v3-service-rule v3-case-rule v3-doc-title">
                <h1 className="v3-service-name">{flagship.title}</h1>
                <p className="v3-service-date">{flagship.range}</p>
              </div>
              <p className="v3-case-tags">{flagship.tags}</p>

              <div className="v3-doc-blocks">
                <CaseBlock label="Problem." date="11 Aug" level={2}>
                  <CaseLines lines={flagship.problem} lede />
                </CaseBlock>

                <CaseBlock label="What we built." level={2}>
                  <CaseLines lines={flagship.built} />

                  <div className="v3-plates">
                    {plates.map((plate, i) => (
                      <figure className="v3-plate" key={plate.file}>
                        <Image
                          src={`/media/jewelo/${plate.file}`}
                          alt=""
                          width={plate.width}
                          height={plate.height}
                          sizes="(min-width: 1100px) 480px, 92vw"
                          // Only the first plate is priority; the other
                          // fourteen take next/image's default lazy loading.
                          // The set was eager on the theory that a reader who
                          // lands here came for the evidence, but eager on
                          // fifteen stills spends the whole connection before
                          // the first one is painted, and the lazy set still
                          // decodes 15/15 on a scroll to the bottom at 390 and
                          // 1280. The plates are at most 480px wide and
                          // optimised on the way out, so each one arrives well
                          // ahead of the reader.
                          priority={i === 0}
                        />
                        <figcaption>{plate.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </CaseBlock>

                <CaseBlock label="How it holds up." level={2}>
                  <CaseLines lines={flagship.holds} />
                </CaseBlock>

                <CaseBlock label="Stack." level={2}>
                  <p className="v3-case-text">{flagship.stack}</p>
                </CaseBlock>

                <CaseBlock label="Result." date="27 Aug" level={2}>
                  <CaseLines lines={flagship.result} />
                </CaseBlock>

                <CaseBlock label="What came next." level={2}>
                  <CaseLines lines={flagship.next} />
                </CaseBlock>
              </div>
            </div>
          </article>

          <section className="v3-band v3-doc-close" aria-labelledby="start-h">
            <div className="v3-inner">
              <p className="v3-station">
                <span>Start</span>
              </p>

              <h2 className="v3-h2" id="start-h">
                Send the brief. We send back a scope.
              </h2>

              <p className="v3-lede">
                Paid discovery is small and fixed, and it ends with a written scope, a date and a
                price. If you stop there, the plan you paid for is still yours.
              </p>

              <div className="v3-act">
                <ContactCTA className="v3-cta">{contactLabel()}</ContactCTA>
                <p className="v3-support">Paid discovery, fixed scope, no forms.</p>
              </div>

              <p className="v3-doc-line">
                Email{" "}
                <a className="v3-link" href={contactHref()}>
                  {site.contact.email}
                </a>
                . No forms
                {site.contact.whatsapp ? ", or message us on WhatsApp" : ""}.
              </p>

              <p className="v3-doc-line">
                &quot;the layout is very good and simple&quot; - the owner, a bespoke jewellery
                house in Dubai. Shipped 27 Aug 2026.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
