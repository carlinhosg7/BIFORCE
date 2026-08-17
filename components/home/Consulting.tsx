import { ArrowRight, CheckCircle2, CircleDollarSign, Clock3, Gauge, Layers3, ShieldCheck } from "lucide-react";

const pains = [
  [Layers3, "Dados espalhados", "Planilhas, sistemas e arquivos que não conversam entre si."],
  [Clock3, "Processos manuais", "Horas gastas consolidando, copiando e conferindo informações."],
  [Gauge, "Gestão sem visão", "Indicadores atrasados ou sem uma visão única do desempenho."],
  [CircleDollarSign, "Decisão sem segurança", "Dificuldade para identificar oportunidades, desvios e prioridades."],
  [ShieldCheck, "Baixa confiabilidade", "Números diferentes para a mesma pergunta e pouca rastreabilidade."],
  [CheckCircle2, "Equipe sobrecarregada", "Profissionais presos em tarefas repetitivas em vez de análises de valor."],
] as const;

export function Consulting() {
  return (
    <section id="sobre" className="section-block section-soft">
      <div className="shell consulting-grid catalog-problems">
        <div>
          <div className="section-kicker">PROBLEMAS QUE RESOLVEMOS</div>
          <h2 className="section-title">Se sua operação depende demais de planilhas e esforço manual, <span>há espaço para ganhar eficiência.</span></h2>
          <p className="lead">Mapeamos o cenário atual, identificamos gargalos e construímos soluções para que sua empresa tenha dados mais organizados, processos mais rápidos e decisões mais claras.</p>
          <a href="#contato" className="primary-cta">QUERO UM DIAGNÓSTICO <ArrowRight size={19}/></a>
        </div>
        <div className="problem-list">
          {pains.map(([Icon,title,text]) => (
            <article className="problem-card" key={title}><Icon size={23}/><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </div>
    </section>
  );
}
