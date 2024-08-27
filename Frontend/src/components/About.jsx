import React from "react";
import "../styles/About.css";
import image from "../assets/ImageUtility";
import "typeface-montserrat";

const About = () => (
  <section className="about" id="About">
    <div className="about-main">
      <div
        className="about-grid1"
        data-aos="fade-right"
        data-aos-duration="900"
      >
        <h1>ABOUT US</h1>
        <p>
          Step into the transformative world of IT excellence with Placement
          Bridge! Discover career opportunities with our recruitment feature,
          offering detailed roadmaps for each role's success. Stay informed on
          upcoming hackathons, delve into core IT subjects through curated
          links, connect with innovative startups, and explore the latest
          industry-demanded technologies. Seamlessly integrating resources,
          we're your one-stop destination for navigating the dynamic landscape
          of IT careers. Join us and propel your journey to success!
        </p>
      </div>
      <div
        className="about-grid2"
        data-aos="fade-down-left"
        data-aos-duration="900"
      >
        <img src={image.AboutHome} alt="" />
      </div>
    </div>
  </section>
);

export default About;
