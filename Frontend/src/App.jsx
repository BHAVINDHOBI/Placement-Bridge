// App.jsx
import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Subjects from "./components/Subjects";
import Hackathons from "./components/Hackathon";
import LatestTechnology from "./components/LatestTechnology";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/technologies" element={<LatestTechnology />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
