import React, { useState } from "react";
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

function SeasonalItems() {
  const [cart, setCart] = useState([]);

  const items = [
    {
      id: 1,
      name: "Spring Bouquet",
      src: "https://via.placeholder.com/300x300?text=Spring+Bouquet",
      price: "$25",
    },
    {
      id: 2,
      name: "Summer Festival",
      src: "https://via.placeholder.com/300x300?text=Summer+Festival",
      price: "$30",
    },
    {
      id: 3,
      name: "Autumn Wreath",
      src: "https://via.placeholder.com/300x300?text=Autumn+Wreath",
      price: "$28",
    },
    {
      id: 4,
      name: "Winter Garland",
      src: "https://via.placeholder.com/300x300?text=Winter+Garland",
      price: "$35",
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handlePurchase = () => {
    alert(`Purchasing ${cart.length} items!`);
    setCart([]);
  };

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

        {cart.length > 0 && (
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="contained"
              onClick={handlePurchase}
              sx={{
                backgroundColor: "#f6d1e3",
                color: "#000",
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontFamily: "Trap",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#f1bdd4",
                },
              }}
            >
              Make Purchase ({cart.length})
            </Button>
          </Box>
        )}
      </Container>
    </>
  );
}

export default SeasonalItems;

