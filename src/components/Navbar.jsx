import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">NXTURO</div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
<li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
<li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
<li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      <button className="nav-btn">Let's Talk</button>
    </nav>
  );
}

export default Navbar;