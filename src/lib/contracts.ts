import { z } from "zod";

/* ---------------------------------------------------------------------------
 * Shared contracts — single source of truth for data shapes, used by the
 * frontend forms now and the API routes / backend later (contract-first).
 *
 * Course slugs follow the RESEARCHED 6-course lineup (mock-data.ts).
 * ------------------------------------------------------------------------- */

/** Lead capture — used by the contact form today, /api/leads tomorrow.
 * courseInterest values are the researched GradeSpot course slugs. */
export const LeadSubmissionSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().trim().email("Enter a valid email address"),
  courseInterest: z.enum([
    "ceh",
    "soc-analyst",
    "ccna",
    "aws-devops",
    "web-development",
    "digital-marketing",
  ]),
  mode: z.enum(["offline", "online"]),
});
export type LeadSubmission = z.infer<typeof LeadSubmissionSchema>;

export const COURSE_INTEREST_LABELS: Record<
  LeadSubmission["courseInterest"],
  string
> = {
  ceh: "Certified Ethical Hacker (CEH)",
  "soc-analyst": "SOC Analyst",
  ccna: "CCNA — Networking Fundamentals",
  "aws-devops": "AWS + DevOps",
  "web-development": "Web Development",
  "digital-marketing": "Digital Marketing",
};

export const MODE_LABELS: Record<LeadSubmission["mode"], string> = {
  offline: "Classroom (Hyderabad)",
  online: "Online (live)",
};

/** "Get a Callback" modal — the single site-wide CTA (researched).
 * Phone normalization (strip 91/0 prefixes) happens before this schema. */
export const CallbackRequestSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name."),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number."),
  audience: z.enum(["student", "business", "institute"]),
  message: z.string().trim().max(500).optional(),
});
export type CallbackRequest = z.infer<typeof CallbackRequestSchema>;

export const AUDIENCE_LABELS: Record<CallbackRequest["audience"], string> = {
  student: "Student",
  business: "Business",
  institute: "Institute owner",
};

/** Normalize free-typed Indian mobile input to 10 digits (researched rule). */
export function normalizeIndianMobile(raw: string): string {
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return digits;
}

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
