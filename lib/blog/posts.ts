import { blogTemplatePost } from "@/content/blog/blog-template";
import type { BlogPost } from "@/lib/blog/types";

const allPosts: BlogPost[] = [blogTemplatePost];

export function getAllBlogPosts() {
  return allPosts;
}

export function getPublishedBlogPosts() {
  return allPosts.filter((post) => post.published);
}

export function findBlogPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}
