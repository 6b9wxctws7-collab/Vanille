# Bilder hochladen

In diesen Ordner kommen alle Fotos der Website. Solange hier keine Bilder
liegen, zeigt die Website automatisch dezente **Platzhalter** an – es bricht
also nichts.

## Ordnerstruktur

```
public/images/
├── hero-vanille.jpg          ← grosses Hero-Hintergrundbild (Startseite)
├── og-default.jpg            ← Vorschaubild für Social Media (1200 × 630 px)
├── produkte/
│   ├── gourmet-bourbon-vanille.jpg
│   └── vanille-extraktion.jpg
└── herkunft/
    ├── anbauregion.jpg
    ├── produzent.jpg
    └── trocknung.jpg
```

## Empfohlene Formate & Grössen

- **Format:** JPG oder WebP (WebP ist kleiner). Next.js optimiert die Bilder
  zusätzlich automatisch.
- **Hero:** ca. 2000 × 1300 px, quer.
- **Produktbilder:** ca. 1200 × 900 px (Seitenverhältnis 4:3).
- **Herkunft:** ca. 1200 × 900 px.
- **og-default:** genau 1200 × 630 px.

## Bilder aktivieren

Die Platzhalter-Komponente lädt ein echtes Bild, sobald ein `src` gesetzt ist.
Suchen Sie im Code nach den Kommentaren `/* z. B. "/images/..." */` und tragen
Sie dort den Pfad ein. Betroffen sind u. a.:

- `src/components/sections/Hero.tsx` → `src="/images/hero-vanille.jpg"`
- `src/components/sections/OriginTeaser.tsx`
- `src/components/ProductCard.tsx` (über `withImage`) bzw.
  `src/app/produkte/page.tsx` → `src={product.image}`
- `src/app/herkunft/page.tsx`

Die Produktbildpfade sind bereits in `src/config/content.ts` hinterlegt
(`image`-Feld) und müssen nur mit echten Dateien gefüllt werden.

## Hinweis zu Bildrechten

Verwenden Sie ausschliesslich Bilder, für die Sie die Nutzungsrechte besitzen.
Zeigen Sie keine erfundenen Produzenten oder Regionen – nur echtes Material.
