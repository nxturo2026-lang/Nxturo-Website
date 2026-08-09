import "../styles/About.css";
import aboutImage from "../assets/about.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* IMAGE */}
        <div className="about-visual">
          <img
            src={aboutImage}
            alt="NXTURO digital agency"
          />

          <div className="about-tag">
            <span>01</span>
            <p>Creative<br />Digital Agency</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="about-content">

          <span className="about-label">
            ABOUT NXTURO
          </span>

          <h2>
            Ideas into
            <br />
            <em>Digital Experiences.</em>
          </h2>

          <p className="about-description">
            We help brands turn ideas into meaningful digital
            experiences that connect, communicate and grow.
          </p>

          <p className="about-small-text">
            Combining design, technology and strategy to build
            digital solutions that are made to perform.
          </p>

          {/* VALUES */}
          <div className="about-values">

            <div className="about-value">
              <span>01</span>
              <div>
                <h4>Creative</h4>
                <p>Ideas that stand out.</p>
              </div>
            </div>

            <div className="about-value">
              <span>02</span>
              <div>
                <h4>Focused</h4>
                <p>Built around your goals.</p>
              </div>
            </div>

            <div className="about-value">
              <span>03</span>
              <div>
                <h4>Quality</h4>
                <p>Made with attention to detail.</p>
              </div>
            </div>

          </div>

          <a href="#contact" className="about-button">
            More About Us
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;