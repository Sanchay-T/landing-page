"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";
import { SectionHeading } from "@/components/landing/section-heading";
import { TextAnimate } from "@/components/ui/text-animate";

const cards = [
  {
    title: "AI Revenue Desk",
    description:
      "Qualify inbound, follow up, and book meetings autonomously with full CRM sync.",
    className: "col-span-2 row-span-2",
    media: "/hero-dark.png",
    chip: "Featured",
    featured: true,
  },
  {
    title: "Voice Concierge",
    description:
      "Handle 24/7 phone workflows—routing, FAQs, escalations—with Devonel guardrails.",
  },
  {
    title: "Workflow Automations",
    description:
      "Connect AI agents to Zapier, Slack, Notion, HubSpot, Stripe, and custom APIs.",
  },
  {
    title: "Operator Insights",
    description:
      "Weekly performance reviews, playbook tweaks, and alerting from Devonel operators.",
  },
  {
    title: "Governance Toolkit",
    description:
      "Audit logs, policy guardrails, and human-in-the-loop handoffs baked into every loop.",
  },
];

const marqueeItems = [
  "34% more meetings booked",
  "15% lower support handle time",
  "3x faster playbook launches",
  "Ops synced across HubSpot + Slack",
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-8">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Services · Option B Bento Grid"
          title="Compose your Devonel agent stack."
          className="md:max-w-xl"
          description={undefined}
        />
        <TextAnimate
          as="p"
          className="max-w-xl text-sm text-muted-foreground md:text-base"
          animation="slideUp"
          by="line"
          delay={0.2}
          duration={0.6}
        >
          Mix and match revenue, support, and operations agents. Each tile introduces the mission, outcomes, and integration hooks so stakeholders see the full picture.
        </TextAnimate>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
            className={cn(
              "group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-background/70 p-6 hover:border-[rgb(var(--brand-accent-rgb)/0.3)] transition-all duration-300",
              card.className,
              card.featured && "border-[rgb(var(--brand-accent-rgb)/0.2)]"
            )}
          >
            {card.featured && (
              <BorderBeam
                size={250}
                duration={12}
                delay={0}
                colorFrom="rgb(var(--brand-accent-rgb))"
                colorTo="rgb(var(--brand-accent-strong-rgb))"
              />
            )}
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-[rgb(var(--brand-accent-rgb)/0.06)] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2">
                <TextAnimate
                  as="h3"
                  className="text-xl font-semibold text-foreground"
                  animation="slideUp"
                  by="text"
                  delay={index * 0.05}
                  duration={0.4}
                  viewport={{ margin: "-120px" }}
                  once
                >
                  {card.title}
                </TextAnimate>
                {card.chip ? (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                    {card.chip}
                  </span>
                ) : null}
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{card.description}</p>
            </div>
            {card.media ? (
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative z-10 mt-auto overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={card.media}
                  alt={card.title}
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ) : null}
          </motion.article>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-full border border-white/10 bg-background/80">
        <Marquee className="[--duration:35s]" pauseOnHover>
          {marqueeItems.map((item) => (
            <span
              key={item}
              className="flex items-center gap-3 px-6 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground"
            >
              <span className="size-1 rounded-full bg-primary" />
              <TextAnimate
                as="span"
                className="inline-block"
                animation="slideLeft"
                by="character"
                duration={0.45}
                startOnView={false}
                once
              >
                {item}
              </TextAnimate>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
