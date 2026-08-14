import { ArrowRight, BarChart3, Braces, Database, FileSpreadsheet, Sigma, Sparkles } from "lucide-react";

const courses = [
  [BarChart3, "Power BI", "Do zero ao dashboard profissional"],
  [FileSpreadsheet, "Excel", "Análise, produtividade e automação"],
  [Database, "SQL", "Consultas e análise de dados"],
  [Braces, "Python", "Dados, automação e produtividade"],
  [Sigma, "DAX", "Modelagem e inteligência no Power BI"],
  [Sparkles, "IA Aplicada", "IA para trabalho, dados e negócios"],
] as const;

export function Training() {
  return (
    <section id="treinamentos" className="section-block section-soft">
      <div className="shell">
        <div className="split-heading">
          <div><div className="section-kicker">TREINAMENTOS</div><h2 className="section-title">Aprenda fazendo.<br /><span>Use no mundo real.</span></h2></div>
          <p>Treinamentos diretos ao ponto, com prática, projetos e aplicação no dia a dia de profissionais e empresas.</p>
        </div>
        <div className="course-grid">
          {courses.map(([Icon,title,text]) => <article className="course-card" key={title}><Icon size={35}/><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <a href="#contato" className="inline-cta">SOLICITAR TREINAMENTO CORPORATIVO <ArrowRight size={19}/></a>
      </div>
    </section>
  );
}
