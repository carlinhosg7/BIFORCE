import { ArrowRight, BarChart3, Braces, Database, FileSpreadsheet, Sigma, Sparkles } from "lucide-react";

const courses = [
  [BarChart3, "Power BI", "Dashboards, modelagem, visualização e análise para transformar dados em decisões."],
  [FileSpreadsheet, "Excel", "Produtividade, análise, fórmulas, Power Query e automação para o dia a dia."],
  [Database, "SQL", "Consultas, tratamento e exploração de dados para análises mais independentes."],
  [Braces, "Python", "Análise de dados, automação e produtividade com aplicação prática no negócio."],
  [Sigma, "DAX", "Medidas, contexto de filtro e indicadores para modelos Power BI mais inteligentes."],
  [Sparkles, "IA Aplicada", "Uso produtivo de IA para análise, automação, conteúdo, pesquisa e processos."],
] as const;

export function Training() {
  return (
    <section id="treinamentos" className="section-block section-soft">
      <div className="shell">
        <div className="sales-heading">
          <div><div className="section-kicker">BIFORCE ACADEMY</div><h2 className="section-title">Treinamentos que a equipe consegue <span>usar no trabalho.</span></h2></div>
          <p>Capacitação para empresas e profissionais, com conteúdo ajustado ao nível da turma e foco em situações reais. Podemos trabalhar com bases, processos e desafios próximos da rotina da sua operação.</p>
        </div>
        <div className="course-grid">
          {courses.map(([Icon,title,text]) => <article className="course-card" key={title}><Icon size={35}/><h3>{title}</h3><p>{text}</p><span className="course-tag">CORPORATIVO • ONLINE OU AO VIVO</span></article>)}
        </div>
        <div className="training-commercial"><div><strong>Precisa capacitar uma equipe inteira?</strong><span>Montamos uma trilha personalizada conforme objetivo, nível e disponibilidade.</span></div><a href="#contato" className="inline-cta">SOLICITAR PROPOSTA <ArrowRight size={19}/></a></div>
      </div>
    </section>
  );
}
