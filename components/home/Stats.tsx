import { BadgeCheck, ClipboardCheck, Smile, Star } from "lucide-react";
const stats = [
  [BadgeCheck, "+1500", "Alunos formados"],
  [ClipboardCheck, "+300", "Projetos entregues"],
  [Star, "+8", "Anos de experiência"],
  [Smile, "98%", "Satisfação dos clientes"],
] as const;

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="grid overflow-hidden rounded-2xl border border-slate-800 bg-[#071020] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([Icon, value, label], i) => (
          <div key={label} className={`flex items-center justify-center gap-4 px-7 py-7 ${i ? "border-t border-slate-800 sm:border-l sm:border-t-0" : ""}`}>
            <Icon className="text-violet-400" size={38} strokeWidth={1.7} />
            <div><div className="text-3xl font-black text-teal-400">{value}</div><div className="text-sm text-slate-400">{label}</div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
