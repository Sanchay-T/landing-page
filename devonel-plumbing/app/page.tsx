import { TopStrip, Nav, LowerSections } from "./_lib/shared";
import { Animations } from "./animations";
import { PinnedHero } from "./option-d/pinned-hero";

export default function Page() {
  return (
    <>
      {/* TopStrip + Nav are desktop chrome only — on mobile, MobilePinnedHero
          fills the viewport from y=0 with its own minimal floating header. */}
      <div className="hidden lg:block">
        <TopStrip />
        <Nav />
      </div>
      <PinnedHero />
      <LowerSections />
      <Animations />
    </>
  );
}
