import type { Metadata, Viewport } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SEO, SITE } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"], variable: "--font-vazir", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO.title, template: `%s | ${SITE.name}` },
  description: SEO.description,
  applicationName: SITE.name,
  category: "technology",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SEO.locale,
    url: "/",
    title: SEO.title,
    description: SEO.description,
  },
  twitter: { card: "summary_large_image", title: SEO.title, description: SEO.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060a16",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white"
        >
          پرش به محتوای اصلی
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
