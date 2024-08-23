import React, { useState } from "react";
import SubjectCard from "./SubjectCard";
import subjects from "../data/subjects.json";
// import "../styles/Subjects.css";
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
    <div>
      <div className="main-container">
        {currentItems.map((sub, index) => (
          <React.Fragment key={index}>
            <SubjectCard
              image={sub.image}
              altText={sub.altText}
              title={sub.subject}
              description={sub.description}
              projectLink={sub.projectLink}
              youtubeLink={sub.youtubeLink}
              articleLink={sub.articleLink}
              Objective1={sub.Objective1}
              Objective2={sub.Objective2}
            />
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
    </div>
  );
};

export default Subjects;
