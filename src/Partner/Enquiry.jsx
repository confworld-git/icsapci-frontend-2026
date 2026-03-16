import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { toaster } from "evergreen-ui";
import axios from "axios";

const Enquiry = ({ setToggle }) => {
  const [inquiryData, setInquiryData] = useState({
    full_name: "",
    email: "",
    phone: "",
    contact_method: "",
    subject: "",
    message: "",
    referral: "",
    contact_time: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInquiryData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhoneChange = (value) => {
    setInquiryData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };

  const validateForm = () => {
    const {
      full_name,
      email,
      phone,
      contact_method,
      subject,
      message,
      referral,
      contact_time,
    } = inquiryData;

    if (
      !full_name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !contact_method?.trim() ||
      !subject?.trim() ||
      !message?.trim() ||
      !referral?.trim() ||
      !contact_time?.trim()
    ) {
      return false; 
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toaster.warning("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}Enquiry`,
        inquiryData
      );

      if (response) {
        setInquiryData({
          full_name: "",
          email: "",
          phone: "",
          contact_method: "",
          subject: "",
          message: "",
          referral: "",
          contact_time: "",
        });
        setToggle(false);
        toaster.success(response.data.message);
      } else {
        toaster.warning("Server not Responding");
      }
    } catch (error) {
      toaster.danger("Failed to submit enquiry data");
    }
  };

  return (
    <section className="form-enquiry">
      <form onSubmit={handleSubmit}>
        <h1>Enquiry Form</h1>
        <label htmlFor="full-name">Full Name:</label>
        <input
          type="text"
          id="full-name"
          name="full_name"
          value={inquiryData.full_name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={inquiryData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phone" style={{ flexDirection: "row" }}>
          Contact Number: (
          <span style={{ color: "green" }}>Whatsapp or Viber</span>)
        </label>
        <PhoneInput
          name="mobileNumber"
          defaultCountry="US"
          value={inquiryData.phone}
          onChange={handlePhoneChange}
          required
          style={{ marginBottom: "20px" }}
        />

        <label htmlFor="contact-method">Preferred Method of Contact:</label>
        <select
          id="contact-method"
          name="contact_method"
          value={inquiryData.contact_method}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>

        <label htmlFor="subject">Subject of Enquiry:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={inquiryData.subject}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={inquiryData.message}
          onChange={handleInputChange}
          required
        ></textarea>

        <label htmlFor="referral">How did you hear about us?</label>
        <select
          id="referral"
          name="referral"
          value={inquiryData.referral}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="referral">Referral</option>
          <option value="social_media">Social Media</option>
          <option value="online_search">Online Search</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="contact-time">Preferred Contact Time:</label>
        <select
          id="contact-time"
          name="contact_time"
          value={inquiryData.contact_time}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Enquiry;
