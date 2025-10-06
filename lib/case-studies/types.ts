import type { ReactElement } from "react";

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date string
  industry: string;
  company: string;
  results: string[];
  published: boolean;
  tags?: string[];
  hero?: {
    videoSrc?: string;
    posterSrc?: string;
    imageSrc?: string;
  };
  component: () => ReactElement;
}

export type CaseStudySummary = Omit<CaseStudy, "component">;
