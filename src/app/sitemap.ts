import type { MetadataRoute } from "next";
import { COURSES, SERVICES, BLOG_POSTS } from "@/lib/mock-data";

const BASE_URL = "https://gsitssolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/trainings",
    "/batches",
    "/institutes",
    "/resources",
    "/resources/blog",
    "/resources/testimonials",
    "/resources/faqs",
    "/services",
    "/contact",
    "/verify",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const courseRoutes: MetadataRoute.Sitemap = COURSES.map((c) => ({
    url: `${BASE_URL}/trainings/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BASE_URL}/resources/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes, ...serviceRoutes, ...blogRoutes];
}
