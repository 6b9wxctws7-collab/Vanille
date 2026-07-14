import { site } from "@/config/site";
import { Icon } from "@/components/Icon";

/** Schwebender WhatsApp-Button (rechts unten). */
export function WhatsAppButton({ aria, message }: { aria: string; message: string }) {
  const href = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={aria}
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card-hover transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark sm:bottom-6 sm:right-6"
    >
      <Icon name="whatsapp" size={30} />
    </a>
  );
}
