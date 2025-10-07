import Link from "next/link";
import type { Metadata } from "next";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { TextAnimate } from "@/components/ui/text-animate";
import { getPublishedCaseStudies } from "@/lib/case-studies/posts";

export const metadata: Metadata = {
  title: "Case Studies | Devonel",
  description:
    "Real-world success stories of businesses transforming their operations with AI agents. See measurable results across e-commerce, healthcare, real estate, and more.",
};

const formatDate = (value: string) => {
  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};

export default function CaseStudiesIndexPage() {
  const caseStudies = getPublishedCaseStudies()
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
            Case Studies
          </p>
          <TextAnimate
            as="h1"
            className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
            animation="blurInUp"
            by="word"
            delay={0.15}
            duration={0.7}
            once
          >
            Real results from AI agents in production.
          </TextAnimate>
          <TextAnimate
            as="p"
            className="max-w-2xl text-sm text-muted-foreground md:text-base"
            animation="slideUp"
            by="line"
            delay={0.3}
            duration={0.6}
            once
          >
            See how businesses across industries are using Devonel&apos;s AI agents to automate operations, improve customer experience, and drive measurable revenue growth—with zero compliance incidents.
          </TextAnimate>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <Link
              key={caseStudy.slug}
              href={`/case-studies/${caseStudy.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  {caseStudy.industry}
                </span>
                <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground/80">
                  {formatDate(caseStudy.date)}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="mb-2 text-sm font-semibold text-primary/90">
                    {caseStudy.company}
                  </p>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {caseStudy.title}
                  </h2>
                </div>

                <p className="text-sm text-muted-foreground">
                  {caseStudy.description}
                </p>

                <div className="mt-2 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                    Key Results
                  </p>
                  <div className="grid gap-2">
                    {caseStudy.results.slice(0, 3).map((result, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span className="size-1.5 rounded-full bg-primary" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                  Read case study
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {caseStudies.length === 0 && (
          <div className="mt-12 text-center text-muted-foreground">
            <p>No case studies available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
