import { ArrowRight, Boxes, ChartNoAxesCombined, DatabaseZap, Gauge, Repeat2, Target } from "lucide-react";

const services = [
  [ChartNoAxesCombined, "Dashboards executivos"], [Gauge, "Indicadores e KPIs"], [Target, "Metas e performance"],
  [DatabaseZap, "Integração de dados"], [Repeat2, "Automação de relatórios"], [Boxes, "Modelagem de dados"],
] as const;

export function Consulting() {
  return (
    <section id="sobre" className="section-block">
      <div className="shell consulting-grid">
        <div><div className="section-kicker">CONSULTORIA</div><h2 className="section-title">Pare de administrar seu negócio olhando para <span>dezenas de planilhas.</span></h2><p className="lead">A BIForce transforma dados dispersos em informação centralizada, indicadores claros e soluções que ajudam gestores a decidir com mais velocidade.</p><a href="#contato" className="primary-cta">QUERO UM DIAGNÓSTICO <ArrowRight size={19}/></a></div>
        <div className="service-list">{services.map(([Icon,title]) => <div className="service-chip" key={title}><Icon size={24}/><span>{title}</span></div>)}</div>
      </div>
    </section>
  );
}
