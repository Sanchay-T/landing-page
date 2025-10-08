import dynamic from "next/dynamic";
import HeroSection from "@/components/landing/hero-section";
import { TextReveal } from "@/components/ui/text-reveal";

// Dynamic imports for below-fold sections (loads only when needed)
const ProofChapter = dynamic(() => import("@/components/landing/proof-chapter"), {
  loading: () => <div className="h-screen" />,
});
const PlaybooksChapter = dynamic(() => import("@/components/landing/playbooks-chapter"), {
  loading: () => <div className="h-screen" />,
});
const CommitChapter = dynamic(() => import("@/components/landing/commit-chapter"), {
  loading: () => <div className="h-screen" />,
});
const Particles = dynamic(() => import("@/components/magicui/particles"));
const SphereMask = dynamic(() => import("@/components/magicui/sphere-mask").then(mod => ({ default: mod.SphereMask })));

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
