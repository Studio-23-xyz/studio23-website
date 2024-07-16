import ContactAddressSection from "../components/contactpage/ContactAddressSection";
import ContactFormSection from "../components/contactpage/ContactFormSection";

import ContactHeroSection from "../components/contactpage/ContactHeroSection";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <ContactHeroSection />

      <div className="mt-12 md:mt-16 mx-6 md:mx-16 2xl:mx-60">
        {/* From Section */}
        <ContactFormSection />

        {/* Address Section */}
        <ContactAddressSection />
      </div>
    </div>
  );
};

export default page;
