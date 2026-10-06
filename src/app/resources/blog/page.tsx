import type { Metadata } from "next";
import { Topbar, Navbar, Footer } from "@/components/organisms";
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

      <section className="bg-surface-light">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Resources · Blog
          </p>
          <h1 className="mt-2 text-4xl font-bold text-dark">From the blog</h1>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-brand grid gap-6 py-14 md:grid-cols-2">
          {BLOG_POSTS.map((p) => (
            <article
              key={p.slug}
              className="rounded-card border border-muted/20 bg-surface p-8"
            >
              <p className="text-xs text-muted">{p.date}</p>
              <h2 className="mt-2 text-xl font-bold text-dark">{p.title}</h2>
              <p className="mt-3 text-muted">{p.excerpt}</p>
              <p className="mt-4 text-sm font-semibold text-primary">
                [Pending: full article body]
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </>
  );
}
