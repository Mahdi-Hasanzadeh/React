import React from "react";
import logo from "../images/social-icons.svg";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="nav-logo" />
    </div>
  );
}
