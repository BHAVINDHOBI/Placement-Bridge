import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "typeface-montserrat";

const Contact = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // Check if screen is medium or larger

  return (
    <Box
      component="section"
      sx={{
        padding: { xs: "20px", sm: "40px", md: "50px" },
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        margin: "60px 0",
      }}
      id="contact"
    >
      <Grid
        container
        spacing={isMdUp ? 4 : 2} // Adjust spacing based on screen size
        alignItems="flex-start"
        justifyContent="center"
        sx={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 500, color: "#777", fontSize: "16px" }}
            >
              Get Here
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat, sans-serif",
                marginBottom: 2,
                color: "#000", // Make "Contact Us" text black
                fontSize: "32px", // Adjust font size
              }}
            >
              Contact Us
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  marginBottom: 0.5,
                  color: "black",
                  fontSize: "18px", // Adjust font size
                }}
              >
                Phone Number
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "18px", // Adjust font size
                }}
              >
                940926615
              </Typography>
            </Box>

            <Divider
              sx={{
                mb: 3,
                width: "60%", // Shorten the divider
                backgroundColor: "#777", // Adjust color of the divider
              }}
            />

            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  marginBottom: 0.5,
                  color: "black",
                  fontSize: "18px", // Adjust font size
                }}
              >
                Email Address
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "18px", // Adjust font size
                }}
              >
                shreykoradiya200310@gmail.com
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Conditional Divider between "Get Here" and "Available 24/7" sections */}
        {isMdUp && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "#777", // Adjust color of the vertical divider
              marginX: 2,
              width: "2px", // Make the divider slightly thicker
            }}
          />
        )}

        {/* Contact Form */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            mt: isMdUp ? 0 : 3, // Adjust margin-top for smaller screens
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 500, color: "#777", fontSize: "16px" }}
            >
              Available 24/7
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat, sans-serif",
                marginBottom: 2,
                color: "#000", // Keep the "Get In Touch" text black
                fontSize: "32px", // Adjust font size
              }}
            >
              Get In Touch
            </Typography>
          </Box>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            style={{ width: "100%" }}
          >
            <input
              type="hidden"
              name="access_key"
              value="6869febd-c760-4109-9f95-96af79e394e1"
            />
            <Grid container spacing={isMdUp ? 2 : 3}>
              <Grid item xs={11}>
                <TextField
                  fullWidth
                  label="Enter email"
                  type="email"
                  name="email" // Added name attribute
                  variant="outlined"
                  required
                  sx={{
                    backgroundColor: "#f7f7f7",
                    borderRadius: "4px",
                  }}
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  fullWidth
                  label="Username"
                  type="text"
                  name="username" // Added name attribute
                  variant="outlined"
                  required
                  sx={{
                    backgroundColor: "#f7f7f7",
                    borderRadius: "4px",
                  }}
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={7}
                  name="message" // Added name attribute
                  variant="outlined"
                  required
                  sx={{
                    backgroundColor: "#f7f7f7",
                    borderRadius: "4px",
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                mt: 3,
                width: {
                  xs: "92%", // Full width on extra-small screens
                  sm: "70%", // 80% width on small screens
                  md: "60%", // 60% width on medium screens and larger
                },
                backgroundColor: "#1E90FF",
                fontSize: "18px", // Adjust font size
              }}
            >
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
