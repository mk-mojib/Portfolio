import React, { useState, useEffect } from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    // eslint-disable-next-line
    const [menu, setMenu] = useState("home");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav-container ${isTransparent ? 'transparent' : ''}`}>    
        <nav className='navbar'>
            <div className="logo">Md Khalid Mojib</div>
            <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                <ul className='nav-links'>
                    <li onClick={() => {setMenu("home")}}><Link to="/">Home</Link></li>
                    <li onClick={() => {setMenu("about")}}><Link to="/about">About</Link></li>
                    <li onClick={() => {setMenu("education")}}><Link to="/education">Education</Link></li>
                    <li onClick={() => {setMenu("skills")}}><Link to="/skills">Skills</Link></li>
                    <li onClick={() => {setMenu("projects")}}><Link to="/projects">Projects</Link></li>
                    <li onClick={() => {setMenu("contacts")}}><Link to="/contacts">Contacts</Link></li>
                </ul>
            </div>
        </nav>
        <nav className="hamburger-nav">
            <div className="logo">Md Khalid Mojib</div>
            <div className="hamburger-menu">
            <div className='menu'>MENU &nbsp;&nbsp;
            <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
                <div className={`menu-links ${isMenuOpen ? 'open' : ''}`} >
                      <ul>
                          <li onClick={() => { setMenu("home"); setIsMenuOpen(false); }}><Link to="/">Home</Link></li>
                          <li onClick={() => { setMenu("about"); setIsMenuOpen(false); }}><Link to="/about">About</Link></li>
                          <li onClick={() => { setMenu("education"); setIsMenuOpen(false); }}><Link to="/education">Education</Link></li>
                          <li onClick={() => { setMenu("skills"); setIsMenuOpen(false); }}><Link to="/skills">Skills</Link></li>
                          <li onClick={() => { setMenu("projects"); setIsMenuOpen(false); }}><Link to="/projects">Projects</Link></li>
                          <li onClick={() => { setMenu("contacts"); setIsMenuOpen(false); }}><Link to="/contacts">Contacts</Link></li>
                      </ul>  
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar





