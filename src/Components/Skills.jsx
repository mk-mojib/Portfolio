import React from 'react';
import "./Skills.css";
import htmlcss from "../Components/Assets2/html-css.webp"
import js from "../Components/Assets2/javascript.webp"
import react from "../Components/Assets2/react.webp"
import tailwind from "../Components/Assets2/tailwind.webp"
import redux from "../Components/Assets2/redux.webp"
import nodejs from "../Components/Assets2/nodejs.webp"
import expressjs from "../Components/Assets2/expressjs.webp"
import mongodb from "../Components/Assets2/mongodb.webp"
import mysql from "../Components/Assets2/mongodb.webp"
import api from "../Components/Assets2/api.webp"
import bootstrap from "../Components/Assets2/bootstrap.webp"
import git from "../Components/Assets2/Git.png"
import github from "../Components/Assets2/github.png"
import office365 from "../Components/Assets2/office365.png"

const Skills = () => {
  return (
    <section className="skills">
        <h2 className="section-heading">Skills</h2>
        <div className="section-content">
            <h3>Front-End</h3>
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
                </div>   
            </div>
            <div className="section-content">
            <h3>Back-End</h3>
                <div className="key-highlights-wrapper">
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
                </div>
                <div className="section-content">
                <h3>Database</h3>
                    <div className="key-highlights-wrapper">    
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
                </div> 
            </div>       
            <div className="section-content">
                <h3>Framworks</h3>
                <div className="key-highlights-wrapper"> 
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
                </div>
            </div>
            <div className="section-content">
                <h3>Additional Skills</h3>
                <div className="key-highlights-wrapper">         
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
                    <div className="highlights-container">
                        <div className="highlights-child">
                            <div className="highlights-image">
                                <img src={github} alt="highlight-icon" className="image" />
                                <div className="highlights-content">
                                GitHub
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="highlights-container">
                        <div className="highlights-child">
                            <div className="highlights-image">
                                <img src={office365} alt="highlight-icon" className="image" />
                                <div className="highlights-content">
                                Microsoft 365
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>    
        </div>
    </section>
  );
};

export default Skills;
