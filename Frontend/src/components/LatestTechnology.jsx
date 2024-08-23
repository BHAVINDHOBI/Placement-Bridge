import React, { useState } from "react";
import TechnologyCard from "./LatestTechnologiesCard";
import technologies from "../data/technologies.json";
import { Pagination, Stack } from "@mui/material";

const LatestTechnology = () => {
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = technologies.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="main-container">
        {currentItems.map((tech, index) => (
          <React.Fragment key={index}>
            <TechnologyCard
              imageSrc={tech.image}
              altText={tech.altText}
              title={tech.subject}
              description={tech.description}
              youtubeLink={tech.youtubeLink}
              articleLink={tech.articleLink}
              Objective1={tech.Objective1}
              Objective2={tech.Objective2}
            />
          </React.Fragment>
        ))}
      </div>
      <Stack spacing={2} sx={{ alignItems: "center", color: "white" }}>
        <Pagination
          count={Math.ceil(technologies.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          sx={{ "& .MuiPaginationItem-root": { color: "white" } }}
        />
      </Stack>
    </div>
  );
};

export default LatestTechnology;
