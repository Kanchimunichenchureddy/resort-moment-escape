import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ResortHero } from "@/components/hero/ResortHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { property } from "@/data/property";
import heroImage from "@/assets/hero-resort.jpg";

/**
 * Structured data — verified facts only (name, Telugu name, address,
 * phone). No fabricated ratings, price ranges, or room inventory.
 */
const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  name: property.name,
  alternateName: property.teluguName,
  description:
    "A welcoming resort in Srikalahasti, Andhra Pradesh, offering comfortable rooms and a peaceful stay near the Srikalahasti Temple.",
  telephone: "+919908031471",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ponallama Gudi Street, Gunteligunta at L.N. Puram",
    addressLocality: "Srikalahasti",
    addressRegion: "Andhra Pradesh",
    postalCode: "517644",
    addressCountry: "IN",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "River View Resorts | Resort in Srikalahasti, Andhra Pradesh",
      },
      {
        name: "description",
        content:
          "River View Resorts (రివర్ వ్యూ రిసార్ట్స్) in Srikalahasti — comfortable rooms, a swimming pool, and warm hospitality near the Srikalahasti Temple. Call or WhatsApp to enquire about your stay.",
      },
      {
        property: "og:title",
        content: "River View Resorts | Srikalahasti, Andhra Pradesh",
      },
      {
        property: "og:description",
        content:
          "A peaceful, welcoming retreat in Srikalahasti — comfortable rooms, thoughtful hospitality, and easy access to the Srikalahasti Temple.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "River View Resorts | Srikalahasti" },
      {
        name: "twitter:description",
        content:
          "A peaceful, welcoming retreat in Srikalahasti, Andhra Pradesh. Enquire about your stay today.",
      },
    ],
    links: [
      // LCP hero image preloaded — never lazy-load the main hero image.
      {
        rel: "preload",
        as: "image",
        href: heroImage,
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(lodgingJsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <ResortHero />
        <AboutSection />
        <RoomsSection />
        <AmenitiesSection />
        <GallerySection />
        <ExperiencesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
