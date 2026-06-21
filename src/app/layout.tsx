import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { APP_NAME, SITE_URL, PLAY_STORE_URL } from "@/lib/constants";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${APP_NAME} — Milk Tracking. Reimagined.`,
    template: `%s | ${APP_NAME}`,
  },
  description:
    "Track daily milk deliveries, monthly bills, payments and vacations with a premium local-first Android app. 100% offline, private, and free from cloud dependency.",
  keywords: [
    "milk bill",
    "milk delivery tracker",
    "milk billing app",
    "daily milk tracking",
    "offline milk app",
    "India milk bill",
  ],
  authors: [{ name: APP_NAME }],
  creator: APP_NAME,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} — Milk Tracking. Reimagined.`,
    description:
      "Track daily deliveries, monthly bills, payments and vacations. 100% offline and private.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} — Milk Tracking. Reimagined.`,
    description:
      "Track daily deliveries, monthly bills, payments and vacations. 100% offline and private.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: APP_NAME,
  operatingSystem: "Android",
  applicationCategory: "FinanceApplication",
  description:
    "Local-first milk delivery tracking app for daily deliveries, monthly bills, payments, and vacation days.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  downloadUrl: PLAY_STORE_URL,
  author: {
    "@type": "Organization",
    name: APP_NAME,
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <div className="noise-overlay" aria-hidden />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
