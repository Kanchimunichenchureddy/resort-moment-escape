import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-resort.jpg";
import roomImage from "@/assets/room.jpg";
import poolImage from "@/assets/pool.jpg";
import receptionImage from "@/assets/reception.jpg";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  span: string;
  width: number;
  height: number;
};

const images: GalleryImage[] = [
  {
    src: heroImage,
    alt: "Resort buildings, garden and swimming pool at golden hour",
    caption: "Garden & poolside",
    span: "sm:col-span-2 sm:row-span-2",
    width: 1920,
    height: 1080,
  },
  {
    src: roomImage,
    alt: "Guest room with a large bed and soft natural light",
    caption: "Guest rooms",
    span: "",
    width: 1024,
    height: 1280,
  },
  {
    src: poolImage,
    alt: "Swimming pool with loungers under the morning sun",
    caption: "Swimming pool",
    span: "",
    width: 912,
    height: 1200,
  },
  {
    src: receptionImage,
    alt: "Reception lounge opening onto a planted courtyard",
    caption: "Reception & courtyard",
    span: "sm:col-span-2",
    width: 1008,
    height: 756,
  },
];

/**
 * Editorial gallery grid with an accessible lightbox:
 * arrow keys navigate, Escape closes, focus is trapped while open.
 */
export function GallerySection() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);

  const activeImage = active === null ? undefined : images[active];

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (active === null) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % images.length);
    if (event.key === "ArrowLeft")
      setActive((i) => ((i ?? 0) - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Gallery"
          title="A look around the resort"
          description="Spaces and settings across the property — rooms, pool, and quiet corners."
        />

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4 md:auto-rows-[240px]">
          {images.map((image, index) => (
            <Reveal
              key={image.caption}
              delay={index * 80}
              className={`${image.span} h-full`}
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group relative block h-full w-full overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label={`Open image: ${image.caption}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.18_0.03_175_/_0.75)] to-transparent px-4 pt-8 pb-3 text-left text-sm font-medium text-background opacity-90">
                  {image.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.caption}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[oklch(0.12_0.02_175_/_0.92)] p-4"
          onClick={close}
          onKeyDown={onKeyDown}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => ((i ?? 0) - 1 + images.length) % images.length);
            }}
            className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20 md:left-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure
            className="max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[76vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-background/80">
              {activeImage.caption}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => ((i ?? 0) + 1) % images.length);
            }}
            className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20 md:right-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
