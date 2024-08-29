import React, { useState, useEffect } from "react";
import SubjectCard from "./SubjectCard";
import subjects from "../data/subjects.json";
import "../styles/Subjects.css";
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

const Subjects = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Scroll to the top with a fast speed (e.g., 200ms)
    scrollToTop(200);
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when a new search is performed
  };

  const filteredSubjects = subjects.filter((sub) =>
    sub.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSubjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="website-content">
      <section className="technology-container">
        <Box className="header-section">
          <Typography variant="h4" component="h1" className="page-title">
            Core IT Subjects
          </Typography>
          <TextField
            label="Search Subject"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
          />
        </Box>
        <div className="main-container">
          {currentItems.map((sub, index) => (
            <React.Fragment key={index}>
              <SubjectCard
                imageSrc={sub.image}
                altText={sub.altText}
                title={sub.subject}
                description={sub.description}
                youtubeLink={sub.youtubeLink}
                articleLink={sub.articleLink}
              />
              <div className="horizontal-line">
                <hr />
              </div>
            </React.Fragment>
          ))}
        </div>
        <Stack spacing={2} sx={{ alignItems: "center", color: "white" }}>
          <Pagination
            count={Math.ceil(filteredSubjects.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            sx={{ "& .MuiPaginationItem-root": { color: "white" } }}
          />
        </Stack>
      </section>
    </div>
  );
};

export default Subjects;
