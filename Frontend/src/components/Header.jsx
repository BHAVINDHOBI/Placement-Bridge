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
    localStorage.removeItem("token");
    window.location.href = "/Login";
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAppBarBackground("rgba(0, 0, 0, 0.3)");
      } else {
        setAppBarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              offset={-70}
              style={{ textDecoration: "none", width: "100%" }}
              onClick={handleDrawerToggle}
            >
              <ListItemText
                primary={text}
                sx={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 18,
                  "&:hover": {
                    textDecoration: "underline",
                  },
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
        position={mobileOpen ? "static" : "fixed"} // Make AppBar static when drawer is open
        elevation={0} // Remove the shadow
        sx={{
          top: 0,
          backgroundColor: appBarBackground,
          transition: "background-color 0.3s ease",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: "100%", // Ensure full width
          borderBottom: "none", // Remove border
          marginBottom: 2, // Add margin bottom
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo on the left */}
          <RouterLink
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={image.PlacementBridgeLogo}
              alt="Placement Bridge Logo"
              style={{
                height: 75,
                marginLeft: 18,
                marginTop: 10,
                marginBottom: 10,
              }}
            />
          </RouterLink>

          {/* Navigation items centered */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1, // This allows the nav items to occupy the center space
            }}
          >
            {navItems.map((text) => (
              <Button
                key={text}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: 16,
                  marginX: 2,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "white",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                <ScrollLink
                  to={text.replace(/\s+/g, "").toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {text}
                </ScrollLink>
              </Button>
            ))}
          </Box>

          {/* Logout button on the right */}
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
              marginLeft: 1.5,
              padding: "8px 24px",
              borderRadius: 25,
            }}
          >
            Logout
          </Button>

          {/* Menu icon for mobile view */}
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
      <Box
        sx={{
          marginTop: { xs: "50px", md: 0 }, // Apply marginTop only on mobile (xs)
          padding: { xs: "40px", md: 0 }, // Apply padding only on mobile (xs)
        }}
      ></Box>
    </Box>
  );
};

export default Header;
