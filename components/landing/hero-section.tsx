/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { WordRotate } from "@/components/magicui/word-rotate";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function HeroSection() {
  const mediaRef = useRef(null);
  const mediaInView = useInView(mediaRef, { once: true, margin: "-100px" });

  return (
    <section id="hero" className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
      <FlickeringGrid
        className="fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)]"
        squareSize={4}
        gridGap={6}
        color="rgba(255,255,255,0.8)"
        maxOpacity={0.14}
        flickerChance={0.07}
      />
      <div className="pointer-events-none absolute inset-0 -z-[11] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_62%),radial-gradient(circle_at_bottom,rgba(255,201,132,0.1),transparent_75%)]" />

      <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/20 bg-white/10 px-3 text-xs transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
        <TextShimmer className="inline-flex items-center justify-center text-white">
          <span className="text-white">✨ Devonel • AI Agents & Automations</span>
          <ArrowRightIcon className="ml-1 size-3 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
      </div>

      <h1 className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text pt-6 pb-1 text-5xl font-medium leading-[1.2] tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Deploy AI Agents
        <br />
        <WordRotate
          className="mt-3"
          textClassName="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text text-5xl font-medium tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          words={[
            "Close Loops",
            "Filter Leads",
            "Resolve Tickets",
          ]}
        />
      </h1>

      <p className="mb-8 -mt-14 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Operator-led automation for revenue, success, and support.
      </p>

      <div className="flex flex-col items-center justify-center gap-4 mb-8 md:flex-row translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <ShimmerButton
          borderRadius="999px"
          className="border border-white/15 bg-[linear-gradient(90deg,#151519,#06060a)] px-8 py-3 text-base font-semibold text-white shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)] hover:shadow-[0_25px_80px_-40px_rgba(0,0,0,0.9)]"
          shimmerColor="rgb(var(--brand-accent-rgb))"
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

      <div className="flex max-w-3xl mx-auto flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        {["24/7 operator-backed", "Stacks with your tools", "4-week go-live"].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="inline-flex size-2 rounded-full bg-[rgb(var(--brand-accent-rgb))]" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div ref={mediaRef} className={`relative mx-auto w-full max-w-7xl before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(200px)] before:[background-image:linear-gradient(to_bottom,rgba(250,204,21,1),rgba(250,204,21,1),transparent_35%)] ${mediaInView ? "before:animate-image-glow" : ""
        }`}>
        <div
          className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0.6))] backdrop-blur"
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
    </section>
  );
}
