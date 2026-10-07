import type { City, CategoryKey, Housing, Profile } from "../types";

// ⚠️ DADOS FICTÍCIOS DE DEMONSTRAÇÃO.
// Para usar dados reais, substitua por uma chamada de API mantendo o formato de City[].
export const cities: City[] = [
  { id: "sp", name: "São Paulo", state: "SP", factor: 1, housing: { quarto: 1100, kitnet: 1600, apartamento: 2100, casa: 3200 },
    highlight: { monthly: 3720, vsAverage: 32, gradient: "from-amber-500/50 via-sky-700/40 to-slate-900" } },
  { id: "cwb", name: "Curitiba", state: "PR", factor: 0.82, housing: { quarto: 800, kitnet: 1200, apartamento: 1650, casa: 2500 },
    highlight: { monthly: 3090, vsAverage: -12, gradient: "from-emerald-500/40 via-teal-700/40 to-slate-900" } },
  { id: "bh", name: "Belo Horizonte", state: "MG", factor: 0.8, housing: { quarto: 750, kitnet: 1150, apartamento: 1550, casa: 2300 },
    highlight: { monthly: 2940, vsAverage: -18, gradient: "from-sky-500/40 via-indigo-700/40 to-slate-900" } },
  { id: "rj", name: "Rio de Janeiro", state: "RJ", factor: 1.05, housing: { quarto: 1000, kitnet: 1500, apartamento: 2200, casa: 3300 } },
  { id: "poa", name: "Porto Alegre", state: "RS", factor: 0.85, housing: { quarto: 800, kitnet: 1200, apartamento: 1700, casa: 2600 } },
  { id: "rec", name: "Recife", state: "PE", factor: 0.78, housing: { quarto: 700, kitnet: 1050, apartamento: 1500, casa: 2200 } },
  { id: "flo", name: "Florianópolis", state: "SC", factor: 0.95, housing: { quarto: 950, kitnet: 1500, apartamento: 2100, casa: 3100 } },
];

// Custos-base de uma pessoa solteira em São Paulo (sem moradia).
export const baseCosts: Omit<Record<CategoryKey, number>, "moradia"> = {
  alimentacao: 650, transporte: 280, contas: 250, internet: 120, lazer: 200, outros: 120,
};

export const profileFactor: Record<Profile, { living: number; housing: number }> = {
  estudante: { living: 0.8, housing: 0.85 },
  solteiro: { living: 1, housing: 1 },
  casal: { living: 1.7, housing: 1.15 },
  familia: { living: 2.6, housing: 1.4 },
  aposentado: { living: 0.9, housing: 1 },
};

export const profileLabels: Record<Profile, string> = {
  estudante: "Estudante", solteiro: "Pessoa solteira", casal: "Casal", familia: "Família", aposentado: "Aposentado",
};
export const housingLabels: Record<Housing, string> = {
  quarto: "Quarto compartilhado", kitnet: "Kitnet", apartamento: "Apartamento", casa: "Casa",
};
export const categoryLabels: Record<CategoryKey, string> = {
  moradia: "Moradia", alimentacao: "Alimentação", transporte: "Transporte", contas: "Contas (energia/água)",
  internet: "Internet/celular", lazer: "Lazer", outros: "Outros",
};
export const categoryColors: Record<CategoryKey, string> = {
  moradia: "#2fd9a8", alimentacao: "#38bdf8", transporte: "#a78bfa", contas: "#fbbf24",
  internet: "#fb7185", lazer: "#f472b6", outros: "#94a3b8",
};
