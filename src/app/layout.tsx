import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollToTop from "@/components/ui/ScrollToTop";
import PreloaderDecryption from "@/components/ui/PreloaderDecryption";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preta Systems - The Zero-Trust Validation Layer",
  description: "Run 'Fake Door' tests on production without touching the codebase. 100% Isolated. PCI-DSS v4.0 Compliant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} antialiased bg-deep-void text-white selection:bg-neon-green/30 selection:text-neon-green`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <PreloaderDecryption />
          {children}
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
