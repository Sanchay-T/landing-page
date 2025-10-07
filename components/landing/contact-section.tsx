"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
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
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,560px)] lg:items-start lg:gap-20">
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

        <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-black/75 p-6 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.9)] md:p-7">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <div className="relative">
            <Form {...form}>
              <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="grid gap-4 lg:grid-cols-6"
              noValidate
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55 lg:col-span-6">
                Contact details
              </p>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-1 lg:col-span-3">
                    <FormLabel>Full name</FormLabel>
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
                  <FormItem className="space-y-1 lg:col-span-3">
                    <FormLabel>Work email</FormLabel>
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
                  <FormItem className="space-y-1 lg:col-span-3">
                    <FormLabel>Company</FormLabel>
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
                  <FormItem className="space-y-1 lg:col-span-3">
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourdomain.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55 lg:col-span-6">
                Engagement snapshot
              </p>
              <FormField
                control={form.control}
                name="headcount"
                render={({ field }) => (
                  <FormItem className="space-y-1 lg:col-span-3">
                    <div className="flex items-center justify-between gap-3">
                      <FormLabel>Go-to-market headcount</FormLabel>
                      <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/40">
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
                  <FormItem className="space-y-1 lg:col-span-3">
                    <div className="flex items-center justify-between gap-3">
                      <FormLabel>Activation timeline</FormLabel>
                      <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/40">
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
                  <FormItem className="space-y-2 lg:col-span-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <FormLabel>Where do you need help first?</FormLabel>
                      <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/40">
                        Choose up to three
                      </span>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
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
                                if (current.length >= 3) {
                                  toast.error("Pick up to three focus areas.");
                                  return;
                                }
                                field.onChange([...current, area]);
                              }
                            }}
                            aria-pressed={selected}
                            className={cn(
                              "rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors",
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
                  <FormItem className="space-y-2 lg:col-span-6">
                    <FormLabel>What should we know?</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={2}
                        placeholder="Share the funnel leaks, KPIs, or integrations you’re prioritizing."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2 lg:col-span-6">
                <RainbowButton
                  type="submit"
                  size="lg"
                  className="w-full justify-center rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.24em]"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send my request"}
                </RainbowButton>
                <p className="text-center text-[0.7rem] uppercase tracking-[0.24em] text-white/40">
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
