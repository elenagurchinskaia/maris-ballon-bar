import Navbar from "../components/Navbar";
import InquiryForm from "../components/InquiryForm";

function ContactForm() {
  return (
    <>
      <Navbar />
      <InquiryForm
        heading="CONTACT"
        description={
          <>
            PLEASE FILL OUT THE FORM BELOW TO START PLANNING YOUR EVENT DECOR.
            OUR DESIGN TEAM IS READY TO CREATE EYE-CATCHING BALLOON
            DECORATIONS FOR YOU.
            <br />
            <br />
            Do you have any questions? Send us an email to{" "}
            <b>marisballoonbar@gmail.com</b> or call us at{" "}
            <b>512-825-5833</b>
          </>
        }
      />
    </>
  );
}

export default ContactForm;
