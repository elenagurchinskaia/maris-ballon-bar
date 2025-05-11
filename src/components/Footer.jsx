import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        mt: 10,
        py: 3,
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ mb: 1 }}>
          <IconButton
            href="https://www.instagram.com/marisballoonbar/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#aaa", mx: 1 }}
          >
            <FaInstagram />
          </IconButton>
          <IconButton
            href="mailto:marisballoonbar@gmail.com"
            sx={{ color: "#aaa", mx: 1 }}
          >
            <FaEnvelope />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ color: "#bbb", fontSize: "0.75rem" }}>
          MARI'S BALLOON BAR © {new Date().getFullYear()} | Austin, Texas | marisballoonbar@gmail.com
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;


