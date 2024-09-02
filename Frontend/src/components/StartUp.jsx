import React, { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div>
        <section className="startup-container">
          <Box
            className="header-section"
            sx={{
              position: "fixed",
              top: 0,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              maxWidth: "1536px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "0px 10px",
              backgroundColor: isScrolled
                ? "rgba(0, 0, 0, 0.5)"
                : "transparent",
              backdropFilter: isScrolled ? "blur(5px)" : "none",
              WebkitBackdropFilter: isScrolled ? "blur(5px)" : "none",
              borderRadius: isScrolled ? "5px" : "0px",
              border: isScrolled
                ? "1px solid rgba(255, 255, 255, 0.2)"
                : "none",
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
                  marginRight: { xs: 3, md: 2 },
                  fontSize: {
                    xs: "1.4rem", // Font size for extra-small devices (mobile)
                    sm: "1.7rem", // Font size for small devices (tablets)
                    md: "2rem", // Font size for medium devices (desktop)
                  },
                }}
              >
                Startup
              </Typography>
              <Box
                sx={{
                  width: { xs: "40px", sm: "50px", md: "70px" }, // Adjust the width for different screen sizes
                  height: { xs: "40px", sm: "50px", md: "70px" },

                  marginRight: { xs: 13, md: 7 },
                }}
              >
                <dotlottie-player
                  src="https://lottie.host/c509f265-946c-43b2-946a-3f35f8c526e8/QGTFSp8IwQ.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%", height: "100%" }}
                  loop
                  autoplay
                ></dotlottie-player>
              </Box>
            </Box>

            <TextField
              label="Search Startup"
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
              padding: { xs: "50px", md: "40px" }, // Apply padding only on mobile (xs)
            }}
          ></Box>
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
