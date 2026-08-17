const steps = [
  ["Diagnóstico", "Entendemos o objetivo, as dores e como o processo funciona hoje."],
  ["Dados", "Mapeamos fontes, regras, qualidade e o que realmente precisa ser integrado."],
  ["Solução", "Definimos a arquitetura, entregáveis e prioridades do projeto."],
  ["Construção", "Desenvolvemos dashboards, automações, análises ou treinamentos."],
  ["Validação", "Testamos com quem utiliza a solução e ajustamos antes da entrega."],
  ["Evolução", "Acompanhamos resultados e identificamos novas oportunidades de melhoria."],
] as const;

export function Method() {
  return <section id="conteudo" className="section-block"><div className="shell"><div className="sales-heading"><div><div className="section-kicker">COMO TRABALHAMOS</div><h2 className="section-title">Projeto com começo, meio e <span>resultado esperado bem definido.</span></h2></div><p>Você acompanha o que está sendo construído, valida durante o processo e recebe uma solução alinhada à realidade da operação.</p></div><div className="method-row">{steps.map(([s,text],i)=><div className="method-step" key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span><p>{text}</p></div>)}</div></div></section>;
}
