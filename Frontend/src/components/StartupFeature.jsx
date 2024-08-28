import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import image from "../assets/ImageUtility";
import StartupForm from "./StartupForm";
import backgroundImage from "../assets/StartupImages/image 26.svg";
import "typeface-montserrat";

const StartupBanner = () => {
  return (
    <Container className="MainContainer">
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "40px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h2" color="aqua" gutterBottom align="center">
          Register Your Startup or Recommend One to Us
        </Typography>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{ marginTop: "20px" }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              color="white"
              sx={{ fontSize: "1.5rem", lineHeight: 1.5, textAlign: "justify" }}
            >
              At Placement Bridge, we are committed to supporting innovative
              startups and helping them connect with top talent. Whether you're
              a startup founder looking to register your company, or a user who
              knows of an exciting startup that we should know about, we welcome
              your submissions. Provide us with the essential details about your
              startup or a recommendation, and let's work together to build a
              thriving startup ecosystem. Your input could help startups find
              the perfect team and unlock their true potential!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={image.StartupLife}
              alt="Startup Life"
              sx={{ width: "100%", maxWidth: "500px", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <StartupForm />
      </Box>
    </Container>
  );
};

export default StartupBanner;
