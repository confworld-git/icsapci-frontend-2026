import React from "react";
import "./Organizer.css";
import organizer from "../assets/CERADAfinal.png";
import mission from "../assets/mission.svg";
import vision from "../assets/vision.svg";
import { LiaHandPointer } from "react-icons/lia";

const Organizer = () => {
  return (
    <div>
      <section className="about-cerada">
        <div>
          <h1 data-aos="fade-up">About CERADA</h1>
          <p data-aos-anchor-placement="top-bottom" data-aos="fade-up">
            The Confworld Educational Research And Development Association
            (CERADA) is an internationally recognized, globally operating
            multidisciplinary professional research and development association.
            Confworld Educational Research and Development Association (CERADA)
            aims to integrate researchers and academicians working in the micro
            disciplines of science and technology, fostering collaboration and
            innovation across a broad spectrum of fields.
          </p>
          <p data-aos-anchor-placement="top-bottom" data-aos="fade-up">
            We organize top-tier international conferences, offering a platform
            for researchers and professionals to present their work, share ideas
            and network.
          </p>
          <p data-aos-anchor-placement="top-bottom" data-aos="fade-up">
            Our publication services support the submission of research papers
            to reputable, double blind peer-reviewed journals, ensuring
            successful publication through editing and peer-review assistance.
          </p>
        </div>
        <img data-aos="fade-left" src={organizer} alt="" />
      </section>
      <section className="mission" data-aos="flip-down">
        <div>
          <h4>Our Mission</h4>
          <p>
            Confworld Educational Research and Development Association (CERADA)
            advances global education and research through international
            conferences, research assistance and collaborative publications,
            fostering an inclusive environment for knowledge sharing and
            innovation.
          </p>
        </div>
        <div>
          <img src={mission} alt="" />
        </div>
      </section>
      <section className="mission vision" data-aos="flip-up">
        <div>
          <h4>Our Vision</h4>
          <p>
            Confworld Educational Research and Development Association (CERADA)
            envisions a borderless educational research community committed to
            lifelong learning and excellence, aiming to be a catalyst for
            transformation advancements through cutting-edge research and
            international partnerships.
          </p>
        </div>
        <div>
          <img src={vision} alt="" />
        </div>
      </section>
      <section className="what-we">
        <h1 data-aos="fade-up">What we do</h1>
        <p data-aos="fade-up">
          Confworld Educational Research and Development Association (CERADA)
          dedicated to building a dynamic community of professionals, educators,
          researchers and innovators in the realms of engineering, science &
          technology, business & management, social sciences & humanities and
          education. As part of this mission, we offer a platform that enables:
        </p>
        <div data-aos="fade-up">
          <p>
            CERADA organizes a wide range of educational initiatives, which
            includes conferences, workshops, webinars, guest lectures, seminars,
            short-term training programs, public education programs and faculty
            development programs, all focused on Engineering and Science &
            Technology.
          </p>
          <p>
            With a focus on curiosity, innovation and the latest trends in
            Engineering and Technology, CERADA is devoted to advancing knowledge
            in these fields.
          </p>
          <p>
            We are committed to provide easy access to academic resources and
            support for aspiring students and research scholars from both urban
            and rural areas.
          </p>
          <p>
            We are committed to fostering partnerships with universities,
            organizations, and associations to promote knowledge sharing and
            work collectively toward building a better future.
          </p>
        </div>
      </section>
      <h1 className="visit-our" data-aos="fade-up">Visit Our</h1>
      <section className="cerada-links">
        <a href="https://confworld.org" target="_blank">
          <span>
            <LiaHandPointer /> Primary Website
          </span>
        </a>
        <a href="https://confworld.org/student" target="_blank">
          <span>
            <LiaHandPointer />
            Student Membership
          </span>
        </a>
        <a href="https://confworld.org/institutional" target="_blank">
          <span>
            <LiaHandPointer /> Institutional Membership
          </span>
        </a>
        <a href="https://confworld.org/professional" target="_blank">
          <span>
            <LiaHandPointer /> Professional Membership
          </span>
        </a>
      </section>
    </div>
  );
};

export default Organizer;
