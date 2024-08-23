import React, { useState } from "react";
import TechnologyCard from "./LatestTechnologiesCard";
import technologies from "../data/technologies.json";
import { Pagination, TextField, Box, Typography, Stack } from "@mui/material";

const LatestTechnology = () => {
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1); // Reset to first page when a new search is performed
  };

  const filteredTech = technologies.filter((tech) =>
    tech.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = technologies.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
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
                imageSrc={tech.image}
                altText={tech.altText}
                title={tech.subject}
                description={tech.description}
                youtubeLink={tech.youtubeLink}
                articleLink={tech.articleLink}
                Objective1={tech.Objective1}
                Objective2={tech.Objective2}
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
            count={Math.ceil(technologies.length / itemsPerPage)}
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
