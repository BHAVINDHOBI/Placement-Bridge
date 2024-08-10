import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Link as MuiLink,
  Chip,
} from "@mui/material";
import "../../styles/Roadmaps/InfoCard.css";

const InfoCard = ({ title, description, links }) => {
  return (
    <Card className="info-card">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="description"
        >
          {description}
        </Typography>
        <div className="links">
          {links.map((link, index) => (
            <div className="linkElement">
              <Chip label={link.type.toUpperCase()} size="small" />
              <MuiLink
                href={link.url}
                target="_blank"
                rel="noopener"
                className="link"
                key={index}
              >
                {link.text}
              </MuiLink>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
