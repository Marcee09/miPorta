import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <section id="home-section">
        <Home />
      </section>
      <section id="about-section">
        <About />
      </section>
      <section id="projects-section">
        <Projects />
      </section>
      <section id="services-section">
        <Services/>
      </section>
      <section id="contact-section">
        <Contact/>
      </section>
      <Footer />
    </>
  );
};

export default App;
