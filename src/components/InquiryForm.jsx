import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  TextField,
  MenuItem,
  Typography,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "../theme";

const errorColor = "#C0392B";
const errorBg = "#FCEBEA";

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
  "Seasonal designs",
  "Not sure yet",
];

const REFERRAL_OPTIONS = [
  "Instagram",
  "Google",
  "Friend or referral",
  "Returning client",
  "Venue or event planner",
  "Other",
];

// Permanent label rendered above a field, connected via htmlFor — used
// instead of MUI's floating/inside label per the brand's form conventions.
function FieldLabel({ htmlFor, children, required, optional }) {
  return (
    <Typography
      component="label"
      htmlFor={htmlFor}
      sx={{
        display: "block",
        fontWeight: 700,
        fontSize: "0.8rem",
        letterSpacing: "0.02em",
        color: colors.text,
        mb: 0.75,
      }}
    >
      {children}
      {required && (
        <Box component="span" sx={{ color: colors.primary }}>
          {" "}
          *
        </Box>
      )}
      {optional && (
        <Box component="span" sx={{ color: colors.textMuted, fontWeight: 500 }}>
          {" "}
          (Optional)
        </Box>
      )}
    </Typography>
  );
}

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
  prefilledMessage = "",
  cardMaxWidth = 600,
  fullWidthSubmit = false,
  responseNote = "",
  sectionPadding = true,
}) {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedServices, setSelectedServices] = useState(preselectedServices);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setErrorMsg("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitted(true);
          setSending(false);
        },
        (error) => {
          console.error("Email error:", error.text);
          setErrorMsg("Oops! Something went wrong. Please try again, or email us directly at marisballoonbar@gmail.com.");
          setSending(false);
        }
      );
  };

  const handleReset = () => {
    form.current?.reset();
    setSelectedServices(preselectedServices);
    setErrorMsg("");
    setSubmitted(false);
  };

  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      backgroundColor: colors.background,
      "& fieldset": { borderColor: colors.border },
      "&:hover fieldset": { borderColor: colors.softAccent },
      "&.Mui-focused fieldset": { borderColor: colors.primary, borderWidth: "2px" },
    },
  };

  const formCard = (
    <Box
      component="form"
      ref={form}
      onSubmit={handleSubmit}
      sx={{
        maxWidth: cardMaxWidth,
        mx: "auto",
        backgroundColor: "#fff",
        border: `1px solid ${colors.border}`,
        borderRadius: "20px",
        boxShadow: "0 16px 32px rgba(48,34,54,0.08)",
        px: { xs: 3, md: 5 },
        py: { xs: 4, md: 5 },
      }}
    >
      {submitted ? (
        <Box sx={{ textAlign: "center", py: { xs: 2, md: 3 } }} role="status" aria-live="polite">
          <Typography
            sx={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              color: colors.text,
              fontSize: { xs: "1.75rem", md: "2rem" },
              mb: 1.5,
            }}
          >
            Thank you! 🎉
          </Typography>
          <Typography sx={{ color: colors.textMuted, fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 420, mx: "auto", mb: 3 }}>
            {successMessage}
          </Typography>
          <Button
            type="button"
            onClick={handleReset}
            sx={{
              backgroundColor: colors.primary,
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: "0.05em",
              borderRadius: "999px",
              px: 3.5,
              py: 1.5,
              fontSize: { xs: "0.85rem", md: "0.95rem" },
              "&:hover": { backgroundColor: colors.primaryHover },
            }}
          >
            Send Another Message
          </Button>
        </Box>
      ) : (
        <>
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

      {errorMsg && (
        <Box
          role="alert"
          sx={{
            mb: 3,
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

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }}>
          <Box>
            <FieldLabel htmlFor="user_name" required>
              First and Last Name
            </FieldLabel>
            <TextField id="user_name" required fullWidth name="user_name" variant="outlined" sx={fieldSx} />
          </Box>
          <Box>
            <FieldLabel htmlFor="user_email" required>
              Email Address
            </FieldLabel>
            <TextField
              id="user_email"
              required
              fullWidth
              name="user_email"
              type="email"
              variant="outlined"
              sx={fieldSx}
            />
          </Box>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }}>
          <Box>
            <FieldLabel htmlFor="user_phone" required>
              Phone Number
            </FieldLabel>
            <TextField id="user_phone" required fullWidth name="user_phone" variant="outlined" sx={fieldSx} />
          </Box>
          <Box>
            <FieldLabel htmlFor="company_name" optional>
              Company Name
            </FieldLabel>
            <TextField id="company_name" fullWidth name="company_name" variant="outlined" sx={fieldSx} />
          </Box>
        </Box>

        <Box>
          <FieldLabel htmlFor="referral_source" optional>
            How did you hear about us?
          </FieldLabel>
          <TextField
            id="referral_source"
            select
            fullWidth
            name="referral_source"
            variant="outlined"
            defaultValue=""
            sx={fieldSx}
          >
            <MenuItem value="">
              <em>Select an option</em>
            </MenuItem>
            {REFERRAL_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box>
          <FieldLabel htmlFor="event_date" optional>
            Preferred Event Date
          </FieldLabel>
          <TextField
            id="event_date"
            fullWidth
            name="event_date"
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={fieldSx}
          />
        </Box>

        <Box component="fieldset" sx={{ border: "none", p: 0, m: 0 }}>
          <Typography
            component="legend"
            sx={{ color: colors.text, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.02em", mb: 1, p: 0 }}
          >
            What services are you interested in?{" "}
            <Box component="span" sx={{ color: colors.textMuted, fontWeight: 500 }}>
              (Optional)
            </Box>
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
        <input type="hidden" name="services_interested" value={selectedServices.join("\n")} />

        <Box>
          <FieldLabel htmlFor="message" required>
            Message
          </FieldLabel>
          <TextField
            id="message"
            required
            fullWidth
            name="message"
            multiline
            rows={4}
            variant="outlined"
            defaultValue={prefilledMessage}
            sx={fieldSx}
          />
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Button
          type="submit"
          disabled={sending}
          fullWidth={fullWidthSubmit}
          endIcon={!sending && <ArrowForwardIcon />}
          sx={{
            backgroundColor: colors.primary,
            color: "#fff",
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: "0.05em",
            fontSize: { xs: "0.85rem", md: "0.95rem" },
            borderRadius: "999px",
            px: 3.5,
            py: 1.5,
            "&:hover": { backgroundColor: colors.primaryHover },
            "&:focus-visible": { outline: `2px solid ${colors.text}`, outlineOffset: "3px" },
            "&.Mui-disabled": { backgroundColor: colors.primaryHover, color: "rgba(255,255,255,0.8)" },
          }}
        >
          {sending ? "Sending..." : submitLabel}
        </Button>
        {responseNote && (
          <Typography sx={{ mt: 2, color: colors.textMuted, fontSize: "0.85rem" }}>{responseNote}</Typography>
        )}
      </Box>
        </>
      )}
    </Box>
  );

  if (!sectionPadding) {
    return formCard;
  }

  return <Box sx={{ px: { xs: 3, md: 4 }, pt: { xs: 5, md: 7 }, pb: { xs: 8, md: 12 } }}>{formCard}</Box>;
}

export default InquiryForm;
