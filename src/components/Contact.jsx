import "../styles/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rt7lcmr",
        "template_a4yx4a4",
        form.current,
        "CtZfTg7IrptZvMf3P"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* LEFT CONTENT */}

        <div className="contact-content">

          <span className="contact-label">
            LET'S CONNECT
          </span>

          <h2>
            Have an idea?
            <br />
            <em>Let's build it.</em>
          </h2>

          <p>
            Tell us what you're looking to create. Whether it's a
            website, brand identity or digital solution, we'd love
            to hear about it.
          </p>

          <div className="contact-social">

            <span>Follow NXTURO</span>

            <div className="social-links">

              <a
                href="https://instagram.com/nxturo.technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://facebook.com/nxturo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/918940358514"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        {/* FORM */}

        <div className="contact-form-wrapper">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <div className="form-field">

              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />

            </div>

            <div className="form-field">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />

            </div>

            <div className="form-field">

              <label htmlFor="message">
                Tell us about your project
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="A little about your idea..."
                required
              ></textarea>

            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send Enquiry
              <FaArrowRight />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;