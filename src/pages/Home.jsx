import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import TestimonialCTA from "../components/TestimonialCTA";

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
      <Navbar />

      {/* Hero */}
      <Box
        sx={{
          pt: { xs: 3, md: 4 },
          pb: { xs: 6, md: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 5, md: 0 },
        }}
      >
        {/* Text column */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            px: { xs: 3, md: 8 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontSize: { xs: "1rem", md: "0.85rem" },
              color: colors.text,
              mb: 0,
            }}
          >
            Bespoke Balloons For
          </Typography>

          <Typography variant="h1" sx={{ lineHeight: 1, mb: 1, mt: -1 }}>
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                fontWeight: 500,
                color: colors.primary,
                fontSize: { xs: "4.25rem", sm: "5.25rem", md: "6rem" },
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
                fontSize: { xs: "4.25rem", sm: "5.25rem", md: "6rem" },
                mt: -1,
              }}
            >
              moment
            </Box>
          </Typography>

          <Typography
            sx={{
              color: colors.textMuted,
              fontSize: { xs: "1.2rem", md: "1.05rem" },
              maxWidth: { xs: "100%", md: 600 },
              mb: 4,
            }}
          >
            Luxury balloon installations for birthdays, events, weddings and
            everything in between.
          </Typography>

          <Box sx={{ display: "flex", gap: { xs: 2, md: 1 }, flexWrap: "wrap" }}>
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
                whiteSpace: "nowrap",
                px: { xs: 3.5, md: 3 },
                py: 1.5,
                fontSize: { md: "0.75rem" },
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
                whiteSpace: "nowrap",
                px: { xs: 3.5, md: 1.75 },
                py: 1.5,
                fontSize: { md: "0.75rem" },
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
          sx={{
            width: { xs: "100%", md: "80%" },
            flexShrink: 0,
            height: { xs: 380, sm: 480, md: "calc(100vh - 90px)" },
            overflow: "hidden",
            backgroundColor: colors.background,
            transform: { md: "translateX(-64px)" },
          }}
        >
          <Box
            component="img"
            src="/assets/logo/balloons-arch-v3.png"
            alt="Custom balloon installation by Mari's Balloon Bar"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </Box>
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

      <Box sx={{ backgroundColor: colors.background }}>
        <Gallery />
      </Box>

      <TestimonialCTA />
    </Box>
  );
}

export default Home;
