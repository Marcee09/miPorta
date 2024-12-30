import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Cierra el menú después de hacer clic
  };

  return (
    <header className="navbar">
      <div className="logo">
        <span className="r-letter">H</span>M
      </div>
      <nav>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home-section" onClick={(e) => handleScroll(e, 'home-section')}>Home</a></li>
          <li><a href="#about-section" onClick={(e) => handleScroll(e, 'about-section')}>About Me</a></li>
          <li><a href="#projects-section" onClick={(e) => handleScroll(e, 'projects-section')}>Projects</a></li>
          <li><a href="#services-section" onClick={(e) => handleScroll(e, 'services-section')}>Services</a></li>
          <li><a href="#contact-section" onClick={(e) => handleScroll(e, 'contact-section')}>Contact</a></li>
        </ul>
      </nav>
      <button className="cta-btn">Download CV</button>
    </header>
  );
};

export default Navbar;