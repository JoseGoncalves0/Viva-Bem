import { Apple, Bus, Gamepad2, HomeIcon, Lightbulb, Package, Smartphone, type LucideIcon } from "lucide-react";
import type { CategoryKey, Simulation } from "../types";
import { brl } from "../data/calculate";
import { categoryColors, categoryLabels, housingLabels, profileLabels } from "../data/cities";

const icons: Record<CategoryKey, LucideIcon> = {
  moradia: HomeIcon, alimentacao: Apple, transporte: Bus, contas: Lightbulb, internet: Smartphone, lazer: Gamepad2, outros: Package,
};

export default function CostResult({ sim }: { sim: Simulation }) {
  const entries = Object.entries(sim.breakdown) as [CategoryKey, number][];
  let acc = 0;
  const gradient = entries.map(([k, v]) => {
    const start = (acc / sim.total) * 100;
    acc += v;
    return `${categoryColors[k]} ${start}% ${(acc / sim.total) * 100}%`;
  }).join(", ");

  return (
    <section id="resultado" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16">
      <p className="text-sm text-white/60">{sim.city.name} - {sim.city.state} · {profileLabels[sim.profile]} · {housingLabels[sim.housing]}</p>
      <h2 className="mt-2 text-sm font-bold uppercase tracking-widest text-brand">Custo estimado</h2>
      <p className="mt-1 text-5xl font-extrabold">{brl(sim.total)}<span className="text-2xl font-semibold text-white/60">/mês</span></p>
      <p className="mt-2 text-xs text-white/40">Estimativa de demonstração com dados fictícios.</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
        <ul className="grid gap-3 sm:grid-cols-2">
          {entries.map(([k, v]) => {
            const Icon = icons[k];
            return (
              <li key={k} className="flex items-center gap-4 rounded-xl border border-line bg-panel p-4 transition hover:border-brand/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg" style={{ background: `${categoryColors[k]}22`, color: categoryColors[k] }}>
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm text-white/70">{categoryLabels[k]}</p>
                  <p className="font-bold">{brl(v)}</p>
                </div>
                <span className="text-xs text-white/50">{Math.round((v / sim.total) * 100)}%</span>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-center">
          <div className="relative h-56 w-56 rounded-full" style={{ background: `conic-gradient(${gradient})` }} role="img" aria-label="Distribuição dos gastos">
            <div className="absolute inset-7 flex flex-col items-center justify-center rounded-full bg-ink">
              <span className="text-xs text-white/50">Total</span>
              <span className="font-extrabold">{brl(sim.total)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
