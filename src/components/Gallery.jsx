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

// Curated order: opens with three strong birthday shots (per request), then
// alternates palette/framing/event type throughout so no two adjacent
// photos read as the same install.
const images = [
  {
    src: "/assets/gallery/birthday-on the hills.png",
    alt: "'Crystal' marquee letters with a pink, white and gold balloon garland beside a pool overlooking the Austin skyline",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/neon-signs.jpg",
    alt: "Rose-gold sequin shimmer wall with a lit 'Happy Birthday' sign",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/40-birthday.png",
    alt: "White light-up '40' marquee numbers with a yellow, peach and burgundy balloon garland and florals",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/maris-work-gallery-birthday-installs.png",
    alt: "'Giraffe Jamboree' birthday backdrop with an orange, green and gold balloon garland",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/celebration-cotton-cart.png",
    alt: "Pink and white balloon-trimmed cotton candy cart with fresh flowers under a fringed umbrella",
    category: "other",
  },
  {
    src: "/assets/gallery/rental-corporate-kit.webp",
    alt: "Blue, cream and gold balloon garland arch around a lit 'OLTCC Conference 2024' sign",
    category: "corporate",
  },
  {
    src: "/assets/gallery/baby-shower.png",
    alt: "'We Can Bearly Wait' baby shower backdrop with a pink, tan and brown balloon garland, teddy bear and rattan chair",
    category: "baby-showers",
  },
  {
    src: "/assets/gallery/rental-wedding-decor-set.jpg",
    alt: "White and rose-gold balloon garland arch above a dessert table with wooden 'LOVE' letters",
    category: "weddings",
  },
  {
    src: "/assets/gallery/baby-shower-02.png",
    alt: "'Baby' marquee letters with pink, blue and white balloon clusters in an open field",
    category: "baby-showers",
  },
  {
    src: "/assets/gallery/party-celebration.png",
    alt: "Black and gold balloon garland arch with a sequin backdrop at a masquerade-themed party",
    category: "other",
  },
  {
    src: "/assets/gallery/maris-work-gallery-shimmer-wall.png",
    alt: "Gold shimmer wall with 'GVA' marquee letters and a pastel candy-cane balloon garland",
    category: "seasonal",
  },
  {
    src: "/assets/gallery/kid-birthday.png",
    alt: "Encanto-themed birthday backdrop with a colorful balloon garland, hanging florals and a '2' marquee number",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/maris-work-gallery-mothers-day.png",
    alt: "Rose gold 'Happy Mother's Day' balloon bouquets with fresh flowers",
    category: "seasonal",
  },
  {
    src: "/assets/gallery/office installation.png",
    alt: "Moana-themed birthday backdrop with a 'KIARA' wood-lettered sign and a white, yellow and coral balloon garland",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/birthday-on the hills-01.png",
    alt: "Elegant poolside dinner table with gold-rimmed chargers and a greenery centerpiece, overlooking a hillside pool and marquee letters",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/balloons-on-the-fence.png",
    alt: "Purple, lavender and silver balloon garland on a rustic wood fence backdrop",
    category: "other",
  },
  {
    src: "/assets/gallery/letters.png",
    alt: "Light-up 'J&M' marquee letters displayed on the grass beside a pond at dusk",
    category: "weddings",
  },
  {
    src: "/assets/gallery/barbi-birthday.png",
    alt: "Barbie-themed 'Tiffany' birthday backdrop with a pink balloon garland, roller skate and lips balloons, and a '5' marquee number",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/cotton-candy.jpg",
    alt: "Mari's Balloon Bar cotton candy cart with a rose-gold and cream balloon garland",
    category: "other",
  },
  {
    src: "/assets/gallery/baby-shower-01.png",
    alt: "'We Can Bearly Wait' baby shower backdrop with a blue, tan and brown balloon garland and teddy bear",
    category: "baby-showers",
  },
  {
    src: "/assets/gallery/birthday-lettering.png",
    alt: "LEGO-themed birthday backdrop with '7' and '11' marquee numbers, a brick-pattern panel and Lego Movie character cutouts",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/maris-work-gallery-flower-arrangment-01.png",
    alt: "Floral centerpiece arrangement in a wooden planter box on an event table",
    category: "other",
  },
  {
    src: "/assets/gallery/rental-deluxe-party-pack.avif",
    alt: "Rose-gold and cream balloon bouquet with a personalized 'Happy 18th Birthday Tilly' bubble balloon",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/maris-work-gallery-cart-rental.png",
    alt: "White cotton candy cart with a fringed umbrella set up outdoors",
    category: "other",
  },
  {
    src: "/assets/gallery/birthday-01.png",
    alt: "Bluey-themed 'Happy Birthday Xiomara' sign with a pink, blue and tan balloon garland and a '3' marquee number",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/shimmer-walls.jpg",
    alt: "Close-up of a rose-gold shimmer wall backdrop with a 'Happy Birthday' neon sign",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/rental-deluxe-party-pack-01.jpg",
    alt: "Champagne and mauve balloon garland around a light-up '25' marquee number display",
    category: "birthdays",
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
