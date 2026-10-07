export function LogoMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 52" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="vb-pin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3fe6b4" />
          <stop offset="1" stopColor="#1fb98c" />
        </linearGradient>
      </defs>
      <path
        fill="url(#vb-pin)"
        fillRule="evenodd"
        d="M24 2C13 2 5 10 5 20c0 12 15 24 19 29 4-5 19-17 19-29C43 10 35 2 24 2ZM24 12.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z"
      />
    </svg>
  );
}

export default function Logo({ centered = false, size = "md" }: { centered?: boolean; size?: "md" | "lg" }) {
  return (
    <a href="#/" className={`inline-flex items-center gap-3 ${centered ? "justify-center" : ""}`} aria-label="VivaBem — página inicial">
      <LogoMark className={size === "lg" ? "h-14 w-14" : "h-12 w-12"} />
      <span className="flex flex-col leading-none">
        <span className="text-[28px] font-extrabold tracking-tight">VivaBem</span>
        <span className="mt-1 text-[13px] font-medium text-white/80">Quanto custa morar aqui?</span>
      </span>
    </a>
  );
}
