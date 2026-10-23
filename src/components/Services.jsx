import "../styles/Services.css";

import {
  FiPenTool,
  FiVideo,
  FiZap,
  FiShare2,
  FiTrendingUp,
  FiBarChart2,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    icon: <FiPenTool />,
    title: "Graphic Design",
    description:
      "Creative and eye-catching designs that bring your brand identity to life.",
  },
  {
    number: "02",
    icon: <FiVideo />,
    title: "Video Editing",
    description:
      "Engaging videos and reels that tell your story and capture attention.",
  },
  {
    number: "03",
    icon: <FiZap />,
    title: "AI Creatives",
    description:
      "Innovative AI-powered visuals and creative content for modern brands.",
  },
  {
    number: "04",
    icon: <FiShare2 />,
    title: "Social Media Management",
    description:
      "Consistent content planning and page management for your business.",
  },
  {
    number: "05",
    icon: <FiTrendingUp />,
    title: "Social Media Marketing",
    description:
      "Creative social campaigns that help your brand connect with its audience.",
  },
  {
    number: "06",
    icon: <FiBarChart2 />,
    title: "Digital Marketing",
    description:
      "Strategic digital promotions to strengthen your online presence.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-intro">
        <span className="section-label">OUR SERVICES</span>

        <h2>
          Creative ideas.
          <br />
          <span>Digital possibilities.</span>
        </h2>

        <p>
          We help businesses build a stronger brand presence through
          creative design, engaging content and digital solutions.
        </p>

        <a href="#contact" className="services-cta">
          Let's work together
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-top">
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>

              <span className="service-number">
                {service.number}
              </span>
            </div>

            <div className="service-body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>

            <a
              href="#contact"
              className="service-link"
              aria-label={`Enquire about ${service.title}`}
            >
              Let's talk
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;