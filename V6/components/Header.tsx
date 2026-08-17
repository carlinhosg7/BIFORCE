"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#inicio" className="brand" aria-label="BIForce">
          <span className="brand-mark">B</span>
          <span className="brand-copy">
            <strong>BIFORCE</strong>
            <small>DADOS EM DECISÕES</small>
          </span>
        </a>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          <a href="#solucoes">Soluções <ChevronDown size={15} /></a>
          <a href="#treinamentos">Treinamentos</a>
          <a href="#consultoria">Consultoria</a>
          <a href="#setores">Setores <ChevronDown size={15} /></a>
          <a href="#cases">Cases</a>
          <a href="#conteudo">Conteúdo</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <a className="header-cta" href="#contato">Fale com nosso time</a>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
