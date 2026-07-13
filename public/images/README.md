# Bilder

Hier liegen alle Fotos und das Logo der Website. Die vom Kunden gelieferten
Bilder sind bereits eingebunden und mit sprechenden Dateinamen versehen.

## Aktuelle Struktur

```
public/images/
├── og-default.jpg              ← Social-Media-Vorschau (Logo auf Creme, 1200×630)
├── logo/
│   ├── vanora-logo.png         ← komplettes Lockup (Emblem + „Vanora" + Claim), transparent
│   └── vanora-logo-mark.png    ← kompakt (Emblem + „Vanora"), transparent – für Kopf-/Fusszeile
├── produkte/
│   ├── gourmet-bourbon-vanille.jpg   ← Gourmet-Produktbild (gebündelte Schoten)
│   ├── vanille-extraktion.jpg        ← Produktbild Extraktion/Verarbeitung (lose Schoten)
│   ├── vanille-buendel.jpg           ← Galerie: sortierte Bündel
│   ├── vanille-trocknung.jpg         ← Galerie: Trocknung
│   └── vanille-verpackung.jpg        ← Galerie: versandfertige Gebinde
└── herkunft/
    ├── anbau.jpg               ← Feature-Bild Plantage (Hero der Startseite + Herkunft)
    ├── pflege.jpg              ← Galerie: Pflege der Pflanzen
    ├── bestaeubung.jpg         ← Galerie: Handarbeit in der Plantage
    ├── gruene-schote.jpg       ← Galerie: reifende grüne Schote
    ├── qualitaetskontrolle.jpg ← Galerie/Über uns: Bündeln und Prüfen
    ├── sortierung.jpg          ← Galerie: Sortierung nach der Trocknung
    ├── produzent.jpg           ← Startseite (Herkunft-Teaser): junger Produzent
    └── transport.jpg           ← Galerie: Transport aus der Region
```

## Wo die Bilder verwendet werden

| Bild                          | Ort                                            |
| ----------------------------- | ---------------------------------------------- |
| `herkunft/anbau.jpg`          | Hero der Startseite, Feature-Bild „Herkunft"   |
| `herkunft/produzent.jpg`      | Startseite, Abschnitt „Herkunft"               |
| `produkte/*`                  | Produktkarten (Start + Produktseite), Galerie  |
| `herkunft/*` (Galerie)        | Herkunft, „Menschen hinter der Vanille"        |
| `herkunft/qualitaetskontrolle.jpg` | Über uns                                   |
| `logo/vanora-logo-mark.png`   | Kopfzeile (Navigation), Fusszeile-Link         |
| `logo/vanora-logo.png`        | Herkunft (Marken-Band), `og-default.jpg`       |

## Hinweise

- **Entfernte Datei:** Eine ursprünglich hochgeladene Collage enthielt den
  sichtbaren Wasserzeichen-/Fotografen-Credit einer dritten Person
  („DENISE MATRINGE"). Sie wurde aus Rechtegründen **nicht** eingebunden und
  entfernt. Bitte nur Bilder verwenden, für die die Nutzungsrechte vorliegen.
- **Logo-Transparenz:** Die Logo-PNGs wurden freigestellt (transparenter
  Hintergrund) und funktionieren auf hellen wie dunklen Flächen.
- **Bilder tauschen:** Einfach die Datei mit gleichem Namen ersetzen – oder den
  Pfad im jeweiligen Abschnitt bzw. in `src/config/content.ts` (`image`-Feld)
  anpassen. Next.js optimiert die Bilder automatisch.
