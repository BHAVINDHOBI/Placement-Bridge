import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import videoFile from "../public/vedios/Backgroundvedio.mp4";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app">
      {/* Video Background */}
      <video className="background-video" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="overlay">
        <Router>
          <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/" Component={MainPage} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
