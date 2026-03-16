import React, { useEffect } from "react";

const CountdownTimer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.logwork.com/widget/countdown.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      console.log("Check");
    };
  }, []);

  return (
    <a
      href="https://logwork.com/countdown-timer"
      className="countdown-timer"
      style={{ overflow: "auto", pointerEvents: "none" }}
      data-timezone="Asia/Kolkata"
      data-textcolor="#ffffff"
      data-date="2026-04-16 09:30"
      data-background="#ffffff"
      data-digitscolor="#8bb314"
      data-unitscolor="#ffffff"
    >
      ICSAPCI
    </a>
  );
};

export default CountdownTimer;
