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
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";
import jobData from "./data/CompaniesData";
import Roadmap from "./components/Roadmaps/Roadmap";
import StartUp from "./components/StartUp";
import StartupFeature from "./components/StartupFeature";
import "typeface-poppins";
import "typeface-montserrat";
import "typeface-raleway";
import HackathonFeature from "./components/HackathonFeature";

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
          <Route path="/startup" element={<StartUp />} />
          <Route path="/add-startup" element={<StartupFeature />} />
          {/* JobList routes */}
          <Route path="/recruitments" element={<JobList jobs={jobData} />} />
          <Route path="/job/:jobId" element={<JobDetail jobs={jobData} />} />
          <Route path="/frontend-roadmap" element={<Roadmap />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
