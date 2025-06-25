import React, { useEffect } from 'react';
import Sidebar from './components/Navigation/Sidebar';
import Landing from './components/Sections/Landing';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';
import Contact from './components/Sections/Contact';
import Testimonials from './components/Sections/Testimonials';
import { initializeAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <div className="relative">
      <Sidebar />
      <main className="overflow-x-hidden">
        <Landing />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;