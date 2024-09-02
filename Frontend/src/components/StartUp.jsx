import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Pagination,
  Stack,
  Divider,
  Button,
  Fab,
  IconButton,
} from "@mui/material";

import StartUpCard from "./StartUpCard";
import StartUps from "../data/StartUp.json";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import StarryBackground from "./StarryBackground";

const StartUp = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when a new search is performed
  };

  const filteredStartUps = StartUps.filter((startup) =>
    startup.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStartUps.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleFabClick = () => {
    navigate("/add-startup"); // Navigate to the StartUpFeature route
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <StarryBackground>
      <div>
        <section className="startup-container">
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
              StartUps
            </Typography>
            <TextField
              label="Search Startup"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-bar"
              sx={{ width: "400px" }} // Set a fixed width to the search bar
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-end", md: "flex-end" },
              marginBottom: { xs: "10px", sm: "15px", md: "20px" },
              marginRight: {
                xs: "-215px",
                sm: "85px",
                md: "120px",
                lg: "180px",
              },
            }}
          >
            <Typography sx={{ marginRight: "10px" }} variant="h6">
              Add Startup{" "}
            </Typography>
            <BsFillPlusCircleFill
              size={40}
              color="aqua"
              onClick={handleFabClick}
              cursor="pointer"
            />
          </Box>

          <div className="main-container">
            {currentItems.map((startup, index) => (
              <React.Fragment key={index}>
                <StartUpCard
                  imagesrc={startup.imagesrc}
                  altText={startup.altText}
                  Name={startup.Name}
                  Description={startup.Description}
                  WebsiteLink={startup.WebsiteLink}
                  Date={startup.Date}
                  CurrentlyHiring={startup.CurrentlyHiring}
                  HiringLink={startup.HiringLink}
                  Founder={startup.Founder}
                  ParentCompany={startup.ParentCompany}
                  IndustrySector={startup.IndustrySector}
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
              count={Math.ceil(filteredStartUps.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              sx={{ "& .MuiPaginationItem-root": { color: "white" } }}
            />
          </Stack>
        </section>
      </div>
    </StarryBackground>
  );
};

export default StartUp;
