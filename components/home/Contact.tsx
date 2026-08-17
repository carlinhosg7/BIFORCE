import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return <section id="contato" className="contact-section"><div className="shell"><div className="contact-panel"><div><div className="section-kicker">PRÓXIMO PASSO</div><h2>Conte o desafio. Nós desenhamos a solução.</h2><p>Quer melhorar um dashboard, automatizar um processo, organizar seus dados, aplicar IA ou capacitar sua equipe? Explique o cenário e nós retornamos com a melhor abordagem para começar.</p><div className="contact-proof">Diagnóstico inicial • Escopo sob medida • Soluções aplicáveis ao negócio</div></div><div className="contact-actions"><a className="primary-cta" href="mailto:contato@biforce.com.br"><Mail size={19}/> SOLICITAR PROPOSTA</a><a className="secondary-cta" href="#"><MessageCircle size={19}/> FALAR NO WHATSAPP <ArrowRight size={18}/></a></div></div></div></section>;
}
