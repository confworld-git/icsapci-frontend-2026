import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ConferenceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const publications = [
    {
      type: "Research article • Restricted access",
      title:
        "Evaluating the influence of courseware on online learning pedagogy at Pangasinan State University.",
      authors: "Angelou O Ramos",
      publication: "E-Learning and Digital Media",
      year: "2025",
      pages: "",
    },
    {
      type: "Research article • Restricted access",
      title:
        "The assessment SHIFT: Traditional and technology-driven approaches to listening comprehension.",
      authors: "Johnedel Barrota Peralta",
      publication: "E-Learning and Digital Media",
      year: "2025",
      pages: "",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Redefining educational success: Analyzing the impact of closed management systems on student well-being and academic performance in Chinese technical education.",
      authors: "Jingkun Liu, Rovena I Dellova and Zhengxin Yi",
      publication: "E-Learning and Digital Media",
      year: "2024",
      pages: "",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Zeolite X from coal fly ash inhibits proliferation of human breast cancer cell lines (MCF-7) via induction of S phase arrest and apoptosis",
      authors: "S. Subhapriya and  P. Gomathipriya",
      publication: "Molecular biology reports",
      year: "2018",
      pages: "",
    },
    {
      type: "Research article • Restricted access",
      title: (
    <>
      Green synthesis of titanium dioxide (TiO<sub>2</sub>) nanoparticles by <i>Trigonella foenum-graecum</i> extract and its antimicrobial properties
    </>
  ),
      authors: "S. Subhapriya and  P. Gomathipriya",
      publication: "Microbial pathogenesis",
      year: "2018",
      pages: "",
    },
    {
      type: "Research article • Restricted access",
      title: (
        <>
          Surfactant-free bio-synthesised TiO<sub>2</sub> nanorods from{" "}
          <i>Turbinaria conoides</i> – A study on photocatalytic and
          anti-bacterial activity
        </>
      ),
      authors: "S. Subhapriya and  P. Gomathipriya",
      publication: "Materials Research Express",
      year: "2018",
      pages: "",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Synthesis and characterization of zeolite X from coal fly ash: a study on anticancer activity",
      authors: "S. Subhapriya and  P. Gomathipriya",
      publication: "Materials Research Express",
      year: "2018",
      pages: "",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Induction of apoptotic effects of anti-proliferative zeolite X from coal fly ash on cervical cancer (HeLa) cell lines",
      authors: "S. Subhapriya and  P. Gomathipriya",
      publication: "Molecular Biology Reports",
      year: "2018",
      pages: "",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Design and analysis of high gain and low noise figure CMOS low noise amplifier for Q-band nano-sensor application",
      authors: "K Suganthi and S Malarvizhi",
      publication: "Materials Research Express",
      year: "2018",
      pages: "",
    },
    {
      type: "Research article • Restricted access",
      title:
        "Detection and classification of cardiovascular abnormalities using FFT based multi-objective genetic algorithm",
      authors: "B. V. P Prasad and Velusamy Parthasarathy",
      publication: "Biotechnology & Biotechnological Equipment",
      year: "2017",
      pages: "",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === publications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? publications.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]); // Re-create interval when currentIndex changes

  return (
    <div className="min-h-screen bg-green-800 flex flex-col items-center justify-center p-8 my-12">
      {/* Header */}
      <div className=" w-full mb-8 text-center">
        <h1 className="text-3xl md:text-3xl font-bold text-white mb-6">
          Participate in ICSAPCI-2026 and Achieve Scopus / SCIE Indexed Publication
        </h1>
        <p className="text-xl text-white leading-relaxed">
          ICSAPCI-2026 offers a valuable opportunity for researchers to present their work and achieve publication in reputed<br/> Scopus / SCIE indexed journals. <b>Selected high-quality papers</b> presented at the conference will be recommended and processed for legitimate <b>Scopus / SCIE indexed journal publication</b>, ensuring global academic visibility and recognition through one of the world's most trusted indexing databases.
        </p>
      </div>

      {/* Proof of Scopus Indexing Section */}
      <div className="max-w-6xl w-full mb-8">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Proof of Scopus / SCIE Indexing
        </h2>
        <p className="text-lg text-white text-center mb-">
          Our clients' papers have been successfully indexed in <br></br>Scopus / SCIE . Selected papers have been published in the following Scopus / SCIE indexed journals.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="max-w-6xl w-full relative">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-12 min-h-[400px] flex flex-col justify-center transition-all duration-500">
          <div className="space-y-4">
            <div className="text-green-700 text-md font-semibold tracking-wide">
              {publications[currentIndex].type}
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-green-900 leading-tight">
              {publications[currentIndex].title}
            </h3>
            <div className="text-green-800 text-lg">
              {publications[currentIndex].authors}
            </div>
            <div className="text-green-700 italic pt-4">
              {publications[currentIndex].publication}, {publications[currentIndex].year}
              {publications[currentIndex].volume && `, ${publications[currentIndex].volume}`} {publications[currentIndex].pages}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {publications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-green-700 w-8' 
                    : 'bg-green-300 hover:bg-green-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white p-4 transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white p-4 transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl w-full mt-8 text-center">
        <p className="text-2xl text-white font-semibold">
          Join us at ICSAPCI and unlock the opportunity to publish your research in reputed <br/>Scopus / SCIE indexed journals.
        </p>
      </div>
    </div>
  );
}