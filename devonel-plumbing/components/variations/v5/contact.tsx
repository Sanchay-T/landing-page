import Image from "next/image";
import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel, site } from "@/lib/site";

/**
 * v5 final CTA.
 *
 * The page has spent nine sections showing artefacts. This block asks for the
 * one action, and on a product site that block is not a poster: it is the last
 * row of the document, with the biggest type on the page, one button, the
 * address printed as a live address, and a short record of what the reader gets
 * back for the first payment. Copy is `docs/goal/COPY.md` section 9 verbatim,
 * with the discovery contents from section 5, phase 1.
 *
 * Five decisions worth writing down:
 *
 * 1. The heading takes the 44/56 stop, one step above every other section head
 *    on the page (36/44) and level with the hero's display at desktop. This is
 *    the one place the variation raises its voice, and it raises it at the
 *    point of action rather than for decoration. Nothing else here is loud:
 *    the button is the same accent blue as the nav's, only larger.
 *
 * 2. No form, no field, no checkbox. The list of what discovery returns is an
 *    `<ol>` of static rows with a mono index, because it is the contents of a
 *    document, not a set of controls. COPY.md prints "no forms" twice, and a
 *    checkbox that does nothing would be a control that lies about itself.
 *
 * 3. The channel is read from `lib/site.ts` in both directions. The button is
 *    `ContactCTA`, so it resolves to mail today and to WhatsApp the moment a
 *    number is configured, and the address line is built from `contact.email`
 *    and `contact.mailSubject` so the prefilled subject cannot drift from the
 *    button's. The WhatsApp clause is gated on the configured value's length,
 *    a genuine runtime read rather than a comparison the compiler can fold
 *    away, and while the value is empty this section names no chat channel.
 *
 * 4. The proof beside the button is the artefact, not the quote. COPY.md asks
 *    for the client's sentence here, but `docs/goal/STATUS.md` records that
 *    the same sentence already prints twice on this page and that the hero
 *    owns it; a third printing would be the defect, not the proof. So the
 *    proof at the point of action is a finished render the shipped studio
 *    produced, framed and captioned for what it is.
 *
 * 5. The block sits on `--v5-sunk` under a full-bleed hairline. Every section
 *    above it is on the ground colour, so the change of surface is the signal
 *    that the document has ended, and it costs no colour the variation did not
 *    already have.
 */

/** The contents of what paid discovery hands back, COPY.md section 5, phase 1. */
const RETURNS: readonly string[] = [
  "A written scope",
  "A build plan",
  "A date",
  "A fixed price for the build",
];

/**
 * A real render from the shipped pendant studio, per
 * `docs/goal/ASSET-INVENTORY.md`. Alt and caption describe the artefact and
 * never the client's brand, and the caption says how the picture was made.
 */
const RENDER = {
  src: "/media/jewelo/pendant-dark-gold-emerald@2x.webp",
  width: 1122,
  height: 1402,
  alt: "A gold script name pendant set with four small emeralds, on black velvet",
  label: "presentation view / dark editorial",
  caption: "A finished view from the pendant studio. Rendered, not photographed.",
} as const;

export function Contact() {
  /* Read as a length, so this is a runtime check on whatever the config holds
     rather than a comparison against today's empty literal. */
  const hasWhatsapp = site.contact.whatsapp.length > 0;
  const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    site.contact.mailSubject,
  )}`;

  return (
    <section id="contact" className="v5-contact" aria-labelledby="contact-title">
      <div className="v5-container v5-contact__inner">
        <div className="v5-contact__copy">
          <p className="v5-mono v5-eyebrow">Start</p>

          <h2 id="contact-title" className="v5-contact__title">
            Send the brief. We send back a scope.
          </h2>

          <p className="v5-contact__body">
            Paid discovery is small and fixed, and it ends with a written scope, a date and a price.
            If you stop there, the plan you paid for is still yours.
          </p>

          <div className="v5-contact__act">
            <ContactCTA className="v5-btn v5-btn--primary v5-contact__go">
              {contactLabel()}
            </ContactCTA>
            <p className="v5-mono v5-contact__support">Paid discovery, fixed scope, no forms.</p>
          </div>

          <p className="v5-contact__channel">
            Email{" "}
            <a className="v5-textlink v5-contact__mail" href={mailHref}>
              {site.contact.email}
            </a>
            {hasWhatsapp ? ", or message us on WhatsApp" : null}. No forms.
          </p>
        </div>

        {/* The document, not a form: four rows and the term that governs them. */}
        <div className="v5-spec v5-contact__doc">
          <p className="v5-spec__cap v5-mono">what discovery returns</p>

          <div className="v5-spec__body">
            <ol className="v5-contact__list">
              {RETURNS.map((line, i) => (
                <li key={line} className="v5-contact__item">
                  <span className="v5-mono v5-contact__n" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>

            <p className="v5-spec__foot v5-mono">Credited against the build if you continue.</p>
          </div>
        </div>

        <figure className="v5-figure v5-contact__figure">
          <div className="v5-frame">
            <p className="v5-frame__cap v5-mono">{RENDER.label}</p>
            <Image
              className="v5-frame__shot"
              src={RENDER.src}
              width={RENDER.width}
              height={RENDER.height}
              sizes="(min-width: 1024px) 486px, (min-width: 480px) 352px, 100vw"
              alt={RENDER.alt}
              priority
            />
          </div>
          <figcaption className="v5-figcap v5-mono">{RENDER.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
