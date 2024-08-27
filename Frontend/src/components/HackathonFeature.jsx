import React from "react";
import "../styles/HackathonFeature.css";
import image from "../assets/ImageUtility";
import HackathonForm from "./HackathonForm";
import "typeface-montserrat";

const HackathonFeature = () => {
  return (
    <div className="MainContainer">
      <div className="startup-banner">
        <h1>Register Your Hackathon or Suggest One to Us</h1>
        <div className="para">
          <p>
            At Placement Bridge, we are dedicated to keeping you informed about
            the latest opportunities to showcase your skills and creativity. Our
            Hackathon feature offers comprehensive details on upcoming
            hackathons. Whether you're an experienced coder or just starting,
            these hackathons are a great way to challenge yourself, learn new
            things, and win exciting prizes. Additionally, if you know of a
            hackathon we should feature or if you're organizing one yourself,
            you can easily suggest or register it with us. Stay ahead of the
            curve, contribute to the community, and never miss out on a chance
            to participate in these innovative competitions!
          </p>
          <img
            src={image.StartupLife}
            alt="Startup Life"
            className="SecondaryImage"
          />
        </div>
      </div>
      <div className="FormContainer">
        <HackathonForm />
      </div>
    </div>
  );
};

export default HackathonFeature;
