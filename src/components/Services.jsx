import {
  FaGlobe,
  FaBullhorn,
  FaPaintBrush,
  FaVideo,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";
import "../styles/Services.css";

function Services() {
  return (
    <section
  className="services"
  id="services"
  data-aos="fade-up"
>
      <h2>Our Services</h2>

      <p>
        We help businesses build a powerful digital presence with creative and
        modern solutions.
      </p>

      <div className="services-grid">
<div className="service-card">
  <FaGlobe className="service-icon" />
  <h3>Website Development</h3>
  <p>
    Modern, responsive and fast websites designed for your business.
  </p>
</div>

        <div className="service-card">
  <FaBullhorn className="service-icon" />
  <h3>Social Media Management</h3>
  <p>
    Manage and grow your social media with engaging content.
  </p>
</div>

        <div className="service-card">
  <FaPaintBrush className="service-icon" />
  <h3>Graphic Design</h3>
  <p>
    Creative designs for branding, posters and social media.
  </p>
</div>

        <div className="service-card">
  <FaVideo className="service-icon" />
  <h3>Video Editing</h3>
  <p>
    Professional editing for reels, ads and promotional videos.
  </p>
</div>

        <div className="service-card">
  <FaRobot className="service-icon" />
  <h3>AI Creatives</h3>
  <p>
    AI-powered creative visuals for modern businesses.
  </p>
</div>

        <div className="service-card">
  <FaChartLine className="service-icon" />
  <h3>Digital Marketing</h3>
  <p>
    SEO and marketing strategies that help your business grow.
  </p>
</div>

      </div>
    </section>
  );
}

export default Services;