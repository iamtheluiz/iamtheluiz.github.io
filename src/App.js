import React from 'react';

// Site data
import projects from './services/projects';

// Page components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const sections = [
    { name: 'About', id: 'About' },
    { name: 'Projects', id: 'Projects' },
    { name: 'Social Media', id: 'SocialMedia' }
  ];

  return (
    <>
      <Header sections={sections} />
      <main>
        <About />
        <Projects projects={projects} />
      </main>
    </>
  );
}

export default App;
