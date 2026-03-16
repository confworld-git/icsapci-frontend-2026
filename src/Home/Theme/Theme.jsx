import React from "react";
import theme from "../../assets/theme.jpg";
import conf_theme from "../../assets/36.webp"

const Theme = () => {
  return (
    <section className="theme theme-II">
      <div className="welcome">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          Conference Theme
        </h1>
        <h3 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          "Innovative Approaches to Mitigate Climate Change through Sustainable
          Agriculture"
        </h3>
        <p data-aos="fade-up">
          As the world grapples with the challenges of feeding a growing
          population while preserving our planet, ICSAPCI - 2026 focuses on
          innovative solutions and strategic approaches to ensure food security
          and environmental sustainability. This theme invites participants to
          explore cutting-edge research, share insights, and collaborate on
          strategies that will shape the future of agriculture. It also reflects
          our commitment to addressing the urgent need for effective solutions
          that enhance community resilience in the face of climate change and
          natural disasters.
        </p>
      </div>
      <img src={conf_theme} data-aos="zoom-in" alt="" />
    </section>
  );
};

export default Theme;
