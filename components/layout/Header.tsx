import { ArrowRight } from "lucide-react";
import { Brand } from "./Brand";

const links = [
  ["INÍCIO", "#inicio"],
  ["SOBRE", "#sobre"],
  ["SOLUÇÕES", "#solucoes"],
  ["TREINAMENTOS", "#treinamentos"],
  ["CASES", "#cases"],
  ["CONTEÚDO", "#conteudo"],
  ["CONTATO", "#contato"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="main-nav" aria-label="Navegação principal">
          {links.map(([label, href], index) => (
            <a key={href} className={index === 0 ? "nav-link active" : "nav-link"} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="contact-pill" href="#contato">
          FALE CONOSCO <ArrowRight size={18} />
        </a>
      </div>
    </header>
  );
}
