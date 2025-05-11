import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography, Container } from "@mui/material";

function About() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 8, mb: 6, textAlign: "center", fontFamily: "Trap" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontFamily: "trap", fontWeight: 700 }}
        >
          ABOUT US
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Welcome to Mari’s Balloon Bar! We specialize in creating unique and
          memorable balloon decorations for all kinds of events.
        </Typography>


        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          <Box sx={{ maxWidth: 300 }}>
            <Box
              component="img"
              src="/assets/gallery/bio.jpg"
              alt="Mari"
              sx={{
                width: "100%",
                borderRadius: 2,
                objectFit: "cover",
                boxShadow: 3,
              }}
            />

          </Box>
        </Box>
      </Container>
    </>
  );
}

export default About;

