import React from "react";
import "./Session.css";
import { useNavigate } from "react-router-dom";

const Session = () => {
  const navigate = useNavigate();
  return (
    <div className="session-tracks">
      <h1 data-aos="fade-up">Session Tracks / Call for Papers </h1>
      <p data-aos="fade-up">
        Our diverse sessions and tracks offer an unparalleled opportunity to
        engage with the global agricultural community, exchange ideas and
        contribute to sustainable practices that are essential for our
        collective future.
      </p>
      <p data-aos="fade-up">
        We invite researchers, academicians and professionals to submit their
        papers. Topics of interest include but are not limited to:
      </p>
      <section className="session" data-aos="fade-up">
        <div className="session-1" onClick={() => navigate("/Call_for_Papers")}>
          <h1>Sustainable Crop Production</h1>
        </div>
        <div className="session-2" onClick={() => navigate("/Call_for_Papers")}>
          <h1>Soil Health and Management</h1>
        </div>
        <div className="session-3" onClick={() => navigate("/Call_for_Papers")}>
          <h1>Water Management in Agriculture</h1>
        </div>
        <div className="session-4" onClick={() => navigate("/Call_for_Papers")}>
          <h1>Agrobiology and Biodiversity</h1>
        </div>
        <div className="session-5" onClick={() => navigate("/Call_for_Papers")}>
          <h1>Precision Agriculture</h1>
        </div>
        <div className="session-6" onClick={() => navigate("/Call_for_Papers")}>
          <h1>Climate-Smart Agriculture</h1>
        </div>
        <div className="session-7" onClick={() => navigate("/Call_for_Papers")}>
          <h1>Sustainable Livestock Management</h1>
        </div>
        <div className="session-8" onClick={() => navigate("/Call_for_Papers")}>
          <h1>Agro-industrial Waste Management</h1>
        </div>
        <div className="session-9" onClick={() => navigate("/Call_for_Papers")}>
          <h1>Sustainable Agro-business Models</h1>
        </div>
        <div
          className="session-10"
          onClick={() => navigate("/Call_for_Papers")}
        >
          <h1>Education and Outreach in Sustainable Agriculture</h1>
        </div>
        <div
          className="session-11"
          onClick={() => navigate("/Call_for_Papers")}
        >
          <h1>Sustainable Fisheries and Aquaculture</h1>
        </div>
        <div
          className="session-12"
          onClick={() => navigate("/Call_for_Papers")}
        >
          <h1>Urban Agriculture</h1>
        </div>
        <div
          className="session-13"
          onClick={() => navigate("/Call_for_Papers")}
        >
          <h1>Agri Business/Agrochemicals and Fertilizers for Future</h1>
        </div>
        <div
          className="session-14"
          onClick={() => navigate("/Call_for_Papers")}
        >
          <h1>Livestock based Sustainable Food system</h1>
        </div>
        <div
          className="session-15"
          onClick={() => navigate("/Call_for_Papers")}
        >
          <h1>Food & National Security</h1>
        </div>
        <div
          className="session-16"
          onClick={() => navigate("/Call_for_Papers")}
        >
          <h1>Climate Change Impact and Natural Disaster</h1>
        </div>
        <div
          className="session-17"
          onClick={() => navigate("/Call_for_Papers")}
        >
          <h1>Adaptation and Mitigation Strategies</h1>
        </div>
        <div
          className="session-18"
          onClick={() => navigate("/Call_for_Papers")}
        >
          <h1>Disaster Risk Management</h1>
        </div>
        <div
          className="session-19"
          onClick={() => navigate("/Call_for_Papers")}
        >
          <h1>Innovative Solutions and Technologies</h1>
        </div>
        <div
          className="session-20"
          onClick={() => navigate("/Call_for_Papers")}
        >
          <h1>Nutrition and Climate Change</h1>
        </div>
      </section>
    </div>
  );
};

export default Session;
