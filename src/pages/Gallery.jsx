import Navbar from "../components/Navbar";
import GalleryGrid from "../components/Gallery";
import { Box, Typography } from "@mui/material";
import { colors } from "../theme";
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
              Our
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
              gallery
            </Box>
          </Typography>
        </Box>
      </Box>

      <GalleryGrid />
    </Box>
  );
}

export default Gallery;
