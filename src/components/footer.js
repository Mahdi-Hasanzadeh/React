import React from "react";
import SocialLogo from "../images/social-icons.svg";
function Footer() {
  return (
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
  );
}
export default Footer;
