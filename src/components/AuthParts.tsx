import GoogleIcon from "./GoogleIcon";

export function OrDivider() {
  return (
    <div className="my-6 flex items-center gap-4 text-xs text-white/60">
      <span className="h-px flex-1 bg-white/15" /> ou <span className="h-px flex-1 bg-white/15" />
    </div>
  );
}

export function GoogleButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[54px] w-full items-center justify-center gap-3 rounded-xl border border-white/30 text-sm font-bold transition hover:border-brand hover:text-brand"
    >
      <GoogleIcon /> {label}
    </button>
  );
}

export function Notice({ tone, children }: { tone: "error" | "info"; children: React.ReactNode }) {
  const style = tone === "error" ? "border-red-400/40 bg-red-500/10 text-red-200" : "border-brand/40 bg-brand/10 text-brand";
  return <div role="status" className={`mb-5 rounded-xl border px-4 py-3 text-sm font-medium ${style}`}>{children}</div>;
}
