import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TestimonialCTA from "../components/TestimonialCTA";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography, Button } from "@mui/material";
import { colors } from "../theme";
import { Squiggle, Dot } from "../components/Decor";
import { useDocumentMeta } from "../utils/useDocumentMeta";

// Custom line-style service icons — one cohesive stroke style (round caps/
// joins, 2px weight, 48x48 canvas) instead of a generic icon library, so
// each glyph reads as this specific service rather than a stock symbol.
const iconSx = { width: 34, height: 34 };
const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function BalloonGarlandIcon() {
  return (
    <Box component="svg" viewBox="0 0 48 48" sx={iconSx} {...iconProps}>
      <circle cx="7" cy="32" r="4.5" />
      <circle cx="16.5" cy="20" r="5.5" />
      <circle cx="24" cy="14" r="6" />
      <circle cx="31.5" cy="20" r="5.5" />
      <circle cx="41" cy="32" r="4.5" />
    </Box>
  );
}

function BackdropIcon() {
  return (
    <Box component="svg" viewBox="0 0 48 48" sx={iconSx} {...iconProps}>
      <path d="M9 40 V20 C9 11 16 6 24 6 C32 6 39 11 39 20 V40" />
      <circle cx="37" cy="9" r="3" fill="currentColor" stroke="none" />
      <circle cx="42.5" cy="13" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="38.5" cy="16.5" r="2" fill="currentColor" stroke="none" />
    </Box>
  );
}

function TableSettingIcon() {
  return (
    <Box component="svg" viewBox="0 0 48 48" sx={iconSx} {...iconProps}>
      <ellipse cx="20" cy="16" rx="13" ry="4" />
      <line x1="20" y1="20" x2="20" y2="34" />
      <ellipse cx="20" cy="36" rx="9" ry="2.6" />
      <path
        d="M38 8 L39.3 11.7 L43 13 L39.3 14.3 L38 18 L36.7 14.3 L33 13 L36.7 11.7 Z"
        fill="currentColor"
        stroke="none"
      />
    </Box>
  );
}

function RentalPropIcon() {
  return (
    <Box component="svg" viewBox="0 0 48 48" sx={iconSx} {...iconProps}>
      <path d="M9 38 L24 9 L39 38" />
      <path d="M18 38 L24 21 L30 38" />
      <path d="M24 9 V4" />
      <path d="M24 4 L29 6 L24 8 Z" fill="currentColor" stroke="none" />
    </Box>
  );
}

// Real photos of Mari's own work — reused from the Gallery page's image set.
const galleryPreviewImages = [
  {
    src: "/assets/gallery/gallery-01-boho.png",
    alt: "Boho-style '40' birthday marquee numbers with a mustard, plum and blush balloon garland in a backyard",
  },
  {
    src: "/assets/gallery/gallery-08-bridal-shower.jpg",
    alt: "'Miss to Mrs.' bridal shower backdrop with a sage, ivory and gold balloon garland",
  },
  {
    src: "/assets/gallery/gallery-22-hello-kitty.jpg",
    alt: "Hello Kitty birthday backdrop with pink and teal balloons and a 'Happy Birthday' neon sign",
  },
  {
    src: "/assets/gallery/gallery-12-christmas-tree.jpg",
    alt: "Balloon Christmas tree and red, green and gold garland beside lit marquee letters",
  },
  {
    src: "/assets/gallery/gallery-27-tropical.jpg",
    alt: "Tropical pink, orange and yellow balloon garland with palm leaves against a greenery wall",
  },
  {
    src: "/assets/gallery/gallery-07-70th-birthday.jpg",
    alt: "'70' birthday marquee numbers with a black and silver balloon garland beside a sequin backdrop",
  },
  {
    src: "/assets/gallery/gallery-03-bridal-tiny-box.jpg",
    alt: "Blush balloon garland with fresh florals beside a 'Baby in Bloom' sign",
  },
  {
    src: "/assets/gallery/gallery-24-marquees.jpg",
    alt: "Lit '2024' New Year's Eve marquee numbers with white and gold balloon clusters",
  },
];

// One ground, one ink, one accent across all four cards — category is
// carried by the photo/icon, never by a per-card tint.
const features = [
  {
    icon: <BalloonGarlandIcon />,
    title: "Balloon installations",
    description:
      "Custom balloon decor, arches, garlands, and jumbo balloons designed around your celebration.",
    decoration: "flower",
  },
  {
    icon: <BackdropIcon />,
    title: "Backdrops & statement pieces",
    description:
      "Photo-ready backdrops, shimmer walls, and marquees that transform the entire space.",
  },
  {
    icon: <TableSettingIcon />,
    title: "Event styling",
    description:
      "Coordinated colors, statement details, and thoughtful finishing touches that bring the entire celebration together.",
    decoration: "star",
  },
  {
    icon: <RentalPropIcon />,
    title: "Party rentals",
    description: "Tables, chairs, tents, and playful additions for a complete event setup.",
  },
];

function Home() {
  useDocumentMeta(
    "Mari's Balloon Bar | Balloon Decor, Backdrops & Event Styling in Austin, TX",
    "Balloon decor, backdrops, event styling, and party rentals in Austin, Texas."
  );

  const galleryScrollRef = useRef(null);

  return (
    <Box sx={{ backgroundColor: colors.background }}>
      <Navbar />

      {/* Hero */}
      <Box
        sx={{
          pt: { xs: 0, md: 4 },
          pb: { xs: 4, md: 10 },
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: { xs: 3, md: 0 },
        }}
      >
        {/* Text column */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            px: { xs: 3, md: 8 },
            mt: { xs: 0, md: 9 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontSize: { xs: "1rem", md: "0.85rem" },
              color: colors.text,
              mb: 0,
            }}
          >
            Bespoke Balloons For
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "4.25rem", sm: "5.25rem", md: "6rem" },
              lineHeight: 1,
              mb: 1,
              mt: { xs: 0.5, md: -1 },
            }}
          >
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                fontWeight: 500,
                color: colors.primary,
                fontSize: { xs: "4.25rem", sm: "5.25rem", md: "6rem" },
              }}
            >
              every
            </Box>
            <Box
              component="span"
              sx={{
                display: "block",
                fontWeight: 700,
                color: colors.text,
                fontSize: { xs: "4.25rem", sm: "5.25rem", md: "6rem" },
                mt: -1,
              }}
            >
              moment
            </Box>
          </Typography>

          {/* Short one-liner on mobile; full description on desktop only */}
          <Typography
            sx={{
              display: { xs: "block", md: "none" },
              color: colors.textMuted,
              fontSize: "1.2rem",
              maxWidth: "100%",
              mb: 3,
            }}
          >
            Custom balloon installations and event styling in Austin.
          </Typography>
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
              color: colors.textMuted,
              fontSize: "1.05rem",
              maxWidth: 600,
              mb: 4,
            }}
          >
            Custom balloon installations, statement backdrops, event styling,
            and party rentals for unforgettable celebrations in Austin
            and surrounding areas.
          </Typography>

          {/* Mobile: one full-width button + a text link */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Button
              component={Link}
              to="/book-event"
              fullWidth
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: colors.primary,
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: "0.05em",
                borderRadius: "999px",
                height: "52px",
                "&:hover": { backgroundColor: colors.primaryHover },
              }}
            >
              Check availability
            </Button>
            <Box
              component={Link}
              to="/gallery"
              sx={{
                display: "block",
                textAlign: "center",
                mt: 2,
                color: colors.primary,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                fontWeight: 700,
                letterSpacing: "0.02em",
                fontSize: "0.95rem",
              }}
            >
              See the gallery
            </Box>
          </Box>

          {/* Desktop: primary button + text link */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
            <Button
              component={Link}
              to="/book-event"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: colors.primary,
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: "0.05em",
                borderRadius: "999px",
                whiteSpace: "nowrap",
                px: 3,
                py: 1.5,
                fontSize: "0.75rem",
                "&:hover": { backgroundColor: colors.primaryHover },
              }}
            >
              Check availability
            </Button>
            <Box
              component={Link}
              to="/gallery"
              sx={{
                color: colors.primary,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                fontWeight: 700,
                letterSpacing: "0.02em",
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
              }}
            >
              See the gallery
            </Box>
          </Box>
        </Box>

        {/* Image column */}
        <Box
          sx={{
            width: { xs: "100%", md: "72%" },
            flexShrink: 0,
            height: { xs: "55vh", sm: "55vh", md: "calc((100vh - 90px) * 0.9)" },
            overflow: "hidden",
            backgroundColor: colors.background,
            transform: { md: "translateX(-64px)" },
          }}
        >
          <Box component="picture">
            <source media="(max-width: 899.95px)" srcSet="/assets/logo/arch-mobile.png" />
            <Box
              component="img"
              src="/assets/logo/balloons-arch-v3.png"
              alt="Custom balloon installation by Mari's Balloon Bar"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: { xs: "cover", md: "contain" },
                objectPosition: "center",
                maskImage: {
                  xs: "none",
                  md: "linear-gradient(to right, transparent 0%, black 18%)",
                },
                WebkitMaskImage: {
                  xs: "none",
                  md: "linear-gradient(to right, transparent 0%, black 18%)",
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Services */}
      <Box
        component="section"
        aria-labelledby="services-heading"
        sx={{
          px: { xs: 3, md: 8 },
          pb: { xs: 5, md: 12 },
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            color: colors.primary,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontSize: "0.85rem",
            mb: 0.5,
          }}
        >
          Our Services
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: { xs: 4, md: 5 } }}>
          <Typography
            id="services-heading"
            component="h2"
            sx={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              color: colors.text,
              fontSize: { xs: "1.85rem", md: "2.25rem" },
              m: 0,
            }}
          >
            How we can help
          </Typography>
          <Squiggle
            color={colors.accent}
            aria-hidden="true"
            sx={{ position: "relative", top: 4, left: 0, width: 34, height: 22, display: { xs: "none", sm: "block" } }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: { xs: "16px", sm: "18px" },
          }}
        >
          {features.map((feature) => (
            <Box
              key={feature.title}
              sx={{
                position: "relative",
                backgroundColor: colors.background,
                border: "1px solid rgba(48, 34, 54, 0.16)",
                borderRadius: "24px",
                p: { xs: 2.5, sm: 3 },
                display: "grid",
                gridTemplateRows: { xs: "40px minmax(40px, auto) 1fr", sm: "48px minmax(44px, auto) 1fr" },
                rowGap: { xs: "8px", sm: "12px" },
                justifyItems: "center",
                textAlign: "center",
                minHeight: { xs: "auto", sm: 260, md: 280 },
                overflow: "visible",
                transition: "background-color 0.2s ease",
                "&:hover": { backgroundColor: colors.primary },
              }}
            >
              {feature.decoration === "flower" && (
                <Box
                  component="img"
                  src="/assets/logo/flower-inf-no-bg.png"
                  alt=""
                  aria-hidden="true"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    bottom: { sm: -25, md: -53 },
                    left: { sm: -8, md: -14 },
                    width: { sm: 85, md: 115 },
                    aspectRatio: "1301 / 1209",
                    height: "auto",
                    display: "none",
                    "@media (min-width:768px)": { display: "block" },
                  }}
                />
              )}
              {feature.decoration === "star" && (
                <Box
                  component="img"
                  src="/assets/logo/star-inf-no-bg.png"
                  alt=""
                  aria-hidden="true"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    bottom: { sm: -26, md: -42 },
                    right: { sm: 0, md: 4 },
                    width: { sm: 60, md: 82 },
                    aspectRatio: "1312 / 1199",
                    height: "auto",
                    display: "none",
                    "@media (min-width:768px)": { display: "block" },
                  }}
                />
              )}

              <Box
                aria-hidden="true"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: colors.text,
                }}
              >
                {feature.icon}
              </Box>
              <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 0.75 }}>
                <Typography
                  component="h3"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                    fontSize: { xs: "0.95rem", sm: "0.92rem" },
                    lineHeight: 1.35,
                    maxWidth: 210,
                    color: colors.text,
                    m: 0,
                  }}
                >
                  {feature.title}
                </Typography>
                <Box sx={{ width: "26px", height: "3px", borderRadius: "2px", backgroundColor: colors.primary }} />
              </Box>
              <Typography
                sx={{
                  position: "relative",
                  zIndex: 1,
                  color: "rgba(48, 34, 54, 0.8)",
                  fontSize: { xs: "0.93rem", sm: "0.9rem" },
                  lineHeight: 1.5,
                  maxWidth: 220,
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Why Choose Mari */}
      <Box
        component="section"
        aria-labelledby="why-mari-heading"
        sx={{
          position: "relative",
          px: { xs: 3, md: 8 },
          pb: { xs: 4, md: 6 },
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: { xs: 4, sm: 3, md: 5 },
          }}
        >
          {/* Portrait */}
          <Box
            sx={{
              order: { xs: 3, sm: 1 },
              flexShrink: 0,
              width: { xs: "68%", sm: "26%", md: "18%" },
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: { xs: "3 / 4", sm: "4 / 5" },
                borderRadius: "220px 220px 20px 20px",
                overflow: "hidden",
                backgroundColor: "#F3ECFB",
                boxShadow: "0 12px 28px rgba(48,34,54,0.1)",
              }}
            >
              <Box
                component="img"
                src="/assets/gallery/archive/bio.jpg"
                alt="Mari, founder and balloon artist at Mari's Balloon Bar"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 18%",
                  display: "block",
                }}
              />
            </Box>

            {/* Mobile-only flower accent, overlapping the portrait corner */}
            <Box
              component="img"
              src="/assets/logo/flower-inf-no-bg.png"
              alt=""
              aria-hidden="true"
              sx={{
                display: { xs: "block", sm: "none" },
                position: "absolute",
                zIndex: 2,
                bottom: -25,
                right: -22,
                width: 62,
                aspectRatio: "1301 / 1209",
                height: "auto",
              }}
            />
          </Box>

          {/* Center content */}
          <Box sx={{ order: { xs: 1, sm: 2 }, flex: 1, textAlign: "left", minWidth: 0 }}>
            <Typography
              sx={{
                color: colors.primary,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                mb: 1,
              }}
            >
              Why Choose Mari
            </Typography>
            <Typography
              id="why-mari-heading"
              component="h2"
              sx={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                color: colors.text,
                fontSize: { xs: "1.9rem", md: "2.15rem" },
                lineHeight: 1.15,
                m: 0,
                mb: 2,
              }}
            >
              Unforgettable celebrations, beautifully{" "}designed
            </Typography>
            <Typography sx={{ color: colors.textMuted, fontSize: "1rem", lineHeight: 1.6, maxWidth: 420, mb: 3 }}>
              From intimate gatherings to unforgettable events, we design custom balloon
              experiences that bring your vision to life.
            </Typography>
            <Button
              component={Link}
              to="/about"
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
                fontSize: "0.8rem",
                "&:hover": { backgroundColor: colors.primaryHover },
              }}
            >
              About Mari
            </Button>
          </Box>

          {/* Flower + confetti */}
          <Box
            sx={{
              order: { xs: 2, sm: 3 },
              display: { xs: "none", sm: "block" },
              position: "relative",
              flexShrink: 0,
              width: { sm: "16%", md: "20%" },
            }}
          >
            <Squiggle
              color={colors.accent}
              aria-hidden="true"
              sx={{ top: 4, left: 4, width: 46, height: 36, transform: "rotate(-25deg)" }}
            />
            <Squiggle
              color={colors.softAccent}
              aria-hidden="true"
              sx={{ top: -22, left: 68, width: 38, height: 52, transform: "rotate(8deg)", display: { sm: "none", md: "block" } }}
            />
            <Squiggle
              color={colors.softAccent}
              aria-hidden="true"
              sx={{ top: 22, left: 120, width: 40, height: 46, transform: "rotate(-12deg)" }}
            />
            <Squiggle
              color={colors.primary}
              aria-hidden="true"
              sx={{ top: -10, right: 45, width: 50, height: 34, transform: "rotate(12deg)" }}
            />
            <Dot
              color={colors.primary}
              aria-hidden="true"
              sx={{ top: 56, left: 46, width: 10, height: 10 }}
            />
            <Dot
              color={colors.softAccent}
              aria-hidden="true"
              sx={{ top: -18, left: 116, width: 9, height: 9, display: { sm: "none", md: "block" } }}
            />
            <Dot
              color={colors.accent}
              aria-hidden="true"
              sx={{ top: 40, right: 55, width: 9, height: 9, display: { sm: "none", md: "block" } }}
            />
            <Box
              component="img"
              src="/assets/logo/flower-inf-no-bg.png"
              alt=""
              aria-hidden="true"
              sx={{
                position: "relative",
                zIndex: 1,
                mt: 5,
                ml: "auto",
                mr: 2,
                width: "72%",
                aspectRatio: "1301 / 1209",
                height: "auto",
                filter: "drop-shadow(0 12px 20px rgba(48,34,54,0.15))",
              }}
            />
          </Box>
        </Box>

      </Box>

      {/* Gallery preview */}
      <Box
        component="section"
        aria-labelledby="gallery-preview-heading"
        sx={{
          px: { xs: 3, md: 8 },
          pt: { xs: 5, md: 10 },
          pb: { xs: 6, md: 10 },
          maxWidth: 1600,
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 4, md: 3 },
          }}
        >
          {/* Text column */}
          <Box sx={{ flexShrink: 0, width: { xs: "100%", md: 420 } }}>
            <Typography
              sx={{
                color: colors.primary,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                mb: 1,
              }}
            >
              Gallery
            </Typography>
            <Typography
              id="gallery-preview-heading"
              component="h2"
              sx={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                color: colors.text,
                fontSize: { xs: "1.9rem", md: "2rem" },
                lineHeight: 1.15,
                whiteSpace: { md: "nowrap" },
                m: 0,
                mb: 3,
              }}
            >
              A glimpse of our work
            </Typography>
            <Button
              component={Link}
              to="/gallery"
              endIcon={<ArrowForwardIcon />}
              variant="outlined"
              sx={{
                borderColor: colors.primary,
                color: colors.primary,
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: "0.05em",
                borderRadius: "999px",
                px: 3,
                py: 1.5,
                fontSize: { xs: "0.85rem", md: "0.8rem" },
                "&:hover": {
                  borderColor: colors.primaryHover,
                  backgroundColor: "rgba(242, 90, 155, 0.08)",
                },
              }}
            >
              View Full Gallery
            </Button>
          </Box>

          {/* Image row */}
          <Box sx={{ position: "relative", flex: 1, minWidth: 0, width: "100%" }}>
            <Box
              ref={galleryScrollRef}
              sx={{
                display: "flex",
                gap: { xs: 1.5, md: 2 },
                overflowX: "auto",
                scrollBehavior: "smooth",
                pb: { xs: 1, md: 0 },
                pr: { md: 4 },
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {galleryPreviewImages.map((img) => (
                <Box key={img.src} sx={{ flexShrink: 0, width: { xs: 216, md: 260 } }}>
                  <Box
                    component="img"
                    src={img.src}
                    alt={img.alt}
                    sx={{
                      width: "100%",
                      height: { xs: 240, md: 260 },
                      objectFit: "cover",
                      borderRadius: "18px",
                      display: "block",
                      boxShadow: "0 8px 20px rgba(48,34,54,0.12)",
                    }}
                  />
                </Box>
              ))}
            </Box>

            <Box
              component="button"
              type="button"
              onClick={() =>
                galleryScrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })
              }
              aria-label="Show more gallery photos"
              sx={{
                display: { xs: "none", md: "flex" },
                position: "absolute",
                top: "50%",
                right: -28,
                transform: "translateY(-50%)",
                width: 56,
                height: 56,
                border: "none",
                borderRadius: "50%",
                backgroundColor: colors.primary,
                color: "#fff",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(242,90,155,0.35)",
                "&:hover": { backgroundColor: colors.primaryHover },
                "&:focus-visible": { outline: `2px solid ${colors.text}`, outlineOffset: "3px" },
              }}
            >
              <ArrowForwardIcon aria-hidden="true" />
            </Box>
          </Box>
        </Box>
      </Box>

      <TestimonialCTA />
    </Box>
  );
}

export default Home;
