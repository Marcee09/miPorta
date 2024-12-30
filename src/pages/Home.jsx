import React from 'react';
import './Home.css';
import profileImage from '../assets/foHome.png'; 

const Home = () => {
  return (
    <section className="home">
      <div className="home-text">
        <p>Hello, I'm</p>
        <h1>Marcela Herrera</h1>
        <h3>Web development student</h3>
        <p>I am a web development student with a passion for building modern and functional applications. I am seeking an opportunity to showcase my skills and continue growing professionally. I have experience with technologies such as HTML, CSS, JavaScript, React, and I am committed to creating innovative solutions that add value. I am ready to join a team where I can contribute and learn!</p>
        <button className="hire-me-btn">Hire Me</button>
      </div>
      <div className="home-image">
        <img src={profileImage} alt="Marcela Herrera" />
        <div className="background-shapes">
          <div className="shape circle"></div>
          <div className="shape triangle"></div>
          <div className="shape square"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;