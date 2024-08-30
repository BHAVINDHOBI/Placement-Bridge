import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import image from "../assets/ImageUtility";
import "typeface-montserrat";

const navItems = ["Home", "About", "Our Services", "Contact Us"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [appBarBackground, setAppBarBackground] = useState("transparent");

  const handleSignOutClick = () => {
    localStorage.removeItem("token"); // Remove the token
    window.location.href = "/Login"; // Navigate to login page
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#121212",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 4,
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 4,
        }}
      >
        <img
          src={image.PlacementBridgeLogo}
          alt="Placement Bridge Logo"
          style={{ height: 60, marginRight: 15 }}
        />
        <Typography
          variant="h6"
          sx={{ color: "white", fontWeight: 500, fontSize: 28 }}
        >
          Placement Bridge
        </Typography>
      </Box>
      <IconButton
        color="inherit"
        edge="end"
        onClick={handleDrawerToggle}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "white",
        }}
      >
        <CloseIcon />
      </IconButton>
      <Divider sx={{ width: "80%", backgroundColor: "grey.700", mb: 2 }} />
      <List>
        {navItems.map((text) => (
          <ListItem key={text} disablePadding sx={{ mb: 2 }}>
            <ScrollLink
              to={text.replace(/\s+/g, "").toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70} // Adjust this offset based on header height
              style={{ textDecoration: "none", width: "100%" }}
              onClick={handleDrawerToggle}
            >
              <ListItemText
                primary={text}
                sx={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 18,
                }}
              />
            </ScrollLink>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSignOutClick}
        startIcon={
          <img
            src={image.LogoutIcon}
            alt="Logout Icon"
            style={{ height: 20 }}
          />
        }
        sx={{
          mt: "auto",
          mb: 4,
          textTransform: "none",
          fontSize: 16,
          padding: "8px 32px",
          borderRadius: 25,
        }}
      >
        Logout
      </Button>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static" // Changed from fixed to static
        sx={{
          backgroundColor: appBarBackground,
          transition: "background-color 0.3s ease",
          boxShadow: "none",
          paddingY: 2,
        }}
      >
        <Toolbar>
          <RouterLink
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <img
              src={image.PlacementBridgeLogo}
              alt="Placement Bridge Logo"
              style={{ height: 90, marginRight: 10 }} // Reduced marginRight
            />
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: 500,
                fontSize: 28,
              }}
            >
              Placement Bridge
            </Typography>
          </RouterLink>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {navItems.map((text) => (
              <Button
                key={text}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: 16,
                  marginX: 1, // Reduced marginX
                }}
              >
                <ScrollLink
                  to={text.replace(/\s+/g, "").toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust this offset based on header height
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {text}
                </ScrollLink>
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={handleSignOutClick}
              startIcon={
                <img
                  src={image.LogoutIcon}
                  alt="Logout Icon"
                  style={{ height: 20 }}
                />
              }
              sx={{
                textTransform: "none",
                fontSize: 16,
                marginLeft: 1.5, // Reduced marginLeft
                padding: "8px 24px",
                borderRadius: 25,
              }}
            >
              Logout
            </Button>
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* This toolbar pushes content below the fixed AppBar */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            backgroundColor: "transparent",
            position: "relative",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Header;
