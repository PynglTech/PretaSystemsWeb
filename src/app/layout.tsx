import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollToTop from "@/components/ui/ScrollToTop";
import PreloaderDecryption from "@/components/ui/PreloaderDecryption";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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

const siteUrl = "https://pretasystems.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Preta Systems - The Zero-Trust Validation Layer",
    template: "%s | Preta Systems",
  },
  description: "Preta Systems is a zero-trust runtime infrastructure layer that lets Product Managers run 'Fake Door' tests directly on production — inject native buttons, modals, and banners without touching the codebase. 100% isolated, PCI-DSS v4.0 compliant.",
  keywords: [
    "Preta Systems",
    "Preta",
    "zero-trust validation",
    "runtime infrastructure",
    "fake door testing",
    "no-code UI validation",
    "production experimentation",
    "feature demand validation",
    "Ghost SDK",
    "enterprise governed testing",
    "PCI-DSS",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Preta Systems",
    title: "Preta Systems - The Zero-Trust Validation Layer",
    description: "Run 'Fake Door' tests on production without touching the codebase. 100% Isolated. PCI-DSS v4.0 Compliant.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preta Systems - The Zero-Trust Validation Layer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preta Systems - The Zero-Trust Validation Layer",
    description: "Run 'Fake Door' tests on production without touching the codebase. 100% Isolated. PCI-DSS v4.0 Compliant.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Preta Systems",
  url: siteUrl,
  description: "The Zero-Trust Validation Layer for running production experiments without touching the codebase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} antialiased bg-deep-void text-white selection:bg-neon-green/30 selection:text-neon-green relative`}
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
