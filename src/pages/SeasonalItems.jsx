import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "../theme";
import { seasonalCategoryList } from "../data/seasonalCategories";
import { useDocumentMeta } from "../utils/useDocumentMeta";

function SeasonalItems() {
  useDocumentMeta(
    "Seasonal Celebrations | Mari's Balloon Bar",
    "Seasonal balloon and floral designs for Christmas, Valentine's, Easter and everyday celebrations."
  );

  return (
    <Box sx={{ backgroundColor: colors.background }}>
      <Navbar />

      {/* Hero */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 2.5, md: 3 }, pb: { xs: 2, md: 2.5 } }}>
        <Box sx={{ maxWidth: 1400, mx: "auto", textAlign: "center" }}>
          <Typography
            component="h1"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              gap: 1.5,
              flexWrap: "wrap",
              m: 0,
            }}
          >
            <Box
              component="span"
              sx={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                color: colors.text,
                fontSize: { xs: "2.75rem", md: "3.5rem" },
                lineHeight: 1,
              }}
            >
              Seasonal
            </Box>
            <Box
              component="span"
              sx={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 550,
                fontVariationSettings: '"opsz" 20, "WONK" 0',
                color: colors.softAccent,
                fontSize: { xs: "3rem", md: "3.75rem" },
                lineHeight: 1,
              }}
            >
              celebrations
            </Box>
          </Typography>
        </Box>
      </Box>

      {/* Cards */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 3, md: 4 }, pb: { xs: 8, md: 14 } }}>
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 3,
          }}
        >
          {seasonalCategoryList.map((category) => (
            <Box
              key={category.slug}
              component={Link}
              to={`/seasonal-items/${category.slug}`}
              sx={{
                border: `1px solid ${colors.border}`,
                borderRadius: "16px",
                backgroundColor: "#fff",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 24px rgba(48,34,54,0.12)",
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src={category.images[0]?.src}
                  alt={category.name}
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
                    backgroundColor: category.iconBg,
                    color: category.iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(48,34,54,0.15)",
                  }}
                >
                  {category.icon}
                </Box>
              </Box>
              <Box sx={{ p: 3, pt: 4, display: "flex", flexDirection: "column", flex: 1 }}>
                <Typography sx={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.3rem", mb: 1 }}>
                  {category.name}
                </Typography>
                <Typography sx={{ color: colors.textMuted, fontSize: "0.9rem", mb: 2, flex: 1 }}>
                  {category.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: colors.primary,
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                    width: "fit-content",
                  }}
                >
                  View Photos <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SeasonalItems;
