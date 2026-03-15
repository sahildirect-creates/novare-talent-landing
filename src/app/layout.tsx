import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Providers from "@/components/providers/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Novare Talent — India's Elite Talent Network",
  description:
    "We help companies hire from India's top 1% institutes. Curated talent from IITs, IIMs, and more.",
  keywords: [
    "hiring",
    "IIT",
    "IIM",
    "talent",
    "recruitment",
    "India",
    "startup hiring",
    "curated talent",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
        <div className="grain-overlay" />
      </body>
    </html>
  );
}
