import { getVariation } from "../variations";
import {
  Engagement,
  Founders,
  Hero,
  Nav,
  Process,
  Proof,
  Services,
  Work,
} from "@/components/variations/v2";
import "@/components/variations/v2/tokens.css";

/**
 * Variation 2, "Shader Light": off-white paper with a slow field behind it
 * whose two colour poles are Dubai and Mumbai, lit by the real local time in
 * each city.
 *
 * Every token the page uses is scoped to the `.v2` class on the wrapper below,
 * so nothing here leaks into the other four variations or into the switcher.
 */
const variation = getVariation("v2")!;

export const metadata = { title: `${variation.name} - Devonel` };

export default function Page() {
  return (
    <div className="v2">
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Services />
        <Work />
        <Process />
        <Founders />
        <Engagement />
      </main>
    </div>
  );
}
