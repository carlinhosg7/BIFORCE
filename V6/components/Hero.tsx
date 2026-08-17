import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="overline">BUSINESS INTELLIGENCE • DADOS • TECNOLOGIA</span>
          <h1>Dados melhores.<br/><span>Decisões mais inteligentes.</span></h1>
          <p>
            A BIForce combina análise de dados, Business Intelligence, automação,
            programação e IA para transformar processos, pessoas e resultados.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#solucoes">
              Conheça nossas soluções <ArrowRight size={18} />
            </a>
            <a className="btn btn-ghost" href="#contato">
              Fale com nosso time
            </a>
          </div>

          <div className="hero-proof">
            <span><CheckCircle2 size={18}/> Projetos sob medida</span>
            <span><CheckCircle2 size={18}/> Treinamento prático</span>
            <span><CheckCircle2 size={18}/> Foco em resultado</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="data-card data-card-a">
            <small>PERFORMANCE</small>
            <strong>+27%</strong>
            <span>Eficiência operacional</span>
          </div>
          <div className="data-card data-card-b">
            <small>ANALYTICS</small>
            <strong>BI + IA</strong>
            <span>Decisões orientadas por dados</span>
          </div>
          <div className="hero-image-shell">
            <Image
              src="/images/home/biforce-hero-transparent.png"
              alt="Símbolo BIForce"
              width={800}
              height={600}
              priority
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
