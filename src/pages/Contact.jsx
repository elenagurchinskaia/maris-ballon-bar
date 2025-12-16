import Navbar from "../components/Navbar";
import {
  Box,
  TextField,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { set } from "date-fns";

function ContactForm() {
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
        (result) => {
          console.log("Email sent:", result.text);
          alert("Thank you! Your message has been sent successfully!");
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
    <>
      <Navbar />
      <Box
        component="form"
        ref={form}
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 600,
          mx: "auto",
          px: 2,
          py: 6,
          fontFamily: "Trap",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
          fontFamily={"trap"}
        >
          CONTACT
        </Typography>

        <Typography align="center" sx={{ mb: 1 }}>
          PLEASE FILL OUT THE FORM BELOW TO START PLANNING YOUR EVENT DECOR.
          OUR DESIGN TEAM IS READY TO CREATE EYE-CATCHING BALLOON DECORATIONS FOR YOU.
        </Typography>

        <Typography align="center" sx={{ mb: 3 }}>
          Do you have any questions? Send us an email to <b>marisballoonbar@gmail.com</b> or call us at <b>512-825-5833</b>
        </Typography>

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
          label="Event Date"
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
          variant="contained"
          disabled={sending}
          sx={{
            mt: 3,
            backgroundColor: "#f6d1e3",
            color: "#000",
            fontFamily: "Trap",
            fontWeight: 700,
            fontSize: isMobile ? "1rem" : "1.25rem",
            px: 1.5,
            py: 0.3,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#f1bdd4",
            },
          }}
        >
          {sending ? "Sending..." : "SUBMIT"}
        </Button>
      </Box>
    </>
  );
}

export default ContactForm;
