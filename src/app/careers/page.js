import React from "react";
import CareersPageHeroSection from "../components/careerspage/CareersPageHeroSection";
import CareersPageGallerySection from "../components/careerspage/CareersPageGallerySection";
import CareersPageJoinUsSection from "../components/careerspage/CareersPageJoinUsSection";
import CareersPageOpeningSection from "../components/careerspage/CareersPageOpeningSection";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CareersPageHeroSection />

      {/* Gallery Section */}
      <CareersPageGallerySection />

      {/* Why Join Us Section */}
      <CareersPageJoinUsSection />

      {/* Openings Section */}
      <CareersPageOpeningSection />
    </div>
  );
};

export default page;
