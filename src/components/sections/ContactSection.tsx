import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { property } from "@/data/property";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Contact & location. No booking engine exists yet, so enquiries run
 * through the property's real phone number and WhatsApp — never a
 * fabricated checkout.
 */
export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-forest py-20 text-background md:py-28"
    >
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Contact & Location"
          title="Plan your stay with us"
          description="Call, message, or drop in — our team will help you arrange everything."
          tone="dark"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-background/15 bg-[oklch(0.29_0.03_175)] p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background/10 text-gold">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-eyebrow text-gold">Call us</h3>
                    <a
                      href={property.phoneHref}
                      className="mt-1 block text-lg font-semibold text-background transition-colors hover:text-gold"
                    >
                      {property.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background/10 text-gold">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-eyebrow text-gold">WhatsApp</h3>
                    <a
                      href={property.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-lg font-semibold text-background transition-colors hover:text-gold"
                    >
                      Message us anytime
                    </a>
                    <p className="mt-1 text-sm text-background/65">
                      Fastest way to check availability and rates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background/10 text-gold">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-eyebrow text-gold">Find us</h3>
                    <p className="mt-1 text-background/85">
                      {property.address.line1}
                      <br />
                      {property.address.line2}, {property.address.state}{" "}
                      {property.address.pin}
                    </p>
                  </div>
                </div>

                <a
                  href={property.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-background/90"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get Directions on Google Maps
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-background/15">
              <iframe
                title="Map showing River View Resorts, Srikalahasti"
                src="https://www.google.com/maps?q=River+View+Resorts+Srikalahasti+Andhra+Pradesh+517644&output=embed"
                className="min-h-[320px] w-full flex-1 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="bg-[oklch(0.29_0.03_175)] px-5 py-3 text-xs text-background/70">
                {property.name} · {property.address.full}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
