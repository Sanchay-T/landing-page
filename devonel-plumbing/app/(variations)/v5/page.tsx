import type { Metadata } from "next";
import "@/components/variations/v5/tokens.css";
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
} from "@/components/variations/v5";

export const metadata: Metadata = {
  title: "5. Console - Devonel redesign",
  description:
    "Devonel builds and runs the software owner-led brands sell with. Sixteen days from brief to a product your customers use.",
};

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
        <Founders />
        <Engagement />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
