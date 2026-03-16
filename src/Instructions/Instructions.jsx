import React from "react";
import "./Instructions.css";
import image from "../assets/guide-back.jpg";

const Instructions = () => {
  return (
    <div className="Instruction">
      <img data-aos="fade-up" src={image} alt="" />
      <section className="Instruction-details">
        <div>
          <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            Registration Instructions
          </h1>
          <p data-aos="flip-up">
            <span>Payment:</span>
            <span>Complete your payment for the conference.</span>
          </p>
          <p data-aos="flip-up">
            <span>Download Registration Form:</span>
            <span>
              After making your payment, download the Registration Form.
            </span>
          </p>
          <p data-aos="flip-up">
            <span>Fill Out the Form:</span>
            <span>Complete all required fields in the Registration Form.</span>
          </p>
          <p data-aos="flip-up">
            <span>Submit Registration:</span>
            <span>
              Email the filled-out Registration Form along with your payment
              information to <span className="span-n">info@icsap.co.in</span>
            </span>
          </p>
          <p data-aos="flip-up">
            Important: Please note that the payee is responsible for all bank
            charges.
          </p>
        </div>
        <div style={{ marginTop: "50px" }}>
          <h1>Registration Guidelines</h1>
          <p data-aos="flip-up">
            <span>Payment Notification:</span>
            <span>
              Registered members must inform us about their payments immediately
              via E-mail.
            </span>
          </p>
          <p data-aos="flip-up">
            <span>Proof of Payment:</span>
            <span>
              After completing registration, every participant is required to
              email a scanned copy of the registration fee receipt or
              transaction proof to us immediately.
            </span>
          </p>
          <p data-aos="flip-up">
            <span>Paper Submission:</span>
            <span>
              No modifications to the paper will be accepted after the final
              submission date.
            </span>
          </p>
          <p data-aos="flip-up">
            <span>Author Limit:</span>
            <span>
              Only one author and one co-author are allowed per registration.
            </span>
          </p>
          <p data-aos="flip-up">
            <span>Late Registration:</span>
            <span>
              If you need to register after the deadlines, please contact the
              coordinator as soon as possible.
            </span>
          </p>
          <p data-aos="flip-up">
            <span>Form Submission:</span>
            <span>
              After making your payment, download the Registration Form, fill it
              out, and email it to us at{" "}
              <span className="span-n">info@icsap.co.in</span> along with your
              payment information.
            </span>
          </p>
          <p data-aos="flip-up">
            Note: The payee is responsible for all bank charges.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Instructions;
