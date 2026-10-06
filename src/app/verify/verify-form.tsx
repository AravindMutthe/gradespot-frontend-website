"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Search } from "@carbon/icons-react";
import {
  CertificateLookupSchema,
  type CertificateLookup,
} from "@/lib/contracts";
import { Input, Button } from "@/components/atoms";

/**
 * Certificate verification lookup UI.
 * Validates the serial with the shared Zod contract; the lookup API
 * (/api/verify/[serial] on the Axon engine) lands in Phase 3 — until
 * then a valid serial shows the pending-integration state.
 */
export function VerifyForm() {
  const [serial, setSerial] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<CertificateLookup>();

  const onSubmit = (data: CertificateLookup) => {
    const parsed = CertificateLookupSchema.safeParse(data);
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      setError("serial", { message: issue.message });
      return;
    }
    // Phase 3: GET /api/verify/[serial] and render the verification record.
    setSerial(parsed.data.serial.toUpperCase());
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-4 sm:flex-row"
      >
        <Input
          id="serial"
          label="Certificate serial"
          placeholder="e.g. GS-2026-XXXX"
          autoComplete="off"
          className="flex-1"
          error={errors.serial?.message}
          {...register("serial")}
        />
        <div className="flex items-end">
          <Button type="submit">
            <Search size={16} />
            Verify
          </Button>
        </div>
      </form>

      {serial && (
        <div className="mt-8 rounded-card border border-line/20 bg-bg2 p-8 text-center">
          <p className="font-mono text-lg font-semibold text-ink">{serial}</p>
          <p className="mt-2 text-sm text-ink3">
            Verification service connects in Phase 3 — the lookup API on the
            Axon engine will return the student, course, and issue date for
            this serial. Nothing was checked yet.
          </p>
        </div>
      )}
    </div>
  );
}
