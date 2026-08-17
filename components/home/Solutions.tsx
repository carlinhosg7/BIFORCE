import { ArrowRight, BarChart3, Bot, Code2, DatabaseZap, GraduationCap } from "lucide-react";

const items = [
  [BarChart3, "BI & Dashboards", "Painéis executivos, indicadores e metas para acompanhar o negócio sem depender de dezenas de planilhas.", "blue"],
  [DatabaseZap, "Dados & Analytics", "Integração, tratamento e modelagem de dados para transformar bases dispersas em informação confiável.", "cyan"],
  [Bot, "Automação & IA", "Automação de rotinas, relatórios e processos com IA aplicada para ganhar velocidade e reduzir trabalho manual.", "violet"],
  [Code2, "Desenvolvimento", "Soluções sob medida com Python, SQL, APIs, VBA e integrações para conectar sistemas e eliminar gargalos.", "blue"],
  [GraduationCap, "Treinamentos", "Capacitação prática em Power BI, Excel, SQL, Python, DAX e IA para equipes que precisam produzir mais com dados.", "violet"],
] as const;

export function Solutions() {
  return (
    <section id="solucoes" className="section-block">
      <div className="shell">
        <div className="sales-heading">
          <div>
            <div className="section-kicker">SOLUÇÕES PARA O SEU NEGÓCIO</div>
            <h2 className="section-title">Da informação dispersa ao <span>resultado que você consegue acompanhar.</span></h2>
          </div>
          <p>Escolha uma frente específica ou combine serviços em um projeto completo. A BIFORCE atua da organização dos dados até a entrega da solução e capacitação da equipe.</p>
        </div>
        <div className="solutions-grid">
          {items.map(([Icon, title, text, tone]) => (
            <article className="solution-card" key={title}>
              <Icon className={`solution-icon ${tone}`} size={42} strokeWidth={1.7} />
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contato" className="card-link">VER COMO PODEMOS AJUDAR <ArrowRight size={17}/></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
