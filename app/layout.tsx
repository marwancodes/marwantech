import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marwanwarradi.vercel.app"),

  title: {
    default: "Marouane Ouarradi - Full-Stack Developer | Next.js, React, MERN",
    template: "%s | Marouane Ouarradi",
  },

  description:
    "Full-Stack Developer specializing in React, Next.js, TypeScript, Laravel, and MERN stack. Building fast, scalable web applications with clean architecture and modern UI. Based in the UK.",

  keywords: [
    "Marouane Ouarradi",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack",
    "TypeScript",
    "Laravel",
    "Web Developer UK",
    "Frontend Developer",
    "Backend Developer",
  ],

  authors: [{ name: "Marouane Ouarradi" }],
  creator: "Marouane Ouarradi",

  openGraph: {
    title: "Marouane Ouarradi - Full-Stack Developer",
    description:
      "Portfolio of Marouane Ouarradi, a Full-Stack Developer building modern web apps with React, Next.js, TypeScript, Laravel and MERN stack.",
    url: "https://marwanwarradi.vercel.app",
    siteName: "Marouane Ouarradi Portfolio",
    images: [
      {
        url: "/og-image.png", // create this later
        width: 1200,
        height: 630,
        alt: "Marouane Ouarradi - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Marouane Ouarradi - Full-Stack Developer",
    description:
      "Building modern, scalable web applications with React, Next.js, TypeScript, Laravel and MERN stack.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://marwanwarradi.vercel.app",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
