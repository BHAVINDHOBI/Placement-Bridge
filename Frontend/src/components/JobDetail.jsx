import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  Container,
  Typography,
  Paper,
  Button,
  Chip,
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  Language as CompanyIcon,
  Close as CloseIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";
import "../styles/JobDetail.css";

const JobDetail = ({ jobs }) => {
  const { jobId } = useParams();
  const job = jobs.find((job) => job.id == jobId);
  const navigate = useNavigate();
  const [openRoadmap, setOpenRoadmap] = useState(false);

  if (!job) {
    return <div>Job not found</div>;
  }

  // Split the benefits string into an array if it's a string
  const benefits =
    typeof job.benefits === "string"
      ? job.benefits.split(",").map((benefit) => benefit.trim())
      : Array.isArray(job.benefits)
      ? job.benefits
      : [];

  const handleRoadmapClick = () => {
    setOpenRoadmap(true);
  };

  const handleClose = () => {
    setOpenRoadmap(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = job.Roadmap; // Assuming you have the roadmap image URL in the job object
    link.download = "roadmap.png"; // You can set the name of the file here
    link.click();
  };

  // Split description into an array of strings separated by line breaks or bullet points
  const descriptionSections = job.description
    .split("\n")
    .filter((section) => section.trim() !== "");

  return (
    <Container className="job-detail">
      <Paper className="job-detail-paper">
        <Typography variant="h4" component="h2">
          <center>{job.jobTitle}</center>
        </Typography>
        <div className="job-header">
          <div className="job-title-container">
            <img
              src={job.companyLogo}
              alt={`${job.companyName} logo`}
              className="company-logo"
            />
          </div>
        </div>

        <div className="job-details-wrapper">
          <div className="job-details-section">
            <Typography variant="h5" className="job-detail-item">
              <strong>Company:</strong> {job.companyName}
            </Typography>
            <Typography variant="h5" className="job-detail-item">
              <strong>Location:</strong> {job.location}
            </Typography>
          </div>

          <div className="job-details-salary">
            <Typography variant="h5" className="job-detail-item">
              <strong>Salary:</strong> {job.salary}
            </Typography>
            <Typography variant="h5" className="job-detail-item">
              <strong>Job Type:</strong> {job.jobType}
            </Typography>
          </div>
        </div>

        <div className="job-description-section">
          <Typography
            variant="h5"
            style={{ marginBottom: "16px", fontWeight: "bold" }}
          >
            Job Description:
          </Typography>
          <ul style={{ paddingLeft: "20px" }}>
            {descriptionSections.map((section, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                {section}
              </li>
            ))}
          </ul>

          <Typography
            variant="h5"
            style={{ marginTop: "24px", fontWeight: "bold" }}
          >
            Benefits:
          </Typography>
          <div className="benefits-section">
            {benefits.length > 0 &&
              benefits.map((benefit, index) => (
                <Chip key={index} label={benefit} className="benefit-chip" />
              ))}
          </div>
        </div>

        <div className="links">
          <a
            href={job.companyWebsiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <CompanyIcon className="company-icon" />
            <span className="visit-here-text">Visit Website</span>
          </a>
          <a
            href={job.linkedInLink}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="button-container">
          <Button
            variant="contained"
            color="primary"
            onClick={handleRoadmapClick}
            className="button"
          >
            <strong>View Roadmap</strong>
          </Button>
        </div>

        <Modal open={openRoadmap} onClose={handleClose}>
          <Box className="modal-box">
            <IconButton
              aria-label="close"
              onClick={handleClose}
              className="close-button"
            >
              <CloseIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
              className="download-button"
            >
              Download
            </Button>
            <img src={job.Roadmap} alt="Roadmap" className="roadmap-image" />
          </Box>
        </Modal>
      </Paper>
    </Container>
  );
};

export default JobDetail;
