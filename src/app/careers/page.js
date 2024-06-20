import React from "react";
import CareersPageHeroSection from "../components/careerspage/CareersPageHeroSection";
import CareersPageGallerySection from "../components/careerspage/CareersPageGallerySection";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CareersPageHeroSection />

      {/* Gallery Section */}
      <CareersPageGallerySection />
    </div>
  );
};

export default page;
