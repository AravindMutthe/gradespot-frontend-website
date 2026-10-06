import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Archivo, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { CallbackModalProvider } from "@/components/organisms/CallbackModal";

/* Researched type system (Static_Website.html / Sample_Landing_Page_2.html):
 * headings -> Archivo 500/600/700/800, body -> Manrope 400/500/600/700,
 * mono -> IBM Plex Mono 400/500. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GradeSpot IT Solutions",
  description:
    "GradeSpot IT Solutions — cybersecurity training, IT services and institute automation, Hyderabad. Get a callback in seconds.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${manrope.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CallbackModalProvider>{children}</CallbackModalProvider>
      </body>
    </html>
  );
}
