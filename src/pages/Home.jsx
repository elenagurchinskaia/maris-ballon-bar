import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  Box,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function Home() {
  const [opacity, setOpacity] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = window.innerHeight * 0.5;
      const newOpacity = Math.max(0, 1 - scrollY / fadeEnd);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      {/* Hero Image */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: 'url("/assets/gallery/home.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: 1,
        }}
      />

      {/* Transparent Overlay Content */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
          color: "white",
          transition: "opacity 0.3s ease-in-out",
          opacity: opacity,
        }}
      >
        <Typography
          variant={isMobile ? "h3" : "h1"}
          gutterBottom
          sx={{
            fontFamily: "amandine",
            fontWeight: 700,
            fontStyle: "normal",

          }}
        >
          A Bit More Pop
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Trap", fontWeight: "regular" }}
        >
          Explore our unique balloon designs and book us for your next event!
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Trap", fontWeight: "regular" }}
        >
          Discover the joy of adding a bit more pop to your celebrations!
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            sx={{
              mt: 2,
              px: 4,
              py: 1,
              border: "1px solid white",
              color: "white",
              fontFamily: "Trap",
              fontWeight: "normal",
              borderRadius: "7px",
              textTransform: "uppercase",
              '&:hover': {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white",
              },
            }}
          >
            CONTACT
          </Button>
        </Box>
        <Box sx={{ position: "absolute", bottom: 250, display: "flex" }}>
          <IconButton
            href="https://www.facebook.com/Marisballoonbar?mibextid=ZbWKwL"
            target="_blank"
            sx={{ color: "white", mx: 1 }}
          >
            <FaFacebook />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/marisballoonbar/"
            target="_blank"
            sx={{ color: "white", mx: 1 }}
          >
            <FaInstagram />
          </IconButton>
        </Box>
        <Box sx={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"


          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </Box>

      </Box>

      {/* Scroll Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          mt: { xs: "100vh" },
          backgroundColor: "#fff",
          px: 2,
          py: 6,
        }}
      >
        <Navbar />
        <Gallery />
      </Box>
    </Box>
  );
}

export default Home;




