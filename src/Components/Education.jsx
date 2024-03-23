import React from 'react';
import "./Education.css"
import table from "./Assets/menwithtable.png"

const Education = () => {
  return (
    <div>
    <section className="education">
        <div className="education-items">
          <h2>Education</h2>
          <div className="education-item">
            <h3>B-Tech in Computer Science</h3>
            <p>Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal - MP.</p>
            <p>Year: 2021 - 2024</p>
            <p>CGPA: 7.56</p>
          </div>
          <div className="education-item">
            <h3>Diploma in Computer Science & Engineering</h3>
            <p>Maulana Azad National Urdu University, Gachibowli - Hyd.</p>
            <p>Year: 2018 - 2021</p>
            <p>CGPA: 8.7</p>
          </div>
          <div className="education-item ten">
            <h3>10th Class</h3>
            <p>Bihar School Examination Board, Darbhanga - Bihar</p>
            <p>Year: 2017 - 2018</p>
            <p>Percentage: 54%</p>
          </div>
        </div>
        <div className="laptop-table">
            <img src={table} alt='men study on table' />
        </div>
    </section>
    </div>
  );
};

export default Education;