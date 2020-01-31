import React from 'react';

// Page components
import Header from './components/Header';
import About from './components/About';

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
      </main>
    </>
  );
}

export default App;
