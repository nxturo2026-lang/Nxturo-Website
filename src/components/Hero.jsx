
import React, { useEffect, useState } from "react";
import "../styles/Hero.css";

const slides = [
  {
    number: "01",
    label: "WEBSITE DEVELOPMENT",
    title: (
      <>
        Build Your
        <br />
        Digital Future
        <br />
        <span>with NXTURO</span>
      </>
    ),
    description:
      "We design and develop modern, responsive websites that give your business a strong digital presence and help you grow online.",
    button: "Start Your Project",
    image: "/hero-website.png",
  },
  {
    number: "02",
    label: "GRAPHIC DESIGN",
    title: (
      <>
        Design That
        <br />
        <span>Defines Your Brand</span>
      </>
    ),
    description:
      "From social media creatives to complete brand visuals, we create clean and meaningful designs that represent your business.",
    button: "Start a Design",
    image: "/hero-design.png",
  },
  {
    number: "03",
    label: "SHOOT & EDIT",
    title: (
      <>
        Your Moments.
        <br />
        <span>Professionally Captured.</span>
      </>
    ),
    description:
      "From event shoots to professional editing, we capture your important moments and turn them into polished visual stories.",
    button: "Book a Shoot",
    image: "/hero-events.png",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-visual" key={slide.image}>
        <div className="hero-image-wrapper">
          <img
            src={slide.image}
            alt={slide.label}
            className="hero-image"
          />
          <div className="hero-image-overlay" />
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content" key={current}>
          <div className="hero-label">
            <span>✦</span>
            {slide.label}
          </div>

          <h1>{slide.title}</h1>

          <p>{slide.description}</p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-btn">
              {slide.button}
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-slider">
        <button
          type="button"
          className="slider-arrow slider-prev"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          ←
        </button>

        <div className="slide-dots">
          {slides.map((item, index) => (
            <button
              type="button"
              key={item.number}
              className={`slide-dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index ? "true" : undefined}
            >
              <span />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="slider-arrow slider-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Hero;
