import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { AuthProvider } from "@/lib/auth/session";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roundtable AI — Autonomous Live Interview Platform",
  description:
    "Next-generation conversational AI interview platform combining real-time vocal screening with comprehensive candidate rubrics and human hiring panel debriefs.",
  keywords: ["AI interview", "autonomous interviewer", "technical interview", "candidate screening", "Roundtable AI"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-brand-500 selection:text-white">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
