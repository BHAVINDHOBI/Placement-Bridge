import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Header.css";
import image from "../assets/ImageUtility";
import "typeface-montserrat";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOutClick = () => {
    // Handle the sign-out process
    localStorage.removeItem("token"); // Remove the token
    navigate("/Login"); // Navigate to home page or another page
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-bar__content" style={{ cursor: "pointer" }}>
          <div className="btn" onClick={handleSignOutClick}>
            <span>Logout</span>
            <img src={image.LogoutIcon} alt="Icon" />
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-bar__content">
          <RouterLink to="/" className="logo">
            <img
              src={image.PlacementBridgeLogo}
              alt="logo"
              className="logo__img"
            />
            <span className="logo__text">Placement Bridge</span>
          </RouterLink>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <ScrollLink
                  to=""
                  smooth={true}
                  duration={200}
                  offset={-70}
                  className="nav__link"
                >
                  Home
                </ScrollLink>
              </li>
              <li className="nav__item">
                <ScrollLink
                  to="About"
                  smooth={true}
                  duration={200}
                  offset={-70}
                  className="nav__link"
                >
                  About
                </ScrollLink>
              </li>
              <li className="nav__item">
                <ScrollLink
                  to="Services"
                  smooth={true}
                  duration={200}
                  offset={-70}
                  className="nav__link"
                >
                  Our Services
                </ScrollLink>
              </li>
              <li className="nav__item">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={200}
                  offset={-70}
                  className="nav__link"
                >
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </nav>
          <div className="hamburger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
