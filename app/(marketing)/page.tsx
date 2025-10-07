import ChapterNav from "@/components/landing/chapter-nav";
import CommitChapter from "@/components/landing/commit-chapter";
import HeroSection from "@/components/landing/hero-section";
import PlaybooksChapter from "@/components/landing/playbooks-chapter";
import ProofChapter from "@/components/landing/proof-chapter";
import SignalSection from "@/components/landing/signal-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <ChapterNav />
      <ProofChapter />
      <SignalSection />
      <PlaybooksChapter />
      <SphereMask className="hidden md:block" />
      <CommitChapter />
      <Particles
        className="absolute inset-0 -z-20"
        quantity={35}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
