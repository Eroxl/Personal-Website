import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evanr.dev"),
  title: {
    default: "Evan — Developer Portfolio",
    template: "%s | Evan",
  },
  description:
    "Fullstack developer building tools for social impact. Projects, blog posts, and more.",
  keywords: ["developer", "portfolio", "fullstack", "TypeScript", "React", "Next.js"],
  authors: [{ name: "Evan" }],
  creator: "Evan",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Evan",
    title: "Evan — Developer Portfolio",
    description:
      "Fullstack developer building tools for social impact. Projects, blog posts, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evan — Developer Portfolio",
    description:
      "Fullstack developer building tools for social impact. Projects, blog posts, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="min-h-full flex flex-col text-nord6 no-scrollbar">
        <Header />
        <main className="flex flex-1 flex-col no-scrollbar overflow-y-scroll">{children}</main>
      </body>
    </html>
  );
}
