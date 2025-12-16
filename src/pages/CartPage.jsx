import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../components/CartContext";
import {
    Container,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    Button,
    IconButton,
    Grid
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import emailjs from "@emailjs/browser";

function CartPage() {
    const { cart, setCart } = useContext(CartContext);

    const removeItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart); // now works!
    };

    const handleSendEmail = async () => {
        const templateParams = {
            items: cart.map((item) => `${item.name} - ${item.price}`).join(", "),
            total: cart.reduce((acc, item) => acc + Number(item.price.replace("$", "")), 0),
        };

        try {
            await emailjs.send(
                "your_service_id",
                "your_template_id",
                templateParams,
                "your_public_key"
            );
            alert("Your request has been sent!");
            setCart([]);
        } catch (error) {
            console.error("Email error:", error);
            alert("Oops! Something went wrong.");
        }
    };

    if (cart.length === 0) {
        return (
            <Container sx={{ py: 6, textAlign: "center" }}>
                <Typography variant="h4" sx={{ fontFamily: "Trap", mb: 2 }}>
                    Your Cart is Empty
                </Typography>
            </Container>
        );
    }

    return (
        <>
            <Navbar />
            <Container sx={{ py: 6 }}>
                <Typography variant="h4" sx={{ fontFamily: "Trap", mb: 3 }}>
                    Your Items
                </Typography>

                <List>
                    {cart.map((item, idx) => (
                        <ListItem
                            key={idx}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderBottom: "1px solid #eee",
                                py: 2
                            }}
                        >
                            <Grid container spacing={2} alignItems="center">
                                {/* IMAGE */}
                                <Grid item xs={2} sm={1}>
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        style={{ width: "60px", borderRadius: "4px" }}
                                    />
                                </Grid>

                                {/* NAME + PRICE */}
                                <Grid item xs={8} sm={9}>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={item.price}
                                        sx={{ fontFamily: "Trap" }}
                                    />
                                </Grid>

                                {/* DELETE BUTTON */}
                                <Grid item xs={2} sm={2}>
                                    <IconButton
                                        onClick={() => removeItem(idx)}
                                        sx={{
                                            "&:hover": { color: "#ff4444" }
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))}
                </List>

                <Box sx={{ mt: 4 }}>
                    <Button
                        variant="contained"
                        onClick={handleSendEmail}
                        sx={{
                            backgroundColor: "#f6d1e3",
                            color: "#000",
                            fontFamily: "Trap",
                            fontWeight: 700,
                            px: 4,
                            "&:hover": { backgroundColor: "#f1bdd4" }
                        }}
                    >
                        SEND TO MARI
                    </Button>
                </Box>
            </Container>
        </>
    );
}

export default CartPage;