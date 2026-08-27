import Navbar from "../components/Navbar";
import GalleryGrid from "../components/Gallery";
import { Box, Typography } from "@mui/material";
import { colors } from "../theme";
import { Sparkle, Squiggle } from "../components/Decor";
import { useDocumentMeta } from "../utils/useDocumentMeta";

function Gallery() {
  useDocumentMeta(
    "Gallery | Mari's Balloon Bar",
    "Real balloon installations, backdrops, and event styling from celebrations across Austin, Texas."
  );

  return (
    <Box sx={{ backgroundColor: colors.background }}>
      <Navbar />

      {/* Hero */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 5, md: 7 }, pb: { xs: 3, md: 4 } }}>
        <Box sx={{ maxWidth: 1400, mx: "auto" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap", position: "relative" }}>
            <Typography
              sx={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                color: colors.text,
                fontSize: { xs: "2.75rem", md: "3.5rem" },
                lineHeight: 1,
              }}
            >
              Our
            </Typography>
            <Box sx={{ position: "relative", display: { xs: "none", sm: "block" }, width: 40, height: 40 }}>
              <Squiggle color={colors.softAccent} sx={{ top: 0, left: 0, width: 34, height: 24 }} />
              <Sparkle color={colors.accent} sx={{ top: -8, right: -4, width: 16, height: 16 }} />
            </Box>
          </Box>
          <Typography
            sx={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              fontWeight: 550,
              fontVariationSettings: '"opsz" 20, "WONK" 0',
              color: colors.softAccent,
              fontSize: { xs: "3rem", md: "3.75rem" },
              lineHeight: 1,
              mt: -1,
              mb: 3,
            }}
          >
            gallery
          </Typography>
          <Typography sx={{ color: colors.textMuted, fontSize: "1.05rem", maxWidth: 480 }}>
            A look at real installations, straight from real celebrations.
          </Typography>
        </Box>
      </Box>

      <GalleryGrid />
    </Box>
  );
}

export default Gallery;
