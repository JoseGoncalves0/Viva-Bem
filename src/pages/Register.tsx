import { useEffect, useState, type FormEvent } from "react";
import { BarChart3, Loader2, Lock, Mail, MapPin, User, UserPlus, UserRound } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import AuthField from "../components/AuthField";
import { GoogleButton, Notice, OrDivider } from "../components/AuthParts";
import { registerUser, useSession } from "../data/auth";
import { navigate } from "../lib/router";

const features = [
  { icon: BarChart3, title: "Simule seus gastos", text: "Veja quanto você gastaria com moradia, alimentação, transporte e muito mais." },
  { icon: MapPin, title: "Compare cidades", text: "Descubra qual lugar combina mais com seu perfil e orçamento." },
  { icon: UserRound, title: "Planeje seu futuro", text: "Tenha uma visão clara de quanto precisa ganhar e se o seu salário é suficiente." },
];

type Errors = Partial<Record<"name" | "email" | "password" | "confirm", string>>;

export default function Register() {
  const session = useSession();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => { if (session) navigate("/"); }, [session]);

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (form.name.trim().length < 3) next.name = "Informe seu nome completo.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = "Informe um e-mail válido.";
    if (form.password.length < 8) next.password = "A senha precisa ter pelo menos 8 caracteres.";
    if (form.confirm !== form.password) next.confirm = "As senhas não coincidem.";
    setErrors(next);
    setNotice(null);
    if (Object.keys(next).length) return;

    setLoading(true);
    const res = await registerUser(form.name, form.email, form.password);
    setLoading(false);
    if (res.ok) navigate("/");
    else if (res.field === "email") setErrors({ email: res.error });
    else setNotice(res.error);
  }

  return (
    <AuthLayout
      eyebrow="Junte-se a nós"
      title={<>Planeje hoje <span className="block text-brand">o seu amanhã.</span></>}
      description="Crie sua conta gratuitamente e tenha acesso a simulações personalizadas, comparações entre cidades e muito mais."
      features={features}
    >
      <h2 className="text-[28px] font-extrabold tracking-tight">Crie sua conta</h2>
      <p className="mb-7 mt-2 text-[15px] text-white/85">Preencha os dados abaixo para começar sua jornada.</p>

      {notice && <Notice tone="info">{notice}</Notice>}

      <form onSubmit={onSubmit} noValidate className="space-y-4">
        <AuthField label="Nome completo" icon={User} placeholder="Digite seu nome completo" autoComplete="name"
          value={form.name} onChange={set("name")} error={errors.name} />
        <AuthField label="E-mail" icon={Mail} type="email" placeholder="Digite seu e-mail" autoComplete="email"
          value={form.email} onChange={set("email")} error={errors.email} />
        <AuthField label="Senha" icon={Lock} type="password" placeholder="Crie uma senha" autoComplete="new-password"
          value={form.password} onChange={set("password")} error={errors.password} />
        <AuthField label="Confirmar senha" icon={Lock} type="password" placeholder="Confirme sua senha" autoComplete="new-password"
          value={form.confirm} onChange={set("confirm")} error={errors.confirm} />

        <button type="submit" disabled={loading}
          className="!mt-6 flex h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-brand text-sm font-extrabold text-ink transition hover:brightness-110 disabled:opacity-70">
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <UserPlus className="h-5 w-5" />} Criar conta
        </button>
      </form>

      <OrDivider />
      <GoogleButton label="Continuar com Google" onClick={() => setNotice("O cadastro com Google ainda não está conectado.")} />

      <p className="mt-7 text-center text-sm text-white/85">
        Já tem uma conta?{" "}
        <a href="#/login" className="font-semibold text-brand underline underline-offset-2">Entrar</a>
      </p>
    </AuthLayout>
  );
}
