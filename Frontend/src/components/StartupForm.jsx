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

const StartupForm = () => {
  const initialFormData = {
    startupName: "",
    websiteLink: "",
    abstract: "",
    cinNumber: "",
    founder: "",
    startupContact: "",
    userEmail: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
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
        width: { xs: "90%", sm: "80%", md: "70%" }, // Adjust width to be responsive
        height: "800px", // Let height adjust based on content
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
        }}
      >
        ADD DETAILS
      </Typography>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        noValidate
        autoComplete="off"
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
              label="Startup Name"
              name="startupName"
              value={formData.startupName}
              onChange={handleChange}
              fullWidth
              required
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
              label="Website Link"
              name="websiteLink"
              value={formData.websiteLink}
              onChange={handleChange}
              fullWidth
              required
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
          <Grid item xs={12}>
            <TextField
              label="Abstract of Startup"
              name="abstract"
              value={formData.abstract}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={6}
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
              label="CIN Number"
              name="cinNumber"
              value={formData.cinNumber}
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
              label="Founder"
              name="founder"
              value={formData.founder}
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
              label="Company Contact Info"
              name="startupContact"
              value={formData.startupContact}
              onChange={handleChange}
              fullWidth
              required
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
              label="Sender Email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              fullWidth
              required
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
            type="reset"
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
            startIcon={<IoReloadSharp />}
          >
            RESET
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default StartupForm;
