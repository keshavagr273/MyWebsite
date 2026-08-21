import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import Script from "next/script";
import { Syne } from "next/font/google";
import { GeistPixelSquare, GeistPixelGrid, GeistPixelCircle, GeistPixelTriangle, GeistPixelLine } from 'geist/font/pixel';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keshavagrawal.in"),
  title: "Keshav Agrawal - Full-Stack Developer & Software Engineer",
  description: "Full-Stack Web Developer with a Passion for Building Scalable, AI/ML-Powered Solutions.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Full-Stack Web Developer",
    "Software Engineer",
    "AI",
    "ML",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "Distributed Systems",
    "MongoDB",
    "Keshav Agrawal",
    "Keshav",
  ],
  openGraph: {
    title: "Keshav Agrawal - Software Engineer Portfolio",
    description: "Full-Stack Web Developer with a Passion for Building Scalable, AI/ML-Powered Solutions.",
    url: "https://keshavagrawal.in",
    siteName: "Keshav Agrawal Portfolio",
    images: [
      {
        url: "/profileImg2.jpg",
        width: 1200,
        height: 630,
        alt: "Keshav Agrawal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keshav Agrawal - Software Engineer Portfolio",
    description: "Full-Stack Web Developer with a Passion for Building Scalable, AI/ML-Powered Solutions.",
    images: ["/profileImg2.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Keshav Agrawal",
              url: "https://keshavagrawal.in",
              sameAs: [
                "https://github.com/keshavagr273",
                "https://www.linkedin.com/in/keshav-agrawal-02b4861b0",
              ],
              jobTitle: "Software Engineer & Full Stack Developer",
            }),
          }}
        />
      </head>

      <body className={` ${geistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} ${spaceGrotesk.variable} ${syne.variable} antialiased`}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Analytics />
      </body>
    </html>
  );
}
