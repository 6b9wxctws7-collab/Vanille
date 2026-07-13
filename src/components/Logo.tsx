import Image from "next/image";
import { site } from "@/config/site";

type LogoProps = {
  /** "mark" = Emblem + Schriftzug (kompakt), "full" = inkl. Claim. */
  variant?: "mark" | "full";
  /** Hoehe in px (Breite skaliert automatisch). */
  height?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Vanora-Bildlogo (transparent). Auf hellen wie dunklen Flaechen einsetzbar.
 */
export function Logo({
  variant = "mark",
  height = 46,
  className = "",
  priority = false,
}: LogoProps) {
  const asset = site.logo[variant];
  const width = Math.round((asset.width / asset.height) * height);
  return (
    <Image
      src={asset.src}
      alt={site.logo.alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes={`${width}px`}
    />
  );
}
