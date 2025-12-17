import React, { useContext, useState } from "react";
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
    Grid,
    TextField
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import emailjs from "@emailjs/browser";

function CartPage() {
    const { cart, setCart } = useContext(CartContext);

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [companyName, setCompanyName] = useState("");

    const removeItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    const handleSendEmail = async () => {
        const total = cart.reduce((acc, item) => acc + Number(item.price.replace("$", "")), 0);

        const templateParams = {
            user_name: userName,
            user_email: userEmail,
            user_phone: userPhone,
            company_name: companyName,
            items: cart.map((item) => `${item.name} - ${item.price}`).join(", "),
            total: `$${total.toFixed(2)}`
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CART,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            alert("Your request has been sent!");
            setCart([]);
            setUserName("");
            setUserEmail("");
            setUserPhone("");
            setCompanyName("");
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

                <TextField
                    required
                    fullWidth
                    label="First and Last Name"
                    name="user_name"
                    margin="normal"
                    variant="outlined"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="user_email"
                    margin="normal"
                    type="email"
                    variant="outlined"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <TextField
                    required
                    fullWidth
                    label="Phone Number"
                    name="user_phone"
                    margin="normal"
                    variant="outlined"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Company Name (if applicable)"
                    name="company_name"
                    margin="normal"
                    variant="outlined"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />

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