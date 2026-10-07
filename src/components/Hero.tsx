import type { Simulation } from "../types";
import Simulator from "./Simulator";

const bg = "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=2000&q=70"; // troque por uma foto sua

export default function Hero({ onResult }: { onResult: (s: Simulation) => void }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:pt-20">
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Planeje seu futuro</p>
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Quanto custa<br /><span className="text-brand">morar aqui?</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-white/85">
          Descubra <strong>quanto você realmente precisaria</strong> para viver em outra cidade. Faça uma simulação
          personalizada e compare diferentes lugares antes de tomar sua decisão.
        </p>
        <p className="absolute right-10 top-24 hidden max-w-[220px] -rotate-6 font-hand text-3xl leading-tight text-white lg:block">
          “Mais do que um número, é sobre seu estilo de vida.”
        </p>
        <div className="mt-24 sm:mt-28"><Simulator onResult={onResult} /></div>
      </div>
    </section>
  );
}
