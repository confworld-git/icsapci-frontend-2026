import React from "react";
import "./Venue.css";
import { FaRegCircleCheck } from "react-icons/fa6";

import place3 from "../assets/jakarta/jk1.jpg";
import place4 from "../assets/jakarta/jk2.jpg";
import place1 from "../assets/jakarta/jk3.jpg";
import place2 from "../assets/jakarta/jk4.jpg";
import place5 from "../assets/jakarta/jk5.jpg";
import place8 from "../assets/jakarta/jk6.jpg";
import place6 from "../assets/jakarta/jk7.jpg";
import place7 from "../assets/jakarta/jk8.jpg";
import place9 from "../assets/jakarta/jk9.jpg";
// import place10 from "../assets/manali/place10.png";

const Venue = () => {
  const ImageGallery = [
    { src: place1, name: "Rizal Park" },
    { src: place2, name: "Bonifacio Global City" },
    { src: place3, name: "Greenbelt Chapel" },
    { src: place4, name: "Casa Manila Museum" },
    { src: place5, name: "Intramuros" },
    { src: place6, name: "National Museum of the Philippines" },
    { src: place7, name: "Glass Tunnel at Manila Ocean Park" },
    { src: place8, name: "Binondo" },
    { src: place9, name: "Manila Cathedral" },
    // { src: place10, name: "Fort Santiago" },
  ];

  return (
    <div className="venue">
      <h1 data-aos="fade-up">Conference Venue</h1>
      <p data-aos="fade-up">
         Jakarta, Indonesia
      </p>
      <h2 data-aos="fade-up">
        Iconic Spots to Explore in{" "}
        <span style={{ color: "#007C3C" }}>Jakarta, Indonesia</span>
      </h2>
      <section data-aos="fade-up">
        {ImageGallery.map((images, index) => {
          return (
            <div key={index} className="venue-list">
              {/* <p>
                <i>
                  <FaRegCircleCheck />
                </i>
                {images.name}
              </p> */}
              <img src={images.src} alt={images.name} />
            </div>
          );
        })}
      </section>
      <div className="visa" data-aos="fade-up">
        <div>
          <h1>VISA Information</h1>
          <p>
            Confworld Educational Research and Development Association (CERADA)
            will not directly contact embassies and consulates on behalf of visa
            applicants. All delegates or invitees should apply for a Business
            Visa only.
          </p>
          <p>
            Visa issues, including the inability to obtain a visa, do not fall
            under the consideration of the cancellation policy of the Confworld
            Educational Research and Development Association (CERADA).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Venue;
