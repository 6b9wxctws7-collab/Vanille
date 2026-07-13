/**
 * Stilisierte Karte von Madagaskar (dekorativ, vereinfachte Silhouette).
 * Der Marker deutet exemplarisch eine Anbauregion an – die konkrete
 * Region ist als Platzhalter hinterlegt.
 */
export function MadagascarMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 320"
        role="img"
        aria-label="Stilisierte Karte von Madagaskar mit angedeuteter Anbauregion"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="mdg-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c9a978" />
            <stop offset="100%" stopColor="#8f6f42" />
          </linearGradient>
        </defs>
        {/* Vereinfachte Inselform */}
        <path
          d="M112 8c14 4 22 20 20 40-2 16-10 28-8 44 2 15 12 26 14 44 3 20-4 38-10 58-6 20-8 42-20 58-9 12-24 18-34 12-9-6-9-20-6-34 4-18 12-32 12-52 0-16-8-28-10-44-2-18 6-34 8-52 2-16-2-32 4-46 6-16 20-30 24-30Z"
          fill="url(#mdg-fill)"
          stroke="#7a5c36"
          strokeWidth="2"
        />
        {/* Anbauregion-Marker (Platzhalter, z. B. Region SAVA im Nordosten) */}
        <g>
          <circle cx="126" cy="70" r="7" fill="#2b2320" />
          <circle cx="126" cy="70" r="13" fill="none" stroke="#2b2320" strokeWidth="1.5" opacity="0.4" />
        </g>
      </svg>
      <span className="absolute right-2 top-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-cocoa">
        Anbauregion: [Platzhalter]
      </span>
    </div>
  );
}
