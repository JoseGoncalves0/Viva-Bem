export type Profile = "estudante" | "solteiro" | "casal" | "familia" | "aposentado";
export type Housing = "quarto" | "kitnet" | "apartamento" | "casa";

export type CategoryKey = "moradia" | "alimentacao" | "transporte" | "contas" | "internet" | "lazer" | "outros";
export type CostBreakdown = Record<CategoryKey, number>;

export interface City {
  id: string;
  name: string;
  state: string;
  /** Multiplicador sobre os custos-base de São Paulo (demo). */
  factor: number;
  /** Aluguel mensal por tipo de moradia (demo). */
  housing: Record<Housing, number>;
  /** Dados exibidos nos cards de destaque (demo). */
  highlight?: { monthly: number; vsAverage: number; gradient: string };
}

export interface Simulation {
  city: City;
  profile: Profile;
  housing: Housing;
  breakdown: CostBreakdown;
  total: number;
}
