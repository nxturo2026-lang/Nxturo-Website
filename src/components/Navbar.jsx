import { useState } from "react";
import "../styles/Navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Events & Shoot", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-logo"
          aria-label="NXTURO Home"
          onClick={closeMenu}
        >
          <img src="/nxturo%20logo.png" alt="NXTURO Logo" />
        </a>

        <nav className="navbar-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              className="navbar-link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar-cta">
          <span>Let's Connect</span>
          <span className="cta-arrow" aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className={`navbar-menu ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              <span>{item.label}</span>
              <span className="mobile-link-arrow" aria-hidden="true">↗</span>
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-menu-cta"
            onClick={closeMenu}
          >
            Let's Connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}