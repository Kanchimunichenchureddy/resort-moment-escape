export function HeroScrollIndicator() {
  return (
    <a
      href="#welcome"
      className="hero-scroll-cue group inline-flex flex-col items-center gap-2 text-background/80 transition-colors hover:text-background"
      aria-label="Scroll to explore"
    >
      <span className="text-eyebrow text-[0.65rem]">Discover</span>
      <svg
        width="18"
        height="26"
        viewBox="0 0 18 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1.5" y="1.5" width="15" height="23" rx="7.5" opacity="0.6" />
        <path d="M9 7v6" />
      </svg>
    </a>
  );
}
