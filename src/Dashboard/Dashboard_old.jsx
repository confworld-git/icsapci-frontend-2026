import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Registration");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_LINK}api/data`
        );
        setData(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  useEffect(() => {
    const log = localStorage.getItem("Login-ICSAP");
    if (log === import.meta.env.VITE_LOG_PASS) {
      console.log("Login Successful");
    } else {
      navigate("/Login");
    }
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleDownload = (bufferData, fileType, fileName) => {
    try {
      if (bufferData.type === "Buffer") {
        const byteArray = new Uint8Array(bufferData.data);
        const blob = new Blob([byteArray], { type: fileType });

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error("Invalid buffer data format.");
      }
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  const HandleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("Login-ICSAP");
    navigate("/");
  };

  return (
    <div className="dashboard">
      {/* <h1>Dashboard</h1> */}
      <section>
        <div className="left">
          <p className="" onClick={() => setSelectedCategory("Registration")}>
            Registration
          </p>
          <p onClick={() => setSelectedCategory("Paper Submission")}>
            Paper Submission
          </p>
          <p onClick={() => setSelectedCategory("Committee")}>Committee</p>
          <p onClick={() => setSelectedCategory("Enquiry")}>Enquiry</p>
          <p onClick={() => setSelectedCategory("Contact")}>Contact</p>
          <p onClick={() => setSelectedCategory("Downloads")}>Downloads</p>
          <p onClick={HandleLogout}>Logout</p>
        </div>

        <div className="right">
          <h1>{selectedCategory} Data</h1>
          {selectedCategory === "Contact" && (
            <table className="data-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Message</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {data.contact.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      {item.First_Name} {item.Second_Name}
                    </td>
                    <td>{item.Email}</td>
                    <td>{item.Mobile_Number}</td>
                    <td>{item.Message}</td>
                    <td>{new Date(item.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {selectedCategory === "Downloads" && (
            <table className="data-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Info</th>
                  <th>Link</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {data.downloads.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.Number}</td>
                    <td>{item.Info}</td>
                    <td>
                      <a
                        href={item.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    </td>
                    <td>{new Date(item.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {selectedCategory === "Committee" && (
            <>
              {data.committee.map((item, index) => (
                <table className="data-table" style={{ marginBottom: "20px" }}>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={item._id}>
                      <th>S.No</th>
                      <td>{index + 1}</td>
                    </tr>
                    <tr>
                      <th>Title</th>
                      <td>{item.Title}</td>
                    </tr>
                    <tr>
                      <th>First Name</th>
                      <td>{item.First_Name}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{item.Email}</td>
                    </tr>
                    <tr>
                      <th>Number</th>
                      <td>{item.Number}</td>
                    </tr>
                    <tr>
                      <th>Member Category</th>
                      <td>{item.Member_Category}</td>
                    </tr>
                    <tr>
                      <th>Organization</th>
                      <td>{item.Organization}</td>
                    </tr>
                    <tr>
                      <th>Qualification</th>
                      <td>{item.Qualification}</td>
                    </tr>
                    <tr>
                      <th>Professional Experience</th>
                      <td>{item.Professional_Experience}</td>
                    </tr>
                    <tr>
                      <th>Industry Experience</th>
                      <td>{item.Industry_Experience}</td>
                    </tr>
                    <tr>
                      <th>Department</th>
                      <td>{item.Department}</td>
                    </tr>
                    <tr>
                      <th>Specialization</th>
                      <td>{item.Specialization}</td>
                    </tr>
                    <tr>
                      <th>h-index</th>
                      <td>{item.h_index}</td>
                    </tr>
                    <tr>
                      <th>Country</th>
                      <td>{item.Country}</td>
                    </tr>
                    <tr>
                      <th>Associated Cerada</th>
                      <td>{item.Associated_Cerada}</td>
                    </tr>
                    <tr>
                      <th>Publication</th>
                      <td>{item.Publication}</td>
                    </tr>
                    <tr>
                      <th>SCI Published</th>
                      <td>{item.SCI_Published}</td>
                    </tr>
                    <tr>
                      <th>Journals</th>
                      <td>{item.Journals}</td>
                    </tr>
                    <tr>
                      <th>Conference Info</th>
                      <td>{item.Conference_Info}</td>
                    </tr>
                    <tr>
                      <th>File</th>
                      <td
                        onClick={() =>
                          handleDownload(
                            item.Uploaded_File.buffer,
                            item.Uploaded_File.mimetype,
                            item.Uploaded_File.originalname
                          )
                        }
                      >
                        {item.Uploaded_File.originalname} - Download
                      </td>
                    </tr>
                    <tr>
                      <th>Created At</th>
                      <td>{new Date(item.createdAt).toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </>
          )}

          {selectedCategory === "Enquiry" && (
            <table className="data-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>C Method</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Referral</th>
                  <th>C Time</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {data.enquiries.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.full_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.contact_method}</td>
                    <td>{item.subject}</td>
                    <td>{item.message}</td>
                    <td>{item.referral}</td>
                    <td>{item.contact_time}</td>
                    <td>{new Date(item.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {selectedCategory === "Registration" && (
            <table className="data-table-reg">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Amount</th>
                  <th>Currency</th>
                  <th>Status</th>
                  <th>Title</th>
                  <th>Name</th>
                  <th>Certificate</th>
                  <th>DOB</th>
                  <th>Nationality</th>
                  <th>Department</th>
                  <th>Institution</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Participant Category</th>
                  <th>Presentation Category</th>
                  <th>Presentation Type</th>
                </tr>
              </thead>
              <tbody>
                {data?.registration?.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.amount / 100}</td>
                    <td>{item.currency}</td>
                    <td>{item.status}</td>
                    <td>{item.FormData.Title}</td>
                    <td>
                      {item.FormData.first_name} {item.FormData.last_name}
                    </td>
                    <td>{item.FormData.certificate_name}</td>
                    <td>{new Date(item.FormData.DOB).toLocaleDateString()}</td>
                    <td>{item.FormData.nationality}</td>
                    <td>{item.FormData.department}</td>
                    <td>{item.FormData.institution}</td>
                    <td>{item.FormData.number}</td>
                    <td>{item.FormData.email}</td>
                    <td>{item.FormData.participant_category}</td>
                    <td>{item.FormData.presentation_Category}</td>
                    <td>{item.FormData.presentation_Type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {selectedCategory === "Paper Submission" && (
            <>
              {data?.submissions?.map((item, index) => (
                <table
                  className="data-table"
                  style={{ marginBottom: "20px" }}
                  key={index}
                >
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>S.No</th>
                      <td>{index + 1}</td>
                    </tr>
                    <tr>
                      <th>Submission Type</th>
                      <td>{item.Submission_type}</td>
                    </tr>
                    <tr>
                      <th>Paper Title</th>
                      <td style={{ textWrap: "wrap" }}>{item.paper_title}</td>
                    </tr>
                    <tr>
                      <th>File</th>
                      <td
                        onClick={() =>
                          handleDownload(
                            item.Uploaded_File.buffer,
                            item.Uploaded_File.mimetype,
                            item.Uploaded_File.originalname
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {item.Uploaded_File.originalname} - Download
                      </td>
                    </tr>
                    <tr>
                      <th>Author Name</th>
                      <td>{item.authorName}</td>
                    </tr>
                    <tr>
                      <th>Co-Author Name</th>
                      <td>{item.CoAuthorName}</td>
                    </tr>
                    <tr>
                      <th>Who will present the paper</th>
                      <td>
                        {item.WhoWillPresent ? item.WhoWillPresent : "NA"}
                      </td>
                    </tr>
                    <tr>
                      <th>Corresponding Email</th>
                      <td>{item.correspondingEmail}</td>
                    </tr>
                    <tr>
                      <th>Mobile Number</th>
                      <td>{item.mobileNumber}</td>
                    </tr>
                    <tr>
                      <th>WhatsApp Number</th>
                      <td>{item.whatsappNumber}</td>
                    </tr>
                    <tr>
                      <th>LinkedIn</th>
                      <td>
                        <a
                          href={item.linkedinURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Linkedin
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th>Facebook</th>
                      <td>
                        <a
                          href={item.facebookURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Facebook
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th>Presentation Category</th>
                      <td>{item.presentationCategory}</td>
                    </tr>
                    <tr>
                      <th>Presentation Type</th>
                      <td>{item.presentationType}</td>
                    </tr>
                    <tr>
                      <th>Institution Name</th>
                      <td>{item.Institution_Name}</td>
                    </tr>
                    <tr>
                      <th>Department</th>
                      <td>{item.Department}</td>
                    </tr>
                    <tr>
                      <th>Designation</th>
                      <td>{item.designation}</td>
                    </tr>
                    <tr>
                      <th>Publication Required</th>
                      <td>{item.Publication_Required}</td>
                    </tr>
                    <tr>
                      <th>Conference Source</th>
                      <td>{item.conferenceSource}</td>
                    </tr>
                    <tr>
                      <th>Message</th>
                      <td>{item.message}</td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
