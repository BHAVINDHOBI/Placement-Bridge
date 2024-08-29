import React from "react";
import { Container, Typography, Box, Grid, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import image from "../assets/ImageUtility";
import HackathonForm from "./HackathonForm";
import "typeface-montserrat";
import backgroundimage from "../assets/HackathonImages/pexels-fauxels-3183150 1.svg";
const HackathonFeature = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/hackathons");
  };
  return (
    <Container className="MainContainer">
      <IconButton
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for better visibility
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Darken background on hover
          },
        }}
        onClick={handleGoBack} // Handle redirection when clicked
      >
        <ArrowBack />
      </IconButton>
      <Box
        sx={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "40px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h2" color="aqua" gutterBottom align="center">
          Register Your Hackathon or Suggest One to Us
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
              At Placement Bridge, we are dedicated to keeping you informed
              about the latest opportunities to showcase your skills and
              creativity. Our Hackathon feature offers comprehensive details on
              upcoming hackathons. Whether you're an experienced coder or just
              starting, these hackathons are a great way to challenge yourself,
              learn new things, and win exciting prizes. Additionally, if you
              know of a hackathon we should feature or if you're organizing one
              yourself, you can easily suggest or register it with us. Stay
              ahead of the curve, contribute to the community, and never miss
              out on a chance to participate in these innovative competitions!
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
        <HackathonForm />
      </Box>
    </Container>
  );
};

export default HackathonFeature;
