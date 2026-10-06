/* ---------------------------------------------------------------------------
 * Content engine — drives every page.
 * Real GradeSpot content sourced from the live gsitssolutions.com site
 * (scraped 2026-10-06). Batches/dates remain [Pending] until confirmed.
 * ------------------------------------------------------------------------- */

export type CourseCategory =
  | "cloud"
  | "security"
  | "digital-marketing"
  | "networking";

export const CATEGORY_LABELS: Record<CourseCategory, string> = {
  cloud: "Cloud",
  security: "Cyber Security",
  "digital-marketing": "Digital Marketing",
  networking: "Networking",
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
  highlights: string[];
  duration: string;
  mode: string;
  level: string;
  certification: string;
  highlights: string[];
}

/* Real GradeSpot course catalog (Dilsukhnagar, Hyderabad) — sourced from gsitssolutions.com. */
export const COURSES: Course[] = [
  {
    slug: "ccna-200-301",
    title: "CCNA 200-301 – Cisco Certified Network Associate",
    short: "CCNA 200-301",
    category: "networking",
    tagline: "Cisco Certified Network Associate — hands-on networking fundamentals",
    who: "Students, IT freshers & working professionals — no prior experience required",
    outcome: "Cisco CCNA 200-301 certification and entry-level networking roles",
    topics: [
      "OSI & TCP/IP models, subnetting and IP addressing",
      "Configure and troubleshoot routers, switches, VLANs, IPv4/IPv6",
      "Network security fundamentals: AAA, authentication, encryption",
      "Automation & programmability, SDN basics",
      "Hands-on labs, Cisco Packet Tracer and real-world scenarios",
      "CCNA 200-301 exam prep with mock tests and study guides"
    ],
    highlights: [
      "OSI & TCP/IP models, subnetting and IP addressing",
      "Configure and troubleshoot routers, switches, VLANs, IPv4/IPv6",
      "Network security fundamentals: AAA, authentication, encryption",
      "Automation & programmability, SDN basics",
      "Hands-on labs, Cisco Packet Tracer and real-world scenarios",
      "CCNA 200-301 exam prep with mock tests and study guides"
    ],
    duration: "45 days",
    mode: "Online & Offline",
    level: "Beginner-friendly (no prior experience required)",
    certification: "Cisco CCNA 200-301",
  },
  {
    slug: "ccnp-350-401-encor",
    title: "CCNP 350-401 ENCOR – Cisco Certified Network Professional",
    short: "CCNP 350-401 ENCOR",
    category: "networking",
    tagline: "Cisco Certified Network Professional — enterprise networking",
    who: "Network engineers & CCNA holders — ready for enterprise networking",
    outcome: "Cisco CCNP Enterprise certification and senior network roles",
    topics: [
      "Core networking skills for IT infrastructure roles",
      "OSI & TCP/IP models, subnetting and IP addressing",
      "Configure and troubleshoot routers and switches",
      "Design and manage secure enterprise networks",
      "Hands-on labs and real-world networking scenarios",
      "Exam-oriented preparation with practice questions"
    ],
    highlights: [
      "Core networking skills for IT infrastructure roles",
      "OSI & TCP/IP models, subnetting and IP addressing",
      "Configure and troubleshoot routers and switches",
      "Design and manage secure enterprise networks",
      "Hands-on labs and real-world networking scenarios",
      "Exam-oriented preparation with practice questions"
    ],
    duration: "45 days",
    mode: "Online & Offline",
    level: "Intermediate",
    certification: "Cisco CCNP 350-401 ENCOR",
  },
  {
    slug: "comptia-network-plus",
    title: "CompTIA Network+ Training",
    short: "CompTIA Network+",
    category: "networking",
    tagline: "CompTIA Network+ (N10-008 & N10-009) — vendor-neutral networking",
    who: "Beginners & IT support staff — vendor-neutral networking foundation",
    outcome: "CompTIA Network+ certification and network support roles",
    topics: [
      "Network components, topologies and architectures",
      "OSI & TCP/IP models, media and cabling",
      "IP addressing, routing and network services",
      "WANs, wireless networks, cloud and datacenter",
      "Network security, hardening and attack mitigation"
    ],
    highlights: [
      "Network components, topologies and architectures",
      "OSI & TCP/IP models, media and cabling",
      "IP addressing, routing and network services",
      "WANs, wireless networks, cloud and datacenter",
      "Network security, hardening and attack mitigation"
    ],
    duration: "30 days",
    mode: "Online & Offline",
    level: "Beginner-friendly",
    certification: "CompTIA Network+ (N10-008 / N10-009)",
  },
  {
    slug: "comptia-security-plus",
    title: "CompTIA Security+ Training",
    short: "CompTIA Security+",
    category: "security",
    tagline: "CompTIA Security+ (SY0-601 & SY0-701) — core cybersecurity skills",
    who: "Beginners & IT staff moving into cybersecurity",
    outcome: "CompTIA Security+ certification and SOC / security analyst roles",
    topics: [
      "Security fundamentals: CIA triad, AAA, non-repudiation",
      "Threats, vulnerabilities and threat actor analysis",
      "Security control categories and gap analysis",
      "Zero Trust architecture concepts",
      "Hands-on learning with real-world scenarios",
      "Security+ SY0-601 & SY0-701 exam preparation"
    ],
    highlights: [
      "Security fundamentals: CIA triad, AAA, non-repudiation",
      "Threats, vulnerabilities and threat actor analysis",
      "Security control categories and gap analysis",
      "Zero Trust architecture concepts",
      "Hands-on learning with real-world scenarios",
      "Security+ SY0-601 & SY0-701 exam preparation"
    ],
    duration: "30 days",
    mode: "Online & Offline",
    level: "Beginner-friendly",
    certification: "CompTIA Security+ (SY0-601 / SY0-701)",
  },
  {
    slug: "comptia-pentest-plus",
    title: "CompTIA PenTest+ Training",
    short: "CompTIA PenTest+",
    category: "security",
    tagline: "CompTIA PenTest+ (PT0-002) — hands-on penetration testing",
    who: "Security learners with networking basics — hands-on hacking",
    outcome: "CompTIA PenTest+ certification and penetration tester roles",
    topics: [
      "Planning and scoping penetration test engagements",
      "Passive and active reconnaissance",
      "Vulnerability scanning with Nmap & Zenmap",
      "Social engineering, wireless and network attacks",
      "Application, cloud and mobile attacks",
      "Post-exploitation, reporting and remediation"
    ],
    highlights: [
      "Planning and scoping penetration test engagements",
      "Passive and active reconnaissance",
      "Vulnerability scanning with Nmap & Zenmap",
      "Social engineering, wireless and network attacks",
      "Application, cloud and mobile attacks",
      "Post-exploitation, reporting and remediation"
    ],
    duration: "60 hours",
    mode: "Online & Offline",
    level: "Intermediate",
    certification: "CompTIA PenTest+ (PT0-002)",
  },
  {
    slug: "soc-analyst",
    title: "SOC Analyst Training",
    short: "SOC Analyst",
    category: "security",
    tagline: "Practical SOC Analyst Training — threat detection, SIEM, incident response",
    who: "Beginners & career switchers — threat detection & SIEM operations",
    outcome: "Job-ready SOC Analyst (Tier 1/2/3) roles; CSA / SC-200 aligned",
    topics: [
      "Threat detection and incident response techniques",
      "SIEM tools: Splunk Enterprise Security, IBM QRadar, AlienVault",
      "Log analysis across Windows, Linux, Mac and firewalls",
      "Threat intelligence-driven SOC operations",
      "Incident response processes, SOPs and IRT collaboration",
      "Job-ready SOC Analyst (Tier 1/2/3) career preparation"
    ],
    highlights: [
      "Threat detection and incident response techniques",
      "SIEM tools: Splunk Enterprise Security, IBM QRadar, AlienVault",
      "Log analysis across Windows, Linux, Mac and firewalls",
      "Threat intelligence-driven SOC operations",
      "Incident response processes, SOPs and IRT collaboration",
      "Job-ready SOC Analyst (Tier 1/2/3) career preparation"
    ],
    duration: "90 days",
    mode: "Online & Offline",
    level: "Beginner-friendly",
    certification: "EC-Council CSA / SC-200 aligned",
  },
  {
    slug: "certified-ethical-hacker-ceh-v13",
    title: "Certified Ethical Hacking Training (CEH v13)",
    short: "CEH v13",
    category: "security",
    tagline: "Certified Ethical Hacker v13 — become job-ready in ethical hacking",
    who: "Beginners & security enthusiasts — ethical hacking from zero",
    outcome: "EC-Council CEH v13 certification and ethical hacker roles",
    topics: [
      "Ethical hacking concepts, framework and methodology",
      "Footprinting, reconnaissance and scanning networks",
      "System hacking and malware analysis",
      "Vulnerability analysis and cryptography",
      "AI-driven ethical hacking tools and techniques",
      "CEH v13 exam preparation with live labs"
    ],
    highlights: [
      "Ethical hacking concepts, framework and methodology",
      "Footprinting, reconnaissance and scanning networks",
      "System hacking and malware analysis",
      "Vulnerability analysis and cryptography",
      "AI-driven ethical hacking tools and techniques",
      "CEH v13 exam preparation with live labs"
    ],
    duration: "45 days",
    mode: "Online & Offline",
    level: "Beginner-friendly",
    certification: "EC-Council CEH v13",
  },
  {
    slug: "microsoft-azure-fundamentals-az-900",
    title: "Microsoft Azure Fundamentals Training (AZ-900)",
    short: "Azure AZ-900",
    category: "cloud",
    tagline: "Microsoft Azure Fundamentals — start your cloud journey",
    who: "Beginners starting their cloud journey",
    outcome: "Microsoft AZ-900 certification and cloud support roles",
    topics: [
      "Core cloud computing concepts and Azure positioning",
      "Azure compute, storage, networking and databases",
      "Deploy and manage virtual machines",
      "Azure identity: Azure AD and role-based access control",
      "Monitor and optimize resources for performance and cost",
      "AZ-900 exam preparation"
    ],
    highlights: [
      "Core cloud computing concepts and Azure positioning",
      "Azure compute, storage, networking and databases",
      "Deploy and manage virtual machines",
      "Azure identity: Azure AD and role-based access control",
      "Monitor and optimize resources for performance and cost",
      "AZ-900 exam preparation"
    ],
    duration: "Contact us for the schedule",
    mode: "Online & Offline",
    level: "Beginner",
    certification: "Microsoft AZ-900",
  },
  {
    slug: "microsoft-azure-administrator-az-104",
    title: "Microsoft Azure Administrator Training (AZ-104)",
    short: "Azure AZ-104",
    category: "cloud",
    tagline: "Azure Administrator — manage and optimize Azure cloud services",
    who: "IT admins & AZ-900 holders — Azure administration",
    outcome: "Microsoft AZ-104 certification and Azure administrator roles",
    topics: [
      "Manage Azure AD objects: users, groups and RBAC",
      "Subscriptions and governance: Azure Policy, resource locks",
      "Administer virtual machines, networking and storage",
      "Identity and access management",
      "Monitoring, security and performance optimization",
      "AZ-104 exam preparation"
    ],
    highlights: [
      "Manage Azure AD objects: users, groups and RBAC",
      "Subscriptions and governance: Azure Policy, resource locks",
      "Administer virtual machines, networking and storage",
      "Identity and access management",
      "Monitoring, security and performance optimization",
      "AZ-104 exam preparation"
    ],
    duration: "Contact us for the schedule",
    mode: "Online & Offline",
    level: "Intermediate",
    certification: "Microsoft AZ-104",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Training",
    short: "Digital Marketing",
    category: "digital-marketing",
    tagline: "Master digital marketing in 45 days — hands-on and job-oriented",
    who: "Students, entrepreneurs & career switchers — 45-day job-oriented program",
    outcome: "Digital marketing executive roles and freelance opportunities",
    topics: [
      "Search engine optimization (SEO)",
      "Search engine marketing (SEM)",
      "Social media marketing (SMM)",
      "Content marketing and email marketing",
      "Marketing analytics and campaign optimization",
      "Hands-on projects with real campaigns"
    ],
    highlights: [
      "Search engine optimization (SEO)",
      "Search engine marketing (SEM)",
      "Social media marketing (SMM)",
      "Content marketing and email marketing",
      "Marketing analytics and campaign optimization",
      "Hands-on projects with real campaigns"
    ],
    duration: "45 days",
    mode: "Online & Offline",
    level: "Beginner",
    certification: "Course completion certificate",
  },
  {
    slug: "computer-hardware-and-networking",
    title: "Computer Hardware and Networking Training",
    short: "Hardware & Networking",
    category: "networking",
    tagline: "Computer Hardware & Networking",
    who: "Beginners — computer hardware and networking fundamentals",
    outcome: "Hardware & network support roles with practical lab skills",
    topics: [
      "Computer hardware fundamentals",
      "Networking essentials",
      "Hands-on practical labs",
      "Live classes with recorded videos",
      "Course completion certification",
      "Expert instruction"
    ],
    highlights: [
      "Computer hardware fundamentals",
      "Networking essentials",
      "Hands-on practical labs",
      "Live classes with recorded videos",
      "Course completion certification",
      "Expert instruction"
    ],
    duration: "Contact us for the schedule",
    mode: "Online & Offline",
    level: "Beginner",
    certification: "Course completion certificate",
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
      "Professional IT training programs for corporates and students across hardware, networking, cybersecurity, cloud computing, digital marketing and more.",
    offerings: [
      "Online & offline batches",
      "Hands-on labs",
      "Certification preparation",
      "Career guidance and placement assistance",
    ],
  },
  {
    slug: "internships",
    title: "Internships",
    summary:
      "Internship programs officially approved by AICTE, offering exceptional learning opportunities and industry exposure.",
    offerings: ["AICTE-approved", "Hands-on industry exposure", "Mentorship"],
  },
  {
    slug: "industrial-trainings",
    title: "Industrial Trainings",
    summary:
      "Practical training programs aligned to industry needs for students and working professionals.",
    offerings: [
      "Practical industry-aligned curriculum",
      "Expert instructors",
    ],
  },
  {
    slug: "college-workshops",
    title: "College Workshops",
    summary: "Technical workshops conducted for college students.",
    offerings: ["Hands-on sessions", "Conducted at colleges"],
  },
  {
    slug: "cybersecurity-services",
    title: "Cybersecurity Services",
    summary:
      "Cybersecurity solutions for diverse organizations, addressing security needs with expertise and precision.",
    offerings: [
      "Vulnerability assessment",
      "Security architecture design",
      "Threat monitoring",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "Cost-effective solutions for premium web designs, featuring aesthetically pleasing themes.",
    offerings: ["Premium web designs", "Aesthetically pleasing themes"],
  },
  {
    slug: "digital-marketing-solutions",
    title: "Digital Marketing Solutions",
    summary:
      "Cost-effective digital marketing services to enhance online presence and business performance.",
    offerings: ["SEO", "Social media marketing", "Online advertising"],
  },
  {
    slug: "network-infrastructure-building",
    title: "Network Infrastructure Building",
    summary:
      "Efficient network infrastructure building services for businesses.",
    offerings: [],
  },
  {
    slug: "logo-designing",
    title: "Logo Designing",
    summary:
      "Creative logo designing services that leave a lasting impression.",
    offerings: [],
  },
  {
    slug: "us-it-staffing",
    title: "US IT Staffing",
    summary: "IT staffing services for US requirements.",
    offerings: [],
  },
  {
    slug: "domestic-consultancy",
    title: "Domestic Consultancy",
    summary: "Consultancy services for domestic (India) opportunities.",
    offerings: [],
  },
  {
    slug: "abroad-consultancy",
    title: "Abroad Consultancy",
    summary: "Consultancy services for overseas opportunities.",
    offerings: [],
  },
];

export interface InstituteProduct {
  slug: string;
  name: string;
  tag: string;
  description: string;
  points: string[];
}

/* Institute automation products (Axon) — populated when the product line launches. */
export const PRODUCTS: InstituteProduct[] = [];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "What training programs do you offer?",
    a: "Our organization offers an array of professional training programs for both corporates and students, ranging from computer hardware, networking, cybersecurity, cloud computing, digital marketing, data science and many more. Our approach is geared towards practical skills and knowledge, with expert instructors offering individualized attention and support.",
  },
  {
    q: "What services do you offer?",
    a: "We offer top-quality IT trainings, expert web development, robust cybersecurity solutions, innovative digital marketing strategies, efficient network infrastructure building, creative logo designing and many more — each tailored to your requirements and adhering to high industry standards.",
  },
  {
    q: "What's the best way to get in touch with your team?",
    a: "Reach us by phone at +91 91826 54056, or by email at info@gsitssolutions.com. You can also visit our office at 16-126, 2nd Floor, Near Sai Baba Temple, Road No.1, Sri Krishna Nagar, Dilsukhnagar, Hyderabad, Telangana - 500060.",
  },
  {
    q: "What is the CCNA 200-301 certification, and why is it important?",
    a: "CCNA 200-301 is Cisco's foundational certification for networking professionals. It validates your knowledge of networking fundamentals, IP connectivity, security, automation, and Cisco infrastructure — a globally recognized credential that opens doors to entry-level networking roles.",
  },
  {
    q: "Who can join the CCNA training program?",
    a: "Anyone interested in networking can join! It's ideal for students, IT freshers, tech enthusiasts, and working professionals looking to build or upgrade their networking skills. No prior experience is required.",
  },
  {
    q: "Is the training available online, offline, or both?",
    a: "The training is available in both online and offline modes. Online training offers flexibility and convenience, while offline training provides hands-on experience in a classroom environment.",
  },
  {
    q: "Will I get practical experience during the training?",
    a: "Yes! The program is designed to be hands-on. You'll work on live lab simulations, real-world networking scenarios, and Cisco Packet Tracer exercises to gain practical experience.",
  },
  {
    q: "Does the program help with CCNA exam preparation?",
    a: "Absolutely! The course is aligned with the latest Cisco CCNA 200-301 exam objectives. We also provide mock tests, exam tips, and guidance to ensure you're fully prepared to pass the certification.",
  },
  {
    q: "Are certifications available upon completion of SOC Analyst Training?",
    a: "Yes — certifications available include Certified Ethical Hacker (CEH), CompTIA Security+, Microsoft Certified: Security Operations Analyst Associate (SC-200), and many more. These validate the skills acquired during training and enhance credibility in cybersecurity.",
  },
  {
    q: "What does the SOC Analyst training program cover?",
    a: "The training program provides comprehensive coverage of Computer Networking, Vulnerability Management, and SOC (Security Operations Center) Analysis, in both online and offline modes.",
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
    role: "Founder & MD",
    bio: "",
  },
  {
    name: "Aravindh Mutthe",
    role: "Co-Founder",
    bio: "",
  },
  {
    name: "Prudhvi Sai Gariga",
    role: "Sr. Security Engineer & Technical Trainer",
    bio: "",
  },
];

export interface Testimonial {
  name: string;
  detail: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Naveen Bhaskari",
    detail: "SOC Analyst course; placed at Wipro",
    quote:
      "A big thanks to GradeSpot IT Solutions for their excellent SOC Analysis training! The practical approach and supportive trainers made all the difference. Their guidance helped me land a job at Wipro as a SOC Analyst. I highly recommend GradeSpot to anyone looking to advance their Cybersecurity career!",
  },
  {
    name: "Bhairisetti Yaswant Kumar",
    detail: "CCNA course",
    quote:
      "I recently completed my CCNA Course at GradeSpot IT Solutions and it was an amazing experience! The trainers were highly knowledgeable and made even the toughest concepts easy to understand. The hands-on labs and real-world examples helped me gain confidence in networking.",
  },
  {
    name: "Shiva Gottam",
    detail: "Azure Administrator AZ-104",
    quote:
      "I have taken the Azure Administrator training from GradeSpot IT Solutions recently, after the training I cleared my AZ-104 exam successfully. The training was practical with real time examples, and the certification preparation was also completed at the time of training. Thanks to Nikhil Sir and to the whole team of GSIT for such a good training.",
  },
  {
    name: "Arif Syed",
    detail: "Azure Administration AZ-104",
    quote:
      "I recently completed my Azure Administration course AZ 104 with Certification, thanks to the team and Nikhil for the training and maintaining great ambiance for the learners. Thanks again.",
  },
  {
    name: "M Vamsi",
    detail: "SOC training",
    quote:
      "I completed my SOC training at Gradespot IT Solutions and had a very positive experience. The training was comprehensive and the instructors were highly knowledgeable and supportive. They provided excellent guidance and resources that were crucial for my success in the SOC exam.",
  },
  {
    name: "Kammarapalli Pallavi",
    detail: "SOC training; earned EC-Council CSA",
    quote:
      "I recently completed the SOC training from GradeSpot IT Solutions, which provided a solid foundation in real-world security operations practices. The training was well-organized, practical, and instrumental in helping me earn my Certified SOC Analyst (CSA) certification from EC-Council.",
  },
  {
    name: "Rohith Kumar",
    detail: "AWS Cloud; AWS Solutions Architect",
    quote:
      "I am incredibly grateful for the guidance provided by GradeSpot IT Solutions Private Limited. Thanks to their expert instruction and support, I was able to learn AWS Cloud and achieve my AWS Solutions Architect certification. Their comprehensive curriculum and dedicated trainers made all the difference in my learning journey. Highly recommended!",
  },
  {
    name: "Naresh Chepuri",
    detail: "General training",
    quote:
      "A hygienic and quiet atmosphere to learn. Trainers are well-knowledgeable, friendly and cooperative. The teaching style is engaging and interesting. Study materials are helpful. A spacious lab with dedicated computers is available for practicing. Mock interviews and quizzes are conducted every week. One of the best places to learn.",
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
  { value: "1200", label: "Certified Learners" },
  { value: "9", label: "Years of Experience" },
  { value: "100%", label: "Student Satisfaction" },
];

export const CONTACT = {
  phone: "+91 91826 54056",
  phoneHref: "tel:+919182654056",
  phone2: "+91 88866 60597",
  phone2Href: "tel:+918886660597",
  email: "info@gsitssolutions.com",
  email2: "hr@gsitssolutions.com",
  whatsapp: "https://wa.me/919182654056",
  hours: "8:00 AM – 9:00 PM",
  address:
    "16-126, 2nd Floor, Near Sai Baba Temple, Road No.1, Sri Krishna Nagar, Dilsukhnagar, Hyderabad, Telangana - 500060",
  locality: "Dilsukhnagar, Hyderabad 500060",
} as const;

export const BRAND = {
  name: "GradeSpot IT Solutions",
  short: "GradeSpot",
  city: "Hyderabad",
  tagline: "Empower Your Business with Top-Notch IT Solutions & Training",
  experience: "9 years of experience",
  accreditations: ["ISO 9001:2015 Certified", "AICTE Internship Approved"],
} as const;

export const ABOUT = {
  story:
    "GradeSpot IT Solutions stands as a beacon of innovation and expertise in the ever-evolving landscape of technology solutions. With 9 years of experience, the company helps businesses elevate their digital presence while fortifying cybersecurity. Its corporate training programs and AICTE-approved internships empower professionals and students with practical, industry-aligned skills. GradeSpot also delivers web development, digital marketing and cybersecurity services tailored to modern businesses.",
  mission:
    "To deliver practical, industry-aligned IT training and services — from networking and cybersecurity to cloud and digital marketing — with expert instructors, hands-on labs, and individualized attention for every learner.",
  vision:
    "Global leadership in technology: empowering businesses and individuals through cutting-edge solutions and education.",
} as const;

export const WHY_CHOOSE: string[] = [
  "9 years of experience in IT solutions and training",
  "ISO 9001:2015 certified company",
  "AICTE-approved internship programs",
  "24/7 customer support",
  "Online & offline classes with live sessions, recorded videos and hands-on labs",
  "100% student satisfaction — 1,500+ happy learners, 1,200+ certified learners",
  "Expert instructors with individualized attention",
  "Career guidance: resume building, weekly mock interviews and quizzes, job placement assistance",
  "'Pay after you Pass' certification support with exam assistance",
];

export const CERTIFICATION_SUPPORT =
  "GradeSpot follows a 'Pay after you Pass' methodology — learners attain their desired certification first, with guidance and exam support throughout, including assistance with certification exams and discounted exam vouchers.";
