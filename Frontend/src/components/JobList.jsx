import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "./JobCard";
import {
  Container,
  Grid,
  Pagination,
  TextField,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import "../styles/JobList.css";
import "typeface-montserrat";
import StarryBackground from "./StarryBackground";

const JobList = ({ jobs }) => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [isScrolled, setIsScrolled] = useState(false);
  const jobsPerPage = 6;
  const startIndex = (page - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <StarryBackground>
      <Container className="jobHeader">
        {/* Search bar */}
        <Box
          className="header-section"
          sx={{
            position: "fixed",
            top: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "0px 10px",
            backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.5)" : "transparent",
            backdropFilter: isScrolled ? "blur(5px)" : "none",
            WebkitBackdropFilter: isScrolled ? "blur(5px)" : "none",
            borderRadius: isScrolled ? "5px" : "0px",
            border: isScrolled ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
            transition:
              "background-color 0.3s ease, border-radius 0.3s ease, border 0.3s ease",
          }}
        >
          <IconButton
            sx={{
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              marginRight: { md: "20px" },
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
            onClick={handleGoBack}
          >
            <ArrowBack />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              className="page-title"
              sx={{
                marginLeft: 1,
                fontSize: {
                  xs: "1.4rem", // Font size for extra-small devices (mobile)
                  sm: "1.7rem", // Font size for small devices (tablets)
                  md: "2rem", // Font size for medium devices (desktop)
                },
              }}
            >
              Recruitments
            </Typography>
            <Box
              sx={{
                width: { xs: "40px", sm: "50px", md: "60px" }, // Adjust the width for different screen sizes
                height: { xs: "40px", sm: "50px", md: "60px" },

                marginRight: { xs: 2.5 },
              }}
            >
              <dotlottie-player
                src="https://lottie.host/7c053bef-c225-4608-94f5-c425dbe3c056/5xNz1X3V9O.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "100%" }}
                loop
                autoplay
              ></dotlottie-player>
            </Box>
          </Box>

          <TextField
            label="Search Companies or Job title"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
            sx={{ width: "400px", marginLeft: "auto" }}
          />
        </Box>
        <Box
          sx={{
            marginTop: { xs: "50px", md: "50px" }, // Apply marginTop only on mobile (xs)
            padding: { xs: "40px", md: "40px" }, // Apply padding only on mobile (xs)
          }}
        ></Box>

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
    </StarryBackground>
  );
};

export default JobList;
