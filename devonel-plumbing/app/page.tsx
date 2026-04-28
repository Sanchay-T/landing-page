import { TopStrip, Nav, LowerSections } from "./_lib/shared";
import { Animations } from "./animations";
import { PinnedHero } from "./option-d/pinned-hero";

export default function Page() {
  return (
    <>
      <TopStrip />
      <Nav />
      <PinnedHero />
      <LowerSections />
      <Animations />
    </>
  );
}
