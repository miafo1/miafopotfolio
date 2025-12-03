import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

const HomePage = () => (
  <Layout>
    <Hero />
    <About />
    <Skills />
    <Certifications />
    <Services />
    <Projects />
    <Experience />
    <Contact />
  </Layout>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
