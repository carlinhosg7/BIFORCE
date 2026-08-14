export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 84 84"
        className={compact ? "h-10 w-10" : "h-12 w-12"}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="brandG" x1="8" y1="76" x2="76" y2="8" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B2CFF" />
            <stop offset="0.46" stopColor="#1777FF" />
            <stop offset="1" stopColor="#18E3E0" />
          </linearGradient>
          <filter id="brandGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g fill="none" stroke="url(#brandG)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" filter="url(#brandGlow)">
          <path d="M16 68 43 41" />
          <path d="M34 17h24c10 0 16 6 16 14 0 8-5 13-13 15 9 2 15 8 15 17 0 10-8 17-20 17H39" />
          <path d="M52 30 16 66" />
          <path d="M17 54V38" opacity=".9" />
          <path d="M29 54V29" opacity=".9" />
          <path d="M42 54V19" opacity=".9" />
          <path d="M37 31h18v18" />
        </g>
      </svg>
      <div className="leading-none">
        <div className={compact ? "text-xl font-black tracking-[0.03em]" : "text-[1.55rem] font-black tracking-[0.03em]"}>
          <span className="text-white">BI</span><span className="brand-word">FORCE</span>
        </div>
        <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.30em] text-slate-300">Dados em decisões.</div>
      </div>
    </div>
  );
}
