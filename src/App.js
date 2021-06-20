import React from 'react';

// Site data
import projects from './services/projects';

// Page components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const sections = [
    { name: 'Sobre', id: 'About' },
    { name: 'Projetos', id: 'Projects' },
  ];

  return (
    <>
      <Header sections={sections} />
      <main>
        <About />
        <Projects projects={projects} />
      </main>
      <Footer />
    </>
  );
}

export default App;
