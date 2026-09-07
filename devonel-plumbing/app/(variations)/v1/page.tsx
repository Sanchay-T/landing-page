import "@/components/variations/v1/tokens.css";

import {
  Contact,
  Engagement,
  Faq,
  Footer,
  Founders,
  Hero,
  Nav,
  Process,
  Proof,
  Services,
  Work,
} from "@/components/variations/v1";
import { getVariation } from "../variations";

/**
 * Variation 1, "Studio Dark".
 *
 * A server component: the only client boundary on this route is the hero, and
 * three.js sits behind two dynamic imports below that. The `v1` class on the
 * wrapper is what scopes `tokens.css`, so every style on this page is opted
 * into by this one element and none of it can reach v2..v5.
 */
const variation = getVariation("v1")!;

export const metadata = { title: `${variation.name} - Devonel` };

export default function Page() {
  return (
    <div className="v1">
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Services />
        <Work />
        <Process />
        <Founders />
        <Engagement />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
