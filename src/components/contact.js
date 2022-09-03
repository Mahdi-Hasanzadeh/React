import React from "react";
import phoneLogo from "../images/icons8-phone-24.png";
import mailLogo from "../images/icons8-mail-24.png";
// import catLogo from "../images/one.svg";

function Contact({ imageSource, name, phone, mail }) {
  // props destruction
  //const {imageSource,name,phone,mail} = props;
  return (
    <div className="contact-card">
      <img src={imageSource} alt="" className="cat-logo" />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={phoneLogo} alt="" className="PMLogo" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={mailLogo} alt="" className="PMLogo" />
        <p>{mail}</p>
      </div>
    </div>
  );
}

export default Contact;
