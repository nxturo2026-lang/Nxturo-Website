import "../styles/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <h2>Let's Work Together</h2>

      <p>
        Have a project in mind? We'd love to hear from you.
        Fill out the form below and we'll get back to you.
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit" className="primary-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;