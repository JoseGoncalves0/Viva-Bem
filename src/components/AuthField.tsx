import { useId, useState, type ReactNode } from "react";
import { Eye, EyeOff, type LucideIcon } from "lucide-react";

interface Props {
  label: string;
  icon: LucideIcon;
  type?: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  autoComplete?: string;
  labelAside?: ReactNode;
}

export default function AuthField({ label, icon: Icon, type = "text", placeholder, value, onChange, error, autoComplete, labelAside }: Props) {
  const id = useId();
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-semibold text-white/90">{label}</label>
        {labelAside}
      </div>
      <div
        className={`flex h-[54px] items-center gap-3 rounded-xl border bg-ink/70 px-4 transition focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/25 ${
          error ? "border-red-400/70" : "border-brand/25"
        }`}
      >
        <Icon className="h-5 w-5 shrink-0 text-white/80" />
        <input
          id={id}
          type={isPassword && show ? "text" : type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-white/45"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            aria-label={show ? "Ocultar senha" : "Mostrar senha"}
            className="shrink-0 rounded p-1 text-white/70 transition hover:text-brand"
          >
            {show ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
          </button>
        )}
      </div>
      {error && <p role="alert" className="mt-1.5 text-xs font-medium text-red-300">{error}</p>}
    </div>
  );
}
