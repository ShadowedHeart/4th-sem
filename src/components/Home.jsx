import { Avatar, Typography, Box } from "@mui/material";
import dp from "../resources/images/defaultImage.jpg";
import "../resources/css/home.css";
import Typewriter from "typewriter-effect/dist/core";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [apiData, setApiData] = useState(null);

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
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:7000/userdata");
        setApiData(response.data); // Store the response data in state
        console.log("userdata fetched");
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserData();
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
          maxHeight:"50%"
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
            maxHeight:"40%"
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Pacifico", cursive',
              ml: 2,
              fontSize: {
                xs: "1.5rem", 
                sm: "1.8rem", 
                md: "3rem", 
              },
              flexShrink: 2
            }}
          >
            Hi,
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Pacifico", cursive',
              ml: 5,
              fontSize: {
                xs: "1.5rem", 
                sm: "1.8rem", 
                md: "3rem", 
              },
              flexShrink: 2
            }}
          >
            {" "}
            I'am {apiData ? apiData.Name : "Loading..."}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Pacifico", cursive',
              textAlign: "center",
              fontSize: {
                xs: "1rem", 
                sm: "1.2rem",
                md: "1.5rem", 
              },
              flexShrink: 2
            }}
            id="typewriter"
          >
            Computer Science Student at SSSIHL
          </Typography>

          <Typography
            variant="body"
            sx={{
              fontFamily: '"Pacifico", cursive',
              // textAlign: "right",
              color: "text.secondary",
              fontSize: {
                xs: "0.875rem", 
                sm: "1rem", 
                md: "1.125rem", 
              },
              flexShrink: 1
            }}
          >
            "I have a strong interest in software development, web technologies,
            and artificial intelligence, and I continually seek to expand my
            skill set through hands-on projects and coursework"
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
