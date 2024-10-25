import React from "react";
// import { ProjectDetails } from "../Utils/ProjectDetails";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../resources/css/project.css";
import "../resources/css/home.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Projects = () => {
  const [apiData, setApiData] = useState([]);
  const [expanded, setExpanded] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/userdata/projectDetails"
        );
        setApiData(response.data);
        console.log("projectDetails fetched");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh", 
        }}
      >
         <CircularProgress size="3rem" />
      </Box>
    );
  }

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="projects">
      {apiData.map((data, index) => (
        <Accordion
          className="changeColor"
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          sx={{ backgroundColor: "transparent", border: "none" }}
        >
          <AccordionSummary
            aria-controls={`panel${index + 1}d-content`}
            id={`panel${index + 1}d-header`}
          >
            <InsertDriveFileIcon />
            <Typography
              variant="h7"
              color="#2B303A"
              sx={{ fontFamily: '"Pacifico", cursive', ml: 2 }}
            >
              {data.name}
              <br />
              {data.date}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h9" sx={{ fontFamily: '"Pacifico", cursive' }}>
              {data.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                textAlign: "center",
              }}
            >
              <Box className="Git">
                <GitHubIcon />
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "left",
                    fontStyle: "italic",
                    fontWeight: "100",
                  }}
                >
                  <Link
                    href="https://github.com/Pravesh-Subba/FirstRepo.git"
                    underline="hover"
                    variant="body2"
                  >
                    {"learn more"}
                  </Link>
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "right",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  m: 2,
                }}
              >
                Author: {data.Author}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Projects;
