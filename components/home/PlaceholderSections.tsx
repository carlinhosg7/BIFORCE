const sections = [
  ["servicos", "Serviços", "Soluções sob medida para desafios reais de dados e gestão."],
  ["cursos", "Treinamentos", "Power BI, Excel, SQL, Python, DAX, Automação e IA."],
  ["cases", "Cases", "Projetos reais com foco em ganho de produtividade e qualidade da decisão."],
  ["sobre", "Sobre a BIFORCE", "Tecnologia, dados e visão de negócio trabalhando juntos."],
] as const;

export function PlaceholderSections() {
  return (
    <>
      {sections.map(([id, title, text], index) => (
        <section id={id} key={id} className={index % 2 ? "border-y border-white/5 bg-white/[0.015]" : ""}>
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-400">BIFORCE</div>
              <h2 className="mt-3 text-4xl font-black text-white">{title}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">{text}</p>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-cyan-400/70 via-blue-500/30 to-transparent" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
