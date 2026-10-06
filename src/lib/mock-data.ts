/* ---------------------------------------------------------------------------
 * Content engine — drives every page until real CMS/API content lands.
 *
 * Course lineup (6) is the RESEARCHED catalog from
 * workspace/user/files/Static_Website.html — who / outcome / topics are
 * copied from the research. Fee amounts are intentionally "to be confirmed":
 * the research rule is publish real fees at launch, never invent them.
 * Copy marked [Pending] is not final: replace with approved copy before
 * launch. Nothing here is lorem ipsum — all entries are structurally real.
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
  /** Researched: who the course is for. */
  who: string;
  /** Researched: where it leads (roles / outcomes). */
  outcome: string;
  /** Researched: syllabus topics. */
  topics: string[];
  /** Back-compat alias for topic lists rendered with check icons. */
  highlights: string[];
  duration: string;
  mode: string;
  level: string;
}

/* The researched 6-course lineup — replaces the pre-research 11-course list. */
export const COURSES: Course[] = [
  {
    slug: "ceh",
    title: "Certified Ethical Hacker (CEH)",
    short: "CEH",
    category: "security",
    tagline: "Offensive security training aligned to the CEH path.",
    who: "Students and IT professionals who want into offensive security — no prior hacking background needed, networking basics help.",
    outcome:
      "Junior penetration tester, security analyst and vulnerability-assessment roles; a portfolio of lab reports from live practice.",
    topics: [
      "Footprinting & reconnaissance",
      "Scanning networks & enumeration",
      "Vulnerability analysis",
      "Web application & session attacks",
      "Malware, sniffing & social engineering basics",
      "Reporting like a professional consultant",
    ],
    highlights: [
      "Footprinting & reconnaissance",
      "Scanning networks & enumeration",
      "Vulnerability analysis",
      "Web application & session attacks",
      "Malware, sniffing & social engineering basics",
      "Reporting like a professional consultant",
    ],
    duration: "[Pending: confirm duration]",
    mode: "Classroom / Live Online",
    level: "Intermediate",
  },
  {
    slug: "soc-analyst",
    title: "SOC Analyst",
    short: "SOC Analyst",
    category: "security",
    tagline: "Security operations — the highest-volume entry door into cyber hiring.",
    who: "Freshers and support engineers aiming at security operations — the highest-volume entry door into cybersecurity hiring.",
    outcome:
      "SOC L1 analyst roles: triaging alerts, escalating incidents, and writing investigation notes a L2 would accept.",
    topics: [
      "How a SOC actually runs, shift to shift",
      "SIEM fundamentals & log analysis",
      "Alert triage and incident lifecycle",
      "Threat intelligence basics",
      "MITRE ATT&CK in daily work",
      "Ticketing, SLAs and escalation craft",
    ],
    highlights: [
      "How a SOC actually runs, shift to shift",
      "SIEM fundamentals & log analysis",
      "Alert triage and incident lifecycle",
      "Threat intelligence basics",
      "MITRE ATT&CK in daily work",
      "Ticketing, SLAs and escalation craft",
    ],
    duration: "[Pending: confirm duration]",
    mode: "Classroom / Live Online",
    level: "Beginner",
  },
  {
    slug: "ccna",
    title: "CCNA — Networking Fundamentals",
    short: "CCNA",
    category: "networking",
    tagline: "The networking foundation every other course quietly assumes.",
    who: "Anyone starting in IT infrastructure, support or networking — the foundation every other course quietly assumes.",
    outcome:
      "Network support and NOC roles, plus the base for CEH, SOC and cloud tracks.",
    topics: [
      "Routing & switching essentials",
      "IP addressing, subnetting & services",
      "Network security fundamentals",
      "Wireless basics",
      "Automation & programmability intro",
      "Troubleshooting real lab topologies",
    ],
    highlights: [
      "Routing & switching essentials",
      "IP addressing, subnetting & services",
      "Network security fundamentals",
      "Wireless basics",
      "Automation & programmability intro",
      "Troubleshooting real lab topologies",
    ],
    duration: "[Pending: confirm duration]",
    mode: "Classroom / Live Online",
    level: "Beginner",
  },
  {
    slug: "aws-devops",
    title: "AWS + DevOps",
    short: "AWS + DevOps",
    category: "cloud",
    tagline: "Deploy, automate and monitor on AWS with a pipeline you built yourself.",
    who: "Linux-comfortable learners and admins moving to cloud roles; pairs with the institute's own cloud practice.",
    outcome:
      "Cloud/DevOps junior roles: deploy, automate and monitor on AWS with a pipeline you built yourself.",
    topics: [
      "AWS core services, hands-on",
      "Linux & shell for cloud work",
      "CI/CD pipelines end to end",
      "Terraform infrastructure as code",
      "Docker & Kubernetes essentials",
      "Monitoring, logging & cost sense",
    ],
    highlights: [
      "AWS core services, hands-on",
      "Linux & shell for cloud work",
      "CI/CD pipelines end to end",
      "Terraform infrastructure as code",
      "Docker & Kubernetes essentials",
      "Monitoring, logging & cost sense",
    ],
    duration: "[Pending: confirm duration]",
    mode: "Classroom / Live Online",
    level: "Intermediate",
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Web Dev",
    category: "web",
    tagline: "Build and ship real websites — including the kind this site is made of.",
    who: "Beginners who want to build and ship real websites — including the kind this very site is made of.",
    outcome:
      "Junior web developer roles and freelance-ready skills: build, deploy and maintain production sites.",
    topics: [
      "HTML, CSS & responsive layouts",
      "JavaScript that actually ships",
      "React fundamentals",
      "APIs & working with data",
      "Deployment, domains & SSL",
      "Performance & basic SEO/AEO",
    ],
    highlights: [
      "HTML, CSS & responsive layouts",
      "JavaScript that actually ships",
      "React fundamentals",
      "APIs & working with data",
      "Deployment, domains & SSL",
      "Performance & basic SEO/AEO",
    ],
    duration: "[Pending: confirm duration]",
    mode: "Classroom / Live Online",
    level: "Beginner",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Digital Marketing",
    category: "digital-marketing",
    tagline: "Enquiries, not just likes — marketing for local businesses.",
    who: "Students, freelancers and local-business owners who want enquiries, not just likes.",
    outcome:
      "Marketing executive and freelance roles; a live campaign portfolio, not just certificates.",
    topics: [
      "SEO that survives algorithm updates",
      "AEO — getting cited by AI answers",
      "Google & Meta ads with real budgets",
      "Analytics & reading the numbers",
      "WhatsApp marketing funnels",
      "Content that converts locally",
    ],
    highlights: [
      "SEO that survives algorithm updates",
      "AEO — getting cited by AI answers",
      "Google & Meta ads with real budgets",
      "Analytics & reading the numbers",
      "WhatsApp marketing funnels",
      "Content that converts locally",
    ],
    duration: "[Pending: confirm duration]",
    mode: "Classroom / Live Online",
    level: "Beginner",
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

/* Researched services — sold inside the Businesses track, quote-gated. */
export const SERVICES: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "Business websites and web apps that load fast on Indian mobile networks and are built to be found — by Google and by AI answers.",
    offerings: [
      "Business & marketing websites",
      "Custom web applications",
      "E-commerce builds [Pending: confirm scope]",
      "Maintenance & support plans [Pending: confirm scope]",
    ],
  },
  {
    slug: "cyber-security",
    title: "Cybersecurity Services",
    summary:
      "Vulnerability assessment and security hardening for small and mid-size businesses, delivered by the same people who teach it.",
    offerings: [
      "Vulnerability assessment [Pending: confirm scope]",
      "Website security hardening",
      "Security awareness training",
      "Best-practice consulting",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary:
      "SEO, ads and WhatsApp funnels for local businesses that live on enquiries — clinics, institutes, dealers, services.",
    offerings: [
      "Search engine optimization (SEO)",
      "Google & Meta ads [Pending: confirm scope]",
      "WhatsApp marketing funnels",
      "Content & branding support",
    ],
  },
  {
    slug: "corporate-training",
    title: "Corporate Training",
    summary:
      "Team upskilling in cybersecurity, cloud and networking — at your office or ours, quoted per batch.",
    offerings: [
      "Customized team batches",
      "On-site & remote delivery",
      "Skill-gap assessment [Pending: confirm format]",
      "Post-training support [Pending: confirm format]",
    ],
  },
];

export interface InstituteProduct {
  slug: string;
  name: string;
  tag: string;
  description: string;
  points: string[];
}

/* Researched institute-automation products — the bundle nobody local sells. */
export const PRODUCTS: InstituteProduct[] = [
  {
    slug: "whatsapp-lead-automation",
    name: "WhatsApp Lead Automation",
    tag: "Product 1 · start here",
    description:
      "Designed to answer every enquiry in about 4 seconds, 24×7 — course details, fees, counsellor handoff, follow-up nudges. The home-page chat is a prototype of exactly this.",
    points: [
      "Instant replies on your existing number",
      "Counsellor handoff with full chat context",
      "Follow-ups for the ones who go quiet",
    ],
  },
  {
    slug: "video-lms",
    name: "Video LMS",
    tag: "Product 2 · upsell",
    description:
      "Your recorded courses behind per-student watermarking, so one leaked login doesn't become everyone's free course.",
    points: [
      "Dynamic per-student watermarking",
      "Device & login controls",
      "Batch-wise course access",
    ],
  },
  {
    slug: "pxe-labs",
    name: "Lab Setup (PXE Labs)",
    tag: "Product 3 · differentiator",
    description:
      "Crash-proof Linux thin-client labs: students boot from the network, break things freely, and the room resets itself for the next batch.",
    points: [
      "Old PCs become lab terminals",
      "One image to maintain, not thirty",
      "Resets clean between batches",
    ],
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "Where are you located?",
    a: "16-126 2nd Floor, Road No.1, Sri Krishna Nagar, Dilsukhnagar, Hyderabad 500060. Office hours: 8:00 AM – 9:00 PM. Classroom and live-online batches both available.",
  },
  {
    q: "Will course fees really be published?",
    a: "Yes — that's the wedge. The local pattern hides pricing behind a callback; the researched global pattern is consumer prices public, enterprise quotes gated. Until launch, fee slots read 'to be confirmed' — nothing invented.",
  },
  {
    q: "Do you offer online batches?",
    a: "Yes — every course runs in both classroom (Hyderabad) and live-online modes.",
  },
  {
    q: "Are the courses suitable for beginners?",
    a: "Most courses start from zero assumed knowledge; each course page lists its level. Ask for a callback if you are unsure where to start.",
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
  {
    q: "We run a small institute. What do we actually get?",
    a: "Start with the WhatsApp lead engine: enquiries answered in seconds, 24×7, with counsellor handoff. Add the watermarked video LMS and PXE lab setup when you're ready. Pricing is setup + monthly.",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Nikhil Duth D",
    role: "Founder & Managing Director",
    bio: "[Pending: founder bio — background, experience, vision.]",
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
    detail: "CEH batch",
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
  { value: "6", label: "Job-focused courses" },
  { value: "4 sec", label: "Target enquiry reply time" },
  { value: "3", label: "Institute automation products" },
  { value: "1", label: "Callback button, everywhere" },
];

/* Real contact details — researched from Sample_Landing_Page_2.html. */
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
