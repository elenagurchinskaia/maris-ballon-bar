import Navbar from "../components/Navbar";
import {
  Box,
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

function SeasonalItems() {
  const { addToCart } = useCart();

  const items = [
    {
      id: 1,
      name: "Spring Bouquet",
      src: "/assets/gallery/seasonal-spring.jpg",
      price: "$25",
    },
    {
      id: 2,
      name: "Summer Festival",
      src: "/assets/gallery/seasonal-summer-01.webp",
      price: "$30",
    },
    {
      id: 3,
      name: "Autumn Wreath",
      src: "/assets/gallery/seasonal-autumn.webp",
      price: "$28",
    },
    {
      id: 4,
      name: "Winter Garland",
      src: "/assets/gallery/seasonal-winter",
      price: "$35",
    },
  ];

  return (
    <>
      <Navbar />
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, mb: 4, fontFamily: "trap" }}
        >
          SEASONAL ITEMS
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
                  <Typography gutterBottom variant="h6" component="h3" sx={{ fontFamily: "Trap" }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ fontFamily: "Trap" }}>{item.price}</Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => addToCart(item)}
                    sx={{
                      fontFamily: "Trap",
                      textTransform: "uppercase",
                      borderColor: "#f6d1e3",
                      color: "#000",
                      "&:hover": {
                        backgroundColor: "#f6d1e3",
                        borderColor: "#f6d1e3",
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
      </Container >
    </>
  );
}

export default SeasonalItems;

