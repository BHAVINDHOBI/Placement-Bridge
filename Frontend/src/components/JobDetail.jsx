import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  Container,
  Typography,
  Paper,
  Button,
  Chip,
  Modal,
  Box,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  Language as CompanyIcon,
  Close as CloseIcon,
  Download as DownloadIcon,
  CurrencyRupee,
  LocationOn,
  Work,
  DateRange,
  CorporateFare,
} from "@mui/icons-material";
import "../styles/JobDetail.css";
import jsPDF from "jspdf";
import "typeface-montserrat";
import { ArrowBack } from "@mui/icons-material";

const Keyresp = "Key Responsibilities: ";
const skillsNeeded = "Required Skills: ";

const JobDetail = ({ jobs }) => {
  const { jobId } = useParams();
  const job = jobs.find((job) => job.id == jobId);
  const navigate = useNavigate();
  const [openRoadmap, setOpenRoadmap] = useState(false);

  if (!job) {
    return <div>Job not found</div>;
  }

  // Split the benefits string into an array if it's a string
  const benefits =
    typeof job.benefits === "string"
      ? job.benefits.split(",").map((benefit) => benefit.trim())
      : Array.isArray(job.benefits)
      ? job.benefits
      : [];

  const handleRoadmapClick = () => {
    setOpenRoadmap(true);
  };

  const handleClose = () => {
    setOpenRoadmap(false);
  };

  const handleGoBack = () => {
    navigate("/recruitments");
  };

  const handleDownloadAsPdf = () => {
    fetch(job.Roadmap)
      .then((response) => response.text())
      .then((svgContent) => {
        const svgBase64 = btoa(unescape(encodeURIComponent(svgContent)));
        const imgSrc = `data:image/svg+xml;base64,${svgBase64}`;
        const img = new Image();

        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);

          // Convert canvas to a base64 PNG
          const pngUrl = canvas.toDataURL("image/png");

          // Create a new jsPDF instance
          const pdf = new jsPDF({
            orientation: img.width > img.height ? "landscape" : "portrait",
            unit: "px",
            format: [img.width, img.height],
          });

          // Add the PNG image to the PDF
          pdf.addImage(pngUrl, "PNG", 0, 0, img.width, img.height);

          // Save the PDF
          pdf.save(Roadmap.pdf);
        };

        img.src = imgSrc; // Load the SVG as an image using the Base64 data URL
      })
      .catch((error) => {
        console.error("Error converting the SVG to PDF:", error);
      });
  };

  // Split description into an array of strings separated by line breaks or bullet points
  const descriptionSections = job.description
    .split("\n")
    .filter((section) => section.trim() !== "");

  const KR = job.keyResponsibilties
    .split("\n")
    .filter((section) => section.trim("•") !== "");

  const SN = job.skillNeeded
    .split("\n")
    .filter((section) => section.trim() !== "");

  return (
    <Container className="job-detail">
      <IconButton
        sx={{
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "fixed",
          left: "25px",
          top: { xs: "10px", md: "20px" },
          marginRight: { md: "20px" },
          zIndex: 1000,
          display: { xs: "none", md: "flex" }, // Hide on small screens and show on medium and larger screens
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
        onClick={handleGoBack}
      >
        <ArrowBack />
      </IconButton>

      <Paper className="job-detail-paper">
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <center>{job.jobTitle}</center>
        </Typography>
        <div className="job-header">
          <div className="job-title-container">
            <img
              src={job.companyLogo}
              alt={`${job.companyName} logo`}
              className="company-logo"
            />
          </div>
        </div>
        <Box display="flex" justifyContent="center">
          <CorporateFare sx={{ mr: 1.5, color: "gray", fontSize: "30px" }} />
          <Typography
            variant="h5"
            style={{
              marginBottom: "16px",
              fontWeight: "500",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {job.companyName}
          </Typography>
        </Box>

        <Divider
          orientation="horizontal"
          flexItem
          sx={{ borderColor: "black" }}
        ></Divider>

        <div className="job-details-wrapper">
          <div className="job-details-section">
            <Box
              display="flex"
              alignItems="center
              "
            >
              <LocationOn sx={{ mr: 1, color: "gray" }} />
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {job.location}
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center
              "
            >
              <Work sx={{ mr: 1, color: "gray" }}></Work>
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {job.jobType}
              </Typography>
            </Box>
          </div>

          <div className="job-details-salary">
            <Box
              display="flex"
              alignItems="center
              "
            >
              <CurrencyRupee sx={{ mr: 1, color: "gray" }} />
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {job.salary}
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center
              "
            >
              <DateRange sx={{ mr: 1, color: "gray" }}></DateRange>
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {job.dateRecruitment}
              </Typography>
            </Box>
          </div>
        </div>

        <Divider
          orientation="horizontal"
          flexItem
          sx={{ borderColor: "black" }}
        ></Divider>

        <div className="job-description-section">
          <Typography
            variant="h5"
            style={{
              marginBottom: "16px",
              fontWeight: "500",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Job Description:
          </Typography>

          <Typography
            sx={{
              marginBottom: 3,
              textAlign: "justify",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {descriptionSections}
          </Typography>
          <Box sx={{ marginBottom: 3 }}>
            <Typography
              variant="body3"
              style={{
                fontWeight: "500",
                fontFamily: "Montserrat, sans-serif",
              }}
              color="textSecondary"
            >
              {Keyresp}
            </Typography>
            <ul
              style={{
                paddingLeft: "20px",
                paddingTop: "10px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {KR.map((section, index) => (
                <li
                  key={index}
                  style={{ marginBottom: "8px", textAlign: "justify" }}
                >
                  • {section}
                </li>
              ))}
            </ul>
          </Box>

          <Box>
            <Typography
              variant="body3"
              style={{
                fontWeight: "500",
                fontFamily: "Montserrat, sans-serif",
              }}
              color="textSecondary"
            >
              {skillsNeeded}
            </Typography>
            <ul
              style={{
                paddingLeft: "20px",
                paddingTop: "10px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {SN.map((section, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  • {section}
                </li>
              ))}
            </ul>
          </Box>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ borderColor: "black", marginTop: 3, marginBottom: 2 }}
          ></Divider>
          <Typography
            variant="h5"
            style={{
              marginTop: "24px",
              fontWeight: "500",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Benefits:
          </Typography>
          <div className="benefits-section">
            {benefits.length > 0 &&
              benefits.map((benefit, index) => (
                <Chip
                  key={index}
                  label={benefit}
                  className="benefit-chip"
                  sx={{ fontFamily: "Montserrat, sans-serif" }}
                />
              ))}
          </div>
        </div>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{ borderColor: "black", marginTop: 3, marginBottom: 3 }}
        ></Divider>
        <Box
          sx={{
            marginTop: 3.5,
            display: "flex",
            gap: 3,
            alignItems: "flex-start",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            startIcon={<CompanyIcon />}
          >
            <Link
              target="_blank"
              rel="noopener"
              href={job.companyWebsiteLink}
              underline="hover"
              color="inherit"
            >
              {" "}
              <Typography
                variant="body2"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Visit Website
              </Typography>
            </Link>
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<LinkedInIcon />}
          >
            <Link
              target="_blank"
              rel="noopener"
              href={job.linkedInLink}
              underline="hover"
              color="inherit"
            >
              {" "}
              <Typography
                variant="body2"
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                LinkedIn
              </Typography>
            </Link>
          </Button>
        </Box>

        <div className="button-container">
          <Button
            variant="contained"
            color="primary"
            onClick={handleRoadmapClick}
            className="button"
            sx={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <strong>View Roadmap</strong>
          </Button>
        </div>

        <Modal open={openRoadmap} onClose={handleClose}>
          <Box className="modal-box">
            <IconButton
              aria-label="close"
              onClick={handleClose}
              className="close-button"
            >
              <CloseIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadAsPdf}
              className="download-button"
              sx={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Download
            </Button>
            <img src={job.Roadmap} alt="Roadmap" className="roadmap-image" />
          </Box>
        </Modal>
      </Paper>
    </Container>
  );
};

export default JobDetail;
