import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
    locale: "en_US",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
      <Script id="knock-knock-widget" strategy="afterInteractive">
        {`window.company_id = '6a44c93ffb43c2761ccbc33c';
var newScript = document.createElement('script');
newScript.src = 'https://api.knock-knockapp.com/widget/widget.js';
document.getElementsByTagName('HEAD')[0].appendChild(newScript);`}
      </Script>
    </html>
  );
}
