import { ArrowDown, ArrowUp } from "lucide-react";
import type { City } from "../types";
import { brl } from "../data/calculate";

export default function CityCard({ city }: { city: City }) {
  const h = city.highlight;
  if (!h) return null;
  const up = h.vsAverage > 0;
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-panel transition hover:-translate-y-1 hover:border-brand/40">
      {/* Troque o gradiente por <img src={city.image}> quando tiver fotos */}
      <div className={`flex h-32 items-end bg-gradient-to-br ${h.gradient} p-3`}>
        <span className="text-sm font-bold">{city.name} - {city.state}</span>
      </div>
      <div className="p-4">
        <p className="text-xs text-white/50">Custo estimado (1 pessoa)</p>
        <p className="mt-1 text-xl font-extrabold">{brl(h.monthly)}/mês</p>
        <div className="mt-4 flex items-center gap-3">
          <span className={`flex h-8 w-8 items-center justify-center rounded-full ${up ? "bg-rose-500" : "bg-brand text-ink"}`}>
            {up ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
          </span>
          <div className="text-xs">
            <p className="font-bold text-brand">{Math.abs(h.vsAverage)}% {up ? "mais caro" : "mais barato"}</p>
            <p className="text-white/50">que a média nacional</p>
          </div>
        </div>
      </div>
    </article>
  );
}
