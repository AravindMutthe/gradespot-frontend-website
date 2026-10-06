import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ------------------------------------------------------------------
   * 301 redirects for legacy WordPress URLs — fill in during the SEO
   * continuity step (Phase 4) after crawling every indexable URL on
   * gsitssolutions.com. Example:
   *
   * async redirects() {
   *   return [
   *     {
   *       source: "/old-services-page",
   *       destination: "/services/web-development",
   *       permanent: true, // 301
   *     },
   *   ];
   * },
   * ------------------------------------------------------------------ */
};

export default nextConfig;
