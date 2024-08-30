import React, { useState } from "react";
import TechnologyCard from "./LatestTechnologiesCard";
import technologies from "../data/technologies.json";
import {
  Pagination,
  TextField,
  Box,
  Typography,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import "typeface-montserrat";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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
  const currentItems = filteredTech.slice(indexOfFirstItem, indexOfLastItem);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="main-technology">
      <section className="technology-container">
        <IconButton
          sx={{
            position: { xs: "fixed", sm: "absolute" },
            top: { xs: "10px", sm: "20px" },
            left: { xs: "10px", sm: "20px" },
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
            zIndex: 1, // Ensure the button is above other content
          }}
          onClick={handleGoBack}
        >
          <ArrowBack />
        </IconButton>
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
            Latest Technology
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
          {currentItems.map((tech, index) => (
            <React.Fragment key={index}>
              <TechnologyCard
                imageSrc={tech.image}
                altText={tech.altText}
                title={tech.subject}
                description={tech.description}
                projectLink={tech.projectLink}
                youtubeLink={tech.youtubeLink}
                articleLink={tech.articleLink}
                Objective1={tech.Objective1}
                Objective2={tech.Objective2}
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
