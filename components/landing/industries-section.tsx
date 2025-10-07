"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/landing/section-heading";
import { TextAnimate } from "@/components/ui/text-animate";

const industries = [
  {
    name: "E-commerce",
    headline: "Recover carts & upsell automatically",
    copy:
      "AI sales agents recover abandoned carts, recommend bundles, and sync actions with your ESP and CRM.",
    highlights: ["Cart recovery", "VIP concierge", "Post-purchase automation"],
    logo: {
      src: "/industries/shopify.svg",
      alt: "Shopify logo",
    },
  },
  {
    name: "B2B SaaS",
    headline: "Keep pipelines warm between touchpoints",
    copy:
      "Product-led growth teams lean on Devonel agents to qualify trials, answer technical blockers, and surface upsell signals.",
    highlights: ["Trial conversion", "Product education", "Expansion alerts"],
    logo: {
      src: "/industries/linear.svg",
      alt: "Linear logo",
    },
  },
  {
    name: "Financial Services",
    headline: "Keep clients informed and compliant",
    copy:
      "Automations pull data from internal systems, while agents deliver timely portfolio updates and route escalations.",
    highlights: ["Compliance guardrails", "Portfolio updates", "Secure handoffs"],
    logo: {
      src: "/industries/stripe.svg",
      alt: "Stripe logo",
    },
  },
  {
    name: "Real Estate",
    headline: "Qualify and nurture leads in real time",
    copy:
      "Voice and chat agents schedule tours, answer availability questions, and update your MLS + CRM instantly.",
    highlights: ["Tour booking", "Lead scoring", "Follow-up sequences"],
    logo: {
      src: "/industries/zillow.svg",
      alt: "Zillow logo",
    },
  },
  {
    name: "Logistics & Delivery",
    headline: "Coordinate shipments before they bottleneck",
    copy:
      "Ops agents orchestrate carrier handoffs, notify customers of delays, and sync inventory movements into your ERP stack.",
    highlights: ["Carrier escalations", "Proactive alerts", "ERP updates"],
    logo: {
      src: "/industries/fedex.svg",
      alt: "FedEx logo",
    },
  },
  {
    name: "Professional Services",
    headline: "Close loops across projects",
    copy:
      "Devonel agents manage follow-ups, billing nudges, and status updates while syncing notes to Notion and Slack.",
    highlights: ["Client updates", "Billing automations", "Project dashboards"],
    logo: {
      src: "/industries/notion.svg",
      alt: "Notion logo",
    },
  },
];

const cardBase =
  "group relative flex h-full flex-col gap-5 overflow-hidden rounded-4xl border border-white/10 bg-white/[0.06] p-7 shadow-[0_22px_65px_-48px_rgba(15,23,42,0.95)] transition-all duration-300 hover:border-[rgb(var(--brand-accent-rgb)/0.4)]";

export default function IndustriesSection() {
  return (
    <section id="industries" className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-8">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Industries"
          title="Agents tailored to the way your business operates."
          className="md:max-w-xl"
          titleClassName="text-3xl font-semibold leading-tight text-white md:text-4xl"
          description={undefined}
          eyebrowClassName="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--brand-accent-rgb)/0.7)]"
        />
        <TextAnimate
          as="p"
          className="max-w-xl text-sm text-white/70 md:text-base"
          animation="slideUp"
          by="line"
          delay={0.2}
          duration={0.6}
        >
          We adapt Devonel agent playbooks to match regulated processes, tone of voice, and complex integrations across multiple verticals.
        </TextAnimate>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 auto-rows-[minmax(0,1fr)]">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
            className={cn(cardBase, "backdrop-blur-sm")}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top,rgb(var(--brand-accent-rgb)/0.16),transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--brand-accent-rgb)/0.7)]">
                    {industry.name}
                  </p>
                  <TextAnimate
                    as="h3"
                    className="text-xl font-semibold leading-tight text-white"
                    animation="slideUp"
                    by="text"
                    delay={index * 0.04}
                    duration={0.4}
                    viewport={{ margin: "-120px" }}
                    once
                  >
                    {industry.headline}
                  </TextAnimate>
                  <p className="text-sm leading-relaxed text-white/70">
                    {industry.copy}
                  </p>
                </div>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <Image
                    src={industry.logo.src}
                    alt={industry.logo.alt}
                    width={28}
                    height={28}
                    className="h-7 w-7 opacity-90"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {industry.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
