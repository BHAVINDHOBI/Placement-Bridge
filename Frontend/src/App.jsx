import React, { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import CoreItSubjects from "./components/LatestTechnology";
import Hackathons from "./components/Hackathon";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Subjects from "./components/Subjects";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={CoreItSubjects} />
          <Route path="/Hackathons" Component={Hackathons} />
          <Route path="/Login" Component={Login} />
          <Route path="/Signin" Component={Signin} />
          <Route path="/Subjects" Component={Subjects} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
