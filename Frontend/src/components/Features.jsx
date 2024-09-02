import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "typeface-montserrat";

const Features = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();

    // Load the Lottie Player script
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const featureData = [
    {
      title: "Recruitments",
      lottieSrc:
        "https://lottie.host/7c053bef-c225-4608-94f5-c425dbe3c056/5xNz1X3V9O.json",
      link: "/recruitments",
      aos: "fade-down-right",
    },
    {
      title: "Core Computing Concepts",
      lottieSrc:
        "https://lottie.host/15963366-c0da-4168-9111-557d601f7661/REMgN97oS8.json",
      link: "/subjects",
      aos: "fade-down-left",
    },
    {
      title: "Hackathon Hub",
      lottieSrc:
        "https://lottie.host/1dcd1131-9ef2-4105-800a-4b889cecf2b5/q61RXt9z37.json", // Replace with the actual Lottie URL
      link: "/hackathons",
      aos: "fade-up-right",
    },
    {
      title: "Latest Technologies",
      lottieSrc:
        "https://lottie.host/bb790e49-6113-49d2-b81c-bd93c8fa381d/pNiXhqrFbn.json", // Replace with the actual Lottie URL
      link: "/technologies",
      aos: "fade-up-left",
    },
    {
      title: "StartUp",
      lottieSrc:
        "https://lottie.host/c509f265-946c-43b2-946a-3f35f8c526e8/QGTFSp8IwQ.json", // Replace with the actual Lottie URL
      link: "/startup",
      aos: "fade-up",
    },
  ];

  return (
    <Box
      sx={{ mt: 10, px: 2, fontFamily: "Montserrat, sans-serif" }}
      id="Services"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%", // Ensure parent takes full width
        }}
      >
        <Box
          sx={{
            border: "1px solid gray",
            padding: 2,
            marginBottom: 5,
            width: "fit-content",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Services
          </Typography>
        </Box>
      </Box>

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
              <Box
                sx={{
                  width: "50%",
                  height: "100%",
                  marginRight: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                dangerouslySetInnerHTML={{
                  __html: `<dotlottie-player src="${feature.lottieSrc}" background="transparent" speed="1" style="width: 100%; height: 100%;" loop autoplay></dotlottie-player>`,
                }}
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
                <Typography
                  variant="h6"
                  color="white"
                  sx={{
                    fontWeight: 500,
                    fontSize: 25,
                    marginTop: 3,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {feature.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider
        sx={{
          my: {
            xs: 8,
            sm: 10,
            lg: 20,
          },
          borderColor: "rgba(255, 255, 255, 0.3)",
        }}
      />
    </Box>
  );
};

export default Features;
