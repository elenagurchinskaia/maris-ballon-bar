import { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useCart } from "../components/CartContext";
import { colors } from "../theme";
import { useDocumentMeta } from "../utils/useDocumentMeta";

// Names and prices are Mari's existing verified rates. Order is mixed so the
// backgrounds read pink, lilac, yellow, yellow, lilac, pink across the grid.
const items = [
  {
    id: 1,
    name: 'Round Table (60")',
    detail: "Seats 8–10 guests",
    src: "/assets/rental-items/round-table-01.png",
    price: "$12/day",
  },
  {
    id: 2,
    name: "Round Table Linen",
    detail: "Fits a 60-inch round table",
    src: "/assets/rental-items/round-table-linen-01.png",
    price: "$10/day",
  },
  {
    id: 3,
    name: "Rectangular Table (6ft)",
    detail: "Seats 6–8 guests",
    src: "/assets/rental-items/rectangular-table-01.png",
    price: "$12/day",
  },
  {
    id: 4,
    name: "Chair Spandex Cover",
    detail: "Available in white",
    src: "/assets/rental-items/chair-spandex-cover-01.png",
    price: "$3/day",
  },
  {
    id: 5,
    name: "Folding Chair",
    detail: "Available in white",
    src: "/assets/rental-items/folding-chair-01.png",
    price: "$2/day",
  },
  {
    id: 6,
    name: "Rectangular Table Linen",
    detail: "Fits a 6-ft table",
    src: "/assets/rental-items/rectangular-table-linen-01.png",
    price: "$10/day",
  },
];

// Fallback color per position (matches the pink/lilac/yellow/yellow/lilac/pink
// order above) in case an image fails to load; repeats as a block if more
// items are added.
const cardTints = ["#FCE4ED", "#EDE2FA", "#FFF1BF", "#FFF1BF", "#EDE2FA", "#FCE4ED"];

function RentalCatalog() {
  useDocumentMeta(
    "Rental Catalog | Mari's Balloon Bar",
    "Tables, chairs, and linens for rent in Austin, Texas."
  );

  const { addToCart } = useCart();
  const [addedIds, setAddedIds] = useState([]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedIds((prev) => [...prev, item.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== item.id));
    }, 1800);
  };

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
              Rental
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
              essentials
            </Box>
          </Typography>
          <Typography sx={{ color: colors.textMuted, fontSize: "0.95rem", maxWidth: 480, mx: "auto", mt: 3 }}>
            Build your rental list, then submit it to confirm availability for your event date.
          </Typography>
        </Box>
      </Box>

      {/* Cards */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 1.5, md: 1.5 }, pb: { xs: 8, md: 14 } }}>
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {items.map((item, index) => (
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
              <Box
                component="img"
                src={item.src}
                alt={item.name}
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  objectPosition: "center",
                  backgroundColor: cardTints[index % cardTints.length],
                  display: "block",
                }}
              />
              <Box sx={{ p: 3, display: "flex", flexDirection: "column", flex: 1 }}>
                <Typography sx={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.2rem", mb: 0.5 }}>
                  {item.name}
                </Typography>
                {item.detail && (
                  <Typography sx={{ color: colors.textMuted, fontSize: "0.85rem", mb: 1.5 }}>
                    {item.detail}
                  </Typography>
                )}
                <Typography sx={{ fontWeight: 700, color: colors.text, mb: 2, flex: 1 }}>
                  {item.price}
                </Typography>
                <Button
                  onClick={() => handleAddToCart(item)}
                  disabled={addedIds.includes(item.id)}
                  startIcon={addedIds.includes(item.id) ? <CheckIcon sx={{ fontSize: "1rem !important" }} /> : null}
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
                    "&.Mui-disabled": { backgroundColor: colors.primaryHover, color: "#fff", opacity: 1 },
                  }}
                >
                  {addedIds.includes(item.id) ? "Added" : "Add to Cart"}
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default RentalCatalog;
