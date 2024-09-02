import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import image from "../assets/ImageUtility";
import backgroundImage from "../assets/HomePage_Imgs/AboutBackground.svg";
import "typeface-montserrat";

const TransparentBar = () => (
  <Box
    component="section"
    sx={{
      fontFamily: "Montserrat, sans-serif",
      marginTop: { xs: "50px", sm: "80px", md: "150px" },
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: { xs: "fit", md: "cover" },
      backgroundPosition: "center",
      width: "100%",
      height: { xs: "auto", md: "443px" },
      opacity: 0.75,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: { xs: "30px", sm: "60px", md: "75px" },
      padding: { xs: "20px", sm: "40px", md: "0" }, // Adjust padding for sm screens
    }}
  >
    <Typography
      variant="h3"
      component="header"
      data-aos="fade-right"
      data-aos-duration="700"
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: { xs: "24px", sm: "28px", md: "35px" }, // Adjusted font size for sm screens
        color: "#00FFF0",
        textAlign: "center",
        paddingTop: "20px",
        marginTop: "15px",
        fontWeight: 500,
      }}
    >
      We See
      <br />
      What Others Don't See
    </Typography>

    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      data-aos="fade-right"
      data-aos-duration="700"
    >
      {[
        { logo: image.SurveyLogo, label: "Survey" },
        { logo: image.PlanningLogo, label: "Planning" },
        { logo: image.DevelopLogo, label: "Develop" },
        { logo: image.ProvideLogo, label: "Provide" },
      ].map((item, index) => (
        <React.Fragment key={index}>
          <Grid item xs={5} sm={2}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "150px", sm: "170px", md: "204px" }, // Adjusted width for sm screens
                height: { xs: "150px", sm: "180px", md: "201px" }, // Adjusted height for sm screens
                border: "3px solid #0038FF",
                borderRadius: "100px",
                padding: "10px",
              }}
            >
              <img
                className="bar-logo"
                src={item.logo}
                alt={item.label.toLowerCase()}
                style={{ maxWidth: "100%", maxHeight: "100%" }} // Ensure logos are responsive
              />
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontSize: { xs: "20px", sm: "22px", md: "30px" }, // Adjusted font size for sm screens
                  fontWeight: 600,
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
          {index < 3 && (
            <Grid item xs={1} sm="auto">
              <img
                src={image.RightArrow}
                alt="arrow"
                className="arrow"
                style={{ width: "100%", maxWidth: "40px" }} // Adjust arrow size for better scaling
              />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  </Box>
);

export default TransparentBar;
