"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const dependencies = [
  "Next.js 15",
  "React 19",
  "TypeScript 5",
  "TailwindCSS 4",
  "Fumadocs UI",
  "next-themes",
  "radix-ui",
  "shadcn/ui",
];

const techStack = ["nextjs", "react", "typescript", "tailwindcss", "shadcn"];

export default function TestimonialsSection() {
  return (
    <section
      id="case-studies"
      className="mx-auto mt-28 max-w-6xl px-6 md:mt-36 md:px-8"
    >
      <div className="relative overflow-hidden rounded-[48px] bg-[radial-gradient(circle_at_top,#fbbf24/14,transparent_65%),linear-gradient(180deg,#060608,#040406)] p-8 md:p-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,#f97316/10,transparent_70%)]" />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                Case studies & Blog
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                Blog Template
              </h2>
              <p className="text-base text-muted-foreground">
                A minimal blog template built with Next.js to showcase updates, stories, and long-form insights without the overhead of a custom CMS.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-3xl bg-black/40">
                <Image
                  src="/blog-template.png"
                  alt="Preview of the blog template"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild variant="secondary" className="gap-2">
                  <Link
                    href="https://github.com/magicuidesign/blog-template"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open template
                  </Link>
                </Button>
                <Button asChild className="gap-2">
                  <Link
                    href="https://blog-magicui.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live preview
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Dependencies</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {dependencies.map((dependency) => (
                  <li key={dependency} className="flex items-start gap-3">
                    <span className="mt-1 size-1.5 rounded-full bg-primary" />
                    <span>{dependency}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Tech Stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {techStack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Showcase your product updates, releases, and improvements in a clean timeline format. Built with modern tools for a smooth editorial workflow and effortless customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
