"use client";

import { FormEvent, useEffect, useId, useMemo, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { CAL_EMBED_ID, CTA_LINKS, QUALIFIER_STORAGE_KEY } from "@/lib/marketing";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { SpinningText } from "@/registry/magicui/spinning-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { CalInlineEmbed } from "@/components/integrations/cal-inline-embed";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { motion, useAnimation, useInView } from "motion/react";
import {
  BarChart,
  ChevronRight,
  File,
  Globe,
  HeartHandshake,
  Rss,
  Shield,
} from "lucide-react";

const tiles = [
  {
    icon: <HeartHandshake className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Globe className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <File className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Shield className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Rss className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <BarChart className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 opacity-70 blur-[20px] filter"></div>
    ),
  },
];

const shuffleArray = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const qualifierPriorities = [
  {
    value: "launch-first-agent",
    label: "Launch my first agent",
    description: "You’re mapping a net-new workflow and need hands-on build support.",
  },
  {
    value: "scale-new-workflows",
    label: "Scale into more workflows",
    description: "You already have traction and want pods to expand coverage fast.",
  },
  {
    value: "optimize-existing",
    label: "Optimize agents in production",
    description: "You need operator tuning, QA, and better analytics on what’s live now.",
  },
];

const qualifierHeadcounts = [
  { value: "1-10", label: "1-10" },
  { value: "11-50", label: "11-50" },
  { value: "51-200", label: "51-200" },
  { value: "200+", label: "200+" },
];

const OrbitSpinner = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "relative flex h-36 w-36 items-center justify-center overflow-visible sm:h-40 sm:w-40",
      className
    )}
  >
    <div className="absolute inset-0 -m-10 -z-10 rounded-full bg-gradient-to-br from-background/70 via-background/90 to-background/70 backdrop-blur-lg shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)]" />
    <span className="absolute z-10 size-2.5 rounded-full bg-[rgb(var(--brand-accent-rgb))]/90 shadow-[0_0_18px_rgba(var(--brand-accent-rgb),0.45)]" />
    <SpinningText
      duration={14}
      radius={8}
      className="block h-full w-full text-foreground/85"
      textClassName="text-[0.84rem] font-medium uppercase"
    >
      SHIP • SCALE • GROW •
    </SpinningText>
  </div>
);

const Card = (card: { icon: JSX.Element; bg: JSX.Element }) => {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      {card.icon}
      {card.bg}
    </motion.div>
  );
};

export default function CallToActionSection() {
  const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([]);
  const [randomTiles2, setRandomTiles2] = useState<typeof tiles>([]);
  const [randomTiles3, setRandomTiles3] = useState<typeof tiles>([]);
  const [randomTiles4, setRandomTiles4] = useState<typeof tiles>([]);
  const [priority, setPriority] = useState<string>("");
  const [teamSize, setTeamSize] = useState<string>("");
  const [qualifierEmail, setQualifierEmail] = useState<string>("");
  const [prefillData, setPrefillData] = useState<{
    email?: string;
    notes?: string;
  } | null>(null);
  const [submissionState, setSubmissionState] = useState<"idle" | "completed">("idle");
  const [qualifierError, setQualifierError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray([...tiles]));
      setRandomTiles2(shuffleArray([...tiles]));
      setRandomTiles3(shuffleArray([...tiles]));
      setRandomTiles4(shuffleArray([...tiles]));
      const stored = window.sessionStorage.getItem(QUALIFIER_STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as {
            priority?: string;
            teamSize?: string;
            email?: string;
            notes?: string;
          };
          if (parsed.priority) {
            setPriority(parsed.priority);
          }
          if (parsed.teamSize) {
            setTeamSize(parsed.teamSize);
          }
          if (parsed.email) {
            setQualifierEmail(parsed.email);
          }
          if (parsed.notes || parsed.email) {
            setPrefillData({
              email: parsed.email,
              notes: parsed.notes,
            });
            setSubmissionState("completed");
          }
        } catch (error) {
          console.warn("Failed to parse stored qualifier context", error);
          window.sessionStorage.removeItem(QUALIFIER_STORAGE_KEY);
        }
      }
    }
  }, []);

  const handleBookCallClick = () => {
    const target = document.getElementById(CAL_EMBED_ID);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.open(CTA_LINKS.bookCall, "_blank", "noopener,noreferrer");
  };

  const emailIsValid = useMemo(() => {
    if (!qualifierEmail) return false;
    return /.+@.+\..+/.test(qualifierEmail.trim());
  }, [qualifierEmail]);

  const handleSelectPriority = (value: string) => {
    setPriority(value);
    setSubmissionState("idle");
    setQualifierError(null);
  };

  const handleSelectTeamSize = (value: string) => {
    setTeamSize(value);
    setSubmissionState("idle");
    setQualifierError(null);
  };

  const handleEmailChange = (value: string) => {
    setQualifierEmail(value);
    setSubmissionState("idle");
    if (qualifierError) {
      setQualifierError(null);
    }
  };

  const handleQualifierSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = qualifierEmail.trim();
    if (!priority || !teamSize) {
      setQualifierError("Select your priority and team size.");
      return;
    }
    if (!emailIsValid) {
      setQualifierError("Add a work email so we can prep your consult.");
      return;
    }

    const notes = `Top priority: ${qualifierPriorities.find((item) => item.value === priority)?.label ?? priority}\nTeam size: ${teamSize}`;
    const payload = {
      email: trimmedEmail,
      notes,
    };
    setPrefillData(payload);
    setSubmissionState("completed");
    setQualifierError(null);

    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(
        QUALIFIER_STORAGE_KEY,
        JSON.stringify({
          priority,
          teamSize,
          email: trimmedEmail,
          notes,
        }),
      );
    }

    requestAnimationFrame(() => {
      const target = document.getElementById(CAL_EMBED_ID);
      target?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

  return (
    <section id="cta">
      <div className="py-14">
        <div className="flex w-full flex-col items-center justify-center gap-16">
          <div className="relative flex w-full flex-col items-center justify-center overflow-visible px-4 py-16 sm:overflow-visible sm:px-8 sm:py-20">
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:20s]"
              repeat={5}
            >
              {randomTiles1.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles2.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:20s]"
              repeat={5}
            >
              {randomTiles3.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles4.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles4.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <div className="absolute inset-x-0 top-0 z-10 flex w-full flex-col items-center px-4 pb-28 pt-14 text-center text-primary sm:px-10 sm:pb-32 sm:pt-16">
              <div className="mx-auto size-24 rounded-[2rem] border bg-background/10 p-3 shadow-2xl backdrop-blur-md dark:bg-background/10 lg:size-32">
                <HeartHandshake className="mx-auto size-16 text-foreground dark:text-foreground lg:size-24" />
              </div>
              <div className="z-10 mt-6 flex flex-col items-center text-center text-primary sm:mt-8">
                <h1 className="text-3xl font-bold text-foreground sm:text-[2.1rem] lg:text-4xl">
                  Ready to
                  {" "}
                  <TypingAnimation
                    words={["launch", "scale", "optimize"]}
                    className="ml-1 inline-flex text-foreground"
                    typeSpeed={70}
                    deleteSpeed={40}
                    pauseDelay={1800}
                    loop
                    cursorStyle="underscore"
                  />
                  {" "}
                  your Devonel agent?
                </h1>
                <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
                  Partner with our operators to map the playbook, integrate your
                  stack, and activate an autonomous agent that compounds your
                  growth.
                </p>
                <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 lg:flex-row">
                  <ShimmerButton
                    onClick={handleBookCallClick}
                    borderRadius="999px"
                    shimmerColor="rgb(250, 204, 21)"
                    shimmerDuration="2.4s"
                    className="border border-white/10 bg-[linear-gradient(90deg,#151519,#06060a)] px-8 py-3 text-base font-semibold text-white"
                  >
                    <span className="flex items-center gap-2">
                      Book a strategy call
                      <ChevronRight className="size-4" />
                    </span>
                  </ShimmerButton>
                  <InteractiveHoverButton
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10 text-base px-8"
                    onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View engagement plans
                  </InteractiveHoverButton>
                </div>
                <OrbitSpinner className="mt-6 sm:mt-9" />
              </div>
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-background opacity-40 blur-xl dark:bg-background" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-background to-70% dark:to-background" />
          </div>
          <div className="w-full px-4 sm:px-8">
            <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,12,20,0.92),rgba(5,5,10,0.95))] p-6 shadow-[0_45px_140px_-60px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-8 lg:p-10">
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-[2rem]">
                  Lock in your operator consult
                </h2>
                <p className="text-sm text-white/70 sm:text-base">
                  Meet 1:1 with our pod lead to audit your workflows, score automation opportunities, and draft a phased rollout game plan tailored to your stack.
                </p>
              </div>

              <form
                onSubmit={handleQualifierSubmit}
                className="mt-6 space-y-5 rounded-[1.75rem] border border-white/12 bg-[#121216] p-5 shadow-[0_25px_100px_-60px_rgba(15,15,25,0.65)] transition-all sm:p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/60">
                    Step 1 • Share context
                  </p>
                  {submissionState === "completed" ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[0.7rem] font-medium text-emerald-100">
                      <span className="size-2 rounded-full bg-emerald-300" aria-hidden />
                      Context attached
                    </span>
                  ) : (
                    <span className="text-xs text-white/55">
                      We’ll carry these answers into your booking notes.
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-white/85">
                    What do you want to tackle first?
                  </p>
                  <div className="grid gap-3 md:grid-cols-3">
                    {qualifierPriorities.map((option) => {
                      const isActive = priority === option.value;
                      return (
                        <label
                          key={option.value}
                          className={cn(
                            "group relative flex cursor-pointer flex-col gap-2 rounded-2xl border border-white/12 bg-[#15151c] p-4 text-left transition-all",
                            "hover:border-white/25 hover:bg-[#1a1a22]",
                            isActive
                              ? "border-white/30 bg-[#1f1f28] shadow-[0_20px_80px_-60px_rgba(148,163,184,0.45)]"
                              : null,
                          )}
                        >
                          <input
                            type="radio"
                            name="qualifier-priority"
                            value={option.value}
                            checked={isActive}
                            onChange={() => handleSelectPriority(option.value)}
                            className="sr-only"
                          />
                          <span className="text-sm font-semibold text-white">
                            {option.label}
                          </span>
                          <span className="text-xs text-white/70">
                            {option.description}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,240px)]">
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-white/85">
                      Team size working with the agent pod
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {qualifierHeadcounts.map((option) => {
                        const isActive = teamSize === option.value;
                        return (
                          <label
                            key={option.value}
                            className={cn(
                              "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                              isActive
                                ? "border-white/30 bg-[#1f1f28] text-white"
                                : "border-white/15 bg-[#15151c] text-white/75 hover:border-white/25 hover:bg-[#1a1a22] hover:text-white",
                            )}
                          >
                            <input
                              type="radio"
                              name="qualifier-headcount"
                              value={option.value}
                              checked={isActive}
                              onChange={() => handleSelectTeamSize(option.value)}
                              className="sr-only"
                            />
                            {option.label}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-white/85" htmlFor="qualifier-email">
                      Work email for the invite
                    </label>
                    <Input
                      id="qualifier-email"
                      type="email"
                      inputMode="email"
                      placeholder="you@company.com"
                      value={qualifierEmail}
                      onChange={(event) => handleEmailChange(event.target.value)}
                      className="border-white/12 bg-[#1a1a21] text-white placeholder:text-white/45 focus-visible:border-white/30"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs text-rose-300">
                    {qualifierError}
                  </div>
                  <ShimmerButton
                    type="submit"
                    disabled={submissionState === "completed" && !qualifierError}
                    borderRadius="999px"
                    shimmerColor="rgb(250, 204, 21)"
                    shimmerDuration="2.4s"
                    className="border border-white/15 bg-[linear-gradient(90deg,#14141a,#06060a)] px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-80"
                  >
                    {submissionState === "completed" ? "Context saved" : "Attach context"}
                  </ShimmerButton>
                </div>
              </form>

              <div className="mt-6 lg:mt-8">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/60">
                  Step 2 • Lock your time
                </p>
                <CalInlineEmbed frame={false} className="mt-3" prefill={prefillData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
