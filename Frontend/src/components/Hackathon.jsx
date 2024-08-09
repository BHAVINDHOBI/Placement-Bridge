import React, { useState, useEffect } from "react";
import HackathonCard from "./HackathonCard";
import "../styles/Hackathon.css";
import hackathonsData from "../data/hackathons.json";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Hackathons = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 7; // Define how many items per page

  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedHackathons = hackathonsData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="website-content">
      <section className="technology-container">
        <div className="header">
          <h1>Hackathons</h1>
          <div className="search-main">
            <div className="grid-2">
              <input
                type="search"
                name="search"
                id="searchbar"
                placeholder="Search Technologies"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="hackathons">
        {paginatedHackathons.map((hackathon, index) => (
          <React.Fragment key={index}>
            <HackathonCard {...hackathon} />
            <hr />
          </React.Fragment>
        ))}
        <Stack
          spacing={2}
          className="pagination"
          sx={{ alignItems: "center", color: "white" }}
        >
          <Pagination
            count={Math.ceil(hackathonsData.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </section>
    </div>
  );
};

export default Hackathons;
