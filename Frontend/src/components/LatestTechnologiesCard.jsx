import React, { useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { PiNotepadFill } from "react-icons/pi";
import { IoSparklesSharp, IoBookmarksSharp } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";

const TechnologyCard = ({
  imageSrc,
  altText,
  title,
  description,
  youtubeLink,
  articleLink,
  projectLink,
  Objective1,
  Objective2,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "75%" }, // Responsive width
        margin: "20px auto", // Centered on all screens
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
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
          padding: 0,
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "40%" },
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
                src={imageSrc}
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
          <Box
            sx={{
              padding: 1,
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "20px", sm: "24px" }, // Responsive font size
                fontFamily: "Roboto Serif",
                color: "black",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "center",
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "black",
            display: { xs: "none", sm: "block" }, // Hide on small screens
          }}
        />
        <Box
          sx={{
            width: { xs: "100%", sm: "60%" },
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <PiNotepadFill />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "20px", sm: "22px" },
                  fontFamily: "Roboto Serif",
                }}
              >
                Description
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for small screens
                fontFamily: "Roboto Serif",
              }}
            >
              {description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "cyan",
                color: "black",
                border: "1px solid blue",
                fontWeight: "bold",
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
              display: { xs: "block", sm: "none" }, // Show horizontal on small screens
            }}
          />
          <Box
            sx={{
              width: "100%",
              padding: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
              gap: 2,
              borderTop: "1px solid black",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                flex: "2",
                padding: 1,
                color: "black",
                textAlign: "justify",
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
                Learning Outcomes
              </Typography>
              <List sx={{ listStyleType: "disc", pl: 2 }}>
                <ListItem
                  sx={{
                    display: "list-item",
                    textAlign: "justify",
                    fontFamily: "Roboto Serif",
                    paddingLeft: 0,
                  }}
                >
                  <ListItemText
                    primary={Objective1}
                    sx={{ fontFamily: "Roboto Serif" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                    textAlign: "justify",
                    fontFamily: "Roboto Serif",
                    paddingLeft: 0,
                  }}
                >
                  <ListItemText primary={Objective2} />
                </ListItem>
              </List>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                backgroundColor: "black",
                display: { xs: "none", sm: "block" }, // Show vertical on larger screens
              }}
            />
            <Box
              sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: 2,
                color: "black",
              }}
            >
              <Box
                sx={{
                  fontFamily: "Roboto Serif",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  marginBottom: 2,
                }}
                onClick={() => window.open(projectLink, "_blank")}
              >
                <IoSparklesSharp style={{ marginRight: 8 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "16px", sm: "20px" },
                    fontFamily: "Roboto Serif",
                  }}
                >
                  Project
                </Typography>
              </Box>
              <Box
                sx={{
                  fontFamily: "Roboto Serif",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  marginBottom: 2,
                }}
                onClick={() => window.open(youtubeLink, "_blank")}
              >
                <MdOutlineOndemandVideo style={{ marginRight: 8 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "16px", sm: "20px" },
                    fontFamily: "Roboto Serif",
                  }}
                >
                  Video Tutorial
                </Typography>
              </Box>
              <Box
                sx={{
                  fontFamily: "Roboto Serif",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
                onClick={() => window.open(articleLink, "_blank")}
              >
                <IoBookmarksSharp style={{ marginRight: 8 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "16px", sm: "20px" },
                    fontFamily: "Roboto Serif",
                  }}
                >
                  Document
                </Typography>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Card>
  );
};

export default TechnologyCard;
