import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Typography, Button } from "@mui/material";
import { useCart } from "../components/CartContext";
import { colors } from "../theme";
import { Sparkle, Squiggle, Dot } from "../components/Decor";
import { useState } from "react";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import ChairIcon from "@mui/icons-material/Chair";
import TextureIcon from "@mui/icons-material/Texture";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CottageIcon from "@mui/icons-material/Cottage";
import IcecreamIcon from "@mui/icons-material/Icecream";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDocumentMeta } from "../utils/useDocumentMeta";

// Icons are stored as a key (not a live element) so cart items stay
// JSON-serializable for localStorage — resolved to a component at render time.
const iconMap = {
  table: <TableRestaurantIcon fontSize="small" />,
  linen: <TextureIcon fontSize="small" />,
  chair: <ChairIcon fontSize="small" />,
  backdrop: <WallpaperIcon fontSize="small" />,
  shimmer: <AutoAwesomeIcon fontSize="small" />,
  marquee: <LightbulbIcon fontSize="small" />,
  tent: <CottageIcon fontSize="small" />,
  cart: <IcecreamIcon fontSize="small" />,
};

// Maps a catalog category to the matching checkbox label on the
// contact/booking form's "services interested in" field.
const categoryToService = {
  backdrops: "Backdrops",
  "shimmer-walls": "Shimmer walls",
  marquees: "Marquees",
  "tables-chairs": "Tables and chairs",
  tents: "Tents",
  specialty: "Cotton candy cart",
};

const categories = [
  { id: "all", label: "All" },
  { id: "backdrops", label: "Backdrops" },
  { id: "shimmer-walls", label: "Shimmer Walls" },
  { id: "marquees", label: "Marquees" },
  { id: "tables-chairs", label: "Tables & Chairs" },
  { id: "tents", label: "Tents" },
  { id: "specialty", label: "Specialty Rentals" },
];

// Names and prices for the table/linen/chair items are Mari's existing
// verified rates. The 5 quote-based items below use real photos already in
// the assets folder — see final report for the one item with no photo yet.
const items = [
  {
    id: 1,
    name: 'Round Table (60")',
    src: "/assets/rental-items/1.png",
    price: "$12/day",
    category: "tables-chairs",
    icon: "table",
    iconBg: "#FADCE9",
    iconColor: colors.primary,
  },
  {
    id: 2,
    name: "Round Table Linen",
    src: "/assets/rental-items/2.png",
    price: "$10/day",
    category: "tables-chairs",
    icon: "linen",
    iconBg: "#E5DAF7",
    iconColor: colors.softAccent,
  },
  {
    id: 3,
    name: "Rectangular Table (6ft)",
    src: "/assets/rental-items/3.png",
    price: "$12/day",
    category: "tables-chairs",
    icon: "table",
    iconBg: "#FADCE9",
    iconColor: colors.primary,
  },
  {
    id: 4,
    name: "Rectangular Table Linen",
    src: "/assets/rental-items/4.png",
    price: "$10/day",
    category: "tables-chairs",
    icon: "linen",
    iconBg: "#E5DAF7",
    iconColor: colors.softAccent,
  },
  {
    id: 5,
    name: "Folding Chair",
    src: "/assets/rental-items/5.png",
    price: "$2/day",
    category: "tables-chairs",
    icon: "chair",
    iconBg: "#FCF0C4",
    iconColor: "#D6A81A",
  },
  {
    id: 6,
    name: "Chair Spandex Cover",
    src: "/assets/rental-items/6.png",
    price: "$3/day",
    category: "tables-chairs",
    icon: "linen",
    iconBg: "#E5DAF7",
    iconColor: colors.softAccent,
  },
  {
    id: 7,
    name: "Backdrop",
    src: "/assets/gallery/maris-work-gallery-balloon-installs.png",
    price: "Request a quote",
    quote: true,
    category: "backdrops",
    icon: "backdrop",
    iconBg: "#FADCE9",
    iconColor: colors.primary,
  },
  {
    id: 8,
    name: "Shimmer Wall",
    src: "/assets/gallery/shimmer-walls.jpg",
    price: "Request a quote",
    quote: true,
    category: "shimmer-walls",
    icon: "shimmer",
    iconBg: "#FCF0C4",
    iconColor: "#D6A81A",
  },
  {
    id: 9,
    name: "Marquee Numbers & Letters",
    src: "/assets/gallery/maris-work-gallery-numbers.png",
    price: "Request a quote",
    quote: true,
    category: "marquees",
    icon: "marquee",
    iconBg: "#E5DAF7",
    iconColor: colors.softAccent,
  },
  {
    id: 10,
    name: "Tent",
    placeholder: true,
    price: "Request a quote",
    quote: true,
    category: "tents",
    icon: "tent",
    iconBg: "#FADCE9",
    iconColor: colors.primary,
  },
  {
    id: 11,
    name: "Cotton Candy Cart",
    src: "/assets/gallery/cotton-candy.jpg",
    price: "Request a quote",
    quote: true,
    category: "specialty",
    icon: "cart",
    iconBg: "#FCF0C4",
    iconColor: "#D6A81A",
  },
];

function RentalCatalog() {
  useDocumentMeta(
    "Rental Catalog | Mari's Balloon Bar",
    "Backdrops, shimmer walls, marquees, tables, chairs, tents and more for rent in Austin, Texas."
  );

  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredItems =
    activeCategory === "all" ? items : items.filter((item) => item.category === activeCategory);

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
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1, minWidth: 0, position: "relative" }}>
            <Squiggle
              color={colors.softAccent}
              sx={{ top: -6, left: { xs: 130, md: 160 }, display: { xs: "none", sm: "block" } }}
            />
            <Sparkle
              color={colors.accent}
              sx={{ top: -14, left: { xs: 175, md: 205 }, display: { xs: "none", sm: "block" } }}
            />
            <Typography
              sx={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                color: colors.text,
                fontSize: { xs: "2.75rem", md: "3.5rem" },
                lineHeight: 1,
              }}
            >
              Rental
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
                mt: -1,
                mb: 3,
              }}
            >
              essentials
            </Typography>
            <Typography sx={{ color: colors.textMuted, fontSize: "1.05rem", maxWidth: 480, mb: 4 }}>
              Backdrops, shimmer walls, marquees, tables, chairs, tents and more to round out
              your event — delivered clean, set up simple.
            </Typography>

            {/* Filter tabs */}
            <Box sx={{ display: "flex", gap: { xs: 2.5, md: 3 }, flexWrap: "wrap" }}>
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
          </Box>

          <Box
            sx={{
              position: "relative",
              flexShrink: 0,
              mr: { md: 16 },
              display: { xs: "none", md: "block" },
            }}
          >
            <Squiggle color={colors.primary} sx={{ top: -60, left: 60, width: 22, height: 32 }} />
            <Squiggle
              color={colors.accent}
              sx={{ top: -24, left: -14, width: 20, height: 14, transform: "rotate(-15deg)" }}
            />
            <Squiggle
              color={colors.softAccent}
              sx={{ top: -42, right: 6, width: 24, height: 18, transform: "scaleX(-1)" }}
            />
            <Dot color={colors.accent} sx={{ top: 20, left: 60 }} />
            <Dot color={colors.primary} sx={{ width: 6, height: 6, top: -14, left: 132 }} />
            <Dot color={colors.softAccent} sx={{ width: 6, height: 6, top: 30, right: 20 }} />
            <Box
              component="img"
              src="/assets/logo/star-inf-no-bg.png"
              alt=""
              sx={{
                width: 200,
                height: "auto",
                display: "block",
                filter: "drop-shadow(0 16px 20px rgba(48,34,54,0.2))",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Cards */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 3, md: 4 }, pb: { xs: 8, md: 14 } }}>
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {filteredItems.map((item) => (
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
                {item.placeholder ? (
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: "100%",
                      height: 220,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                      fontSize: 48,
                    }}
                  >
                    {iconMap[item.icon]}
                  </Box>
                ) : (
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.name}
                    sx={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
                  />
                )}
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
                  {iconMap[item.icon]}
                </Box>
              </Box>
              <Box sx={{ p: 3, pt: 4, display: "flex", flexDirection: "column", flex: 1 }}>
                <Typography sx={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.2rem", mb: 1 }}>
                  {item.name}
                </Typography>
                <Typography sx={{ fontWeight: 700, color: colors.text, mb: 2, flex: 1 }}>
                  {item.price}
                </Typography>
                {item.quote ? (
                  <Button
                    component={Link}
                    to={`/book-event?service=${encodeURIComponent(categoryToService[item.category] || "")}`}
                    endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem !important" }} />}
                    variant="outlined"
                    sx={{
                      alignSelf: "flex-start",
                      borderColor: colors.primary,
                      color: colors.primary,
                      textTransform: "uppercase",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      borderRadius: "999px",
                      px: 2.5,
                      py: 1,
                      fontSize: "0.75rem",
                      "&:hover": { borderColor: colors.primaryHover, backgroundColor: "rgba(242, 90, 155, 0.08)" },
                    }}
                  >
                    Request a Quote
                  </Button>
                ) : (
                  <Button
                    onClick={() => addToCart(item)}
                    sx={{
                      alignSelf: "flex-start",
                      backgroundColor: colors.primary,
                      color: "#fff",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      borderRadius: "999px",
                      px: 2.5,
                      py: 1,
                      fontSize: "0.75rem",
                      "&:hover": { backgroundColor: colors.primaryHover },
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default RentalCatalog;
