import React from "react";
import CommunityPageHeroSection from "../components/communitypage/CommunityPageHeroSection";
import CommunityPageGallerySection from "../components/communitypage/CommunityPageGallerySection";
import CommunityPageLinkupSection from "../components/communitypage/CommunityPageLinkupSection";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CommunityPageHeroSection />
      <div className="2xl:mx-60">
        {/* Gallery Section */}
        <CommunityPageGallerySection />

        {/* Link Up Section */}
        <CommunityPageLinkupSection />
      </div>
    </div>
  );
};

export default page;
