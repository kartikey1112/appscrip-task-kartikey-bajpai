// src/app/layout.js
import "./globals.css";
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

// Configure Inter Google Font (good as a fallback or for UI elements)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Define CSS variable for Inter
  display: 'swap',
})

// Configure your local Simplo Norm font
const simploNorm = localFont({
  src: [
    {
      path: './fonts/Simplo-Regular.otf',
      weight: '400',
      style: 'normal', 
    },
    
  ],
  variable: '--font-simplo-norm', 
  display: 'swap',
})

// SEO metadata (keeping yours)
export const metadata = {
  title: "Appscrip Task – Kartikey Bajpai",
  description: "A responsive, SSR-ready product page built with Next.js for Appscrip.",
  keywords: "Appscrip, Next.js, SSR, React, FakeStore API, product listing",
  authors: [{ name: "Kartikey Bajpai", url: "https://kartikey-portfolio-eosin.vercel.app/" }],
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
    // --- FIX: Apply BOTH font variables to the html tag ---
    <html lang="en" className={`${simploNorm.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      {/* Keep your existing body classes */}
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* You had <main> here, usually layout doesn't wrap children in <main> */}
        {/* Let the page component decide on the <main> tag */}
        {children}
      </body>
    </html>
  );
}