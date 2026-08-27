import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import InquiryForm from "../components/InquiryForm";
import { Box, Typography } from "@mui/material";
import { colors } from "../theme";
import { useDocumentMeta } from "../utils/useDocumentMeta";

function Contact() {
  useDocumentMeta(
    "Contact | Mari's Balloon Bar",
    "Get in touch about balloon decor, backdrops, event styling, and party rentals in Austin, Texas."
  );
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service");

  return (
    <Box sx={{ backgroundColor: colors.background }}>
      <Navbar />

      {/* Hero */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 2, md: 2.5 }, pb: { xs: 1, md: 1 } }}>
        <Box sx={{ maxWidth: 1400, mx: "auto", textAlign: "center" }}>
          <Typography
            component="h1"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              gap: 1,
              flexWrap: "wrap",
              m: 0,
            }}
          >
            <Box
              component="span"
              sx={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                color: colors.text,
                fontSize: { xs: "1.9rem", md: "2.5rem" },
                lineHeight: 1.15,
              }}
            >
              Tell us about your
            </Box>
            <Box
              component="span"
              sx={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 550,
                fontVariationSettings: '"opsz" 20, "WONK" 0',
                color: colors.softAccent,
                fontSize: { xs: "2.1rem", md: "2.75rem" },
                lineHeight: 1.15,
              }}
            >
              celebration
            </Box>
          </Typography>
          <Typography sx={{ color: colors.textMuted, fontSize: "1rem", maxWidth: 480, mx: "auto", mt: 1.5 }}>
            Share a few details about your event, and we'll help bring your vision to life.
          </Typography>
        </Box>
      </Box>

      {/* Contact section */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: "40px", md: "64px" }, pb: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            maxWidth: 1150,
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
            gap: { xs: 5, md: 6 },
            alignItems: "start",
          }}
        >
          {/* Left: branded intro panel */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Box
              component="img"
              src="/assets/logo/flower-inf-no-bg.png"
              alt=""
              aria-hidden="true"
              sx={{
                width: { xs: 64, md: 84 },
                height: "auto",
                display: "block",
                mx: { xs: "auto", md: 0 },
                mb: 2,
              }}
            />
            <Typography
              sx={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                color: colors.text,
                fontSize: { xs: "1.3rem", md: "1.45rem" },
                mb: 2,
              }}
            >
              Have a quick question?
            </Typography>
            <Box
              component="a"
              href="mailto:marisballoonbar@gmail.com"
              sx={{
                display: "block",
                color: colors.text,
                fontWeight: 700,
                textDecoration: "none",
                mb: 1,
                "&:hover": { color: colors.primary, textDecoration: "underline" },
              }}
            >
              marisballoonbar@gmail.com
            </Box>
            <Box
              component="a"
              href="tel:5128255833"
              sx={{
                display: "block",
                color: colors.text,
                fontWeight: 700,
                textDecoration: "none",
                mb: 2.5,
                "&:hover": { color: colors.primary, textDecoration: "underline" },
              }}
            >
              512-825-5833
            </Box>
            <Typography sx={{ color: colors.textMuted, fontSize: "0.9rem", lineHeight: 1.6 }}>
              We typically respond within 1–2 business days.
            </Typography>
          </Box>

          {/* Right: form card */}
          <InquiryForm
            sectionPadding={false}
            cardMaxWidth="100%"
            fullWidthSubmit
            submitLabel="Send My Event Details"
            responseNote="We typically respond within 1–2 business days."
            preselectedServices={preselectedService ? [preselectedService] : []}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
