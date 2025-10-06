"use client";

import { motion } from "framer-motion";

import Marquee from "@/components/magicui/marquee";
import { ShineBorder } from "@/components/magicui/shine-border";

const testimonials = [
  {
    quote:
      "Devonel replaced our manual lead qualification with an AI agent that books 34% more meetings while syncing notes straight to HubSpot.",
    name: "Amelia Tran",
    role: "VP Revenue, LanternDX",
  },
  {
    quote:
      "Their operators iterate weekly, so our voice concierge keeps answering complex insurance questions with the right empathy and compliance.",
    name: "Marcus Lee",
    role: "COO, CareBridge Clinics",
  },
  {
    quote:
      "Within 6 weeks we had three automations orchestrating payroll and onboarding — Devonel’s team felt like an extension of ours.",
    name: "Priya Natarajan",
    role: "Head of Operations, Alloy",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="case-studies"
      className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-8"
    >
      <div className="text-left md:text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
          Results
        </p>
        <h2 className="mt-2 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
          Teams trust Devonel agents to drive measurable outcomes.
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Hear how revenue, support, and operations leaders activate autonomous
          agents without sacrificing brand experience.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
            className="group relative"
          >
            <ShineBorder
              className="flex h-full flex-col justify-between rounded-3xl bg-background/75 p-6"
              borderWidth={2}
              duration={14}
              shineColor={["#facc15", "#f59e0b", "#facc15"]}
            >
              <blockquote>
                <p className="text-base text-foreground/90 md:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-8 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {testimonial.name}
                  </span>
                  <br />
                  {testimonial.role}
                </footer>
              </blockquote>
            </ShineBorder>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 overflow-hidden rounded-full border border-white/10 bg-background/80">
        <Marquee className="[--duration:30s]" pauseOnHover>
          {testimonials.map((testimonial) => (
            <span
              key={`${testimonial.name}-marquee`}
              className="flex items-center gap-3 px-5 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground"
            >
              <span className="size-1 rounded-full bg-primary" />
              {testimonial.role}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
