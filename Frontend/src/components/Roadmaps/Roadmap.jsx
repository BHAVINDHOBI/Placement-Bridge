import React from "react";
import { Grid, Button } from "@mui/material";
import Section from "./Section";
import "../../styles/Roadmaps/Roadmap.css";
import FrontEndRoadmap from "../../assets/Roadmaps/FrontendRoadmap.drawio.svg";

const roadmapData = [
  {
    title: "Front-end",
    subsections: [
      {
        title: "Internet",
        items: [
          {
            text: "Learn how the web works",
            type: "video",
            url: "https://internetfundamentals.com/",
          },
          {
            text: "How does the Internet work?",
            type: "article",
            url: "https://cs.fyi/guide/how-does-internet-work",
          },
          {
            text: "The Internet Explanation",
            type: "article",
            url: "https://www.vox.com/2014/6/16/18076282/the-internet",
          },
          {
            text: "Introduction to Internet",
            type: "article",
            url: "https://roadmap.sh/guides/what-is-internet",
          },
          {
            text: "How Does the Internet work?",
            type: "video",
            url: "https://www.youtube.com/watch?v=x3c1ih2NJEg",
          },
          // Add more items as needed
        ],
      },
      {
        title: "HTML",
        items: [
          {
            text: "Learn the basics",
            type: "roadmap.sh",
            url: "https://example.com/learn-the-basics",
          },
          {
            text: "Writing Semantic HTML",
            type: "article",
            url: "https://example.com/writing-semantic-html",
          },
          // Add more items as needed
        ],
      },
      // Add more subsections as needed
    ],
  },
  // Add more sections as needed
];

const Roadmap = () => {
  const handleDownload = () => {
    // Implement download functionality
  };

  const handleShare = () => {
    // Implement share functionality
  };

  return (
    <div className="roadmap">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {roadmapData.map((section, index) => (
            <Section key={index} section={section} />
          ))}
        </Grid>
        <Grid item xs={12} md={6} className="roadmap-image-container">
          <img src={FrontEndRoadmap} alt="Roadmap" className="roadmap-image" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Roadmap;
