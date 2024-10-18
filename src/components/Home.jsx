import { Avatar, Typography, Box } from "@mui/material";
import dp from "../resources/images/defaultImage.jpg";
import "../resources/css/home.css";
import Typewriter from "typewriter-effect/dist/core";
import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: ["Computer Science Student at SSSIHL"],
      autoStart: true,
      loop: true,
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  useEffect(() => {
    console.log("Calling userData Api");
    axios
      .get("http://localhost:7000/userData")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="homes">
      <Box
        className="wrapper"
        sx={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-around",
          alignItems: "center",
          width: "60%",
        }}
      >
        <Box
          className="intro"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "90%",
            mb: 15,
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontFamily: '"Pacifico", cursive', ml: 2 }}
          >
            Hi,
          </Typography>

          <Typography
            variant="h3"
            sx={{ fontFamily: '"Pacifico", cursive', ml: 5 }}
          >
            {" "}
            I'am Pravesh
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontFamily: '"Pacifico", cursive', textAlign: "center" }}
            id="typewriter"
          >
            Computer Science Student at SSSIHL
          </Typography>

          <Typography
            variant="h7"
            sx={{
              fontFamily: '"Pacifico", cursive',
              // textAlign: "right",
              color: "text.secondary",
            }}
          >
            "I have a strong interest in software development, web technologies,
            and artificial intelligence, and I continually seek to expand my
            skill set through hands-on projects and coursework
          </Typography>
        </Box>
      </Box>

      <Box>
        <Avatar
          src={dp}
          sx={{ width: "100%", height: "100%", boxShadow: 24 }}
          className="avatarAnimation"
        />
      </Box>
    
    </div>
  );
};

export default Home;
