import { useState } from "react";
import { Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { colors } from "../theme";

const categoryLabel = {
  birthdays: "Birthdays",
  "baby-showers": "Baby Showers",
  weddings: "Weddings",
  corporate: "Corporate",
  seasonal: "Seasonal",
  other: "Celebrations",
};

// Curated order: alternates event type/palette/framing throughout so no two
// adjacent photos read as the same install.
const images = [
  {
    src: "/assets/gallery/gallery-01-boho.png",
    alt: "Boho-style '40' birthday marquee numbers with a mustard, plum and blush balloon garland in a backyard",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/gallery-02-bonjour-bebe.jpg",
    alt: "'Bonjour Bebe' gender reveal backdrop with a light blue and white balloon garland",
    category: "baby-showers",
  },
  {
    src: "/assets/gallery/gallery-11.jpg",
    alt: "'US Bank' step-and-repeat backdrop with a red, white and navy balloon garland",
    category: "corporate",
  },
  {
    src: "/assets/gallery/gallery-15-cowgirl.jpg",
    alt: "Cow-print '28' birthday marquee numbers with a pink balloon garland and 'Happy Birthday' neon sign",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/gallery-12-christmas-tree.jpg",
    alt: "Balloon Christmas tree and red, green and gold garland beside lit marquee letters",
    category: "seasonal",
  },
  {
    src: "/assets/gallery/gallery-08-bridal-shower.jpg",
    alt: "'Miss to Mrs.' bridal shower backdrop with a sage, ivory and gold balloon garland",
    category: "weddings",
  },
  {
    src: "/assets/gallery/gallery-17-hook-em.jpg",
    alt: "'Hook 'Em' marquee letters with a burnt orange, gold and white balloon garland and fall florals",
    category: "other",
  },
  {
    src: "/assets/gallery/gallery-03-bridal-tiny-box.jpg",
    alt: "Blush balloon garland with fresh florals beside a 'Baby in Bloom' sign",
    category: "baby-showers",
  },
  {
    src: "/assets/gallery/gallery-07-70th-birthday.jpg",
    alt: "'70' birthday marquee numbers with a black and silver balloon garland beside a sequin backdrop",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/gallery-19-gama.jpg",
    alt: "'GAMA' marquee letters with a red, white and blue balloon garland",
    category: "corporate",
  },
  {
    src: "/assets/gallery/gallery-27-tropical.jpg",
    alt: "Tropical pink, orange and yellow balloon garland with palm leaves against a greenery wall",
    category: "other",
  },
  {
    src: "/assets/gallery/gallery-22-hello-kitty.jpg",
    alt: "Hello Kitty birthday backdrop with pink and teal balloons and a 'Happy Birthday' neon sign",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/gallery-24-marquees.jpg",
    alt: "Lit '2024' New Year's Eve marquee numbers with white and gold balloon clusters",
    category: "seasonal",
  },
  {
    src: "/assets/gallery/gallery-09-grad.jpg",
    alt: "Black and gold 'GRAD' marquee letters with balloon clusters on an outdoor patio",
    category: "other",
  },
  {
    src: "/assets/gallery/gallery-04-garland.jpg",
    alt: "Blush, cream and black balloon garland installed over a kitchen island",
    category: "other",
  },
  {
    src: "/assets/gallery/gallery-18-gig-em.jpg",
    alt: "'Gig Em' marquee letters with a maroon, black and gold balloon garland",
    category: "other",
  },
  {
    src: "/assets/gallery/gallery-06-boho-chic.jpg",
    alt: "Boho chic sage, ivory and gold balloon arch installation with fresh florals",
    category: "other",
  },
  {
    src: "/assets/gallery/gallery-20-revelry.jpg",
    alt: "'Revelry' office backdrop with a black, blush and cream balloon garland",
    category: "corporate",
  },
  {
    src: "/assets/gallery/gallery-05-grad-26.jpg",
    alt: "Graduation guest posing beside a lit 'GRAD' marquee sign with black and gold balloon clusters",
    category: "other",
  },
  {
    src: "/assets/gallery/gallery-25-shimmer-silver.jpg",
    alt: "'GVA' marquee letters with a maroon, silver and white winter balloon garland and snowflakes",
    category: "seasonal",
  },
  {
    src: "/assets/gallery/gallery-10-dog-party.jpg",
    alt: "French bulldog neon signs with a pink and rose gold balloon garland around a dinner table",
    category: "other",
  },
  {
    src: "/assets/gallery/gallery-26-shimmer-wall-black.jpg",
    alt: "Black, teal, white and silver balloon garland beside a black shimmer wall",
    category: "corporate",
  },
  {
    src: "/assets/gallery/gallery-14-farewell-arch.jpg",
    alt: "Pink, red and gold rope balloon arch on a stage",
    category: "other",
  },
  {
    src: "/assets/gallery/gallery-13.jpg",
    alt: "'Congrats Grad' neon backdrop with lit '25' marquee numbers and a black and silver balloon garland",
    category: "other",
  },
  {
    src: "/assets/gallery/gallery-16-friendsgiving.jpg",
    alt: "Blush, mauve and cream balloon arch in a cozy living room",
    category: "other",
  },
  {
    src: "/assets/gallery/gallery-21-mini-shimmer.jpg",
    alt: "Gold shimmer wall panel with a black and gold balloon garland",
    category: "other",
  },
  {
    src: "/assets/gallery/gallery-23-helium.jpg",
    alt: "Rose gold and black orbz balloons on tassel ribbon",
    category: "other",
  },
];

// Subtle warmth/brightness/contrast lift so the balloons read as vibrant
// rather than the slightly flat/gray tone of the raw phone photos.
const photoFilter = "brightness(1.06) saturate(1.15) contrast(1.04)";

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <Box sx={{ backgroundColor: colors.background, px: { xs: 3, md: 8 }, pt: { xs: 2, md: 2 }, pb: { xs: 10, md: 16 } }}>
      <Box sx={{ maxWidth: 1400, mx: "auto" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {images.map((img) => (
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
    </Box>
  );
}

export default Gallery;
