import React, { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./components/MainPage";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/" Component={MainPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
