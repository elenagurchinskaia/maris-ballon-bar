import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar";
import {
  Box,
  Typography,
  Container,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function BookEvent() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Your event has been booked for ${selectedDate.toDateString()}. We will contact you to confirm the details.`
    );
  };

  return (
    <>
      <Navbar />
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          gutterBottom
          sx={{ fontFamily: "trap", fontWeight: 700 }}
        >
          BOOK YOUR EVENT
        </Typography>

        <Typography sx={{ fontFamily: "Trap", mb: 4 }}>
          Please choose your preferred date and we’ll follow up to confirm your event.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box mt={6} sx={{ width: "100%", maxWidth: 800, mx: "auto" }}>
              <iframe
                src="https://app.acuityscheduling.com/schedule.php?owner=37492301"
                title="Schedule Your Event"
                width="100%"
                height="800"
                frameBorder="0"
                style={{ border: "none" }}
              ></iframe>
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#f6d1e3",
                color: "#000",
                fontFamily: "Trap",
                fontWeight: 700,
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "#f1bdd4",
                },
              }}
            >
              Book Event
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
}

export default BookEvent;


