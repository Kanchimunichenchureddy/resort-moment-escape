/**
 * Lightweight decorative SVG details for the hero — fine botanical line
 * work and a subtle wave line. Purely ornamental (aria-hidden), animated
 * slowly via .hero-illustration in styles.css.
 */
export function HeroIllustrations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
    >
      {/* Drifting botanical line, top right */}
      <svg
        className="hero-illustration absolute top-24 right-[6%] h-40 w-40 text-gold/40 lg:h-52 lg:w-52"
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      >
        <path d="M14 106 C 30 84, 26 62, 44 48 C 58 36, 62 22, 78 14" />
        <path d="M44 48 C 52 44, 58 44, 66 40" />
        <path d="M52 66 C 62 62, 68 56, 74 50" />
        <ellipse cx="78" cy="14" rx="5" ry="9" transform="rotate(38 78 14)" />
        <ellipse cx="64" cy="34" rx="4" ry="7" transform="rotate(52 64 34)" />
      </svg>

      {/* Subtle wave lines, bottom left */}
      <svg
        className="hero-illustration absolute bottom-10 left-[4%] h-24 w-64 text-background/25 lg:h-32 lg:w-80"
        viewBox="0 0 320 96"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        style={{ animationDelay: "1.8s" }}
      >
        <path d="M4 30 Q 40 12, 80 30 T 156 30 T 232 30 T 308 30" />
        <path d="M24 58 Q 60 42, 96 58 T 168 58 T 240 58" opacity="0.6" />
        <path d="M60 84 Q 96 70, 132 84 T 204 84" opacity="0.35" />
      </svg>
    </div>
  );
}
