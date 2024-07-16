import React from "react";
import CommunityPageHeroSection from "../components/communitypage/CommunityPageHeroSection";
import CommunityPageGallerySection from "../components/communitypage/CommunityPageGallerySection";
import CommunityPageJoinOurSection from "../components/communitypage/CommunityPageJoinOurSection";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CommunityPageHeroSection />
      <div className="2xl:mx-60">
        {/* Gallery Section */}
        <CommunityPageJoinOurSection />

        {/* Gallery Section */}
        <CommunityPageGallerySection />
      </div>
    </div>
  );
};

export default page;
