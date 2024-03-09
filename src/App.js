
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import "./App.css"
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Achivements from "./Components/Achivements"

library.add(fab, fas, far);

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Achivements />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

