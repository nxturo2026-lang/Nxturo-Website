import "../styles/Hero.css";
import HeroImage from "../assets/Hero.png";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* ================= BACKGROUND IMAGE ================= */}

      <div className="hero-bg">
        <img
          src={HeroImage}
          alt=""
          aria-hidden="true"
        />
      </div>


      {/* ================= CONTENT ================= */}

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-label">
            DIGITAL AGENCY
          </span>


          <h1>
            Build Your
            <br />
            <span>Digital Future</span>
            <br />
            with NXTURO.
          </h1>


          <p>
            We create thoughtful digital experiences,
            creative visuals, and modern solutions that
            help brands move forward.
          </p>


          <div className="hero-buttons">

            <a
              href="#contact"
              className="hero-btn hero-btn-primary"
            >
              Start Your Project
            </a>

            <a
              href="#services"
              className="hero-btn hero-btn-secondary"
            >
              Explore Services
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;