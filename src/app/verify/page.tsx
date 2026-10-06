import type { Metadata } from "next";
import { Topbar, Navbar, Footer } from "@/components/organisms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { VerifyForm } from "./verify-form";

export const metadata: Metadata = {
  title: "Certificate Verification — GradeSpot IT Solutions",
  description:
    "Verify the authenticity of a GradeSpot certificate by serial number.",
};

export default function VerifyPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-surface-light">
        <div className="container-brand max-w-3xl py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Student Certifications
          </p>
          <h1 className="mt-2 text-4xl font-bold text-dark">
            Certificate verification
          </h1>
          <p className="mt-4 text-lg text-muted">
            Enter the serial printed on your GradeSpot certificate to check
            its authenticity.
          </p>
          <div className="mt-8">
            <VerifyForm />
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </>
  );
}
