import {
  Waves,
  Wifi,
  Car,
  Coffee,
  ConciergeBell,
  BellRing,
} from "lucide-react";
import { amenities, property } from "@/data/property";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<string, typeof Waves> = {
  pool: Waves,
  wifi: Wifi,
  parking: Car,
  breakfast: Coffee,
  "room-service": ConciergeBell,
  "front-desk": BellRing,
};

/**
 * Amenities grid — facilities corroborated by multiple public sources or a
 * dated guest account, plus two listed-only items (see src/data/property.ts
 * and docs/PROPERTY_RESEARCH.md for the sourced breakdown).
 */
export function AmenitiesSection() {
  return (
    <section id="amenities" className="scroll-mt-24 bg-sand/40 py-20 md:py-28">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Amenities"
          title="Everything for an easy, restful stay"
          description="Facilities at River View Resorts, so you can settle in and simply unwind."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, index) => {
            const Icon = icons[amenity.id] ?? Waves;
            return (
              <Reveal as="li" key={amenity.id} delay={index * 70}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-forest">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {amenity.label}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {amenityDescriptions[amenity.id]}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10 text-center" delay={80}>
          <p className="text-sm text-muted-foreground">
            Questions about a specific facility?{" "}
            <a
              href={property.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold"
            >
              Message us on WhatsApp
            </a>{" "}
            — we're happy to help.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const amenityDescriptions: Record<string, string> = {
  pool: "Take a refreshing dip in the resort swimming pool.",
  wifi: "Stay connected throughout your visit.",
  parking: "Space to park your vehicle on the property.",
  breakfast: "Start the day with a freshly prepared meal.",
  "room-service": "Orders brought to your room when you prefer to stay in.",
  "front-desk": "Our front desk team is on hand for anything you need.",
};
