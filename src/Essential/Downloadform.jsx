import React, { useState } from "react";
import Download from "./Download";
import { HiMiniXMark } from "react-icons/hi2";
import axios from "axios";
import { toaster } from "evergreen-ui";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const DownloadForm = ({ setIsClick }) => {
  const [DownloadForm, setDownloadForm] = useState({
    Name: "",
    Email: "",
    Number: "",
    Link: "",
    Info: ""
  });

  const HandleDownload = (e) => {
    const { name, value } = e.target;
    setDownloadForm((prv) => ({ ...prv, [name]: value }));
  };

  const hamdledowNumber = (e) => {
    setDownloadForm((prv) => ({ ...prv, Number: e }));
  };

  const handlesubmitDownload = async (e) => {
    e.preventDefault();

    const { Name, Email, Number, Link, Info } = DownloadForm;
    
    // Check if ONLY required fields are filled (Name, Email, Number)
    if (
      !Name?.trim() ||
      !Email?.trim() ||
      !Number?.trim()
    ) {
      toaster.warning("Please fill in all required fields (Name, Email, Phone Number).");
      return;
    }

    // Prepare data - only include fields that have values
    const formData = {
      Name: Name.trim(),
      Email: Email.trim(),
      Number: Number.trim(),
    };

    // Only add Link and Info if they have values
    if (Link?.trim()) {
      formData.Link = Link.trim();
    }
    if (Info?.trim()) {
      formData.Info = Info.trim();
    }

    console.log("Sending data:", formData); // Debug log

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}Download`,
        formData
      );

      // Check if response is successful
      if (response.status === 200 || response.status === 201) {
        // Create and trigger download
        const link = document.createElement("a");
        link.href = "./ICSAPCI-2026 Brochure.pdf";
        link.download = "ICSAPCI-2026 Brochure.pdf";
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Reset form
        setDownloadForm({
          Name: "",
          Email: "",
          Number: "",
          Link: "",
          Info: "",
        });
        
        // Show success message
        toaster.success(response.data?.message || "Download started successfully!");
        
        // Close the form
        setIsClick(false);
      }
    } catch (error) {
      console.error("Error sending data:", error);
      toaster.danger("Something's wrong. Please try again.");
    }
  };

  return (
    <div className="download-form-overlay">
      <div className="download-form-container">
        <div className="download-form-header">
          <h2>Download ICSAPCI Brochure</h2>
          <HiMiniXMark 
            className="close-icon" 
            onClick={() => setIsClick(false)} 
          />
        </div>
        
        <form onSubmit={handlesubmitDownload}>
          <div className="form-group">
            <label htmlFor="Name">Name *</label>
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Enter your name"
              value={DownloadForm.Name}
              onChange={HandleDownload}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="Email">Email *</label>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Enter your email"
              value={DownloadForm.Email}
              onChange={HandleDownload}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="Number">Phone Number *</label>
            <PhoneInput
              placeholder="Enter phone number"
              value={DownloadForm.Number}
              onChange={hamdledowNumber}
              defaultCountry="US"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="Link">Link *</label>
            <input
              type="url"
              id="Link"
              name="Link"
              placeholder="Social media link"
              value={DownloadForm.Link}
              onChange={HandleDownload}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="Info">Additional Info *</label>
            <textarea
              id="Info"
              name="Info"
              placeholder="How did you hear about us?"
              value={DownloadForm.Info}
              onChange={HandleDownload}
              rows="4"
            />
          </div>
          
          <button type="submit" className="download-submit-btn">
            Download Brochure
          </button>
        </form>
      </div>
    </div>
  );
};

export default DownloadForm;