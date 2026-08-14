import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  Headphones,
  Rocket,
  Users,
} from "lucide-react";

const benefits = [
  [Users, "Especialistas", "do mercado", "violet"],
  [ClipboardCheck, "Método", "100% prático", "violet"],
  [BarChart3, "Projetos reais", "e aplicáveis", "blue"],
  [Headphones, "Suporte", "personalizado", "blue"],
  [Rocket, "Foco em", "resultados", "violet"],
] as const;

// Coordenadas sobre nós reais da rede visual da arte (x/y em porcentagem).
const nodes = [
  [3.6,22.1,3,0.10],[10.9,25.6,3,0.85],[12.6,13.7,2,1.35],[17.9,43.9,3,0.45],
  [21.3,30.2,3,1.75],[22.5,67.5,2,0.20],[26.4,18.7,3,1.05],[28.0,52.8,3,0.62],
  [30.4,8.7,2,1.48],[34.8,25.0,3,0.30],[39.6,18.8,2,1.92],[43.2,6.3,2,0.76],
  [45.6,24.9,3,1.26],[48.3,40.8,3,0.05],[51.8,14.1,2,1.58],[54.4,29.0,3,0.52],
  [57.8,19.0,3,2.05],[60.9,47.8,3,0.94],[63.1,31.4,2,1.42],[66.4,7.6,3,0.24],
  [68.5,22.0,3,1.66],[70.6,53.6,2,0.70],[74.3,17.3,3,1.14],[77.1,33.8,3,0.38],
  [79.1,61.8,3,1.86],[83.2,24.5,2,0.16],[84.3,45.4,3,1.32],[88.4,37.3,3,0.57],
  [89.5,68.5,2,1.73],[93.7,15.8,2,0.90],[95.4,55.7,2,1.22],[58.9,79.7,3,0.33],
  [48.9,89.7,4,1.50],[72.1,82.8,3,0.81],[35.0,79.2,2,1.98],[16.0,75.0,2,0.48]
] as const;

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">TREINAMENTO E CONSULTORIA</div>
            <h1 className="hero-title">
              Conectamos dados,<br />
              inteligência e pessoas<br />
              para gerar <span className="headline-gradient">resultados<br />extraordinários.</span>
            </h1>
            <p className="hero-text">
              Soluções em BI, Excel, Dados, Programação, Automação e Inteligência Artificial para transformar informação em decisões e resultados.
            </p>
            <div className="hero-actions">
              <a href="#treinamentos" className="primary-cta">CONHEÇA NOSSOS TREINAMENTOS <ArrowRight size={19} /></a>
              <a href="#contato" className="secondary-cta">FALE COM UM ESPECIALISTA <ArrowRight size={19} /></a>
            </div>
          </div>

          <div className="hero-artwork-wrap" aria-label="Símbolo BIForce com rede de dados interativa">
            <Image
              src="/images/home/biforce-hero.png"
              alt="Símbolo BIForce em neon azul e roxo"
              width={800}
              height={470}
              priority
              className="hero-artwork"
            />
            <div className="hero-nodes" aria-hidden="true">
              {nodes.map(([x,y,size,delay], index) => (
                <span
                  key={index}
                  className={`hero-node hero-node-${size}`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    animationDelay: `${delay}s`,
                  }}
                />
              ))}
            </div>
            <div className="hover-hint" aria-hidden="true">passe o mouse</div>
          </div>
        </div>

        <div className="benefit-strip">
          {benefits.map(([Icon, title, text, tone]) => (
            <div key={title} className="benefit-item">
              <Icon className={tone === "blue" ? "benefit-blue" : "benefit-violet"} size={38} strokeWidth={1.65} />
              <div><strong>{title}</strong><span>{text}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
