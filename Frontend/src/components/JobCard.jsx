import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/JobCard.css";

const JobCard = ({ job }) => {
  return (
    <Card className="custom-job-card">
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          {/* Left Section: Company Logo and Info */}
          <Grid item xs={12} sm={4} md={3} className="left-section">
            <img
              src={job.companyLogo}
              alt={`${job.companyName} logo`}
              className="company-logo"
            />
            <Box className="company-info">
              {/* Company Name and Rating */}
              <Typography variant="h6">{job.companyName}</Typography>
            </Box>
          </Grid>

          {/* Divider */}
          <Divider
            orientation="vertical"
            flexItem
            style={{ marginLeft: "20px", borderColor: "#00ffff" }}
          />

          {/* Right Section: Job Details */}
          <Grid item xs={12} sm={7} md={8} className="right-section">
            {/* Job Title */}
            <Typography variant="h6" className="job-title">
              Recruitment for - {job.jobTitle}
            </Typography>
            <Box className="space-between-sections" />
            <Typography variant="h6" className="description-title">
              Description
            </Typography>
            <Typography variant="body2" className="description-text">
              {job.companyDescription}
            </Typography>

            {/* Space between description and meta info */}
            <Box className="space-between-sections" />

            <Grid container spacing={1} className="job-meta">
              <Grid item xs={6}>
                <Typography variant="body2">
                  <strong>Location:</strong> {job.location}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  <strong>Employees:</strong> {job.totalEmployees}
                </Typography>
              </Grid>
            </Grid>

            {/* View Details Button */}
            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Link to={`/job/${job.id}`} className="view-details-link">
                <Button variant="contained" color="primary">
                  View Details
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default JobCard;
