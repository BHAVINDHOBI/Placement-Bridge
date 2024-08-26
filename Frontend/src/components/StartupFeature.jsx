import React from "react";
import "../styles/StartupFeature.css";
import image from "../assets/ImageUtility";
import StartupForm from "./StartupForm";

const StartupBanner = () => {
  return (
    <div className="MainContainer">
      <div className="startup-banner">
        <h1>Register Your Startup or Recommend One to Us</h1>
        <div className="para">
          <p>
            At Placement Bridge, we are committed to supporting innovative
            startups and helping them connect with top talent. Whether you're a
            startup founder looking to register your company, or a user who
            knows of an exciting startup that we should know about, we welcome
            your submissions. Provide us with the essential details about your
            startup or a recommendation, and let's work together to build a
            thriving startup ecosystem. Your input could help startups find the
            perfect team and unlock their true potential!
          </p>
          <img
            src={image.StartupLife}
            alt="Startup Life"
            className="SecondaryImage"
          />
        </div>
      </div>
      <div className="FormContainer">
        <StartupForm />
      </div>
    </div>
  );
};

export default StartupBanner;
