import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import InquiryForm from "../components/InquiryForm";
import { useFavorites } from "../components/FavoritesContext";
import { Box, Typography, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "../theme";
import { useDocumentMeta } from "../utils/useDocumentMeta";

function buildPrefilledMessage(favorites) {
  if (favorites.length === 0) return "";
  const lines = favorites.map(
    (item) => `- ${item.categoryName}: ${window.location.origin}${item.src}`
  );
  return `I'd love to book these designs for my event:\n${lines.join("\n")}`;
}

function SelectedDesigns() {
  useDocumentMeta(
    "Selected Designs | Mari's Balloon Bar",
    "Review the seasonal designs you've selected and send a request to Mari's Balloon Bar."
  );

  const { favorites, removeFavorite, clearFavorites } = useFavorites();

  return (
    <Box sx={{ backgroundColor: colors.background }}>
      <Navbar />

      {/* Hero */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 5, md: 7 }, pb: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            gap: 1.5,
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              color: colors.text,
              fontSize: { xs: "2.75rem", md: "3.5rem" },
              lineHeight: 1,
            }}
          >
            Selected
          </Typography>
          <Typography
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
            designs
          </Typography>
        </Box>
      </Box>

      {favorites.length === 0 ? (
        <Box sx={{ px: { xs: 3, md: 8 }, pb: { xs: 10, md: 14 }, textAlign: "center" }}>
          <Typography sx={{ color: colors.textMuted, fontSize: "1.05rem", mb: 3 }}>
            You haven't selected any designs yet. Browse our seasonal galleries and tap the heart on any photo you love.
          </Typography>
          <Button
            component={Link}
            to="/seasonal-items"
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
            Browse Seasonal Designs
          </Button>
        </Box>
      ) : (
        <Box sx={{ px: { xs: 3, md: 8 }, pb: { xs: 10, md: 14 } }}>
          <Box sx={{ maxWidth: 800, mx: "auto" }}>
            <Box
              sx={{
                backgroundColor: "#fff",
                border: `1px solid ${colors.border}`,
                borderRadius: "20px",
                overflow: "hidden",
                mb: 4,
              }}
            >
              {favorites.map((item, idx) => (
                <Box
                  key={item.src}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    px: { xs: 2.5, md: 3 },
                    py: 2,
                    borderBottom: idx < favorites.length - 1 ? `1px solid ${colors.border}` : "none",
                  }}
                >
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.alt}
                    sx={{ width: 60, height: 60, objectFit: "cover", borderRadius: "10px", flexShrink: 0 }}
                  />
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 700, color: colors.text }}>{item.categoryName}</Typography>
                    <Typography
                      sx={{
                        color: colors.textMuted,
                        fontSize: "0.85rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.alt}
                    </Typography>
                  </Box>
                  <IconButton
                    onClick={() => removeFavorite(item.src)}
                    aria-label={`Remove ${item.alt} from selected designs`}
                    sx={{ color: colors.textMuted, "&:hover": { color: colors.primary } }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>

            <InquiryForm
              key={favorites.map((item) => item.src).join(",")}
              heading="Request Your Selected Designs"
              description="Let us know about your event, and we'll follow up about the designs above."
              submitLabel="Send Request"
              successMessage="Thank you! Your selected designs have been sent to Mari. We'll follow up within 1-2 business days."
              preselectedServices={["Seasonal designs"]}
              prefilledMessage={buildPrefilledMessage(favorites)}
              sectionPadding={false}
              onSuccess={clearFavorites}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default SelectedDesigns;
