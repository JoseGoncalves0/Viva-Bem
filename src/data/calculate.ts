import type { City, CostBreakdown, Housing, Profile, Simulation } from "../types";
import { baseCosts, profileFactor } from "./cities";

const round10 = (n: number) => Math.round(n / 10) * 10;

export function simulate(city: City, profile: Profile, housing: Housing): Simulation {
  const f = profileFactor[profile];
  const living = (v: number) => round10(v * city.factor * f.living);
  const breakdown: CostBreakdown = {
    moradia: round10(city.housing[housing] * f.housing),
    alimentacao: living(baseCosts.alimentacao),
    transporte: living(baseCosts.transporte),
    contas: living(baseCosts.contas),
    internet: living(baseCosts.internet),
    lazer: living(baseCosts.lazer),
    outros: living(baseCosts.outros),
  };
  const total = Object.values(breakdown).reduce((a, b) => a + b, 0);
  return { city, profile, housing, breakdown, total };
}

export const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export const normalize = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
