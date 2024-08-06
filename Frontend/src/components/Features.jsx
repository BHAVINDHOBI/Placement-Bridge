import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Features.css";
import image from "../assets/ImageUtility";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  const navigate = useNavigate();

  const handleViewClick = (path) => {
    navigate(path);
  };
  return (
    <section className="features-main" id="Services">
      <div className="features-container">
        <div className="feature recruitement" data-aos="fade-down-right">
          <img
            className="feature-logo"
            src={image.RecruitmentLogo}
            alt="recruitment_logo"
          />
          <div className="content">
            <p>Recruitments</p>
            <a href="./Html/Recruitments.html">
              <button
                className="view"
                onClick={() => handleViewClick("/recruitments")}
              >
                View
              </button>
            </a>
          </div>
        </div>
        <div className="feature coreitsub" data-aos="fade-down-left">
          <img
            className="feature-logo"
            src={image.CoreITIcon}
            alt="core_it_icon"
          />
          <div className="content">
            <p>Core IT Subjects</p>
            <a href="./Html/subjects.html">
              <button className="view">View</button>
            </a>
          </div>
        </div>
        <div className="feature hackathon" data-aos="fade-up-right">
          <img
            className="feature-logo"
            src={image.HackathonIcon}
            alt="hackathon_icon"
          />
          <div className="content">
            <p>Hackathon Hub</p>
            <a href="./Html/HackathonHub.html">
              <button className="view">View</button>
            </a>
          </div>
        </div>
        <div className="feature latest-tech" data-aos="fade-up-left">
          <img
            className="feature-logo"
            src={image.LatesttechIcon}
            alt="latest_tech_icon"
          />
          <div className="content">
            <p>Latest Technologies</p>
            <a href="./Html/technology.html">
              <button className="view">View</button>
            </a>
          </div>
        </div>
        <div className="feature startup" data-aos="fade-up">
          <img
            className="feature-logo"
            src={image.StartUpLogo}
            alt="startup_logo"
          />
          <div className="content">
            <p>StartUp</p>
            <a href="./Html/Recruitments.html">
              <button className="view">View</button>
            </a>
          </div>
          <img className="new-logo" src={image.NewLogo} alt="new-logo" />
        </div>
      </div>
    </section>
  );
};

export default Features;
