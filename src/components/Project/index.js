import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

import './styles.css';

export default function Project({ project, inverted = false }) {
  return (
    <div className={`project-item ${inverted && 'inverted'}`}>
      <div className="cover">
        <a href={project.site} target="_blank" rel="noreferrer">
          <img src={project.cover} alt={project.title} />
        </a>
      </div>
      <div className="details">
        <strong>{project.title}</strong>
        <p>{project.description}</p>
        <div className="links">
          <a href={project.repository} target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <span>Github</span>
          </a>
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <FaGlobe />
            <span>Site</span>
          </a>
        </div>
      </div>
    </div>
  );
}
