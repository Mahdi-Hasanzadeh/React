import React from "react";
import photo from "../images/one.svg";
export default function Hero() {
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="logo-container">
          <img src={photo} alt="main-logo" className="main-logo" />
        </div>
        <div className="main-title">
          <h2>Online Experinces</h2>
        </div>
        <div className="main-para">
          <p>
            Join Unique Interactive activities led by one-of-a-kind host-all
            without leaving home
          </p>
        </div>
      </div>
    </div>
  );
}
