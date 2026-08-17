import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* ========================================
          NAVBAR CONTAINER
      ======================================== */}

      <div className="navbar-container">

        {/* ========================================
            DESKTOP NAVIGATION
        ======================================== */}

        <nav className="navbar-links">

          <a href="#home" className="active">
            Home
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#about">
            About
          </a>

          <a href="#portfolio">
            Portfolio
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>


        {/* ========================================
            DESKTOP CTA
        ======================================== */}

        <a
          href="#contact"
          className="navbar-cta"
        >
          Let's Talk

          <span className="cta-arrow">
            →
          </span>
        </a>


        {/* ========================================
            MOBILE MENU BUTTON
        ======================================== */}

        <button
          type="button"
          className={`navbar-menu ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* ========================================
          MOBILE MENU
      ======================================== */}

      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >

        <nav className="mobile-menu-links">

          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#services"
            onClick={closeMenu}
          >
            Services
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#portfolio"
            onClick={closeMenu}
          >
            Portfolio
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>


          {/* MOBILE CTA */}

          <a
            href="#contact"
            className="mobile-menu-cta"
            onClick={closeMenu}
          >
            Let's Talk

            <span>
              →
            </span>
          </a>

        </nav>

      </div>

    </header>
  );
};

export default Navbar;