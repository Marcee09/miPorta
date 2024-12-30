import React from 'react';
import './About.css';
import aboutImage from '../assets/fotoHome.jpeg'; 

const About = () => {
  return (
    <section id="about-section" className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm <span className="highlight">Marcela</span>, a passionate software developer from San Juan, Argentina.
            I specialize in creating modern, responsive web applications and love solving complex problems with elegant code.
          </p>
          <p>
            Currently, I'm pursuing a degree in <span className="highlight">Web Programming</span> and expanding my skills in 
            <span className="highlight"> React, Node.js, HTML, CSS, JavaScript, and Python</span>. My goal is to build impactful applications that make
            people's lives easier.
          </p>
          <p>
            In my free time, I enjoy exploring new technologies, working on personal projects, and collaborating with other developers.
          </p>
        </div>
        <div className="about-photo">
          <img src={aboutImage} alt="Marcela" />
        </div>
      </div>
      <div className="about-container">
        <div className="section">
          <h3>Experience</h3>
          <div className="scrollable">
            <p>Sistema de gestión de tickets utilizando php con laravel(para la UNSJ 2024 - Present)</p>
            <p>Becaria en UNSJ departamento de informática (2023 - Present)</p>
          </div>
        </div>
        <div className="section">
          <h3>Languages & Tools</h3>
          <div className="scrollable">
            <p>React, Node.js, Python, HTML, CSS, JavaScript, Laravel,php</p>
            <p>SQL, Git, Docker, Figma</p>
          </div>
        </div>
        <div className="section">
          <h3>Education</h3>
          <div className="scrollable">
            <p>University of San Juan - Web Programming (Expected 2025)</p>
            <p>Curso de metodologías agiles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;