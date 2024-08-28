import React, { useState, useEffect } from "react";
import HackathonCard from "./HackathonCard";
import "../styles/Hackathon.css";
import hackathonsData from "../data/hackathons.json";
import { Pagination, TextField, Box, Typography, Stack } from "@mui/material";
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

const Hackathons = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 7; // Define how many items per page
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Scroll to the top with a fast speed (e.g., 200ms)
    scrollToTop(1);
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1); // Reset to first page when a new search is performed
  };

  const filteredTech = hackathonsData.filter((hack) =>
    hack.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedHackathons = filteredTech.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="website-content">
      <section className="technology-container">
        <Box className="header-section">
          <Typography variant="h4" component="h1" className="page-title">
            Hackathons
          </Typography>
          <TextField
            label="Search Hackathon"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
          />
        </Box>
      </section>

      <section className="hackathons">
        {paginatedHackathons.map((hackathon, index) => (
          <React.Fragment key={index}>
            <HackathonCard {...hackathon} />
            <hr />
          </React.Fragment>
        ))}
        <Stack
          spacing={2}
          className="pagination"
          sx={{ alignItems: "center", color: "white" }}
        >
          <Pagination
            count={Math.ceil(hackathonsData.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </section>
    </div>
  );
};

export default Hackathons;
