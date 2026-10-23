import { ArrowRight, BedDouble, Wind, Users } from "lucide-react";
import roomImage from "@/assets/room.jpg";
import poolImage from "@/assets/pool.jpg";
import { property, rooms } from "@/data/property";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Rooms & accommodation.
 *
 * Room count and features come from public listings (see
 * src/data/property.ts — rooms) and are framed as reported on-page;
 * room categories and tariffs remain owner-verified only, so all booking
 * actions route to a real enquiry (call / WhatsApp) and rates are never
 * published.
 */
export function RoomsSection() {
  return (
    <section id="rooms" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Rooms & Accommodation"
          title="Rest easy, wake up refreshed"
          description="Neat, comfortable rooms designed for restful nights — whether you're here for the temple, a family visit, or a quiet break."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <figure className="group relative overflow-hidden rounded-2xl">
              <img
                src={roomImage}
                alt="A comfortably furnished guest room at River View Resorts"
                className="aspect-[16/11] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                width={1024}
                height={1280}
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.18_0.03_175_/_0.75)] to-transparent px-6 pt-14 pb-5 text-background">
                <p className="font-display text-xl font-semibold">
                  Well-appointed guest rooms
                </p>
                <p className="mt-1 text-sm text-background/80">
                  Crisp linens, warm light, and everything you need for a
                  restful stay.
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Stay details on enquiry
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Room types, capacities, and current rates are shared directly
                  by our team, so you always get accurate, up-to-date details
                  for your dates.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-foreground">
                  <li className="flex items-center gap-3">
                    <BedDouble className="h-4 w-4 text-gold" aria-hidden="true" />
                    Comfortable bedding, freshly prepared for every arrival
                  </li>
                  <li className="flex items-center gap-3">
                    <Wind className="h-4 w-4 text-gold" aria-hidden="true" />
                    Air-conditioned rooms, with temple views from select rooms
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-gold" aria-hidden="true" />
                    Around {rooms.reportedCount} rooms for couples, families, and groups
                  </li>
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">
                  Room count and features as reported by public listings — our
                  team confirms every detail for your dates.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={property.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  Enquire About Rooms
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={property.phoneHref}
                  className="text-center text-sm font-semibold text-forest transition-colors hover:text-gold"
                >
                  or call {property.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-6">
          <figure className="group relative overflow-hidden rounded-2xl">
            <img
              src={poolImage}
              alt="The swimming pool at River View Resorts on a clear morning"
              className="aspect-[21/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              width={912}
              height={1200}
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.18_0.03_175_/_0.7)] to-transparent px-6 pt-12 pb-5 text-background">
              <p className="font-display text-lg font-semibold">
                Unwind by the pool between outings
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
