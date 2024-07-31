import React from 'react'
import "./Home.css"
import profile from "./Assets/myAvatar.svg"
import Type from './Type'

const Home = () => {
  return (
    <div>
    <section className='profile' >
        <div className="pic-container">
            <img src={profile} alt='Md Khalid Mojib profile_image' />
        </div>
        <div className='intro'>
            <h1 style={{ paddingBottom: 15, paddingLeft: 50 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave" >
                  👋🏻
                </span>
            </h1>
            <h1 className="heading-name" style={{paddingLeft: 0 }}>
                I'M
                <strong className="main-name"> MD KHALID MOJIB</strong>
            </h1>
            <h1>
            <div className='designation' style={{textAlign: "left" }}>
                <Type />
            </div>
            </h1>
            <div className="btns-container">
              <button className='btns' onClick={() => window.open("https://github.com/mk-mojib/", "_blank")}>
                  GitHub
              </button>
              <button onClick={() => window.open("https://drive.google.com/file/d/1jYVCysdz62ZdRauwIeYATaP-idy5EeKa/view?usp=sharing", "_blank")}>
                  Download CV
              </button>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home
