import { blogTemplatePost } from "@/content/blog/blog-template";
import { n8nAiAgentsLeadQualificationPost } from "@/content/blog/n8n-ai-agents-lead-qualification";
import { claudeCodeWorkflowAutomationGuidePost } from "@/content/blog/claude-code-workflow-automation-guide";
import { buildingRevenueWorkflowsN8nAiPost } from "@/content/blog/building-revenue-workflows-n8n-ai";
import type { BlogPost } from "@/lib/blog/types";

const allPosts: BlogPost[] = [
  buildingRevenueWorkflowsN8nAiPost,
  claudeCodeWorkflowAutomationGuidePost,
  n8nAiAgentsLeadQualificationPost,
  blogTemplatePost,
];

export function getAllBlogPosts() {
  return allPosts;
}

export function getPublishedBlogPosts() {
  return allPosts.filter((post) => post.published);
}

export function findBlogPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}
