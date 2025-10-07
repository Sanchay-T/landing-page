"use client";

import Image from "next/image";
import {
  Compass,
  PenSquare,
  Plug,
  TrendingUp,
  BrainCircuit,
  Headphones,
  CalendarCheck,
  Workflow as WorkflowIcon,
} from "lucide-react";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Discover",
    description:
      "Workshops with your team to capture goals, voice, and high-impact workflows for automation.",
    icon: <Compass className="size-5" />,
  },
  {
    title: "Design agent playbooks",
    description:
      "Conversation flows, escalation paths, and guardrails mapped before touching production systems.",
    icon: <PenSquare className="size-5" />,
  },
  {
    title: "Deploy & integrate",
    description:
      "Launch pilots wired to CRMs, help desks, and internal APIs with Devonel operators supervising.",
    icon: <Plug className="size-5" />,
  },
  {
    title: "Optimize & scale",
    description:
      "Weekly reviews to fine-tune prompts, retrain models, and spin up additional agents where they win.",
    icon: <TrendingUp className="size-5" />,
  },
];

const toolLogos = [
  {
    name: "OpenAI",
    src: "/integrations/openai.svg",
  },
  {
    name: "Zapier",
    src: "/integrations/zapier.svg",
  },
  {
    name: "Notion",
    src: "/integrations/notion.svg",
  },
  {
    name: "Slack",
    src: "/integrations/slack.svg",
  },
  {
    name: "HubSpot",
    src: "/integrations/hubspot.svg",
  },
  {
    name: "Stripe",
    src: "/integrations/stripe.svg",
  },
];

const capabilities = [
  { label: "Prompt engineering", icon: <BrainCircuit className="size-4" /> },
  { label: "Human handoffs", icon: <Headphones className="size-4" /> },
  { label: "SLA monitoring", icon: <TrendingUp className="size-4" /> },
  { label: "Workflow orchestration", icon: <WorkflowIcon className="size-4" /> },
  { label: "Calendar sync", icon: <CalendarCheck className="size-4" /> },
];

const cardBase =
  "group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-background/70 p-6 transition-all duration-300 hover:border-[rgb(var(--brand-accent-rgb)/0.3)]";

export default function ProcessSection() {
  return (
    <section id="process" className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
            Process
          </p>
          <LineShadowText
            as="h2"
            shadowColor="rgb(var(--brand-accent-rgb)/0.35)"
            className="mt-2 text-3xl font-semibold text-foreground md:text-4xl"
          >
            A proven operating cadence for autonomous agents.
          </LineShadowText>
        </div>
        <p className="max-w-xl text-sm text-muted-foreground md:text-base">
          Devonel combines product discovery, automation engineering, and operator oversight so your AI agents stay
          on-brand, compliant, and revenue-focused from pilot to scale.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.title} className={cn(cardBase)}>
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-[rgb(var(--brand-accent-rgb)/0.06)] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-[rgb(var(--brand-accent-rgb)/0.7)]">
              <span>Step {index + 1}</span>
              <span className="rounded-full border border-[rgb(var(--brand-accent-rgb)/0.4)] bg-[rgb(var(--brand-accent-rgb)/0.1)] p-2 text-[rgb(var(--brand-accent-rgb))]">
                {step.icon}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            <p className="text-sm text-white/70">{step.description}</p>
            <span className="pointer-events-none absolute inset-x-5 bottom-5 h-px bg-gradient-to-r from-transparent via-[rgb(var(--brand-accent-rgb)/0.18)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-background/70 px-6 py-12">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] bg-[radial-gradient(circle_at_top,rgb(var(--brand-accent-rgb)/0.05),transparent_70%)]" />
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
              Integrations we automate
            </span>
            <div className="mt-6 flex flex-wrap gap-3">
              {toolLogos.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/80"
                >
                  <Image src={tool.src} alt={tool.name} width={18} height={18} className="opacity-90" />
                  {tool.name}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-2 text-xs text-white/65 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2"
                >
                  {capability.icon}
                  <span className="uppercase tracking-[0.18em]">{capability.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto h-60 w-60 overflow-hidden md:h-72 md:w-72">
            <OrbitingCircles radius={96} iconSize={48} className="bg-primary/10 text-primary">
              {toolLogos.map((tool) => (
                <div
                  key={`${tool.name}-orbit`}
                  className="flex size-full items-center justify-center rounded-full border border-white/15 bg-black/70"
                >
                  <Image src={tool.src} alt={tool.name} width={28} height={28} />
                </div>
              ))}
            </OrbitingCircles>
            <div className="absolute inset-4 z-10 flex items-center justify-center rounded-full border border-white/15 bg-black/75 text-center text-xs uppercase tracking-[0.24em] text-white/70">
              Devonel
              <br />Agent Stack
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
