import {
  Hero,
  Nav,
  Process,
  Proof,
  Services,
  Work,
} from "@/components/variations/v5";
import "@/components/variations/v5/tokens.css";
import { getVariation } from "../variations";

/**
 * Variation 5, "Liquid Metal".
 *
 * A dark, near-empty page with one chrome orb and type at poster scale, built
 * for a studio that wants to be read as expensive. Direction, palette, type
 * scale and motion: `docs/goal/03-design-research.md` section 4. Every word on
 * the page is verbatim from `docs/goal/COPY.md`.
 *
 * `.v5` is the scope every token and every class in `tokens.css` hangs off, so
 * nothing here reaches the switcher at `/` or the other four variations. The
 * name is read from `variations.ts` rather than typed, so this page, the
 * switcher and the mini-switcher can never disagree about what v5 is.
 *
 * Sections are added one at a time; `components/variations/v5/sections.ts` is
 * the list of the ten and the record of which are built.
 */
const variation = getVariation("v5")!;

export const metadata = { title: `${variation.name} - Devonel` };

export default function Page() {
  return (
    <div className="v5">
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Services />
        <Work />
        <Process />
      </main>
    </div>
  );
}
