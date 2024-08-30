import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { IoMdPaperPlane } from "react-icons/io";
import { IoReloadSharp } from "react-icons/io5";
import "typeface-montserrat";

const HackathonForm = () => {
  const initialFormData = {
    hackathonName: "",
    registrationLink: "",
    mode: "",
    date: "",
    location: "",
    prize: "",
    organizingTeamContact: "",
    userEmail: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.hackathonName) newErrors.hackathonName = "Required";
    if (!formData.registrationLink) newErrors.registrationLink = "Required";
    if (!formData.organizingTeamContact)
      newErrors.organizingTeamContact = "Required";
    if (!formData.userEmail) newErrors.userEmail = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#f8f8f8",
        padding: { xs: "20px", sm: "30px" },
        borderRadius: "10px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        border: "1px solid #ccc",
        width: { xs: "90%", sm: "80%", md: "70%" },
        height: "700px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "#000",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2rem" },
          marginBottom: "30px",
        }}
      >
        ADD DETAILS
      </Typography>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        // onSubmit={handleSubmit}
        // noValidate
        // autoComplete="off"
        style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <input
          type="hidden"
          name="access_key"
          value="6869febd-c760-4109-9f95-96af79e394e1"
        />
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Hackathon Name"
              name="hackathonName"
              value={formData.hackathonName}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.hackathonName}
              helperText={errors.hackathonName}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Registration Link"
              name="registrationLink"
              value={formData.registrationLink}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.registrationLink}
              helperText={errors.registrationLink}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mode"
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Prize"
              name="prize"
              value={formData.prize}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Organizing Team Contact"
              name="organizingTeamContact"
              value={formData.organizingTeamContact}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.organizingTeamContact}
              helperText={errors.organizingTeamContact}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="User's Email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.userEmail}
              helperText={errors.userEmail}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              }}
            />
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center" mt={3} gap={2}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#a0bacc",
              color: "#000",
              "&:hover": {
                backgroundColor: "#8da2b3",
              },
              width: { xs: "100px", sm: "120px" },
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
            startIcon={<IoMdPaperPlane />}
          >
            SUBMIT
          </Button>
          <Button
            type="button"
            variant="contained"
            onClick={handleReset}
            sx={{
              backgroundColor: "#a0bacc",
              color: "#000",
              "&:hover": {
                backgroundColor: "#8da2b3",
              },
              width: { xs: "100px", sm: "120px" },
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
            startIcon={<IoReloadSharp />}
          >
            RESET
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default HackathonForm;
