import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "../theme";

const categoryLabel = {
  birthdays: "Birthdays",
  "baby-showers": "Baby Showers",
  weddings: "Weddings",
  corporate: "Corporate",
  seasonal: "Seasonal",
  other: "Celebrations",
};

// Sort/filter pills — grouped by installation type rather than event type.
// Filtering only ever hides non-matching photos; it never reorders the
// underlying list, so each type's photos keep the same relative sequence
// they have in "All work".
const filterOptions = [
  { value: "all", label: "All work" },
  { value: "marquee", label: "Marquee letters" },
  { value: "backdrop", label: "Arches & backdrops" },
  { value: "shimmer", label: "Shimmer walls" },
  { value: "garland", label: "Garlands" },
  { value: "balloons-florals", label: "Balloons & florals" },
];

// Curated order: alternates event type/palette/framing throughout so no two
// adjacent photos read as the same install. This order is fixed — filtering
// only shows/hides, it never reshuffles it.
const images = [
  {
    src: "/assets/gallery/gallery-01-boho.png",
    alt: "Boho-style '40' birthday marquee numbers with a mustard, plum and blush balloon garland in a backyard",
    category: "birthdays",
    type: "marquee",
  },
  {
    src: "/assets/gallery/gallery-02-bonjour-bebe.jpg",
    alt: "'Bonjour Bebe' gender reveal backdrop with a light blue and white balloon garland",
    category: "baby-showers",
    type: "backdrop",
  },
  {
    src: "/assets/gallery/gallery-11.jpg",
    alt: "'US Bank' step-and-repeat backdrop with a red, white and navy balloon garland",
    category: "corporate",
    type: "backdrop",
  },
  {
    src: "/assets/gallery/gallery-15-cowgirl.jpg",
    alt: "Cow-print '28' birthday marquee numbers with a pink balloon garland and 'Happy Birthday' neon sign",
    category: "birthdays",
    type: "marquee",
  },
  {
    src: "/assets/gallery/gallery-12-christmas-tree.jpg",
    alt: "Balloon Christmas tree and red, green and gold garland beside lit marquee letters",
    category: "seasonal",
    type: "marquee",
  },
  {
    src: "/assets/gallery/gallery-08-bridal-shower.jpg",
    alt: "'Miss to Mrs.' bridal shower backdrop with a sage, ivory and gold balloon garland",
    category: "weddings",
    type: "backdrop",
  },
  {
    src: "/assets/gallery/gallery-17-hook-em.jpg",
    alt: "'Hook 'Em' marquee letters with a burnt orange, gold and white balloon garland and fall florals",
    category: "other",
    type: "marquee",
  },
  {
    src: "/assets/gallery/gallery-03-bridal-tiny-box.jpg",
    alt: "Blush balloon garland with fresh florals beside a 'Baby in Bloom' sign",
    category: "baby-showers",
    type: "garland",
  },
  {
    src: "/assets/gallery/gallery-07-70th-birthday.jpg",
    alt: "'70' birthday marquee numbers with a black and silver balloon garland beside a sequin backdrop",
    category: "birthdays",
    type: "shimmer",
  },
  {
    src: "/assets/gallery/gallery-19-gama.jpg",
    alt: "'GAMA' marquee letters with a red, white and blue balloon garland",
    category: "corporate",
    type: "marquee",
  },
  {
    src: "/assets/gallery/gallery-27-tropical.jpg",
    alt: "Tropical pink, orange and yellow balloon garland with palm leaves against a greenery wall",
    category: "other",
    type: "garland",
  },
  {
    src: "/assets/gallery/gallery-22-hello-kitty.jpg",
    alt: "Hello Kitty birthday backdrop with pink and teal balloons and a 'Happy Birthday' neon sign",
    category: "birthdays",
    type: "backdrop",
  },
  {
    src: "/assets/gallery/gallery-24-marquees.jpg",
    alt: "Lit '2024' New Year's Eve marquee numbers with white and gold balloon clusters",
    category: "seasonal",
    type: "marquee",
  },
  {
    src: "/assets/gallery/gallery-09-grad.jpg",
    alt: "Black and gold 'GRAD' marquee letters with balloon clusters on an outdoor patio",
    category: "other",
    type: "marquee",
  },
  {
    src: "/assets/gallery/gallery-04-garland.jpg",
    alt: "Blush, cream and black balloon garland installed over a kitchen island",
    category: "other",
    type: "garland",
  },
  {
    src: "/assets/gallery/gallery-18-gig-em.jpg",
    alt: "'Gig Em' marquee letters with a maroon, black and gold balloon garland",
    category: "other",
    type: "marquee",
  },
  {
    src: "/assets/gallery/gallery-06-boho-chic.jpg",
    alt: "Boho chic sage, ivory and gold balloon arch installation with fresh florals",
    category: "other",
    type: "garland",
  },
  {
    src: "/assets/gallery/gallery-20-revelry.jpg",
    alt: "'Revelry' office backdrop with a black, blush and cream balloon garland",
    category: "corporate",
    type: "backdrop",
  },
  {
    src: "/assets/gallery/gallery-05-grad-26.jpg",
    alt: "Graduation guest posing beside a lit 'GRAD' marquee sign with black and gold balloon clusters",
    category: "other",
    type: "marquee",
  },
  {
    src: "/assets/gallery/gallery-25-shimmer-silver.jpg",
    alt: "'GVA' marquee letters with a maroon, silver and white winter balloon garland and snowflakes",
    category: "seasonal",
    type: "marquee",
  },
  {
    src: "/assets/gallery/gallery-10-dog-party.jpg",
    alt: "French bulldog neon signs with a pink and rose gold balloon garland around a dinner table",
    category: "other",
    type: "garland",
  },
  {
    src: "/assets/gallery/gallery-26-shimmer-wall-black.jpg",
    alt: "Black, teal, white and silver balloon garland beside a black shimmer wall",
    category: "corporate",
    type: "shimmer",
  },
  {
    src: "/assets/gallery/gallery-14-farewell-arch.jpg",
    alt: "Pink, red and gold rope balloon arch on a stage",
    category: "other",
    type: "backdrop",
  },
  {
    src: "/assets/gallery/gallery-13.jpg",
    alt: "'Congrats Grad' neon backdrop with lit '25' marquee numbers and a black and silver balloon garland",
    category: "other",
    type: "shimmer",
  },
  {
    src: "/assets/gallery/gallery-16-friendsgiving.jpg",
    alt: "Blush, mauve and cream balloon arch in a cozy living room",
    category: "other",
    type: "garland",
  },
  {
    src: "/assets/gallery/gallery-21-mini-shimmer.jpg",
    alt: "Gold shimmer wall panel with a black and gold balloon garland",
    category: "other",
    type: "shimmer",
  },
  {
    src: "/assets/gallery/gallery-23-helium.jpg",
    alt: "Rose gold and black orbz balloons on tassel ribbon",
    category: "other",
    type: "balloons-florals",
  },
];

// Subtle warmth/brightness/contrast lift so the balloons read as vibrant
// rather than the slightly flat/gray tone of the raw phone photos.
const photoFilter = "brightness(1.06) saturate(1.15) contrast(1.04)";

function Gallery() {
  const [selected, setSelected] = useState(null);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const onScroll = () => {
      setShowStickyBar(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // .filter() only ever removes non-matching entries — it never reorders
  // what's left, so switching filters can't reshuffle the sequence.
  const visibleImages =
    activeFilter === "all" ? images : images.filter((img) => img.type === activeFilter);

  return (
    <Box sx={{ backgroundColor: colors.background, px: { xs: 3, md: 8 }, pt: { xs: 2, md: 2 }, pb: { xs: 10, md: 16 } }}>
      <Box sx={{ maxWidth: 1400, mx: "auto" }}>
        {/* Sort/filter pills */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25, mb: { xs: 3, md: 4 } }}>
          {filterOptions.map((option) => {
            const active = activeFilter === option.value;
            return (
              <Box
                key={option.value}
                component="button"
                type="button"
                onClick={() => setActiveFilter(option.value)}
                aria-pressed={active}
                sx={{
                  appearance: "none",
                  cursor: "pointer",
                  borderRadius: "999px",
                  border: `1.5px solid ${active ? colors.primary : colors.border}`,
                  backgroundColor: active ? colors.primary : "transparent",
                  color: active ? "#fff" : colors.text,
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  px: 2.5,
                  py: 1,
                  transition: "background-color 0.15s ease, border-color 0.15s ease",
                  "&:hover": {
                    borderColor: colors.primary,
                    backgroundColor: active ? colors.primaryHover : "rgba(242, 90, 155, 0.08)",
                  },
                  "&:focus-visible": { outline: `2px solid ${colors.primary}`, outlineOffset: "2px" },
                }}
              >
                {option.label}
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: { xs: "4px", sm: 3 },
          }}
        >
          {visibleImages.map((img) => (
            <Box
              key={img.src}
              component="button"
              type="button"
              onClick={() => setSelected(img)}
              aria-label={`View larger photo: ${img.alt}`}
              sx={{
                appearance: "none",
                border: "none",
                p: 0,
                cursor: "pointer",
                borderRadius: "16px",
                overflow: "hidden",
                aspectRatio: "4 / 5",
                boxShadow: "0 8px 20px rgba(48,34,54,0.12)",
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
                  filter: photoFilter,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.04)" },
                }}
              />
            </Box>
          ))}
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
                filter: photoFilter,
                backgroundColor: "#000",
              }}
            />
            {selected.category && (
              <Box
                sx={{
                  color: colors.primary,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  px: 3,
                  pt: 2,
                  pb: 3,
                }}
              >
                {categoryLabel[selected.category]}
              </Box>
            )}
          </Box>
        )}
      </Dialog>

      {/* Mobile-only sticky CTA bar, appears after the first scroll */}
      <Box
        sx={{
          display: { xs: showStickyBar ? "flex" : "none", md: "none" },
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          backgroundColor: "#fff",
          borderTop: `1px solid ${colors.border}`,
          boxShadow: "0 -4px 16px rgba(48,34,54,0.1)",
          px: 3,
          py: 1.5,
        }}
      >
        <Box sx={{ color: colors.textMuted, fontWeight: 700, fontSize: "0.85rem", whiteSpace: "nowrap" }}>
          {visibleImages.length} photos
        </Box>
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
            height: "44px",
            px: 3,
            fontSize: "0.8rem",
            "&:hover": { backgroundColor: colors.primaryHover },
          }}
        >
          Check availability
        </Button>
      </Box>
    </Box>
  );
}

export default Gallery;
