import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// IBM Carbon Design System — full component stylesheet.
// Imported AFTER globals.css (Tailwind) so Carbon's BEM-namespaced
// component classes (.cds--*) win any cascade ties. Carbon class names
// never collide with Tailwind utilities; icons come from
// @carbon/icons-react as React SVG components (no CSS involved).
import "@carbon/styles/css/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GradeSpot IT Solutions",
  description:
    "GradeSpot IT Solutions — cybersecurity training and IT services, Hyderabad. Website scaffold: Next.js 15 + Tailwind CSS v4 + IBM Carbon.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
