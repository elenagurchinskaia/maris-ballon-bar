import { useState } from "react";
import { Box } from "@mui/material";
import { colors } from "../theme";

const categories = [
  { id: "all", label: "All" },
  { id: "birthdays", label: "Birthdays" },
  { id: "baby-showers", label: "Baby Showers" },
  { id: "weddings", label: "Weddings" },
  { id: "corporate", label: "Corporate" },
  { id: "seasonal", label: "Seasonal" },
  { id: "other", label: "Other Celebrations" },
];

const images = [
  {
    src: "/assets/gallery/neon-signs.jpg",
    alt: "Rose-gold sequin shimmer wall with a lit 'Happy Birthday' sign",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/shimmer-walls.jpg",
    alt: "Close-up of a rose-gold shimmer wall backdrop with a 'Happy Birthday' neon sign",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/cotton-candy.jpg",
    alt: "Mari's Balloon Bar cotton candy cart with a rose-gold and cream balloon garland",
    category: "other",
  },
  {
    src: "/assets/gallery/maris-work-gallery-numbers.png",
    alt: "White light-up '50' marquee numbers with a blue and gold balloon garland",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/maris-work-gallery-birthday-installs.png",
    alt: "'Giraffe Jamboree' birthday backdrop with an orange, green and gold balloon garland",
    category: "birthdays",
  },
  {
    src: "/assets/gallery/maris-work-gallery-flowers-arrangement.png",
    alt: "Floral welcome sign arrangement for a baby shower, reading 'Because Baby Joon is Coming Soon'",
    category: "baby-showers",
  },
  {
    src: "/assets/gallery/maris-work-gallery-balloon-installs.png",
    alt: "Blush, black and cream balloon garland on a branded 'Revelry' event backdrop",
    category: "corporate",
  },
  {
    src: "/assets/gallery/maris-work-gallery-shimmer-wall.png",
    alt: "Gold shimmer wall with 'GVA' marquee letters and a pastel candy-cane balloon garland",
    category: "seasonal",
  },
  {
    src: "/assets/gallery/maris-work-gallery-halloween.png",
    alt: "Glowing skull archway with a cotton candy cart and orange, purple and green balloon garland",
    category: "seasonal",
  },
  {
    src: "/assets/gallery/maris-work-gallery-halloween-01.png",
    alt: "Pastel balloon archway with ghost-shaped foil balloons for a Halloween-themed celebration",
    category: "seasonal",
  },
  {
    src: "/assets/gallery/maris-work-gallery-halloween-02.png",
    alt: "Glowing blue skull backdrop with balloon garland at night",
    category: "seasonal",
  },
  {
    src: "/assets/gallery/maris-work-gallery-mothers-day.png",
    alt: "Rose gold 'Happy Mother's Day' balloon bouquets with fresh flowers",
    category: "seasonal",
  },
  {
    src: "/assets/gallery/maris-work-gallery-flower-arrangment-01.png",
    alt: "Floral centerpiece arrangement in a wooden planter box on an event table",
    category: "other",
  },
  {
    src: "/assets/gallery/maris-work-gallery-cart-rental.png",
    alt: "White cotton candy cart with a fringed umbrella set up outdoors",
    category: "other",
  },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered =
    activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <Box sx={{ backgroundColor: colors.background, px: { xs: 3, md: 8 }, py: { xs: 6, md: 8 } }}>
      <Box sx={{ maxWidth: 1400, mx: "auto" }}>
        {/* Filter tabs */}
        <Box sx={{ display: "flex", gap: { xs: 2.5, md: 3 }, flexWrap: "wrap", mb: { xs: 4, md: 5 } }}>
          {categories.map((cat) => (
            <Box
              key={cat.id}
              component="button"
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              sx={{
                appearance: "none",
                background: "none",
                border: "none",
                borderBottom:
                  activeCategory === cat.id ? `2px solid ${colors.primary}` : "2px solid transparent",
                cursor: "pointer",
                p: 0,
                pb: 0.5,
                fontFamily: "inherit",
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.05em",
                color: activeCategory === cat.id ? colors.primary : colors.textMuted,
                "&:focus-visible": { outline: `2px solid ${colors.primary}`, outlineOffset: "3px" },
              }}
            >
              {cat.label}
            </Box>
          ))}
        </Box>

        {filtered.length === 0 ? (
          <Box sx={{ color: colors.textMuted, fontSize: "0.95rem", py: 4 }}>
            New photos for this category are coming soon — check back shortly, or{" "}
            <Box component="a" href="/contact" sx={{ color: colors.primary, fontWeight: 700 }}>
              reach out
            </Box>{" "}
            and we'll share examples directly.
          </Box>
        ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {filtered.map((img) => (
            <Box
              key={img.src}
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                aspectRatio: "4 / 5",
                boxShadow: "0 8px 20px rgba(48,34,54,0.12)",
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
          ))}
        </Box>
        )}
      </Box>
    </Box>
  );
}

export default Gallery;
