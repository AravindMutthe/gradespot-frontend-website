/* ---------------------------------------------------------------------------
 * Mock content engine — drives every page until real CMS/API content lands.
 * Copy marked [Pending] is not final: replace with approved copy before
 * launch. Nothing here is lorem ipsum — all entries are structurally real.
 * ------------------------------------------------------------------------- */

export type CourseCategory =
  | "cloud"
  | "devops"
  | "programming"
  | "security"
  | "web"
  | "digital-marketing"
  | "competitive-exams";

export const CATEGORY_LABELS: Record<CourseCategory, string> = {
  cloud: "Cloud",
  devops: "DevOps",
  programming: "Programming",
  security: "Cyber Security",
  web: "Web Development",
  "digital-marketing": "Digital Marketing",
  "competitive-exams": "Competitive Exams",
};

export interface Course {
  slug: string;
  title: string;
  category: CourseCategory;
  tagline: string;
  duration: string;
  mode: string;
  level: string;
  highlights: string[];
}

/* Real GradeSpot course catalog (Hyderabad / Dilsukhnagar). */
export const COURSES: Course[] = [
  {
    slug: "aws",
    title: "AWS Cloud Computing",
    category: "cloud",
    tagline:
      "Amazon Web Services from core concepts to architect-level skills.",
    duration: "[Pending: confirm duration]",
    mode: "Offline / Online",
    level: "Beginner",
    highlights: [
      "EC2, S3, VPC, IAM fundamentals",
      "Databases, load balancing & scaling",
      "Hands-on labs on real AWS accounts",
      "[Pending: certification alignment]",
    ],
  },
  {
    slug: "azure",
    title: "Microsoft Azure",
    category: "cloud",
    tagline: "Microsoft's cloud platform — administration and solutions.",
    duration: "[Pending: confirm duration]",
    mode: "Offline / Online",
    level: "Beginner",
    highlights: [
      "Azure VMs, storage & networking",
      "Identity and access management",
      "Hands-on labs",
      "[Pending: certification alignment]",
    ],
  },
  {
    slug: "devops",
    title: "DevOps Engineering",
    category: "devops",
    tagline:
      "CI/CD pipelines, containers, and infrastructure as code — the full DevOps toolkit.",
    duration: "[Pending: confirm duration]",
    mode: "Offline / Online",
    level: "Intermediate",
    highlights: [
      "Git, Jenkins & GitHub Actions",
      "Docker & Kubernetes",
      "Terraform & Ansible basics",
      "Monitoring and best practices",
    ],
  },
  {
    slug: "python",
    title: "Python Programming",
    category: "programming",
    tagline:
      "The language behind automation, backends and AI — from zero to confident.",
    duration: "[Pending: confirm duration]",
    mode: "Offline / Online",
    level: "Beginner",
    highlights: [
      "Core Python & OOP",
      "Files, APIs & data handling",
      "Automation scripts",
      "Guided mini projects",
    ],
  },
  {
    slug: "java",
    title: "Java Programming",
    category: "programming",
    tagline:
      "Core and advanced Java — the backbone of enterprise software jobs.",
    duration: "[Pending: confirm duration]",
    mode: "Offline / Online",
    level: "Beginner",
    highlights: [
      "Core Java & OOP",
      "Collections & exception handling",
      "JDBC & database connectivity",
      "[Pending: frameworks coverage]",
    ],
  },
  {
    slug: "cyber-security-ceh",
    title: "Cyber Security (CEH)",
    category: "security",
    tagline:
      "Offensive security training aligned to the Certified Ethical Hacker path.",
    duration: "[Pending: confirm duration]",
    mode: "Offline / Online",
    level: "Intermediate",
    highlights: [
      "Footprinting & reconnaissance",
      "System and web-application hacking",
      "Hands-on lab exercises",
      "CEH exam preparation",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "web",
    tagline:
      "From HTML/CSS to modern frameworks and deployment — build and ship real projects.",
    duration: "[Pending: confirm duration]",
    mode: "Offline / Online",
    level: "Beginner",
    highlights: [
      "HTML, CSS, JavaScript",
      "React & modern tooling",
      "Backend basics & databases",
      "Portfolio project + deployment",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "digital-marketing",
    tagline:
      "SEO, social media, and paid ads — market anything, including yourself.",
    duration: "[Pending: confirm duration]",
    mode: "Offline / Online",
    level: "Beginner",
    highlights: [
      "Search engine optimization (SEO)",
      "Social media marketing",
      "Google & Meta ads",
      "Analytics and reporting",
    ],
  },
  {
    slug: "bank-po",
    title: "Bank PO Exam Coaching",
    category: "competitive-exams",
    tagline:
      "Probationary Officer exams (IBPS / SBI) — quant, reasoning, English, GA.",
    duration: "[Pending: confirm duration]",
    mode: "Offline / Online",
    level: "Beginner",
    highlights: [
      "Quantitative aptitude shortcuts",
      "Reasoning & puzzles",
      "English & general awareness",
      "Mock tests & interview prep [Pending: confirm]",
    ],
  },
  {
    slug: "ssc",
    title: "SSC Exam Coaching",
    category: "competitive-exams",
    tagline: "SSC CGL / CHSL preparation with structured mocks and revision.",
    duration: "[Pending: confirm duration]",
    mode: "Offline / Online",
    level: "Beginner",
    highlights: [
      "Quant, reasoning & English",
      "General studies coverage",
      "Regular mock tests",
      "[Pending: tier-wise strategy]",
    ],
  },
  {
    slug: "ccna",
    title: "CCNA Networking",
    category: "security",
    tagline:
      "Cisco Certified Network Associate — routing, switching, and network security basics.",
    duration: "[Pending: confirm duration]",
    mode: "Offline / Online",
    level: "Intermediate",
    highlights: [
      "Routing & switching fundamentals",
      "IP addressing & subnetting",
      "Network security basics",
      "CCNA exam preparation",
    ],
  },
];

export interface Batch {
  courseSlug: string;
  startDate: string;
  timing: string;
  mode: string;
  status: string;
}

/* Upcoming batches — dates/timings to be confirmed with the team. */
export const BATCHES: Batch[] = COURSES.map((c) => ({
  courseSlug: c.slug,
  startDate: "[Pending: next batch date]",
  timing: "[Pending: batch timing]",
  mode: c.mode,
  status: "Admissions open",
}));

export interface Service {
  slug: string;
  title: string;
  summary: string;
  offerings: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "corporate-trainings",
    title: "Corporate Trainings",
    summary:
      "Upskilling programs built for teams — delivered on-site or remote, tuned to your stack.",
    offerings: [
      "Customized team batches",
      "On-site & remote delivery",
      "Skill-gap assessment [Pending: confirm format]",
      "Post-training support [Pending: confirm format]",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "Business websites and web apps — designed, built, and deployed end to end.",
    offerings: [
      "Business & marketing websites",
      "Custom web applications",
      "E-commerce builds [Pending: confirm scope]",
      "Maintenance & support plans [Pending: confirm scope]",
    ],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    summary: "Practical security services for small and mid-size businesses.",
    offerings: [
      "Security awareness training",
      "Vulnerability assessment [Pending: confirm scope]",
      "Website security hardening",
      "Best-practice consulting",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary:
      "Get found and get leads — search, social, and content that compounds.",
    offerings: [
      "Search engine optimization (SEO)",
      "Social media management [Pending: confirm scope]",
      "Google & Meta ads [Pending: confirm scope]",
      "Content & branding support",
    ],
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "Where is GradeSpot located?",
    a: "Dilsukhnagar, Hyderabad. [Pending: confirm the full street address for the contact page.]",
  },
  {
    q: "Do you offer online batches?",
    a: "Yes — every course runs in both classroom (Hyderabad) and live-online modes. Choose your mode on the enquiry form.",
  },
  {
    q: "Are the courses suitable for beginners?",
    a: "Most courses start from zero assumed knowledge; each course page lists its level. Talk to a counsellor if you are unsure where to start.",
  },
  {
    q: "Do you provide placement assistance?",
    a: "[Pending: confirm the exact placement-support wording with the team before publishing.]",
  },
  {
    q: "How do I verify my certificate?",
    a: "Use the Certificate Verification page and enter the serial printed on your certificate (format GS-2026-XXXX).",
  },
  {
    q: "What are the batch timings?",
    a: "See the Batches page for the upcoming schedule. [Pending: confirm current batch schedule with the team.]",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "[Pending: founder name]",
    role: "Founder & Managing Director",
    bio: "[Pending: founder bio — background, experience, vision.]",
  },
  {
    name: "[Pending: co-founder name]",
    role: "Co-Founder",
    bio: "[Pending: co-founder bio.]",
  },
  {
    name: "[Pending: trainer name]",
    role: "Technical Trainer — Cyber Security",
    bio: "[Pending: trainer bio and credentials.]",
  },
  {
    name: "[Pending: trainer name]",
    role: "Technical Trainer — Web Development",
    bio: "[Pending: trainer bio and credentials.]",
  },
];

export interface Testimonial {
  name: string;
  detail: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "[Pending: student name]",
    detail: "AWS batch",
    quote:
      "[Pending: collect the first real student testimonial before launch.]",
  },
  {
    name: "[Pending: student name]",
    detail: "Web Development batch",
    quote:
      "[Pending: collect the first real student testimonial before launch.]",
  },
  {
    name: "[Pending: client name]",
    detail: "Corporate training client",
    quote: "[Pending: collect the first real client testimonial before launch.]",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-start-cyber-security-career",
    title: "How to start a cyber security career in 2026",
    excerpt:
      "[Pending: article body — roadmap from zero to first security role.]",
    date: "[Pending: publish date]",
  },
  {
    slug: "web-development-roadmap-beginners",
    title: "Web development roadmap for absolute beginners",
    excerpt: "[Pending: article body — HTML to deployment, step by step.]",
    date: "[Pending: publish date]",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "1500+", label: "Happy Learners" },
  { value: "9+", label: "Years of Experience" },
  { value: "50+", label: "Corporate Batches [Pending: confirm]" },
  { value: "20+", label: "Expert Trainers [Pending: confirm]" },
];

export const CONTACT = {
  phone: "+91 88866 60597",
  phoneHref: "tel:+918886660597",
  email: "info@gsitssolutions.com",
  hours: "8:00 AM – 9:00 PM",
  address: "[Pending: full street address, Dilsukhnagar, Hyderabad]",
} as const;

export const BRAND = {
  name: "GradeSpot IT Solutions",
  city: "Hyderabad",
  experience: "9 years of experience",
  accreditations: ["ISO 9001:2015 Certified", "AICTE Internship Approved"],
} as const;
