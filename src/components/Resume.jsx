import React from "react";
import portfolio from "../resources/pdf/MyResume.pdf";
import { Box } from "@mui/material";
import "../resources/css/resume.css";

const Resume = () => {
  return (
    <Box className="parentBox">
      <Box className="subParent">
        <Box className="child1Box"></Box>
        <Box className="child2Box"></Box>
      </Box>
    </Box>
  );
};

export default Resume;

{
  /* <a href={portfolio} download>Download</a> */
}
