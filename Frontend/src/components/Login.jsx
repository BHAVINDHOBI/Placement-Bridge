import React, { useState } from "react";
import "../styles/Login.css";
import image from "../assets/ImageUtility";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="body">
      <header>
        <div className="logo-heading-container">
          <img src={image.PlacementBridgeLogo} alt="Logo" className="logo" />
          <h1 className="heading">Placement Bridge</h1>
        </div>
        <h3 className="title">Welcome, Please enter your credentials!</h3>
      </header>
      <div className="container">
        <div
          className="slider"
          style={{ left: isLogin ? "100px" : "250px" }}
        ></div>
        <div className="btn">
          <button className="login" onClick={() => setIsLogin(true)}>
            Sign in
          </button>
          <button className="signup" onClick={() => setIsLogin(false)}>
            Sign up
          </button>
        </div>

        <div
          className="form-section"
          style={{ left: isLogin ? "0px" : "-500px" }}
        >
          {isLogin ? (
            <div className="login-box">
              <input type="email" className="email ele" placeholder="Email" />
              <input
                type="password"
                className="password ele"
                placeholder="Password"
              />
              <button className="clkbtn">Sign in</button>
              <div className="separator">
                <span className="separator-text">OR</span>
              </div>
              <div className="social-buttons">
                <button className="google-btn">
                  <i className="fab fa-google"></i>
                </button>
                <button className="github-btn">
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
          ) : (
            <div className="signup-box">
              <input
                type="text"
                className="name ele"
                placeholder="Enter your name"
              />
              <input type="email" className="email ele" placeholder="Email" />
              <input
                type="password"
                className="password ele"
                placeholder="Enter your Password"
              />
              <input
                type="password"
                className="password ele"
                placeholder="Confirm Password"
              />
              <button className="clkbtn">Sign up</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
