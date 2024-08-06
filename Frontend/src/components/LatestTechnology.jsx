import React, { useState } from "react";
import TechnologyCard from "./LatestTechnologiesCard";
import technologies from "../data/technologies.json";
import "../styles/CoreItSubjects.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CoreItSubjects = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = technologies.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="website-content">
      <section className="technology-container">
        <div className="header">
          <h1>Latest Technology</h1>
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
        <div className="main-container">
          {currentItems.map((tech, index) => (
            <React.Fragment key={index}>
              <TechnologyCard
                imageSrc={tech.imageSrc}
                altText={tech.altText}
                title={tech.title}
                description={tech.description}
                youtubeLink={tech.youtubeLink}
                articleLink={tech.articleLink}
              />
              <div className="horizontal-line">
                <hr />
              </div>
            </React.Fragment>
          ))}
        </div>
        <Stack spacing={2} sx={{ alignItems: "center", color: "white" }}>
          <Pagination
            count={Math.ceil(technologies.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            sx={{ "& .MuiPaginationItem-root": { color: "white" } }}
          />
        </Stack>
      </section>
    </div>
  );
};

export default CoreItSubjects;
