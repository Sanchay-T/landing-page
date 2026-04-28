import { DesktopPinnedHero } from "./desktop-pinned-hero";
import { MobileHero } from "./mobile-hero";

export function PinnedHero() {
  return (
    <>
      <MobileHero className="lg:hidden" />
      <DesktopPinnedHero className="hidden lg:block" />
    </>
  );
}
