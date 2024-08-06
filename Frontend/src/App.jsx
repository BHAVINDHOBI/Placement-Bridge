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
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={CoreItSubjects} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
