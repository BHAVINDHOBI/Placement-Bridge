import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Feature.css";
import image from "../assets/ImageUtility";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="features-main" id="Services">
      <div className="features-container">
        <div
          className="feature recruitement"
          data-aos="fade-down-right"
          onClick={() => navigate("/recruitments")}
        >
          <img
            className="feature-logo"
            src={image.RecruitmentLogo}
            alt="recruitment_logo"
          />
          <div className="content">
            <p>Recruitments</p>
          </div>
        </div>
        <div
          className="feature coreitsub"
          data-aos="fade-down-left"
          onClick={() => navigate("/subjects")}
        >
          <img
            className="feature-logo"
            src={image.CoreITIcon}
            alt="core_it_icon"
          />
          <div className="content">
            <p>Core IT Subjects</p>
          </div>
        </div>
        <div
          className="feature hackathon"
          data-aos="fade-up-right"
          onClick={() => navigate("/hackathons")}
        >
          <img
            className="feature-logo"
            src={image.HackathonIcon}
            alt="hackathon_icon"
          />
          <div className="content">
            <p>Hackathon Hub</p>
          </div>
        </div>
        <div
          className="feature latest-tech"
          data-aos="fade-up-left"
          onClick={() => navigate("/technologies")}
        >
          <img
            className="feature-logo"
            src={image.LatesttechIcon}
            alt="latest_tech_icon"
          />
          <div className="content">
            <p>Latest Technologies</p>
          </div>
        </div>
        <div
          className="feature startup"
          data-aos="fade-up"
          onClick={() => navigate("/startup")}
        >
          <img
            className="feature-logo"
            src={image.StartUpLogo}
            alt="startup_logo"
          />
          <div className="content">
            <p>StartUp</p>
          </div>
          <img className="new-logo" src={image.NewLogo} alt="new-logo" />
        </div>
      </div>
    </section>
  );
};

export default Features;
