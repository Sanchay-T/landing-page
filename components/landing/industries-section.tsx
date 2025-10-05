"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Building2,
  Landmark,
  Activity,
  Briefcase,
} from "lucide-react";

const industries = [
  {
    name: "E-commerce",
    headline: "Recover carts & upsell automatically",
    copy:
      "AI sales agents recover abandoned carts, recommend bundles, and sync actions with your ESP and CRM.",
    highlights: ["Cart recovery", "VIP concierge", "Post-purchase automation"],
    icon: <ShoppingBag className="size-5" />,
  },
  {
    name: "Real Estate",
    headline: "Qualify and nurture leads in real time",
    copy:
      "Voice and chat agents schedule tours, answer availability questions, and update your MLS + CRM instantly.",
    highlights: ["Tour booking", "Lead scoring", "Follow-up sequences"],
    icon: <Building2 className="size-5" />,
  },
  {
    name: "Finance",
    headline: "Keep clients informed and compliant",
    copy:
      "Automations pull data from internal systems, while agents deliver timely portfolio updates and route escalations.",
    highlights: ["Compliance guardrails", "Portfolio updates", "Secure handoffs"],
    icon: <Landmark className="size-5" />,
  },
  {
    name: "Healthcare",
    headline: "Supercharge patient operations",
    copy:
      "Agents triage inbound requests, coordinate appointments, and surface the right knowledge for staff 24/7.",
    highlights: ["Patient intake", "Knowledge retrieval", "Scheduling"],
    icon: <Activity className="size-5" />,
  },
  {
    name: "Professional Services",
    headline: "Close loops across projects",
    copy:
      "Devonel agents manage follow-ups, billing nudges, and status updates while syncing notes to Notion and Slack.",
    highlights: ["Client updates", "Billing automations", "Project dashboards"],
    icon: <Briefcase className="size-5" />,
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="mx-auto mt-32 max-w-6xl px-6 md:mt-36 md:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
            Industries
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Agents tailored to the way your business operates.
          </h2>
        </div>
        <p className="max-w-xl text-sm text-muted-foreground md:text-base">
          We adapt Devonel agent playbooks to match regulated processes, tone of voice, and complex integrations across
          multiple verticals.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
            className="group rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,16,22,0.95),rgba(6,6,10,0.98))] p-6 shadow-[0_45px_120px_-90px_rgba(250,204,21,0.45)]"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-primary/70">
              <span>{industry.name}</span>
              <span className="rounded-full border border-primary/40 bg-primary/10 p-2 text-primary">
                {industry.icon}
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-semibold text-white">{industry.headline}</h3>
              <p className="text-sm text-white/70">{industry.copy}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {industry.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
