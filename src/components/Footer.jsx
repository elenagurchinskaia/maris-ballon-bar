import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, IconButton, Divider } from "@mui/material";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "../theme";

const lightText = "rgba(255,255,255,0.85)";
const dividerColor = "rgba(255,255,255,0.08)";
const mSize = { xs: 100, sm: 150, md: 190 };

function Footer() {
  return (
    <Box component="footer" sx={{ position: "relative", overflow: "visible" }}>
      {/* Shallow wave — top edge of the plum footer only */}
      <Box
        component="svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        sx={{
          display: "block",
          width: "100%",
          height: { xs: 28, sm: 34, md: 44 },
          mb: "-1px",
          backgroundColor: colors.background,
        }}
      >
        <path
          d="M0,10 C 380,-20 560,65 760,65 C 960,65 1120,-10 1440,15 L1440,100 L0,100 Z"
          fill={colors.text}
        />
      </Box>

      {/* Inflatable M — absolutely positioned, out of document flow */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: "3%", sm: "6%", md: "6%" },
          top: { xs: -47, sm: -70, md: -89 },
          zIndex: 10,
        }}
      >
        <Box
          component="img"
          src="/assets/logo/m-inf-no-bg.png"
          alt=""
          sx={{
            width: mSize,
            height: mSize,
            display: "block",
            filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.15))",
          }}
        />
      </Box>

      {/* Plum footer body */}
      <Box sx={{ backgroundColor: colors.text }}>
        <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 3, md: 8 } }}>
          {/* CTA row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: { xs: 1, sm: 2.5 },
              py: { xs: "18px", sm: "26px", md: "32px" },
              pr: { sm: "120px", md: "190px" },
            }}
          >
            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  fontSize: { xs: "1.35rem", md: "1.75rem" },
                }}
              >
                Let's create something{" "}
                <Box
                  component="span"
                  sx={{
                    fontFamily: "'Fraunces', serif",
                    fontStyle: "italic",
                    fontWeight: 550,
                    fontVariationSettings: '"opsz" 20, "WONK" 0',
                    color: colors.primary,
                  }}
                >
                  beautiful
                </Box>{" "}
                together!
              </Typography>
              <Typography sx={{ color: lightText, fontSize: "0.78rem", mt: 0.25 }}>
                Tell us about your celebration, and we'll bring your vision to life.
              </Typography>
            </Box>

            <Box sx={{ flex: { md: 1 }, display: { xs: "none", md: "block" } }} />

            <Button
              component={Link}
              to="/book-event"
              endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem !important" }} />}
              sx={{
                flexShrink: 0,
                backgroundColor: colors.primary,
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: "0.05em",
                borderRadius: "999px",
                px: 2.25,
                py: 0.9,
                fontSize: "0.72rem",
                "&:hover": { backgroundColor: colors.primaryHover },
              }}
            >
              Check availability
            </Button>

            <Box sx={{ flex: { md: 1 }, display: { xs: "none", md: "block" } }} />
          </Box>

          <Divider sx={{ borderColor: dividerColor }} />

          {/* Slim info row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 0.5,
              py: "12px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography sx={{ fontSize: { xs: "0.8rem", md: "0.72rem" }, lineHeight: { xs: 1.6, md: 1.5 } }}>
              <Box component="span" sx={{ color: "#fff", fontWeight: 700, letterSpacing: "0.06em" }}>
                MARI’S BALLOON BAR
              </Box>{" "}
              <Box component="span" sx={{ color: lightText }}>
                · Serving Austin, Texas &amp; surrounding areas ·{" "}
              </Box>
              <Box
                component="a"
                href="mailto:marisballoonbar@gmail.com"
                sx={{ color: lightText, textDecoration: "none", "&:hover": { color: colors.primary } }}
              >
                marisballoonbar@gmail.com
              </Box>
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.25 }}>
              <IconButton
                href="https://www.instagram.com/marisballoonbar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                size="small"
                sx={{ color: "#fff", p: "4px", "&:hover": { color: colors.primary } }}
              >
                <FaInstagram size={14} />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/Marisballoonbar?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                size="small"
                sx={{ color: "#fff", p: "4px", "&:hover": { color: colors.primary } }}
              >
                <FaFacebook size={14} />
              </IconButton>
              <IconButton
                href="mailto:marisballoonbar@gmail.com"
                aria-label="Email"
                size="small"
                sx={{ color: "#fff", p: "4px", "&:hover": { color: colors.primary } }}
              >
                <FaEnvelope size={14} />
              </IconButton>
              <Typography sx={{ color: lightText, fontSize: { xs: "0.78rem", md: "0.72rem" }, ml: 0.75 }}>
                © {new Date().getFullYear()} Mari’s Balloon Bar
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
