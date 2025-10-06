import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      {/* Universal gradient background - fixed to viewport for seamless effect */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgb(var(--brand-accent-rgb)/0.09)_0%,transparent_60%),linear-gradient(180deg,#030304_0%,#08080c_45%,#010103_100%)]" />
      {/* <SiteBanner /> */}
      <SiteHeader />
      <main className="mx-auto flex-1 overflow-hidden">{children}</main>
      <SiteFooter />
    </>
  );
}
