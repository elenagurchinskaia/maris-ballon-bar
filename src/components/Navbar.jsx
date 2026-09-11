import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiInstagram, FiShoppingCart, FiHeart } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Box, Typography, IconButton, Drawer, useMediaQuery } from "@mui/material";
import { useCart } from "./CartContext";
import { useFavorites } from "./FavoritesContext";
import { colors } from "../theme";

const iconColor = colors.textMuted;
const activePillBg = "#FDEDF4";

function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPage = useLocation().pathname;
  const { cart } = useCart();
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  const closeButtonRef = useRef(null);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false); // Close menu on link click
  };

  const navLinks = [
    { label: "home", path: "/" },
    { label: "about", path: "/about" },
    { label: "gallery", path: "/gallery" },
    { label: "seasonal", path: "/seasonal-items" },
    { label: "rental catalog", path: "/rental-catalog" },
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
        px: { xs: "16px", md: "20px" },
        py: { xs: "8px", md: "10px" },
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
              xs: "46px",
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
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
              color: iconColor,
              fontSize: 22,
              transition: "color 0.15s ease-in-out",
              "&:hover": { color: colors.primary },
            }}
            onClick={() => navigate("/selected-designs")}
            aria-label={`View selected designs${favorites.length > 0 ? `, ${favorites.length} selected` : ""}`}
          >
            <FiHeart />
            {favorites.length > 0 && (
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
                {favorites.length}
              </Box>
            )}
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

        {/* Check availability button */}
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
          Check availability
        </Box>

        {/* Hamburger menu for mobile */}
        <IconButton
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          sx={{ display: { xs: "block", md: "none" }, color: iconColor }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </IconButton>
      </Box>

      {/* Drawer for mobile nav */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        transitionDuration={prefersReducedMotion ? 0 : { enter: 320, exit: 260 }}
        SlideProps={{ onEntered: () => closeButtonRef.current?.focus() }}
        PaperProps={{
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "Mobile navigation menu",
          sx: {
            width: "85vw",
            maxWidth: "380px",
            backgroundColor: colors.background,
          },
        }}
      >
        <Box
          id="mobile-nav-drawer"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header: logo + close button */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2.5,
              pt: 2.5,
              pb: 1.5,
            }}
          >
            <Box
              component={Link}
              to="/"
              onClick={() => handleTabClick("home")}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                component="img"
                src="/assets/logo/maris-logo-inflate.png"
                alt="Mari's Balloon Bar Logo"
                sx={{ height: "44px" }}
              />
            </Box>
            <IconButton
              ref={closeButtonRef}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              sx={{
                width: 44,
                height: 44,
                color: colors.primary,
                "&:hover": { backgroundColor: activePillBg },
                "&:focus-visible": { outline: `2px solid ${colors.primary}`, outlineOffset: "2px" },
              }}
            >
              <FaTimes size={18} />
            </IconButton>
          </Box>

          {/* Links */}
          <Box
            component="nav"
            aria-label="Mobile navigation"
            sx={{ px: 1.5, pt: 1 }}
          >
            <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexDirection: "column", gap: 0.5 }}>
              {navLinks.map(({ label, path }) => {
                const isActive = activeTab === label || currentPage === path;
                return (
                  <Box component="li" key={path}>
                    <Box
                      component={Link}
                      to={path}
                      onClick={() => handleTabClick(label)}
                      aria-current={isActive ? "page" : undefined}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        minHeight: 48,
                        px: 2,
                        borderRadius: "12px",
                        textDecoration: "none",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        fontSize: "0.95rem",
                        color: isActive ? colors.primary : colors.text,
                        backgroundColor: isActive ? activePillBg : "transparent",
                        transition: "background-color 0.15s ease-in-out, color 0.15s ease-in-out",
                        "&:hover": { backgroundColor: activePillBg, color: colors.primary },
                        "&:focus-visible": { outline: `2px solid ${colors.primary}`, outlineOffset: "-2px" },
                      }}
                    >
                      {label}
                    </Box>
                  </Box>
                );
              })}
            </Box>

            {/* Check availability button */}
            <Box
              component={Link}
              to="/book-event"
              onClick={() => handleTabClick("book event")}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                textDecoration: "none",
                backgroundColor: colors.primary,
                color: "#fff",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontSize: "0.95rem",
                minHeight: 52,
                mt: 3,
                mx: 0.5,
                borderRadius: "999px",
                transition: "background-color 0.2s ease-in-out, transform 0.12s ease-in-out",
                "&:hover": { backgroundColor: colors.primaryHover },
                "&:active": { transform: "scale(0.98)" },
                "&:focus-visible": { outline: `2px solid ${colors.text}`, outlineOffset: "3px" },
              }}
            >
              Check availability
            </Box>
          </Box>

          {/* Spacer pushes the footer to the bottom of the drawer */}
          <Box sx={{ flex: 1 }} />

          {/* Footer: Instagram + cart */}
          <Box
            sx={{
              borderTop: `1px solid ${colors.border}`,
              px: 2.5,
              py: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <IconButton
              component="a"
              href="https://www.instagram.com/marisballoonbar/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Mari's Balloon Bar on Instagram (opens in a new tab)"
              sx={{
                width: 48,
                height: 48,
                color: iconColor,
                fontSize: 24,
                "&:hover": { color: colors.primary },
                "&:focus-visible": { outline: `2px solid ${colors.primary}`, outlineOffset: "2px" },
              }}
            >
              <FiInstagram />
            </IconButton>
            <IconButton
              aria-label={`View selected designs${favorites.length > 0 ? `, ${favorites.length} selected` : ""}`}
              onClick={() => {
                setMenuOpen(false);
                navigate("/selected-designs");
              }}
              sx={{
                position: "relative",
                width: 48,
                height: 48,
                color: iconColor,
                fontSize: 24,
                "&:hover": { color: colors.primary },
                "&:focus-visible": { outline: `2px solid ${colors.primary}`, outlineOffset: "2px" },
              }}
            >
              <FiHeart />
              {favorites.length > 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    minWidth: 16,
                    height: 16,
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
                  {favorites.length}
                </Box>
              )}
            </IconButton>
            <IconButton
              aria-label={`View cart${cart.length > 0 ? `, ${cart.length} item${cart.length === 1 ? "" : "s"}` : ""}`}
              onClick={() => {
                setMenuOpen(false);
                navigate("/cart");
              }}
              sx={{
                position: "relative",
                width: 48,
                height: 48,
                color: iconColor,
                fontSize: 24,
                "&:hover": { color: colors.primary },
                "&:focus-visible": { outline: `2px solid ${colors.primary}`, outlineOffset: "2px" },
              }}
            >
              <FiShoppingCart />
              {cart.length > 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    minWidth: 16,
                    height: 16,
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
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;

