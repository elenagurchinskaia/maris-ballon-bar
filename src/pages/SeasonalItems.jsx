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
import { colors } from "../theme";

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
          sx={{ fontWeight: 700, mb: 4 }}
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
      </Container >
    </>
  );
}

export default SeasonalItems;

