import React from "react";
import "./Publication.css";
import publication from "../assets/publication.png";
import Proceedings from "../Home/Proceedings";

const Publication = () => {
  return (
    <div className="publication">
      <img data-aos="fade-down" src={publication} alt="" />
      <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        Publication of Presented Research
      </h1>
      <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        International Conference on Sustainable Agriculture Practices and
        Climate Change Impacts (ICSAPCI) provides several publication
        opportunities for presented work:
      </p>
      {/* <section className="proceeding">
        <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
          <h1>Conference Proceedings</h1>
          <p>
            All accepted and registered abstracts will be published in the
            Conference Proceedings with an ISBN Number.
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
          <h1>Journal Publication</h1>
          <p>
            Publish your high-quality paper in various Web of Science, Scopus
            and other internationally indexed journals, increasing the
            visibility and impact of your research.
          </p>
        </div>
      </section> */}
      <div class="cards-container">
        <div class="card" data-aos="fade-up">
          <img
            src="/images/Front_Back.jpg"
            alt="Conference Speaker"
            class="card-image"
          />
          <div class="card-content">
            <h3>Conference Proceedings</h3>
            <p>
              All accepted and registered abstracts will be published in the
              Conference Proceedings with an ISBN Number.
            </p>
          </div>
        </div>

        <div class="card" data-aos="fade-up">
          <img
            src="/images/conference1.png"
            alt="Scopus and Clarivate"
            class="card-image "
          />
          <div class="card-content">
            <h3>Journal Publication</h3>
            <p>
              Publish your high-quality paper in various Web of Science, Scopus
              and other internationally indexed journals, increasing the
              visibility and impact of your research.
            </p>
          </div>
        </div>
      </div>
      <Proceedings />
      <section className="text-center my-2">
        <h1 className="text-[#6a8d00] text-3xl my-4" data-aos="fade-up">
          PEER-REVIEWED SCOPUS-INDEXED JOURNALS
        </h1>
        <p data-aos="fade-up">
          Access our collection of high-quality, peer-reviewed journals indexed
          in Scopus trusted sources for impactful and reliable research.
        </p>

        <div
          className="flex flex-col items-center bg-white shadow-lg rounded-xl my-20 p-6 relative max-w-100 mx-auto"
          data-aos="fade-up"
        >
          {/* Circular image */}
          <div className="absolute -top-10 left-2">
            <div
              className="w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src="/images/journal/ijesty.png" // Replace with actual image path
                alt="Journal Cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content below the image */}
          <div className="pt-6 text-center w-full" data-aos="fade-up">
            <h2 className="text-lg font-bold text-[#0B2347]">
              International Journal of Engineering, Science and Information
              Technology (IJESTY)
            </h2>
            <hr className="my-2 border-gray-300" />
            <p>
              <span className="font-semibold text-gray-700">ISSN:</span>{" "}
              <span className="text-gray-600">2775-2674</span>
            </p>
          </div>
        </div>
      </section>

      <h1 data-aos="fade-up">Plagiarism Policy & Publication Ethics</h1>
      <p data-aos="fade-up">
        “International Conference on Sustainable Agriculture Practices and
        Climate Change Impacts (ICSAPCI)” adheres to stringent anti-plagiarism
        policies. Here are the key points about their process:
      </p>
      {/* <section className="proceeding check">
        <div data-aos="zoom-in">
          <h1>Plagiarism Check</h1>
          <p>
            <li>
              Every submission undergoes a plagiarism check using Crossref
              Similarity Check, which is powered by iThenticate.
            </li>
            <li>
              This ensures that all articles submitted to the conference are
              original and free from plagiarism.
            </li>
          </p>
        </div>
        <div data-aos="zoom-in">
          <h1>Review Process</h1>
          <p>
            <li>
              Submissions that pass the plagiarism check are sent to the
              scientific committee for review.
            </li>
            <li>
              Any submission found to be plagiarized at any stage will be
              automatically rejected.
            </li>
          </p>
        </div>
      </section> */}
      <div class="process-section">
        <div class="process-card" data-aos="fade-up">
          <img
            src="/images/plagiarism.png"
            alt="Plagiarism Check"
            class="process-image"
          />
          <div class="process-text">
            <h3>Plagiarism Check</h3>
            <ul>
              <li>
                Every submission undergoes a plagiarism check using Crossref
                Similarity Check, which is powered by iThenticate.
              </li>
              <li>
                This ensures that all articles submitted to the conference are
                original and free from plagiarism.
              </li>
            </ul>
          </div>
        </div>

        <div class="process-card" data-aos="fade-up">
          <img
            src="/images/review.png"
            alt="Review Process"
            class="process-image"
          />
          <div class="process-text">
            <h3>Review Process</h3>
            <ul>
              <li>
                Submissions that pass the plagiarism check are sent to the
                scientific committee for review.
              </li>
              <li>
                Any submission found to be plagiarized at any stage will be
                automatically rejected.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
