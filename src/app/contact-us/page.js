import React from "react";
import ContactHeroSection from "../components/contactpage/ContactHeroSection";
import ContactAddressSection from "../components/contactpage/ContactAddressSection";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <ContactHeroSection />
      {/* Address Section */}
      <ContactAddressSection />
    </div>
  );
};

export default page;
