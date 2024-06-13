import React from "react";
import OurTeamHeroSection from "../components/ourteampage/OurTeamHeroSection";
import OurTeamMemberSection from "../components/ourteampage/OurTeamMemberSection";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <OurTeamHeroSection />

      {/* Team Member Section */}
      <OurTeamMemberSection />
    </div>
  );
};

export default page;
