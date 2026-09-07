import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel } from "@/lib/site";
import { WireRing } from "./wire-ring";

/**
 * Section 1, day one, night: the brief arrives.
 *
 * The headline is the primary from `docs/goal/COPY.md` section 1, unchanged, and
 * it is the LCP element - nothing above it, nothing async in front of it, and no
 * canvas anywhere near it below 1100px.
 *
 * The two runs of `<br>` are one sentence with two break sets: `v3-br-w` renders
 * from 46rem up and gives three even lines, `v3-br-n` renders below it and gives
 * four. The text content is identical either way, so a screen reader and a
 * search engine read one sentence.
 *
 * This is a server component. The only client code in the hero is the ring,
 * which is decoration in the right margin and mounts after the text has painted.
 */
export function Hero() {
  return (
    <section id="hero" className="v3-band v3-hero" data-stage="night">
      <div className="v3-inner v3-hero-inner">
        <div>
          <h1 className="v3-h1">
            Sixteen days<br className="v3-br-n" /> from<br className="v3-br-w" /> brief to a<br className="v3-br-n" /> product<br className="v3-br-w" /> your<br className="v3-br-n" /> customers use.
          </h1>

          <p className="v3-lede">
            Devonel builds and runs the software owner-led brands sell with. We shipped a
            name-pendant studio for a bespoke jewellery house in Dubai on the morning of their
            exhibition stall.
          </p>

          <div className="v3-act">
            <ContactCTA className="v3-cta">{contactLabel()}</ContactCTA>
            <p className="v3-support">Paid discovery, fixed scope, no forms.</p>
          </div>
        </div>

        <WireRing />
      </div>
    </section>
  );
}
