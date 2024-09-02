import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import StarryBackground from "./StarryBackground";
import "typeface-montserrat";

const Home = () => {
  useEffect(() => {
    // Dynamically adding the script to the document head
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return (
    <StarryBackground>
      <Box
        component="section"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          minHeight: { md: "100vh" },
          backgroundColor: "transparent",
          color: "#fff",
          padding: { xs: 2, md: 4 }, // Added padding for better spacing
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            marginBottom: { xs: 6, md: 0 },
            paddingLeft: { md: 1 },
            paddingRight: { md: 19 }, // Add space between text and image
          }}
        >
          <Typography
            variant="h2" // Increased text size
            component="div"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 550,
              // Adjusted space below the heading
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "2.2rem", md: "3.3rem" }, // Justify text alignment
            }}
          >
            Get a job at your dream company!
          </Typography>
          <Typography
            variant="h5" // Increased text size
            component="p"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: { xs: "1.3rem", md: "1.5rem" },
              color: "#00d3e8",
              textAlign: { xs: "justify", md: "justify" }, // Justify text alignment
              paddingRight: { xs: 3, md: 0 },
              paddingLeft: { xs: 3, md: 0 },
              marginTop: { xs: 3, md: 7 },
              marginBottom: { xs: 0 },
              // Added space above the paragraph
            }}
          >
            We offer top-notch information that fits you and helps you get
            closer to your dream job while giving you the perfect expertise for
            your job needs.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <dotlottie-player
            src="https://lottie.host/38f47193-a037-47c4-b9fa-77d344d92875/RDcqvzDyO3.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", maxWidth: "700px", height: "auto" }}
            loop
            autoplay
          ></dotlottie-player>
        </Box>
      </Box>
    </StarryBackground>
  );
};

export default Home;
