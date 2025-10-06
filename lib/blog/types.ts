import type { ReactElement } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date string
  author: string;
  published: boolean;
  readTime?: string;
  tags?: string[];
  hero?: {
    videoSrc?: string;
    posterSrc?: string;
    imageSrc?: string;
  };
  component: () => ReactElement;
}

export type BlogPostSummary = Omit<BlogPost, "component">;
