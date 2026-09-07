import type { Metadata } from "next";
import "@/components/variations/v5/tokens.css";
import { Hero, Nav } from "@/components/variations/v5";

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
      </main>
    </div>
  );
}
