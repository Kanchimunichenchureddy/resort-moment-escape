import { MapPin, Compass } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Local experiences around Srikalahasti.
 *
 * Only widely established attractions are listed; travel distances are
 * deliberately omitted until verified (see docs/PROPERTY_RESEARCH.md).
 */
const experiences = [
  {
    name: "Srikalahasti Temple",
    description:
      "One of the most revered Shiva temples in South India — the famed Kalahasteeswara shrine, minutes from the resort.",
  },
  {
    name: "Srikalahasti town & bazaars",
    description:
      "Temple-town streets, local crafts, and traditional Andhra food a short ride from your room.",
  },
  {
    name: "Tirupati & Tirumala",
    description:
      "The famous pilgrimage centre lies within easy reach for a day trip — ask us and we'll point you the right way.",
  },
] as const;

export function ExperiencesSection() {
  return (
    <section id="experiences" className="scroll-mt-24 bg-sand/40 py-20 md:py-28">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Local Experiences"
          title="Discover Srikalahasti"
          description="The resort sits in temple country — sacred sites, local flavours, and easy day trips."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experiences.map((experience, index) => (
            <Reveal key={experience.name} delay={index * 100}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-forest">
                  {index === 0 ? (
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Compass className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
                <h3 className="font-display mt-4 text-xl font-semibold text-foreground">
                  {experience.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {experience.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={80}>
          <p className="text-sm text-muted-foreground">
            Planning a temple visit?{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Srikalahasti+Temple"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold"
            >
              See the temple on Google Maps
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
