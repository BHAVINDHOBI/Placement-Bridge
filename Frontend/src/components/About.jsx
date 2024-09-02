import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import image from "../assets/ImageUtility";
import "typeface-montserrat";

const About = () => (
  <Box
    component="section"
    sx={{
      padding: { xs: "20px", sm: "40px", md: "60px" },
      fontFamily: "Montserrat, sans-serif",
    }}
    id="About"
  >
    <Grid
      container
      spacing={4}
      alignItems="center"
      justifyContent="center"
      sx={{
        maxWidth: "1200px",
      }}
    >
      {/* About Text */}
      <Grid
        item
        xs={12}
        md={6}
        data-aos="fade-right"
        data-aos-duration="900"
        sx={{ justifyContent: "space-between" }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontFamily: "Montserrat, sans-serif",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Adjust font size for different screen sizes
          }}
        >
          ABOUT US
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            lineHeight: 1.8,
            color: "white",
            fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
            textAlign: "justify", // Justify text alignment
          }}
        >
          Step into the transformative world of IT excellence with Placement
          Bridge! Discover career opportunities with our recruitment feature,
          offering detailed roadmaps for each role's success. Stay informed on
          upcoming hackathons, delve into core IT subjects through curated
          links, connect with innovative startups, and explore the latest
          industry-demanded technologies. Seamlessly integrating resources,
          we're your one-stop destination for navigating the dynamic landscape
          of IT careers. Join us and propel your journey to success!
        </Typography>
      </Grid>

      {/* About Image */}
      <Grid
        item
        xs={12}
        md={6}
        data-aos="fade-down-left"
        data-aos-duration="900"
        display="flex"
        justifyContent="center"
      >
        <Box
          component="img"
          src={image.AboutHome}
          alt="About us"
          sx={{
            width: { xs: "100%", sm: "90%", md: "85%", lg: "100%" }, // Increase image size with responsive values
            borderRadius: 2,
            marginLeft: { xs: 0, md: 7 },
          }}
        />
      </Grid>
    </Grid>
  </Box>
);

export default About;
