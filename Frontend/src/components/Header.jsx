import React from "react";
import "../styles/Header.css";
import image from "../assets/ImageUtility";

const Header = () => (
  <header className="header">
    <div className="top-bar">
      <div className="top-bar__content">
        <a href="../views/login.ejs" className="btn">
          Sign in
        </a>
      </div>
    </div>

    <div className="bottom-bar">
      <div className="bottom-bar__content">
        <a href="#" className="logo">
          <img
            src={image.PlacementBridgeLogo}
            alt="logo"
            className="logo__img"
          />
          <span className="logo__text">Placement Bridge</span>
        </a>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="index.html" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#aboutus" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#Services" className="nav__link">
                Our Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact Us
              </a>
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

export default Header;
