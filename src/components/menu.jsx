import React, { Component } from "react";
import ReactLogo from "../images/logo192.png";
import SocialLogo from "../images/social-icons.svg";
export default class First extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="menu-container">
          <div className="menu">
            <div className="logo">
              <img src={ReactLogo} alt="React-logo" className="header-logo" />
            </div>
            <div className="title">
              <h3>React.JS</h3>
            </div>
            <div className="myMenu">
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="context-container">
          <div className="context">
            <div className="context-title">
              <h1>Fun facts about react</h1>
            </div>
            <div className="items">
              <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well Over 100k stars on GitHub</li>
                <li>Is maintained bu Facebook</li>
                <li>
                  Powers thounsands of enterprise app,including mobile apps.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-items">
            <div className="item1">
              <img src={SocialLogo} alt="" className="footer-logo" />
            </div>
            <div className="item2">Hasanzadeh Production</div>
            <div className="item3">
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
