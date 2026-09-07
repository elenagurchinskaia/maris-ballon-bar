import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import InquiryForm from "../components/InquiryForm";
import { Box } from "@mui/material";
import { colors } from "../theme";
import { useDocumentMeta } from "../utils/useDocumentMeta";

function BookEvent() {
  useDocumentMeta(
    "Book Your Event | Mari's Balloon Bar",
    "Book balloon decor, backdrops, event styling, or party rentals for your celebration in Austin, Texas."
  );

  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service");
  const design = searchParams.get("design");

  const preselectedServices = preselectedService ? [preselectedService] : [];
  const prefilledMessage = design
    ? `I'd love to book the "${design}" seasonal design for my event.`
    : "";

  return (
    <Box sx={{ backgroundColor: colors.background }}>
      <Navbar />
      <InquiryForm
        heading="Book Your Event"
        description="Tell us your preferred date and event details below, and we'll follow up within 1-2 business days to confirm availability."
        submitLabel="Request Booking"
        successMessage="Thank you! Your booking request has been sent. We'll be in touch soon to confirm your date."
        preselectedServices={preselectedServices}
        prefilledMessage={prefilledMessage}
      />
    </Box>
  );
}

export default BookEvent;
