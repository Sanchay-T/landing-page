"use client";

import {
  Bot,
  PhoneCall,
  Workflow,
  Gauge,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { TypingAnimation } from "@/components/magicui/typing-animation";
import { cn } from "@/lib/utils";

const highlights = [
  {
    title: "AI revenue team",
    description:
      "Agents qualify, route, and book meetings on your reps’ calendars while logging notes in the CRM.",
    icon: <Bot className="size-5" />,
    badge: "Core",
  },
  {
    title: "Voice concierge",
    description:
      "Always-on phone agent that greets callers, answers FAQs, and escalates to humans when needed.",
    icon: <PhoneCall className="size-5" />,
  },
  {
    title: "Workflow automations",
    description:
      "Zapier, Make, and custom scripts orchestrate data clean-up, deals, and ops handoffs across apps.",
    icon: <Workflow className="size-5" />,
  },
  {
    title: "Operator oversight",
    description:
      "Devonel operators watch performance dashboards, tweak prompts, and report on weekly outcomes.",
    icon: <Gauge className="size-5" />,
  },
  {
    title: "Guardrails & compliance",
    description:
      "Prompt firewalls, audit logs, and escalation tiers keep agents on-brand and regulator-ready.",
    icon: <ShieldCheck className="size-5" />,
  },
  {
    title: "Experiment sprints",
    description:
      "Spin up new playbooks quickly—AB test scripts, channels, and offers without burdening your team.",
    icon: <Sparkles className="size-5" />,
  },
];

export default function ServicesFeatureSection() {
  return (
    <section id="services-feature" className="mt-32 bg-background/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-end">
          <div className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-[0_25px_70px_-35px_rgba(250,204,21,0.35)]">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
              Option A
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
              What Devonel agents deliver
            </h2>
            <TypingAnimation
              className="mt-6 text-sm leading-6 text-primary/90"
              words={[
                "“Hey Devonel Agent—book demos for leads from the webinar.”",
                "“Sync call notes to HubSpot and ping the AE in Slack.”",
                "“Escalate anything finance-related to our human inbox.”",
              ]}
              loop
              pauseDelay={1600}
              startOnView={false}
            />
            <p className="mt-6 text-sm text-muted-foreground">
              Choose any six capabilities to highlight. Each tile keeps copy tight,
              pairs with an icon, and fits beautifully into solution or services pages.
            </p>
          </div>
          <div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-0 lg:grid-cols-3">
              {highlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="relative flex h-full flex-col gap-3 overflow-hidden rounded-3xl border border-border/70 bg-background/80 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/60"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {highlight.icon}
                  </span>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                    {highlight.badge ? (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                        {highlight.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {highlight.description}
                  </p>
                  <span className="pointer-events-none absolute inset-x-4 bottom-4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
