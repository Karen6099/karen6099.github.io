import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="arcade-cabinet">
          <div className="arcade-marquee">
            <span className="marquee-lights" aria-hidden="true">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className="marquee-light" style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </span>
            <span className="marquee-title">KAREN</span>
          </div>

          <div className="arcade-screen">
            <div className="screen-scanlines" aria-hidden="true" />
            <div className="screen-vignette" aria-hidden="true" />
            <div className="hero-content">
              <h1>Hi, I'm Karen</h1>
              <p className="subtitle">Developer | Designer | Creator</p>
              <p className="insert-coin">▶ INSERT COIN — PRESS A BUTTON BELOW</p>
            </div>
          </div>

          <div className="arcade-vents" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
