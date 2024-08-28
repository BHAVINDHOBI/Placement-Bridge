import React from "react";
import "../styles/Home.css";
import image from "../assets/ImageUtility";
import "typeface-montserrat";

const Home = () => (
  <section className="home">
    <div className="welcome-text">Get job at your dream company!</div>
    <div className="info-text__img">
      <div className="info-text">
        <p>
          We offer top-notch information that fits you and helps you get closer
          to your dream job while giving you the perfect expertise for your job
          needs.
        </p>
      </div>
      <div className="idea__img">
        <img src={image.IdealIcon} alt="Idea image" />
      </div>
    </div>
    <div className="learn-more-btn">
      <span className="learn-img">
        <span>Learn More</span>
        <img src={image.RightArrow}></img>
      </span>
    </div>
  </section>
);

export default Home;
