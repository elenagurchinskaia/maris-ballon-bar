import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { Box, Typography, IconButton, Drawer } from "@mui/material";
import { useCart } from "./CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPage = useLocation().pathname;
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false); // Close menu on link click
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
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: "10px 20px",
        position: "relative",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <Box component={Link} to="/">
        <Box
          component="img"
          src="/assets/logo/maris-logo-colored.png"
          alt="Mari's Balloon Bar Logo"
          sx={{
            height: {
              xs: "50px",
              md: "100px",
            },
            transition: "height 0.3s ease-in-out",
          }}
        />
      </Box>

      {/* Desktop Links */}
      <Box
        component="ul"
        sx={{
          display: { xs: "none", md: "flex" },
          listStyle: "none",
          gap: 3,
          padding: 0,
          margin: 0,
          justifyContent: "center",
          flex: 1,
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
                  textTransform: "lowercase",
                }}
              >
                {label}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>

      {/* Right Section - Cart & Social */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Cart */}
        <Box sx={{ position: "relative", cursor: "pointer" }} onClick={() => navigate("/cart")}>
          <ShoppingCartIcon />
          {cart.length > 0 && (
            <Box
              sx={{
                position: "absolute",
                top: -5,
                right: -10,
                fontSize: 12,
                color: "black",
              }}
            >
              {cart.length}
            </Box>
          )}
        </Box>

        {/* Social Icons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <a
            href="https://www.facebook.com/Marisballoonbar?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#1a1a1a", fontSize: 24 }}
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/marisballoonbar/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#1a1a1a", fontSize: 24 }}
          >
            <FaInstagram />
          </a>
        </Box>

        {/* Hamburger menu for mobile */}
        <IconButton
          onClick={() => setMenuOpen(!menuOpen)}
          sx={{ display: { xs: "block", md: "none" }, color: "#1a1a1a" }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </IconButton>
      </Box>

      {/* Drawer for mobile nav */}
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box
          sx={{
            width: 250,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => handleTabClick(label)}
              style={{
                textDecoration: "none",
                color: currentPage === path ? "grey" : "black",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontFamily: "amandine", textTransform: "lowercase" }}
              >
                {label}
              </Typography>
            </Link>
          ))}

          {/* Social icons in drawer */}
          <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
            <a href="https://www.facebook.com/Marisballoonbar?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
              <FaFacebook size={24} color="#1a1a1a" />
            </a>
            <a href="https://www.instagram.com/marisballoonbar/" target="_blank" rel="noreferrer">
              <FaInstagram size={24} color="#1a1a1a" />
            </a>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;

