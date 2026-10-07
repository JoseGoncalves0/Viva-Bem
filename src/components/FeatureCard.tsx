import type { LucideIcon } from "lucide-react";

export default function FeatureCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <div className="flex gap-4">
      <Icon className="h-10 w-10 shrink-0 text-brand" strokeWidth={1.5} />
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/60">{text}</p>
      </div>
    </div>
  );
}
