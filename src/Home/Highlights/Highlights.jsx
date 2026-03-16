import React from "react";
import "./Highlights.css";

const Highlights = () => {
  return (
    <div className="highlights">
      <h1 data-aos="fade-up">Key Highlights</h1>
      <section>
        <div data-aos="flip-left">
          <h1>Global Networking</h1>
          <p>
            Connect with a diverse community of experts and peers in the field
            of sustainable agriculture.
          </p>
        </div>
        <div data-aos="flip-left">
          <h1>Innovative Insights</h1>
          <p>
            Discover groundbreaking research, technological advancements, and
            best practices that are shaping the future of agriculture.
          </p>
        </div>
        <div data-aos="flip-left">
          <h1>Interactive Sessions</h1>
          <p>
            Participate in workshops, panel discussions and Q&A sessions with
            leading minds in the industry.
          </p>
        </div>
        <div data-aos="flip-left">
          <h1>Publication Opportunities</h1>
          <p>
            Present your research and get it published in Scopus-indexed
            journals and Clarivate WoS proceedings.
          </p>
        </div>
        <div data-aos="flip-left">
          <h1>Hybrid Flexibility</h1>
          <p>
            Choose to attend in person or virtually, with full access to all
            conference sessions, materials and networking opportunities.
          </p>
        </div>
        <div data-aos="flip-left">
          <h1>CERADA Awards</h1>
          <p>
            Celebrate excellence with our prestigious awards, recognizing
            outstanding contributions to the field.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Highlights;
