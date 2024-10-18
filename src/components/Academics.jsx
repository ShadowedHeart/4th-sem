import React from "react";
import "../resources/css/home.css";
import Typography from "@mui/material/Typography";
// import Muddenahalli from "../resources/images/Mudden.jpg";
import { Box } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import "../resources/css/academics.css";

const steps = [
  "Studied St Marys High School",
  "Studied St Roberts H.S School",
  "Currently studying SSSIHL",
];

export default function Academics() {
  const [activeStep, setActiveStep] = React.useState(2);

  const handleStep = (step) => () => {
    setActiveStep(step);
    console.log(step);
  };

  return (
    <Box
      className="MConatainer"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        // alignItems: "center",
        flexDirection: "column",
        height: "95%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "auto",
        }}
        className="title"
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: '"Pacifico", cursive', textAlign: "center" }}
        >
          Education Qualification
        </Typography>
      </Box>

      <Box className="stepper" sx={{ width: "100%" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton color="inherit" onMouseEnter={handleStep(index)}>
                {/* on hovering it will show */}
                <Typography sx={{ fontSize: "1rem" }}> {label}</Typography>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box
        className="information"
        sx={{
          height: "50%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {activeStep === 2 && (
          <>
            <Box className="info1"></Box>
            <Typography>Batch-2022</Typography>
          </>
        )}

        {activeStep === 1 && (
          <>
            <Box className="info2"></Box>
            <Typography>Batch-2021</Typography>
          </>
        )}

        {activeStep === 0 && (
          <>
            <Box className="info3"></Box>
            <Typography>Batch-2020</Typography>
          </>
        )}
      </Box>
    </Box>
  );
}
