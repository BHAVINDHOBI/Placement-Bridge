import React, { useState, useEffect } from "react";
import TechnologyCard from "./LatestTechnologiesCard";
import technologies from "../data/technologies.json";
import "../styles/LatestTechnology.css";
import { Pagination, TextField, Box, Typography, Stack } from "@mui/material";

// Function to scroll to the top with a given duration
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

const LatestTechnology = () => {
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Scroll to the top with a fast speed (e.g., 200ms)
    scrollToTop(200);
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1); // Reset to first page when a new search is performed
  };

  const filteredTech = technologies.filter((tech) =>
    tech.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTech.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="website-content">
      <section className="technology-container">
        <Box className="header-section">
          <Typography variant="h4" component="h1" className="page-title">
            Latest Technologies
          </Typography>
          <TextField
            label="Search Tech"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
          />
        </Box>
        <div className="main-container">
          {currentItems.map((tech, index) => (
            <React.Fragment key={index}>
              <TechnologyCard
                imageSrc={tech.imageSrc}
                altText={tech.altText}
                title={tech.title}
                description={tech.description}
                youtubeLink={tech.youtubeLink}
                articleLink={tech.articleLink}
              />
              <div className="horizontal-line">
                <hr />
              </div>
            </React.Fragment>
          ))}
        </div>
        <Stack spacing={2} sx={{ alignItems: "center", color: "white" }}>
          <Pagination
            count={Math.ceil(filteredTech.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            sx={{ "& .MuiPaginationItem-root": { color: "white" } }}
          />
        </Stack>
      </section>
    </div>
  );
};

export default LatestTechnology;
