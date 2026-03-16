import React, { useRef, useState } from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import countries from "./countries";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { toaster } from "evergreen-ui";

const OCMform = () => {
  const OCMRef = useRef();
  const [value, setValue] = useState();

  const HandleOCM = async (e) => {
    e.preventDefault();

    const formData = new FormData(OCMRef.current);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    const formDataToSend = new FormData();
    formData.forEach((value, key) => {
      formDataToSend.append(key, value);
    });

    const requiredFields = [
      "Title",
      "First_Name",
      "Email",
      "Country",
      "Number",
      "Member_Category",
      "Organization",
      "Qualification",
      "Professional_Experience",
      "Industry_Experience",
      "Department",
      "Specialization",
      "h_index",
      "Associated_Cerada",
      "Publication",
      "SCI_Published",
      "Journals",
      "Conference_Info",
      "file",
    ];

    for (const field of requiredFields) {
      const value = formValues[field];

      if (field === "file") {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          toaster.warning("File is required.");
          return;
        }

        if (value instanceof File) {
          if (value.size > 300 * 1024) {
            toaster.warning("File size must be less than 300KB.");
            return;
          }
        } else if (Array.isArray(value)) {
          for (const file of value) {
            if (file.size > 300 * 1024) {
              toaster.warning("Each file size must be less than 300KB.");
              return;
            }
          }
        }
      } else {
        if (!value || value.trim() === "") {
          toaster.warning(`${field.replace(/_/g, " ")} is required.`);
          return;
        }
      }
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}OCM`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.message);
      setValue("");
      OCMRef.current.reset();
      toaster.success(response.data.message);
    } catch (error) {
      console.log(error);
      toaster.danger("Something's wrong");
    }
  };

  return (
    <div className="Qualifications">
      <h1 data-aos="fade-up">
        <span>Roles</span> & <span>Responsibilities</span> for{" "}
        <span>Organizing Committee Member</span>
      </h1>
      <div data-aos="fade-up">
        <p>
          <span>
            <IoCheckmarkDone /> Strategic Guidance:
          </span>
          <span>Offering expert advice to guide CERADA’s direction.</span>
        </p>
        <p>
          <span>
            <IoCheckmarkDone /> Conference Planning:
          </span>
          <span>
            Assisting in the development of conference themes and selection of
            speakers.
          </span>
        </p>
        <p>
          <span>
            <IoCheckmarkDone /> Review and Feedback:
          </span>
          <span>
            Reviewing research submissions and providing constructive feedback.
          </span>
        </p>
        <p>
          <span>
            <IoCheckmarkDone /> Abstract/Full Paper Review:
          </span>
          <span>
            Evaluating submissions and ensuring alignment with the conference
            theme.
          </span>
        </p>
        <p>
          <span>
            <IoCheckmarkDone /> Networking:
          </span>
          <span>
            Facilitating connections with other researchers and professionals.
          </span>
        </p>
        <p>
          <span>
            <IoCheckmarkDone /> Outreach:
          </span>
          <span>
            Promoting CERADA’s initiatives and recruiting new members and
            participants.
          </span>
        </p>
        <p>
          <span>
            <IoCheckmarkDone /> Mentorship:
          </span>
          <span>
            Supporting young researchers and professionals in their academic
            growth.
          </span>
        </p>
        <p>
          <span>
            <IoCheckmarkDone /> Planning and Coordination:
          </span>
          <span>
            Assisting with the overall event organization, including venue
            logistics, agenda setting and speaker arrangements
          </span>
        </p>
        <p>
          <span>
            <IoCheckmarkDone /> Promotion:
          </span>
          <span>
            Engaging in marketing and outreach to attract participants and
            speakers.
          </span>
        </p>
        <p>
          <span>
            <IoCheckmarkDone /> Onsite Management:
          </span>
          <span>
            Facilitating sessions, guiding attendees and managing any technical
            issues during the hybrid event.
          </span>
        </p>
        <p>
          <span>
            <IoCheckmarkDone /> Post-Conference Tasks:
          </span>
          <span>
            Ensuring the publication of proceedings and addressing feedback.
          </span>
        </p>
      </div>
      <h1 data-aos="fade-up">
        <span>Qualifications</span> for <span>Organizing Committee Member</span>
      </h1>
      <div data-aos="fade-up">
        <h1>Qualifications for serving on our organizing committee include</h1>
        <li>Doctorates with over 10 years of professional experience</li>
        <li>Keynote speakers in at least 5 international conferences</li>
        <li>CEOs/Managing Directors/Deans/Principals</li>
        <li>Research Experts</li>
        <p>
          Their responsibilities include selecting the conference venue,
          deciding on institutional and media partners, and identifying
          potential co-hosts. They also have the authority to choose keynote
          speakers, appoint program chairs and determine session topics.
        </p>
      </div>
      <div data-aos="fade-up">
        <h1>Qualifications for serving on our Advisory Committee</h1>
        <li>Dean/Director/Principal with a doctorate</li>
        <li>Professors/HODs with 10+ years of experience</li>
        <li>
          Associate Professors/Assistant Professor/Senior Lecturers with 5+
          years of experience
        </li>
        <li>Industrial Professionals with 8+ years of experience</li>
        <li>Professionals from the host country</li>
        <p>
          The committee works closely with other teams to maintain the event
          schedule, assist with hospitality and registration, and coordinate
          venue setup. They also ensure that the conference environment is
          well-prepared and runs smoothly.
        </p>
      </div>
      <div data-aos="fade-up">
        <h1>Qualifications for serving on our Scientific committee</h1>
        <li>Dean/Director/Principal with a Doctorate</li>
        <li>Should be an Editorial Board Member of a Prestigious Journal</li>
        <li>Must be an experienced Reviewer</li>
        <li>
          Should have served on a review committee for 10+ international
          conferences
        </li>
        <p>
          The Scientific Committee consists of three subcommittees: the Review
          Committee, Technical Committee and Editorial Committee. It plays a key
          role in setting important dates for the upcoming 2025 educational
          conference, managing paper submissions, developing the final program
          and evaluating abstracts for acceptance. The committee's proactive
          involvement ensures that the conference stays aligned with current
          research trends, enabling the presentation of innovative ideas during
          the scientific sessions.
        </p>
      </div>
      <div data-aos="fade-up">
        <h1>Qualifications for serving on our Hospitality committee</h1>
        <li>Dean/Director/Principal with a Doctorate</li>
        <li>Professor/HODs with 10+ years of Experience</li>
        <li>
          Associate Professor/Assistant Professor/Senior Lecturer with 5+ years
          of Experience
        </li>
        <li>Industrial Professionals with 8+ years of Experience</li>
        <li>Professionals from the host country</li>
        <p>
          They provide conference venue details, share the organization’s
          background and address specific participant inquiries. The committee
          works with other teams to maintain an event calendar, which is crucial
          for reserving facilities and keeping members informed about upcoming
          community activities.
        </p>
        <p style={{ marginTop: "0px", paddingTop: "0px" }}>
          Volunteers are allocated with assisting in hospitality, registration,
          venue setup and conference activities on a rotating schedule. Arriving
          early for meetings ensures everything is properly organized, which
          includes arranging the seats and setting up the hospitality table with
          necessary equipment and supplies.
        </p>
      </div>
      <form
        className="qualification-form"
        ref={OCMRef}
        onSubmit={HandleOCM}
        data-aos="fade-up"
      >
        <h1>
          Apply for <span>Organizing Committee Members</span>
        </h1>
        <div class="container-title">
          <label for="title">Title*</label>
          <select id="title" name="Title" defaultValue="" class="input-title">
            <option disabled value="">
              Select Title
            </option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
            <option value="Prof">Prof</option>
          </select>
        </div>

        <div class="container-first-name">
          <label for="first-name">Full Name*</label>
          <input
            type="text"
            id="first-name"
            name="First_Name"
            class="input-first-name"
            placeholder="First Name"
            required
          />
        </div>

        <div class="container-email">
          <label for="email">Email*</label>
          <input
            type="email"
            id="email"
            name="Email"
            class="input-email"
            required
            placeholder="Email"
          />
        </div>

        <div class="container-phone">
          <label for="phone">Whatsapp/Viber Contact Number*</label>
          <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="US"
            name="Number"
            value={value}
            onChange={setValue}
          />
        </div>

        <div class="container-country">
          <label for="country">Country*</label>
          <select
            id="country"
            defaultValue=""
            name="Country"
            class="input-country"
          >
            <option disabled value="">
              Select Country
            </option>
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.emoji} {country.name}
              </option>
            ))}
          </select>
        </div>

        <div class="container-member-category">
          <label for="member-category">Member Category*</label>
          <select
            id="member-category"
            name="Member_Category"
            class="input-member-category"
            defaultValue=""
          >
            <option disabled value="">
              Select Member Category
            </option>
            <option value="Advisory">Advisory</option>
            <option value="Scientific">Scientific</option>
            <option value="Hospitality">Hospitality</option>
          </select>
        </div>

        <div class="container-organization">
          <label for="organization">
            Name of the University/Institute/College/Organization*
          </label>
          <input
            type="text"
            id="organization"
            name="Organization"
            class="input-organization"
            placeholder="Name of the Organization"
            required
          />
        </div>

        <div class="container-department">
          <label for="department">Department*</label>
          <input
            type="text"
            id="department"
            name="Department"
            required
            class="input-department"
            placeholder="Department"
          />
        </div>

        <div class="container-qualification">
          <label for="qualification">Qualification*</label>
          <input
            type="text"
            id="qualification"
            name="Qualification"
            class="input-qualification"
            required
            placeholder="Qualification"
          />
        </div>

        <div class="container-professional-experience">
          <label for="professional-experience">Professional Background*</label>
          <input
            type="text"
            name="Professional_Experience"
            id="professional-experience"
            class="input-professional-experience"
            placeholder="Professional Experience"
            required
          />
        </div>

        <div class="container-industry-experience">
          <label for="industry-experience">Industry Background*</label>
          <input
            type="text"
            id="industry-experience"
            name="Industry_Experience"
            class="input-industry-experience"
            required
            placeholder="Industry Experience"
          />
        </div>

        <div class="container-specialization">
          <label for="specialization">Area of Specialization*</label>
          <input
            type="text"
            id="specialization"
            required
            name="Specialization"
            class="input-specialization"
            placeholder="Specialization"
          />
        </div>

        <div class="container-associated-cerada">
          <label for="associated-cerada">Associated with CERADA*</label>
          <input
            type="text"
            required
            id="associated-cerada"
            name="Associated_Cerada"
            class="input-associated-cerada"
            placeholder="Yes/No"
          />
        </div>

        <div class="container-research-area">
          <label for="research-area">h-index*</label>
          <input
            type="number"
            id="h_index"
            name="h_index"
            class="input-research-area"
            required
            placeholder="h-index"
          />
        </div>

        <div class="container-publications">
          <label for="publications">No. of Scopus Publications*</label>
          <input
            type="text"
            required
            id="publications"
            name="Publication"
            class="input-publications"
            placeholder="No. of Publications"
          />
        </div>

        <div class="container-books-published">
          <label for="books-published">No. of SCI/WoS Publications*</label>
          <input
            type="text"
            id="SCI-published"
            required
            name="SCI_Published"
            class="input-books-published"
            placeholder="Books Published"
          />
        </div>

        <div class="container-journals">
          <label for="journals">Editor/Reviewer in Journals*</label>
          <input
            type="text"
            id="journals"
            required
            name="Journals"
            class="input-journals"
            placeholder="Editor/Reviewer in Journals"
          />
        </div>

        <div class="container-upload-cv">
          <label for="upload-cv">Upload CV* (Docx, Doc, Pdf)</label>
          <input
            type="file"
            name="file"
            id="upload-cv"
            class="input-upload-cv"
            accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            required
          />
          <span className="form-info">Less than 300KB</span>
        </div>

        <div class="container-conference-info">
          <label for="conference-info">
            How did you find out about the event?
          </label>
          <textarea
            id="conference-info"
            required
            class="input-conference-info"
            name="Conference_Info"
          ></textarea>
        </div>
        <div>
          <input className="submit-btn" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default OCMform;
