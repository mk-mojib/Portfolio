// Navbar.js
import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    // Add scroll event listener to update activeLink on scroll
    Events.scrollEvent.register('begin', (to) => {
      setActiveLink(to);
    });

    // Set up scrollSpy to detect scroll events for each section
    scrollSpy.update();

    // Remove event listeners when the component is unmounted
    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);

  return (
    <nav id="navbar" className="navbar">
      <h2 className='name'>MKM</h2>
      <ul className="nav-list">
        <li>
          <RouterLink to="/">
            <span className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}>Home</span>
          </RouterLink>
        </li>
        <li>
          <ScrollLink to="about" spy={true} smooth={true} duration={500} className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleScroll("about")}>
            About
          </ScrollLink>
        </li>
        {/* Add more navigation links for other sections */}
      </ul>
    </nav>
  );
};

export default Navbar;
