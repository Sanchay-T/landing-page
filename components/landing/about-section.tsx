"use client";

import { motion } from "framer-motion";

import { NumberTicker } from "@/components/magicui/number-ticker";
import { TextAnimate } from "@/components/ui/text-animate";

const stats = [
  {
    label: "Agents launched",
    value: "18+",
  },
  {
    label: "Average response time cut",
    value: "42%",
  },
  {
    label: "Integrations shipped",
    value: "60+",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-8"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,380px)] md:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
            Why Devonel
          </p>
          <TextAnimate
            as="h2"
            className="text-3xl font-semibold leading-tight text-foreground md:text-4xl"
            animation="blurInUp"
            by="line"
            duration={0.8}
            delay={0.1}
            once
          >
            We’re an AI agent studio that pairs strategy with hands-on automation engineering.
          </TextAnimate>
          <p className="text-base text-muted-foreground md:text-lg">
            Devonel embeds with your team to map revenue-critical workflows,
            craft autonomous agents, and wire them into your existing stack. Our
            operators monitor every loop, fine-tune prompts, and report on the
            ROI so you can scale with confidence.
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary"></span>
              <span>Operator-backed AI agents tuned to your sales and service playbooks.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary"></span>
              <span>Automation architects that integrate with CRMs, support desks, and custom tools.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary"></span>
              <span>Weekly analytics on agent performance, handoffs, and revenue attribution.</span>
            </li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-background/50 via-background to-background/70 p-6 shadow-[0_20px_70px_-35px_rgb(var(--brand-accent-rgb)/0.15)]"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 size-40 rounded-full bg-[rgb(var(--brand-accent-rgb)/0.1)] blur-3xl" />
          <div className="relative space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                Devonel in numbers
              </p>
              <p className="mt-2 text-lg text-muted-foreground">
                Multi-disciplinary operators, automation architects, and prompt
                engineers dedicated to your compound growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="group space-y-1">
                  <div className="flex items-baseline gap-1 text-3xl font-semibold text-foreground transition-colors group-hover:text-[rgb(var(--brand-accent-rgb))]">
                    <NumberTicker value={parseInt(stat.value)} startValue={0} />
                    {stat.value.includes("+") ? <span>+</span> : null}
                    {stat.value.includes("%") ? <span>%</span> : null}
                  </div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-background/60 p-4 text-sm text-muted-foreground">
              “Within a month, Devonel replaced our manual qualification with an
              AI agent that books 15% more meetings while syncing all notes to
              HubSpot.”
              <p className="mt-3 text-xs uppercase tracking-[0.24em] text-foreground/70">
                Series B SaaS CRO
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
