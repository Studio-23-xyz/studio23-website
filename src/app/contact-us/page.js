import ContactAddressSection from "../components/contactpage/ContactAddressSection";
import ContactForm from "../components/contactpage/ContactForm";
import ContactHeroSection from "../components/contactpage/ContactHeroSection";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <ContactHeroSection />
      {/* From Section */}
      <ContactForm/>
      {/* Address Section */}
      <ContactAddressSection />
      
    </div>
  );
};

export default page;
