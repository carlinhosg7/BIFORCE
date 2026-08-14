export function HeroGraphic() {
  return (
    <div className="hero-artwork-wrap relative mx-auto w-full max-w-[800px]" aria-hidden="true">
      <div className="hero-artwork-glow" />
      <img
        src="/images/home/biforce-hero-transparent.png"
        alt=""
        className="hero-artwork"
        draggable="false"
      />
    </div>
  );
}
