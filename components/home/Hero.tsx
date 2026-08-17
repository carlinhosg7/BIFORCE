"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, BarChart3, BrainCircuit, LineChart } from "lucide-react";

const slides = [
  {
    id: "decisoes",
    eyebrow: "BIFORCE • DATA & ANALYTICS",
    title: <>Transformamos dados em <span>decisões que movem o negócio</span></>,
    text: "Dashboards, analytics e dados organizados para acompanhar performance, encontrar oportunidades e decidir com mais segurança.",
    cta: "ENCONTRAR A MELHOR SOLUÇÃO",
    href: "#solucoes",
    theme: "hero-slide-dark",
    visual: "data",
  },
  {
    id: "automacao",
    eyebrow: "AUTOMAÇÃO • IA • PERFORMANCE",
    title: <>Automatize processos e <span>ganhe tempo para o que importa</span></>,
    text: "Integramos dados, Python, APIs e IA para reduzir tarefas repetitivas, padronizar processos e aumentar a produtividade da operação.",
    cta: "VER AUTOMAÇÃO & IA",
    href: "#solucoes",
    theme: "hero-slide-blue",
    visual: "laptop",
  },
  {
    id: "treinamentos",
    eyebrow: "BIFORCE ACADEMY",
    title: <>Capacite sua equipe para <span>produzir mais com dados</span></>,
    text: "Treinamentos corporativos em Power BI, Excel, SQL, Python, DAX e IA com prática e aplicação direta na rotina da empresa.",
    cta: "CONHECER TREINAMENTOS",
    href: "#treinamentos",
    theme: "hero-slide-violet",
    visual: "academy",
  },
] as const;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [paused]);

  const prev = () => setActive((active - 1 + slides.length) % slides.length);
  const next = () => setActive((active + 1) % slides.length);

  return (
    <section
      id="inicio"
      className="hero-carousel"
      aria-label="Destaques BIFORCE"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide) => (
          <article key={slide.id} className={`hero-slide ${slide.theme}`}>
            <div className="hero-slide-pattern" />
            <div className="shell hero-slide-inner">
              <div className="hero-banner-copy">
                <div className="hero-banner-eyebrow">{slide.eyebrow}</div>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <a href={slide.href} className="hero-banner-cta">
                  {slide.cta} <ArrowRight size={17} />
                </a>
              </div>

              {slide.visual === "data" && (
                <div className="hero-data-visual" aria-hidden="true">
                  <img src="/images/home/biforce-hero.png" alt="" />
                  <div className="data-glass-card data-card-a"><BarChart3/><span><b>Business Intelligence</b><small>Indicadores estratégicos</small></span></div>
                  <div className="data-glass-card data-card-b"><LineChart/><span><b>Analytics</b><small>Decisão em tempo real</small></span></div>
                </div>
              )}

              {slide.visual === "laptop" && (
                <div className="hero-laptop-wrap" aria-hidden="true">
                  <div className="laptop-screen">
                    <div className="laptop-topbar"><span/><span/><span/></div>
                    <div className="laptop-app">
                      <aside>
                        <b>BIForce AI</b>
                        <i/><i/><i/><i/><i/>
                      </aside>
                      <div className="laptop-dashboard">
                        <div className="dash-title">Automação inteligente</div>
                        <div className="dash-kpis"><span/><span/><span/></div>
                        <div className="dash-chart"><em/><em/><em/><em/><em/><em/></div>
                      </div>
                    </div>
                  </div>
                  <div className="laptop-base" />
                  <div className="floating-ai"><BrainCircuit/><div><b>IA aplicada</b><small>mais eficiência</small></div></div>
                </div>
              )}

              {slide.visual === "academy" && (
                <div className="hero-academy-visual" aria-hidden="true">
                  <div className="academy-tech-glow" />
                  <img
                    className="academy-tech-montage"
                    src="/images/home/academy-powerbi-excel-python.png"
                    alt=""
                  />
                  <div className="academy-tech-label academy-tech-label-powerbi">Power BI</div>
                  <div className="academy-tech-label academy-tech-label-python">Python</div>
                  <div className="academy-tech-label academy-tech-label-excel">Excel</div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <button className="hero-nav hero-nav-prev" onClick={prev} aria-label="Banner anterior"><ArrowLeft size={22}/></button>
      <button className="hero-nav hero-nav-next" onClick={next} aria-label="Próximo banner"><ArrowRight size={22}/></button>

      <div className="hero-dots" role="tablist" aria-label="Selecionar banner">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Banner ${index + 1}`}
            aria-selected={index === active}
          />
        ))}
      </div>
    </section>
  );
}
