import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { getPublishedBlogPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Blog | Devonel",
  description:
    "Stories, launch notes, and behind-the-scenes context on how Devonel ships AI agents.",
};

const formatDate = (value: string) => {
  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};

export default function BlogIndexPage() {
  const posts = getPublishedBlogPosts()
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] border-b border-border/70 bg-gradient-to-b from-black via-black/80 to-transparent">
        <FlickeringGrid
          className="absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,transparent_0%,black_45%)]"
          color="#fbbf24"
          maxOpacity={0.18}
          gridGap={6}
          squareSize={3}
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-24 pt-28 md:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">
            Blog
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Notes on building autonomous operators that feel on-brand.
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Fresh publish-ready templates, growth experiments, and changelog patterns our team uses
            while shipping AI-powered onboarding and support flows.
          </p>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                {post.hero?.posterSrc || post.hero?.imageSrc ? (
                  <Image
                    src={post.hero.posterSrc ?? post.hero.imageSrc ?? ""}
                    alt={`${post.title} preview`}
                    width={960}
                    height={540}
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent text-sm uppercase tracking-[0.4em] text-primary/70">
                    Devonel
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-primary/70">
                  <span>{formatDate(post.date)}</span>
                  {post.readTime ? <span className="text-muted-foreground/80">• {post.readTime}</span> : null}
                </div>
                <h2 className="text-2xl font-semibold text-foreground">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                  Read story
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
