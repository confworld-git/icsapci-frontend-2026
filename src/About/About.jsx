import React from "react";
import "./About.css";
// import about from "../assets/about-icsap.jpg";
// import about from "../assets/1st-conference-group.webp";
import about from "../assets/109.webp";
import theme2 from "../assets/theme2.png";
import conf_theme2 from "../assets/34.webp";
import focus_1 from "../assets/focus1.jpg";
import focus_2 from "../assets/focus2.jpeg";
import focus_3 from "../assets/focus3.jpeg";
import focus_4 from "../assets/focus4.png";
import focus_5 from "../assets/focus5.jpeg";

const About = () => {
  return (
    <div className="about-icsap">
      <img src={about} data-aos="fade-up" alt="" />
      <div className="about" data-aos="fade-up" data-aos-duration="1500">
        <h1>
          About <span>ICSAPCI - 2026</span>
        </h1>
        <p>
          The "2<sup>nd</sup> International Conference on Sustainable Agriculture
          Practices and Climate Change Impacts (ICSAPCI - 2026)" is a leading forum that
          brings together a diverse array of voices and perspectives to address
          the critical challenges facing agriculture today. As the global
          population grows and environmental pressures mount, ICSAPCI serves as
          a crucial platform for discussing and disseminating the innovations
          and strategies needed to achieve sustainable agricultural practices
        </p>
        <p style={{ marginTop: "1rem" }}>
          Hosted by the Confworld Educational Research and Development
          Association (CERADA), ICSAPCI has become a beacon for those dedicated
          to advancing sustainable agriculture, fostering collaboration across
          disciplines, industries and borders.
        </p>
      </div>
      <div className="conference-theme">
        <div data-aos="fade-right">
          <h1>Conference Theme</h1>
          <p>
            Our 2026 theme, "Innovative Approaches to Mitigate Climate Change
            through Sustainable Agriculture" is more than just a topic, it's a
            call to action. The world stands at a pivotal moment where the
            integration of innovative technologies and sustainable practices is
            essential for safeguarding our food supply and protecting the
            environment. ICSAPCI - 2026 will delve into key areas such as
            sustainable farming techniques, resource management, agricultural
            technology and policy frameworks that drive sustainability in
            agriculture.
          </p>
          <h2 >A Global Gathering with Local Impact</h2>
          <p>
            With its hybrid format, ICSAPCI - 2026 provides an inclusive platform
            for participants worldwide. Whether attending in person at Jakarta, Indonesia or virtually from anywhere in the world, every attendee
            will have the chance to contribute to discussions, share insights
            and learn from experts. Our hybrid format ensures accessibility and
            flexibility, making it easier than ever to be part of this vital
            conversation.
          </p>
        </div>
        <img data-aos="fade-left" src={conf_theme2} alt="" />
      </div>
      <section className="key-focus">
        <h1 data-aos="fade-down">Key focus areas include</h1>
        <div>
          <img data-aos="zoom-in" src={focus_1} alt="" />
          <div>
            <h2 data-aos="fade-right">Sustainable Farming Techniques</h2>
            <p data-aos="fade-right">
              Innovations in organic farming, soil health and water
              conservation.
            </p>
          </div>
        </div>
        <div>
          <img data-aos="zoom-in" src={focus_2} alt="" />
          <div>
            <h2 data-aos="fade-right">Agricultural Technology</h2>
            <p data-aos="fade-right">
              Integration of AI, precision farming and smart technologies.
            </p>
          </div>
        </div>
        <div>
          <img data-aos="zoom-in" src={focus_3} alt="" />
          <div>
            <h2 data-aos="fade-right">Food Security</h2>
            <p data-aos="fade-right">
              Strategies for feeding a growing population while ensuring
              nutrition and reducing waste.
            </p>
          </div>
        </div>
        <div>
          <img data-aos="zoom-in" src={focus_4} alt="" />
          <div>
            <h2 data-aos="fade-right">Climate Resilience</h2>
            <p data-aos="fade-right">
              Adapting agriculture to climate change through sustainable
              practices.
            </p>
          </div>
        </div>
        <div>
          <img data-aos="zoom-in" src={focus_5} alt="" />
          <div>
            <h2 data-aos="fade-right">Global Collaboration</h2>
            <p data-aos="fade-right">
              Building partnerships across sectors for knowledge sharing and
              innovation in sustainable agriculture.           
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
