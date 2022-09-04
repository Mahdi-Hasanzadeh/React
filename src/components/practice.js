import React from "react";
function Practice() {
  var colors = ["Red", "Green", "Blue", "Yellow", "Indigo", "Orange", "Violet"];
  return colors.map(item => {
    return <h3>{item}</h3>;
  });
}
export default Practice;
