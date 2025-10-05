"use client";

import { motion } from "framer-motion";

const industries = [
  {
    name: "E-commerce",
    headline: "Recover carts & upsell automatically",
    copy:
      "AI sales agents recover abandoned carts, recommend bundles, and sync actions with your ESP and CRM.",
    highlights: ["Cart recovery", "VIP concierge", "Post-purchase automation"],
  },
  {
    name: "Real Estate",
    headline: "Qualify and nurture leads in real time",
    copy:
      "Voice and chat agents schedule tours, answer availability questions, and update your MLS + CRM instantly.",
    highlights: ["Tour booking", "Lead scoring", "Follow-up sequences"],
  },
  {
    name: "Finance",
    headline: "Keep clients informed and compliant",
    copy:
      "Automations pull data from internal systems, while agents deliver timely portfolio updates and route escalations.",
    highlights: ["Compliance guardrails", "Portfolio updates", "Secure handoffs"],
  },
  {
    name: "Healthcare",
    headline: "Supercharge patient operations",
    copy:
      "Agents triage inbound requests, coordinate appointments, and surface the right knowledge for staff 24/7.",
    highlights: ["Patient intake", "Knowledge retrieval", "Scheduling"],
  },
  {
    name: "Professional Services",
    headline: "Close loops across projects",
    copy:
      "Devonel agents manage follow-ups, billing nudges, and status updates while syncing notes to Notion and Slack.",
    highlights: ["Client updates", "Billing automations", "Project dashboards"],
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="mx-auto mt-28 max-w-6xl px-6 md:mt-36 md:px-8"
    >
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
            Industries
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Agents tailored to the way your business operates.
          </h2>
        </div>
        <p className="max-w-xl text-base text-muted-foreground md:text-lg">
          We adapt Devonel agent playbooks to match regulated processes, tone of
          voice, and complex integrations across multiple verticals.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {industries.map((industry) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-3xl border border-border/70 bg-background/80 p-6"
          >
            <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              {industry.name}
            </div>
            <h3 className="mt-3 text-xl font-semibold text-foreground">
              {industry.headline}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {industry.copy}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {industry.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-foreground/80"
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
