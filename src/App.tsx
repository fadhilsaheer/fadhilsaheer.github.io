import React from 'react';
import { useIntersection } from 'react-use';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

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
    <Layout Navbar={<Navbar show={showNav} />}>
      <div ref={intersectionRef}>
        <About />
      </div>
      <Skills />
      <Projects />
      <Footer />
    </Layout>
  );
};

export default App;
