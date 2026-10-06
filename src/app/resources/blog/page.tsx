import type { Metadata } from "next";
import { Topbar, Navbar, Footer, MobileTabBar } from "@/components/organisms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { BLOG_POSTS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Blog — GradeSpot IT Solutions",
  description: "GradeSpot blog: career roadmaps and tech explainers.",
};

export default function BlogPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-bg2">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-ink">
            Resources · Blog
          </p>
          <h1 className="mt-2 text-4xl font-bold text-ink">From the blog</h1>
        </div>
      </section>

      <section className="bg-panel">
        <div className="container-brand grid gap-6 py-14 md:grid-cols-2">
          {BLOG_POSTS.map((p) => (
            <article
              key={p.slug}
              className="rounded-card border border-line/20 bg-panel p-8"
            >
              <p className="text-xs text-ink3">{p.date}</p>
              <h2 className="mt-2 text-xl font-bold text-ink">{p.title}</h2>
              <p className="mt-3 text-ink3">{p.excerpt}</p>
              <p className="mt-4 text-sm font-semibold text-brand-ink">
                [Pending: full article body]
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
