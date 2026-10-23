import "../styles/Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_rt7lcmr",
        "template_a4yx4a4",
        form.current,
        "CtZfTg7IrptZvMf3P"
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-content" data-aos="fade-right">
          <span className="contact-label">
            LET'S CONNECT
          </span>

          <h2 className="contact-title">
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p className="contact-description">
            Have a business to grow or a creative idea in mind?
            Tell us what you need. From promotional designs and
            reels to digital marketing and event shoots, let's
            create something meaningful together.
          </p>

          <div className="contact-divider" />

          <div className="contact-social">
            <div className="contact-social-text">
              <h3>Let's stay connected</h3>
              <p>Follow NXTURO on social media.</p>
            </div>

            <div className="social-links">
              <a
                href="https://instagram.com/nxturo.technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit NXTURO on Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://facebook.com/nxturo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit NXTURO on Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/918940358514"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact NXTURO on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="contact-note">
            <span className="contact-note-dot" />
            <p>Have a project in mind? We'd love to hear from you.</p>
          </div>
        </div>

        <div
          className="contact-form-wrapper"
          data-aos="fade-left"
        >
          <div className="contact-form-heading">
            <span className="contact-form-step">START A PROJECT</span>
            <h3>Tell us about it.</h3>
            <p>Fill in the details below and we'll get your enquiry.</p>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >
            <div className="form-field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">
                Tell us about your project
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="What would you like us to help you with?"
                required
              />
            </div>

            {status === "success" && (
              <p className="contact-status success" role="status">
                Thank you! Your enquiry has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="contact-status error" role="alert">
                We couldn't send your enquiry. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="contact-submit"
              disabled={isSending}
            >
              <span>
                {isSending ? "Sending..." : "Send Enquiry"}
              </span>
              {!isSending && <FaArrowRight aria-hidden="true" />}
            </button>

            <p className="contact-privacy">
              Your details will only be used to respond to your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;