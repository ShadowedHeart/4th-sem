import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import "../resources/css/home.css";
import "../resources/css/socialProfile.css";

import { Box, Typography } from "@mui/material";

const SocialProfile = () => {
  const [animation, setAnimation] = useState(false);

  const anime = (event) => {
    if (event.type === "mouseenter") setAnimation(true);
    else setAnimation(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 6,
      }}
    >
      <Typography variant="h3" sx={{ fontFamily: '"Pacifico", cursive' }}>
        Connect with me...
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <a
          href="https://github.com/Pravesh-Subba/FirstRepo.git"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          onMouseEnter={anime}
          onMouseLeave={anime}
        >
          <GitHubIcon sx={{ cursor: "pointer", color: "#000", fontSize: 60 }} />
          <Typography sx={{ cursor: "pointer", color: "black" }}>
            GitHub
          </Typography>
        </a>

        <a
          href="#Facebook"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={anime}
          onMouseLeave={anime}
        >
          <FacebookIcon
            sx={{ cursor: "pointer", color: "#3b5998", fontSize: 60 }}
          />
          <Typography sx={{ cursor: "pointer", color: "black" }}>
            Facebook
          </Typography>
        </a>

        <a
          href="#Instagram"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={anime}
          onMouseLeave={anime}
        >
          <InstagramIcon
            sx={{ cursor: "pointer", color: "#e1306c", fontSize: 60 }}
          />
          <Typography sx={{ cursor: "pointer", color: "black" }}>
            Instagram
          </Typography>
        </a>

        <a
          href="https://www.linkedin.com/in/pravesh-subba-53426a24b"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={anime}
          onMouseLeave={anime}
        >
          <LinkedInIcon
            sx={{ cursor: "pointer", color: "#0077b5", fontSize: 60 }}
          />
          <Typography sx={{ cursor: "pointer", color: "black" }}>
            LinkedIn
          </Typography>
        </a>

        <a
          href="mailto:praveshsubba81@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={anime}
          onMouseLeave={anime}
        >
          <EmailIcon
            sx={{ cursor: "pointer", color: "primary.main", fontSize: 60 }}
          />
          <Typography sx={{ cursor: "pointer", color: "black" }}>
            Email
          </Typography>
        </a>
      </Box>

      <Box className="parentBox">
        <Box className={`stickman ${animation ? "startAnimation" : ""}`}></Box>
      </Box>
    </Box>
  );
};

export default SocialProfile;
