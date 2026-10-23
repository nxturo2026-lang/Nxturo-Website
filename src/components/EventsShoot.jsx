import "../styles/EventsShoot.css";
import {
  FiArrowUpRight,
  FiCamera,
  FiVideo,
  FiAperture,
} from "react-icons/fi";

const shootServices = [
  {
    number: "01",
    icon: <FiCamera />,
    title: "Event Photography",
    description:
      "Capture celebrations, special occasions and meaningful moments through creative photography.",
  },
  {
    number: "02",
    icon: <FiVideo />,
    title: "Event Videography",
    description:
      "Preserve the atmosphere and story of your event with engaging video content.",
  },
  {
    number: "03",
    icon: <FiAperture />,
    title: "Brand & Product Shoots",
    description:
      "Showcase your products, collections and brand identity through compelling visuals.",
  },
];

export default function EventsShoot() {
  return (
    <section className="events-shoot" id="events-shoot">
      <div className="events-shoot-inner">
        <header className="events-shoot-heading" data-aos="fade-up">
          <span className="events-shoot-label">EVENTS & SHOOT</span>

          <h2>
            Every moment has
            <br />
            <span>a story to tell.</span>
          </h2>

          <p>
            From memorable events to creative brand shoots,
            we turn real moments into lasting visual stories.
          </p>
        </header>

        <div className="events-shoot-grid">
          <div className="events-shoot-image" data-aos="fade-right">
            <img
              src="/events-shoot.jpg"
              alt="Event photography and creative production"
              loading="lazy"
            />

            <div className="events-shoot-image-caption">
              <span>YOUR MOMENT. OUR LENS.</span>
              <h3>Stories worth remembering.</h3>
            </div>
          </div>

          <div className="events-shoot-list">
            {shootServices.map((service, index) => (
              <article
                className="events-shoot-card"
                key={service.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="events-shoot-card-header">
                  <span className="events-shoot-icon">
                    {service.icon}
                  </span>
                  <span className="events-shoot-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="events-shoot-footer" data-aos="fade-up">
          <div>
            <h3>Planning an event or shoot?</h3>
            <p>Let's create something memorable together.</p>
          </div>

          <a href="#contact" className="events-shoot-button">
            Let's Connect
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}