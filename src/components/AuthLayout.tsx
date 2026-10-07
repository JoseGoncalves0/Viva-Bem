import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import AuthBackdrop from "./AuthBackdrop";
import Logo, { LogoMark } from "./Logo";

interface Feature { icon: LucideIcon; title: string; text: string }

interface Props {
  eyebrow: string;
  title: ReactNode;
  description: string;
  features: Feature[];
  children: ReactNode; // conteúdo do cartão (formulário)
}

export default function AuthLayout({ eyebrow, title, description, features, children }: Props) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink">
      {/* fundo: ocupa a esquerda e se dissolve no azul escuro da direita */}
      <div
        className="absolute inset-y-0 left-0 w-full opacity-60 lg:w-[62%] lg:opacity-100"
        style={{ maskImage: "linear-gradient(to right, black 62%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, black 62%, transparent 100%)" }}
      >
        <AuthBackdrop />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/20 to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-[1.05fr_1fr]">
        {/* lado esquerdo */}
        <section className="hidden flex-col justify-between px-12 pb-12 pt-10 lg:flex xl:px-24">
          <Logo />

          <div className="max-w-[560px] py-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand">{eyebrow}</p>
            <h1 className="mt-5 text-[52px] font-extrabold leading-[1.05] tracking-tight xl:text-[58px]">{title}</h1>
            <p className="mt-6 max-w-[470px] text-[17px] leading-relaxed text-white/90">{description}</p>

            <ul className="mt-10 space-y-6">
              {features.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-5">
                  <Icon className="mt-1 h-7 w-7 shrink-0 text-brand" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-bold">{title}</p>
                    <p className="mt-1 max-w-[300px] text-sm leading-relaxed text-white/75">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-fit -rotate-6">
            <p className="font-hand text-[26px] italic leading-tight text-white">
              Mais do que um número,<br />é sobre o seu estilo de vida.
            </p>
            <svg viewBox="0 0 160 20" className="mt-1 h-5 w-40" aria-hidden="true">
              <path d="M4 15 C 40 6, 90 4, 156 3" stroke="#2fd9a8" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M30 18 C 70 11, 100 9, 130 8" stroke="#2fd9a8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </section>

        {/* lado direito: cartão */}
        <section className="flex items-center justify-center px-4 py-10 sm:px-8 lg:px-10">
          <div className="w-full max-w-[600px] rounded-[28px] border border-white/10 bg-[#0b1626]/85 px-6 py-10 shadow-2xl shadow-black/40 backdrop-blur-md sm:px-12">
            <div className="mb-9 flex justify-center">
              <div className="flex items-center gap-3">
                <LogoMark className="h-12 w-12" />
                <span className="flex flex-col leading-none">
                  <span className="text-[30px] font-extrabold tracking-tight">VivaBem</span>
                  <span className="mt-1 text-[13px] font-medium text-white/80">Quanto custa morar aqui?</span>
                </span>
              </div>
            </div>
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}
