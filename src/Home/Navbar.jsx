import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/logo-icsap.png";
import { useNavigate } from "react-router-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import Middle from "./Middle/Middle";

const Navbar = () => {
  const navigate = useNavigate();
  const marqueeRef = useRef();
  const [Open, setOpen] = useState(false);

  const handleMouseOver = () => {
    marqueeRef.current.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.current.start();
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const timeoutId = setTimeout(() => {
      document.body.classList.toggle("no-scroll", Open);
    }, 0);

    return () => {
      document.body.classList.remove("no-scroll");
      clearTimeout(timeoutId);
    };
  }, [Open]);

  return (
    <nav className="navbar" data-aos="fade-down">
      <p data-aos="fade-down" className="scroll-message">
        <marquee
          ref={marqueeRef}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <span>Hybrid Event :</span> You can participate in person at
          <span> Jakarta, Indonesia or Virtually</span> from your home or
          office.
        </marquee>
      </p>
      <Middle />
      <button onClick={() => navigate("/Login")}>Login</button>
      <a href="/">
        <img
          src={logo}
          alt="International Conference on Sustainable Agriculture Practices and Climate Change Impacts (ICSAPCI)"
        />
      </a>
      <i onClick={() => setOpen(true)}>
        <FiMenu />
      </i>
      <ul>
        {/* <li onClick={() => navigate("/")}>Home</li> */}
        <li>
          About
          <ul>
            <li onClick={() => navigate("/About")}>About ICSAPCI</li>
            <li onClick={() => navigate("/About_Organizer")}>About Organizer</li>
            <li onClick={() => navigate("/Speaker")}>Speakers</li>
            <li onClick={() => navigate("/Organizing_Committee_Members")}>
              Organizing Committee Members
            </li>
            <li onClick={() => navigate("/Organizing_Committee_Members_Form")}>
              Apply for Organizing Committee Members
            </li>
          </ul>
        </li>
        <li>
          Call for Papers
          <ul>
            <li onClick={() => navigate("/Call_for_Papers")}>
              Session Tracks/Call for Papers
            </li>
            <li onClick={() => navigate("/Essential")}>Essential Download</li>
          </ul>
        </li>
        <li>
          Submission
          <ul>
            <li onClick={() => navigate("/Submission_Form")}>
              Abstract/Full Paper Submission
            </li>

            <li onClick={() => navigate("/Submission_Guidelines")}>
              Submission Guidelines
            </li>
          </ul>
        </li>
        <li onClick={() => navigate("/Publication")}>Publication</li>
        <li>
          Registration
          <ul id="regg">
            <li onClick={() => navigate("/Registration")}>Registration Fee</li>
            <li onClick={() => navigate("/Instructions")}>
              Instructions & Guidelines
            </li>
            <li onClick={() => navigate("/Terms")}>Terms and Conditions</li>
          </ul>
        </li>
        <li onClick={() => navigate("/Sponsors")}>Exhibits and Sponsors</li>
        <li onClick={() => navigate("/FAQ")}>FAQ</li>
        <li onClick={() => navigate("/Venue")}>Venue</li>
        <li onClick={() => navigate("/Contact_Us")}>Contact Us</li>
      </ul>
      <div className="side-nav" style={{ display: Open ? "block" : "none" }}>
        <HiOutlineXMark onClick={() => setOpen(false)} />
        <ul>
          <li
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
          >
            Home
          </li>
          <li>
            About
            <ul>
              <li
                onClick={() => {
                  navigate("/About");
                  setOpen(false);
                }}
              >
                About ICSAPCI
              </li>
              <li
                onClick={() => {
                  navigate("/About_Organizer");
                  setOpen(false);
                }}
              >
                About Organizer
              </li>
              <li
                onClick={() => {
                  navigate("/Speaker");
                  setOpen(false);
                }}
              >
                Speakers
              </li>
              <li
                onClick={() => {
                  navigate("/Organizing_Committee_Members");
                  setOpen(false);
                }}
              >
                Organizing Committee Members
              </li>
              <li
                onClick={() => {
                  navigate("/Organizing_Committee_Members_Form");
                  setOpen(false);
                }}
              >
                Apply for Organizing Committee Members
              </li>
            </ul>
          </li>
          <li>
            Call for Papers
            <ul>
              <li
                onClick={() => {
                  navigate("/Call_for_Papers");
                  setOpen(false);
                }}
              >
                Session Tracks/Call for Papers
              </li>
              <li
                onClick={() => {
                  navigate("/Essential");
                  setOpen(false);
                }}
              >
                Essential Download
              </li>
            </ul>
          </li>
          <li>
            Submission
            <ul>
              <li
                onClick={() => {
                  navigate("/Publication");
                  setOpen(false);
                }}
              >
                Plagiarism Policy & Ethics
              </li>
              <li
                onClick={() => {
                  navigate("/Submission_Form");
                  setOpen(false);
                }}
              >
                Submission Form
              </li>
              <li
                onClick={() => {
                  navigate("/Submission_Guidelines");
                  setOpen(false);
                }}
              >
                Submission Guidelines
              </li>
            </ul>
          </li>
          <li>
            Registration
            <ul id="regg">
              <li
                onClick={() => {
                  navigate("/Registration");
                  setOpen(false);
                }}
              >
                Registration Fee
              </li>
              <li
                onClick={() => {
                  navigate("/Instructions");
                  setOpen(false);
                }}
              >
                Instructions & Guidelines
              </li>
              <li
                onClick={() => {
                  navigate("/Terms");
                  setOpen(false);
                }}
              >
                Terms and Conditions
              </li>
            </ul>
          </li>
          <li
            onClick={() => {
              navigate("/FAQ");
              setOpen(false);
            }}
          >
            FAQ
          </li>
          <li
            onClick={() => {
              navigate("/Venue");
              setOpen(false);
            }}
          >
            Venue
          </li>
          <li
            onClick={() => {
              navigate("/Contact_Us");
              setOpen(false);
            }}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
