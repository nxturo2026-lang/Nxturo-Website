import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="NXTURO"
          />
        </a>

        {/* Navigation */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#portfolio" onClick={closeMenu}>
            Portfolio
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* Let's Talk */}
        <a
          href="#contact"
          className="navbar-btn"
          onClick={closeMenu}
        >
          Let's Talk
        </a>

        {/* Mobile Menu */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;