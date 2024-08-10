import React from "react";
import { ListItemText } from "@mui/material";
import "../../styles/Roadmaps/Roadmap.css";

const Item = ({ item }) => {
  return <ListItemText primary={item} />;
};

export default Item;
