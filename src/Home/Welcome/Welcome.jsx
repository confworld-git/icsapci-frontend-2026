import React from "react";
import "./Welcome.css";
import newPlant from "../../assets/welcome.jpeg";
import welcome_conf from "../../assets/112.webp";

const Welcome = () => {
  return (
    <section className="theme">
      <div className="welcome">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          Welcome to ICSAPCI - 2026
        </h1>
        <h3 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          Shaping the Future of Sustainable Agriculture and Climate change
        </h3>
        <p data-aos="fade-up">
          Agriculture is the cornerstone of global sustenance and economic
          stability. In an era where environmental challenges and food security
          concerns are increasingly prevalent, the need for sustainable
          agricultural practices has never been more urgent. The International
          Conference on Sustainable Agriculture Practices and Climate Change
          Impacts (ICSAPCI - 2026) is dedicated to addressing these challenges,
          focusing on innovative strategies that ensure a sustainable and
          resilient agricultural future.
        </p>
        <p data-aos="fade-up">
          At ICSAPCI-2026 we are dedicated to fostering a collaborative
          environment where thought leaders, researchers and practitioners from
          around the globe converge to address the pressing issues of climate
          change and disaster risk. Our aim is to inspire innovative solutions
          and build a shared understanding of how to create resilient,
          sustainable communities in the face of evolving environmental
          challenges.
        </p>
        <p data-aos="fade-up">
          ICSAPCI-2026 brings together leading researchers, practitioners,
          policymakers and industry experts from around the world to share their
          insights, research and solutions. This hybrid conference offers the
          flexibility to join either in person in the vibrant city of Jakarta,
          Indonesia or virtually from the comfort of your home or office,
          making it accessible to a global audience.
        </p>
      </div>
      <img src={welcome_conf} data-aos="zoom-in" alt="" />
    </section>
  );
};

export default Welcome;
