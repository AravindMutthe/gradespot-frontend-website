/* ---------------------------------------------------------------------------
 * Content store — STRUCTURE ONLY.
 *
 * Every list below is intentionally EMPTY. The researched filler content
 * (course catalogs, service lists, product descriptions, FAQs, testimonials)
 * was removed per the owner's direction: he develops his own content.
 * Add your own entries following the shape comments — the pages, components
 * and routes already render whatever is here.
 * ------------------------------------------------------------------------- */

export type CourseCategory =
  | "security"
  | "networking"
  | "cloud"
  | "web"
  | "digital-marketing";

export const CATEGORY_LABELS: Record<CourseCategory, string> = {
  security: "Cyber Security",
  networking: "Networking",
  cloud: "Cloud & DevOps",
  web: "Web Development",
  "digital-marketing": "Digital Marketing",
};

export interface Course {
  slug: string;
  title: string;
  short: string;
  category: CourseCategory;
  tagline: string;
  who: string;
  outcome: string;
  topics: string[];
  /** Back-compat alias for topic lists rendered with check icons. */
  highlights: string[];
  duration: string;
  mode: string;
  level: string;
}

/* TODO: add your courses here, e.g.
 * { slug: "my-course", title: "My Course", short: "My Course",
 *   category: "security", tagline: "One-line pitch.",
 *   who: "Who this is for.", outcome: "Where it leads.",
 *   topics: ["Topic one", "Topic two"],
 *   highlights: ["Topic one", "Topic two"],
 *   duration: "8 weeks", mode: "Classroom / Live Online", level: "Beginner" }
 */
export const COURSES: Course[] = [];

export interface Batch {
  courseSlug: string;
  startDate: string;
  timing: string;
  mode: string;
  status: string;
}

/* TODO: add your batches here — derived from COURSES; add entries manually
 * once courses exist, e.g.
 * { courseSlug: "my-course", startDate: "2026-11-01",
 *   timing: "10:00 AM – 1:00 PM", mode: "Classroom", status: "Admissions open" }
 */
export const BATCHES: Batch[] = COURSES.map((c) => ({
  courseSlug: c.slug,
  startDate: "TODO: next batch date",
  timing: "TODO: batch timing",
  mode: c.mode,
  status: "Admissions open",
}));

export interface Service {
  slug: string;
  title: string;
  summary: string;
  offerings: string[];
}

/* TODO: add your services here, e.g.
 * { slug: "my-service", title: "My Service",
 *   summary: "One-paragraph pitch.",
 *   offerings: ["Offering one", "Offering two"] }
 */
export const SERVICES: Service[] = [];

export interface InstituteProduct {
  slug: string;
  name: string;
  tag: string;
  description: string;
  points: string[];
}

/* TODO: add your institute products here, e.g.
 * { slug: "my-product", name: "My Product", tag: "Product 1",
 *   description: "What it does.", points: ["Point one", "Point two"] }
 */
export const PRODUCTS: InstituteProduct[] = [];

export interface Faq {
  q: string;
  a: string;
}

/* TODO: add your FAQs here, e.g.
 * { q: "Where are you located?", a: "Your answer here." }
 */
export const FAQS: Faq[] = [];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

/* TODO: add your team members here. */
export const TEAM: TeamMember[] = [
  {
    name: "Nikhil Duth D",
    role: "Founder & Managing Director",
    bio: "TODO: founder bio — background, experience, vision.",
  },
];

export interface Testimonial {
  name: string;
  detail: string;
  quote: string;
}

/* TODO: add real, permissioned testimonials here — never invent them, e.g.
 * { name: "Student Name", detail: "Course batch", quote: "Their words." }
 */
export const TESTIMONIALS: Testimonial[] = [];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

/* TODO: add your blog posts here, e.g.
 * { slug: "my-first-post", title: "My First Post",
 *   excerpt: "One-line summary.", date: "2026-11-01" }
 */
export const BLOG_POSTS: BlogPost[] = [];

export interface Stat {
  value: string;
  label: string;
}

/* TODO: add your stats here, e.g. { value: "10+", label: "Courses" } */
export const STATS: Stat[] = [];

/* Real contact details — the owner's own data, not research filler. */
export const CONTACT = {
  phone: "+91 91826 54056",
  phoneHref: "tel:+919182654056",
  phone2: "+91 88866 60597",
  phone2Href: "tel:+918886660597",
  email: "info@gsitssolutions.com",
  email2: "hr@gsitssolutions.com",
  whatsapp: "https://wa.me/919885189951",
  hours: "8:00 AM – 9:00 PM",
  address:
    "16-126 2nd Floor, Road No.1, Sri Krishna Nagar, Dilsukhnagar, Hyderabad 500060",
  locality: "Dilsukhnagar, Hyderabad 500060",
} as const;

export const BRAND = {
  name: "GradeSpot IT Solutions",
  short: "GradeSpot",
  tagline: "Training · Services · Automation",
  city: "Hyderabad",
} as const;
