import React, { useState, useEffect } from "react";
import Preloader from "./Components/Pre";
import Navbar from './Components/Navbar';
import Home from "./Components/Home"
import About from "./Components/About"
import Education from "./Components/Education"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contacts from "./Components/Contacts"
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
