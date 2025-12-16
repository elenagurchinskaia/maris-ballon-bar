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

function RentalItems() {
    const { addToCart } = useCart();

    const items = [
        {
            id: 1,
            name: "Deluxe Party Pack",
            src: "/assets/gallery/rental-deluxe-party-pack-01.jpg",
            price: "$45",
        },
        {
            id: 2,
            name: "Wedding Decor Set",
            src: "/assets/gallery/rental-wedding-decor-set.jpg",
            price: "$120",
        },
        {
            id: 3,
            name: "Corporate Event Kit",
            src: "/assets/gallery/rental-corporate-kit.webp",
            price: "$200",
        },
        {
            id: 4,
            name: "Birthday Bash Supplies",
            src: "/assets/gallery/rental-deluxe-party-pack-01.avif",
            price: "$85",
        },
    ];

    return (
        <>

            <Container sx={{ py: 6 }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 700, mb: 4, fontFamily: "trap" }}
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
                                    <Typography gutterBottom variant="h6" component="h3" sx={{ fontFamily: "Trap" }}>
                                        {item.name}
                                    </Typography>
                                    <Typography sx={{ fontFamily: "Trap" }}>{item.price}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick={() => addToCart(item)} // ✅ now from context
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
            </Container>
        </>
    );
}

export default RentalItems;