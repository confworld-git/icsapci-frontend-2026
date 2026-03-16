import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdTrendingUp } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineAppRegistration } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { BsQuestionLg } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";
import { TbBookDownload } from "react-icons/tb";
import CouponManagement from "./CouponManagement";
import * as XLSX from "xlsx";
import { toaster } from "evergreen-ui";

const Data = ({
  RegOpen,
  setRegOpen,
  SubOpen,
  setSubOpen,
  MemOpen,
  setMemOpen,
}) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [registrationCount, setRegistrationCount] = useState([]);
  const [submissionCount, setSubmissionCount] = useState([]);
  const [downloadCount, setDownloadCount] = useState([]);
  const [enquiryCount, setEnquiryCount] = useState([]);
  const [contactCount, setContactCount] = useState([]);
  const [memberCount, setMemberCount] = useState([]);

  const handleAllData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_LINK}Dashboard/Data/All`
      );
      const fetchedData = response.data;
      setTotalAmount(fetchedData.totalFee || 0);
      setRegistrationCount(fetchedData.registrationData);
      setSubmissionCount(fetchedData.paperSubmissionData);
      setDownloadCount(fetchedData.downloadData);
      setEnquiryCount(fetchedData.enquiryData);
      setContactCount(fetchedData.contactData);
      setMemberCount(fetchedData.memberData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleAllData();
  }, []);

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

  const HandleExcelDownload = (data, name) => {
    if (!data || data.length === 0) {
      toaster.warning("No data available to download.");
      return;
    }
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, `${name}.xlsx`);
  };

  return (
    <>
      <div>
        <div>
          <i>
            <IoMdTrendingUp />
          </i>
          <p>Total Amount</p>
        </div>
        <div
          style={{
            flexDirection: "column",
            alignItems: "start",
            gap: "5px",
          }}
        >
          <h1>${totalAmount}</h1>
          <span>
            <FaIndianRupeeSign /> {Math.round(totalAmount * 84.38)} Rupees
          </span>
          <div
            className="progress"
            style={{
              "--gradient-percentage": `${Math.round(totalAmount / 100)}%`,
            }}
          >
            <p>{Math.round(totalAmount / 100)}%</p>
          </div>
        </div>
      </div>
      <div onClick={() => setRegOpen(true)}>
        <div>
          <i style={{ backgroundColor: "#FF7782" }}>
            <MdOutlineAppRegistration />
          </i>
          <p>Total Registration</p>
        </div>
        <div
          style={{
            flexDirection: "column",
            alignItems: "start",
            gap: "5px",
          }}
        >
          <h1>#{registrationCount.length}</h1>
          <span>From Till Date</span>
          <div
            className="download-excel"
            onClick={() =>
              HandleExcelDownload(registrationCount, "ICSAP Registration Data")
            }
          >
            <abbr title="Download Excel File">
              <TbBookDownload />
            </abbr>
          </div>
        </div>
      </div>
      <div onClick={() => setSubOpen(true)}>
        <div>
          <i style={{ backgroundColor: "#CDD951" }}>
            <RiFilePaper2Line />
          </i>
          <p>Total Submission</p>
        </div>
        <div
          style={{
            flexDirection: "column",
            alignItems: "start",
            gap: "5px",
          }}
        >
          <h1>#{submissionCount.length}</h1>
          <span>From Till Date</span>
          <div
            className="download-excel"
            onClick={() =>
              HandleExcelDownload(submissionCount, "ICSAP Submission Data")
            }
          >
            <abbr title="Download Excel File">
              <TbBookDownload />
            </abbr>
          </div>
        </div>
      </div>
      <div onClick={() => setMemOpen(true)}>
        <div>
          <i style={{ backgroundColor: "#9B73FF" }}>
            <MdPersonAdd />
          </i>
          <p>Total Member</p>
        </div>
        <div
          style={{
            flexDirection: "column",
            alignItems: "start",
            gap: "5px",
          }}
        >
          <h1>#{memberCount?.length}</h1>
          <span>From Till Date</span>
          <div
            className="download-excel"
            onClick={() =>
              HandleExcelDownload(memberCount, "ICSAP Member Data")
            }
          >
            <abbr title="Download Excel File">
              <TbBookDownload />
            </abbr>
          </div>
        </div>
      </div>
      <div>
        <div>
          <i style={{ backgroundColor: "#0CACEB" }}>
            <HiDownload />
          </i>
          <p>Total Downloads</p>
        </div>
        <div
          style={{
            flexDirection: "column",
            alignItems: "start",
            gap: "5px",
          }}
        >
          <h1>#{downloadCount.length}</h1>
          <span>From Till Date</span>
          <div
            className="download-excel"
            onClick={() =>
              HandleExcelDownload(downloadCount, "ICSAP Download Data")
            }
          >
            <abbr title="Download Excel File">
              <TbBookDownload />
            </abbr>
          </div>
        </div>
      </div>
      <div>
        <div>
          <i style={{ backgroundColor: "#7380EC" }}>
            <BsQuestionLg />
          </i>
          <p>Total Enquiries</p>
        </div>
        <div
          style={{
            flexDirection: "column",
            alignItems: "start",
            gap: "5px",
          }}
        >
          <h1>#{enquiryCount.length}</h1>
          <span>From Till Date</span>
          <div
            className="download-excel"
            onClick={() =>
              HandleExcelDownload(enquiryCount, "ICSAP Enquiry Data")
            }
          >
            <abbr title="Download Excel File">
              <TbBookDownload />
            </abbr>
          </div>
        </div>
      </div>
      <div>
        <div>
          <i style={{ backgroundColor: "#BA198B" }}>
            <MdCall />
          </i>
          <p>Total Contact</p>
        </div>
        <div
          style={{
            flexDirection: "column",
            alignItems: "start",
            gap: "5px",
          }}
        >
          <h1>#{contactCount.length}</h1>
          <span>From Till Date</span>
          <div
            className="download-excel"
            onClick={() =>
              HandleExcelDownload(contactCount, "ICSAP Contact Data")
            }
          >
            <abbr title="Download Excel File">
              <TbBookDownload />
            </abbr>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "transparent", boxShadow: "none" }}></div>
      <div style={{ backgroundColor: "transparent", boxShadow: "none" }}></div>

      <dialog open={RegOpen} id="add-speaker" className="table-container">
        <div>
          <i onClick={() => setRegOpen(false)}>
            <HiMiniXMark />
          </i>
          <h1>Registration Data</h1>
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Certificate Name</th>
                <th>Date of Birth</th>
                <th>Nationality</th>
                <th>Department</th>
                <th>Institution</th>
                <th>Presentation Category</th>
                <th>Presentation Type</th>
                <th>Participant Category</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Email</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {registrationCount.map((entry) => (
                <tr key={entry._id}>
                  <td>{entry.FormData.Title}</td>
                  <td>{entry.FormData.first_name}</td>
                  <td>{entry.FormData.last_name}</td>
                  <td>{entry.FormData.certificate_name}</td>
                  <td>{new Date(entry.FormData.DOB).toLocaleDateString()}</td>
                  <td>{entry.FormData.nationality}</td>
                  <td>{entry.FormData.department}</td>
                  <td>{entry.FormData.institution}</td>
                  <td>{entry.FormData.presentation_Category}</td>
                  <td>{entry.FormData.presentation_Type}</td>
                  <td>{entry.FormData.participant_category}</td>
                  <td>{entry.status}</td>
                  <td>{entry.amount}</td>
                  <td>{entry.FormData.email}</td>
                  <td>{entry.FormData.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </dialog>

      <dialog open={SubOpen} className="table-container">
        <div>
          <i onClick={() => setSubOpen(false)}>
            <HiMiniXMark />
          </i>
          <h1>Paper Submissions Data</h1>
          <table className="data-table">
            <thead>
              <tr>
                <th>Submission Type</th>
                <th>Submission ID</th>
                <th>Paper Title</th>
                <th>Author Name</th>
                <th>Co-Author Name</th>
                <th>Who will present the paper</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>WhatsApp Number</th>
                <th>Presentation Category</th>
                <th>Presentation Type</th>
                <th>Institution Name</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Publication Required</th>
                <th>File</th>
              </tr>
            </thead>
            <tbody>
              {submissionCount.map((submission) => (
                <tr key={submission._id}>
                  <td>{submission.Submission_type}</td>
                  <td>{submission.SubmissionID}</td>
                  <td>{submission.paper_title}</td>
                  <td>{submission.authorName}</td>
                  <td>{submission.CoAuthorName}</td>
                  <td>
                    {submission.WhoWillPresent
                      ? submission.WhoWillPresent
                      : "NA"}
                  </td>
                  <td>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${submission.correspondingEmail}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Email
                    </a>
                  </td>
                  <td>{submission.mobileNumber}</td>
                  <td>{submission.whatsappNumber}</td>
                  <td>{submission.presentationCategory}</td>
                  <td>{submission.presentationType}</td>
                  <td>{submission.Institution_Name}</td>
                  <td>{submission.Department}</td>
                  <td>{submission.designation}</td>
                  <td>{submission.Publication_Required ? "Yes" : "No"}</td>
                  <td
                    onClick={() =>
                      handleDownload(
                        submission.Uploaded_File.buffer,
                        submission.Uploaded_File.mimetype,
                        submission.Uploaded_File.originalname
                      )
                    }
                    style={{ color: "green", cursor: "pointer" }}
                  >
                    Download
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </dialog>

      <dialog open={MemOpen} id="add-speaker" className="table-container">
        <div>
          <i onClick={() => setMemOpen(false)}>
            <HiMiniXMark />
          </i>
          <h1>Committee Member Data</h1>
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Contact Number</th>
                <th>Member Category</th>
                <th>Organization</th>
                <th>Qualification</th>
                <th>Professional Experience</th>
                <th>Department</th>
                <th>Specialization</th>
                <th>h-index</th>
                <th>Associated Cerada</th>
                <th>Publications</th>
                <th>SCI Published</th>
                <th>Journals</th>
                <th>Resume</th>
              </tr>
            </thead>
            <tbody>
              {memberCount?.map((entry) => (
                <tr key={entry._id}>
                  <td>{entry.Title}</td>
                  <td>{entry.First_Name}</td>
                  <td>{entry.Email}</td>
                  <td>{entry.Country}</td>
                  <td>{entry.Number}</td>
                  <td>{entry.Member_Category}</td>
                  <td>{entry.Organization}</td>
                  <td>{entry.Qualification}</td>
                  <td>{entry.Professional_Experience}</td>
                  <td>{entry.Department}</td>
                  <td>{entry.Specialization}</td>
                  <td>{entry.h_index}</td>
                  <td>{entry.Associated_Cerada}</td>
                  <td>{entry.Publication}</td>
                  <td>{entry.SCI_Published}</td>
                  <td>{entry.Journals}</td>
                  <td
                    onClick={() =>
                      handleDownload(
                        submission.Uploaded_File.buffer,
                        submission.Uploaded_File.mimetype,
                        submission.Uploaded_File.originalname
                      )
                    }
                    style={{ color: "green", cursor: "pointer" }}
                  >
                    Download
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </dialog>

      {contactCount.length > 0 ? (
        <div id="Contact_Data">
          <h3>Contact Data</h3>
          <table className="data-table Normal">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Message</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {contactCount.map((contact) => (
                <tr key={contact._id} id="medium">
                  <td>{contact.First_Name}</td>
                  <td>{contact.Last_Name}</td>
                  <td>{contact.Email}</td>
                  <td>{contact.Contact_Number}</td>
                  <td>{contact.Message}</td>
                  <td>{new Date(contact.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}

      {downloadCount.length > 0 ? (
        <div id="Downloads_Data">
          <h3>Brochure Download Data</h3>
          <table className="data-table Normal">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>LinkedIn</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {downloadCount.map((person) => {
                return (
                  <tr key={person._id} id="medium">
                    <td>{person.Name}</td>
                    <td>{person.Email}</td>
                    <td>{person.Number}</td>
                    <td>
                      <a
                        href={person.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn Profile
                      </a>
                    </td>
                    <td>{person.Info}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}

      <div id="Coupon_Data">
          <CouponManagement/>
        </div>

      {enquiryCount.length > 0 ? (
        <div id="Enquiry_Data">
          <h3>Enquiry Data</h3>
          <table className="data-table Normal">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Preferred Contact Time</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Help Description</th>
              </tr>
            </thead>
            <tbody>
              {enquiryCount.map((inquiry) => (
                <tr key={inquiry._id} id="medium">
                  <td>{inquiry.full_name}</td>
                  <td>{inquiry.email}</td>
                  <td>{inquiry.phone}</td>
                  <td>{inquiry.contact_time}</td>
                  <td>{inquiry.subject}</td>
                  <td>{inquiry.message}</td>
                  <td>{inquiry.Help_Description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Data;
