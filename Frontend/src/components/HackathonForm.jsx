import React, { useState } from "react";
import "../styles/HackathonForm.css";
import { IoMdPaperPlane } from "react-icons/io";
import { IoReloadSharp } from "react-icons/io5";
import "typeface-montserrat";

const HackathonForm = () => {
  const initialFormData = {
    startupName: "",
    websiteLink: "",
    cinNumber: "",
    founder: "",
    startupContact: "",
    userEmail: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
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
              Hackathon Name <span className="required">*</span>
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
            <label htmlFor="websiteLink">
              Registration Link <span className="required">*</span>
            </label>

            <input
              type="text"
              id="websiteLink"
              name="websiteLink"
              value={formData.websiteLink}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cinNumber">Mode</label>
            <input
              type="text"
              id="cinNumber"
              name="cinNumber"
              value={formData.cinNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="founder">Date</label>
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
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="prize">Prize</label>
            <input
              type="text"
              id="prize"
              name="prize"
              value={formData.prize}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startupContact">
              Organizing Team Contact <span className="required">*</span>
            </label>
            <input
              type="text"
              id="startupContact"
              name="startupContact"
              value={formData.startupContact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">
              User's Email <span className="required">*</span>
            </label>
            <input
              type="text"
              id="userEmail"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            <IoMdPaperPlane /> SUBMIT
          </button>
          <button type="button" className="reset-btn" onClick={handleReset}>
            <IoReloadSharp /> RESET
          </button>
        </div>
      </form>
    </div>
  );
};

export default HackathonForm;
