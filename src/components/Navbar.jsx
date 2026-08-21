import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiInstagram, FiShoppingCart } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Box, Typography, IconButton, Drawer } from "@mui/material";
import { useCart } from "./CartContext";
import { colors } from "../theme";

const iconColor = colors.textMuted;

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
    { label: "rentals", path: "/rental-catalog" },
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
        position: "sticky",
        top: 0,
        width: "100%",
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
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    pb: 0.5,
                    color: isActive ? colors.primary : colors.textMuted,
                    borderBottom: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
                    transition: "color 0.15s ease-in-out",
                    "&:hover": { color: colors.primary },
                  }}
                >
                  {label}
                </Typography>
              </Link>
            </Box>
          );
        })}
      </Box>

      {/* Right Section - Utility icons & CTA */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Utility group: Instagram + Cart */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: { md: 4 } }}>
          <Box
            component="a"
            href="https://www.instagram.com/marisballoonbar/"
            target="_blank"
            rel="noreferrer"
            sx={{
              display: { xs: "none", md: "flex" },
              color: iconColor,
              fontSize: 22,
              transition: "color 0.15s ease-in-out",
              "&:hover": { color: colors.primary },
            }}
          >
            <FiInstagram />
          </Box>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              cursor: "pointer",
              color: iconColor,
              fontSize: 22,
              transition: "color 0.15s ease-in-out",
              "&:hover": { color: colors.primary },
            }}
            onClick={() => navigate("/cart")}
          >
            <FiShoppingCart />
            {cart.length > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  minWidth: 15,
                  height: 15,
                  px: "3px",
                  borderRadius: "999px",
                  backgroundColor: colors.accent,
                  color: colors.text,
                  fontSize: 10,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cart.length}
              </Box>
            )}
          </Box>
        </Box>

        {/* Check Availability button */}
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
          Check Availability
        </Box>

        {/* Hamburger menu for mobile */}
        <IconButton
          onClick={() => setMenuOpen(!menuOpen)}
          sx={{ display: { xs: "block", md: "none" }, color: iconColor }}
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
                color: currentPage === path ? colors.primary : colors.textMuted,
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

          {/* Check Availability button */}
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
            Check Availability
          </Box>

          {/* Utility icons in drawer */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3, marginTop: 2 }}>
            <Box
              component="a"
              href="https://www.instagram.com/marisballoonbar/"
              target="_blank"
              rel="noreferrer"
              sx={{ display: "flex", color: iconColor, fontSize: 22, "&:hover": { color: colors.primary } }}
            >
              <FiInstagram />
            </Box>
            <Box
              sx={{ display: "flex", color: iconColor, fontSize: 22, cursor: "pointer", "&:hover": { color: colors.primary } }}
              onClick={() => {
                setMenuOpen(false);
                navigate("/cart");
              }}
            >
              <FiShoppingCart />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;

