import { useState } from "react";
import { LogOut, MapPin, Menu, Search, X } from "lucide-react";
import { logout, useSession } from "../data/auth";

const links = ["Início", "Comparar cidades", "Sobre", "Artigos"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const session = useSession();
  const firstName = session?.name.split(" ")[0];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5">
        <a href="#/" className="flex items-center gap-3">
          <MapPin className="h-8 w-8 fill-brand text-brand" />
          <span className="text-2xl font-extrabold tracking-tight">VivaBem</span>
          <span className="hidden text-xs font-medium text-white/80 xl:block">Quanto custa morar aqui?</span>
        </a>

        <nav className="hidden items-center gap-10 text-sm font-semibold lg:flex">
          {links.map((l, i) => (
            <a key={l} href="#/" className={`relative py-6 transition-colors hover:text-brand ${i === 0 ? "text-brand" : ""}`}>
              {l}
              {i === 0 && <span className="absolute bottom-0 left-1/2 h-0.5 w-10 -translate-x-1/2 rounded bg-brand" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Pesquisar" className="rounded-full p-2 transition hover:bg-white/10"><Search className="h-5 w-5" /></button>
          {session ? (
            <>
              <span className="hidden text-sm font-semibold sm:block">Olá, <span className="text-brand">{firstName}</span></span>
              <button onClick={logout} className="hidden items-center gap-2 rounded-xl border border-white/60 px-5 py-2.5 text-sm font-semibold transition hover:border-brand hover:text-brand sm:flex">
                <LogOut className="h-4 w-4" /> Sair
              </button>
            </>
          ) : (
            <>
              <a href="#/login" className="hidden rounded-xl border border-white/60 px-6 py-2.5 text-sm font-semibold transition hover:border-brand hover:text-brand sm:block">Entrar</a>
              <a href="#/cadastro" className="hidden rounded-xl bg-brand px-6 py-2.5 text-sm font-bold text-ink transition hover:brightness-110 sm:block">Cadastrar</a>
            </>
          )}
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="rounded-lg p-2 hover:bg-white/10 lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ink px-5 pb-5 lg:hidden">
          {links.map((l) => (
            <a key={l} href="#/" className="block border-b border-white/5 py-3 font-semibold">{l}</a>
          ))}
          <div className="mt-4 flex gap-3">
            {session ? (
              <button onClick={logout} className="flex-1 rounded-xl border border-white/60 py-2.5 text-sm font-semibold">Sair</button>
            ) : (
              <>
                <a href="#/login" className="flex-1 rounded-xl border border-white/60 py-2.5 text-center text-sm font-semibold">Entrar</a>
                <a href="#/cadastro" className="flex-1 rounded-xl bg-brand py-2.5 text-center text-sm font-bold text-ink">Cadastrar</a>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
