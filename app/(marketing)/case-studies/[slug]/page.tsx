import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { getPublishedCaseStudies, findCaseStudyBySlug } from "@/lib/case-studies/posts";

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
  return getPublishedCaseStudies().map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = findCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Studies | Devonel",
    };
  }

  return {
    title: `${caseStudy.title} | Devonel Case Studies`,
    description: caseStudy.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = findCaseStudyBySlug(slug);

  if (!caseStudy) {
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
          <Link href="/case-studies" className="font-semibold text-primary transition-colors hover:text-primary/80">
            Case Studies
          </Link>
          <span className="text-muted-foreground/60">•</span>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary">
            {caseStudy.industry}
          </span>
          <span className="text-muted-foreground/60">•</span>
          <span>{formatDate(caseStudy.date)}</span>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-primary/90">
            {caseStudy.company}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {caseStudy.title}
          </h1>
        </div>

        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {caseStudy.description}
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
            Key Results
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudy.results.map((result, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 p-4"
              >
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                <span className="text-sm text-foreground">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {caseStudy.tags && caseStudy.tags.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {caseStudy.hero?.videoSrc || caseStudy.hero?.imageSrc ? (
        <div className="mx-auto mt-12 w-full max-w-5xl px-6 md:px-0">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
            {caseStudy.hero.videoSrc ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={caseStudy.hero.posterSrc ?? caseStudy.hero.imageSrc}
                src={caseStudy.hero.videoSrc}
                className="w-full"
              />
            ) : null}
            {!caseStudy.hero.videoSrc && caseStudy.hero.imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={caseStudy.hero.imageSrc}
                alt={`${caseStudy.title} preview`}
                className="w-full"
              />
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="mx-auto mt-16 w-full max-w-4xl px-6 md:px-0">
        <caseStudy.component />
      </div>
    </div>
  );
}
