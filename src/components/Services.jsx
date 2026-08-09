import "../styles/Services.css";

import {
  FiMonitor,
  FiShare2,
  FiPenTool,
  FiVideo,
  FiZap,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";

function Services() {
  const services = [
    {
      icon: <FiMonitor />,
      title: "Website Development",
      description:
        "Fast, responsive and conversion-focused websites built to give your brand a strong digital presence.",
    },
    {
      icon: <FiShare2 />,
      title: "Social Media Management",
      description:
        "Creative content and strategic social media management that builds visibility, engagement and trust.",
    },
    {
      icon: <FiPenTool />,
      title: "Graphic Design",
      description:
        "Distinctive visuals and brand creatives that communicate your identity with clarity and consistency.",
    },
    {
      icon: <FiVideo />,
      title: "Video Editing",
      description:
        "Professional video content crafted to capture attention and connect your story with your audience.",
    },
    {
      icon: <FiZap />,
      title: "AI Creatives",
      description:
        "Smart AI-powered creatives and visual concepts designed to help modern brands stand out.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Digital Marketing",
      description:
        "Practical digital strategies that improve visibility, reach the right audience and support business growth.",
    },
  ];

  return (
    <section className="services" id="services">

      <div className="services-intro">

        <span className="section-label">
          WHAT WE DO
        </span>

        <h2>
          Digital solutions for{" "}
          <span>modern brands.</span>
        </h2>

        <p>
          From strategy and design to development and marketing,
          we create digital experiences that help brands connect,
          communicate and grow.
        </p>

        <a href="#contact" className="services-cta">
          Let's build together
          <FiArrowUpRight />
        </a>

      </div>


      <div className="services-grid">

        {services.map((service, index) => (
          <article className="service-card" key={index}>

            <div className="service-top">

              <div className="service-icon">
                {service.icon}
              </div>

              <FiArrowUpRight className="service-arrow" />

            </div>

            <div className="service-body">

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>

            <a href="#contact" className="service-link">
              Explore service
              <FiArrowUpRight />
            </a>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Services;