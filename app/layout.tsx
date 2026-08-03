import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import BookingProvider from "@/components/booking/BookingProvider";
import BottomBookBar from "@/components/BottomBookBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synergy: Spine & Nerve Center - Pain Relief & Wellness",
  description:
    "Body Healing: Ready to empower your body's natural healing? Contact us today to discover personalized strategies for enhanced well-being and lasting health.",
  metadataBase: new URL("https://synergyspineandnerve.com"),
  alternates: {
    canonical: "https://synergyspineandnerve.com/",
  },
  openGraph: {
    title: "Expert Chiropractic Care at Synergy Spine & Nerve",
    description:
      "Unlock your body's natural healing power with chiropractic care.",
    url: "https://synergyspineandnerve.com/",
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synergy Spine & Nerve Center",
    description:
      "Chiropractic care in Rio Rancho, NM. Unlock your body's natural healing power.",
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
  // DO NOT REMOVE: Google Search Console site verification. Keep permanently.
  verification: {
    google: "dJ3k9kDSyULRLNB670eeUVggenhGH3OTvaZLABGgPAw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <BookingProvider>
          {children}
          <BottomBookBar />
        </BookingProvider>
      </body>
      {/* Google tag (gtag.js) */}
      <Script
        id="ga4-src"
        src="https://www.googletagmanager.com/gtag/js?id=G-QPZT8FNXYE"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QPZT8FNXYE');
        `}
      </Script>
      <Script id="knock-knock-config" strategy="afterInteractive">
        {`window.company_id = '6a44c93ffb43c2761ccbc33c';`}
      </Script>
      <Script
        id="knock-knock-widget"
        src="https://api.knock-knockapp.com/widget/widget.js"
        strategy="lazyOnload"
      />
    </html>
  );
}
