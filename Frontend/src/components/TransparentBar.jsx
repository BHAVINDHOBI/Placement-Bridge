import React from "react";
import "../styles/TransparentBar.css";
import image from "../assets/ImageUtility";

const TransparentBar = () => (
  <section className="transparent-Bar">
    <div className="trans-bar">
      <header
        className="bar-header"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        We See
        <br />
        What Others Don't See
      </header>
      <div className="bar-list" data-aos="fade-right" data-aos-duration="700">
        <div className="items">
          <img className="bar-logo" src={image.SurveyLogo} alt="survey" />
          <span>Survey</span>
        </div>
        <img src={image.RightArrow} alt="arrow" className="arrow" />
        <div className="items">
          <img className="bar-logo" src={image.PlanningLogo} alt="analysis" />
          <span>Planning</span>
        </div>
        <img src={image.RightArrow} alt="arrow" className="arrow" />
        <div className="items">
          <img className="bar-logo" src={image.DevelopLogo} alt="strategy" />
          <span>Develop</span>
        </div>
        <img src={image.RightArrow} alt="arrow" className="arrow" />
        <div className="items">
          <img className="bar-logo" src={image.ProvideLogo} alt="execution" />
          <span>Provide</span>
        </div>
      </div>
    </div>
  </section>
);

export default TransparentBar;
