import { DesktopPinnedHero } from "./desktop-pinned-hero";
import { MobilePinnedHero } from "./mobile-pinned-hero";

export function PinnedHero() {
  return (
    <>
      <MobilePinnedHero className="lg:hidden" />
      <DesktopPinnedHero className="hidden lg:block" />
    </>
  );
}
