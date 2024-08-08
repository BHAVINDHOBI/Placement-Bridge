import React, { useState } from "react";
import SubjectCard from "./SubjectCard";
import subjects from "../data/subjects.json";
import "../styles/Subjects.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Subjects = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = subjects.slice(indexOfFirstItem, indexOfLastItem);

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
          {currentItems.map((sub, index) => (
            <React.Fragment key={index}>
              <SubjectCard
                imageSrc={sub.image}
                altText={sub.altText}
                title={sub.subject}
                description={sub.description}
                youtubeLink={sub.youtubeLink}
                articleLink={sub.articleLink}
              />
              <div className="horizontal-line">
                <hr />
              </div>
            </React.Fragment>
          ))}
        </div>
        <Stack spacing={2} sx={{ alignItems: "center", color: "white" }}>
          <Pagination
            count={Math.ceil(subjects.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            sx={{ "& .MuiPaginationItem-root": { color: "white" } }}
          />
        </Stack>
      </section>
    </div>
  );
};

export default Subjects;
