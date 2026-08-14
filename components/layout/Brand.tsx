import { ArrowUpRight, BarChart3 } from "lucide-react";

export function Brand() {
  return (
    <a href="#inicio" className="brand" aria-label="BIForce - início">
      <span className="brand-mark" aria-hidden="true">
        <BarChart3 size={29} strokeWidth={2.15} />
        <ArrowUpRight className="brand-arrow" size={27} strokeWidth={2.6} />
      </span>
      <span>
        <span className="brand-name"><b>BI</b>FORCE</span>
        <span className="brand-tag">DADOS EM DECISÕES.</span>
      </span>
    </a>
  );
}
