import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, BarChart3, CalendarDays, Loader2, Lock, Mail, MapPin } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import AuthField from "../components/AuthField";
import { GoogleButton, Notice, OrDivider } from "../components/AuthParts";
import { loginUser, useSession } from "../data/auth";
import { navigate } from "../lib/router";

const features = [
  { icon: MapPin, title: "Simule seus gastos", text: "Veja quanto você gastaria com moradia, alimentação, transporte e muito mais." },
  { icon: BarChart3, title: "Compare cidades", text: "Descubra qual lugar combina mais com seu perfil e orçamento." },
  { icon: CalendarDays, title: "Planeje seu futuro", text: "Tenha uma visão clara de quanto precisa ganhar e se o seu salário é suficiente." },
];

export default function Login() {
  const session = useSession();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ id?: string; password?: string }>({});
  const [notice, setNotice] = useState<{ tone: "error" | "info"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => { if (session) navigate("/"); }, [session]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!id.trim()) next.id = "Informe seu e-mail ou usuário.";
    if (!password) next.password = "Informe sua senha.";
    setErrors(next);
    setNotice(null);
    if (Object.keys(next).length) return;

    setLoading(true);
    const res = await loginUser(id, password);
    setLoading(false);
    if (res.ok) navigate("/");
    else setNotice({ tone: "error", text: res.error });
  }

  return (
    <AuthLayout
      eyebrow="Planeje seu futuro"
      title={<>O primeiro passo para <span className="text-brand">uma nova fase é aqui.</span></>}
      description="Acesse sua conta e continue sua jornada para descobrir quanto custa morar em diferentes cidades e encontrar o lugar ideal para você."
      features={features}
    >
      <h2 className="text-[28px] font-extrabold tracking-tight">Bem-vindo de volta!</h2>
      <p className="mb-8 mt-2 text-[15px] text-white/85">Faça login para continuar sua jornada.</p>

      {notice && <Notice tone={notice.tone}>{notice.text}</Notice>}

      <form onSubmit={onSubmit} noValidate className="space-y-5">
        <AuthField label="E-mail ou usuário" icon={Mail} placeholder="Digite seu e-mail ou usuário" autoComplete="username"
          value={id} onChange={setId} error={errors.id} />

        <AuthField label="Senha" icon={Lock} type="password" placeholder="Digite sua senha" autoComplete="current-password"
          value={password} onChange={setPassword} error={errors.password}
          labelAside={
            <button type="button" onClick={() => setNotice({ tone: "info", text: "A recuperação de senha será disponibilizada em breve." })}
              className="text-xs font-bold text-brand hover:underline">Esqueceu sua senha?</button>
          } />

        <button type="submit" disabled={loading}
          className="flex h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-brand text-sm font-extrabold text-ink transition hover:brightness-110 disabled:opacity-70">
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowRight className="h-5 w-5" />} Entrar
        </button>
      </form>

      <OrDivider />
      <GoogleButton label="Entrar com Google" onClick={() => setNotice({ tone: "info", text: "O login com Google ainda não está conectado." })} />

      <p className="mt-8 text-center text-sm text-white/85">
        Ainda não tem uma conta?{" "}
        <a href="#/cadastro" className="font-semibold text-brand underline underline-offset-2">Cadastre-se</a>
      </p>
    </AuthLayout>
  );
}
