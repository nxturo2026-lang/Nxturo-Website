import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a href="#home" className="navbar-logo">
          {/* Logo later add pannalam */}
        </a>

        {/* NAVIGATION */}
        <nav className="navbar-links">

          <a href="#home" className="active">
            Home
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#about">
            About Us
          </a>

          <a href="#work">
            Work
          </a>

          <a href="#events">
            Events
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>

        {/* LET'S TALK */}
        <a href="#contact" className="navbar-cta">
          <span className="cta-text">Let's Talk</span>
          <span className="cta-arrow">→</span>
        </a>

        {/* MOBILE MENU */}
        <button
          className="navbar-menu"
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;