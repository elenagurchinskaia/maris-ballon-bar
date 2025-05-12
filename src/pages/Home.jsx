import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeEnd = window.innerHeight * 0.5;
      setOpacity(Math.max(0, 1 - scrollY / fadeEnd));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      {/* Hero Background */}
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

      {/* Hero Content */}
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
          opacity,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
          gutterBottom
          sx={{
            fontFamily: "amandine",
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
          }}
        >
          A Bit More Pop
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "Trap",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            maxWidth: 700,
            px: 2,
          }}
        >
          Explore our unique balloon designs and book us for your next event!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "Trap",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            mt: 1,
            maxWidth: 700,
            px: 2,
          }}
        >
          Discover the joy of adding a bit more pop to your celebrations!
        </Typography>

        {/* Contact Button */}
        <Box sx={{ mt: 3 }}>
          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            sx={{
              px: 4,
              py: 1,
              border: "1px solid white",
              color: "white",
              fontFamily: "Trap",
              fontWeight: 500,
              borderRadius: "8px",
              textTransform: "uppercase",
              '&:hover': {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white",
              },
            }}
          >
            Contact
          </Button>
        </Box>

        {/* Social Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
            gap: 2,
          }}
        >
          <IconButton
            href="https://www.facebook.com/Marisballoonbar?mibextid=ZbWKwL"
            target="_blank"
            sx={{ color: "white" }}
          >
            <FaFacebook />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/marisballoonbar/"
            target="_blank"
            sx={{ color: "white" }}
          >
            <FaInstagram />
          </IconButton>
        </Box>

        {/* Scroll Down Arrow */}
        <Box
          sx={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isMobile ? "48" : "60"}
            height={isMobile ? "48" : "60"}
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          mt: "100vh",
          backgroundColor: "#fff",
          px: 2,
          py: 6,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Navbar />
        <Gallery />
        <Footer />
      </Box>
    </Box>
  );
}

export default Home;





