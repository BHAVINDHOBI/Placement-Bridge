import React, { useState, useEffect } from "react";
import HackathonCard from "./HackathonCard";
import "../styles/Hackathon.css";
import hackathonsData from "../data/hackathons.json";
import {
  Pagination,
  TextField,
  Box,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import "typeface-montserrat";
import { BsFillPlusCircleFill } from "react-icons/bs";

import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import StarryBackground from "./StarryBackground";

const Hackathons = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 7; // Define how many items per page
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

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
  const handleFabClick = () => {
    navigate("/add-hackathon"); // Navigate to the StartUpFeature route
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
      <div className="website-content">
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
              maxWidth: "1200px",
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
                  fontSize: {
                    xs: "1.4rem", // Font size for extra-small devices (mobile)
                    sm: "1.7rem", // Font size for small devices (tablets)
                    md: "2rem", // Font size for medium devices (desktop)
                  },
                }}
              >
                Hackathon Hub
              </Typography>
              <Box
                sx={{
                  width: { xs: "40px", sm: "50px", md: "60px" }, // Adjust the width for different screen sizes
                  height: { xs: "40px", sm: "50px", md: "60px" },

                  marginRight: { xs: 2.5 },
                }}
              >
                <dotlottie-player
                  src="https://lottie.host/1dcd1131-9ef2-4105-800a-4b889cecf2b5/q61RXt9z37.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%", height: "100%" }}
                  loop
                  autoplay
                ></dotlottie-player>
              </Box>
            </Box>

            <TextField
              label="Search Hackathon"
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
        </section>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-end", md: "flex-end" },
            marginBottom: { xs: "10px", sm: "15px", md: "20px" },
            marginRight: { xs: "-215px", sm: "85px", md: "120px", lg: "45px" },
          }}
        >
          <Typography sx={{ marginRight: "10px" }} variant="h6">
            Add Hackathon{" "}
          </Typography>
          <BsFillPlusCircleFill
            size={40}
            color="aqua"
            onClick={handleFabClick}
            cursor="pointer"
          />
        </Box>

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
    </StarryBackground>
  );
};

export default Hackathons;
