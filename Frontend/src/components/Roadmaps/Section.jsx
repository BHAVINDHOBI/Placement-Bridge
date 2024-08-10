import React, { useState } from "react";
import { Typography } from "@mui/material";
import InfoCard from "./InfoCard";
import "../../styles/Roadmaps/Section.css";

const Section = ({ section }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  return (
    <div className="section">
      <Typography variant="h5" className="section-title">
        {section.title}
      </Typography>
      {section.subsections.map((subsection, index) => (
        <div key={index} className="subsection">
          <Typography
            variant="h6"
            className="subsection-title"
            onClick={() => handleItemClick(subsection.title)}
          >
            {subsection.title}
          </Typography>
          {expandedItem === subsection.title && (
            <InfoCard
              title={subsection.title}
              description={`Detailed information about ${subsection.title}`}
              links={subsection.items}
            />
          )}
          <ul className="items-list">
            {subsection.items.map((item, index) => (
              <li key={index} className="item">
                <Typography
                  className="item-text"
                  onClick={() => handleItemClick(item.text)}
                >
                  {item.text}
                </Typography>
                {expandedItem === item.text && (
                  <InfoCard
                    title={item.text}
                    description={`Detailed information about ${item.text}`}
                    links={[item]}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Section;
