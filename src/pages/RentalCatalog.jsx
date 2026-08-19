import Navbar from "../components/Navbar";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useCart } from "../components/CartContext";
import { colors } from "../theme";

// NOTE: names and prices below are placeholders based on what each photo
// shows (table/linen/chair rentals) — confirm real item names and pricing
// with Mari before this goes live.
const items = [
  {
    id: 1,
    name: 'Round Table (60")',
    src: "/assets/rental-items/1.png",
    price: "$12/day",
  },
  {
    id: 2,
    name: "Round Table Linen",
    src: "/assets/rental-items/2.png",
    price: "$10/day",
  },
  {
    id: 3,
    name: "Rectangular Table (6ft)",
    src: "/assets/rental-items/3.png",
    price: "$12/day",
  },
  {
    id: 4,
    name: "Rectangular Table Linen",
    src: "/assets/rental-items/4.png",
    price: "$10/day",
  },
  {
    id: 5,
    name: "Folding Chair",
    src: "/assets/rental-items/5.png",
    price: "$2/day",
  },
  {
    id: 6,
    name: "Chair Spandex Cover",
    src: "/assets/rental-items/6.png",
    price: "$3/day",
  },
];

function RentalItems() {
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, mb: 4 }}
        >
          RENTAL CATALOG
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {items.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  image={item.src}
                  alt={item.name}
                  sx={{ height: 240 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    {item.name}
                  </Typography>
                  <Typography>{item.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => addToCart(item)}
                    sx={{
                      textTransform: "uppercase",
                      borderColor: colors.primary,
                      color: colors.primary,
                      "&:hover": {
                        backgroundColor: colors.primary,
                        borderColor: colors.primary,
                        color: "#fff",
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default RentalItems;
