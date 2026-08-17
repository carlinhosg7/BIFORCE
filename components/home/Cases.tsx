import { ArrowRight } from "lucide-react";

const cases = [
  ["Inteligência Comercial", "Centralização de vendas, metas, carteira, faturamento e performance em uma visão executiva para acompanhamento diário.", "Power BI • SQL • Excel • DAX", "Mais visibilidade para agir rápido"],
  ["Automação de Relatórios", "Estruturação de rotinas para importar, tratar e consolidar dados com menos intervenção manual e mais padronização.", "Python • Excel • APIs", "Menos retrabalho e mais produtividade"],
  ["Gestão de Performance", "Construção de indicadores para acompanhar resultado por equipe, região, produto, cliente ou qualquer dimensão relevante do negócio.", "Power BI • Modelagem • DAX", "Gestão orientada por indicadores"],
] as const;

export function Cases() {
  return (
    <section id="cases" className="section-block">
      <div className="shell">
        <div className="sales-heading">
          <div><div className="section-kicker">APLICAÇÕES REAIS</div><h2 className="section-title">Soluções pensadas para <span>problemas que acontecem todos os dias.</span></h2></div>
          <p>Estes exemplos mostram como combinamos dados, automação e BI. Cada projeto é desenhado conforme os objetivos, fontes de dados e rotina da empresa.</p>
        </div>
        <div className="case-grid">
          {cases.map(([title,text,tech,outcome],i)=><article className="case-card" key={title}><span className="case-number">0{i+1}</span><h3>{title}</h3><p>{text}</p><strong className="case-outcome">{outcome}</strong><small>{tech}</small><a href="#contato" className="card-link">QUERO ALGO ASSIM <ArrowRight size={16}/></a></article>)}
        </div>
      </div>
    </section>
  );
}
