import React from "react";
import First from "./components/menu.jsx";
import Navbar from "./components/nav.js";
import Hero from "./components/hero.js";
import Card from "./components/card.js";
import Footer from "./components/footer.js";
import Practice from "./components/practice";
import tshirt from "./images/tShirt.jfif";
import tshirt2 from "./images/tShirt2.jfif";
import tshirt3 from "./images/tShirt3.jfif";
import tshirt4 from "./images/tShirt4.jfif";
import tshirt5 from "./images/tShirt5.jfif";
import tshirt6 from "./images/tShirt6.jfif";
import tshirt7 from "./images/tShirt7.jfif";
import tshirt8 from "./images/tShirt8.jfif";
// import Contact from "./components/contact.js";
import Data from "./components/data.js";

export default function App() {
  var logos = [tshirt7, tshirt2, tshirt8, tshirt4, tshirt5];
  return (
    <React.Fragment>
      {/* <Practice /> */}
      <First />
      <Hero />
      <div className="card-container">
        <div className="context-items">
          {Data.map(item => {
            return (
              <Card
                key={item.id}
                imageSource={logos[item.imageId]}
                rating={item.rating}
                reviewCount={item.reviewCount}
                country={item.country}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
              />
            );
          })}
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
