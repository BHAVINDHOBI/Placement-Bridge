import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Paper, Button, Chip } from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  Language as CompanyIcon,
} from "@mui/icons-material";
import "../styles/JobDetail.css";

const JobDetail = ({ jobs }) => {
  const { jobId } = useParams();
  const job = jobs.find((job) => job.id === jobId);
  const navigate = useNavigate();

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
    navigate("/frontend-roadmap");
  };

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
          <Typography variant="h5">
            <strong>Job Description:</strong>
          </Typography>
          <Typography variant="body1" className="job-description">
            {job.description}
          </Typography>

          <Typography variant="h5">
            <strong>Benefits:</strong>
          </Typography>
          <div className="benefits-section">
            {benefits.length > 0 ? (
              benefits.map((benefit, index) => (
                <Chip key={index} label={benefit} className="benefit-chip" />
              ))
            ) : (
              <Typography variant="body2">No benefits listed</Typography>
            )}
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
      </Paper>
    </Container>
  );
};

export default JobDetail;
