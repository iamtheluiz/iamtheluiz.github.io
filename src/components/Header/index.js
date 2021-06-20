import React from 'react';

import './styles.css';

export default function Header({ sections }) {
  return (
    <header className="container">
      <a href="/">
        <img src="/favicon.png" alt="Site logo" />
      </a>
      <nav>
        <ul>
          {sections.map(section => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
