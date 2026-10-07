import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

const pins = [[118, 62], [150, 98], [132, 135], [100, 120], [112, 160]];

export default function BrazilMap() {
  const [msg, setMsg] = useState(false);
  return (
    <div className="flex flex-col items-start">
      <svg viewBox="0 0 220 210" className="h-44 w-auto" role="img" aria-label="Mapa simplificado do Brasil">
        <path d="M60 30 L110 15 L150 35 L190 60 L195 95 L170 130 L150 165 L120 195 L95 175 L90 140 L55 125 L35 90 L45 55 Z"
          fill="#2a3a52" stroke="#3b4f6d" strokeWidth="2" strokeLinejoin="round" />
        {pins.map(([x, y], i) => (
          <g key={i} transform={`translate(${x - 9} ${y - 22})`}>
            <MapPin width={18} height={22} fill="#2fd9a8" stroke="#0a1220" strokeWidth={1.5} />
          </g>
        ))}
      </svg>
      <h3 className="mt-4 text-lg font-bold">Explore o Brasil</h3>
      <p className="mt-1 text-sm text-white/70">Compare cidades e encontre o lugar ideal para o seu bolso.</p>
      <button onClick={() => setMsg(true)} className="mt-4 flex items-center gap-2 rounded-xl border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-ink">
        Ver mapa interativo <ArrowRight className="h-4 w-4" />
      </button>
      {msg && <p role="status" className="mt-3 text-xs text-amber-300">🚧 Mapa interativo em desenvolvimento.</p>}
    </div>
  );
}
