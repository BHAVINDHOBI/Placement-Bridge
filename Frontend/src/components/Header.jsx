import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import image from "../assets/ImageUtility";

const Header = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div
          className="top-bar__content"
          onClick={handleSignInClick}
          style={{ cursor: "pointer" }}
        >
          <span className="btn">Sign in</span>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-bar__content">
          <Link to="/" className="logo">
            <img
              src={image.PlacementBridgeLogo}
              alt="logo"
              className="logo__img"
            />
            <span className="logo__text">Placement Bridge</span>
          </Link>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="" className="nav__link">
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link to="#Services" className="nav__link">
                  Our Services
                </Link>
              </li>
              <li className="nav__item">
                <Link to="#contact" className="nav__link">
                  Contact Us
                </Link>
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
