import React from "react";
import pro1 from "../assets/PRO1.png";
import pro2 from "../assets/PRO2.png";

const Proceedings = () => {
  return (
    <div className="proceedings" data-aos-anchor-placement="top-bottom" data-aos="fade-up">
      <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">Proceedings & Publications</h1>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <img src={pro1} alt="" />
        <img src={pro2} alt="" />
      </div>
      <p data-aos="fade-up">
        Note: ICSAPCI-2026 Proceedings will be submitted to the Web of science
        Book citation index (BkCI) and Scopus for evaluation and indexing
        purposes (T&C)* apply.
      </p>
    </div>
  );
};

export default Proceedings;
