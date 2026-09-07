import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel, site } from "@/lib/site";
import { getSection } from "./sections";

/**
 * Section 9, the last station: 27 Aug 2026, the morning the product went live.
 *
 * THE BAND SITS AT THE END OF THE RAMP AND IS NOT PINNED. It carries no
 * `data-clock`. The flash-forward in section 2 is this page's one exception and
 * it earns that by breaking the ramp; this band is where the ramp arrives on its
 * own. Pinning it to `--v3-t: 1` would spend the ending twice and would turn the
 * sixteen days into decoration rather than a clock. `data-stage="day"` is here
 * only for the two clockless paths, exactly as the engagement band uses it.
 *
 * THE STATION CARRIES A DATE, and it is the same stamp the flash-forward wore in
 * screen two. The page showed the reader 27 Aug before it proved how it got
 * there; this is the reader arriving on that day themselves. Every other band
 * either carries the day the build used it or ends bare, so a date here is the
 * established idiom, not a new one.
 *
 * SIZE. The ask is the only text on the page set larger than a section heading
 * and smaller than the hero headline: 48px at 390, 64px at 1280. The hero asks
 * for sixteen days of attention; this asks for one message, so it is loud but it
 * does not out-shout the opening.
 *
 * THE PROOF SITS BESIDE THE BUTTON, not under the heading. At the moment of
 * action the sentence a reader needs is the owner's, not ours.
 *
 * NO FORM ANYWHERE. One button through `ContactCTA`, which resolves the channel
 * from `lib/site.ts`, plus the address as live text. Nothing here names WhatsApp
 * while `contact.whatsapp` is empty, and no channel is written in this file.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 9 with the bracketed source
 * tags removed. Server component.
 */

/**
 * COPY.md section 9 prints the address as live text linked with the canonical
 * subject. The href is built from `lib/site.ts` rather than typed, so the
 * address exists in exactly one place in this repository.
 */
const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(site.contact.mailSubject)}`;

export function Contact() {
  const section = getSection("contact");

  return (
    <section id="contact" className="v3-band v3-final" data-stage="day" aria-labelledby="contact-h">
      <div className="v3-inner">
        <p className="v3-station">
          <span>{section.label}</span>
          <span className="v3-station-date">27 Aug 2026</span>
        </p>

        <h2 className="v3-ask" id="contact-h">
          Send the brief. We send back a scope.
        </h2>

        <p className="v3-lede">
          Paid discovery is small and fixed, and it ends with a written scope, a date and a price.
          If you stop there, the plan you paid for is still yours.
        </p>

        <div className="v3-final-act">
          <div className="v3-final-do">
            <ContactCTA className="v3-cta">{contactLabel()}</ContactCTA>
            <p className="v3-support">Paid discovery, fixed scope, no forms.</p>
          </div>

          <p className="v3-proof-line">
            &quot;the layout is very good and simple&quot; - the owner, a bespoke jewellery house in
            Dubai. Shipped 27 Aug 2026
          </p>
        </div>

        <p className="v3-channel">
          Email{" "}
          <a className="v3-mail" href={mailHref}>
            {site.contact.email}
          </a>
          . No forms.
        </p>
      </div>
    </section>
  );
}
