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
}) => {
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
            <div className="day-left__btn">
              <button>{daysLeft}</button>
            </div>
            <div className="mode-of-hackathon">
              <img src={image.Online} alt="Online" />
              <h3>{mode}</h3>
            </div>
          </div>
          <div className="winner-prize">
            <img className="Price" src={image.Rupee} alt="Rupees" />
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
            <img className="desc-image" src={image.Calender} alt="Tag" />
            <h3>{date}</h3>
          </div>

          <div className="hackathon-glimpses">
            <img className="desc-image" src={image.Tag} alt="" />
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
