import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales } from "@/i18n/config";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/produkte", priority: 0.9, changeFrequency: "weekly" },
  { path: "/qualitaet", priority: 0.7, changeFrequency: "monthly" },
  { path: "/herkunft", priority: 0.7, changeFrequency: "monthly" },
  { path: "/fuer-geschaeftskunden", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ueber-uns", priority: 0.6, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.8, changeFrequency: "monthly" },
  { path: "/muster-anfragen", priority: 0.9, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const r of routes) {
    for (const locale of locales) {
      const clean = r.path === "/" ? "" : r.path;
      entries.push({
        url: `${site.url}/${locale}${clean}`,
        lastModified: now,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${site.url}/${l}${clean}`]),
          ),
        },
      });
    }
  }

  return entries;
}
