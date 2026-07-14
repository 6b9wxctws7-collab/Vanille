import { site } from "@/config/site";
import { Icon } from "@/components/Icon";
import { LocaleLink } from "@/components/i18n/LocaleLink";

/** Sticky Call-to-Action-Leiste am unteren Rand (nur mobil). */
export function MobileStickyCta({ call, sample }: { call: string; sample: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-cocoa/10 bg-cream/95 backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a
          href={`tel:${site.contact.phoneHref}`}
          className="flex items-center justify-center gap-2 rounded-full border border-cocoa/20 py-3 text-sm font-semibold text-cocoa"
        >
          <Icon name="phone" size={18} />
          {call}
        </a>
        <LocaleLink
          href="/muster-anfragen"
          className="flex items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-semibold text-white"
        >
          <Icon name="sample" size={18} />
          {sample}
        </LocaleLink>
      </div>
    </div>
  );
}
