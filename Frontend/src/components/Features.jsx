import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Divider,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../assets/ImageUtility";

const Features = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const featureData = [
    {
      title: "Recruitments",
      image: image.RecruitmentLogo,
      alt: "recruitment_logo",
      link: "/recruitments",
      aos: "fade-down-right",
    },
    {
      title: "Core IT Subjects",
      image: image.CoreITIcon,
      alt: "core_it_icon",
      link: "/subjects",
      aos: "fade-down-left",
    },
    {
      title: "Hackathon Hub",
      image: image.HackathonIcon,
      alt: "hackathon_icon",
      link: "/hackathons",
      aos: "fade-up-right",
    },
    {
      title: "Latest Technologies",
      image: image.LatesttechIcon,
      alt: "latest_tech_icon",
      link: "/technologies",
      aos: "fade-up-left",
    },
    {
      title: "StartUp",
      image: image.StartUpLogo,
      alt: "startup_logo",
      link: "/startup",
      aos: "fade-up",
      newLogo: image.NewLogo,
    },
  ];

  return (
    <Box sx={{ mt: 10, px: 2 }} id="Services">
      <Grid container spacing={6} justifyContent="center">
        {featureData.map((feature, index) => (
          <Grid item xs={11} sm={6} md={4.5} key={index}>
            <Card
              sx={{
                width: "100%",
                height: 190,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                background:
                  "linear-gradient(96deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 62%, rgba(255, 255, 255, 0.2) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                borderRadius: 2,
                padding: 2,
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
              data-aos={feature.aos}
              onClick={() => navigate(feature.link)}
            >
              <CardMedia
                component="img"
                sx={{
                  width: "50%",
                  height: "100%",
                  objectFit: "contain",
                  marginRight: 2,
                }}
                image={feature.image}
                alt={feature.alt}
              />

              <CardContent
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "0",
                }}
              >
                <Typography variant="h6" color="white" sx={{ fontWeight: 500 }}>
                  {feature.title}
                </Typography>
              </CardContent>
              {feature.newLogo && (
                <Box
                  component="img"
                  src={feature.newLogo}
                  alt="new-logo"
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    width: "30px",
                    height: "30px",
                  }}
                />
              )}
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add a horizontal divider below the cards */}
      <Divider
        sx={{
          my: {
            xs: 8, // Small margin for extra small screens
            sm: 10, // Medium margin for small screens
            lg: 20, // Even larger margin for large screens
          },
          borderColor: "rgba(255, 255, 255, 0.3)",
        }}
      />
    </Box>
  );
};

export default Features;
