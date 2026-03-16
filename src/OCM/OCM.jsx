import React, { useEffect, useState } from "react";
import "./OCM.css";
import CardSkeleton from "../Speaker/CardSkeleton";
import axios from "axios";

const OCM = () => {
  const [SpeakerData, setSpeakerData] = useState([]);
  const [removeScientificCommittee, setRemoveScientificCommittee] =
    useState(false);
  const [removeReviewCommittee, setRemoveReviewCommittee] = useState(false);

  useEffect(() => {
    HandleSpeaker();
  }, []);

  const HandleSpeaker = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}Upload/Speakers`
    );
    // console.log(response.data);
    const hasScientificCommittee = response.data.some(
      (speaker) => speaker.Title === "Scientific Committee"
    );
    setRemoveScientificCommittee(hasScientificCommittee);

    const hasReviewCommittee = response.data.some(
      (speaker) => speaker.Title === "Review Committee"
    );
    setRemoveReviewCommittee(hasReviewCommittee);
    setSpeakerData(response.data);
  };

  const Scientific = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 37, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ];
  const Review = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ];

  return (
    <div className="Members">
      <h1 data-aos="fade-up">Organizing Committee Members</h1>
      <div className="speaker">
        <section data-aos="fade-up">
          <h1>Scientific Committee Members</h1>
          {!removeScientificCommittee && (
            <p>
              Information about our Scientific Committee Members will be updated
              soon.
            </p>
          )}
          <section className="skeleton">
            {Scientific.map((order, index) => {
              const speaker = SpeakerData[order - 1];
              if (!speaker || !speaker.Image) {
                console.warn(`Speaker data missing for order: ${order}`);
                return null;
              }
              // const byteArray = new Uint8Array(speaker.Image.data.data);
              // const blob = new Blob([byteArray], {
              //   type: speaker.Image.mimetype,
              // });
              // const imageUrl = URL.createObjectURL(blob);
              if (speaker.Title === "Scientific Committee") {
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
        <section data-aos="fade-up">
          <h1>Review Committee Members</h1>
          {!removeReviewCommittee && (
            <p>
              Information about our Review Committee Members will be updated
              soon.
            </p>
          )}
          <section className="skeleton">
            {Review.map((order, index) => {
              const speaker = SpeakerData[order - 1];
              if (!speaker || !speaker.Image) {
                console.warn(`Speaker data missing for order: ${order}`);
                return null;
              }
              // const byteArray = new Uint8Array(speaker.Image.data.data);
              // const blob = new Blob([byteArray], {
              //   type: speaker.Image.mimetype,
              // });
              // const imageUrl = URL.createObjectURL(blob);
              if (speaker.Title === "Review Committee") {
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
      </div>
    </div>
  );
};

export default OCM;
