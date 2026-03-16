import React, { useRef, useEffect } from "react";
import Main from "./Main/Main";
import Welcome from "./Welcome/Welcome";
import Theme from "./Theme/Theme";
import Highlights from "./Highlights/Highlights";
import Session from "./Session/Session";
import Deadline from "./Deadline/Deadline";
import Why from "./Why/Why";
import Navbar from "./Navbar";
import LogoMarquee from "./logo-marquee.jsx/Logo-marquee.jsx";
import Footer from "./Footer/Footer.jsx";
import AcademicPartner from "./AcademicPartner/AcademicPartner";
// import WelcomeVideos from "./WelcomeVideos/WelcomeVideos.jsx";

import logoc from "../assets/logo.png";
import lcsap from "../assets/logo-icsap.png";
import neust from "../assets/neust-logo.jpg";
import UAHS from "../assets/University_of_Agricultural_and_Horticultural_Sciences,_Shimoga_logo.jpg";
// import newOne from "../assets/newOne.png";
import scopus from "../assets/newScopus.png";
import mplogo from "../assets/mp.png";
import goal1 from "../assets/SDG/goal1.png";
import goal2 from "../assets/SDG/goal2.png";
import goal3 from "../assets/SDG/goal3.png";
import goal4 from "../assets/SDG/goal12.png";
import goal5 from "../assets/SDG/goal15.png";
import goal6 from "../assets/SDG/goal17.png";
import goal7 from "../assets/SDG/goal16.png";
import goal8 from "../assets/SDG/goal13.png";

import step1 from "../assets/step-one.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import Proceeding from "./Proceedings.jsx";
import Journals from "./Journals.jsx";

const Home = () => {
  const marqueeRef = useRef();

  const handleMouseOver = () => {
    marqueeRef.current.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.current.start();
  };

  return (
    <div>
      <Navbar />
      <Main />
      <div
        className="logos"
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
      >
        <img src={logoc} alt="" />
        {/* <img src={neust} alt="neust-logo" />
        <img src={UAHS} alt="UAHS" /> */}
        {/* <img src={lcsap} alt="" /> */}
        <img src={scopus} alt="" />
        {/* <img src={mplogo} alt="" /> */}
        <img src={goal1} id="SDGs" alt="" />
        <img src={goal2} id="SDGs" alt="" />
        <img src={goal3} id="SDGs" alt="" />
        <img src={goal4} id="SDGs" alt="" />
        <img src={goal8} id="SDGs" alt="" />
        <img src={goal5} id="SDGs" alt="" />
        <img src={goal7} id="SDGs" alt="" />
        <img src={goal6} id="SDGs" alt="" />
        <p>#CERADA Support SDGs</p>
      </div>
      <LogoMarquee />
      <AcademicPartner />
      <Welcome />
      {/* <WelcomeVideos /> */}
      <Theme />
      <Highlights />
      <Session />
      <Deadline />
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "40px",
          color: "#6a8d00",
        }}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        Registration Steps
      </h1>
      <section className="Registration_steps" data-aos="zoom-in-up">
        <div>
          <div>
            <span>01 Step</span>
            <img src={step1} alt="" />
            <p>
              Choose Your Preferred
              <br />
              Admittance Category
            </p>
          </div>
          <div>
            <span>02 Step</span>
            <img src={step2} alt="" />
            <p>
              Enter your
              <br />
              details in the form.
            </p>
          </div>
          <div>
            <span>03 Step</span>
            <img src={step3} alt="" />
            <p>
              Proceed to
              <br />
              Payment Gateway
            </p>
          </div>
          <div>
            <span>04 Step</span>
            <img src={step4} alt="" />
            <p>Get an official conference invitation letter.</p>
          </div>
        </div>
      </section>
      <Why />
      <p className="note">
        <marquee
          ref={marqueeRef}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Note: ICSAPCI-2026 Proceedings will be submitted to the Web of science
          Book citation index (BkCI) and Scopus for evaluation and indexing
          purposes (T&C)* apply.
        </marquee>
      </p>
      <Proceeding />
      <Journals/>
      <Footer />
    </div>
  );
};

export default Home;
