import React from "react";
import { Box, Typography } from "@mui/material";
import "typeface-montserrat";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: "#1c1c1c",
      padding: { xs: "15px 10px", sm: "20px 15px", md: "30px 20px" }, // Responsive padding
      textAlign: "center",
      mt: "auto", // Pushes footer to the bottom
    }}
  >
    <Typography
      variant="body2"
      sx={{
        color: "#ffffff",
        fontFamily: "Montserrat, sans-serif",
        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" }, // Responsive font size
      }}
    >
      &copy; 2024 Placement Bridge. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
