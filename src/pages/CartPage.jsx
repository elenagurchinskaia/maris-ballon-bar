import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartContext } from "../components/CartContext";
import {
    Box,
    Typography,
    Button,
    IconButton,
    TextField
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import emailjs from "@emailjs/browser";
import { colors } from "../theme";

// Prices are display strings like "$12/day" — pull out just the numeric
// rate so totals can be summed instead of producing NaN.
const getPriceValue = (price) => parseFloat(price.replace(/[^0-9.]/g, "")) || 0;

const errorColor = "#C0392B";
const errorBg = "#FCEBEA";

const fieldSx = {
    "& .MuiOutlinedInput-root": {
        borderRadius: "10px",
        backgroundColor: colors.background,
        "& fieldset": { borderColor: colors.border },
        "&:hover fieldset": { borderColor: colors.softAccent },
        "&.Mui-focused fieldset": { borderColor: colors.primary },
    },
};

function CartPage() {
    const { cart, setCart } = useContext(CartContext);

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);

    const removeItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    const handleSendEmail = async () => {
        if (!userName || !userEmail || !userPhone) return;
        if (!isEmailValid) {
            setErrorMsg("Please enter a valid email address.");
            return;
        }
        setIsSending(true);
        setErrorMsg("");

        const total = cart.reduce((acc, item) => acc + getPriceValue(item.price), 0);

        const templateParams = {
            user_name: userName,
            user_email: userEmail,
            user_phone: userPhone,
            company_name: companyName,
            items: cart.map((item) => `${item.name} - ${item.price}`).join("\n"),
            total: `$${total.toFixed(2)}`
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CART,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setCart([]);
            setUserName("");
            setUserEmail("");
            setUserPhone("");
            setCompanyName("");
            setIsSubmitted(true);
        } catch (error) {
            console.error("Email error:", error);
            setErrorMsg("Oops! Something went wrong. Please try again, or email us directly at marisballoonbar@gmail.com.");
        } finally {
            setIsSending(false);
        }
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setErrorMsg("");
    };

    return (
        <Box sx={{ backgroundColor: colors.background }}>
            <Navbar />

            {isSubmitted ? (
                <Box sx={{ px: { xs: 3, md: 8 }, py: { xs: 10, md: 14 }, textAlign: "center" }}>
                    <Box
                        role="status"
                        aria-live="polite"
                        sx={{
                            maxWidth: 520,
                            mx: "auto",
                            backgroundColor: "#fff",
                            border: `1px solid ${colors.border}`,
                            borderRadius: "20px",
                            boxShadow: "0 16px 32px rgba(48,34,54,0.08)",
                            px: { xs: 3, md: 5 },
                            py: { xs: 5, md: 6 },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "'Fraunces', serif",
                                fontWeight: 700,
                                color: colors.text,
                                fontSize: { xs: "1.75rem", md: "2rem" },
                                mb: 2,
                            }}
                        >
                            Thank you! 🎉
                        </Typography>

                        <Typography sx={{ color: colors.textMuted, mb: 1.5 }}>
                            Your request has been sent to Mari.
                        </Typography>

                        <Typography sx={{ color: colors.textMuted, mb: 1.5 }}>
                            We will review your selected items and contact you shortly with pricing and an invoice.
                        </Typography>

                        <Typography sx={{ color: colors.textMuted, mb: 4 }}>
                            You're welcome to continue browsing while we prepare your quote.
                        </Typography>

                        <Button
                            sx={{
                                backgroundColor: colors.primary,
                                color: "#fff",
                                textTransform: "uppercase",
                                fontWeight: 700,
                                letterSpacing: "0.05em",
                                borderRadius: "999px",
                                px: 3.5,
                                py: 1.5,
                                "&:hover": { backgroundColor: colors.primaryHover }
                            }}
                            onClick={handleReset}
                        >
                            Back to Shop
                        </Button>
                    </Box>
                </Box>
            ) : (
                <>
                    {/* Hero */}
                    <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 5, md: 7 }, pb: { xs: 3, md: 4 } }}>
                        <Box
                            sx={{
                                maxWidth: 1400,
                                mx: "auto",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "baseline",
                                gap: 1.5,
                                flexWrap: "wrap",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "'Fraunces', serif",
                                    fontWeight: 700,
                                    color: colors.text,
                                    fontSize: { xs: "2.75rem", md: "3.5rem" },
                                    lineHeight: 1,
                                }}
                            >
                                Your
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
                                }}
                            >
                                cart
                            </Typography>
                        </Box>
                    </Box>

                    {cart.length === 0 ? (
                        <Box sx={{ px: { xs: 3, md: 8 }, pb: { xs: 10, md: 14 }, textAlign: "center" }}>
                            <Typography sx={{ color: colors.textMuted, fontSize: "1.05rem", mb: 3 }}>
                                Your cart is empty.
                            </Typography>
                            <Button
                                component={Link}
                                to="/rental-catalog"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    backgroundColor: colors.primary,
                                    color: "#fff",
                                    textTransform: "uppercase",
                                    fontWeight: 700,
                                    letterSpacing: "0.05em",
                                    borderRadius: "999px",
                                    px: 3.5,
                                    py: 1.5,
                                    "&:hover": { backgroundColor: colors.primaryHover }
                                }}
                            >
                                Browse Rentals
                            </Button>
                        </Box>
                    ) : (
                        <Box sx={{ px: { xs: 3, md: 8 }, pb: { xs: 10, md: 14 } }}>
                            <Box sx={{ maxWidth: 800, mx: "auto" }}>
                                <Box
                                    sx={{
                                        backgroundColor: "#fff",
                                        border: `1px solid ${colors.border}`,
                                        borderRadius: "20px",
                                        overflow: "hidden",
                                        mb: 4,
                                    }}
                                >
                                    {cart.map((item, idx) => (
                                        <Box
                                            key={idx}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                                px: { xs: 2.5, md: 3 },
                                                py: 2,
                                                borderBottom: idx < cart.length - 1 ? `1px solid ${colors.border}` : "none",
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={item.src}
                                                alt={item.name}
                                                sx={{ width: 60, height: 60, objectFit: "cover", borderRadius: "10px", flexShrink: 0 }}
                                            />
                                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                                <Typography sx={{ fontWeight: 700, color: colors.text }}>{item.name}</Typography>
                                                <Typography sx={{ color: colors.textMuted, fontSize: "0.9rem" }}>{item.price}</Typography>
                                            </Box>
                                            <IconButton
                                                onClick={() => removeItem(idx)}
                                                sx={{ color: colors.textMuted, "&:hover": { color: colors.primary } }}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Box>
                                    ))}
                                </Box>

                                {/* Total */}
                                <Box sx={{ textAlign: "right", mb: 4 }}>
                                    <Typography sx={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.3rem", color: colors.text }}>
                                        Total: ${cart.reduce((acc, item) => acc + getPriceValue(item.price), 0).toFixed(2)}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        backgroundColor: "#fff",
                                        border: `1px solid ${colors.border}`,
                                        borderRadius: "20px",
                                        px: { xs: 3, md: 5 },
                                        py: { xs: 4, md: 5 },
                                    }}
                                >
                                    <TextField
                                        sx={{ my: 1, ...fieldSx }}
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
                                        sx={{ my: 1, ...fieldSx }}
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
                                        sx={{ my: 1, ...fieldSx }}
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
                                        sx={{ my: 1, ...fieldSx }}
                                        fullWidth
                                        label="Company Name (if applicable)"
                                        name="company_name"
                                        margin="normal"
                                        variant="outlined"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                    />

                                    {errorMsg && (
                                        <Box
                                            role="alert"
                                            sx={{
                                                mt: 3,
                                                px: 2.5,
                                                py: 1.5,
                                                borderRadius: "10px",
                                                backgroundColor: errorBg,
                                                border: `1px solid ${errorColor}`,
                                                color: errorColor,
                                                fontSize: "0.9rem",
                                                lineHeight: 1.5,
                                                textAlign: "center",
                                            }}
                                        >
                                            {errorMsg}
                                        </Box>
                                    )}

                                    <Box sx={{ textAlign: "center", mt: 3 }}>
                                        <Button
                                            onClick={handleSendEmail}
                                            disabled={isSending}
                                            endIcon={!isSending && <ArrowForwardIcon />}
                                            sx={{
                                                backgroundColor: colors.primary,
                                                color: "#fff",
                                                textTransform: "uppercase",
                                                fontWeight: 700,
                                                letterSpacing: "0.05em",
                                                borderRadius: "999px",
                                                px: 3.5,
                                                py: 1.5,
                                                "&:hover": { backgroundColor: colors.primaryHover }
                                            }}
                                        >
                                            {isSending ? "Sending..." : "Send Request"}
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </>
            )}
        </Box>
    );
}

export default CartPage;
