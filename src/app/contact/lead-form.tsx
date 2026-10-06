"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  LeadSubmissionSchema,
  COURSE_INTEREST_LABELS,
  MODE_LABELS,
  type LeadSubmission,
} from "@/lib/contracts";
import { Input, Button } from "@/components/atoms";
import { CheckmarkFilled } from "@carbon/icons-react";

/**
 * Lead capture form — validated with the shared Zod contract
 * (lib/contracts.ts). Submission pipeline (Supabase + WhatsApp alerts)
 * lands in Phase 3; until then a validated submission shows a
 * confirmation state and nothing leaves the browser.
 */
export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LeadSubmission>();

  const onSubmit = (data: LeadSubmission) => {
    const parsed = LeadSubmissionSchema.safeParse(data);
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof LeadSubmission;
        setError(field, { message: issue.message });
      }
      return;
    }
    // Phase 3: POST parsed.data to /api/leads (Supabase + n8n webhook).
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-card border border-brand/30 bg-brand/5 p-8 text-center">
        <CheckmarkFilled size={32} className="mx-auto text-brand-ink" />
        <h3 className="mt-3 text-xl font-bold text-ink">Enquiry received</h3>
        <p className="mt-2 text-sm text-ink3">
          Our counsellor will call you shortly. (Lead pipeline wiring lands
          in Phase 3 — this submission was validated locally and nothing was
          sent yet.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Input
        id="fullName"
        label="Full name"
        placeholder="Your name"
        autoComplete="name"
        error={errors.fullName?.message}
        {...register("fullName")}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="phone"
          label="Mobile number"
          placeholder="10-digit mobile"
          inputMode="numeric"
          autoComplete="tel"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>
      <div>
        <label
          htmlFor="courseInterest"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          I&apos;m interested in
        </label>
        <select
          id="courseInterest"
          className="w-full rounded-button border border-line/40 bg-panel px-4 py-2.5 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          {...register("courseInterest")}
        >
          {(
            Object.entries(COURSE_INTEREST_LABELS) as [
              LeadSubmission["courseInterest"],
              string,
            ][]
          ).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {errors.courseInterest && (
          <p className="mt-1 text-sm text-red-600">
            {errors.courseInterest.message}
          </p>
        )}
      </div>
      <fieldset>
        <legend className="mb-1.5 text-sm font-medium text-ink">
          Preferred mode
        </legend>
        <div className="flex gap-4">
          {(
            Object.entries(MODE_LABELS) as [LeadSubmission["mode"], string][]
          ).map(([value, label]) => (
            <label
              key={value}
              className="inline-flex items-center gap-2 text-sm text-ink"
            >
              <input
                type="radio"
                value={value}
                defaultChecked={value === "offline"}
                {...register("mode")}
                className="h-4 w-4 accent-brand"
              />
              {label}
            </label>
          ))}
        </div>
        {errors.mode && (
          <p className="mt-1 text-sm text-red-600">{errors.mode.message}</p>
        )}
      </fieldset>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Request a Callback"}
      </Button>
      <p className="text-xs text-ink3">
        By submitting, you agree to be contacted about GradeSpot courses and
        services.
      </p>
    </form>
  );
}
