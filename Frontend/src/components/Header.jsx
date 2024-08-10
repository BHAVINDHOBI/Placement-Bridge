import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
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
                  offset={-70} // Adjust this value if you have a fixed header
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
