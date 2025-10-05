"use client";

import { useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

import { ShimmerButton } from "@/components/magicui/shimmer-button";

type Interval = "month" | "year";

type Plan = {
  id: string;
  name: string;
  description: string;
  features: string[];
  monthlyPrice: number;
  yearlyPrice: number;
  highlight?: boolean;
  cta?: string;
};

const plans: Plan[] = [
  {
    id: "launch",
    name: "Launch",
    description: "Kick off with one AI agent and Devonel operator oversight.",
    features: [
      "Dedicated operator + weekly strategy sprint",
      "Custom agent playbook & prompt tuning",
      "CRM + calendar integration",
      "Analytics & handoff dashboard",
    ],
    monthlyPrice: 4500,
    yearlyPrice: 4500 * 10,
    cta: "Start with Launch",
  },
  {
    id: "scale",
    name: "Scale",
    description: "Multi-agent orchestration for revenue + support teams.",
    features: [
      "Up to 3 concurrent agents across channels",
      "Voice concierge & phone routing",
      "Workflow automations & data sync",
      "On-call operator coverage",
      "Quarterly playbook refresh",
    ],
    monthlyPrice: 7800,
    yearlyPrice: 7800 * 10,
    highlight: true,
    cta: "Book a scale blueprint",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom governance, security reviews, and performance SLAs at scale.",
    features: [
      "Unlimited agents & journeys",
      "Compliance + legal review support",
      "Dedicated automation architect",
      "Private model hosting options",
      "Rev-share & outcome-based pricing",
    ],
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Request enterprise plan",
  },
];

export const toHumanPrice = (price: number, decimals: number = 0) => {
  return Number(price / 100).toFixed(decimals);
};

export default function PricingSection() {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    setIsLoading(true);
    setId(priceId);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsLoading(false);
  };

  return (
    <section id="pricing" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#facc1512,transparent_70%),linear-gradient(180deg,#070708,#040406)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.24em] text-white/70">
            <Sparkles className="size-3" /> Engagements
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Flexible operator plans to launch and scale AI agents.
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Every Devonel engagement pairs automation architects with on-call operators so your agents stay compliant,
            on-brand, and tied to revenue results.
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-md items-center justify-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
          <span>Monthly</span>
          <Switch
            id="interval"
            onCheckedChange={(checked) => {
              setInterval(checked ? "year" : "month");
            }}
          />
          <span>Annual</span>
          <span className="rounded-full bg-[#facc15]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#facc15]">
            Save 2 months
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, idx) => {
            const amount = interval === "year" ? plan.yearlyPrice : plan.monthlyPrice;
            const isEnterprise = amount === 0;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: "easeOut" }}
                className={cn(
                  "relative flex h-full flex-col gap-6 rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,24,0.95),rgba(7,7,10,0.98))] p-8 text-left shadow-[0_55px_140px_-100px_rgba(250,204,21,0.55)]",
                  plan.highlight && "border-[#facc15]/30 bg-[linear-gradient(180deg,rgba(55,46,12,0.9),rgba(12,10,4,0.98))]"
                )}
              >
                {plan.highlight ? (
                  <span className="absolute right-6 top-6 rounded-full bg-[#facc15]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#facc15]">
                    Most popular
                  </span>
                ) : null}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                    <p className="mt-1 text-sm text-white/65">{plan.description}</p>
                  </div>
                  <div className="flex items-baseline gap-2 text-white">
                    {isEnterprise ? (
                      <span className="text-3xl font-semibold">Custom</span>
                    ) : (
                      <>
                        <span className="text-4xl font-semibold">
                          ${toHumanPrice(amount, 0)}
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                          / {interval}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <ul className="flex flex-col gap-3 text-sm text-white/70">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckIcon className="mt-1 size-4 text-[#facc15]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  {plan.highlight ? (
                    <ShimmerButton
                      className="w-full justify-center rounded-full border border-white/10 bg-[linear-gradient(90deg,#facc15,#f59e0b)] py-3 text-sm font-semibold text-black"
                      shimmerColor="#ffffff"
                      shimmerDuration="2s"
                      onClick={() => onSubscribeClick(plan.id)}
                    >
                      {plan.cta ?? "Talk to us"}
                    </ShimmerButton>
                  ) : (
                    <Button
                      className="w-full rounded-full border border-white/15 bg-white/10 text-sm font-semibold text-white hover:bg-white/20"
                      disabled={isLoading && id === plan.id}
                      onClick={() => onSubscribeClick(plan.id)}
                    >
                      {isLoading && id === plan.id ? "Scheduling…" : plan.cta ?? "Talk to us"}
                    </Button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-black/40 px-8 py-6 text-center text-xs uppercase tracking-[0.24em] text-white/60">
          All plans include: discovery workshops · operator dashboards · compliance guardrails · success reporting ·
          dedicated Slack channel
        </div>
      </div>
    </section>
  );
}
