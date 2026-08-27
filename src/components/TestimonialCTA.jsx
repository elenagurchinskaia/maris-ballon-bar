import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { colors } from "../theme";

const testimonialBg = colors.background;

const testimonials = [
  {
    quote:
      "Mari is incredibly talented and so easy to work with! The balloon installation was beyond our expectations and made our event truly magical.",
    name: "Jessica M.",
  },
  {
    quote:
      "From the first message to the final balloon pop, everything was seamless. Our guests are still talking about the arch!",
    name: "Amanda R.",
  },
  {
    quote:
      "Professional, creative, and so much fun to work with. Mari brought our vision to life better than we imagined.",
    name: "Priya S.",
  },
];

function StarBalloon({ size = 170 }) {
  return (
    <Box
      component="img"
      src="/assets/logo/star-inf-no-bg.png"
      alt=""
      sx={{ width: size, height: "auto", display: "block" }}
    />
  );
}

function Confetti({ color, sx }) {
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ width: 16, height: 16, position: "absolute", ...sx }}>
      <path
        d="M12 0 L14.2 9.3 L23 12 L14.2 14.7 L12 24 L9.8 14.7 L1 12 L9.8 9.3 Z"
        fill={color}
      />
    </Box>
  );
}

function TestimonialCTA() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <Box sx={{ position: "relative" }}>
      {/* Testimonial band */}
      <Box
        sx={{
          backgroundColor: testimonialBg,
          position: "relative",
          pt: { xs: 5, md: 8 },
          pb: { xs: 6, md: 14 },
          px: { xs: 3, md: 8 },
          overflow: "hidden",
        }}
      >
        <Confetti color={colors.primary} sx={{ top: 30, left: "8%", transform: "rotate(15deg)" }} />
        <Confetti color={colors.accent} sx={{ top: 70, right: "10%" }} />

        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={prev}
            aria-label="Previous testimonial"
            sx={{
              position: "absolute",
              left: { xs: 0, md: -32 },
              zIndex: 2,
              backgroundColor: "#fff",
              boxShadow: "0 6px 16px rgba(48,34,54,0.15)",
              "&:hover": { backgroundColor: "#fff" },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              gap: { xs: 2, md: 6 },
              px: { xs: 6, md: 0 },
            }}
          >
            <Box sx={{ display: { xs: "none", md: "block" }, flexShrink: 0 }}>
              <StarBalloon size={170} />
            </Box>

            <Box sx={{ textAlign: "center", maxWidth: 620 }}>
              <FormatQuoteIcon sx={{ color: colors.primary, fontSize: 36, transform: "scaleX(-1)" }} />
              <Typography
                sx={{
                  color: colors.text,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  lineHeight: 1.55,
                  mb: 2,
                }}
              >
                {current.quote}
              </Typography>
              <Typography sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
                — {current.name}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: colors.primary, fontSize: 22 }} />
                ))}
              </Box>
            </Box>

            <Box sx={{ display: { xs: "none", md: "block" }, flexShrink: 0, width: 170 }} />
          </Box>

          <IconButton
            onClick={next}
            aria-label="Next testimonial"
            sx={{
              position: "absolute",
              right: { xs: 0, md: -32 },
              zIndex: 2,
              backgroundColor: "#fff",
              boxShadow: "0 6px 16px rgba(48,34,54,0.15)",
              "&:hover": { backgroundColor: "#fff" },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default TestimonialCTA;
