import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navigation, property } from "@/data/property";

/**
 * Fixed navigation: transparent over the hero, solid warm ivory after
 * scrolling. Accessible mobile menu (Escape closes, focus is moved into the
 * panel, body scroll is locked while open).
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-background/95 shadow-[0_1px_0_0_var(--border)] backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-editorial flex h-16 items-center justify-between md:h-20"
      >
        <a
          href="#top"
          className={`font-display text-xl font-semibold tracking-tight md:text-2xl ${
            solid ? "text-foreground" : "text-background"
          }`}
        >
          River View{" "}
          <span className={solid ? "text-gold" : "text-gold"}>Resorts</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-gold ${
                  solid ? "text-foreground" : "text-background/90"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={property.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
              solid
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-background text-foreground hover:bg-background/90"
            }`}
          >
            Book Your Stay
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            solid ? "text-foreground" : "text-background"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`container-editorial border-t pb-6 pt-4 ${
            solid ? "border-border" : "border-background/20"
          } ${open ? "bg-background" : ""}`}
        >
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-foreground transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={property.phoneHref}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground"
          >
            <Phone className="h-4 w-4" /> {property.phoneDisplay}
          </a>
          <a
            href={property.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </header>
  );
}
