import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaya — Peruvian Maras Salt",
  description:
    "Harvested by hand from the ancient salt ponds of Maras in Peru’s Sacred Valley.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${cormorant.variable} antialiased bg-[var(--color-bone)] text-[var(--color-charcoal)]`}
      >
        <div className="min-h-screen bg-[var(--color-bone)] text-[var(--color-charcoal)]">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
