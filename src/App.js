import React from "react";
import First from "./components/menu.jsx";
import Navbar from "./components/nav.js";
import Hero from "./components/hero.js";
import Card from "./components/card.js";
import logo1 from "./images/one.svg";
import logo2 from "./images/two.svg";
import logo3 from "./images/three.svg";
import Footer from "./components/footer.js";
// import Contact from "./components/contact.js";

export default function App() {
  return (
    <React.Fragment>
      <First />
      <Hero />
      <div className="card-container">
        <div className="context-items">
          <Card
            imageSource={logo1}
            rating="5.0"
            reviewCount={6}
            country="Afg"
            title="life lesson with Mahdi"
            price={136}
          />
          <Card
            imageSource={logo2}
            rating="3.0"
            reviewCount={6}
            country="IR"
            title="Social Experiment"
            price={99.9}
          />
          <Card
            imageSource={logo3}
            rating="4.5"
            reviewCount={6}
            country="USA"
            title="University"
            price={124.95}
          />
          <Card
            imageSource={logo1}
            rating="5.5"
            reviewCount={6}
            country="Turkish"
            title="Illusion of War"
            price={150}
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
{
  /* <li>
            <img src={logo2} alt="" className="card-items" />
            <sub>5.0* USA</sub>
            <p> life lesson with Mahdi</p>
            <sub>from$136/Person</sub>
          </li>
          <li>
            <img src={logo3} alt="" className="card-items" />
            <sub>5.0* USA</sub>
            <p> life lesson with Mahdi</p>
            <sub>from$136/Person</sub>
          </li> */
}
// export default function App() {
//   return (
//     // <React.Fragment>
//     //   <Contact
//     //     imageSource="./images/icons8-mail-24images.png"
//     //     name="Mr.Hasanzadeh"
//     //     phone="(0098) 902 934 2619"
//     //     mail="mahdi@gmail.com"
//     //   />
//     //   <Contact
//     //     image="/images/cat.jpg"
//     //     name="Mr.Noori"
//     //     phone="(0098) 902 934 2619"
//     //     mail="nawid@gmail.com"
//     //   />
//     //   <Contact
//     //     image="/images/cat.jpg"
//     //     name="Mr.Mohammadi"
//     //     phone="(0098) 902 934 2619"
//     //     mail="jawad@gmail.com"
//     //   />
//     //   <Contact
//     //     image="/images/cat.jpg"
//     //     name="Mr.Mohmand"
//     //     phone="(0098) 902 934 2619"
//     //     mail="sohrab@gmail.com"
//     //   />
//     // </React.Fragment>
//   );
// }
