import React, { useEffect } from "react";
import $ from "jquery";
import "jquery.ripples";
import "./Main.css";
import { useNavigate } from "react-router-dom";
import flower from "../../assets/new.jpeg";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineShareLocation } from "react-icons/md";
import CountdownTimer from "../CountdownTimer";
import icsap_highlights from "../../assets/video/ICSAPCI_Highlights_1.mp4";

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      $(".full-landing-image").ripples({
        resolution: 400,
        perturbance: 0.02,
        crossOrigin: "",
      });
    } else {
      if ($(".full-landing-image").data("ripples")) {
        $(".full-landing-image").ripples("destroy");
      }
    }
  }, []);

  return (
    <section className="main">
      {/* <div className="water-ripple">
        <div
          className="full-landing-image"
          style={{
            width: "100%",
            height: "105vh",
            background: `url(${flower}) no-repeat center`,
            backgroundSize: "cover",
          }}
        />
      </div> */}
      <video autoPlay muted loop data-aos="zoom-in-up">
        <source src={icsap_highlights} />
      </video>
      <div className="main-box">
        <div className=" main-left">
          <h1>
            '2<sup>nd</sup> International Conference on Sustainable Agriculture
            Practices and Climate Change Impacts (ICSAPCI - 2026)'
          </h1>
          <h3>
            Theme : "Innovative Approaches to Mitigate Climate Change through
            Sustainable Agriculture"
          </h3>
          <p>Hybrid conference (In person + Virtual)</p>
          <p>
            Organized by: Confworld Educational Research and Development
            Association
          </p>
          <p>ISBN: 978-28-393549-2-9</p>
          <div className="btns">
            <button onClick={() => navigate("/Submission_form")}>
              <IoCalendarOutline className="btn-icon" />
              16-17 Apr, 2026
            </button>
            <button onClick={() => navigate("/Venue")}>
              <MdOutlineShareLocation className="btn-icon" />
              <span>Conference Venue:</span> Jakarta, Indonesia.
            </button>
          </div>
          <div className="countdown">
            <CountdownTimer />
          </div>
        </div>
        <div className="right-main">
          <div className="main-right">
            <video autoPlay muted loop data-aos="zoom-in-up">
              <source src={icsap_highlights} />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
