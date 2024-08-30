import React from "react";
import Header from "./Header";
import Home from "./Home";
import Features from "./Features";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import TransparentBar from "./TransparentBar";
import "../styles/MainPage.css";
import "typeface-montserrat";

const MainPage = () => {
  return (
    <div className="mainpage">
      <Header />
      <main className="website-content__inner">
        {/* Home Section */}
        <section id="home">
          <Home />
        </section>

        {/* Features Section */}
        <section id="ourservices">
          <Features />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>
      </main>

      {/* Transparent Bar */}
      <TransparentBar />

      <main className="website-content__inner">
        {/* Contact Section */}
        <section id="contactus">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
