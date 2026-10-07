import { useMemo } from "react";

// Gerador pseudo-aleatório com semente fixa: a paisagem é sempre a mesma.
function rng(seed: number) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

/**
 * Paisagem ao entardecer (cidade + serra + mata) desenhada em SVG.
 * Para usar uma FOTO sua: coloque o arquivo em public/bg-cidade.jpg —
 * ela é exibida por cima do desenho automaticamente.
 */
export default function AuthBackdrop() {
  const { buildings, windows, trees } = useMemo(() => {
    const r = rng(42);
    const buildings: { x: number; y: number; w: number; h: number; c: string }[] = [];
    const windows: { x: number; y: number; o: number }[] = [];
    let x = -20;
    while (x < 1500) {
      const w = 22 + r() * 46;
      const centerBoost = 1 - Math.abs(x - 760) / 900; // prédios mais altos no centro
      const h = 50 + r() * 150 + Math.max(0, centerBoost) * r() * 170;
      const y = 700 - h;
      const shade = Math.floor(18 + r() * 14);
      buildings.push({ x, y, w, h, c: `rgb(${shade},${shade + 6},${shade + 16})` });
      for (let wy = y + 10; wy < 690; wy += 13) {
        for (let wx = x + 5; wx < x + w - 6; wx += 9) {
          if (r() < 0.2) windows.push({ x: wx, y: wy, o: 0.25 + r() * 0.55 });
        }
      }
      x += w * (0.7 + r() * 0.3);
    }
    const trees: { cx: number; cy: number; rad: number; c: string }[] = [];
    for (let i = 0; i < 330; i++) {
      const cx = r() * 1600;
      const cy = 640 + Math.pow(r(), 0.7) * 360;
      const g = Math.floor(14 + r() * 24);
      trees.push({ cx, cy, rad: 14 + r() * 34 + (cy - 640) * 0.05, c: `rgb(${Math.floor(g * 0.5)},${g + 12},${Math.floor(g * 0.7)})` });
    }
    return { buildings, windows, trees };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMax slice" className="h-full w-full">
        <defs>
          <linearGradient id="bk-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0a1220" />
            <stop offset="0.22" stopColor="#1d2036" />
            <stop offset="0.36" stopColor="#5a3140" />
            <stop offset="0.46" stopColor="#c4562b" />
            <stop offset="0.54" stopColor="#f0a24e" />
            <stop offset="0.7" stopColor="#7a4a3a" />
          </linearGradient>
          <radialGradient id="bk-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#ffd08a" stopOpacity="0.85" />
            <stop offset="1" stopColor="#ffd08a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bk-haze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0a1220" stopOpacity="0" />
            <stop offset="1" stopColor="#0a1220" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="bk-forest" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0d1f19" />
            <stop offset="1" stopColor="#050c0d" />
          </linearGradient>
        </defs>

        <rect width="1600" height="1000" fill="url(#bk-sky)" />
        <ellipse cx="640" cy="520" rx="560" ry="150" fill="url(#bk-glow)" />

        {/* nuvens */}
        <g fill="#2a2a44" opacity="0.55">
          <ellipse cx="300" cy="330" rx="260" ry="14" />
          <ellipse cx="950" cy="290" rx="320" ry="12" />
          <ellipse cx="620" cy="400" rx="380" ry="10" fill="#7a3a3a" opacity="0.6" />
        </g>

        {/* serra */}
        <path d="M0 560 L120 520 L260 470 L380 500 L520 440 L640 470 L780 430 L900 470 L1040 450 L1180 500 L1320 470 L1460 520 L1600 500 L1600 720 L0 720Z" fill="#1c2233" />
        <path d="M0 600 L160 560 L320 580 L480 540 L700 575 L900 545 L1120 580 L1340 555 L1600 590 L1600 720 L0 720Z" fill="#161c2b" />

        {/* cidade */}
        <rect x="0" y="690" width="1600" height="60" fill="#10151f" />
        {buildings.map((b, i) => <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill={b.c} />)}
        <g fill="#ffc46b">
          {windows.map((w, i) => <rect key={i} x={w.x} y={w.y} width="3.5" height="5" opacity={w.o} />)}
        </g>
        <rect width="1600" height="760" fill="url(#bk-haze)" />

        {/* mata */}
        <path d="M0 690 Q200 640 420 670 T820 650 T1240 665 T1600 640 L1600 1000 L0 1000Z" fill="url(#bk-forest)" />
        {trees.map((t, i) => <circle key={i} cx={t.cx} cy={t.cy} r={t.rad} fill={t.c} opacity="0.9" />)}
      </svg>

      {/* foto opcional do usuário */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-cidade.jpg)" }}
      />
    </div>
  );
}
