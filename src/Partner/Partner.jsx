import React, { useEffect, useRef, useState } from "react";
import "./Partner.css";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import contact_leaf from "../assets/contact-leaf.png";
import { IoPersonSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import Enquiry from "./Enquiry";
import { toaster } from "evergreen-ui";
import image1 from "../assets/66.webp";
import image2 from "../assets/93.webp";
import image3 from "../assets/60.webp";

const Partner = () => {
  const ContactFormRef = useRef();
  const [Toggle, setToggle] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Toggle]);

  const HandleContactForm = async (e) => {
    e.preventDefault();

    const ContactForm = new FormData(ContactFormRef.current);

    const formValues = {};
    ContactForm.forEach((value, key) => {
      formValues[key] = value;
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}Contact_Form`,
        formValues
      );
      if (response) {
        ContactFormRef.current.reset();
        toaster.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toaster.danger("Something's wrong");
    }
  };

  return (
    <div className="partner">
      <div className="image-container"  data-aos="fade-up">
        <div className="contact-images">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
        <h1>Partner with CERADA Today</h1>
      </div>
      <div className={Toggle ? "toggle-form" : "toggle"}>
        <Enquiry setToggle={setToggle} />
      </div>
      <p data-aos="fade-up">
        ICSAPCI welcomes partnerships with academic institutions, research
        organizations, NGOs and corporations that align with our mission of
        promoting sustainable agricultural practices.
      </p>
      <p data-aos="fade-up">
        Explore Opportunities: Discover how CERADA sponsorship can benefit your
        organization.
      </p>
      <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        We look forward to partnering with you and create a memorable and
        impactful experience at the CERADA International Conference.{" "}
      </p>
      <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <b>Contact Us:</b> Reach out to our team to discuss customized
        sponsorship and exhibition packages at{" "}
        <span className="span-n">collaboration@confworld.org</span>
      </p>
      <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        For more information or to secure your spot, please contact us today.
      </p>
      <section data-aos="fade-up">
        <div data-aos="fade-right">
          <h1>Academic Partnership, Sponsorship and Promotional activities:</h1>
          <p>
            <span>
              <IoPersonSharp />
            </span>
            <span>Ms.Suhana S</span>
          </p>
          <p>
            <span>
              <IoCallSharp />
            </span>
            <span>+91 8610656424</span>
          </p>
          <p>
            <span>
              <MdEmail />
            </span>
            <a href="mailto:collaboration@confworld.org" className="span-n">
              collaboration@confworld.org
            </a>
          </p>
        </div>
        <div data-aos="fade-left" id="Contact_Person_2">
          <h1>For any ICSAPCI queries, please contact:</h1>
          <div>
            <p>
              <span>
                <IoPersonSharp />
              </span>
              <span>Ms. Aishwarya S </span>
            </p>
            <p>
              <span>
                <IoCallSharp />
              </span>
              <span>+91 8072381719 </span>
            </p>
            <p>
              <span>
                <MdEmail />
              </span>
              <a href="mailto:info@icsap.co.in" className="span-n">
                info@icsap.co.in
              </a>
            </p>
          </div>
          <div>
            <p>
              <span>
                <IoPersonSharp />
              </span>
              <span>Ms. Malathy G</span>
            </p>
            <p>
              <span>
                <IoCallSharp />
              </span>
              <span>+91 6383055014</span>
            </p>
            <p>
              <span>
                <MdEmail />
              </span>
              <a href="mailto:info@icsap.co.in" className="span-n">
                info@icsap.co.in
              </a>
            </p>
          </div>
          <button className="enquiry" onClick={() => setToggle(true)}>
            For Any Enquiry
          </button>
        </div>
      </section>
      <div className="contact-us" id="contact_us" data-aos="fade-up">
        <form ref={ContactFormRef} onSubmit={HandleContactForm}>
          <input
            type="text"
            name="First_Name"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="Second_Name"
            placeholder="Second Name"
            required
          />
          <input type="email" name="Email" placeholder="Enter Email" required />
          <input
            type="tel"
            name="Mobile_Number"
            placeholder="Whatsapp Number With Country Code (e.g., +14155552671)"
            required
          />
          <textarea
            rows={4}
            style={{ resize: "none" }}
            maxLength={150}
            placeholder="Enter Message"
            name="Message"
            required
          ></textarea>
          <button>Contact Now</button>
        </form>
        <hr />
        <div>
          <img src={contact_leaf} alt="" />
          <h1>Contact Us</h1>
          <a
            href="https://www.facebook.com/profile.php?id=61560894663027"
            target="_blank"
          >
            <FaFacebook className="fb" /> Facebook
          </a>
          <a href="https://x.com/infoconfworld" target="_blank">
            <RiTwitterXFill className="x" /> Twitter
          </a>
          <a
            href="https://www.instagram.com/infoconfworld/?hl=en"
            target="_blank"
          >
            <RiInstagramFill className="insta" /> Instagram
          </a>
          <a href="https://wa.me/+918072381719" target="_blank">
            <IoLogoWhatsapp className="whats" /> Whatsapp
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@icsap.co.in"
            target="_blank"
          >
            <BiLogoGmail className="e" /> Gmail
          </a>
          <a href="tel:+918072381719">
            <IoMdCall className="cell" /> Contact Number
          </a>
          <a href="https://maps.app.goo.gl/8rtcbeqghr2TVvQQ7" target="_blank">
            <FaLocationDot className="locate" /> Location
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partner;
