import { useEffect, useRef } from "react";
import { ArrowRight, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-resort.jpg";
import roomImage from "@/assets/room.jpg";
import { property } from "@/data/property";
import { HeroIllustrations } from "./HeroIllustrations";
import { HeroScrollIndicator } from "./HeroScrollIndicator";

/**
 * Cinematic hero: full-bleed property image with a slow settle zoom,
 * masked line-by-line headline reveal, staggered CTAs, subtle desktop-only
 * parallax, decorative botanical SVGs and a scroll cue.
 * Timings/choreography live in src/styles.css (.hero-* rules).
 */
export function ResortHero() {
  const mediaRef = useRef<HTMLDivElement | null>(null);

  // Subtle parallax on the hero image (desktop, motion allowed only).
  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;

    const fine = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // Small, controlled range so no blank edges appear.
        media.style.transform = `translate3d(0, ${window.scrollY * 0.08}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const rating = property.googleRating;
  const showRating = rating.listingVerified;

  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col overflow-hidden"
    >
      {/* Layer 1: full-bleed property photograph (LCP — eager, high priority) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="false">
        <div ref={mediaRef} className="hero-media absolute inset-0">
          <img
            src={heroImage}
            alt="Garden and poolside setting at River View Resorts, Srikalahasti"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
          />
        </div>
        {/* Layer 2: cinematic gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.03_175_/_0.82)] via-[oklch(0.18_0.03_175_/_0.45)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[oklch(0.18_0.03_175_/_0.55)] to-transparent" />
      </div>

      <HeroIllustrations />

      {/* Layers 3–5: content */}
      <div className="container-editorial relative z-10 flex flex-1 flex-col justify-center pt-24 pb-10 md:pt-28">
        <div className="max-w-2xl">
          <p className="hero-eyebrow text-eyebrow flex items-center gap-2 text-gold">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Srikalahasti · Andhra Pradesh
          </p>

          <h1 className="font-display text-hero mt-5 font-semibold text-background">
            <span className="hero-line">
              <span>Your Peaceful Escape</span>
            </span>
            <span className="hero-line">
              <span className="text-gold italic">in Srikalahasti</span>
            </span>
          </h1>

          <p className="hero-desc mt-6 max-w-lg text-base leading-relaxed text-background/85 md:text-lg">
            Discover a comfortable stay, thoughtful hospitality, and a
            welcoming retreat at River View Resorts.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#rooms"
              className="hero-cta hero-cta-1 group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-hero-cta)] transition-colors hover:bg-primary/85"
            >
              Explore Our Rooms
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="hero-cta hero-cta-2 inline-flex items-center gap-2 rounded-full border border-background/40 bg-background/10 px-7 py-3.5 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:border-background/70 hover:bg-background/20"
            >
              Enquire About Your Stay
            </a>
          </div>

          {/* Trust indicator — shown only when the listing data is verified */}
          {showRating ? (
            <p className="hero-trust mt-8 flex items-center gap-2 text-sm text-background/80">
              <Star
                className="h-4 w-4 fill-gold text-gold"
                aria-hidden="true"
              />
              <span>
                {rating.value} on Google · {rating.count} guest reviews
              </span>
            </p>
          ) : null}
        </div>
      </div>

      {/* Bottom bar: location · scroll cue */}
      <div className="container-editorial relative z-10 flex items-end justify-between pb-8">
        <p className="hero-trust hidden text-sm text-background/75 md:block">
          {property.address.line1}, {property.address.line2}
        </p>
        <HeroScrollIndicator />
        <span className="hero-trust hidden w-40 md:block" aria-hidden="true" />
      </div>

      {/* Layer 7: floating secondary photo card (desktop only) */}
      <figure className="hero-cta hero-cta-2 absolute right-[5%] top-1/2 z-10 hidden w-64 -translate-y-1/2 rotate-1 overflow-hidden rounded-xl border border-background/30 shadow-[0_24px_60px_-12px_oklch(0.15_0.03_175_/_0.5)] xl:block">
        <img
          src={roomImage}
          alt="A calm, comfortably furnished guest room at River View Resorts"
          className="aspect-[4/5] w-full object-cover"
          width={1024}
          height={1280}
          loading="lazy"
        />
        <figcaption className="bg-forest/90 px-4 py-2.5 text-xs font-medium tracking-wide text-background/90">
          Comfort, thoughtfully furnished
        </figcaption>
      </figure>
    </section>
  );
}
