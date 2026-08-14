const cases = [
  ["Inteligência Comercial", "Vendas, metas, carteira e faturamento centralizados em uma única visão executiva.", "Power BI • SQL • Excel • DAX"],
  ["Automação de Relatórios", "Redução de tarefas manuais com processos automatizados e dados padronizados.", "Python • Excel • APIs"],
  ["Performance Gerencial", "KPIs operacionais e estratégicos para acompanhamento de resultado e tomada de decisão.", "Power BI • Modelagem • DAX"],
] as const;

export function Cases() {
  return (
    <section id="cases" className="section-block section-soft"><div className="shell"><div className="section-kicker">CASES</div><h2 className="section-title">Dados aplicados a <span>problemas reais.</span></h2><div className="case-grid">{cases.map(([title,text,tech],i)=><article className="case-card" key={title}><span className="case-number">0{i+1}</span><h3>{title}</h3><p>{text}</p><small>{tech}</small></article>)}</div></div></section>
  );
}
