import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";

import { GiBalloons } from "react-icons/gi";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography, Button, Divider } from "@mui/material";
import { colors } from "../theme";

const features = [
  {
    icon: <GiBalloons size={26} />,
    title: "Custom Designs",
    description: "Tailored to your vision and your event.",
    color: colors.primary,
  },
  {
    icon: <AutoAwesomeIcon fontSize="small" />,
    title: "Premium Quality",
    description: "Beautiful, high-quality balloons that last.",
    color: colors.softAccent,
  },
  {
    icon: <CalendarMonthIcon fontSize="small" />,
    title: "On-Time Setup",
    description: "We handle the details so you can enjoy.",
    color: colors.accent,
  },
  {
    icon: <FavoriteBorderIcon fontSize="small" />,
    title: "Made With Love",
    description: "Passion in every detail, always.",
    color: colors.primary,
  },
];

function Home() {
  return (
    <Box sx={{ backgroundColor: colors.background }}>
      {/* Header - fixed so it stays visible over the hero and while scrolling */}
      <Box sx={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 10 }}>
        <Navbar />
      </Box>

      {/* Hero */}
      <Box
        sx={{
          pt: { xs: "90px", md: "130px" },
          pb: { xs: 6, md: 10 },
          px: { xs: 3, md: 8 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 5, md: 8 },
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        {/* Text column */}
        <Box sx={{ flex: 1, position: "relative" }}>
          <Box
            component="svg"
            viewBox="0 0 60 40"
            sx={{
              position: "absolute",
              top: -18,
              right: { xs: 8, md: 60 },
              width: 50,
              height: 34,
              display: { xs: "none", sm: "block" },
            }}
          >
            <path
              d="M2 20 C 10 5, 20 5, 20 15 C 20 25, 10 25, 12 15 C 14 5, 25 2, 30 12"
              stroke={colors.softAccent}
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </Box>
          <Box
            component="svg"
            viewBox="0 0 24 24"
            sx={{
              position: "absolute",
              top: 14,
              right: { xs: 0, md: 24 },
              width: 20,
              height: 20,
              display: { xs: "none", sm: "block" },
            }}
          >
            <path
              d="M12 0 L14.2 9.3 L23 12 L14.2 14.7 L12 24 L9.8 14.7 L1 12 L9.8 9.3 Z"
              fill={colors.accent}
            />
          </Box>

          <Typography
            sx={{
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              color: colors.text,
              mb: 1,
            }}
          >
            Bespoke Balloons For
          </Typography>

          <Typography variant="h1" sx={{ lineHeight: 1, mb: 3 }}>
            <Box
              component="span"
              sx={{
                display: "block",
                fontStyle: "italic",
                fontWeight: 500,
                color: colors.primary,
                fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
              }}
            >
              every
            </Box>
            <Box
              component="span"
              sx={{
                display: "block",
                fontWeight: 700,
                color: colors.text,
                fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
              }}
            >
              moment
            </Box>
          </Typography>

          <Typography
            sx={{
              color: colors.textMuted,
              fontSize: "1.05rem",
              maxWidth: 440,
              mb: 4,
            }}
          >
            Luxury balloon installations for birthdays, events, weddings and
            everything in between.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              component={Link}
              to="/book-event"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: colors.primary,
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: "0.05em",
                borderRadius: "999px",
                px: 3.5,
                py: 1.5,
                "&:hover": { backgroundColor: colors.primaryHover },
              }}
            >
              Book Your Date
            </Button>
            <Button
              component={Link}
              to="/gallery"
              variant="outlined"
              sx={{
                borderColor: colors.primary,
                color: colors.primary,
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: "0.05em",
                borderRadius: "999px",
                px: 3.5,
                py: 1.5,
                "&:hover": {
                  borderColor: colors.primaryHover,
                  backgroundColor: "rgba(242, 90, 155, 0.08)",
                },
              }}
            >
              View Gallery
            </Button>
          </Box>
        </Box>

        {/* Image column */}
        <Box
          component="img"
          src="/assets/logo/balloons-arch.png"
          alt="Custom balloon installation by Mari's Balloon Bar"
          sx={{
            flex: 1,
            width: "100%",
            maxWidth: { xs: "100%", md: 560 },
            height: "auto",
          }}
        />
      </Box>

      {/* Features */}
      <Box
        sx={{
          px: { xs: 3, md: 8 },
          pb: { xs: 6, md: 10 },
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        <Box
          sx={{
            border: `1px solid ${colors.border}`,
            borderRadius: "20px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            py: { xs: 1, md: 4 },
            px: { xs: 3, md: 4 },
          }}
        >
          {features.map((feature, index) => (
            <React.Fragment key={feature.title}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  py: { xs: 2, md: 0 },
                }}
              >
                <Box sx={{ color: feature.color, fontSize: 26, mt: 0.5 }}>
                  {feature.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "0.85rem",
                      letterSpacing: "0.03em",
                      mb: 0.5,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography sx={{ color: colors.textMuted, fontSize: "0.9rem", maxWidth: 220 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
              {index < features.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ display: { xs: "none", md: "block" }, mx: 2 }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "#fff" }}>
        <Gallery />
      </Box>
    </Box>
  );
}

export default Home;
