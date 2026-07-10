import "../styles/Hero.css";
function Hero() {
  return (
  <section className="hero" id="home" data-aos="fade-up">
      <p className="tagline">🚀 DIGITAL AGENCY</p>

      <h1>
        Build Your Digital Future
        <br />
        with NXTURO
      </h1>

      <p className="hero-text">
        We create premium websites, branding, AI creatives,
        social media management and digital marketing solutions
        that help businesses grow.
      </p>

      <div className="hero-buttons">
        <button className="primary-btn">Start Your Project</button>
        <button className="secondary-btn">Our Services</button>
      </div>
    </section>
  );
}

export default Hero;