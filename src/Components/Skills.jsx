import React from 'react';
import "./Skills.css";
import htmlcss from "./Assets/html-css.webp"
import js from "./Assets/javascript.webp"
import react from "./Assets/react.webp"
import tailwind from "./Assets/tailwind.webp"
import redux from "./Assets/redux.webp"
import nodejs from "./Assets/nodejs.webp"
import expressjs from "./Assets/expressjs.webp"
import mongodb from "./Assets/mongodb.webp"
import mysql from "./Assets/mongodb.webp"
import api from "./Assets/api.webp"
import bootstrap from "./Assets/bootstrap.webp"
import git from "./Assets/Git.png"
import table1 from "./Assets/techbar2.png"

const Skills = () => {
  return (
    <div className='skill'>
    <section className="skills">
    <h2 className="section-heading">Skills</h2>
        <div className="table-men">
            <img src={table1} alt='men on table' />
        </div>
        <div className="key-highlights-wrapper">
            <div className="highlights-container">
                <div className="highlights-child">
                    <div className="highlights-image">
                        <img src={htmlcss} alt="highlight-icon" className="image" />
                        <div className="highlights-content">
                            HTML &amp; CSS
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlights-container">
                <div className="highlights-child">
                    <div className="highlights-image">
                        <img src={js} alt="highlight-icon" className="image" />
                        <div className="highlights-content">
                        JavsScript
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlights-container">
                <div className="highlights-child">
                    <div className="highlights-image">
                        <img src={react} alt="highlight-icon" className="image" />
                        <div className="highlights-content">
                        React
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlights-container">
                <div className="highlights-child">
                    <div className="highlights-image">
                        <img src={nodejs} alt="highlight-icon" className="image" />
                        <div className="highlights-content">
                        Node.js
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlights-container">
                <div className="highlights-child">
                    <div className="highlights-image">
                        <img src={expressjs} alt="highlight-icon" className="image" />
                        <div className="highlights-content">
                        Express.js
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlights-container">
                <div className="highlights-child">
                    <div className="highlights-image">
                        <img src={api} alt="highlight-icon" className="image" />
                        <div className="highlights-content">
                        APIs
                        </div>
                    </div>
                </div>
            </div>   
                <div className="highlights-container">
                <div className="highlights-child">
                    <div className="highlights-image">
                        <img src={mongodb} alt="highlight-icon" className="image" />
                        <div className="highlights-content">
                        MongoDB
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlights-container">
                <div className="highlights-child">
                    <div className="highlights-image">
                        <img src={mysql} alt="highlight-icon" className="image" />
                        <div className="highlights-content">
                        MySQL
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlights-container">
                <div className="highlights-child">
                    <div className="highlights-image">
                        <img src={redux} alt="highlight-icon" className="image" />
                        <div className="highlights-content">
                        Redux
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlights-container">
                <div className="highlights-child">
                    <div className="highlights-image">
                        <img src={tailwind} alt="highlight-icon" className="image" />
                        <div className="highlights-content">
                        Tailwind
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlights-container">
                <div className="highlights-child">
                    <div className="highlights-image">
                        <img src={bootstrap} alt="highlight-icon" className="image" />
                        <div className="highlights-content">
                        Bootstrap
                        </div>
                    </div>
                </div>
            </div>    
            <div className="highlights-container">
                <div className="highlights-child">
                    <div className="highlights-image">
                        <img src={git} alt="highlight-icon" className="image" />
                        <div className="highlights-content">
                        Git
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </section>
    </div>
  );
};

export default Skills;