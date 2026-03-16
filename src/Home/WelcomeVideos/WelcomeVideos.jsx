import React from "react";
import "./WelcomeVideos.css";
import video from "../../assets/video/video_1.mp4";
import Dr_Rhodora_R_Jugo from "../../assets/video/Dr_Rhodora_R_Jugo.mp4";

const WelcomeVideos = () => {
  return (
    <>
      <h2 className="wel-video-tittle">Welcome Message Video</h2>
      <div className="wel-video-container">
        <div className="wel-video">
          <div className="video-list">
            <div>
              <video src={video} controls></video>
              <h3>Dr. R.C. Jagadeesha</h3>
              <p>Vice Chancellor,</p>
              <p>KSNUAHS, India.</p>
            </div>
          </div>
        </div>
        <div className="wel-video">
          {/* <h2>Welcome Message Video</h2> */}
          <div className="video-list">
            <div>
              <video src={Dr_Rhodora_R_Jugo} controls></video>
              <h3>Dr. Rhodora R. Jugo</h3>
              <p>President,</p>
              <p>NEUST, Philippines.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeVideos;
