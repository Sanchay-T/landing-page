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
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#facc15]/70">
            Industries
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-4xl">
            Agents tailored to the way your business operates.
          </h2>
        </div>
        <p className="max-w-xl text-sm text-white/70 md:text-base">
          We adapt Devonel agent playbooks to match regulated processes, tone of voice, and complex integrations across
          multiple verticals.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(16,16,22,0.95),rgba(6,6,10,0.98))] p-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#facc15]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#facc15]/70">
                  {industry.name}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-tight text-white">
                  {industry.headline}
                </h3>
              </div>
              <div className="rounded-full border border-[#facc15]/40 bg-[#facc15]/10 p-2.5 text-[#facc15]">
                {industry.icon}
              </div>
            </div>
            <p className="relative z-10 text-sm leading-relaxed text-white/70">
              {industry.copy}
            </p>
            <div className="relative z-10 flex flex-wrap gap-2">
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
