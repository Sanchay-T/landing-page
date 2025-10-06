"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  Headset,
  LineChart,
  Mail,
  ShieldCheck,
  Slack,
  Sparkles,
  Webhook,
} from "lucide-react";

import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AnimatedList } from "@/components/magicui/animated-list";
import { BorderBeam } from "@/components/magicui/border-beam";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { MagicCard } from "@/components/magicui/magic-card";
import Marquee from "@/components/magicui/marquee";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { WordRotate } from "@/components/magicui/word-rotate";

const metrics = [
  {
    label: "Missed demos recovered",
    value: 38,
    suffix: "%",
  },
  {
    label: "Support replies automated",
    value: 62,
    suffix: "%",
  },
  {
    label: "Faster operator triage",
    value: 3.1,
    suffix: "x",
    decimalPlaces: 1,
  },
];

const differentiators = [
  {
    title: "Operator copilots on every workflow",
    description:
      "Devonel operators monitor live inboxes, refine prompts, and resolve escalations before they stall revenue.",
  },
  {
    title: "Conversion data wired into your systems",
    description:
      "We sync transcripts, tasks, and attributed meetings into HubSpot, Salesforce, and the rest of your GTM stack.",
  },
  {
    title: "Launch in weeks, not quarters",
    description:
      "Pre-built playbooks give you compliant guardrails so agents hit quota-ready quality inside a single sprint.",
  },
];

const integrationIcons = [
  { icon: Mail, label: "Outreach" },
  { icon: Slack, label: "Slack" },
  { icon: Webhook, label: "Zapier" },
  { icon: LineChart, label: "HubSpot" },
  { icon: ShieldCheck, label: "TrustArc" },
  { icon: Headset, label: "Zendesk" },
];

const marqueeLogos = [
  "Figma", "Mercury", "Tome", "Linear", "Attio", "Notation Capital",
];

export default function ProofChapter() {
  return (
    <section id="proof" className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
            Proof · Chapter One
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Evidence our operator squads own every day.
          </h2>
        </div>
        <p className="max-w-xl text-sm text-muted-foreground md:text-base">
          Each module translates our services promise into accountable numbers. We
          show the inbox, the operators, and the customers so leadership sees real
          traction before diving into the playbooks.
        </p>
      </header>

      <div className="mt-14 space-y-16">
        <PainPromiseMetrics />
        <EmailOpsSnapshot />
        <OperatorAdvantage />
        <CredibilityStrip />
      </div>
    </section>
  );
}

function PainPromiseMetrics() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-background/60 p-8 shadow-[0_35px_90px_-60px_rgb(var(--brand-accent-rgb)/0.75)] md:p-10">
      <div className="max-w-3xl space-y-4">
        <AnimatedGradientText
          as="h3"
          className="text-3xl font-semibold leading-tight md:text-4xl"
        >
          <span className="text-white/90">Stop letting </span>
          <WordRotate
            words={["missed demos", "tier-one tickets", "renewals"]}
            className="mx-1"
            textClassName="text-white"
          />
          <span className="text-white/90"> slip through.</span>
        </AnimatedGradientText>
        <p className="text-sm text-muted-foreground md:text-base">
          The proof bar compresses pains into outcomes. Operators see live numbers for
          meetings recovered, ticket resolutions, and the time they get back every week.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="group rounded-2xl border border-white/10 bg-background/80 p-6 backdrop-blur"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              {metric.label}
            </p>
            <div className="mt-4 flex items-baseline gap-1 text-4xl font-semibold text-white">
              <NumberTicker
                value={metric.value}
                decimalPlaces={metric.decimalPlaces}
                className="text-white"
              />
              <span>{metric.suffix}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Recorded across the last 90 days of operator-led deployments.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmailOpsSnapshot() {
  return (
    <MagicCard className="relative grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)] md:items-center">
      <BorderBeam
        size={300}
        duration={14}
        borderWidth={2}
        colorFrom="rgba(var(--brand-accent-rgb), 0.95)"
        colorTo="rgba(255,255,255,0.35)"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/70">
        <Image
          src="/hero-dark.png"
          alt="Devonel operator inbox"
          width={960}
          height={540}
          className="h-full w-full object-cover opacity-95"
        />
        <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/10 bg-black/70 px-4 py-3 text-sm text-white/70">
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[rgb(var(--brand-accent-rgb))]">
            <BadgeCheck className="size-4" /> Operator Walkthrough
          </p>
          <p className="mt-2 text-sm">
            Triage → escalate → resolve workflows orchestrated by Devonel operators.
          </p>
        </div>
      </div>
      <div className="space-y-4 text-muted-foreground">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
          Email ops snapshot
        </p>
        <h3 className="text-2xl font-semibold text-white md:text-3xl">
          See the inbox, the guardrails, and the human oversight in one view.
        </h3>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="space-y-3"
        >
          {["Auto-triage high intent leads", "Surface blockers to operators", "Push qualified meetings to your CRM"].map(
            (item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-background/70 px-4 py-3"
              >
                <Sparkles className="mt-1 size-4 text-[rgb(var(--brand-accent-rgb))]" />
                <span className="text-sm">{item}</span>
              </motion.li>
            )
          )}
        </motion.ul>
        <p className="text-xs uppercase tracking-[0.24em] text-white/60">
          Request a walkthrough → we demo this inbox live.
        </p>
      </div>
    </MagicCard>
  );
}

function OperatorAdvantage() {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] md:items-start">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
          Operator-led advantage
        </p>
        <h3 className="text-2xl font-semibold text-white md:text-3xl">
          Humans in the loop keep your agents on brand and on quota.
        </h3>
        <AnimatedList items={differentiators} />
      </div>

      <div className="space-y-4">
        {[{ label: "Agents launched", value: 18 }, { label: "Tickets deflected", value: 54, suffix: "%" }, { label: "Weeks to go-live", value: 3 }].map(
          (item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-background/70 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {item.label}
              </p>
              <div className="mt-3 flex items-baseline gap-1 text-3xl font-semibold text-white">
                <NumberTicker value={item.value} className="text-white" />
                {item.suffix ? <span>{item.suffix}</span> : null}
              </div>
            </div>
          )
        )}
        <div className="rounded-2xl border border-white/10 bg-background/60 p-5 text-sm text-muted-foreground">
          “Devonel’s operators didn’t just ship an agent—they run the weekly performance room and surface the exact
          copy tweaks we need to keep conversions moving.”
          <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/60">
            CRO · Growth-stage SaaS
          </p>
        </div>
      </div>
    </div>
  );
}

function CredibilityStrip() {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-full border border-white/10 bg-background/70">
        <Marquee className="[--duration:30s]" pauseOnHover>
          {marqueeLogos.map((logo) => (
            <span
              key={logo}
              className="flex items-center gap-3 px-6 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground"
            >
              <span className="size-1 rounded-full bg-[rgb(var(--brand-accent-rgb))]" />
              {logo}
            </span>
          ))}
        </Marquee>
      </div>
      <div className="rounded-3xl border border-white/10 bg-background/70 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
          Integrations on day one
        </p>
        <IconCloud items={integrationIcons} className="mt-4" />
        <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/60">
          <Clock3 className="size-4" /> Monitoring coverage · 24/7 · Operator escalations under 5 minutes
        </p>
      </div>
    </div>
  );
}

