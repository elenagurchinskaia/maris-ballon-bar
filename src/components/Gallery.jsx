import { Box, Grid } from "@mui/material";

const images = [
  // { src: "/assets/gallery/home.png", alt: "40" },
  { src: "/assets/gallery/cotton-candy.jpg", alt: "Cotton candy" },
  { src: "/assets/gallery/neon-signs.jpg", alt: "Neon signs" },
  { src: "/assets/gallery/shimmer-walls.jpg", alt: "Shimmer walls" },
];

function Gallery() {
  return (
    <Box sx={{
      backgroundColor: "white",
      width: "100%",
      maxWidth: "100%",
      position: "relative",
      zIndex: 2,
      // overflow: "hidden",
      display: "flex",
      justifyContent: "center",

      // mt: { xs: 12, md: 12 },
    }}>
      <Grid container spacing={2}>
        {images.map((img, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            sx={{
              height: { xs: "50vw", sm: "45vw" },
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={img.src}
              alt={img.alt}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
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


