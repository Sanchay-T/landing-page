import { TopStrip, Nav, LowerSections } from "../_lib/shared";
import { Animations } from "../animations";
import { PinnedHero } from "./pinned-hero";

export default function OptionD() {
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
