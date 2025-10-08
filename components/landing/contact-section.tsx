"use client";

import { useEffect, useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import {
  Form,
  FormControl,
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
import { QUALIFIER_STORAGE_KEY } from "@/lib/marketing";

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

const collapsedHighlights = [
  "We inspect transcripts, data flows, and compliance constraints before recommending a pod.",
  "You get a Loom summary, prioritized backlog, and rollout milestones within 24 hours.",
  "Every intake syncs with the same pipeline as calendar bookings so nothing slips through.",
];

export default function ContactSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onTouched",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [intakeSummary, setIntakeSummary] = useState<{
    priority?: string;
    teamSize?: string;
    email?: string;
  } | null>(null);
  const [hydratedDefaults, setHydratedDefaults] = useState(false);

  const summaryPills = useMemo(
    () =>
      [
        intakeSummary?.priority ? `Priority: ${intakeSummary.priority}` : null,
        intakeSummary?.teamSize ? `Team size: ${intakeSummary.teamSize}` : null,
        intakeSummary?.email ? `Email: ${intakeSummary.email}` : null,
      ].filter(Boolean) as string[],
    [intakeSummary],
  );

  useEffect(() => {
    if (typeof window === "undefined" || hydratedDefaults) return;

    const stored = window.sessionStorage.getItem(QUALIFIER_STORAGE_KEY);
    if (!stored) {
      setHydratedDefaults(true);
      return;
    }

    try {
      const parsed = JSON.parse(stored) as {
        priority?: string;
        teamSize?: string;
        email?: string;
      };

      setIntakeSummary(parsed);

      const inferredHeadcount = HEADCOUNT_OPTIONS.includes(parsed.teamSize as (typeof HEADCOUNT_OPTIONS)[number])
        ? (parsed.teamSize as ContactFormValues["headcount"])
        : defaultValues.headcount;

      form.reset({
        ...defaultValues,
        email: parsed.email ?? defaultValues.email,
        headcount: inferredHeadcount,
      });
    } catch (error) {
      console.warn("Failed to hydrate contact defaults", error);
      window.sessionStorage.removeItem(QUALIFIER_STORAGE_KEY);
    } finally {
      setHydratedDefaults(true);
    }
  }, [form, hydratedDefaults]);

  const handleToggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

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

      if (typeof window !== "undefined") {
        const payload = {
          ...(intakeSummary ?? {}),
          teamSize: values.headcount,
          email: values.email,
        };
        window.sessionStorage.setItem(QUALIFIER_STORAGE_KEY, JSON.stringify(payload));
        setIntakeSummary(payload);
      }
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
    <section
      id="contact"
      data-contact-section
      className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,560px)] lg:items-start lg:gap-16">
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
            Share the workflows you’re prioritizing and the systems that power them. Devonel operators will review transcripts, data flows, and compliance needs before proposing the pod that launches your agents.
          </p>
          <ul className="space-y-4 text-sm text-white/75">
            {assurances.map((assurance, index) => (
              <li key={assurance} className="flex items-start gap-3">
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
          <div className="relative space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-semibold text-white">Need a custom audit?</p>
                <p className="text-sm text-white/65">
                  Operators respond within one business day with a scored activation plan and next best actions.
                </p>
              </div>
              <button
                type="button"
                onClick={handleToggleExpanded}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-colors hover:border-white/25"
                aria-expanded={isExpanded}
                aria-controls="contact-intake"
                data-contact-toggle
              >
                {isExpanded ? "Hide intake" : "Open intake"}
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform",
                    isExpanded ? "rotate-180" : "rotate-0",
                  )}
                />
              </button>
            </div>

            {summaryPills.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
                {summaryPills.map((pill) => (
                  <span key={pill} className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1">
                    {pill}
                  </span>
                ))}
              </div>
            )}

            {isExpanded ? (
              <Form {...form}>
                <form
                  id="contact-intake"
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="grid gap-5 lg:grid-cols-6"
                  noValidate
                >
                  <div className="lg:col-span-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55">
                      Contact details
                    </p>
                  </div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2 lg:col-span-3">
                        <FormLabel className="text-sm font-medium text-white/85">Full name</FormLabel>
                        <FormControl>
                          <Input data-contact-field="name" placeholder="Taylor Rivera" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2 lg:col-span-3">
                        <FormLabel className="text-sm font-medium text-white/85">Work email</FormLabel>
                        <FormControl>
                          <Input
                            data-contact-field="email"
                            type="email"
                            placeholder="you@company.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="space-y-2 lg:col-span-3">
                        <FormLabel className="text-sm font-medium text-white/85">Company</FormLabel>
                        <FormControl>
                          <Input data-contact-field="company" placeholder="Devonel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem className="space-y-2 lg:col-span-3">
                        <FormLabel className="text-sm font-medium text-white/85">Website</FormLabel>
                        <FormControl>
                          <Input
                            data-contact-field="website"
                            placeholder="https://yourdomain.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="lg:col-span-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55">
                      Engagement snapshot
                    </p>
                  </div>
                  <FormField
                    control={form.control}
                    name="headcount"
                    render={({ field }) => (
                      <FormItem className="space-y-2 lg:col-span-3">
                        <div className="flex items-center justify-between gap-3">
                          <FormLabel className="text-xs font-medium text-white/85">Go-to-market headcount</FormLabel>
                          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/40">
                            Daily pod size
                          </span>
                        </div>
                        <FormControl>
                          <select
                            {...field}
                            data-contact-field="headcount"
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
                      <FormItem className="space-y-2 lg:col-span-3">
                        <div className="flex items-center justify-between gap-3">
                          <FormLabel className="text-xs font-medium text-white/85">Activation timeline</FormLabel>
                          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/40">
                            Go-live window
                          </span>
                        </div>
                        <FormControl>
                          <select
                            {...field}
                            data-contact-field="timeline"
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
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <FormLabel className="text-xs font-medium text-white/85">Where do you need help first?</FormLabel>
                          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/40">
                            Choose up to three
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
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
                                  "rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors whitespace-nowrap",
                                  selected
                                    ? "border-[rgb(var(--brand-accent-rgb))] bg-[rgb(var(--brand-accent-rgb)/0.18)] text-white"
                                    : "border-white/12 text-white/70 hover:border-white/30",
                                )}
                                data-contact-focus-option={area}
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
                        <FormLabel className="text-xs font-medium text-white/85">What should we know?</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Share funnel leaks, KPIs, and integrations we should review before proposing automations."
                            className="resize-none text-sm"
                            data-contact-field="message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col gap-4 pt-1 lg:col-span-6 lg:flex-row lg:items-center lg:justify-between">
                    <TypingAnimation
                      words={["Operators reply within one business day", "We’ll send a Loom and rollout outline"]}
                      className="text-xs font-medium uppercase tracking-[0.32em] text-white/60"
                      pauseDelay={2200}
                      typeSpeed={40}
                      deleteSpeed={32}
                      loop
                    />
                    <ShimmerButton
                      type="submit"
                      disabled={isSubmitting}
                      shimmerColor="rgb(250, 204, 21)"
                      shimmerDuration="2.4s"
                      className="border border-white/10 bg-[linear-gradient(90deg,#151519,#06060a)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
                      data-contact-submit
                    >
                      <span className="flex items-center gap-2">
                        {isSubmitting ? "Sending…" : "Send intake"}
                        <Sparkles className="size-4" aria-hidden />
                      </span>
                    </ShimmerButton>
                  </div>
                </form>
              </Form>
            ) : (
              <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 text-sm text-white/75">
                <p>
                  Need more context before booking? Share your stack and constraints so operators can respond with a Loom summary, scoped backlog, and recommended pod configuration.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {collapsedHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[0.3rem] size-1.5 rounded-full bg-[rgb(var(--brand-accent-rgb))]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-white/55">
                  Ready now? Use the calendar above to grab time instantly — your saved context will land with the same operator pod.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
