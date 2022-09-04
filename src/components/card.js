import React from "react";
// import logo1 from "../images/one.svg";
// import logo2 from "../images/two.svg";
import logo3 from "../images/three.svg";
export default function Card(props) {
  var badgeText;
  if (props.openSpots == 0) {
    badgeText = "SOLD OUT";
  } else {
    badgeText = "AVAILABLE";
  }
  return (
    <div className="items">
      <div className="badge">{badgeText}</div>
      <img src={props.imageSource} alt="" className="photos" />
      <p className="info-font">
        *{props.rating} ({props.reviewCount}) {"Country:  " + props.country}
      </p>
      <p className="info-font"> Title: {props.title}</p>
      <p className="info-font">
        <b>from ${props.price} / Person</b>
      </p>
    </div>
  );
}
