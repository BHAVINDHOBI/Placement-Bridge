import React from "react";
import image from "../assets/ImageUtility";
const TechnologyCard = ({
  imageSrc,
  altText,
  title,
  description,
  youtubeLink,
  articleLink,
}) => {
  return (
    <div className="technology-content">
      <div className="main-tech-content">
        <div className="container">
          <div className="inner-container-1">
            <img src={imageSrc} alt={altText} />
            <h3>{title}</h3>
          </div>
        </div>
        <div className="container">
          <div className="inner-container-2"></div>
        </div>
        <div className="container">
          <div className="inner-container-3">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="container">
          <div className="inner-container-2"></div>
        </div>
        <div className="container">
          <div className="inner-container-5">
            <h3>Links</h3>
            <a href={youtubeLink} id="fonts" target="blank">
              <img src={image.Youtube}></img>
            </a>
            <a href={articleLink} id="fonts">
              <img src={image.Document}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
