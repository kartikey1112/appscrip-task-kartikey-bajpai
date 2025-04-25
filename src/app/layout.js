import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font setup with CSS variable names
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata
export const metadata = {
  title: "Appscrip Task – Your Name",
  description: "A responsive, SSR-ready product page built with Next.js for Appscrip.",
  keywords: "Appscrip, Next.js, SSR, React, FakeStore API, product listing",
  authors: [{ name: "Your Name", url: "https://yourportfolio.com" }],
  openGraph: {
    title: "Appscrip Task",
    description: "SSR-ready product listing page built with Next.js",
    // url: "https://your-netlify-url.netlify.app",
    siteName: "Appscrip Task",
    // images: [
    //   {
    //     url: "/seo-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Appscrip Task Screenshot",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

// Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
