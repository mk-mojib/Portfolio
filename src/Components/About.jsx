import React from "react";
import "./About.css";
import laptopImg from "./Assets/mojib_portfolio.png";
import { ImPointRight } from "react-icons/im";

function About() {
  return (
    <div>
    <section className="about">
      <div className="about-content">
        <div className="about-me">
        <div className="about-text">
            <h1 className="about-heading">
                Know Who <strong>I'M</strong>
            </h1>
            <br />
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
                Hi Everyone, I am <span className="purple">Md Khalid Mojib </span>
                from <span className="purple"> Bihar, India.</span>
            <br />
                Aspiring software engineer seeking an Internship.
            <br />
                I have completed my B - Tech in C.S.E from RGPV - MP.
            <br />
            <br />
                 Apart from coding, some other activities that I love to do!
            </p>
            <br />
            <br />

            <ul>
                <li className="about-activity">
                <ImPointRight /> Listening to Music
                </li> <br />
                <li className="about-activity">
                <ImPointRight /> Reading Poetry
                </li> <br />
                <li className="about-activity">
                <ImPointRight /> Watching Cricket
                </li> <br />
            </ul>

            <p className="p" style={{ color: "rgb(155 126 172)" }}>
                "Strive to build things that make a difference!" <br /> <b>__{"Mojib"}</b>
            </p>
        </div>
        </div>
        <div className="about-image">
          <img src={laptopImg} alt="about" className="img-fluid" />
        </div>
      </div>
    </section>
    </div>
  );
}

export default About;
