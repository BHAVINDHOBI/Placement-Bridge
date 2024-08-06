import React from "react";
import "../styles/Contact.css";

const Contact = () => (
  <section className="contact" id="contact">
    <div
      className="contact-container"
      data-aos="fade-up-right"
      data-aos-duration="800"
    >
      <div className="contact-card">
        <div className="infos">
          <h6 className="section-subtitle">Get Here</h6>
          <h6 className="section-title mb-4">Contact Us</h6>

          <div className="item">
            <i className="fa-solid fa-mobile-screen-button"></i>
            <div>
              <h5>Phone Number</h5>
              <p>940926615</p>
            </div>
          </div>
          <div className="item">
            <i className="fa-regular fa-envelope"></i>
            <div className="mb-0">
              <h5>Email Address</h5>
              <p>shreykoradiya200310@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="form">
          <h6 className="section-subtitle">Available 24/7</h6>
          <h6 className="section-title mb-4">Get In Touch</h6>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                id="exampleInputPassword1"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="contact-message"
                id=""
                cols="30"
                rows="7"
                className="form-control form-control-lg"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-square btn-primary btn-block btn-lg mt-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
