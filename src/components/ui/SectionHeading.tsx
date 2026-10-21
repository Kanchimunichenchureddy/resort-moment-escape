import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`text-eyebrow ${
          tone === "light" ? "text-gold" : "text-gold"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-section-title mt-3 font-semibold ${
          tone === "light" ? "text-foreground" : "text-background"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            tone === "light" ? "text-muted-foreground" : "text-background/75"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function SectionDivider({ children }: { children?: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="hairline w-16" />
      {children ?? <span className="bg-gold h-1 w-1 rounded-full" />}
      <span className="hairline w-16" />
    </div>
  );
}
