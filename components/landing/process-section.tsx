"use client";

import Image from "next/image";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";

const steps = [
  {
    title: "Discover",
    description:
      "Workshops with your team to capture goals, voice, and key workflows where agents can compound output.",
  },
  {
    title: "Design agent playbooks",
    description:
      "We prototype conversation flows, escalation paths, and data policies before touching production systems.",
  },
  {
    title: "Deploy & integrate",
    description:
      "Launch pilots that connect to your stack — CRMs, help desks, internal APIs — with Devonel operators supervising.",
  },
  {
    title: "Optimize & scale",
    description:
      "Weekly reviews to fine-tune prompts, retrain models, and spin up additional agents across the journey.",
  },
];

const toolLogos = [
  {
    name: "OpenAI",
    src: "https://cdn.magicui.design/tools/openai.svg",
  },
  {
    name: "Zapier",
    src: "https://cdn.magicui.design/tools/zapier.svg",
  },
  {
    name: "Notion",
    src: "https://cdn.magicui.design/tools/notion.svg",
  },
  {
    name: "Slack",
    src: "https://cdn.magicui.design/tools/slack.svg",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="mx-auto mt-28 max-w-6xl px-6 md:mt-36 md:px-8"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
            Process
          </p>
          <ScrollVelocityContainer className="overflow-hidden">
            <ScrollVelocityRow baseVelocity={6} className="text-3xl font-semibold text-foreground md:text-4xl">
              <span className="mr-6">A proven operating cadence for autonomous agents.</span>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>
        <p className="max-w-xl text-base text-muted-foreground md:text-lg">
          Devonel combines product discovery, automation engineering, and operator
          oversight so your AI agents stay on-brand, compliant, and revenue-focused.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="group relative flex flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6"
          >
            <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Step {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {step.description}
            </p>
            <span className="pointer-events-none absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
      <div className="relative mt-12 overflow-hidden rounded-3xl border border-border/60 bg-background/70 px-6 py-10">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
          Integrations we automate
        </span>
        <div className="relative mt-8 flex h-48 items-center justify-center">
          <OrbitingCircles radius={140} iconSize={56} className="bg-primary/10 text-primary">
            {toolLogos.map((tool) => (
              <div
                key={tool.name}
                className="flex size-full items-center justify-center rounded-full border border-border/40 bg-background"
              >
                <Image src={tool.src} alt={tool.name} width={24} height={24} />
              </div>
            ))}
          </OrbitingCircles>
          <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-border/60 bg-background/90 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Devonel<br />Agent<br />Stack
          </div>
        </div>
      </div>
    </section>
  );
}
