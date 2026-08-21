import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  TextField,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "../theme";

/**
 * Shared inquiry/booking form. Used by both the Contact page and the
 * Book Event page so the fields, EmailJS wiring, and styling only live
 * in one place. Both forms send to the same EmailJS template — Mari
 * gets the same email shape either way, with the "message" field
 * distinguishing a general question from a booking request.
 */
function InquiryForm({
  heading,
  description,
  submitLabel = "Submit",
  successMessage = "Thank you! Your message has been sent successfully!",
}) {
  const form = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert(successMessage);
          form.current.reset();
          setSending(false);
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Oops! Something went wrong. Please try again later.");
          setSending(false);
        }
      );
  };

  return (
    <Box
      component="form"
      ref={form}
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: "auto",
        px: 2,
        py: 6,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        {heading}
      </Typography>

      {description && (
        <Typography align="center" sx={{ mb: 3 }}>
          {description}
        </Typography>
      )}

      <TextField
        required
        fullWidth
        label="First and Last Name"
        name="user_name"
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        fullWidth
        label="Email Address"
        name="user_email"
        margin="normal"
        type="email"
        variant="outlined"
      />
      <TextField
        required
        fullWidth
        label="Phone Number"
        name="user_phone"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Company Name (if applicable)"
        name="company_name"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="How did you hear about us?"
        name="referral_source"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Preferred Event Date"
        name="event_date"
        margin="normal"
        type="date"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        required
        fullWidth
        label="Message"
        name="message"
        margin="normal"
        multiline
        rows={4}
        variant="outlined"
      />

      <Button
        type="submit"
        disabled={sending}
        endIcon={!sending && <ArrowForwardIcon />}
        sx={{
          mt: 3,
          backgroundColor: colors.primary,
          color: "#fff",
          textTransform: "uppercase",
          fontWeight: 700,
          letterSpacing: "0.05em",
          fontSize: isMobile ? "0.85rem" : "0.95rem",
          borderRadius: "999px",
          px: 3.5,
          py: 1.5,
          "&:hover": {
            backgroundColor: colors.primaryHover,
          },
        }}
      >
        {sending ? "Sending..." : submitLabel}
      </Button>
    </Box>
  );
}

export default InquiryForm;
