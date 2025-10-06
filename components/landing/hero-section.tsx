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

export default function HeroSection() {
  const mediaRef = useRef(null);
  const mediaInView = useInView(mediaRef, { once: true, margin: "-120px" });

  return (
    <section id="hero" className="relative mx-auto mt-20 max-w-[90rem] px-6 py-16 md:px-10 md:py-20">
      <div className="flex flex-col gap-12">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-1 text-xs uppercase tracking-[0.24em] text-white/70 backdrop-blur">
              <TextShimmer>
                <span>Devonel • AI Agents & Automations</span>
              </TextShimmer>
            </div>
            <h1 className="space-y-2 text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-6xl md:text-[4.5rem]">
              <div>Deploy</div>
              <div className="relative inline-block min-h-[1.2em] overflow-visible">
                <WordRotate
                  className="text-white text-4xl sm:text-6xl md:text-[4.5rem] font-semibold"
                  words={[
                    "AI support concierges",
                    "autonomous revenue agents",
                    "AI operations copilots",
                  ]}
                />
              </div>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-white/70 md:text-lg">
              Devonel designs, deploys, and fine-tunes AI agents that qualify leads, close loops,
              and automate operations across your stack within weeks — without derailing your team.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <ShimmerButton
                className="border border-white/10 bg-[linear-gradient(90deg,#151519,#06060a)] px-8 py-3 text-base font-semibold text-white"
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
                className="gap-2 rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
                asChild
              >
                <a href="#case-studies">
                  See agent playbooks
                  <ArrowRightIcon className="size-4" />
                </a>
              </Button>
            </div>
            <div className="mx-auto mt-12 grid max-w-3xl gap-4 text-sm text-white/70 md:grid-cols-3">
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

          <div ref={mediaRef} className="relative mx-auto w-full max-w-7xl">
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
              <img
                src="/hero-dark.png"
                alt="Workflow automations preview"
                className="hidden h-full w-full rounded-[inherit] border border-white/10 object-cover dark:block"
              />
              <img
                src="/hero-light.png"
                alt="Workflow automations preview"
                className="block h-full w-full rounded-[inherit] border border-white/20 object-cover dark:hidden"
              />
            </div>
          </div>
      </div>
    </section>
  );
}
