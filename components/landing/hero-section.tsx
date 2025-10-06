/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";

import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { WordRotate } from "@/components/magicui/word-rotate";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function HeroSection() {
  const mediaRef = useRef(null);
  const mediaInView = useInView(mediaRef, { once: true, margin: "-120px" });

  return (
    <section
      id="hero"
      className="relative mx-auto mt-16 w-full max-w-[90rem] px-6 py-16 md:mt-20 md:px-10 md:py-20"
    >
      <FlickeringGrid
        className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)]"
        squareSize={4}
        gridGap={6}
        color="#facc15"
        maxOpacity={0.3}
        flickerChance={0.1}
      />
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div className="mx-auto max-w-3xl space-y-6 text-center lg:mx-0 lg:max-w-none lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-1 text-xs uppercase tracking-[0.24em] text-white/70 backdrop-blur">
              <TextShimmer>
                <span>Devonel • AI Agents & Automations</span>
              </TextShimmer>
            </div>
            <h1 className="space-y-2 text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-[4rem]">
              <div>Deploy</div>
              <div className="relative inline-block min-h-[1.2em] overflow-visible">
                <WordRotate
                  className="text-white text-3xl sm:text-5xl md:text-[4rem] font-semibold"
                  words={[
                    "AI support concierges",
                    "autonomous revenue agents",
                    "AI operations copilots",
                  ]}
                />
              </div>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-white/70 md:text-lg lg:mx-0 lg:max-w-xl">
              Devonel designs, deploys, and fine-tunes AI agents that qualify leads, close loops,
              and automate operations across your stack within weeks — without derailing your team.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <ShimmerButton
                className="w-full justify-center border border-white/10 bg-[linear-gradient(90deg,#151519,#06060a)] px-8 py-3 text-base font-semibold text-white sm:w-auto"
                shimmerColor="#facc15"
                shimmerDuration="2.4s"
              >
                <span className="flex items-center gap-2">
                  Book a strategy call
                  <ArrowRightIcon className="size-4" />
                </span>
              </ShimmerButton>
              <Button
                size="lg"
                variant="outline"
                className="w-full gap-2 rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
                asChild
              >
                <a href="#case-studies">
                  See agent playbooks
                  <ArrowRightIcon className="size-4" />
                </a>
              </Button>
            </div>
            <div className="mx-auto mt-12 grid max-w-3xl gap-4 text-sm text-white/70 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {[
                "24/7 AI agents orchestrated by Devonel operators",
                "Integrates with your tools: HubSpot, Slack, Notion, Zapier",
                "Launch a production-ready agent in under 4 weeks",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckIcon className="mt-1 size-4 text-[#facc15]" />
                  <span className="max-w-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={mediaRef}
            className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-3xl"
          >
            <div
              className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0.6))] backdrop-blur ${
                mediaInView ? "before:animate-image-glow" : ""
              }`}
            >
              <BorderBeam
                size={260}
                duration={14}
                delay={9}
                colorFrom="rgba(250,204,21,0.35)"
                colorTo="rgba(250,204,21,0.05)"
              />
              <div className="relative h-full w-full p-4">
                <Terminal className="h-full w-full max-h-[520px] border-white/20 bg-black/80 text-left shadow-[0_0_60px_rgba(250,204,21,0.12)] [&>pre>code]:!font-mono [&>pre>code]:!text-[15px] [&>pre>code]:!text-white/80">
                  <TypingAnimation className="text-[#facc15]">
                    {"devonel deploy --agent \"autonomous-review\" --stack claude,codex"}
                  </TypingAnimation>
                  <AnimatedSpan className="text-emerald-400">
                    ✔ Claude orchestrator engaged
                  </AnimatedSpan>
                  <AnimatedSpan className="text-emerald-400">
                    ✔ Codex automation pipeline synced
                  </AnimatedSpan>
                  <TypingAnimation className="text-[#facc15]">
                    agent.status --summary
                  </TypingAnimation>
                  <AnimatedSpan>
                    • autonomous review agents: auditing pull requests in realtime
                  </AnimatedSpan>
                  <AnimatedSpan>
                    • revenue copilots: following up with every warm lead 24/7
                  </AnimatedSpan>
                  <AnimatedSpan>
                    • ops copilots: syncing actions to Slack, Notion & HubSpot
                  </AnimatedSpan>
                  <TypingAnimation className="text-[#facc15]">
                    all systems calibrated ▸ ready to launch
                  </TypingAnimation>
                </Terminal>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
