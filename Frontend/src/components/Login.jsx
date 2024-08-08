import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PlacementLogo from "../assets/HomePage_Imgs/placement-bridge-logo.svg";
import GoogleLogo from "../assets/CoreIT-Subjects/Google.svg";
import GitHubLogo from "../assets/CoreIT-Subjects/GitHub-Mark.png";
import "../styles/Login.css";
import { Box, Alert, IconButton, Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const serverapiUrl = "http://localhost:8082";
// const serverapiUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState([]);

  const handleGoogleLogin = () => {
    window.location.href = `${serverapiUrl}/auth/google`;
  };

  const handleGithubLogin = () => {
    window.location.href = `${serverapiUrl}/auth/github`;
  };

  async function userLogin(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${serverapiUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success && data.user) {
        localStorage.setItem("token", data.user);
        setAlertMessage([true, "Login successful"]);
        setOpen(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setAlertMessage([
          false,
          data.message || "Internal error wait for sometime",
        ]);
        setOpen(true);
      }
    } catch (err) {
      setAlertMessage([false, "Login failed: " + err.message]);
      setOpen(true);
    }
  }

  return (
    <div className="LoginPage">
      <Box sx={{ width: "80vh", marginBottom: "1vh" }}>
        <Collapse in={open}>
          <Alert
            severity={alertMessage[0] ? "success" : "error"}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false); // Closes the alert when close icon is clicked
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }} // Styling for spacing
          >
            {alertMessage[1]} {/* Displays alert message */}
          </Alert>
        </Collapse>
      </Box>
      <div className="LoginContainer">
        <div className="LogoContainer">
          <img src={PlacementLogo} alt="Placement Logo" className="Logo" />
          <p className="title">Placement Bridge</p>
        </div>
        <form onSubmit={userLogin}>
          <div className="input-fields">
            <input
              type="text"
              name="email"
              id="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="button">
            <input className="LoginButton" type="submit" value="Login" />
          </div>
        </form>

        <div className="separator">
          <span className="separator-text">OR</span>
        </div>

        <div className="LoginOptions">
          <div onClick={handleGoogleLogin}>
            <img className="Options" src={GoogleLogo} alt="Google Login" />
          </div>

          <div onClick={handleGithubLogin}>
            <img className="Options" src={GitHubLogo} alt="Github Login" />
          </div>
        </div>

        <div className="NewUser">
          New User?{" "}
          <span>
            <Link to="/signin" className="RegisterURL">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
