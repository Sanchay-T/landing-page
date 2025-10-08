"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormSchema,
  ContactFormValues,
  FOCUS_AREAS,
  HEADCOUNT_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";
import { ShineBorder } from "@/registry/magicui/shine-border";
import { TextAnimate } from "@/components/ui/text-animate";
import { TypingAnimation } from "@/components/ui/typing-animation";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  website: "",
  headcount: HEADCOUNT_OPTIONS[0],
  timeline: TIMELINE_OPTIONS[0],
  focus: [],
  message: "",
};

const assurances = [
  "Operators respond within one business day",
  "We audit your funnel and systems before prescribing tooling",
  "You receive a prioritized activation roadmap before any invoice",
];

export default function ContactSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onTouched",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : "We couldn’t submit your request just yet.",
        );
      }

      toast.success("Request received. We’ll be in touch shortly.");
      form.reset({
        ...defaultValues,
        headcount: values.headcount,
        timeline: values.timeline,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-8">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,720px)] lg:items-start lg:gap-16">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
            <Sparkles className="size-4 text-[rgb(var(--brand-accent-rgb))]" aria-hidden />
            Talk to our operators
          </div>
          <LineShadowText
            as="h2"
            className="text-3xl font-semibold leading-tight text-white md:text-4xl"
            shadowColor="rgb(var(--brand-accent-rgb)/0.35)"
          >
            Let’s map your revenue agent rollout.
          </LineShadowText>
          <p className="max-w-2xl text-sm text-white/70 md:text-base">
            Share the workflows you’re prioritizing and the systems that power them. Devonel operators will review
            transcripts, data flows, and compliance needs before proposing the pod that launches your agents.
          </p>
          <ul className="space-y-4 text-sm text-white/75">
            {assurances.map((assurance, index) => (
              <li
                key={assurance}
                className="flex items-start gap-3"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[rgb(var(--brand-accent-rgb)/0.15)] text-white">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <TextAnimate
                  as="p"
                  className="flex-1 text-left"
                  animation="slideRight"
                  by="word"
                  delay={0.15 + index * 0.05}
                  duration={0.5}
                  once
                >
                  {assurance}
                </TextAnimate>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="text-white/60">Prefer email?</span>
            <a
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:border-white/30 hover:text-white"
              href="mailto:hello@devonel.ai"
            >
              hello@devonel.ai
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-black/75 p-6 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.9)] md:p-8">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <div className="relative">
            <Form {...form}>
              <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="grid gap-5 lg:grid-cols-6"
              noValidate
            >
              <div className="mb-2 lg:col-span-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55">
                  Contact details
                </p>
              </div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2.5 lg:col-span-3">
                    <FormLabel className="text-sm font-medium text-white/85">Full name</FormLabel>
                    <FormControl>
                      <Input placeholder="Taylor Rivera" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2.5 lg:col-span-3">
                    <FormLabel className="text-sm font-medium text-white/85">Work email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="space-y-2.5 lg:col-span-3">
                    <FormLabel className="text-sm font-medium text-white/85">Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Devonel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="space-y-2.5 lg:col-span-3">
                    <FormLabel className="text-sm font-medium text-white/85">Website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourdomain.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mb-2 mt-2 lg:col-span-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55">
                  Engagement snapshot
                </p>
              </div>
              <FormField
                control={form.control}
                name="headcount"
                render={({ field }) => (
                  <FormItem className="space-y-2.5 lg:col-span-3">
                    <div className="flex items-center justify-between gap-3">
                      <FormLabel className="text-sm font-medium text-white/85">Go-to-market headcount</FormLabel>
                      <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                        Daily pod size
                      </span>
                    </div>
                    <FormControl>
                      <select
                        {...field}
                        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        {HEADCOUNT_OPTIONS.map((option) => (
                          <option key={option} value={option} className="bg-background text-foreground">
                            {option}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem className="space-y-2.5 lg:col-span-3">
                    <div className="flex items-center justify-between gap-3">
                      <FormLabel className="text-sm font-medium text-white/85">Activation timeline</FormLabel>
                      <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                        Go-live window
                      </span>
                    </div>
                    <FormControl>
                      <select
                        {...field}
                        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        {TIMELINE_OPTIONS.map((option) => (
                          <option key={option} value={option} className="bg-background text-foreground">
                            {option}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="focus"
                render={({ field }) => (
                  <FormItem className="space-y-2.5 lg:col-span-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <FormLabel className="text-sm font-medium text-white/85">Where do you need help first?</FormLabel>
                      <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                        Choose up to three
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {FOCUS_AREAS.map((area) => {
                        const selected = field.value?.includes(area);
                        return (
                          <button
                            key={area}
                            type="button"
                            onClick={() => {
                              const current = field.value ?? [];
                              if (current.includes(area)) {
                                field.onChange(current.filter((item) => item !== area));
                              } else {
                                field.onChange([...current, area]);
                              }
                            }}
                            aria-pressed={selected}
                            className={cn(
                              "rounded-full border px-3.5 py-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] transition-colors whitespace-nowrap",
                              selected
                                ? "border-[rgb(var(--brand-accent-rgb))] bg-[rgb(var(--brand-accent-rgb)/0.18)] text-white"
                                : "border-white/12 text-white/70 hover:border-white/30",
                            )}
                          >
                            {area}
                          </button>
                        );
                      })}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-2.5 lg:col-span-6">
                    <FormLabel className="text-sm font-medium text-white/85">What should we know?</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={2}
                        placeholder="Share the funnel leaks, KPIs, or integrations you're prioritizing."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2.5 lg:col-span-6">
                <ShimmerButton
                  type="submit"
                  borderRadius="999px"
                  shimmerColor="#ffffff"
                  shimmerDuration="2s"
                  className="w-full rounded-full bg-[rgb(var(--brand-accent-rgb))] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.24em] text-black transition-colors hover:bg-[rgb(var(--brand-accent-rgb))]/90"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send my request"}
                </ShimmerButton>
                <p className="text-center text-[0.68rem] leading-snug uppercase tracking-[0.2em] text-white/40">
                  By submitting, you agree to our privacy practices. We never share your information.
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
    </section>
  );
}
