import Navbar from "../components/Navbar";
import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function ContactForm() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <>
      <Navbar />
      <Box
        component="form"
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
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          fullWidth
          label="Email Address"
          margin="normal"
          type="email"
          variant="outlined"
        />
        <TextField
          required
          fullWidth
          label="Phone Number"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Company Name (if applicable)"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="How did you hear about us?"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Event Date"
          margin="normal"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          required
          fullWidth
          label="Message"
          margin="normal"
          multiline
          rows={4}
          variant="outlined"
        />

        <Button
          type="submit"
          variant="contained"
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
          SUBMIT
        </Button>
      </Box>
    </>
  );
}

export default ContactForm;
