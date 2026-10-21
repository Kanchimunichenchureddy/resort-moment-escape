import { MapPin, Phone, MessageCircle } from "lucide-react";
import { navigation, property } from "@/data/property";

export function Footer() {
  return (
    <footer className="bg-forest text-background/85">
      <div className="container-editorial grid gap-10 py-14 md:grid-cols-3 md:py-16">
        <div>
          <p className="font-display text-2xl font-semibold text-background">
            River View <span className="text-gold">Resorts</span>
          </p>
          <p className="font-telugu mt-1 text-sm text-background/60">
            {property.teluguName}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
            A welcoming retreat in Srikalahasti — comfortable rooms, thoughtful
            hospitality, and a peaceful setting for temple visits and quiet
            getaways.
          </p>
        </div>

        <div>
          <h3 className="text-eyebrow text-gold">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-background/75 transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-eyebrow text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{property.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={property.phoneHref} className="transition-colors hover:text-gold">
                {property.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a
                href={property.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-gold"
              >
                WhatsApp enquiry
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="container-editorial flex flex-col items-center justify-between gap-2 py-5 text-xs text-background/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} River View Resorts, Srikalahasti. All
            rights reserved.
          </p>
          <p>రివర్ వ్యూ రిసార్ట్స్ · Srikalahasti, Andhra Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
