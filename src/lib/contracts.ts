import { z } from "zod";

/* ---------------------------------------------------------------------------
 * Shared contracts — single source of truth for data shapes, used by the
 * frontend forms now and the API routes / backend later (contract-first).
 * ------------------------------------------------------------------------- */

/** Lead capture — used by the contact form today, /api/leads tomorrow.
 * courseInterest values are the real GradeSpot course slugs. */
export const LeadSubmissionSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().trim().email("Enter a valid email address"),
  courseInterest: z.enum([
    "aws",
    "azure",
    "devops",
    "python",
    "java",
    "cyber-security-ceh",
    "web-development",
    "digital-marketing",
    "bank-po",
    "ssc",
    "ccna",
  ]),
  mode: z.enum(["offline", "online"]),
});
export type LeadSubmission = z.infer<typeof LeadSubmissionSchema>;

export const COURSE_INTEREST_LABELS: Record<
  LeadSubmission["courseInterest"],
  string
> = {
  aws: "AWS Cloud Computing",
  azure: "Microsoft Azure",
  devops: "DevOps Engineering",
  python: "Python Programming",
  java: "Java Programming",
  "cyber-security-ceh": "Cyber Security (CEH)",
  "web-development": "Web Development",
  "digital-marketing": "Digital Marketing",
  "bank-po": "Bank PO Exam Coaching",
  ssc: "SSC Exam Coaching",
  ccna: "CCNA Networking",
};

export const MODE_LABELS: Record<LeadSubmission["mode"], string> = {
  offline: "Classroom (Hyderabad)",
  online: "Online (live)",
};

/** Certificate verification lookup — /verify page today, lookup API later. */
export const CertificateLookupSchema = z.object({
  serial: z
    .string()
    .trim()
    .min(4, "Enter a valid certificate serial (e.g. GS-2026-XXXX)"),
});
export type CertificateLookup = z.infer<typeof CertificateLookupSchema>;

/** Chat message shape — widget shell today, /api/chat streaming later. */
export const ChatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1),
});
export type ChatMessage = z.infer<typeof ChatMessageSchema>;
