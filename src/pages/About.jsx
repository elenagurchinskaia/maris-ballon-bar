import Navbar from "../components/Navbar";
import { Box, Typography } from "@mui/material";
import { colors } from "../theme";
import { useDocumentMeta } from "../utils/useDocumentMeta";

const stats = [
  { value: "400+", label: "Installations Created" },
  { value: "300+", label: "Events Styled" },
];

function About() {
  useDocumentMeta(
    "About Mari | Mari's Balloon Bar",
    "The story behind Mari's Balloon Bar — balloon decor, backdrops, event styling, and party rentals in Austin, Texas."
  );

  return (
    <Box sx={{ backgroundColor: colors.background }}>
      <Navbar />

      {/* Hero */}
      <Box sx={{ px: { xs: 3, md: 8 }, pt: { xs: 3.5, md: 3.5 }, pb: { xs: 1, md: 1 } }}>
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
              About
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
              Mari
            </Box>
          </Typography>
        </Box>
      </Box>

      {/* Meet Mari */}
      <Box
        component="section"
        aria-labelledby="meet-mari-heading"
        sx={{ px: { xs: 3, md: 8 }, pt: { xs: 1, md: 1 }, pb: { xs: 8, md: 12 } }}
      >
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { md: "center" },
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: 5, md: 8 },
          }}
        >
          <Box sx={{ flexShrink: 0, width: { xs: "100%", sm: 340, md: 420 } }}>
            <Box
              sx={{
                width: "100%",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 16px 32px rgba(48,34,54,0.18)",
              }}
            >
              <Box
                component="img"
                src="/assets/gallery/archive/bio.jpg"
                alt="Mari, founder of Mari's Balloon Bar"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ maxWidth: { md: 680 }, minWidth: 0 }}>
            <Typography
              sx={{
                color: colors.primary,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                mb: 1.5,
              }}
            >
              Meet Mari
            </Typography>
            <Typography
              id="meet-mari-heading"
              component="h2"
              sx={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                color: colors.text,
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                lineHeight: 1.25,
                m: 0,
                mb: 2,
              }}
            >
              Five years of experience turning "just balloons" into the moment everyone photographs.
            </Typography>
            <Typography sx={{ color: colors.textMuted, fontSize: "1.05rem", lineHeight: 1.7, mb: 3 }}>
              Mari's Balloon Bar began with a simple belief: every celebration deserves a little
              magic. What started with creating balloon décor for friends and family has grown
              into a full-service balloon design studio serving Austin and the surrounding areas.
            </Typography>
            <Typography sx={{ color: colors.textMuted, fontSize: "1.05rem", lineHeight: 1.7, mb: 3 }}>
              From organic garlands and statement arches to custom backdrops and event details,
              every installation is thoughtfully designed around the client's colors, theme, and
              vision. Mari works closely with each client to create something personal — never
              one‑size‑fits‑all.
            </Typography>
            <Typography sx={{ color: colors.textMuted, fontSize: "1.05rem", lineHeight: 1.7, mb: 4 }}>
              Whether she's styling a first birthday, baby shower, wedding, or corporate
              celebration, Mari brings the same care to every project. Because it's often the
              smallest details that turn a beautiful event into an unforgettable one.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 4,
                mt: 1,
                maxWidth: 420,
              }}
            >
              {stats.map((stat) => (
                <Box key={stat.label}>
                  <Typography
                    sx={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 700,
                      color: colors.softAccent,
                      fontSize: { xs: "1.5rem", md: "1.75rem" },
                      mb: 0.5,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.textMuted,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      maxWidth: 150,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
