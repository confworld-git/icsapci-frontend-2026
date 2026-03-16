import React, { useEffect, useState } from "react";
import "./Speaker.css";
import axios from "axios";
import CardSkeleton from "./CardSkeleton";
import speaker1 from "../assets/Sessions/speaker1.jpg";
import speaker2 from "../assets/Sessions/speaker2.png";
import speaker3 from "../assets/Sessions/speaker3.jpg";
import speaker4 from "../assets/Sessions/speaker4.png";
import speaker6 from "../assets/Sessions/speaker6.jpg";
import speaker7 from "../assets/Sessions/speaker7.jpg";
import speaker8 from "../assets/Sessions/speaker8.jpg";
import speaker9 from "../assets/Sessions/speaker9.jpg";
import speaker10 from "../assets/Sessions/speaker10.jpg";
import speaker11 from "../assets/Sessions/speaker11.jpg";
import speaker12 from "../assets/Sessions/speaker12.jpg";
import speaker15 from "../assets/Sessions/speaker15.jpg";
import speaker16 from "../assets/Sessions/speaker16.jpg";
import speaker19 from "../assets/Sessions/speaker19.jpg";
import board23 from "../assets/Sessions/board23.jpg";
import moderator from "../assets/Sessions/moderator.jpg";
import Rosemarie from "../assets/Sessions/new.jpg";
import VC from "../assets/Sessions/Vice_Chancellor.jpg";
import Kumar from "../assets/OCM/Kumar.jpg";

const Speaker = () => {
  const [SpeakerData, setSpeakerData] = useState([]);
  const [removeSessionSpeakerText, setRemoveSessionSpeakerText] =
    useState(false);
  const [removeKeynoteSpeakerText, setRemoveKeynoteSpeakerText] =
    useState(false);
  const [removeChairText, setRemoveChairText] = useState(false);

  useEffect(() => {
    HandleSpeaker();
  }, []);

  const HandleSpeaker = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}Upload/Speakers`
    );
    // console.log(response.data);

    const hasKeynoteSpeakers = response.data.some(
      (speaker) => speaker.Title === "Keynote Speakers"
    );

    setRemoveKeynoteSpeakerText(hasKeynoteSpeakers);

    const hasSessionSpeakers = response.data.some(
      (speaker) => speaker.Title === "Session Speakers"
    );
    setRemoveSessionSpeakerText(hasSessionSpeakers);

    const hasChair = response.data.some(
      (speaker) => speaker.Title === "Session Chair"
    );
    setRemoveChairText(hasChair);

    setSpeakerData(response.data);
  };

  // const Keynote = [
  //   7, 1, 3, 2, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  // ];
  // const Session = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   38, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  // ];
  // const Chair = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  // ];

  const welcomeAddress = SpeakerData.filter(
    (ele) => ele.Title == "Welcome Address"
  );

  const GuestOfHonour = SpeakerData.filter(
    (ele) => ele.Title == "Guest of Honour"
  );
  const ConferenceChair = SpeakerData.filter(
    (ele) => ele.Title == "Conference Chair"
  );
  // Split speakers
  const keynoteSpeakers = SpeakerData.filter(
    (ele) => ele.Title == "Keynote Speakers"
  );
  const sessionSpeakers = SpeakerData.filter(
    (ele) => ele.Title == "Session Speakers"
  );
  const sessionChair = SpeakerData.filter(
    (ele) => ele.Title == "Session Chair"
  );

  // const keynoteSpeakersLast = keynoteSpeakers.pop();
  // keynoteSpeakers.unshift(keynoteSpeakersLast);
  return (
    <div className="speaker">
      <section className="center">
        <h1>Welcome Address</h1>
        {welcomeAddress.length == 0 && (
          <p>Information about our Welcome Address will be updated soon.</p>
        )}
        <section className="skeleton">
          {welcomeAddress.map((speaker, index) => {
            // const speaker = keynoteSpeakers[order - 1];
            if (!speaker || !speaker.Image) {
              // console.warn(`Speaker data missing for order: ${order}`);
              return null;
            }
            {
              return (
                <div
                  key={index}
                  className="speaker-person"
                  id="image-container"
                >
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
                </div>
              );
            }
          })}
        </section>
      </section>

      <section className="center">
        <h1>Guest of Honour</h1>
        {GuestOfHonour.length == 0 && (
          <p>Information about our Guest Of Honour will be updated soon.</p>
        )}
        <section className="skeleton">
          {GuestOfHonour.map((speaker, index) => {
            // const speaker = keynoteSpeakers[order - 1];
            if (!speaker || !speaker.Image) {
              // console.warn(`Speaker data missing for order: ${order}`);
              return null;
            }
            return (
              <div key={index} className="speaker-person" id="image-container">
                <img
                  loading="lazy"
                  src={`${import.meta.env.VITE_API_LINK}/image/${
                    speaker.Image
                  }`}
                  alt={`${speaker.Name}'s image`}
                />
                <h1>{speaker.Name}</h1>
                <p>{speaker.About_1}</p>
                <p>{speaker.About_2}</p>
                <p>{speaker.About_3}</p>
                <p>{speaker.About_4}</p>
              </div>
            );
          })}
        </section>
      </section>

      <section className="center">
        <h1>Conference Chair</h1>
        {ConferenceChair.length == 0 && (
          <p>Information about our Conference Chair will be updated soon.</p>
        )}
        <section className="skeleton">
          {ConferenceChair.map((speaker, index) => {
            // const speaker = keynoteSpeakers[order - 1];
            if (!speaker || !speaker.Image) {
              // console.warn(`Speaker data missing for order: ${order}`);
              return null;
            }
            return (
              <div key={index} className="speaker-person" id="image-container">
                <img
                  loading="lazy"
                  src={`${import.meta.env.VITE_API_LINK}/image/${
                    speaker.Image
                  }`}
                  alt={`${speaker.Name}'s image`}
                />
                <h1>{speaker.Name}</h1>
                <p>{speaker.About_1}</p>
                <p>{speaker.About_2}</p>
                <p>{speaker.About_3}</p>
                <p>{speaker.About_4}</p>
              </div>
            );
          })}
        </section>
      </section>

      <section>
        <h1>Keynote Speakers</h1>
        {!removeKeynoteSpeakerText && (
          <p>Information about our Keynote Speakers will be updated soon.</p>
        )}
        <section className="skeleton">
          {keynoteSpeakers.map((speaker, index) => {
            // const speaker = keynoteSpeakers[order - 1];
            if (!speaker || !speaker.Image) {
              // console.warn(`Speaker data missing for order: ${order}`);
              return null;
            }
            return (
              <div key={index} className="speaker-person" id="image-container">
                <img
                  loading="lazy"
                  src={`${import.meta.env.VITE_API_LINK}/image/${
                    speaker.Image
                  }`}
                  alt={`${speaker.Name}'s image`}
                />
                <h1>{speaker.Name}</h1>
                <p>{speaker.About_1}</p>
                <p>{speaker.About_2}</p>
                <p>{speaker.About_3}</p>
                <p>{speaker.About_4}</p>
              </div>
            );
          })}
        </section>
      </section>

      <section>
        <h1>Session Speakers</h1>
        {!removeSessionSpeakerText && (
          <p>Information about our Session Speakers will be updated soon.</p>
        )}
        <section className="skeleton">
          {sessionSpeakers.map((speaker, index) => {
            // const speaker = sessionSpeakers[order - 1];
            if (!speaker || !speaker.Image) {
              // console.warn(`Speaker data missing for order: ${order}`);
              return null;
            }
            // const byteArray = new Uint8Array(speaker.Image.data.data);
            // const blob = new Blob([byteArray], {
            //   type: speaker.Image.mimetype,
            // });
            // const imageUrl = URL.createObjectURL(blob);
            return (
              <div key={index} className="speaker-person" id="image-container">
                <img
                  loading="lazy"
                  src={`${import.meta.env.VITE_API_LINK}/image/${
                    speaker.Image
                  }`}
                  alt={`${speaker.Name}'s image`}
                />
                <h1>{speaker.Name}</h1>
                <p>{speaker.About_1}</p>
                <p>{speaker.About_2}</p>
                <p>{speaker.About_3}</p>
                <p>{speaker.About_4}</p>
              </div>
            );
          })}
          {/* <CardSkeleton /> */}
        </section>
      </section>

      <section>
        <h1>Session Chairs</h1>
        {!removeChairText && (
          <p>Information about our Session Chairs will be updated soon.</p>
        )}
        <section className="skeleton">
          {sessionChair.map((speaker, index) => {
            // const speaker = sessionChair[order - 1];
            if (!speaker || !speaker.Image) {
              // console.warn(`Speaker data missing for order: ${order}`);
              return null;
            }
            // const byteArray = new Uint8Array(speaker.Image.data.data);
            // const blob = new Blob([byteArray], {
            //   type: speaker.Image.mimetype,
            // });
            // const imageUrl = URL.createObjectURL(blob);
            return (
              <div key={index} className="speaker-person" id="image-container">
                <img
                  loading="lazy"
                  src={`${import.meta.env.VITE_API_LINK}/image/${
                    speaker.Image
                  }`}
                  id="session_Chair"
                  alt={`${speaker.Name}'s image`}
                />
                <h1>{speaker.Name}</h1>
                <p>{speaker.About_1}</p>
                <p>{speaker.About_2}</p>
                <p>{speaker.About_3}</p>
                <p>{speaker.About_4}</p>
              </div>
            );
          })}
          {/* <CardSkeleton /> */}
        </section>
      </section>
    </div>
  );
};

export default Speaker;
