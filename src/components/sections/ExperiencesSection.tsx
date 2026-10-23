import { Landmark, MapPin, Compass, Waves } from "lucide-react";
import { nearby, property } from "@/data/property";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<string, typeof Landmark> = {
  temple: Landmark,
  kannappa: MapPin,
  tirtham: Compass,
  waterfalls: Waves,
};

/**
 * Nearby attractions, from the verified research (docs/PROPERTY_RESEARCH.md).
 * Distances are approximations from single listings or the official temple
 * website, and are always presented with the footnote below. The temple
 * distance is deliberately kept qualitative ("a short walk") because public
 * sources conflict (322 m vs 800 m).
 */
export function ExperiencesSection() {
  return (
    <section id="experiences" className="scroll-mt-24 bg-sand/40 py-20 md:py-28">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Nearby & Around"
          title="Discover Srikalahasti"
          description="The resort sits in temple country — sacred sites, riverside tirthams, and easy outings."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {nearby.map((place, index) => {
            const Icon = icons[place.id] ?? Landmark;
            return (
              <Reveal key={place.id} delay={index * 90}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-forest">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-4 text-xl font-semibold text-foreground">
                    {place.name}
                  </h3>
                  <p className="text-eyebrow mt-1 text-gold">{place.distance}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {place.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center" delay={80}>
          <p className="text-sm text-muted-foreground">
            Distances are approximate, as reported by public listings and the
            temple's official website —{" "}
            <a
              href={property.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold"
            >
              ask us
            </a>{" "}
            and we'll point you the right way.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
