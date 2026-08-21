import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Box,
  Typography,
  Button,
  Dialog,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import EcoIcon from "@mui/icons-material/EnergySavingsLeaf";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { colors } from "../theme";

const seasons = [
  { id: "all", label: "All" },
  { id: "spring", label: "Spring" },
  { id: "summer", label: "Summer" },
  { id: "fall", label: "Fall" },
  { id: "winter", label: "Winter" },
];

const items = [
  {
    id: 1,
    season: "spring",
    name: "Spring Bouquet",
    src: "/assets/gallery/spring-bouquet.png",
    description:
      "Fresh, soft and full of color. Perfect for showers, brunches and outdoor parties.",
    price: "From $250",
    icon: <LocalFloristIcon fontSize="small" />,
    iconBg: "#FADCE9",
    iconColor: colors.primary,
  },
  {
    id: 2,
    season: "summer",
    name: "Summer Festival",
    src: "/assets/gallery/summer-festival.png",
    description:
      "Bold, fun and tropical vibes for your best summer celebrations.",
    price: "From $300",
    icon: <WbSunnyIcon fontSize="small" />,
    iconBg: "#FCF0C4",
    iconColor: "#D6A81A",
  },
  {
    id: 3,
    season: "fall",
    name: "Autumn Wreath",
    src: "/assets/gallery/autumn-wreath.png",
    description:
      "Warm tones and cozy feels for gatherings, birthdays and harvest parties.",
    price: "From $280",
    icon: <EcoIcon fontSize="small" />,
    iconBg: "#F6DCC0",
    iconColor: "#C56A2E",
  },
  {
    id: 4,
    season: "winter",
    name: "Winter Garland",
    src: "/assets/gallery/winter-garland.png",
    description:
      "Elegant, crisp and magical for holiday parties and winter wonderlands.",
    price: "From $350",
    icon: <AcUnitIcon fontSize="small" />,
    iconBg: "#E5DAF7",
    iconColor: colors.softAccent,
  },
];

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

function Squiggle({ color, sx, d = "M2 20 C 4 8, 12 6, 13 14 C 14 22, 6 24, 8 16 C 10 8, 20 3, 28 8" }) {
  return (
    <Box component="svg" viewBox="0 0 40 26" sx={{ width: 34, height: 22, position: "absolute", ...sx }}>
      <path d={d} stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </Box>
  );
}

function FlowerBalloon({ size = 220 }) {
  return (
    <Box
      component="img"
      src="/assets/logo/flower-inf-no-bg.png"
      alt=""
      sx={{ width: size, height: "auto", display: "block" }}
    />
  );
}

function SeasonalItems() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);
  const filtered = active === "all" ? items : items.filter((i) => i.season === active);

  return (
    <Box sx={{ backgroundColor: colors.background }}>
      <Navbar />

      {/* Hero */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 5, md: 7 }, pb: { xs: 3, md: 4 } }}>
        <Box sx={{ maxWidth: 1400, mx: "auto" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
            <Typography
              sx={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                color: colors.text,
                fontSize: { xs: "2.75rem", md: "3.5rem" },
                lineHeight: 1,
              }}
            >
              Seasonal
            </Typography>
            <Box sx={{ position: "relative", display: { xs: "none", sm: "block" }, width: 60, height: 40 }}>
              <Squiggle
                color={colors.softAccent}
                d="M2 30 C 4 14, 14 12, 16 22 C 18 32, 8 34, 10 24 C 12 14, 24 6, 34 10"
                sx={{ top: 0, left: 0, width: 44, height: 30 }}
              />
              <Confetti color={colors.accent} sx={{ top: -6, right: 0, width: 18, height: 18 }} />
            </Box>
          </Box>
          <Typography
            sx={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              fontWeight: 500,
              color: colors.primary,
              fontSize: { xs: "3rem", md: "3.75rem" },
              lineHeight: 1,
              mt: -1,
              mb: 3,
            }}
          >
            celebrations
          </Typography>
          <Typography sx={{ color: colors.textMuted, fontSize: "1.05rem", maxWidth: 480, mb: 4 }}>
            Something special for every season. Made with balloons, designed with love.
          </Typography>

          {/* Filter tabs */}
          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {seasons.map((s) => (
              <Box
                key={s.id}
                onClick={() => setActive(s.id)}
                sx={{
                  cursor: "pointer",
                  pb: 0.5,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.05em",
                  color: active === s.id ? colors.primary : colors.textMuted,
                  borderBottom: active === s.id ? `2px solid ${colors.primary}` : "2px solid transparent",
                }}
              >
                {s.label}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Cards */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 3, md: 4 }, pb: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 3,
          }}
        >
          {filtered.map((item) => (
            <Box
              key={item.id}
              sx={{
                border: `1px solid ${colors.border}`,
                borderRadius: "16px",
                backgroundColor: "#fff",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src={item.src}
                  alt={item.name}
                  sx={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -20,
                    left: 20,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: item.iconBg,
                    color: item.iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(48,34,54,0.15)",
                  }}
                >
                  {item.icon}
                </Box>
              </Box>
              <Box sx={{ p: 3, pt: 4, display: "flex", flexDirection: "column", flex: 1 }}>
                <Typography sx={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.3rem", mb: 1 }}>
                  {item.name}
                </Typography>
                <Typography sx={{ color: colors.textMuted, fontSize: "0.9rem", mb: 2, flex: 1 }}>
                  {item.description}
                </Typography>
                <Typography sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>{item.price}</Typography>
                <Box
                  onClick={() => setSelected(item)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: colors.primary,
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                    cursor: "pointer",
                    width: "fit-content",
                  }}
                >
                  View Details <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Custom CTA panel */}
      <Box sx={{ px: { xs: 3, md: 8 }, pb: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#FCE4ED",
            borderRadius: "20px",
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 5 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Box sx={{ maxWidth: 460, textAlign: { xs: "center", md: "left" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, justifyContent: { xs: "center", md: "flex-start" } }}>
              <Typography
                sx={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 700,
                  color: colors.text,
                  fontSize: { xs: "1.9rem", md: "2.2rem" },
                }}
              >
                Need something{" "}
                <Box component="span" sx={{ fontStyle: "italic", fontWeight: 500, color: colors.primary }}>
                  custom?
                </Box>
              </Typography>
              <Squiggle
                color={colors.accent}
                d="M2 14 C 6 4, 16 4, 18 12 C 20 20, 10 22, 12 14 C 14 6, 26 2, 32 8"
                sx={{ position: "relative", top: 0, left: 0, display: { xs: "none", sm: "block" } }}
              />
            </Box>
            <Typography sx={{ color: colors.textMuted, mt: 2, mb: 3 }}>
              Every celebration is different. Tell us your theme, colors and date and we'll create something just for you.
            </Typography>
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
              Start A Custom Design
            </Button>
          </Box>

          <Box sx={{ position: "relative", flexShrink: 0, display: { xs: "none", sm: "block" } }}>
            <Squiggle
              color={colors.softAccent}
              d="M2 4 C 10 10, 6 20, 12 24"
              sx={{ top: -10, left: -30, width: 24, height: 40 }}
            />
            <Squiggle
              color={colors.softAccent}
              d="M2 2 C 8 8, 4 16, 10 22"
              sx={{ bottom: -10, left: -20, width: 20, height: 34 }}
            />
            <Confetti color={colors.accent} sx={{ bottom: 10, right: -10, width: 22, height: 22 }} />
            <FlowerBalloon size={200} />
          </Box>
        </Box>
      </Box>

      <Dialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: "16px", backgroundColor: colors.background } }}
      >
        {selected && (
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={() => setSelected(null)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "#fff",
                boxShadow: "0 4px 10px rgba(48,34,54,0.15)",
                "&:hover": { backgroundColor: "#fff" },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
            <Box component="img" src={selected.src} alt={selected.name} sx={{ width: "100%", height: 280, objectFit: "cover", display: "block" }} />
            <Box sx={{ p: 4 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: selected.iconBg,
                  color: selected.iconColor,
                  mb: 2,
                }}
              >
                {selected.icon}
              </Box>
              <Typography sx={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.6rem", mb: 1 }}>
                {selected.name}
              </Typography>
              <Typography sx={{ color: colors.textMuted, mb: 2 }}>{selected.description}</Typography>
              <Typography sx={{ fontWeight: 700, color: colors.text, mb: 3 }}>{selected.price}</Typography>
              <Typography sx={{ color: colors.textMuted, fontSize: "0.85rem", fontStyle: "italic", mb: 3 }}>
                Full booking details for this design are coming soon — reach out and we'll help you plan it.
              </Typography>
              <Button
                component={Link}
                to="/book-event"
                endIcon={<ArrowForwardIcon />}
                onClick={() => setSelected(null)}
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
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}

export default SeasonalItems;
