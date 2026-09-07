import { Board, Hero, Nav, Process, Work } from "@/components/variations/v4";
import "@/components/variations/v4/tokens.css";

/**
 * Variation 4.
 *
 * No `metadata` export: the direction name is an internal label for the review
 * switcher and must never reach a browser tab, so this route inherits the site
 * title and description from `app/layout.tsx`.
 *
 * `.v4` is the scope every token in `tokens.css` hangs off. Nothing in this
 * variation styles anything outside it.
 */
export default function Page() {
  return (
    <div className="v4">
      <Nav />
      <main>
        <Hero />
        <Board />
        <Work />
        <Process />
      </main>
    </div>
  );
}
