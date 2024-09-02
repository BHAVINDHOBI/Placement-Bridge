import React, { useState, useEffect } from "react";
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
import StarryBackground from "./StarryBackground";

const LatestTechnology = () => {
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="main-technology">
        <section className="technology-container">
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
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: {
                    xs: "1.4rem", // Font size for extra-small devices (mobile)
                    sm: "1.7rem", // Font size for small devices (tablets)
                    md: "2rem", // Font size for medium devices (desktop)
                  },
                }}
              >
                Latest Technologies
              </Typography>
              <Box
                sx={{
                  width: { xs: "40px", sm: "50px", md: "70px" }, // Adjust the width for different screen sizes
                  height: { xs: "40px", sm: "50px", md: "70px" },

                  marginRight: { xs: 6, md: 7 },
                }}
              >
                <dotlottie-player
                  src="https://lottie.host/bb790e49-6113-49d2-b81c-bd93c8fa381d/pNiXhqrFbn.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%", height: "100%" }}
                  loop
                  autoplay
                ></dotlottie-player>
              </Box>
            </Box>

            <TextField
              label="Search Technologies"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-bar"
              sx={{
                width: "400px",
                marginLeft: "auto",
                fontFamily: "Montserrat, sans-serif",
              }}
            />
          </Box>
          <Box
            sx={{
              marginTop: { xs: "50px", md: "50px" }, // Apply marginTop only on mobile (xs)
              padding: { xs: "40px", md: "40px" }, // Apply padding only on mobile (xs)
            }}
          ></Box>
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
    </StarryBackground>
  );
};

export default LatestTechnology;
