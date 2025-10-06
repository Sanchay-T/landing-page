import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { getPublishedBlogPosts, findBlogPostBySlug } from "@/lib/blog/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const formatDate = (value: string) => {
  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};

export async function generateStaticParams() {
  return getPublishedBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog | Devonel",
    };
  }

  return {
    title: `${post.title} | Devonel Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = findBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-background pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] border-b border-border/70 bg-gradient-to-b from-black via-black/80 to-transparent">
        <FlickeringGrid
          className="absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,transparent_0%,black_45%)]"
          color="#fbbf24"
          maxOpacity={0.18}
          gridGap={6}
          squareSize={3}
        />
      </div>

      <div className="mx-auto w-full max-w-4xl px-6 pt-28 md:px-0">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary/70">
          <Link href="/blog" className="font-semibold text-primary transition-colors hover:text-primary/80">
            Blog
          </Link>
          <span className="text-muted-foreground/60">•</span>
          <span>{formatDate(post.date)}</span>
          {post.readTime ? (
            <span className="text-muted-foreground/80">• {post.readTime}</span>
          ) : null}
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {post.description}
        </p>
        <div className="mt-6 text-sm text-muted-foreground">
          By <span className="font-semibold text-foreground">{post.author}</span>
        </div>
      </div>

      {post.hero?.videoSrc || post.hero?.imageSrc ? (
        <div className="mx-auto mt-12 w-full max-w-5xl px-6 md:px-0">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
            {post.hero.videoSrc ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={post.hero.posterSrc ?? post.hero.imageSrc}
                src={post.hero.videoSrc}
                className="w-full"
              />
            ) : null}
            {!post.hero.videoSrc && post.hero.imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.hero.imageSrc}
                alt={`${post.title} preview`}
                className="w-full"
              />
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="mx-auto mt-16 w-full max-w-4xl px-6 md:px-0">
        <post.component />
      </div>
    </div>
  );
}
