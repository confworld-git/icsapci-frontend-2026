import React, { useEffect } from "react";
import reg from "../../assets/register.png";
import partner from "../../assets/partner.png";
import mail from "../../assets/mail.png";
import call from "../../assets/call.png";
import "./Middle.css";
import { useNavigate } from "react-router-dom";
import trans from "../../assets/trans.png";

const Middle = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="https://translate.google.com/translate_a/element.js"]'
      )
    ) {
      const addScript = document.createElement("script");
      addScript.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    }

    window.googleTranslateElementInit = () => {
      if (
        !document.getElementById("google_translate_element").hasChildNodes()
      ) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element"
        );
      }
    };
  }, []);
  return (
    <ul id="middle-nav-bar">
      <div className="trans_icons">
        <img src={trans} alt="" />
        <div data-aos="fade-down" id="google_translate_element"></div>
      </div>
      <a href="/Registration">
        <img src={reg} alt="" />
        Register Now
      </a>
      <a href="mailto:info@icsap.co.in">
        <img src={mail} alt="" />
        info@icsap.co.in
      </a>
      <a href="https://wa.me/918072381719">
        <img src={call} alt="" />
        +91 8072381719
      </a>
      <a href="/Contact_Us">
        <img src={partner} alt="" />
        Apply for Academic Partner
      </a>
    </ul>
  );
};

export default Middle;
