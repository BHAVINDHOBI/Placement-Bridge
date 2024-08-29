import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Paper, Button } from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  Language as CompanyIcon,
} from "@mui/icons-material"; // Import LinkedIn and Company icons
import "../styles/JobDetail.css";

const JobDetail = ({ jobs }) => {
  const { jobId } = useParams();
  const job = jobs.find((job) => job.id === jobId);
  const navigate = useNavigate();

  if (!job) {
    return <div>Job not found</div>;
  }
  const benefits = Array.isArray(job.benefits) ? job.benefits : [job.benefits];

  const handleRoadmapClick = () => {
    navigate("/frontend-roadmap");
  };

  const openCompanyWebsite = () => {
    window.open(job.companyWebsiteLink, "_blank");
  };

  return (
    <Container className="job-detail">
      <Paper className="job-detail-paper">
        <img
          src={job.companyLogo}
          alt={`${job.companyName} logo`}
          className="company-logo"
          onClick={openCompanyWebsite} // Opens company website when logo is clicked
        />
        <Typography variant="h4" component="h2">
          {job.jobTitle}
        </Typography>
        <Typography variant="h6">
          <strong>Company:</strong> {job.companyName}
        </Typography>
        <Typography variant="h6">
          <strong>Location:</strong> {job.location}
        </Typography>
        <Typography variant="h6">
          <strong>Salary:</strong> {job.salary}
        </Typography>
        <Typography variant="h6">
          <strong>Job Type:</strong> {job.jobType}
        </Typography>
        <Typography variant="body1" className="job-description">
          {job.description}
        </Typography>
        <Typography variant="h6">
          <strong>Benefits:</strong>
        </Typography>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <div className="links">
          <a
            href={job.companyWebsiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <img
              src={job.companyLogo}
              alt={`${job.companyName} logo`}
              className="companylogo"
            />
            <a
              href={job.linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </a>
        </div>
        {job.jobTitle.toLowerCase() === "frontend developer" && (
          <div className="button-container">
            <Button
              variant="contained"
              color="primary"
              onClick={handleRoadmapClick}
              className="button"
            >
              View Frontend Developer Roadmap
            </Button>
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default JobDetail;
