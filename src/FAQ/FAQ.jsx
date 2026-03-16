import React from "react";
import "./FAQ.css";
import faq from "../assets/faq.jfif";
import conf_faq from "../assets/111.webp"

const FAQ = () => {
  return (
    <div className="faq">
      <img data-aos="fade-up" src={conf_faq} alt="" />
      <section>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>1.What is ICSAPCI - 2026?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            ICSAPCI - 2026 is the "2<sup>nd</sup> International Conference on
            Sustainable Agriculture Practices and Climate Change Impacts"
            bringing together leading academic scientists, researchers and
            scholars to share their research and experiences.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>2.Who can attend the conference?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            International Conference on Sustainable Agriculture Practices and
            Climate Change Impacts (ICSAPCI-2026) welcomes a diverse range of
            attendees who are passionate about advancing sustainable
            agriculture. The conference is designed for: Academics and
            Researchers, Industry Professionals from agricultural sectors,
            Farmers and Producers, Students and Young Professionals, Corporate
            Partners and Sponsors, Non-Governmental Organizations (NGOs),
            Policymakers and Government Officials.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>3.How do I register for the conference?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            You can register for ICSAPCI - 2026 through our online registration
            portal. Choose your category, fill out the registration form, select
            your sessions, and complete the payment proces
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>4.What are the registration fees?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            The registration fees vary based on the category and registration
            period. Detailed fee information is available on the Registration
            Page.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>5.Can I submit my paper for presentation?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            Yes, you can submit your abstract or full paper through our
            submission portal. All submissions will be reviewed, and accepted
            papers will be presented at the conference.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>6.Will my paper be published?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            High-quality papers presented at the conference will be considered
            for publication in various Web of Science, Scopus and other
            internationally indexed journals. Submit now
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>7.What is the review process for submitted papers?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            All submitted papers will undergo a rigorous peer-review process
            conducted by experts in the respective fields. Reviewers will assess
            the originality, significance, and technical quality of the papers.
            Authors will be notified of the review results and any required
            revisions.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>8.What is included in the registration fee?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            The registration fee includes access to all sessions and workshops,
            conference materials, refreshments and lunch during conference days,
            a certificate of participation and networking opportunities.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>9.Is there a cancellation policy?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            Yes, cancellations made 50 Days Before Conference: 50% refundable.
            30-50 Days Before Conference: 35% refundable. Less Than 30 Days
            Before Conference: No refunds will be issued.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>10.How do I contact the conference organizers?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            For general inquiries, please email info@confworld.org For
            registration-related queries{" "}
            <a href="mailto:info@icsap.co.in" className="span-n">
              info@icsap.co.in
            </a>{" "}
            For sponsorship opportunities, reach out to{" "}
            <a href="mailto:collaboration@confworld.org" className="span-n">
              collaboration@confworld.org
            </a>
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>11.Will my presented paper be published?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            Yes, high-quality papers presented at the conference will be
            considered for publication in various Web of Science, Scopus and
            other internationally indexed journals.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>12.How do I submit my paper for publication?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            After presenting at the conference, you will receive detailed
            instructions on how to submit your paper for publication
            consideration in the indexed journals.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>13.What is the review process for publication?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            All submitted papers undergo a rigorous peer-review process by
            experts in the relevant field to ensure the quality and relevance of
            the research.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>14.Are there any additional fees for publication?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            There may be additional fees for publication in certain journals.
            Detailed information will be provided after your paper is accepted
            for presentation at the conference.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1>15.When will I know if my paper is accepted for publication?</h1>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom">
            You will be notified about the acceptance of your paper for
            publication after the review process is complete, typically within 5
            months post-conference.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
