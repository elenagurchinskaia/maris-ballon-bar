import Navbar from "../components/Navbar";
import InquiryForm from "../components/InquiryForm";

function BookEvent() {
  return (
    <>
      <Navbar />
      <InquiryForm
        heading="BOOK YOUR EVENT"
        description="Tell us your preferred date and event details below, and we'll follow up within 1-2 business days to confirm availability."
        submitLabel="Request Booking"
        successMessage="Thank you! Your booking request has been sent. We'll be in touch soon to confirm your date."
      />
    </>
  );
}

export default BookEvent;
