import React from "react";
import "../styles/StarryBackground.css";

const StarryBackground = ({ children }) => {
  return (
    <div
      className="starry-background"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {children}
    </div>
  );
};

export default StarryBackground;
