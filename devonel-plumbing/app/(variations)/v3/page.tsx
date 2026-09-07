import { Hero, Proof, Services, TickBar, Work } from "@/components/variations/v3";
import "@/components/variations/v3/tokens.css";
import { getVariation } from "../variations";

/**
 * Variation 3, "Scroll Story".
 *
 * The page is one build told in order: the ground travels from the night the
 * brief arrived to the morning the product went live, and the sticky bar at the
 * top says which of those sixteen days you are reading. Everything visual is in
 * `components/variations/v3`; the direction is in
 * `docs/goal/03-design-research.md` section 4.
 */
const variation = getVariation("v3")!;

export const metadata = { title: `${variation.name} - Devonel` };

export default function Page() {
  return (
    <div className="v3">
      <TickBar />
      <main>
        <Hero />
        <Proof />
        <Services />
        <Work />
      </main>
    </div>
  );
}
