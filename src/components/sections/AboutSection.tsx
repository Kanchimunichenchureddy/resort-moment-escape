import { ArrowRight, Check } from "lucide-react";
import receptionImage from "@/assets/reception.jpg";
import { amenities } from "@/data/property";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Welcome section: two-column editorial layout — property photograph left,
 * introduction + verified highlights + CTA right.
 */
export function AboutSection() {
  return (
    <section id="welcome" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="container-editorial grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={receptionImage}
              alt="Warm reception and courtyard seating at River View Resorts"
              className="aspect-[4/3] w-full object-cover"
              width={1008}
              height={756}
              loading="lazy"
            />
          </div>
          <div
            className="absolute -bottom-5 -right-3 hidden h-28 w-28 rounded-2xl border border-gold/40 bg-sand/60 md:block"
            aria-hidden="true"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="text-eyebrow text-gold">Welcome to River View Resorts</p>
          <h2 className="font-display text-section-title mt-3 font-semibold text-foreground">
            A calm, welcoming retreat near the heart of Srikalahasti
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            River View Resorts is a comfortable, well-kept resort in
            Srikalahasti — a peaceful base for pilgrims visiting the famous
            Srikalahasti Temple, families on a weekend break, and travellers
            passing through Andhra Pradesh. Expect a restful setting, neat
            rooms, and a team that treats every guest like family.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {amenities.slice(0, 4).map((amenity) => (
              <li
                key={amenity.id}
                className="flex items-center gap-2.5 text-sm font-medium text-foreground"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-forest">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {amenity.label}
              </li>
            ))}
          </ul>

          <a
            href="#rooms"
            className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            See Our Rooms
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
