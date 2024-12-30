import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Network Calculator',
      description: 'A responsive network calculator built with React.',
    },
    {
      id: 2,
      title: 'Ticketing System',
      description: 'Administration and inventory management through a ticketing system.',
    },
    {
      id: 3,
      title: 'Raffles',
      description: 'Random raffle generation for different types.',
    },
  ];

  return (
    <section id="projects-section" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

