import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog/types";

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

const BlogTemplateArticle = () => {
  return (
    <article className="mx-auto flex w-full max-w-5xl flex-col gap-12">
      <div className="flex max-w-[800px] flex-col gap-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/blog-template.png"
            src="/blog-demo.mp4"
            className="w-full"
          />
        </div>
        <div className="flex w-full flex-col gap-2 sm:flex-row">
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

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            A minimal changelog template to showcase your product updates, releases, and
            improvements in a beautiful timeline format. Built with Next.js, TailwindCSS,
            and Fumadocs for easy content management.
          </p>

          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Dependencies</h3>
            <ul className="grid gap-2 text-sm">
              {dependencies.map((dependency) => (
                <li
                  key={dependency}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-foreground"
                >
                  <span className="size-2 rounded-full bg-primary" />
                  <span>{dependency}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Tech Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              What makes it different
            </h3>
            <p>
              The layout keeps your announcements feeling cinematic with a hero rich media
              block, responsive typography, and tags that map back to your roadmap.
            </p>
            <p>
              Drop in markdown or MDX content, wire up your favourite CMS, and extend the
              theme with product launch checklists or subscriber forms without breaking the
              cohesive look.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
};

export const blogTemplatePost: BlogPost = {
  slug: "blog-template",
  title: "Blog Template",
  description: "A minimal blog template built using Next.js.",
  date: "2025-09-16",
  author: "dillionverma",
  published: true,
  readTime: "4 min read",
  tags: ["template", "next.js", "changelog"],
  hero: {
    videoSrc: "/blog-demo.mp4",
    posterSrc: "/blog-template.png",
    imageSrc: "/blog-template.png",
  },
  component: BlogTemplateArticle,
};
