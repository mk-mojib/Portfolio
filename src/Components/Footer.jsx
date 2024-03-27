// Footer.js
import React from 'react';
import {FaLinkedin, FaWhatsapp, FaGithub  } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
      <a href="https://www.linkedin.com/in/mdkhalidmojib/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/9955888978" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://github.com/mk-mojib/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p>&copy; Copyright <b>Md Khalid Mojib.</b> All Rights Reserved</p>
      <p>Designed by <span style={{ color: '#1acc8d' }}>Md Khalid Mojib</span></p>
    </footer>
  );
};

export default Footer;