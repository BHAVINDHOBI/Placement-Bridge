import React, { useState, useEffect } from "react";
import SubjectCard from "./SubjectCard";
import subjects from "../data/subjects.json";
import {
  Pagination,
  TextField,
  Box,
  Typography,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import StarryBackground from "./StarryBackground";
import "typeface-montserrat";

const Subjects = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

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
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: {
                    xs: "1.4rem", // Font size for extra-small devices (mobile)
                    sm: "1.7rem", // Font size for small devices (tablets)
                    md: "2rem", // Font size for medium devices (desktop)
                  },
                }}
              >
                Core Computing Concepts
              </Typography>
              <Box
                sx={{
                  width: { xs: "40px", sm: "50px", md: "60px" }, // Adjust the width for different screen sizes
                  height: { xs: "40px", sm: "50px", md: "60px" },

                  marginRight: { xs: 2.5 },
                }}
              >
                <dotlottie-player
                  src="https://lottie.host/15963366-c0da-4168-9111-557d601f7661/REMgN97oS8.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%", height: "100%" }}
                  loop
                  autoplay
                ></dotlottie-player>
              </Box>
            </Box>

            <TextField
              label="Search Subject"
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
    </StarryBackground>
  );
};

export default Subjects;
