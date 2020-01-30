import React from 'react';

import './styles.css';

export default function Header({ sections }) {
  return (
    <header>
      <a href="/">
        <img src="/favicon.png" alt="Site logo" />
      </a>
      <ul>
        {sections.map(section => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
