import { useEffect, useState } from "react";
import { ArrowRight, BarChart3, Coins, MapPin, UserRound } from "lucide-react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import CityCard from "../components/CityCard";
import BrazilMap from "../components/BrazilMap";
import CostResult from "../components/CostResult";
import { cities } from "../data/cities";
import type { Simulation } from "../types";

const features = [
  { icon: Coins, title: "Simule seus gastos", text: "Veja quanto você gastaria com moradia, alimentação, transporte e muito mais." },
  { icon: MapPin, title: "Compare cidades", text: "Descubra qual lugar combina mais com seu perfil e orçamento." },
  { icon: BarChart3, title: "Planeje seu futuro", text: "Tenha uma visão clara de quanto precisa ganhar para viver em determinado lugar." },
  { icon: UserRound, title: "Personalize sua experiência", text: "Diferentes perfis, diferentes estilos de vida. Aqui, o cálculo é feito para você." },
];

export default function Home() {
  const [sim, setSim] = useState<Simulation | null>(null);

  useEffect(() => {
    if (sim) document.getElementById("resultado")?.scrollIntoView({ behavior: "smooth" });
  }, [sim]);

  return (
    <>
      <Header />
      <main>
        <Hero onResult={setSim} />
        {sim && <CostResult sim={sim} />}

        <section className="border-y border-white/5 bg-panel/40">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr_240px]">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand">Cidades em destaque</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight">Veja quanto custa morar nas cidades <span className="text-brand">mais buscadas</span></h2>
              <p className="mt-5 text-sm leading-relaxed text-white/60">
                Confira a estimativa de custo de vida em algumas das cidades mais procuradas do Brasil e descubra qual delas se encaixa melhor no seu perfil.
              </p>
              <button className="mt-8 flex items-center gap-2 rounded-xl border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-ink">
                Ver todas as cidades <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {cities.filter((c) => c.highlight).map((c) => <CityCard key={c.id} city={c} />)}
            </div>
            <div className="lg:border-l lg:border-line lg:pl-8"><BrazilMap /></div>
          </div>
        </section>
      </main>
    </>
  );
}
