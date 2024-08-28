import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import {
  Container,
  Grid,
  Pagination,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import "../styles/JobList.css";
import "typeface-montserrat";

const scrollToTop = (duration) => {
  const scrollHeight = window.scrollY;
  const startTime = performance.now();

  const scrollStep = () => {
    const elapsedTime = performance.now() - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    window.scrollTo(0, scrollHeight * (1 - progress));

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  };

  requestAnimationFrame(scrollStep);
};

const JobList = ({ jobs }) => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const jobsPerPage = 6;
  const startIndex = (page - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;

  useEffect(() => {
    // Scroll to the top with a fast speed (e.g., 200ms)
    scrollToTop(200);
  }, []);

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1); // Reset to first page when a new search is performed
  };

  // Filter jobs based on search query
  const filteredJobs = jobs.filter(
    (job) =>
      job.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container className="jobHeader">
      {/* Search bar */}
      <Box className="header-section">
        <Typography variant="h4" component="h1" className="page-title">
          Companies
        </Typography>
        <TextField
          label="Search Companies or Job title"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </Box>

      {/* Top Pagination */}
      <Pagination
        count={Math.ceil(filteredJobs.length / jobsPerPage)}
        page={page}
        onChange={handlePageChange}
        className="pagination"
      />

      <Grid container spacing={2} className="job-list">
        {filteredJobs.slice(startIndex, endIndex).map((job, index) => (
          <Grid item xs={12} key={index}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>

      {/* Bottom Pagination */}
      <Pagination
        count={Math.ceil(filteredJobs.length / jobsPerPage)}
        page={page}
        onChange={handlePageChange}
        className="pagination"
      />
    </Container>
  );
};

export default JobList;
