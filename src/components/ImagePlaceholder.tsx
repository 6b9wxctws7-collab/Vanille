import Image from "next/image";
import { Icon } from "@/components/Icon";

type ImagePlaceholderProps = {
  /** Optionaler echter Bildpfad (z. B. /images/…). Fehlt er, wird ein
   *  dezenter Platzhalter angezeigt. So bricht nichts, solange noch keine
   *  echten Fotos hochgeladen wurden. */
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Zeigt entweder ein optimiertes Bild (next/image) oder – solange kein Foto
 * vorliegt – einen hochwertigen, gebrandeten Platzhalter an.
 */
export function ImagePlaceholder({
  src,
  alt,
  label = "Bild-Platzhalter",
  className = "",
  rounded = "rounded-2xl",
  priority = false,
  sizes = "100vw",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden ${rounded} ${className} bg-gradient-to-br from-sand-light via-cream-200 to-sand`}
    >
      {/* dezentes Muster */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(176,141,87,0.18), transparent 40%), radial-gradient(circle at 80% 70%, rgba(176,141,87,0.14), transparent 45%)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-gold-dark/80">
        <Icon name="leaf" size={40} />
        <span className="text-xs font-medium uppercase tracking-[0.16em]">
          {label}
        </span>
      </div>
    </div>
  );
}
