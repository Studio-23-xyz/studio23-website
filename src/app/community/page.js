import React from "react";
import CommunityPageHeroSection from "../components/communitypage/CommunityPageHeroSection";
import CommunityPageGallerySection from "../components/communitypage/CommunityPageGallerySection";
import CommunityPageLinkupSection from "../components/communitypage/CommunityPageLinkupSection";

const page = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <CommunityPageHeroSection />

      {/* Gallery Section */}
      <CommunityPageGallerySection />

      {/* Link Up Section */}
      <CommunityPageLinkupSection />
    </div>
  );
};

export default page;
