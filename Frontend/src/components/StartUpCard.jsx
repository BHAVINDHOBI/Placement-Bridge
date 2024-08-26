import React, { useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import image from "../assets/ImageUtility";

const StartUpCard = ({
  imagesrc,
  altText,
  Name,
  Description,
  WebsiteLink,
  Date,
  CurrentlyHiring,
  HiringLink,
  Founder,
  ParentCompany,
  IndustrySector,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "75%" },
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        transition: "height 0.5s ease",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          padding: 0,
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "30%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            gap: 2,
          }}
        >
          <Box
            sx={{
              padding: 1,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <picture>
              <img
                src={imagesrc}
                alt={altText}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "13px",
                }}
              />
            </picture>
          </Box>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontWeight: "Bold",
              fontSize: { xs: "20px", sm: "24px" },
              fontFamily: "Roboto Serif",
              color: "black",
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "center",
            }}
          >
            {Name}
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "black",
            display: { xs: "none", sm: "block" }, // Hide on small screens
            marginTop: 4, // Add space at the top
            marginBottom: 2, // Add space at the bottom
          }}
        />
        <Box
          sx={{
            width: { xs: "100%", sm: "70%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "20px", sm: "22px" },
                fontFamily: "Roboto Serif",
              }}
            >
              DESCRIPTION
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                fontSize: { xs: "14px", sm: "16px" },
                fontFamily: "Roboto Serif",
              }}
            >
              {Description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "cyan",
                color: "black",
                border: "1px solid blue",
                fontWeight: "Bold",
                fontFamily: "Roboto Serif",
                "&:hover": {
                  backgroundColor: "#15DFD3",
                  borderColor: "darkblue",
                },
                marginTop: 2,
                transition: "background-color 0.5s ease",
              }}
              onClick={handleButtonClick}
            >
              {expanded ? "Hide Details" : "View Details"}
            </Button>
          </Box>
        </Box>
      </CardContent>
      {expanded && (
        <>
          <Divider
            orientation="horizontal"
            sx={{
              backgroundColor: "black",
              width: "100%",
            }}
          />
          <Box
            sx={{
              width: "100%",
              padding: 2,
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    marginBottom: 2,
                  }}
                >
                  <img
                    src={image.Website} // Custom link logo
                    alt="Link Icon"
                    style={{
                      width: "53px",
                      height: "51px",
                      marginRight: "8px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "14px", sm: "16px" },
                      fontFamily: "Roboto Serif",
                      cursor: "pointer",
                    }}
                    onClick={() => window.open(WebsiteLink, "_blank")}
                  >
                    Visit the website for more details
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    marginBottom: 2,
                  }}
                >
                  <img
                    src={image.Role} // Custom briefcase logo
                    alt="Hiring Icon"
                    style={{
                      width: "53px",
                      height: "51px",
                      marginRight: "8px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    component="a"
                    href={HiringLink}
                    target="_blank"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "14px", sm: "16px" },
                      fontFamily: "Roboto Serif",
                      textDecoration: "none",
                      color: "inherit",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Currently Hiring - {CurrentlyHiring}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    marginBottom: 2,
                  }}
                >
                  <img
                    src={image.ParentCompany} // Custom building logo
                    alt="Building Icon"
                    style={{
                      width: "53px",
                      height: "51px",
                      marginRight: "8px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "14px", sm: "16px" },
                      fontFamily: "Roboto Serif",
                    }}
                  >
                    Parent Company - {ParentCompany}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    marginBottom: 2,
                  }}
                >
                  <img
                    src={image.Founded} // Custom calendar logo
                    alt="Calendar Icon"
                    style={{
                      width: "53px",
                      height: "51px",
                      marginRight: "8px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "14px", sm: "16px" },
                      fontFamily: "Roboto Serif",
                    }}
                  >
                    Established Year - {Date}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    marginBottom: 2,
                  }}
                >
                  <img
                    src={image.Founder} // Custom founder logo
                    alt="Founder Icon"
                    style={{
                      width: "53px",
                      height: "51px",
                      marginRight: "8px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "14px", sm: "16px" },
                      fontFamily: "Roboto Serif",
                    }}
                  >
                    Founder of company - {Founder}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    marginBottom: 2,
                  }}
                >
                  <img
                    src={image.Sector} // Custom industry logo
                    alt="Industry Icon"
                    style={{
                      width: "53px",
                      height: "51px",
                      marginRight: "8px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "14px", sm: "16px" },
                      fontFamily: "Roboto Serif",
                    }}
                  >
                    Industry Sector - {IndustrySector}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Card>
  );
};

export default StartUpCard;
