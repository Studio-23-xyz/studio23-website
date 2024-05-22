"use client";
import SS2AboutSection from "@/app/components/silentscream2page/SS2AboutSection";
import SS2ButtonSection from "@/app/components/silentscream2page/SS2ButtonSection";
import SS2CastSection from "@/app/components/silentscream2page/SS2CastSection";
import SS2DirectorSection from "@/app/components/silentscream2page/SS2DirectorSection";
import SS2ItchioSection from "@/app/components/silentscream2page/SS2ItchioSection";
import SS2NoticeSection from "@/app/components/silentscream2page/SS2NoticeSection";
import SS2PitchSection from "@/app/components/silentscream2page/SS2PitchSection";
import SS2Screenshots from "@/app/components/silentscream2page/SS2Screenshots";
import SS2TeamSection from "@/app/components/silentscream2page/SS2TeamSection";
import Image from "next/image";

const Test = () => {
  return (
    <div>
      <div className="min-h-screen">
        {/* Hero Banner Scetion */}

        <div className="-z-10 w-full">
          <Image
            src="/assets/silent-scream-2-hero.png"
            width={1440}
            height={969}
            alt="Silent Scream 2 Hero"
            className="hidden md:flex w-full md:h-screen"
          />
          <Image
            src="/assets/silent-scream-2-hero-mb.png"
            width={638}
            height={969}
            alt="Silent Scream 2 Hero"
            className="md:hidden w-full bg-cover"
          />
        </div>

        {/* Button Section */}
        <SS2ButtonSection />

        {/* Pitch Section */}
        <SS2PitchSection />

        {/* Director Section */}
        <SS2DirectorSection />

        {/* Cast Section */}
        <SS2CastSection />

        {/* Cast Section */}
        <SS2Screenshots />

        {/* Notice Section */}
        <SS2ItchioSection />

        {/* Team Member Section */}
        <SS2TeamSection />

        {/* About Section */}
        <SS2AboutSection />
      </div>
    </div>
  );
};

export default Test;
