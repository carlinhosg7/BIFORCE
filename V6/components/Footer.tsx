export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark">B</span>
            <span className="brand-copy"><strong>BIFORCE</strong><small>DADOS EM DECISÕES</small></span>
          </div>
          <p>BI, Dados, Automação, Programação e Inteligência Artificial aplicados a resultados.</p>
        </div>

        <div><strong>Soluções</strong><a href="#solucoes">BI & Analytics</a><a href="#consultoria">Consultoria</a><a href="#solucoes">Automação</a><a href="#solucoes">IA aplicada</a></div>
        <div><strong>Empresa</strong><a href="#sobre">Sobre</a><a href="#cases">Cases</a><a href="#conteudo">Conteúdo</a><a href="#contato">Contato</a></div>
        <div><strong>Treinamentos</strong><a href="#treinamentos">Power BI</a><a href="#treinamentos">Excel</a><a href="#treinamentos">SQL</a><a href="#treinamentos">Python & IA</a></div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 BIForce. Todos os direitos reservados.</span>
        <span>Política de Privacidade • Termos de Uso</span>
      </div>
    </footer>
  );
}
