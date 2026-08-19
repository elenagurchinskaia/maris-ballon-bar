import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { Box, Typography, IconButton, Drawer } from "@mui/material";
import { useCart } from "./CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { colors } from "../theme";

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
    { label: "home", path: "/" },
    { label: "about", path: "/about" },
    { label: "gallery", path: "/gallery" },
    { label: "seasonal", path: "/seasonal-items" },
    { label: "rental", path: "/rental-catalog" },
    { label: "contact", path: "/contact" },
  ];

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.background,
        padding: "10px 20px",
        position: "relative",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <Box component={Link} to="/">
        <Box
          component="img"
          src="/assets/logo/maris-logo-inflate.png"
          alt="Mari's Balloon Bar Logo"
          sx={{
            height: {
              xs: "50px",
              md: "80px",
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
          gap: 4,
          padding: 0,
          margin: 0,
          justifyContent: "center",
          flex: 1,
        }}
      >
        {navLinks.map(({ label, path }) => {
          const isActive = activeTab === label || currentPage === path;
          return (
            <Box key={path} component="li">
              <Link
                to={path}
                onClick={() => handleTabClick(label)}
                style={{
                  textDecoration: "none",
                  color: isActive ? colors.primary : colors.text,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    pb: 0.5,
                    borderBottom: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
                  }}
                >
                  {label}
                </Typography>
              </Link>
            </Box>
          );
        })}
      </Box>

      {/* Right Section - Cart, Social & Book Now */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Cart */}
        <Box sx={{ position: "relative", cursor: "pointer" }} onClick={() => navigate("/cart")}>
          <ShoppingCartIcon sx={{ color: colors.text }} />
          {cart.length > 0 && (
            <Box
              sx={{
                position: "absolute",
                top: -5,
                right: -10,
                fontSize: 12,
                color: colors.text,
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
            style={{ color: colors.text, fontSize: 24 }}
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/marisballoonbar/"
            target="_blank"
            rel="noreferrer"
            style={{ color: colors.text, fontSize: 24 }}
          >
            <FaInstagram />
          </a>
        </Box>

        {/* Book Now button */}
        <Box
          component={Link}
          to="/book-event"
          onClick={() => handleTabClick("book event")}
          sx={{
            display: { xs: "none", sm: "inline-flex" },
            alignItems: "center",
            textDecoration: "none",
            backgroundColor: colors.primary,
            color: "#fff",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            fontSize: "0.8rem",
            padding: "10px 22px",
            borderRadius: "999px",
            transition: "background-color 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: colors.primaryHover,
            },
          }}
        >
          Book Now
        </Box>

        {/* Hamburger menu for mobile */}
        <IconButton
          onClick={() => setMenuOpen(!menuOpen)}
          sx={{ display: { xs: "block", md: "none" }, color: colors.text }}
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
                color: currentPage === path ? colors.primary : colors.text,
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}
              >
                {label}
              </Typography>
            </Link>
          ))}

          {/* Book Now button */}
          <Box
            component={Link}
            to="/book-event"
            onClick={() => handleTabClick("book event")}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              backgroundColor: colors.primary,
              color: "#fff",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              padding: "10px 22px",
              borderRadius: "999px",
            }}
          >
            Book Now
          </Box>

          {/* Social icons in drawer */}
          <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
            <a href="https://www.facebook.com/Marisballoonbar?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
              <FaFacebook size={24} color={colors.text} />
            </a>
            <a href="https://www.instagram.com/marisballoonbar/" target="_blank" rel="noreferrer">
              <FaInstagram size={24} color={colors.text} />
            </a>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;

