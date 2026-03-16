import React from "react";
import "./AcademicPartner.css";
import neust from "../../assets/neust-logo.jpg";
import UAHS from "../../assets/University_of_Agricultural_and_Horticultural_Sciences,_Shimoga_logo.jpg";

const AcademicPartner = () => {
  return (
    <section>
      <div
        className="ac-partner"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {/* <h1>Academic Partners</h1>
        <div>
          <div>
            <img src={neust} alt="neust_logo" />
            <p>
              Nueva Ecija University of Science and Technology (NEUST),
              Philippines.
            </p>
          </div>
          <div>
            <img src={UAHS} alt="KSNUAHS_logo" />
            <p>
              Keladi Shivappa Nayaka University of Agricultural and
              Horticultural Sciences (KSNUAHS), India.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AcademicPartner;
