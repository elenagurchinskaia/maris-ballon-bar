import { Box, Grid, useTheme } from "@mui/material";

const images = [
  { src: "/assets/gallery/cotton-candy.jpg", alt: "Cotton candy" },
  { src: "/assets/gallery/neon-signs.jpg", alt: "Neon signs" },
  { src: "/assets/gallery/shimmer-walls.jpg", alt: "Shimmer walls" },
];

function Gallery() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        padding: { xs: 2, md: 4 },
        boxSizing: "border-box",
        minHeight: "110vh",

      }}
    >
      <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
        {images.map((img, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={img.src}
              alt={img.alt}
              sx={{
                width: "100%",
                maxWidth: "320px",
                height: "auto",
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Gallery;


