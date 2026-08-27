import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "../theme";

const SERVICE_OPTIONS = [
  "Balloon installations",
  "Jumbo balloons",
  "Backdrops",
  "Shimmer walls",
  "Marquees",
  "Floral arrangements",
  "Tablescapes",
  "Tables and chairs",
  "Tents",
  "Cotton candy cart",
  "Not sure yet",
];

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
  preselectedServices = [],
}) {
  const form = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [sending, setSending] = useState(false);
  const [selectedServices, setSelectedServices] = useState(preselectedServices);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

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
          setSelectedServices([]);
          setSending(false);
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Oops! Something went wrong. Please try again later.");
          setSending(false);
        }
      );
  };

  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      backgroundColor: colors.background,
      "& fieldset": { borderColor: colors.border },
      "&:hover fieldset": { borderColor: colors.softAccent },
      "&.Mui-focused fieldset": { borderColor: colors.primary },
    },
  };

  return (
    <Box sx={{ px: { xs: 3, md: 4 }, pt: { xs: 5, md: 7 }, pb: { xs: 8, md: 12 } }}>
      <Box
        component="form"
        ref={form}
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 600,
          mx: "auto",
          backgroundColor: "#fff",
          border: `1px solid ${colors.border}`,
          borderRadius: "20px",
          boxShadow: "0 16px 32px rgba(48,34,54,0.08)",
          px: { xs: 3, md: 5 },
          py: { xs: 4, md: 5 },
        }}
      >
        {heading && (
          <Typography
            align="center"
            sx={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              color: colors.text,
              fontSize: { xs: "1.75rem", md: "2rem" },
              mb: description ? 1.5 : 3,
            }}
          >
            {heading}
          </Typography>
        )}

        {description && (
          <Typography align="center" sx={{ color: colors.textMuted, fontSize: "0.95rem", lineHeight: 1.6, mb: 3 }}>
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
          sx={fieldSx}
        />
        <TextField
          required
          fullWidth
          label="Email Address"
          name="user_email"
          margin="normal"
          type="email"
          variant="outlined"
          sx={fieldSx}
        />
        <TextField
          required
          fullWidth
          label="Phone Number"
          name="user_phone"
          margin="normal"
          variant="outlined"
          sx={fieldSx}
        />
        <TextField
          fullWidth
          label="Company Name (if applicable)"
          name="company_name"
          margin="normal"
          variant="outlined"
          sx={fieldSx}
        />
        <TextField
          fullWidth
          label="How did you hear about us?"
          name="referral_source"
          margin="normal"
          variant="outlined"
          sx={fieldSx}
        />
        <TextField
          fullWidth
          label="Preferred Event Date"
          name="event_date"
          margin="normal"
          type="date"
          InputLabelProps={{ shrink: true }}
          sx={fieldSx}
        />
        <Box
          component="fieldset"
          sx={{ border: "none", p: 0, m: 0, mt: 2, mb: 1 }}
        >
          <Typography
            component="legend"
            sx={{ color: colors.text, fontWeight: 700, fontSize: "0.9rem", mb: 1, p: 0 }}
          >
            What services are you interested in?
          </Typography>
          <FormGroup
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              columnGap: 1,
            }}
          >
            {SERVICE_OPTIONS.map((service) => (
              <FormControlLabel
                key={service}
                control={
                  <Checkbox
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                    sx={{
                      color: colors.border,
                      "&.Mui-checked": { color: colors.primary },
                    }}
                  />
                }
                label={service}
                sx={{ "& .MuiFormControlLabel-label": { fontSize: "0.9rem", color: colors.textMuted } }}
              />
            ))}
          </FormGroup>
        </Box>
        <input type="hidden" name="services_interested" value={selectedServices.join(", ")} />

        <TextField
          required
          fullWidth
          label="Message"
          name="message"
          margin="normal"
          multiline
          rows={4}
          variant="outlined"
          sx={fieldSx}
        />

        <Box sx={{ textAlign: "center" }}>
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
      </Box>
    </Box>
  );
}

export default InquiryForm;
