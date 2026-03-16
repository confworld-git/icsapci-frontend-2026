import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoDocumentTextOutline,
  IoCallOutline,
  IoDownloadOutline,
  IoMailOutline,
} from "react-icons/io5";
import { HiLogout } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { FcGallery } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Data from "./Data";

const Dashboard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [previewUrl, setPreviewUrl] = useState(null);

  const [SpeakerData, setSpeakerData] = useState([]);
  const [RegOpen, setRegOpen] = useState(false);
  const [SubOpen, setSubOpen] = useState(false);
  const [MemOpen, setMemOpen] = useState(false);

  useEffect(() => {
    const IsValid = localStorage.getItem("ICSAP_LOGIN");
    if (IsValid === import.meta.env.VITE_NAVIGATION_LINK) {
      console.log("Login Successful");
    } else navigate("/");
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "Image" && files && files[0]) {
      const file = files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));

      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}Speaker/Uploads`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      setFormData({
        Name: "",
        About_1: "",
        About_2: "",
        About_3: "",
        About_4: "",
        Image: null,
        position: 0,
      });
      if (response.data) {
        HandleSpeaker();
      }
      setPreviewUrl(null);
    } catch (error) {
      console.error(error.response.data.errors);
      if (error.response.data.errors) {
        alert("Enter All Required Input Filed");
      }
    }
  };

  useEffect(() => {
    HandleSpeaker();
  }, []);

  const HandleSpeaker = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}Upload/Speakers`
    );
    setSpeakerData(response.data);
  };

  const handleDeleteSpeaker = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_LINK}Speaker/Delete/${id}`
      );
      console.log("Response:", response.data);
      if (response.data) {
        HandleSpeaker();
      }
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div className="dashboard">
      <div className="divide">
        <div className="first-dash">
          <p>Dashboard Menu</p>
          <ul>
            <a href="#Home">
              <IoHomeOutline /> Home
            </a>
            <li onClick={() => setRegOpen(true)}>
              <IoPersonOutline /> Registration
            </li>
            <li onClick={() => setSubOpen(true)}>
              <IoDocumentTextOutline /> Submission
            </li>
            <li onClick={() => setMemOpen(true)}>
              <BsPerson /> Committee Member
            </li>
            <a href="#Contact_Data">
              <IoCallOutline /> Contact
            </a>
            <a href="#Downloads_Data">
              <IoDownloadOutline /> Downloads
            </a>
            <a href="#Coupon_Data">
              <IoDownloadOutline /> Coupon
            </a>
            <a href="#Enquiry_Data">
              <IoMailOutline /> Enquiries
            </a>
            <a href="#Add-Speaker" id="special">
              <MdOutlineRecordVoiceOver /> Add Speaker
            </a>
            <a href="#Add-Ocm" id="special">
              <MdOutlineRecordVoiceOver /> Add-Ocm
            </a>
          </ul>
          <button
            onClick={() => (
              localStorage.removeItem("ICSAP_LOGIN"), navigate("/")
            )}
          >
            Log Out <HiLogout />
          </button>
        </div>

        <div className="second-dash">
          <h1 id="Home">Home</h1>
          <div className="analysis">
            <Data
              RegOpen={RegOpen}
              setRegOpen={setRegOpen}
              SubOpen={SubOpen}
              setSubOpen={setSubOpen}
              MemOpen={MemOpen}
              setMemOpen={setMemOpen}
            />
            <div id="Add-Speaker" className="add-speaker">
              <h1>Add Speakers</h1>
              <div>
                <li>
                  <input
                    type="radio"
                    name="Title"
                    onChange={handleChange}
                    value="Welcome Address"
                    id="speaker-title-1"
                    hidden
                  />
                  <label htmlFor="speaker-title-1">Welcome Address</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="Title"
                    onChange={handleChange}
                    value="Guest of Honour"
                    id="speaker-title-2"
                    hidden
                  />
                  <label htmlFor="speaker-title-2">Guest of Honour</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="Title"
                    onChange={handleChange}
                    value="Conference Chair"
                    id="speaker-title-3"
                    hidden
                  />
                  <label htmlFor="speaker-title-3">Conference Chair</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="Title"
                    onChange={handleChange}
                    value="Keynote Speakers"
                    id="speaker-title-4"
                    hidden
                  />
                  <label htmlFor="speaker-title-4">Keynote Speakers</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="Title"
                    value="Session Speakers"
                    onChange={handleChange}
                    id="speaker-title-5"
                    hidden
                  />
                  <label htmlFor="speaker-title-5">Session Speakers</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="Title"
                    value="Session Chair"
                    onChange={handleChange}
                    id="speaker-title-6"
                    hidden
                  />
                  <label htmlFor="speaker-title-6">Session Chair</label>
                </li>
              </div>
              <section className="speakers-inputs">
                <div>
                  <label htmlFor="speakers-image">
                    {formData.Image && <img src={previewUrl} alt="" />}
                    {!formData.Image && (
                      <>
                        Choose or Drop your Image Here <br /> <FcGallery />
                      </>
                    )}
                  </label>
                  <input
                    type="file"
                    id="speakers-image"
                    hidden
                    accept="image/*"
                    name="Image"
                    onChange={handleChange}
                  />
                  <textarea
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    placeholder="Speaker Name"
                  ></textarea>
                  <textarea
                    type="text"
                    name="About_1"
                    value={formData.About_1}
                    onChange={handleChange}
                    placeholder="Speaker About One"
                  ></textarea>
                  <textarea
                    type="text"
                    name="About_2"
                    value={formData.About_2}
                    onChange={handleChange}
                    placeholder="Speaker About Two"
                  ></textarea>
                  <textarea
                    type="text"
                    value={formData.About_3}
                    name="About_3"
                    onChange={handleChange}
                    placeholder="Speaker About Three"
                  ></textarea>
                  <textarea
                    type="text"
                    rows={1}
                    name="About_4"
                    value={formData.About_4}
                    onChange={handleChange}
                    placeholder="Speaker About Four"
                  ></textarea>
                  <input
                    type="number"
                    name="position"
                    placeholder="Position number"
                    onChange={handleChange}
                    value={formData.position}
                  />
                  <div>
                    <button onClick={handleSubmit}>Add</button>
                  </div>
                </div>
                {SpeakerData.map((speaker, index) => {
                  if (
                    speaker.Title !== "Scientific Committee" &&
                    speaker.Title !== "Review Committee"
                  ) {
                    // const byteArray = new Uint8Array(speaker.Image.data.data);
                    // const blob = new Blob([byteArray], {
                    //   type: speaker.Image.mimetype,
                    // });
                    // const imageUrl = URL.createObjectURL(blob);
                    return (
                      <div key={index} id="image-container">
                        <img
                          loading="lazy"
                          src={`${import.meta.env.VITE_API_LINK}image/${
                            speaker.Image
                          }`}
                          alt={`${speaker.Name}'s image`}
                        />
                        <h1>{speaker.Name}</h1>
                        <p>{speaker.About_1}</p>
                        <p>{speaker.About_2}</p>
                        <p>{speaker.About_3}</p>
                        <p>{speaker.About_4}</p>
                        <p> position : {speaker.position}</p>
                        <button
                          onClick={() => handleDeleteSpeaker(speaker._id)}
                          style={{ backgroundColor: "#FF6B5E" }}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  }
                })}
              </section>
            </div>
            <div id="Add-Ocm" className="add-speaker">
              <h1>Add Organizing Committee Members</h1>
              <div>
                <li>
                  <input
                    type="radio"
                    name="Title"
                    value="Scientific Committee"
                    onChange={handleChange}
                    id="speaker-title-7"
                    hidden
                  />
                  <label htmlFor="speaker-title-7">Scientific Committee</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="Title"
                    value="Review Committee"
                    onChange={handleChange}
                    id="speaker-title-8"
                    hidden
                  />
                  <label htmlFor="speaker-title-8">Review Committee</label>
                </li>
              </div>
              <section className="speakers-inputs">
                <div>
                  <label htmlFor="speakers-image">
                    {formData.Image && <img src={previewUrl} alt="" />}
                    {!formData.Image && (
                      <>
                        Choose or Drop your Image Here <br /> <FcGallery />
                      </>
                    )}
                  </label>
                  <input
                    type="file"
                    id="speakers-image"
                    hidden
                    accept="image/*"
                    name="Image"
                    onChange={handleChange}
                  />
                  <textarea
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    placeholder="Speaker Name"
                  ></textarea>
                  <textarea
                    type="text"
                    name="About_1"
                    value={formData.About_1}
                    onChange={handleChange}
                    placeholder="Speaker About One"
                  ></textarea>
                  <textarea
                    type="text"
                    name="About_2"
                    value={formData.About_2}
                    onChange={handleChange}
                    placeholder="Speaker About Two"
                  ></textarea>
                  <textarea
                    type="text"
                    value={formData.About_3}
                    name="About_3"
                    onChange={handleChange}
                    placeholder="Speaker About Three"
                  ></textarea>
                  <textarea
                    type="text"
                    rows={1}
                    name="About_4"
                    value={formData.About_4}
                    onChange={handleChange}
                    placeholder="Speaker About Four"
                  ></textarea>
                  <input
                    type="number"
                    name="position"
                    placeholder="Position number"
                    onChange={handleChange}
                    value={formData.position}
                  />
                  <div>
                    <button onClick={handleSubmit}>Add</button>
                  </div>
                </div>
                {SpeakerData.map((speaker, index) => {
                  if (
                    speaker.Title === "Scientific Committee" ||
                    speaker.Title === "Review Committee"
                  ) {
                    // const byteArray = new Uint8Array(speaker.Image.data.data);
                    // const blob = new Blob([byteArray], {
                    //   type: speaker.Image.mimetype,
                    // });
                    // const imageUrl = URL.createObjectURL(blob);
                    return (
                      <div key={index} id="image-container">
                        <img
                          loading="lazy"
                          src={`${import.meta.env.VITE_API_LINK}image/${
                            speaker.Image
                          }`}
                          alt={`${speaker.Name}'s image`}
                        />
                        <h1>{speaker.Name}</h1>
                        <p>{speaker.About_1}</p>
                        <p>{speaker.About_2}</p>
                        <p>{speaker.About_3}</p>
                        <p>{speaker.About_4}</p>
                        <p> position : {speaker.position}</p>
                        <button
                          onClick={() => handleDeleteSpeaker(speaker._id)}
                          style={{ backgroundColor: "#FF6B5E" }}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  }
                })}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
