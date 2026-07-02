import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/home/AnnouncementBar";
import HeroSection from "@/components/home/HeroSection";
import PrinciplesSection from "@/components/home/PrinciplesSection";
import FeaturesBar from "@/components/home/FeaturesBar";
import DoctorSnippet from "@/components/home/DoctorSnippet";
import VideoSection from "@/components/home/VideoSection";
import HealCTASection from "@/components/home/HealCTASection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LatestBlogSection from "@/components/home/LatestBlogSection";
import MapSection from "@/components/home/MapSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Synergy: Spine & Nerve Center - Pain Relief & Wellness",
  description:
    "Body Healing: Ready to empower your body's natural healing? Contact us today to discover personalized strategies for enhanced well-being and lasting health.",
  alternates: {
    canonical: "https://synergyspineandnerve.com/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Synergy Spine and Nerve Center",
  url: "https://synergyspineandnerve.com",
  telephone: "+1-505-891-2280",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1453 Rio Rancho Blvd-Suite 2",
    addressLocality: "Rio Rancho",
    addressRegion: "NM",
    postalCode: "87124",
    addressCountry: "US",
  },
  priceRange: "$$",
  image:
    "https://synergyspineandnerve.com/wp-content/uploads/2020/04/logo-80h-1_4002b319900d17494ef2eacd346a20e2.png",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <PrinciplesSection />
        <FeaturesBar />
        <DoctorSnippet />
        <VideoSection />
        <HealCTASection />
        <TestimonialsSection />
        <LatestBlogSection />
        <CTASection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
