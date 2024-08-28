import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  Link as MuiLink,
  Button,
} from "@mui/material";
import "../styles/JobDetail.css";
import "typeface-montserrat";

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

  return (
    <Container className="job-detail">
      <Paper className="job-detail-paper">
        <img
          src={job.companyLogo}
          alt={`${job.companyName} logo`}
          className="company-logo"
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
        <Typography variant="h6">
          <MuiLink href={job.companyWebsiteLink} target="_blank" rel="noopener">
            Company Website
          </MuiLink>
        </Typography>
        <Typography variant="h6">
          <MuiLink href={job.linkedInLink} target="_blank" rel="noopener">
            LinkedIn
          </MuiLink>
        </Typography>
        {job.jobTitle.toLowerCase() === "frontend developer" && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleRoadmapClick}
          >
            View Frontend Developer Roadmap
          </Button>
        )}
      </Paper>
    </Container>
  );
};

export default JobDetail;
