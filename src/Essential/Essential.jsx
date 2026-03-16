import React, { useState, useEffect } from "react";
import "./Essential.css";
import Download from "./Download";
import { TbCloudDownload } from "react-icons/tb";
import DownloadForm from "./Downloadform";

const Essential = () => {
  const [IsClick, setIsClick] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timeoutId = setTimeout(() => {
      document.body.classList.toggle("no-scroll", IsClick);
    }, 0);

    return () => {
      document.body.classList.remove("no-scroll");
      clearTimeout(timeoutId);
    };
  }, [IsClick]);

  return (
    <>
      {IsClick && <DownloadForm setIsClick={setIsClick} />}
      <p className="dow" data-aos="fade-down">
        Essential <span style={{ color: "white" }}>Downloads</span>
        <TbCloudDownload style={{ color: "white" }} />
      </p>
      <div className="Essential-downloads">
        <div data-aos="flip-up" data-aos-anchor-placement="top-bottom">
          <p>Conference Poster</p>
          <Download link={"./ICSAPCI poster.jpg"} download={"ICSAPCI poster New.jpg"} />
        </div>
        <div data-aos="flip-up" data-aos-anchor-placement="top-bottom">
          <p>Conference Brochure</p>
          <span onClick={() => setIsClick(true)}>
            <Download />
          </span>
        </div>
        <div data-aos="flip-up" data-aos-anchor-placement="top-bottom">
          <p>Abstract Template</p>
          <Download
            link={"./Abstract Template.docx"}
            download={"Abstract Template.docx"}
          />
        </div>
        <div data-aos="flip-up" data-aos-anchor-placement="top-bottom">
          <p>Full Paper Template</p>
          <Download
            link={"./Full paper Template.doc"}
            download={"Full paper Template.doc"}
          />
        </div>
        <div data-aos="flip-up" data-aos-anchor-placement="top-bottom">
          <p>Presentation Template</p>
          <Download
            link={"./ICSAPCI-PPT-Model.pptx"}
            download={"ICSAPCI-PPT-Model"}
          />
        </div>
        <div data-aos="flip-up" data-aos-anchor-placement="top-bottom">
          <p>Registration Form</p>
          <Download
            link={"./Registration form.pdf"}
            download={"Registration Form.pdf"}
          />
        </div>
      </div>
    </>
  );
};

export default Essential;
