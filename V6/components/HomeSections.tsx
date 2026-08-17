import {
  ArrowRight, BarChart3, Bot, BrainCircuit, BriefcaseBusiness,
  Code2, Database, GraduationCap, LineChart, Settings2, Sparkles
} from "lucide-react";

const solutions = [
  { icon: BarChart3, title: "BI & Analytics", text: "Dashboards, KPIs, modelagem e inteligência para decisões mais rápidas.", tag: "Business Intelligence" },
  { icon: Settings2, title: "Automação", text: "Reduza trabalho manual com integrações, rotinas e processos automatizados.", tag: "Produtividade" },
  { icon: Code2, title: "Dados & Programação", text: "SQL, Python, APIs e engenharia aplicada à transformação de dados.", tag: "Data Engineering" },
  { icon: BrainCircuit, title: "IA aplicada", text: "Use IA para análise, produtividade, atendimento e apoio à decisão.", tag: "Inteligência Artificial" },
];

const sectors = [
  "Comercial & Vendas", "Financeiro", "Logística", "Indústria",
  "Varejo", "Serviços", "RH & People Analytics", "Gestão Executiva"
];

export function HomeSections() {
  return (
    <>
      <section id="solucoes" className="section light-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow-dark">SOLUÇÕES</span>
              <h2>Transformamos dados em valor para o negócio.</h2>
            </div>
            <p>
              Da organização dos dados à tomada de decisão, construímos soluções
              que conectam tecnologia, processos e objetivos reais da empresa.
            </p>
          </div>

          <div className="solution-grid">
            {solutions.map(({ icon: Icon, title, text, tag }) => (
              <article className="solution-card" key={title}>
                <div className="solution-icon"><Icon size={26}/></div>
                <span className="card-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contato">Saiba mais <ArrowRight size={16}/></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="consultoria" className="section navy-section">
        <div className="container feature-grid">
          <div className="feature-copy">
            <span className="overline">CONSULTORIA</span>
            <h2>Melhoramos decisões através de dados.</h2>
            <p>
              Estruturamos indicadores, modelos de dados, automações e dashboards
              para que sua empresa enxergue o que importa e aja com mais velocidade.
            </p>
            <ul className="check-list">
              <li><Database size={18}/> Diagnóstico e organização de dados</li>
              <li><LineChart size={18}/> Indicadores e dashboards executivos</li>
              <li><Bot size={18}/> Automação e IA aplicada aos processos</li>
              <li><BriefcaseBusiness size={18}/> Visão de negócio e acompanhamento</li>
            </ul>
            <a className="btn btn-primary" href="#contato">Solicitar diagnóstico <ArrowRight size={18}/></a>
          </div>

          <div className="dashboard-panel">
            <div className="dashboard-top">
              <span>Visão executiva</span><span className="live-dot">Atualizado</span>
            </div>
            <div className="kpi-row">
              <div><small>RECEITA</small><strong>R$ 8,4M</strong><span>↑ 12,8%</span></div>
              <div><small>MARGEM</small><strong>28,6%</strong><span>↑ 3,2 p.p.</span></div>
              <div><small>CONVERSÃO</small><strong>19,4%</strong><span>↑ 4,1%</span></div>
            </div>
            <div className="chart-mock">
              <span style={{height:"28%"}}></span><span style={{height:"44%"}}></span>
              <span style={{height:"38%"}}></span><span style={{height:"59%"}}></span>
              <span style={{height:"71%"}}></span><span style={{height:"67%"}}></span>
              <span style={{height:"83%"}}></span><span style={{height:"92%"}}></span>
            </div>
            <div className="dashboard-footer">
              <div><span className="legend blue"></span>Realizado</div>
              <div><span className="legend purple"></span>Meta</div>
            </div>
          </div>
        </div>
      </section>

      <section id="treinamentos" className="section light-section training-section">
        <div className="container training-grid">
          <div className="training-visual">
            <div className="training-badge"><GraduationCap size={28}/></div>
            <span className="training-label">BIForce Academy</span>
            <h3>Conhecimento aplicado ao mercado.</h3>
            <p>Treinamentos práticos com ferramentas e cenários reais de negócio.</p>
            <div className="training-stack">
              <span>Power BI</span><span>Excel</span><span>SQL</span><span>Python</span><span>IA</span>
            </div>
          </div>

          <div className="training-copy">
            <span className="eyebrow-dark">TREINAMENTOS</span>
            <h2>Capacitação que sai da teoria e entra na rotina.</h2>
            <p>
              Trilhas para profissionais e empresas desenvolverem competências
              em dados, BI, análise, automação e programação.
            </p>
            <div className="mini-cards">
              <div><strong>Corporativo</strong><span>Treinamentos personalizados para equipes.</span></div>
              <div><strong>Profissional</strong><span>Formação orientada à aplicação prática.</span></div>
            </div>
            <a className="text-link" href="#contato">Conhecer treinamentos <ArrowRight size={17}/></a>
          </div>
        </div>
      </section>

      <section id="setores" className="section soft-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow-dark">ONDE ATUAMOS</span>
            <h2>Dados para diferentes áreas e desafios.</h2>
            <p>Soluções adaptáveis à realidade de cada operação.</p>
          </div>
          <div className="sector-grid">
            {sectors.map((s, i) => (
              <div className="sector-card" key={s}>
                <span>{String(i + 1).padStart(2,"0")}</span><strong>{s}</strong><ArrowRight size={17}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="section light-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow-dark">CASES</span><h2>Histórias de transformação com dados.</h2></div>
            <p>Exemplos de como BI, automação e análise podem simplificar operações e melhorar decisões.</p>
          </div>

          <div className="case-grid">
            <article className="case-card case-main">
              <span className="case-type">BI COMERCIAL</span>
              <h3>Centralização de metas, vendas, carteira e faturamento em uma única visão.</h3>
              <p>Power BI • SQL • DAX • Modelagem</p>
              <a href="#contato">Conhecer abordagem <ArrowRight size={17}/></a>
            </article>
            <article className="case-card">
              <span className="case-type">AUTOMAÇÃO</span>
              <h3>Redução de rotinas manuais em relatórios recorrentes.</h3>
              <p>Python • Excel • APIs</p>
            </article>
            <article className="case-card">
              <span className="case-type">ANALYTICS</span>
              <h3>Indicadores executivos para acompanhamento de performance.</h3>
              <p>BI • KPIs • Governança</p>
            </article>
          </div>
        </div>
      </section>

      <section id="sobre" className="section numbers-section">
        <div className="container numbers-grid">
          <div>
            <span className="overline">BIFORCE</span>
            <h2>Tecnologia precisa gerar resultado.</h2>
            <p>
              Nossa proposta é unir capacidade técnica e visão de negócio para
              transformar informação em algo realmente utilizável.
            </p>
          </div>
          <div className="number-card"><strong>BI</strong><span>Decisão orientada por dados</span></div>
          <div className="number-card"><strong>DATA</strong><span>Estrutura e análise</span></div>
          <div className="number-card"><strong>CODE</strong><span>Automação e integração</span></div>
        </div>
      </section>

      <section id="conteudo" className="section light-section content-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow-dark">CONTEÚDO</span><h2>Insights sobre dados e tecnologia.</h2></div>
            <a className="text-link" href="#contato">Ver conteúdos <ArrowRight size={17}/></a>
          </div>
          <div className="article-grid">
            <article><span>POWER BI</span><h3>Como estruturar indicadores que realmente apoiam decisões</h3><a href="#contato">Ler mais →</a></article>
            <article><span>AUTOMAÇÃO</span><h3>Onde Python e IA podem reduzir trabalho manual</h3><a href="#contato">Ler mais →</a></article>
            <article><span>DADOS</span><h3>Do Excel ao BI: quando sua empresa precisa evoluir</h3><a href="#contato">Ler mais →</a></article>
          </div>
        </div>
      </section>

      <section id="contato" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <span className="overline">VAMOS CONVERSAR?</span>
            <h2>Como podemos ajudar sua empresa?</h2>
            <p>
              Conte um pouco sobre seu desafio. A BIForce entra em contato para
              entender o cenário e indicar o melhor caminho.
            </p>
            <div className="contact-points">
              <span><Sparkles size={19}/> Consultoria em BI e Dados</span>
              <span><GraduationCap size={19}/> Treinamentos corporativos</span>
              <span><BrainCircuit size={19}/> Automação e IA</span>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-row"><label>Nome<input type="text" placeholder="Seu nome"/></label><label>Empresa<input type="text" placeholder="Sua empresa"/></label></div>
            <div className="form-row"><label>E-mail<input type="email" placeholder="nome@empresa.com.br"/></label><label>Telefone<input type="tel" placeholder="(00) 00000-0000"/></label></div>
            <label>Como podemos ajudar?
              <select defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Consultoria</option><option>Treinamento</option><option>Dashboard / Power BI</option><option>Automação</option><option>IA aplicada</option><option>Outro</option></select>
            </label>
            <label>Mensagem<textarea rows={4} placeholder="Conte brevemente sobre seu desafio."/></label>
            <button className="btn btn-primary form-button" type="submit">Enviar mensagem <ArrowRight size={18}/></button>
          </form>
        </div>
      </section>
    </>
  );
}
