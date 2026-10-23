
import "../styles/About.css";
import {
  FiArrowUpRight,
  FiTarget,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

const values = [
  {
    number: "01",
    icon: <FiTarget />,
    title: "Purposeful Creativity",
    description:
      "We create meaningful visuals and content that communicate your brand's identity.",
  },
  {
    number: "02",
    icon: <FiLayers />,
    title: "Creative Thinking",
    description:
      "We combine fresh ideas, thoughtful design and modern digital tools.",
  },
  {
    number: "03",
    icon: <FiTrendingUp />,
    title: "Brand Growth",
    description:
      "We help businesses build a consistent and memorable digital presence.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-heading">
          <span className="about-label">ABOUT NXTURO</span>

          <h2>
            Creativity with purpose.
            <br />
            <span>Built for your brand.</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-intro">
            <p className="about-lead">
              We turn ideas into creative digital experiences.
            </p>

            <p className="about-description">
              NXTURO is a creative digital brand helping businesses
              communicate their ideas through design, video and
              digital marketing. We bring creativity and technology
              together to help brands present themselves with
              confidence.
            </p>

            <a href="#contact" className="about-cta">
              Let's connect
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="about-values">
            {values.map((value) => (
              <article className="about-value" key={value.number}>
                <div className="about-value-top">
                  <span className="about-value-icon" aria-hidden="true">
                    {value.icon}
                  </span>

                  <span className="about-value-number">
                    {value.number}
                  </span>
                </div>

                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-bottom">
          <span className="about-bottom-line" />
          <p>CREATIVE IDEAS. MEANINGFUL CONNECTIONS. DIGITAL IMPACT.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
