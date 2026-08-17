import { ArrowRight } from "lucide-react";
import { Brand } from "./Brand";

const links = [
  ["INÍCIO", "#inicio"],
  ["PROBLEMAS", "#sobre"],
  ["SOLUÇÕES", "#solucoes"],
  ["TREINAMENTOS", "#treinamentos"],
  ["APLICAÇÕES", "#cases"],
  ["COMO FUNCIONA", "#conteudo"],
  ["CONTATO", "#contato"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="main-nav" aria-label="Navegação principal">
          {links.map(([label, href], index) => <a key={href} className={index === 0 ? "nav-link active" : "nav-link"} href={href}>{label}</a>)}
        </nav>
        <a className="contact-pill" href="#contato">SOLICITAR PROPOSTA <ArrowRight size={18} /></a>
      </div>
    </header>
  );
}
