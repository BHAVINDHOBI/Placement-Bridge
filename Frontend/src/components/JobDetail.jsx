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
import html2canvas from "html2canvas";

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

  const handleDownloadAsPng = () => {
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

          const pngUrl = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = pngUrl;
          link.download = "roadmap.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };

        img.src = imgSrc; // Load the SVG as an image using the Base64 data URL
      })
      .catch((error) => {
        console.error("Error converting the SVG to PNG:", error);
      });
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
          pdf.save("roadmap.pdf");
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
    .split("•")
    .filter((section) => section.trim() !== "");

  const SN = job.skillsNeeded
    .split("•")
    .filter((section) => section.trim() !== "");

  return (
    <Container className="job-detail">
      <Paper className="job-detail-paper">
        <Typography variant="h4" component="h2">
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
        {/* <Typography variant="h5" className="job-detail-item">
          <strong>Company</strong> {job.companyName}
        </Typography> */}
        <Box display="flex" justifyContent="center">
          <CorporateFare sx={{ mr: 1.5, color: "gray", fontSize: "30px" }} />
          <Typography
            variant="h5"
            style={{ marginBottom: "16px", fontWeight: "500" }}
          >
            {job.companyName}
          </Typography>
        </Box>

        <Divider
          orientation="horizontal"
          flexItem
          sx={{ borderColor: "gray" }}
        ></Divider>

        <div className="job-details-wrapper">
          <div className="job-details-section">
            <Box
              display="flex"
              alignItems="center
              "
            >
              <LocationOn sx={{ mr: 1, color: "gray" }} />
              <Typography variant="h6" color="textSecondary">
                {job.location}
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center
              "
            >
              <Work sx={{ mr: 1, color: "gray" }}></Work>
              <Typography variant="h6" color="textSecondary">
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
              <Typography variant="h6" color="textSecondary">
                {job.salary}
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center
              "
            >
              <DateRange sx={{ mr: 1, color: "gray" }}></DateRange>
              <Typography variant="h6" color="textSecondary">
                {job.dateRecruitment}
              </Typography>
            </Box>
          </div>
        </div>

        <Divider
          orientation="horizontal"
          flexItem
          sx={{ borderColor: "gray" }}
        ></Divider>

        <div className="job-description-section">
          <Typography
            variant="h5"
            style={{ marginBottom: "16px", fontWeight: "500" }}
          >
            Job Description:
          </Typography>

          <Typography sx={{ marginBottom: 3, textAlign: "justify" }}>
            {descriptionSections}
          </Typography>
          <Box sx={{ marginBottom: 3 }}>
            <Typography
              variant="body3"
              style={{ fontWeight: "500" }}
              color="textSecondary"
            >
              {Keyresp}
            </Typography>
            <ul style={{ paddingLeft: "20px", paddingTop: "10px" }}>
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
              style={{ fontWeight: "500" }}
              color="textSecondary"
            >
              {skillsNeeded}
            </Typography>
            <ul style={{ paddingLeft: "20px", paddingTop: "10px" }}>
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
            sx={{ borderColor: "gray", marginTop: 3, marginBottom: 2 }}
          ></Divider>
          <Typography
            variant="h5"
            style={{ marginTop: "24px", fontWeight: "bold" }}
          >
            Benefits:
          </Typography>
          <div className="benefits-section">
            {benefits.length > 0 &&
              benefits.map((benefit, index) => (
                <Chip key={index} label={benefit} className="benefit-chip" />
              ))}
          </div>
        </div>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{ borderColor: "gray", marginTop: 3, marginBottom: 3 }}
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
              <Typography variant="body2">Website Link</Typography>
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
              <Typography variant="body2">LinkedIn</Typography>
            </Link>
          </Button>
        </Box>

        <div className="button-container">
          <Button
            variant="contained"
            color="primary"
            onClick={handleRoadmapClick}
            className="button"
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
