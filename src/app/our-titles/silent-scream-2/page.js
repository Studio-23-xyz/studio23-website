"use client";
import ParallaxSection from "@/app/components/silentscream2page/ParallaxSection";
import SS2AboutSection from "@/app/components/silentscream2page/SS2AboutSection";
import SS2ButtonSection from "@/app/components/silentscream2page/SS2ButtonSection";
import SS2CastSection from "@/app/components/silentscream2page/SS2CastSection";
import SS2DirectorSection from "@/app/components/silentscream2page/SS2DirectorSection";
import SS2ItchioSection from "@/app/components/silentscream2page/SS2ItchioSection";
import SS2PitchSection from "@/app/components/silentscream2page/SS2PitchSection";
import SS2Screenshots from "@/app/components/silentscream2page/SS2Screenshots";
import SS2TeamSection from "@/app/components/silentscream2page/SS2TeamSection";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="min-h-screen">
        {/* Hero Banner Section */}
        <ParallaxSection />

        {/* Button Section */}
        <SS2ButtonSection />

        {/* Pitch Section */}
        <SS2PitchSection />

        {/* Director Section */}
        <SS2DirectorSection />

        {/* Cast Section */}
        <SS2CastSection />

        {/* Screenshots Section */}
        <div id="screenshots">
          <SS2Screenshots />
        </div>

        {/* Itchio Section */}
        <SS2ItchioSection />

        {/* Team Member Section */}
        <SS2TeamSection />

        {/* About Section */}
        <SS2AboutSection />
      </div>
    </div>
  );
};

export default Page;
