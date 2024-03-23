import React from 'react';
import "./Projects.css";
import project1 from "./Assets/laptop6.png"
import project2 from "./Assets/laptop7.png"
import project3 from "./Assets/laptop8.png"
import project4 from "./Assets/laptop9.png"
import project5 from "./Assets/laptop6.png"

const Projects = () => {
  return (
    <div className='project-container'>
    <section className='projects'>
        <h1 className='project-h1'>My Recent <b>Works</b></h1>
        <br />
        <p className='project-p1'>Here are a few projects I've worked on recently.</p>
        <div className="project">
        <div className="project-card">
                <div className="card-content">
                    <div className="card-image">
                        <img src={project1} alt="project 1" className='project-img' />
                    </div>
                    <div className="card-details">
                        <h2 className='project-title'>WanderLust</h2>
                        <p>Wanderlust is a web application that allows users to share and explore unique accommodations around the world. Whether it's a cozy home, a luxurious hotel room, or a charming cottage, Wanderlust provides a platform for users to showcase their properties and connect with like-minded travelers.
                        </p>
                        <div className="btn-container">
                            <button className='btn btn-color-2 project-btn' onClick={() => window.open("https://github.com/mk-mojib/", "_blank")}>
                                GitHub
                            </button>
                            <button className='btn btn-color-2 project-btn' onClick={() => window.open("https://wanderlust-z0de.onrender.com/listings", "_blank")}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <div className="card-content">
                    <div className="card-image">
                        <img src={project2} alt="project 1" className='project-img' />
                    </div>
                    <div className="card-details">
                        <h2 className='project-title'>Moshop</h2>
                        <p>At Moshop, we redefine online shopping, offering a curated collection of the latest trends in men's, women's, and kids' garments. We pride ourselves on being your go-to destination for stylish and affordable fashion.
                        </p>
                        <div className="btn-container">
                            <button className='btn btn-color-2 project-btn' onClick={() => window.open("https://github.com/mk-mojib/", "_blank")}>
                                GitHub
                            </button>
                            <button className='btn btn-color-2 project-btn' onClick={() => window.open("https://mk-mojib.github.io/ecommerce-react-app/", "_blank")}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <div className="card-content">
                    <div className="card-image">
                        <img src={project3} alt="project 1" className='project-img' />
                    </div>
                    <div className="card-details">
                        <h2 className='project-title'>Star Wars Planets Directory</h2>
                        <p>Welcome to the Star Wars Planets Explorer, a captivating React web application crafted to showcase the awe-inspiring planets from the Star Wars universe. Leveraging the power of the Star Wars API (SWAPI), this project goes beyond the ordinary, not only providing detailed information about each celestial body but also unveiling the notable residents that call these planets home.
                        </p>
                        <div className="btn-container">
                            <button className='btn btn-color-2 project-btn' onClick={() => window.open("https://github.com/mk-mojib/", "_blank")}>
                                GitHub
                            </button>
                            <button className='btn btn-color-2 project-btn' onClick={() => window.open("https://mk-mojib.github.io/star-wars-planets/", "_blank")}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <div className="card-content">
                    <div className="card-image">
                        <img src={project4} alt="project 1" className='project-img' />
                    </div>
                    <div className="card-details">
                        <h2 className='project-title'>Amazon Clone | Home Page</h2>
                        <p>Creating an Amazon.com clone using HTML and CSS is a commendable project that allows you to hone your front-end development skills. A successful clone typically involves replicating the visual elements and layout of Amazon's homepage.
                        </p>
                        <div className="btn-container">
                            <button className='btn btn-color-2 project-btn' onClick={() => window.open("https://github.com/mk-mojib/", "_blank")}>
                                GitHub
                            </button>
                            <button className='btn btn-color-2 project-btn' onClick={() => window.open("https://mk-mojib.github.io/amazon-clone/", "_blank")}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <div className="card-content">
                    <div className="card-image">
                        <img src={project5} alt="project 1" className='project-img' />
                    </div>
                    <div className="card-details">
                        <h2 className='project-title'>Spotify Clone | Home Page</h2>
                        <p>Creating a Spotify music website clone using HTML and CSS allows you to replicate some key features of the popular music streaming platform.
                        </p>
                        <div className="btn-container">
                            <button className='btn btn-color-2 project-btn' onClick={() => window.open("https://github.com/mk-mojib/", "_blank")}>
                                GitHub
                            </button>
                            <button className='btn btn-color-2 project-btn' onClick={() => window.open("https://mk-mojib.github.io/spotify-clone/", "_blank")}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <Contacts /> */}
    </div>
  );
}

export default Projects;
