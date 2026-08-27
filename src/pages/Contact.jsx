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
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 2.5, md: 3 }, pb: { xs: 2, md: 2.5 } }}>
        <Box sx={{ maxWidth: 1400, mx: "auto", textAlign: "center" }}>
          <Typography
            component="h1"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              gap: 1.5,
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
                fontSize: { xs: "2.75rem", md: "3.5rem" },
                lineHeight: 1,
              }}
            >
              Get in
            </Box>
            <Box
              component="span"
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
              touch
            </Box>
          </Typography>
          <Typography sx={{ color: colors.textMuted, fontSize: "1.05rem", maxWidth: 520, mx: "auto", mt: 3 }}>
            Fill out the form below to start planning your event decor — our design team is
            ready to create something eye-catching for you.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ pt: { xs: 3, md: 5 } }}>
        <InquiryForm
          preselectedServices={preselectedService ? [preselectedService] : []}
          description={
            <>
              Have a quick question instead? Email{" "}
              <Box component="b" sx={{ color: colors.text }}>
                marisballoonbar@gmail.com
              </Box>{" "}
              or call{" "}
              <Box component="b" sx={{ color: colors.text }}>
                512-825-5833
              </Box>
              .
            </>
          }
        />
      </Box>
    </Box>
  );
}

export default Contact;
