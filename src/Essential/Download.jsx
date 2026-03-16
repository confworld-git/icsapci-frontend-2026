import React, { useState } from "react";
import "./Essential.css";

const Download = ({ link, download }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    if ((link, download)) {
      setIsChecked(event.target.checked);
      console.log("click");
      if (event.target.checked) {
        const anchor = document.createElement("a");
        anchor.href = link;
        anchor.download = download;
        anchor.click();
      }
    } else {
      return null;
    }
  };

  return (
    <div className="container">
      <label className="label">
        <input
          type="checkbox"
          className="input"
          hidden
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="circle">
          <svg
            className="icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            ></path>
          </svg>
          <div className="square"></div>
        </span>
        <p className="title">Download</p>
        <p className="title">Open</p>
      </label>
    </div>
  );
};

export default Download;
