import type { Metadata } from "next";
import { Hero, Nav, Services, sections } from "@/components/variations/v2";
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
          <Services />
        </main>

        {/* Closes the buffer. It stays last as sections are appended above it. */}
        <div className="v2-rule" data-label="eof" aria-hidden="true" />
      </div>
    </div>
  );
}
