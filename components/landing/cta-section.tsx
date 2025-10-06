"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { SpinningText } from "@/components/magicui/spinning-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
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
import { useEffect, useId, useRef, useState } from "react";

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
        "relative size-16 cursor-pointer overflow-hidden rounded-2xl border p-3 sm:size-20 sm:p-4 lg:size-24",
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray([...tiles]));
      setRandomTiles2(shuffleArray([...tiles]));
      setRandomTiles3(shuffleArray([...tiles]));
      setRandomTiles4(shuffleArray([...tiles]));
    }
  }, []);

  const marqueeRows = [
    {
      key: "row-1",
      tiles: randomTiles1,
      wrapperClassName: "",
      marqueeProps: {
        reverse: true,
        className: "-delay-[200ms] [--duration:22s]",
      },
    },
    {
      key: "row-2",
      tiles: randomTiles2,
      wrapperClassName: "",
      marqueeProps: {
        reverse: false,
        className: "[--duration:30s]",
      },
    },
    {
      key: "row-3",
      tiles: randomTiles3,
      wrapperClassName: "hidden md:block",
      marqueeProps: {
        reverse: true,
        className: "-delay-[200ms] [--duration:24s]",
      },
    },
    {
      key: "row-4",
      tiles: randomTiles4,
      wrapperClassName: "hidden lg:block",
      marqueeProps: {
        reverse: false,
        className: "[--duration:36s]",
      },
    },
  ];

  return (
    <section
      id="cta"
      className="mx-auto mt-32 w-full max-w-7xl px-6 md:mt-40 md:px-8"
    >
      <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-background/40 px-4 py-16 sm:px-6 md:px-10">
        <div className="relative flex min-h-[28rem] w-full flex-col items-center justify-center overflow-hidden">
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:gap-4">
            {marqueeRows.map(({ key, tiles, wrapperClassName, marqueeProps }) => (
              <div key={key} className={cn("w-full", wrapperClassName)}>
                <Marquee repeat={4} {...marqueeProps}>
                  {tiles.map((review, idx) => (
                    <Card key={`${key}-${idx}`} {...review} />
                  ))}
                </Marquee>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-4 text-center sm:px-8">
            <div className="mx-auto size-20 rounded-[2rem] border bg-background/20 p-3 shadow-2xl backdrop-blur-md dark:bg-background/10 sm:size-24 lg:size-32">
              <HeartHandshake className="mx-auto size-12 text-foreground dark:text-foreground sm:size-16 lg:size-24" />
            </div>
            <div className="flex flex-col items-center text-primary">
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.75rem]">
                Ready to launch your Devonel agent?
              </h1>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
                Partner with our operators to map the playbook, integrate your stack, and activate an autonomous agent that compounds your growth.
              </p>
              <div className="relative mt-6 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
                <ShimmerButton className="w-full justify-center px-8 py-3 text-base font-semibold sm:w-auto">
                  <span className="flex items-center gap-2">
                    Book a strategy call
                    <ChevronRight className="size-4" />
                  </span>
                </ShimmerButton>
                <a
                  href="#pricing"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-full rounded-[2rem] sm:w-auto"
                  )}
                >
                  View engagement plans
                </a>
              </div>
              <div className="pointer-events-none relative mt-12 flex h-20 w-20 items-center justify-center sm:mt-16 sm:h-24 sm:w-24">
                <SpinningText duration={14} radius={6} className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                  autonomous agents · automation ops · devonel studio ·
                </SpinningText>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.5rem] bg-background/40 blur-2xl" />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] bg-background/30 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-b from-transparent via-background/70 to-background" />
        </div>
      </div>
    </section>
  );
}
