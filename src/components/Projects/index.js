import React from 'react';

import './styles.css';

export default function Projects({ projects }) {
  return (
    <section id="Projects">
      <h2>Projetos</h2>
      <ul>
        {projects.map(project => (
          <li key={project.repository} className="card">
            <a href={project.website ? project.website : project.repository} target="_blank" rel="noopener noreferrer">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <footer>
                <div className="circle" style={{ backgroundColor: project.color }}></div> {project.technology}
              </footer>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
