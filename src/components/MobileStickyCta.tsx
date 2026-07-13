import Link from "next/link";
import { site } from "@/config/site";
import { Icon } from "@/components/Icon";

/** Sticky Call-to-Action-Leiste am unteren Rand (nur mobil). */
export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-cocoa/10 bg-cream/95 backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a
          href={`tel:${site.contact.phoneHref}`}
          className="flex items-center justify-center gap-2 rounded-full border border-cocoa/20 py-3 text-sm font-semibold text-cocoa"
        >
          <Icon name="phone" size={18} />
          Anrufen
        </a>
        <Link
          href="/muster-anfragen"
          className="flex items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-semibold text-white"
        >
          <Icon name="sample" size={18} />
          Muster
        </Link>
      </div>
    </div>
  );
}
