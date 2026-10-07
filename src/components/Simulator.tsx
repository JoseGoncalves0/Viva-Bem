import { useState, type FormEvent } from "react";
import { ArrowRight, ChevronDown, Home, MapPin, User } from "lucide-react";
import { cities, housingLabels, profileLabels } from "../data/cities";
import { normalize, simulate } from "../data/calculate";
import type { Housing, Profile, Simulation } from "../types";

interface Props { onResult: (s: Simulation) => void }

function Select({ icon, label, value, onChange, options }: {
  icon: React.ReactNode; label: string; value: string; onChange: (v: string) => void; options: Record<string, string>;
}) {
  return (
    <label className="relative flex items-center gap-3 rounded-xl bg-white/5 px-4 py-2.5 ring-1 ring-white/5 transition focus-within:ring-brand/60">
      <span className="text-white/80">{icon}</span>
      <span className="flex flex-1 flex-col text-xs text-white/70">
        {label}
        <select value={value} onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-transparent text-sm font-medium text-white outline-none">
          <option value="" className="bg-panel">Selecione</option>
          {Object.entries(options).map(([k, v]) => <option key={k} value={k} className="bg-panel">{v}</option>)}
        </select>
      </span>
      <ChevronDown className="pointer-events-none h-4 w-4 text-white/80" />
    </label>
  );
}

export default function Simulator({ onResult }: Props) {
  const [query, setQuery] = useState("");
  const [profile, setProfile] = useState("");
  const [housing, setHousing] = useState("");
  const [error, setError] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const q = normalize(query);
    const city = q && cities.find((c) => normalize(c.name).includes(q) || normalize(`${c.name} ${c.state}`).includes(q));
    if (!city) return setError("Cidade não encontrada. Tente São Paulo, Curitiba, Belo Horizonte, Rio de Janeiro…");
    if (!profile || !housing) return setError("Escolha seu perfil e o tipo de moradia.");
    setError("");
    onResult(simulate(city, profile as Profile, housing as Housing));
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-white/20 bg-ink/70 p-4 backdrop-blur-md">
      <div className="grid gap-3 lg:grid-cols-[1.3fr_1fr_1fr_auto]">
        <label className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-4 ring-1 ring-white/5 focus-within:ring-brand/60">
          <MapPin className="h-5 w-5 text-white/80" />
          <input list="cidades" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Digite uma cidade ou bairro"
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/50" />
          <datalist id="cidades">{cities.map((c) => <option key={c.id} value={`${c.name} - ${c.state}`} />)}</datalist>
        </label>
        <Select icon={<User className="h-5 w-5" />} label="Perfil" value={profile} onChange={setProfile} options={profileLabels} />
        <Select icon={<Home className="h-5 w-5" />} label="Tipo de moradia" value={housing} onChange={setHousing} options={housingLabels} />
        <button type="submit" className="flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-4 text-sm font-bold text-ink transition hover:brightness-110 active:scale-[.98]">
          <ArrowRight className="h-4 w-4" /> Ver estimativa
        </button>
      </div>
      {error && <p role="alert" className="mt-3 px-1 text-sm text-rose-300">{error}</p>}
    </form>
  );
}
