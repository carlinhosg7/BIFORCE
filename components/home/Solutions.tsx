import { ArrowRight, BarChart3, Bot, Code2, GraduationCap, Users } from "lucide-react";

const items = [
  [GraduationCap, "Treinamentos", "Cursos práticos de Power BI, Excel, SQL, Python, IA e muito mais.", "violet"],
  [Users, "Consultoria", "Projetos personalizados de BI e transformação de dados.", "cyan"],
  [BarChart3, "BI & Analytics", "Dashboards, KPIs, indicadores e inteligência para tomada de decisão.", "blue"],
  [Code2, "Programação & Automação", "Python, SQL, VBA, APIs e automação de processos.", "violet"],
  [Bot, "IA & Dados", "Inteligência Artificial aplicada a processos, análises e geração de valor.", "violet"],
] as const;

export function Solutions() {
  return (
    <section id="solucoes" className="section-block">
      <div className="shell">
        <div className="section-kicker">NOSSAS SOLUÇÕES</div>
        <h2 className="section-title">Tecnologia, dados e conhecimento<br /><span>em um só lugar.</span></h2>
        <div className="solutions-grid">
          {items.map(([Icon, title, text, tone]) => (
            <article className="solution-card" key={title}>
              <Icon className={`solution-icon ${tone}`} size={42} strokeWidth={1.7} />
              <h3>{title}</h3><p>{text}</p><ArrowRight className={`solution-arrow ${tone}`} size={22} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
