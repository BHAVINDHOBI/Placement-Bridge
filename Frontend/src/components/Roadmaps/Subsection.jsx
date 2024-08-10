import React from "react";
import Item from "./Item";
import { List, ListItem, Typography } from "@mui/material";
import "../../styles/Roadmaps/Subsection.css";

const Subsection = ({ subsection }) => {
  return (
    <div className="subsection">
      <Typography variant="h6" component="h3">
        {subsection.title}
      </Typography>
      <List>
        {subsection.items.map((item, index) => (
          <ListItem key={index}>
            <Item item={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Subsection;
