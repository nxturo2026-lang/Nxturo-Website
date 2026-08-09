import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">

      <div className="portfolio-container">

        <span className="portfolio-label">
          OUR WORK
        </span>

        <h2>
          Building What's
          <br />
          <em>Next.</em>
        </h2>

        <p className="portfolio-description">
          We’re currently working on our first digital projects.
          This space will soon showcase the brands, websites and
          creative experiences we build.
        </p>

        <div className="portfolio-card">

          <div className="portfolio-card-content">

            <span>COMING SOON</span>

            <h3>
              Something great
              <br />
              is taking shape.
            </h3>

            <p>
              NXTURO is at the beginning of its journey.
              We’re building meaningful digital experiences
              and will showcase our work here as it grows.
            </p>

          </div>

          <div className="portfolio-mark">
            N
          </div>

        </div>

        <div className="portfolio-cta">

          <span>
            Have a project in mind?
          </span>

          <a href="#contact">
            Let’s Talk
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Portfolio;