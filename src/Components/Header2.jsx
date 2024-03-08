import React from "react";
import myImg from "../../Assets2/myAvtar.svg";

function Header2() {
  return (
        <div className="header2">
            <div className="avatar">
                <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                </p>
                <div className="avatar-img">
                    <img src={myImg} alt="avatar" />
                </div>
            </div>

        </div>
  );
}
export default Header2;