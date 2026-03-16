import React, { useRef, useState } from "react";
import "./Submission.css";
import axios from "axios";
import { toaster } from "evergreen-ui";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Submission = () => {
  const SubmissionRef = useRef();
  const [mobile, setMobile] = useState("");

  const generateSubmissionID = () => {
    const Random = Math.floor(Math.random() * 900) + 100;
    return `ICSAPCI2026_ID_${Random}`;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const maxFileSize =  3 * 1024 * 1024

      const allowedFileTypes = [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedFileTypes.includes(file.type)) {
        toaster.warning(
          "Invalid file type. Please upload a .doc or .docx file."
        );
        event.target.value = "";
        return;
      }

      if (file.size > maxFileSize) {
        toaster.warning(
          "File size exceeds the 300KB limit. Please upload a smaller file."
        );
        event.target.value = "";
        return;
      }
    }
  };

  const HandleSubmission = async (e) => {
    e.preventDefault();
    const newSubmissionID = generateSubmissionID();

    const formData = new FormData(SubmissionRef.current);

    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    formValues["SubmissionID"] = newSubmissionID;
    formValues["mobileNumber"] = mobile;

    const requiredFields = [
      "Submission_type",
      "paper_title",
      "authorName",
      "CoAuthorName",
      "correspondingEmail",
      "whatsappNumber",
      "presentationCategory",
      "presentationType",
      "Institution_Name",
      "Department",
      "designation",
      "Publication_Required",
      "file",
      "conferenceSource",
    ];

    for (const field of requiredFields) {
      const value = formValues[field];

      if (field === "file") {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          toaster.warning("File is required.");
          return;
        }
      } else if (!mobile || mobile.trim() === "") {
        toaster.warning("Mobile number is required.");
        return;
      } else {
        if (!value || value.trim() === "") {
          toaster.warning(`${field.replace(/_/g, " ")} is required.`);
          return;
        }
      }
    }

    const formDataToSend = new FormData();
    formDataToSend.append("SubmissionID", newSubmissionID);
    formDataToSend.append("mobileNumber", mobile);
    formData.forEach((value, key) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}Submission`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      SubmissionRef.current.reset();
      setMobile("");
      toaster.success(response.data.message);
    } catch (error) {
      toaster.danger("Something's wrong");
    }
  };

  return (
    <div className="FORM">
      <form
        className="submission-form"
        ref={SubmissionRef}
        onSubmit={HandleSubmission}
        data-aos="fade-up"
      >
        <h2 className="form-title">Abstract/Full Paper Submission</h2>
        <div className="form-group">
          <label for="submission-type" className="form-label">
            Submission Type:
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="Submission_type"
                value="Abstract"
                className="form-radio"
              />
              Abstract
            </label>
            <label>
              <input
                type="radio"
                name="Submission_type"
                value="Full paper"
                className="form-radio"
              />
              Full paper
            </label>
          </div>
        </div>

        <div className="form-group">
          <label for="paper-title" className="form-label">
            Title of the Paper:
          </label>
          <input
            type="text"
            id="paper-title"
            name="paper_title"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label for="author-name" className="form-label">
            Author Name:
          </label>
          <input
            type="text"
            id="author-name"
            name="authorName"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label for="co-author-names" className="form-label">
            Co-author Names:
          </label>
          <input
            type="text"
            id="co-author-names"
            name="CoAuthorName"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label for="who-will-present" className="form-label">
            Who will present the paper during conference:
          </label>
          <input
            type="text"
            id="who-will-present"
            name="WhoWillPresent"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label for="corresponding-email" className="form-label">
            Corresponding Author Email:
          </label>
          <input
            type="email"
            id="corresponding-email"
            className="form-input"
            name="correspondingEmail"
            required
          />
        </div>

        <div className="form-group">
          <label for="mobile-number" className="form-label">
            Mobile Number (select country):
          </label>
          <PhoneInput
            id="MobileNumber"
            defaultCountry="US"
            value={mobile}
            onChange={setMobile}
          />
        </div>

        <div className="form-group">
          <label for="whatsapp-number" className="form-label">
            WhatsApp/Viber Number (With Country Code):
          </label>
          <input
            type="tel"
            name="whatsappNumber"
            id="whatsapp-number"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label for="linkedin-url" className="form-label">
            LinkedIn URL:
          </label>
          <input
            type="url"
            name="linkedinURL"
            id="linkedin-url"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label for="facebook-url" className="form-label">
            Facebook URL:
          </label>
          <input
            type="url"
            name="facebookURL"
            id="facebook-url"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label for="presentation-type" className="form-label">
            Presentation Category:
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="presentationCategory"
                value="oral"
                className="form-radio"
              />
              Oral
            </label>
            <label>
              <input
                type="radio"
                name="presentationCategory"
                value="poster"
                className="form-radio"
              />
              Poster
            </label>
          </div>
        </div>

        <div className="form-group">
          <label for="presentation-type" className="form-label">
            Presentation Type:
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="presentationType"
                value="Virtual"
                className="form-radio"
              />
              Virtual
            </label>
            <label>
              <input
                type="radio"
                name="presentationType"
                value="Physical"
                className="form-radio"
              />
              Physical
            </label>
          </div>
        </div>

        <div className="form-group">
          <label for="institution-name" className="form-label">
            University/Institution Name:
          </label>
          <input
            type="text"
            id="institution-name"
            name="Institution_Name"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label for="department" className="form-label">
            Department:
          </label>
          <input
            type="text"
            name="Department"
            id="department"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label for="designation" className="form-label">
            Designation:
          </label>
          <input
            type="text"
            name="designation"
            id="designation"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label for="publication-required" className="form-label">
            Publication Required:
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="Publication_Required"
                value="yes"
                className="form-radio"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="Publication_Required"
                value="no"
                className="form-radio"
              />
              No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label for="file-upload" className="form-label">
            File Upload:
          </label>
          <input
            type="file"
            id="file-upload"
            className="form-input"
            accept=".doc,.docx"
            name="file"
            onChange={handleFileChange}
            required
          />
          <small className="file-info">
            Accepted file format: Word (.doc, .docx). File size should be less
            than 3MB.
          </small>
        </div>

        <div className="form-group">
          <label for="conference-source" className="form-label">
            How did you know about the conference?
          </label>
          <input
            type="text"
            name="conferenceSource"
            id="conference-source"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label for="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
          ></textarea>
        </div>

        <button type="submit" className="form-submit">
          Submit Your Paper
        </button>
      </form>
    </div>
  );
};

export default Submission;
