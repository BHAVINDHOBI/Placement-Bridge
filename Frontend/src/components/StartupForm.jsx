import React, { useState } from "react";
import "../styles/StartupForm.css";
import { IoMdPaperPlane } from "react-icons/io";
import { IoReloadSharp } from "react-icons/io5";

const StartupForm = () => {
  const [formData, setFormData] = useState({
    startupName: "",
    websiteLink: "",
    abstract: "",
    cinNumber: "",
    founder: "",
    startupContact: "",
    userEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="Form">
      <h1 className="FormHeading">Add Details</h1>
      <form
        className="form"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        {/* Hidden input for access key */}
        <input
          type="hidden"
          name="access_key"
          value="6869febd-c760-4109-9f95-96af79e394e1"
        />

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startupName">
              Startup Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="startupName"
              name="startupName"
              value={formData.startupName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="websiteLink">Website Link</label>
            <input
              type="text"
              id="websiteLink"
              name="websiteLink"
              value={formData.websiteLink}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group textarea-group">
          <label htmlFor="abstract">
            Abstract of Startup <span className="required">*</span>
          </label>
          <textarea
            id="abstract"
            name="abstract"
            rows="6"
            value={formData.abstract}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cinNumber">CIN Number</label>
            <input
              type="text"
              id="cinNumber"
              name="cinNumber"
              value={formData.cinNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="founder">Founder</label>
            <input
              type="text"
              id="founder"
              name="founder"
              value={formData.founder}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startupContact">Startup Contact</label>
            <input
              type="text"
              id="startupContact"
              name="startupContact"
              value={formData.startupContact}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">User's Email</label>
            <input
              type="text"
              id="userEmail"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            <IoMdPaperPlane /> SUBMIT
          </button>
          <button type="reset" className="reset-btn">
            <IoReloadSharp /> RESET
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartupForm;
