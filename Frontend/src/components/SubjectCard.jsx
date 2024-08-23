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

const SubjectCard = ({
  image,
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
        height: expanded
          ? { xs: "750px", sm: "650px" }
          : { xs: "450px", sm: "350px" },
        width: { xs: "95%", sm: "80%" }, // Responsive width
        marginTop: "20px",
        marginLeft: { xs: "auto", sm: "150px" }, // Centered on small screens
        marginRight: "auto",
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
          height: "100%",
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
                src={image}
                alt={altText}
                style={{
                  width: "auto",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "13px",
                }}
              />
            </picture>
          </Box>
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
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontWeight: "Bold",
                fontSize: { xs: "20px", sm: "24px" }, // Responsive font size
                fontFamily: "Roboto Serif",
                color: "black",
                overflow: "hidden",
                textOverflow: "ellipsis",
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
            display: { xs: "none", sm: "block" },
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 2, // Adjust the space above the divider
            marginBottom: 2, // Adjust the space below the divider
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
                fontSize: "16px",
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
              View Details
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
              display: { xs: "block", sm: "none" },
            }}
          />
          <Box
            sx={{
              height: "300px",
              width: "100%",
              padding: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
              borderTop: "1px solid black",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                flex: "80%",
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
                display: { xs: "none", sm: "block" },
              }}
            />
            <Box
              sx={{
                flex: "20%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: 2,
                color: "white",
              }}
            >
              <Box
                sx={{
                  fontFamily: "Roboto Serif",
                  color: "black",
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
                    fontSize: { xs: "20px", sm: "22px" },
                    fontFamily: "Roboto Serif",
                  }}
                >
                  Project
                </Typography>
              </Box>
              <Box
                sx={{
                  fontFamily: "Roboto Serif",
                  color: "black",
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
                    fontSize: { xs: "20px", sm: "22px" },
                    fontFamily: "Roboto Serif",
                  }}
                >
                  Video Tutorial
                </Typography>
              </Box>
              <Box
                sx={{
                  fontFamily: "Roboto Serif",
                  color: "black",
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
                    fontSize: { xs: "20px", sm: "22px" },
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

export default SubjectCard;
