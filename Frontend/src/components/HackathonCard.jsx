import React from "react";
import image from "../assets/ImageUtility";

const HackathonCard = ({
  imageSrc,
  altText,
  title,
  daysLeft,
  mode,
  prize,
  company,
  date,
  tags,
  link, // Added the link prop
}) => {
  const modeImage =
    mode.toLowerCase() === "online" ? image.Online : image.Location;
  const modeLabel = mode.toLowerCase() === "online" ? "Online" : "Offline";

  return (
    <div className="hackathon-container">
      <div className="hack-grid1">
        <div className="hackathon__img">
          <a href="#">
            <img src={imageSrc} alt={altText} />
          </a>
        </div>
        <div className="hack-details">
          <div className="hackathon-name">
            <h2>{title}</h2>
          </div>
          <div className="btn__mode">
            <div className="mode-of-hackathon">
              <img src={modeImage} alt={modeLabel} />
              <h3>{modeLabel}</h3>
            </div>
          </div>
          <div className="hack-link">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={image.Link} alt="Link Icon" />
              <span>Link</span>
            </a>
          </div>
          <div className="winner-prize">
            <img className="Price" src={image.Prize} alt="Dollar" />
            <h4>{prize}</h4>
          </div>
        </div>
      </div>
      <div className="hack-grid2">
        <div className="vertical-line"></div>
        <div className="description">
          <div className="flag-company">
            <img className="desc-image" src={image.Flag} alt="Flag" />
            <button>{company}</button>
          </div>

          <div className="hackathon-date">
            <img className="desc-image" src={image.Calender} alt="Calendar" />
            <h3>{date}</h3>
          </div>

          <div className="hackathon-glimpses">
            <img className="desc-image" src={image.Tag} alt="Tag" />
            <div className="hackathon-for">
              {tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
