import ChapterNav from "@/components/landing/chapter-nav";
import CommitChapter from "@/components/landing/commit-chapter";
import HeroSection from "@/components/landing/hero-section";
import PlaybooksChapter from "@/components/landing/playbooks-chapter";
import ProofChapter from "@/components/landing/proof-chapter";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import { TextReveal } from "@/components/ui/text-reveal";

export default async function Page() {
  const manifestoCopy =
    "Operator-led AI agents only deliver when humans keep refining prompts, watching transcripts, and tuning automations in real time.";

  return (
    <>
      <HeroSection />
      <div className="mt-16 md:mt-20">
        <TextReveal
          className="hidden md:block"
          viewportHeight={120}
        >
          {manifestoCopy}
        </TextReveal>
        <p className="mx-auto max-w-3xl px-6 text-center text-base text-muted-foreground md:hidden">
          {manifestoCopy}
        </p>
      </div>
      <ChapterNav />
      <ProofChapter />
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
