/**
 * =============================================================================
 * INHALTS-DATEN
 * =============================================================================
 * Zentrale, wiederverwendbare Inhaltsbausteine (Produkte, Branchen, FAQ …).
 * Reine Daten – keine Komponenten, damit sie leicht gepflegt werden koennen.
 */

/* --------------------------------------------------------------------------
 * Branchen / Einsatzbereiche
 * ------------------------------------------------------------------------ */
export type Industry = {
  title: string;
  description: string;
  icon: string; // Schluessel fuer Icon-Komponente
};

export const industries: Industry[] = [
  {
    title: "Patisserien und Konditoreien",
    description:
      "Für Cremes, Mousses, Tortenfüllungen und feine Desserts, in denen sich ein klares, komplexes Vanillearoma entfalten soll.",
    icon: "cake",
  },
  {
    title: "Chocolatiers und Confiserien",
    description:
      "Für Ganache, Pralinenfüllungen und Trüffel – dort, wo Vanille die Schokolade begleitet, ohne sie zu überdecken.",
    icon: "chocolate",
  },
  {
    title: "Eisdielen und Glacemanufakturen",
    description:
      "Für Glace und Sorbets mit ausgeprägtem Mark und sichtbaren Vanillepunkten als Zeichen echter Schote.",
    icon: "icecream",
  },
  {
    title: "Hotels und Restaurants",
    description:
      "Für die à-la-carte-Küche und Bankett-Desserts, bei denen gleichbleibende Qualität über die Saison zählt.",
    icon: "hotel",
  },
  {
    title: "Bäckereien",
    description:
      "Für Feingebäck, Hefeteige, Puddings und Füllungen mit natürlicher Vanillenote statt reinem Aroma.",
    icon: "bread",
  },
  {
    title: "Lebensmittelmanufakturen",
    description:
      "Für Konfitüren, Aufstriche, Milchprodukte und andere Erzeugnisse mit definierter, wiederkehrender Rezeptur.",
    icon: "jar",
  },
  {
    title: "Destillerien",
    description:
      "Für Liköre, Spirituosen und Ansätze, in denen Vanille als aromatische Grundlage eingesetzt wird.",
    icon: "bottle",
  },
  {
    title: "Feinkost- und Gewürzhändler",
    description:
      "Für den Weiterverkauf sortierter Schoten an eine anspruchsvolle, fachkundige Kundschaft.",
    icon: "shop",
  },
];

/* --------------------------------------------------------------------------
 * Produkte
 * ------------------------------------------------------------------------ */
export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  cta: string;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    slug: "gourmet-bourbon-vanille",
    name: "Gourmet-Bourbon-Vanille",
    shortDescription:
      "Weiche, aromatische und fleischige Vanilleschoten für hochwertige Desserts, Cremes, Schokolade, Gebäck und Gastronomie.",
    longDescription:
      "Unsere Gourmet-Qualität besteht aus sorgfältig sortierten, biegsamen Schoten mit hohem Markanteil. Sie eignet sich überall dort, wo Vanille sichtbar und geschmacklich im Vordergrund steht – vom Tellergericht bis zur feinen Patisserie.",
    features: [
      "Vanilla planifolia",
      "Herkunft Madagaskar",
      "sorgfältig fermentiert und getrocknet",
      "intensive, komplexe Aromatik",
      "verschiedene Längen und Sortierungen",
      "Verpackungseinheiten ab 100 Gramm",
    ],
    cta: "Angebot anfragen",
    image: "/images/produkte/gourmet-bourbon-vanille.jpg",
    imageAlt:
      "Gebündelte, glänzende Bourbon-Vanilleschoten aus Madagaskar in Gourmet-Qualität",
  },
  {
    slug: "vanille-extraktion-verarbeitung",
    name: "Vanille für Extraktion und Verarbeitung",
    shortDescription:
      "Vanilleschoten für Extrakte, Sirupe, Spirituosen, Eis, Pulver und industrielle Weiterverarbeitung.",
    longDescription:
      "Diese Qualität stellt das Aroma in den Vordergrund und verzichtet auf hohe optische Anforderungen. Sie ist die wirtschaftliche Grundlage für Extrakte, Sirupe, Pulver und weitere Erzeugnisse, bei denen die Schote nicht sichtbar bleibt.",
    features: [
      "gutes Aroma bei geringeren optischen Anforderungen",
      "ideal für Extraktion und Verarbeitung",
      "attraktive B2B-Konditionen",
      "größere Mengen auf Anfrage",
    ],
    cta: "Produktspezifikation anfragen",
    image: "/images/produkte/vanille-extraktion.jpg",
    imageAlt:
      "Vanilleschoten für die Extraktion und Weiterverarbeitung auf hellem Untergrund",
  },
];

/* --------------------------------------------------------------------------
 * Vertrauensmerkmale (Hero)
 * ------------------------------------------------------------------------ */
export const trustBadges: string[] = [
  "Direkte Produzentenbeziehungen",
  "Chargenbezogene Qualitätsprüfung",
  "Flexible B2B-Mengen",
  "Lieferung aus der Schweiz",
];

/* --------------------------------------------------------------------------
 * Vorteile („Warum mit uns arbeiten?“)
 * ------------------------------------------------------------------------ */
export type Benefit = { title: string; description: string; icon: string };

export const benefits: Benefit[] = [
  {
    title: "Direkter Zugang zu Produzenten",
    description:
      "Wir arbeiten mit ausgewählten Partnern in Madagaskar zusammen – kurze Wege statt anonymer Zwischenhändler.",
    icon: "handshake",
  },
  {
    title: "Transparente Lieferkette",
    description:
      "Chargen bleiben nachvollziehbar, von der Anbauregion bis zur Auslieferung aus der Schweiz.",
    icon: "route",
  },
  {
    title: "Persönliche Qualitätskontrolle",
    description:
      "Jede Lieferung wird nach definierten Merkmalen geprüft, bevor sie zu Ihnen gelangt.",
    icon: "check",
  },
  {
    title: "Kleine und größere Mengen",
    description:
      "Vom ersten Testbezug bis zur wiederkehrenden Belieferung – die Menge richtet sich nach Ihrem Bedarf.",
    icon: "scale",
  },
  {
    title: "Schnelle Kommunikation",
    description:
      "Ein fester Ansprechpartner in der Schweiz beantwortet Anfragen unkompliziert und zeitnah.",
    icon: "chat",
  },
  {
    title: "Muster vor der ersten Bestellung",
    description:
      "Qualifizierte Geschäftskunden können die Qualität vorab prüfen, bevor sie sich entscheiden.",
    icon: "sample",
  },
];

/* --------------------------------------------------------------------------
 * Prozess („So funktioniert die Zusammenarbeit“)
 * ------------------------------------------------------------------------ */
export type ProcessStep = { title: string; description: string };

export const processSteps: ProcessStep[] = [
  {
    title: "Bedarf mitteilen",
    description:
      "Sie nennen uns gewünschte Qualität, Menge und Verwendungszweck.",
  },
  {
    title: "Muster erhalten",
    description:
      "Geeignete Geschäftskunden erhalten ein Produktmuster zur Prüfung.",
  },
  {
    title: "Qualität prüfen",
    description:
      "Sie testen Aroma, Feuchtigkeit und Verarbeitung in Ihrem Betrieb.",
  },
  {
    title: "Angebot und Lieferung",
    description:
      "Sie erhalten ein individuelles Angebot; die Ware wird nach Vereinbarung geliefert.",
  },
];

/* --------------------------------------------------------------------------
 * Qualitaetsmerkmale
 * ------------------------------------------------------------------------ */
export const qualityAttributes: { label: string; description: string }[] = [
  { label: "Botanische Art", description: "Vanilla planifolia (Bourbon-Typ)." },
  { label: "Herkunft", description: "Madagaskar, definierte Anbauregionen." },
  {
    label: "Länge der Schoten",
    description: "Sortierung nach Längenklassen je nach Qualität.",
  },
  {
    label: "Feuchtigkeitsbereich",
    description: "Definierter Feuchtebereich je Charge und Qualitätsstufe.",
  },
  {
    label: "Optischer Zustand",
    description: "Bewertung von Farbe, Oberfläche und Unversehrtheit.",
  },
  {
    label: "Flexibilität",
    description: "Biegsamkeit als Hinweis auf Feuchte und Frische.",
  },
  {
    label: "Aroma",
    description: "Sensorische Beurteilung von Intensität und Profil.",
  },
  {
    label: "Chargennummer",
    description: "Eindeutige Kennzeichnung jeder Lieferung.",
  },
  {
    label: "Rückverfolgbarkeit",
    description: "Zuordnung der Charge zu Herkunft und Verarbeitung.",
  },
  {
    label: "Mögliche Laboranalysen",
    description: "Analyseunterlagen je nach Charge auf Anfrage.",
  },
];

/* --------------------------------------------------------------------------
 * Lieferkette („Herkunft“)
 * ------------------------------------------------------------------------ */
export type SupplyStep = { title: string; description: string };

export const supplyChain: SupplyStep[] = [
  {
    title: "Anbau",
    description:
      "Die Vanillepflanze wächst in tropischen Regionen Madagaskars an schattigen Trägern.",
  },
  {
    title: "Bestäubung",
    description:
      "Die Blüten werden von Hand bestäubt – ein aufwändiger, entscheidender Schritt.",
  },
  {
    title: "Ernte",
    description:
      "Die Schoten werden zum richtigen Reifezeitpunkt geerntet, um das Aromapotenzial zu sichern.",
  },
  {
    title: "Fermentation",
    description:
      "Durch kontrolliertes Schwitzen und Ruhen entwickelt sich das charakteristische Aroma.",
  },
  {
    title: "Trocknung",
    description:
      "Die Schoten trocknen langsam, bis Feuchte und Flexibilität ausgewogen sind.",
  },
  {
    title: "Sortierung",
    description:
      "Sortierung nach Länge, Zustand und Qualität in definierte Klassen.",
  },
  {
    title: "Qualitätskontrolle",
    description:
      "Prüfung nach festgelegten Merkmalen und Dokumentation der Charge.",
  },
  {
    title: "Export",
    description:
      "Fachgerechte Verpackung und Ausfuhr aus Madagaskar mit Chargenzuordnung.",
  },
  {
    title: "Lieferung an den Kunden",
    description:
      "Kommissionierung und Versand an Geschäftskunden aus der Schweiz.",
  },
];

/* --------------------------------------------------------------------------
 * Verpackungseinheiten
 * ------------------------------------------------------------------------ */
export const packagingUnits: string[] = [
  "100 g",
  "250 g",
  "500 g",
  "1 kg",
  "größere Mengen auf Anfrage",
];

/* --------------------------------------------------------------------------
 * FAQ
 * ------------------------------------------------------------------------ */
export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "Welche Mindestbestellmenge gibt es?",
    answer:
      "Wir arbeiten flexibel. Kleinere Erstbezüge sind ebenso möglich wie regelmäßige größere Lieferungen. Die konkrete Menge stimmen wir im Rahmen Ihrer Anfrage ab.",
  },
  {
    question: "Kann ich ein Muster erhalten?",
    answer:
      "Für qualifizierte Geschäftskunden prüfen wir gerne die Zusendung eines Produktmusters, damit Sie Aroma und Verarbeitung vorab beurteilen können. Nutzen Sie dafür unser Musterformular.",
  },
  {
    question: "Woher stammt die Vanille?",
    answer:
      "Unsere Bourbon-Vanille (Vanilla planifolia) stammt von ausgewählten Produzenten und Partnern in Madagaskar. Jede Charge bleibt der Herkunft zugeordnet.",
  },
  {
    question: "Welche Verpackungseinheiten sind verfügbar?",
    answer:
      "Verfügbar sind unter anderem 100 g, 250 g, 500 g und 1 kg. Größere Mengen bereiten wir individuell auf Anfrage vor.",
  },
  {
    question: "Wie wird die Vanille gelagert?",
    answer:
      "Wir empfehlen eine kühle, dunkle und luftdichte Lagerung. Detaillierte Lagerhinweise finden Sie auf der Produktseite und in den Produktdatenblättern.",
  },
  {
    question: "Gibt es unterschiedliche Qualitätsstufen?",
    answer:
      "Ja. Wir unterscheiden insbesondere zwischen Gourmet-Qualität für sichtbare Anwendungen und Vanille für Extraktion und Verarbeitung. Die passende Stufe hängt von Ihrem Verwendungszweck ab.",
  },
  {
    question: "Liefern Sie nur innerhalb der Schweiz?",
    answer:
      "Wir liefern aus der Schweiz. Lieferungen ins Ausland klären wir individuell im Rahmen Ihrer Anfrage.",
  },
  {
    question: "Können größere Mengen regelmäßig geliefert werden?",
    answer:
      "Ja. Für wiederkehrende Belieferungen vereinbaren wir passende Mengen und Intervalle – gerne auch mit Mengenstaffelung.",
  },
  {
    question: "Sind Analyseunterlagen verfügbar?",
    answer:
      "Produktspezifikationen und – je nach Charge – Analyseunterlagen stellen wir Geschäftskunden auf Anfrage zur Verfügung.",
  },
  {
    question: "Wie erhalte ich ein individuelles Angebot?",
    answer:
      "Teilen Sie uns über das Anfrageformular Produkt, Menge und Verwendungszweck mit. Wir melden uns mit einem auf Ihren Bedarf abgestimmten Angebot.",
  },
];

/* --------------------------------------------------------------------------
 * Auswahllisten fuer Formulare
 * ------------------------------------------------------------------------ */
export const industryOptions = [
  "Patisserie / Konditorei",
  "Chocolatier / Confiserie",
  "Eisdiele / Glacemanufaktur",
  "Hotel / Restaurant",
  "Bäckerei",
  "Lebensmittelmanufaktur",
  "Destillerie",
  "Feinkost- / Gewürzhandel",
  "Andere",
];

export const productOptions = [
  "Gourmet-Bourbon-Vanille",
  "Vanille für Extraktion und Verarbeitung",
  "Beides / noch unentschieden",
];

export const orderFrequencyOptions = [
  "Einmalig / Testbezug",
  "Monatlich",
  "Vierteljährlich",
  "Nach Bedarf",
];

export const packagingOptions = [
  "100 g",
  "250 g",
  "500 g",
  "1 kg",
  "Größere Mengen",
];
