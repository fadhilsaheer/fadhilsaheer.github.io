import React from 'react';
import pkg from 'react-use';
const { useIntersection } = pkg;
import { About } from './About';
import { Experience } from './Experience';
import { Footer } from './Footer';
import { Body } from './Body';
import { Navbar } from './Navbar';
import { Projects } from './Projects';
import { Skills } from './Skills';

export const App: React.FC = () => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '-100px',
  });

  let showNav = false;
  if (intersection && !intersection.isIntersecting) {
    showNav = true;
  }

  return (
    <Body Navbar={<Navbar show={showNav} />}>
      <div ref={intersectionRef}>
        <About />
      </div>
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </Body>
  );
};

export default App;
