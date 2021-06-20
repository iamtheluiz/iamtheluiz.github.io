import React from 'react';
import projects from '../../services/projects';

import Project from '../Project';

import './styles.css';

export default function Projects({ repos }) {
  return (
    <section id="Projects">
      <h2>Projetos</h2>
      <div className="container">
        {projects.map((project, i) => (
          <Project project={project} inverted={i % 2 === 1 ? true : false} />
        ))}
        <h3 className="more-repositories">Outros Repositórios</h3>
        <ul>
          {repos.map(repo => (
            <li key={repo.repository} className="card">
              <a href={repo.website ? repo.website : repo.repository} target="_blank" rel="noopener noreferrer">
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <footer>
                  <div className="circle" style={{ backgroundColor: repo.color }}></div> {repo.technology}
                </footer>
              </a>
            </li>
          ))}
        </ul>
        <a className="github-repositories" href="https://github.com/iamtheluiz" target="_blank" rel="noopener noreferrer">Repositórios no Github</a>
      </div>
    </section>
  );
}
