import type { Metadata } from "next";
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
  sections,
} from "@/components/variations/v2";
import "@/components/variations/v2/tokens.css";

/**
 * Variation 2 - Terminal.
 *
 * The page is a shell buffer: the rail on the left is the file tree of what is
 * in it, each section opens with a full-width ASCII rule carrying its name, and
 * the buffer ends at `eof`. Sections render in registry order, so adding one is
 * an entry in `components/variations/v2/sections.ts` plus a line here.
 */

export const metadata: Metadata = {
  title: "2. Terminal - Devonel redesign",
  description:
    "One monospace type system, no imagery, an 80 character measure. The studio answers at a shell prompt.",
};

export default function Page() {
  return (
    <div className="v2">
      <Nav sections={sections} />

      <div className="v2-shell">
        <main className="v2-main">
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

        {/* The eof block. It stays last as sections are appended inside <main> above. */}
        <Footer />
      </div>
    </div>
  );
}
