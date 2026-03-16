import React from "react";
import "./Deadline.css";

const Deadline = () => {
  return (
    <div className="deadline">


      <h1 data-aos="fade-up">Submission Deadlines</h1>
      <section>
        <div className="Calendar" data-aos="zoom-out-up">
          <span className="span-one"></span>
          <span className="span-two"></span>
          <p>Early bird registration</p>
          <h1>
            31
            <span className="th">st</span> <br />
            Jan 2026
          </h1>
          <span className="span-three"></span>
          <span className="span-four"></span>
        </div>
        <div className="Calendar" data-aos="zoom-out-up">
          <span className="span-one"></span>
          <span className="span-two"></span>
          <p>Abstract submission</p>
          <h1>
            31<span className="th">st</span> <br />
            Mar 2026
          </h1>
          <span className="span-three"></span>
          <span className="span-four"></span>
        </div>
        <div className="Calendar" data-aos="zoom-out-up">
          <span className="span-one"></span>
          <span className="span-two"></span>
          <p>Full paper submission</p>
          <h1>
            7<span className="th">th</span> <br />
            Apr 2026
          </h1>
          <span className="span-three"></span>
          <span className="span-four"></span>
        </div>
        <div className="Calendar" data-aos="zoom-out-up">
          <span className="span-one"></span>
          <span className="span-two"></span>
          <p>Final Registration</p>
          <h1>
            7<span className="th">th</span> <br />
            Apr 2026
          </h1>
          <span className="span-three"></span>
          <span className="span-four"></span>
        </div>
      </section>
      <p></p>
    </div>
  );
};

export default Deadline;
