import React, { useState } from "react";
import SubjectCard from "./SubjectCard";
import subjects from "../data/subjects.json";
import {
  Pagination,
  TextField,
  Box,
  Typography,
  Stack,
  Divider,
} from "@mui/material";

const Subjects = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

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
    <div>
      <section className="technology-container">
        <Box
          className="header-section"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center", // Center horizontally
            margin: "0 auto",
            maxWidth: "1200px", // Align with card width
            padding: "0 20px", // Add some padding on the sides
            marginBottom: "20px", // Space between header and cards
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            className="page-title"
            sx={{ marginRight: 2 }} // Add some space between title and search bar
          >
            Core IT Subjects
          </Typography>
          <TextField
            label="Search Subject"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
            sx={{ width: "400px" }} // Set a fixed width to the search bar
          />
        </Box>
        <div className="main-container">
          {currentItems.map((sub, index) => (
            <React.Fragment key={index}>
              <SubjectCard
                image={sub.image}
                altText={sub.altText}
                title={sub.subject}
                description={sub.description}
                projectLink={sub.projectLink}
                youtubeLink={sub.youtubeLink}
                articleLink={sub.articleLink}
                Objective1={sub.Objective1}
                Objective2={sub.Objective2}
              />
              <Divider
                sx={{
                  width: { xs: "90%", sm: "75%" }, // Match card width
                  margin: "80px auto", // Center horizontally and add vertical margin
                  backgroundColor: "aqua", // Adjust color as needed
                }}
              />
            </React.Fragment>
          ))}
        </div>
        <Stack
          spacing={2}
          sx={{
            alignItems: "center",
            color: "white",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Pagination
            count={Math.ceil(subjects.length / itemsPerPage)}
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
