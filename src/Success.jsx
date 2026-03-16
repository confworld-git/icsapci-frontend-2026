// src/components/PaymentSuccess.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="payment-success-container">
      <div className="svg-background"></div>

      <div
        className="payment-success-content"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <FaCheckCircle className="success-icon" />

        <h1 data-aos="zoom-in" data-aos-delay="400">
          Payment Successful!
        </h1>
        <p data-aos="fade-up" data-aos-delay="600">
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>

        <button
          className="go-back-btn"
          onClick={handleGoBack}
          data-aos="zoom-in-up"
          data-aos-delay="800"
          data-aos-anchor-placement="top-bottom"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
