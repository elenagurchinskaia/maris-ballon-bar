import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Box, Typography } from "@mui/material";

function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const currentPage = useLocation().pathname;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const navLinks = [
    { label: "about", path: "/about" },
    { label: "gallery", path: "/gallery" },
    { label: "seasonal items", path: "/seasonal-items" },
    { label: "rental catalog", path: "/rental-catalog" },
    { label: "contact", path: "/contact" },
    { label: "book event", path: "/book-event" },
  ];

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        width: "100%",
        overflow: "hidden",
        flexWrap: "wrap",
        maxWidth: "1700px"

      }}
    >
      {/* Logo */}
      <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src="/assets/logo/logo.png"
          alt="Mari's Balloon Bar Logo"
          sx={{ height: "100px" }}
          marginLeft={5} marginBottom={3}
        />
      </Box>


      <Box
        component="ul"
        sx={{
          display: "flex",
          listStyle: "none",
          padding: 0,
          margin: 0,
          gap: 3,
        }}
      >
        {navLinks.map(({ label, path }) => (
          <Box key={path} component="li">
            <Link
              to={path}
              onClick={() => handleTabClick(label)}
              style={{
                textDecoration: "none",
                color: activeTab === label || currentPage === path ? "grey" : "black",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "amandine",
                  fontWeight: 400,
                  fontStyle: "normal",
                  textTransform: "lowercase",
                }}
              >
                {label}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>


      {/* Social Icons */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link
          to="https://www.facebook.com/Marisballoonbar?mibextid=ZbWKwL"
          target="_blank"
          style={{ color: "#1a1a1a", fontSize: 24, marginLeft: 10 }}
        >
          <FaFacebook />
        </Link>
        <Link
          to="https://www.instagram.com/marisballoonbar/"
          target="_blank"
          style={{ color: "#1a1a1a", fontSize: 24, marginLeft: 10 }}
        >
          <FaInstagram />
        </Link>
      </Box>
    </Box>
  );
}

export default Navbar;

