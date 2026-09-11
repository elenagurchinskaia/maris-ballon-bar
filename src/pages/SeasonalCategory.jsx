import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Typography, Button, Dialog, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { colors } from "../theme";
import { seasonalCategories } from "../data/seasonalCategories";
import { useFavorites } from "../components/FavoritesContext";
import { useDocumentMeta } from "../utils/useDocumentMeta";

function SeasonalCategory() {
  const { slug } = useParams();
  const category = seasonalCategories[slug];
  const [selected, setSelected] = useState(null);
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  useDocumentMeta(
    category ? `${category.name} | Mari's Balloon Bar` : "Seasonal | Mari's Balloon Bar",
    category?.description
  );

  if (!category) {
    return <Navigate to="/seasonal-items" replace />;
  }

  const toFavoriteItem = (img) => ({
    src: img.src,
    alt: img.alt,
    categoryName: category.name,
    categorySlug: category.slug,
  });

  return (
    <Box sx={{ backgroundColor: colors.background }}>
      <Navbar />

      {/* Hero */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 2.5, md: 3 }, pb: { xs: 2, md: 2.5 } }}>
        <Box sx={{ maxWidth: 1400, mx: "auto" }}>
          <Box
            component={Link}
            to="/seasonal-items"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              color: colors.primary,
              fontWeight: 700,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              textDecoration: "none",
              mb: { xs: 2, md: 3 },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 16 }} /> Seasonal Celebrations
          </Box>

          <Typography
            component="h1"
            sx={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              color: colors.text,
              fontSize: { xs: "2.5rem", md: "3.25rem" },
              lineHeight: 1,
              mb: 2,
            }}
          >
            {category.name}
          </Typography>
          <Typography sx={{ color: colors.textMuted, fontSize: "1rem", maxWidth: 640, mb: 3 }}>
            {category.description}
          </Typography>

          <Button
            component={Link}
            to={
              favorites.length > 0
                ? "/selected-designs"
                : `/book-event?service=${encodeURIComponent("Seasonal designs")}&design=${encodeURIComponent(category.name)}`
            }
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: colors.primary,
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: "0.05em",
              fontSize: { xs: "0.85rem", md: "0.95rem" },
              borderRadius: "999px",
              px: 3.5,
              py: 1.5,
              "&:hover": { backgroundColor: colors.primaryHover },
            }}
          >
            {favorites.length > 0
              ? `Request Selected Designs (${favorites.length})`
              : "Request This Design"}
          </Button>
        </Box>
      </Box>

      {/* Photo grid */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 3, md: 4 }, pb: { xs: 8, md: 14 } }}>
        <Box sx={{ maxWidth: 1400, mx: "auto" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {category.images.map((img) => {
              const favorited = isFavorite(img.src);
              return (
                <Box
                  key={img.src}
                  sx={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    aspectRatio: "4 / 5",
                    boxShadow: "0 8px 20px rgba(48,34,54,0.12)",
                  }}
                >
                  <Box
                    component="button"
                    type="button"
                    onClick={() => setSelected(img)}
                    aria-label={`View larger photo: ${img.alt}`}
                    sx={{
                      appearance: "none",
                      border: "none",
                      p: 0,
                      cursor: "pointer",
                      display: "block",
                      width: "100%",
                      height: "100%",
                      "&:focus-visible": { outline: `2px solid ${colors.primary}`, outlineOffset: "3px" },
                    }}
                  >
                    <Box
                      component="img"
                      src={img.src}
                      alt={img.alt}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "scale(1.04)" },
                      }}
                    />
                  </Box>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(toFavoriteItem(img));
                    }}
                    aria-label={favorited ? `Remove ${img.alt} from selected designs` : `Add ${img.alt} to selected designs`}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 10px rgba(48,34,54,0.15)",
                      color: favorited ? colors.primary : colors.textMuted,
                      "&:hover": { backgroundColor: "#fff" },
                    }}
                  >
                    {favorited ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
                  </IconButton>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* Lightbox */}
      <Dialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { borderRadius: "16px", backgroundColor: colors.background, overflow: "hidden" } }}
      >
        {selected && (
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={() => setSelected(null)}
              aria-label="Close"
              sx={{
                position: "absolute",
                zIndex: 2,
                top: 8,
                right: 8,
                backgroundColor: "#fff",
                boxShadow: "0 4px 10px rgba(48,34,54,0.15)",
                "&:hover": { backgroundColor: "#fff" },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
            <Box
              component="img"
              src={selected.src}
              alt={selected.alt}
              sx={{
                width: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                display: "block",
                backgroundColor: "#000",
              }}
            />
            <Box sx={{ p: 2.5, textAlign: "center" }}>
              <Button
                onClick={() => toggleFavorite(toFavoriteItem(selected))}
                startIcon={isFavorite(selected.src) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                sx={{
                  backgroundColor: isFavorite(selected.src) ? colors.primary : "transparent",
                  color: isFavorite(selected.src) ? "#fff" : colors.primary,
                  border: `1.5px solid ${colors.primary}`,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  fontSize: "0.8rem",
                  borderRadius: "999px",
                  px: 3,
                  py: 1.25,
                  "&:hover": {
                    backgroundColor: isFavorite(selected.src) ? colors.primaryHover : "#fff",
                  },
                }}
              >
                {isFavorite(selected.src) ? "Selected" : "Select This Photo"}
              </Button>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}

export default SeasonalCategory;
