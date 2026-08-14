const tech = ["Power BI", "Excel", "SQL", "Python", "DAX", "Power Query", "VBA", "APIs", "IA"];

export function Technologies() {
  return (
    <section className="tech-section" aria-label="Tecnologias">
      <div className="shell tech-row">
        {tech.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}
